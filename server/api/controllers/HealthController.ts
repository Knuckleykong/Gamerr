export class HealthController {
  async getHealth() {
    return {
      status: 'healthy',
    };
  }
}
