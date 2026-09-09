import { HttpRequestContext } from '../HttpRequestContext';
import { HttpResponse } from '../HttpResponse';
import { HttpResponseFactory } from '../HttpResponseFactory';

import { SettingsService } from '../../services/settings/SettingsService';
import { SettingsConstants } from '../../constants/SettingsConstants';

export class LibrarySetupController {
  private settingsService =
    new SettingsService();

  async saveLibraryPath(
    context: HttpRequestContext
  ): Promise<HttpResponse> {
    const body = context.body ?? '';

    const params = new URLSearchParams(body);

    const libraryPath =
      params.get('libraryPath') ?? '';

    const result =
      await this.settingsService.setValue(
        SettingsConstants.LibraryPaths,
        libraryPath
      );

    if (!result.success) {
      return HttpResponseFactory.html(`
<!DOCTYPE html>
<html>
  <body>
    <h1>Error</h1>
    <p>
      Failed to save library path.
    </p>
  </body>
</html>
      `);
    }

    return HttpResponseFactory.html(`
<!DOCTYPE html>
<html>
  <head>
    <meta
      http-equiv="refresh"
      content="0;url=/setup/metadata"
    />
  </head>

  <body>
    Redirecting...
  </body>
</html>
    `);
  }
}
