
import { redirect } from 'next/navigation';

export default function HomePage() {
  // The gallery has been removed, so we redirect to the create page.
  redirect('/create');
}
