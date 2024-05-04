import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select
  } from 'antd'
  import { PlusOutlined } from '@ant-design/icons'
  import { Link } from 'react-router-dom'
  import './index.scss'
import { useEffect, useState } from 'react'
import { createArticleAPI, getChannelAPI } from '@/apis/article'
  
  const { Option } = Select
  
  const Publish = () => {
    //定义一个存放频道列表的函数
    const [channelList,setChanelList] = useState([])
    //在副作用钩子中请求列表
    useEffect(() => {
        getChannelList()
    },[])

    /**定义一个请求列表的函数在副作用函数中调用 */
    const getChannelList = async () => {
        const res = await getChannelAPI()
        setChanelList(res.data.channels)
    }

    /**定义一个函数用来收集表单数据 */
    const onFinish = (fromData) => {
        console.log(fromData);
        const {title,content,channel_id} = fromData
        const data = {
            title,
            content,
            cover: {
                type: 0, // 封面模式
                // 这里的url处理逻辑只是在新增时候的逻辑
                // 编辑的时候需要做处理
                images: []
                // 图片列表
            },
            channel_id
        }
        createArticleAPI(data)
    }

    /**定义一个存放图片的setData */
    const [imageList, setImageList] = useState([])
    /**定义上传图片的函数 */
    const onUploadChange = (info) => {
        console.log('正在上传中',info);
        setImageList(info.fileList)
    }
    return (
      <div className="publish">
        <Card
          title={
            <Breadcrumb items={[
              { title: <Link to={'/'}>首页</Link> },
              { title: '发布文章' },
            ]}
            />
          }
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ type: 1 }}
            onFinish = {onFinish}
          >
            <Form.Item
              label="标题"
              name="title"
              rules={[{ required: true, message: '请输入文章标题' }]}
            >
              <Input placeholder="请输入文章标题" style={{ width: 400 }} />
            </Form.Item>
            <Form.Item
              label="频道"
              name="channel_id"
              rules={[{ required: true, message: '请选择文章频道' }]}
            >
              <Select placeholder="请选择文章频道" style={{ width: 400 }}>
                {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option> )}
              </Select>
            </Form.Item>
            <Form.Item label="封面">
            <Form.Item name="type">
                <Radio.Group>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
                </Radio.Group>
            </Form.Item>
            <Upload
                listType="picture-card"
                showUploadList
                name="image"
                action={'http://geek.itheima.net/v1_0/upload'}
                onChange={onUploadChange}
            >
                <div style={{ marginTop: 8 }}>
                <PlusOutlined />
                </div>
            </Upload>
            </Form.Item>
            <Form.Item
              label="内容"
              name="content"
              rules={[{ required: true, message: '请输入文章内容' }]}
            >
                <ReactQuill
                className="publish-quill"
                theme="snow"
                placeholder="请输入文章内容"
                />
            </Form.Item>
  
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Space>
                <Button size="large" type="primary" htmlType="submit">
                  发布文章
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
  
  export default Publish