import { ScanSummaryConstants } from '../constants/ScanSummaryConstants';

export interface ScanSummary {
  totalGames: number;
  totalPlatforms: number;
  scannedPaths: number;

  newGames: number;
  skippedGames: number;
}

export const DefaultScanSummary: ScanSummary = {
  totalGames: ScanSummaryConstants.NoGamesFound,
  totalPlatforms: 0,
  scannedPaths: 0,
  newGames: 0,
  skippedGames: 0,
};
