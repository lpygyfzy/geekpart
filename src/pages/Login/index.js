import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import { message } from 'antd'
import logo from '@/assets/logo.png'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/store/moudels/user'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  //引入跳转
  const navgate = useNavigate()
  //导入dispatch
  const dispatch = useDispatch()
  const onFinish = async (formValue) => {
    console.log(formValue)
    await dispatch(fetchLogin(formValue))
    navgate('/')
    message.success('登录成功')
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form validateTrigger={['onBlur']} onFinish={ onFinish }>
          <Form.Item 
          name="mobile"
          rules={[
            { required: true, message: '请输入手机号' },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: '手机号码格式不对'
            }
          ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
          name="code"
          rules={[
            { required: true, message: '请输入验证码' },
            {len: 6,message: '请输入6位数验证码'}
          ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login