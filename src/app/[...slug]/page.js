import { redirect } from 'next/navigation';

// Redirect any unknown route back to the homepage to avoid Vercel 404s
export const dynamic = 'force-static';

export default function CatchAllPage() {
  redirect('/');
}
