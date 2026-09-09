export class SetupController {
  async getSetup(): Promise<string> {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Gamerr Setup</title>
        </head>

        <body>
          <h1>Welcome to Gamerr</h1>

          <p>
            Gamerr has not been configured.
          </p>

          <button>
            Begin Setup
          </button>
        </body>
      </html>
    `;
  }
}
