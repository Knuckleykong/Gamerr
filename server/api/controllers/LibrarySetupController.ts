import { HttpRequestContext } from '../HttpRequestContext';
import { HttpResponse } from '../HttpResponse';
import { HttpResponseFactory } from '../HttpResponseFactory';

export class LibrarySetupController {
  async saveLibraryPath(
    context: HttpRequestContext
  ): Promise<HttpResponse> {
    return HttpResponseFactory.html(`
<!DOCTYPE html>
<html>
  <head>
    <title>Library Path Received</title>
  </head>

  <body>
    <h1>Library Path Received</h1>

    <pre>${context.body ?? 'No body received'}</pre>

    <p>
      <button
        onclick="window.location.href='/setup/metadata'">
        Continue
      </button>
    </p>
  </body>
</html>
    `);
  }
}
