/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc: App页面数据
 */
import { State, StateStore } from "reactjs-store";

export default class AppState extends State {
  public time: StateStore<number> = new StateStore(0);

  onCreate() {
    console.log("AppState ==========> onCreate");
  }

  onShow() {
    console.log("AppState ==========> onShow");
    this.updateTime();
  }

  private updateTime = () => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      this.time.add(Date.now());
      this.updateTime();
    }, 3000);
  }
  
}
