import { Application } from './bootstrap/Application';

async function main() {
  const app = new Application();

  await app.start();
}

main();
