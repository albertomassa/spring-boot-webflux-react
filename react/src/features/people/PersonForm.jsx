import React from 'react'
import { Form, Input, Button } from 'antd'

import { useDispatch } from 'react-redux'
import { addPerson } from '../../redux/people/peopleSlice'

const PersonForm = () => {
  const dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch(addPerson(values))
  }
  return (
    <Form
      onFinish={onFinish}>
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: 'name',
          },]} >
        <Input />
      </Form.Item>

      <Form.Item
        label="surname"
        name="surname"
        rules={[
          {
            required: true,
            message: 'surname',
          },]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          save
        </Button>
      </Form.Item>
    </Form>
  )}

export default PersonForm