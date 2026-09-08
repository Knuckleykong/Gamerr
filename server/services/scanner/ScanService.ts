import { LibraryScanner } from './LibraryScanner';

export class ScanService {
  private scanner = new LibraryScanner();

  async scan(path: string) {
    console.log(`Scanning ${path}`);

    const games = await this.scanner.scanLibrary(path);

    console.log(`Found ${games.length} games`);

    return games;
  }
}
