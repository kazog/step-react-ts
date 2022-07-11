/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc:
 */
import { State, StateStore } from "reactjs-store";

export default class AppState implements State {
  public time: StateStore<number> = new StateStore(0);

  onCreate() {
    console.log("AppState ==========> onCreate");
  }

  onShow() {
    console.log("AppState ==========> onShow");
    const timer = setTimeout(() => {
      clearTimeout(timer);
      this.time.add(Date.now());
    }, 3000);
  }
}
