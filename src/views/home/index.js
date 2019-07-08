import React, {Component} from 'react';
import {connect} from 'dva';
import './index.less';

@connect(state => ({home: state.home}))
class Home extends Component {

  render() {
    return (
      <div>这里是首页</div>
    );
  }
}

export default Home;
