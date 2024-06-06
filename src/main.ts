import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Usa el nuevo módulo

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
