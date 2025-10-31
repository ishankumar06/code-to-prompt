// import { NextResponse } from 'next/server';
// import { explainCodeWithOpenAI } from '../../../lib/openai';

// export async function POST(request) {
//   const { code, language, task } = await request.json();
//   let prompt = '';

//   if (task === 'comments') {
//     prompt = `Add explanatory comments to this ${language} code:\n\n${code}`;
//   } else {
//     prompt = `Explain this ${language} code and analyze its time and space complexity:\n\n${code}`;
//   }

//   try {
//     const explanation = await explainCodeWithOpenAI(prompt);
//     return NextResponse.json({ explanation });
//   } catch (err) {
//     console.error("🔥 API /api/explain error:", err?.response?.data || err.message || err);
//     return NextResponse.json(
//       { explanation: `Error: ${err?.response?.data?.error?.message || err.message}` },
//       { status: 500 }
//     );
//   }
// }





// /app/api/explain/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { code, language, task, languageOutput } = await req.json();

  try {
    const prompt = `
You are an AI code assistant.
Task: ${task === 'explain' ? 'Explain this code' : 'Add helpful comments'}.
Language: ${language}.
Output Language: ${languageOutput}.
Code:
${code}
`;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      explanation: data.choices?.[0]?.message?.content || 'No response from AI.',
    });
  } catch (error) {
    console.error('🔥 API /api/explain error:', error);
    return NextResponse.json({ error: 'Failed to fetch explanation.' }, { status: 500 });
  }
}
