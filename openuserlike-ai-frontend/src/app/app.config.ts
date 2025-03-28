import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';

const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection()],
};

export default appConfig;
