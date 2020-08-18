import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CandlestickChartComponent } from './components/candlestick-chart/candlestick-chart.component';
import { BmiChartComponent } from './components/bmi-chart/bmi-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CandlestickChartComponent,
    BmiChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
