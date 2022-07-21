/**
 * Create By: Meng
 * Create Date: 2022-07-10
 * Desc: 
 */
import {Store, StoreState} from 'reactjs-store';

export default class HomeStore extends Store {
  public itemList = new StoreState(0);
}