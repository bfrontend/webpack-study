/*
* @Author: webxmsj
* @Date:   2019-07-06 09:03:00
* @Last Modified by:   webxmsj
* @Last Modified time: 2019-07-11 09:30:53
*/
import React, {Component} from 'react';
import {withPropsAPI} from "gg-editor";
import {Button, Upload, Icon} from 'antd';
const ButtonGroup = Button.Group;

import reorganize from '@/utils/mdLoader'

class Save extends Component {

  handleSave = () => {
    const {propsAPI} = this.props
    console.log(propsAPI.save().roots)
  }

  handleRefresh = () => {
    const {propsAPI} = this.props
    // propsAPI.read({
    //   roots: [{
    //     label: 'asdf'
    //   }]
    // })
  }

  handleLocation = () => {
    const {propsAPI} = this.props
    console.log(propsAPI.getSelected())
  }

  transformFile = async e => {
    const {propsAPI} = this.props
    if (e.size > 0 && e.type === 'text/markdown') {
      const text = await e.text()
      const a = reorganize(text)
      propsAPI.read({
        roots: a
      })
    }
    return false;
  }

  render() {
    return (
      <div className='toolbar-container'>
        <ButtonGroup>
          <Button type="primary" icon="save" onClick={this.handleSave} />
          <Button type="primary" icon="sync" onClick={this.handleRefresh} />
          <Button type="primary" onClick={this.handleUpdate}>搜索</Button>
          <Button type="primary" onClick={this.handleLocation}>定位</Button>
          <Button type="primary" onClick={this.handleUpdate}>还原</Button>
          <Button type="primary" onClick={this.handleLocation}>撤销</Button>
          <Upload beforeUpload={this.transformFile} showUploadList={false}>
            <Button>
              <Icon type="upload" /> 上传
            </Button>
          </Upload>
        </ButtonGroup>
      </div>
    );
  }
}

export default withPropsAPI(Save)
