/**
 * Author: Meng
 * Date: 2022-07-10
 * Desc: 
 */
import {Store, StoreState} from 'reactjs-store';
import {getHotPhotos} from '../../../modules/api/pexels'

export default class HomeStore extends Store {
  public itemList = new StoreState([]);

  public onShow() {
    console.log('============>HomeStore')
    this._queryPhotos();
  }

  public async _queryPhotos() {
    const {code, data} = await getHotPhotos();

  }
}