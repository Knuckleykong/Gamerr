import { Game } from '../../types/Game';

export interface GamesResponse {
  games: Game[];
  count: number;
}
