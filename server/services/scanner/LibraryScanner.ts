import fs from 'fs/promises';
import path from 'path';

import { ROM_EXTENSIONS } from './RomExtensions';

export interface ScannedGame {
  title: string;
  platform: string;
  path: string;
  fileSize: number;
}

export class LibraryScanner {
  async scanLibrary(rootPath: string): Promise<ScannedGame[]> {
    const results: ScannedGame[] = [];

    const platforms = await fs.readdir(rootPath, {
      withFileTypes: true,
    });

    for (const platform of platforms) {
      if (!platform.isDirectory()) {
        continue;
      }

      const platformPath = path.join(rootPath, platform.name);

      const games = await this.scanPlatform(
        platform.name,
        platformPath
      );

      results.push(...games);
    }

    return results;
  }

  private async scanPlatform(
    platform: string,
    platformPath: string
  ): Promise<ScannedGame[]> {
    const games: ScannedGame[] = [];

    const files = await fs.readdir(platformPath, {
      withFileTypes: true,
    });

    for (const file of files) {
      if (!file.isFile()) {
        continue;
      }

      const extension = path.extname(
        file.name
      ).toLowerCase();

      if (!ROM_EXTENSIONS.includes(extension)) {
        continue;
      }

      const fullPath = path.join(
        platformPath,
        file.name
      );

      const stats = await fs.stat(fullPath);

      games.push({
        title: path.parse(file.name).name,
        platform,
        path: fullPath,
        fileSize: stats.size,
      });
    }

    return games;
  }
}
