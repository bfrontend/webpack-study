/*
* @Author: webxmsj
* @Date:   2019-07-06 08:48:14
* @Last Modified by:   webxmsj
* @Last Modified time: 2019-07-06 08:51:20
*/
import React, {Component} from 'react';
import { withPropsAPI } from "gg-editor";

class Save extends Component {

  handleClick = () => {
    const { propsAPI } = this.props;
    console.dir(propsAPI)
    console.log(propsAPI.save());
  }

  render() {
    return (
      <div style={{ padding: 8 }}>
        <button onClick={this.handleClick}>保存</button>
      </div>
    );
  }
}

export default withPropsAPI(Save)
