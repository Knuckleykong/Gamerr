import prisma from '../database/client';
import { RepositoryResult } from './RepositoryResult';

export class SettingRepository {
  async getByKey(
    key: string
  ): Promise<RepositoryResult<any>> {
    try {
      const setting = await prisma.setting.findUnique({
        where: { key },
      });

      if (!setting) {
        return {
          success: false,
          error: 'Setting not found',
        };
      }

      return {
        success: true,
        data: setting,
      };
    } catch (error) {
      return {
        success: false,
        error: String(error),
      };
    }
  }
}
