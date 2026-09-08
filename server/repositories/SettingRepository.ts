import prisma from '../database/client';

export class SettingRepository {
  async getByKey(key: string) {
    return prisma.setting.findUnique({
      where: { key },
    });
  }

  async setValue(key: string, value: string) {}
}
