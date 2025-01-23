import Link from 'next/link';
import { Button, EditButton } from '@packages/ui-lib';
 

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Button></Button>
      <EditButton></EditButton>
    </div>
  );
}
