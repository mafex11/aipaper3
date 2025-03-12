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
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'http://localhost:3000', // Replace with your site URL
        'X-Title': 'AI Paper Editor', // Replace with your site name
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-r1-distill-llama-70b:free', // Correct model name
        messages: [
          {
            role: 'system',
            content: 'You are a writer, based on the given prompt you have to rewrite the text. do not write anything other than the output of the prompt. also do not answer anything out of the context',
          },
          {
            role: 'user',
            content: `Rewrite the following text to make it ${prompt}: ${selectedText}`,
          },
        ],
      }),
    });

    console.log('OpenRouter API response status:', response.status);

    // Log the raw response text
    const rawResponseText = await response.text();
    // console.log('Raw OpenRouter API response:', rawResponseText);

    if (!response.ok) {
      console.error('OpenRouter API error:', rawResponseText);
      throw new Error(`OpenRouter API error: ${rawResponseText}`);
    }

    // Parse the JSON response
    const data = JSON.parse(rawResponseText);
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