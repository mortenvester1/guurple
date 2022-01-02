import React, {Component} from 'react'
import videoService from "../services/video.js";
import { Table } from 'antd';
import {
  PlayCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';


class VideoLib extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paginationPosition: 'bottomLeft',
      directory: this.props.directory,
      data: [],
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text, record, index) => <a>{text}</a>,
          onCell: (record, index) => { onClick: event => {console.log("asds")}}
        },
        {
          title: 'Path',
          dataIndex: 'path',
          key: 'path',
        },
        {
          title: '',
          dataIndex: 'isDir',
          key: 'isDir',
          render: value => value ? <PlusCircleOutlined/> : <PlayCircleOutlined/>
        },
      ]
    }
  }

  async handleClickOnName(record) {
    console.log('[containers/VideoLib] handleClickOnName')
    console.log(record)
  }

  async componentDidMount() {
    console.log('[containers/VideoLib] componentDidMount entry')
    try {
      const res = await videoService.getVideoLib("/")
      this.setState((state, props) => {
        return { data: res.result.files, directory: res.result.rootDir };
      });
    } catch (error) {
      console.log('[containers/VideoLib] componentDidMount error', error);
    }
  }

  render() {
    return (
      <Table
        columns={this.state.columns}
        dataSource={this.state.data}
        pagination={{ position: [this.state.paginationPosition] }}
      />
    )
  }
}

export default VideoLib;
