import React,{Component} from 'react';


class Main extends Component{

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillMount(){

  }

  render() {
    let goodsList = this.props.goodsList;
    return (
      <div>

        <goods-oder goodsList={data.get("goodsList")} />
      </div>
    )
  }


}
export default Main