/**
 * Author: Meng
 * Date: 2022-07-10
 * Desc: App页面数据
 */
import { Store, StoreState } from "reactjs-store";

export default class AppStore extends Store {
  public time: StoreState<number> = new StoreState(0);

  onCreate() {
    console.log("AppStore ==========> onCreate");
  }

  onShow() {
    console.log("AppStore ==========> onShow");
  }

  private updateTime = () => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      this.time.add(Date.now());
      this.updateTime();
    }, 3000);
  }
  
}
