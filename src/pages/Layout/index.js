import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserInfo, clearUserIfo } from '@/store/moudels/user'
const { Header, Sider } = Layout

const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
    key: '/publish',
    icon: <EditOutlined />,
  },
]
const GeekLayout = () => {
    //引入跳转
    const navigate = useNavigate()
    //按钮点击事件
    const onMenuClick = (item) => {
        console.log(item);
        const path = item.key
        console.log(path);
        navigate(path)
    }
    //获取当前路径地址
    const location = useLocation()
    console.log('location',location);
    const selectedKey = location.pathname
    //请求用户信息
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserInfo())
    },[dispatch])
    //获取用户信息
    const name = useSelector(state => state.user.useInfo.name)
    console.log('11111',name);
    //清除用户信息
    const onConfirm = () => {
        console.log('清楚用户信息');
        dispatch(clearUserIfo())
        navigate('/login')
    }
    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
          <div className="user-info">
            <span className="user-name">{name}</span>
            <span className="user-logout">
              <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onConfirm}>
                <LogoutOutlined /> 退出
              </Popconfirm>
            </span>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={selectedKey}
              items={items}
              onClick={(items) => {onMenuClick(items)}}
              style={{ height: '100%', borderRight: 0 }}></Menu>
          </Sider>
          <Layout className="layout-content" style={{ padding: 20 }}>
            <Outlet/>
          </Layout>
        </Layout>
      </Layout>
    )
}
export default GeekLayout