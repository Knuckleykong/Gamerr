import { LibraryScanner } from './LibraryScanner';
import { ScanSummary } from '../../types/ScanSummary';
import { ScannedGame } from '../../types/ScannedGame';
import { GameRepository } from '../../repositories/GameRepository';

export class ScanService {
  private scanner = new LibraryScanner();
  private gameRepository = new GameRepository();

  async scan(paths: string[]): Promise<ScanSummary> {
    const allGames: ScannedGame[] = [];

    let newGames = 0;
    let skippedGames = 0;

    for (const path of paths) {
      console.log(`Scanning ${path}`);

      const games = await this.scanner.scanLibrary(path);

      console.log(`Found ${games.length} games`);

      allGames.push(...games);

      for (const game of games) {
        const existingGame =
          await this.gameRepository.getByPath(
            game.path
          );

        if (existingGame.success) {
          skippedGames++;
          continue;
        }

        const result =
          await this.gameRepository.create({
            title: game.title,
            platform: game.platform,
            path: game.path,
            fileSize: BigInt(game.fileSize),
          });

        if (result.success) {
          newGames++;
        }
      }
    }

    const platforms = new Set(
      allGames.map((game) => game.platform)
    );

    return {
      totalGames: allGames.length,
      totalPlatforms: platforms.size,
      scannedPaths: paths.length,
      newGames,
      skippedGames,
    };
  }
}
