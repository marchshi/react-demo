import Immutable from 'immutable';
import {msg, Store} from 'iflux';
import Main from './index'

/**
 * appStore iflux中用来存储数据的数据结构
 */
let appStore = Store({

    countGoods:"",
    totalPrice:"",

    goodsList:[
      {
        goodsName:"",
        num:"",
        price:""
      }
    ],

    other:""

  }
);
export default appStore;

/**
 * msg.on设置监听器
 */
msg.on("main:init",init);
msg.on("main:reset",reset);

function init(){
    appStore.reset();
    appStore.cursor().withMutations((cursor)=>{
      cursor.set("countGoods",0);
      cursor.set("totalPrice",0);
      cursor.setIn(["goodsList",0,"goodsName"],"西瓜");
      cursor.setIn(["goodsList",0,"num"],0);
      cursor.setIn(["goodsList",0,"price"],20);
      cursor.setIn(["goodsList",1,"goodsName"],"苹果");
      cursor.setIn(["goodsList",0,"num"],0);
      cursor.setIn(["goodsList",0,"price"],5);
      cursor.setIn(["goodsList",2,"goodsName"],"菠萝");
      cursor.setIn(["goodsList",0,"num"],0);
      cursor.setIn(["goodsList",0,"price"],10);
    })
}

function reset(id,name,className){
    appStore.reset();
    console.log("========className=========",className);
    className = Immutable.fromJS(className);
    appStore.cursor().withMutations((cursor)=>{
        cursor.set("id",id);
        cursor.set("name",name);
        cursor.set("className",className);
    })
    //向index发送一个状态变化的请求
    let m = new Main();
    m.context = "111"
    console.log(m)
    m.testFunction();
    console.log(new Main())
}