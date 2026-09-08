import { LibraryScanner } from './LibraryScanner';
import { ScanSummary } from '../../types/ScanSummary';
import { ScannedGame } from '../../types/ScannedGame';

export class ScanService {
  private scanner = new LibraryScanner();

  async scan(paths: string[]): Promise<ScanSummary> {
    const allGames: ScannedGame[] = [];

    for (const path of paths) {
      console.log(`Scanning ${path}`);

      const games = await this.scanner.scanLibrary(path);

      console.log(`Found ${games.length} games`);

      allGames.push(...games);
    }

    const platforms = new Set(
      allGames.map((game) => game.platform)
    );

    return {
      totalGames: allGames.length,
      totalPlatforms: platforms.size,
      scannedPaths: paths.length,
    };
  }
}
