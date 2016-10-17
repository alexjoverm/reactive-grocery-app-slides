// 9/ Codigo minimo para ejecutar una app en angular 2
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

// Bootstrapeamos el modulo
platformBrowserDynamic().bootstrapModule(AppModule)