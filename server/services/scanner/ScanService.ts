import { LibraryScanner } from './LibraryScanner';
import { GameService } from '../GameService';

export class ScanService {
  private scanner = new LibraryScanner();
  private gameService = new GameService();

  async scanLibrary(path: string) {
    const games = await this.scanner.scanLibrary(path);

    return games;
  }
}
