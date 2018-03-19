import React,{Component} from 'react';
import {msg, connectToStore} from 'iflux';
import appStore from './store';

import goodsOrder from './component/goodsOrder';


class Main extends Component{

    componentWillMount(){
        msg.emit("main:init");
    }

    render() {
      let data = appStore.data();
      let that = this;
      return (
        <div>
          <goodsOrder goodsList={data.get("goodsList")}  goodsChange={that._goodsChange} />
          <div>
            已选择 {data.get("countGoods")} 件商品，共 {data.get("totalPrice")} 元。
          </div>
        </div>
      )
    }

    _goodsChange(countGoods,totalPrice){

      appStore.cursor().withMutations( cursor =>{
        cursor.set("countGoods",countGoods);
        cursor.set("totalPrice",totalPrice);
      })
    }

}
export default connectToStore(appStore,true)(Main)