import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { XEyeCrmAppModule } from './app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(XEyeCrmAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
