import React, {useState} from 'react';
import style from './LoginPage.module.css';
import logo from '../../images/logo_main.png';
import { Form, Input, Button, Image, Space, Typography, Alert } from 'antd';
import { checkIsAdmin, checkUserInDB } from '../../utils/index';
import { LoginCheck } from '../../interfaces';
import { useNavigate } from 'react-router-dom'
import { useStore } from 'effector-react'
import { $users, $isAdminRole } from '../../store/users/index'

const { Title } = Typography;

export const LoginPage = () => {
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()
  const users = useStore($users)

  const handleFinish = (values: LoginCheck) => {
    if (checkIsAdmin({...values})) {
      navigate('/admin')
    }
    if (checkUserInDB(users, {...values})) {
      navigate('/user')
    }
    setIsError(true);
  }

  const handleFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={style._}>
      <Space direction="vertical" align="center" size="large" >
        <div className={style.logoContainer}>
          <Image
            width={100}
            src={logo}
            preview={false}
            alt="more bread logo"
          />
          <Title level={3}>Больше хлеба</Title>
        </div>
        {isError && <Alert message="Неправильный логин или пароль" type="error" />}
        <Form
          name="basic"
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
          autoComplete="off"
          labelAlign="left"
        >
          <Form.Item
            label="Пользователь"
            name="username"
            rules={[{ required: true, message: 'Введите имя пользователя!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Введите пароль!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
};
