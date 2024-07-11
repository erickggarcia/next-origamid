import ServerFetch from '@/components/server-fetch';
import fs from 'node:fs/promises'

export default async function HomePage() {

  await fs.appendFile('acesso.txt', `${Date.now()} `, 'utf-8')

  return (
    <main>
      <h1>Home</h1>
      <ServerFetch/>
    </main>
  );
}
