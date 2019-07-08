import GGEditor, { Mind, withPropsAPI } from 'gg-editor';
import React, {Component} from 'react';
import { Col, Row } from 'antd';
import styles from './index.less'

import Toolbar from "./toolbar";

const data = {
  roots: [{
    label: '中心主题',
    children: [{
      label: '分支主题 1',
    }, {
      label: '分支主题 2',
    }, {
      label: '分支主题 3',
      children: [{
        label: '你好',
        href: 'http://www.baidu.com'
      }]
    }],
  }],
};

class GgEditor extends Component {
  constructor(props) {
    super(props);
  }

  handleNodeClick(e) {
    const { model } = e.item;
    console.log(model)
  }

  render() {
    return (
      <GGEditor className='editor-container'>
        <Mind
          className='editor'
          data={data}
          onNodeClick={this.handleNodeClick}
        />
        <Toolbar />
      </GGEditor>
    )
  }
}

export default GgEditor;
