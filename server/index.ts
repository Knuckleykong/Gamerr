import { Application } from './bootstrap/Application';

async function main() {
  try {
    const app = new Application();

    await app.start();
  } catch (error) {
    console.error('Failed to start Gamerr', error);
    process.exit(1);
  }
}

main();
