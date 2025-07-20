import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DiskList } from './disk-list/disk-list';

import { FormsModule } from '@angular/forms';
import { BreweryAbout } from './brewery-about/brewery-about';
import { BreweryDisks } from './brewery-disks/brewery-disks';
import { Cart } from './cart/cart';
import { InputInteger } from './input-integer/input-integer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    DiskList,
    BreweryAbout,
    BreweryDisks,
    Cart,
    InputInteger
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
