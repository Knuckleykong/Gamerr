import prisma from '../database/client';
import { Setting } from '../types/Setting';
import { RepositoryResult } from './RepositoryResult';

export class SettingRepository {
  async getByKey(
    key: string
  ): Promise<RepositoryResult<Setting>> {
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

  async setValue(
    key: string,
    value: string
  ): Promise<RepositoryResult<Setting>> {
    try {
      const setting = await prisma.setting.upsert({
        where: { key },
        update: {
          value,
        },
        create: {
          key,
          value,
        },
      });

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
