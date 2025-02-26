import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';
  const supabase = await createClient();
  console.log('Received request for callback', { code, next });  // Agrega un log

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    console.log(error);
    if (!error) {
      console.log('Code exchange successful, redirecting to', `${origin}/`);
      return NextResponse.redirect(`${origin}${next}`);
    } else {
      console.error('Error during code exchange:', error.message);  // Log para error
    }
  } else {
    console.error('No code found in the request');
  }

  // Redirige a la página de error si no se pudo obtener el código
  return NextResponse.redirect(`${origin}/`);
}
