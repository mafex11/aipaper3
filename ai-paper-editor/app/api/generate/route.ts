import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log('Received request to /api/generate');

  try {
    const { prompt, selectedText } = await request.json();
    console.log('Request body:', { prompt, selectedText });

    if (!prompt || !selectedText) {
      console.error('Prompt or selected text is missing');
      return NextResponse.json(
        { error: 'Prompt and selected text are required.' },
        { status: 400 }
      );
    }

    console.log('Calling OpenRouter API...');
    const response = await fetch('https://openrouter.ai/api/v1/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-ai/deepseek-r1-zero', // Use DeepSeek R1 Zero model
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI that rewrites text based on user instructions.',
          },
          {
            role: 'user',
            content: `Rewrite the following text to make it ${prompt}: ${selectedText}`,
          },
        ],
      }),
    });

    console.log('OpenRouter API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter API error:', errorText);
      throw new Error(`OpenRouter API error: ${errorText}`);
    }

    const data = await response.json();
    console.log('OpenRouter API response data:', data);

    const output = data.choices[0].message.content;
    console.log('Generated output:', output);

    return NextResponse.json({ output });
  } catch (error) {
    console.error('Error in /api/generate:', error);
    return NextResponse.json(
      { error: 'Failed to generate output. Please try again.' },
      { status: 500 }
    );
  }
}