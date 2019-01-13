import { BrowserModule } from "@angular/platform-browser";
import { NgModule, isDevMode } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgRedux, NgReduxModule, DevToolsExtension } from "ng2-redux";

import { AppComponent } from "./app.component";
import { TodoDashboardComponent } from "./todo-dashboard/todo-dashboard.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { IAppState, rootReducer, INITIAL_STATE } from "./store";

@NgModule({
  declarations: [AppComponent, TodoDashboardComponent, TodoListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    let enhancers = isDevMode ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
