import axios from 'axios';

export async function explainCodeWithOpenAI(prompt) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    throw new Error('Missing OPENROUTER_API_KEY in environment variables.');
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'gpt-4o-mini', // you can also use gpt-4-turbo or mistral-large
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.5,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000', // 🔥 REQUIRED
          'X-Title': 'AI Code Explainer', // optional, helps OpenRouter identify your app
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      '🔥 OpenRouter request failed:',
      error.response?.data || error.message
    );
    throw new Error('OpenRouter request failed.');
  }
}
