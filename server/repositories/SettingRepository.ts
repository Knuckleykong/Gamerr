import prisma from '../database/client';

export class SettingRepository {
  async getByKey(key: string) {}

  async setValue(key: string, value: string) {}
}
