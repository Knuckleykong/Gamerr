export interface Game {
  id: number;
  title: string;
  platform: string;
  path: string;
  fileSize?: bigint | null;
  createdAt: Date;
  updatedAt: Date;
}
