import React, { useContext } from 'react';
import moment from 'moment';
import { context } from '../../App';
import { Form, Input, Button, DatePicker, Alert } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const InputForm = () => {

    const Context = useContext(context);
    const [success, setSuccess ] = React.useState(0);

    const onFinish = (values ) => {
        const start = moment(values.start).format("YYYY-MM-DD");
        const end = moment(values.end).format("YYYY-MM-DD");

        const body = {
            id : values.id,
            name : values.name,
            start :start,
            end : end,
            progress : values.progress
        }

        Context.timelineDispatch({type : "add", payload : body });
        
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        },[5000]);

        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo ) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ display : "flex", justifyContent : "center", marginTop : 20}}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item
                    label="ID"
                    name="id"
                    rules={[{ required: true, message: 'Please input id!' }]}>
                    <Input style={{ width : "30em"}}/>
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input name!' }]}>
                    <Input style={{ width : "30em"}} />
                </Form.Item>
                <Form.Item
                    label="Start Date"
                    name="start"
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="End Date"
                    name="end"
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="Progress"
                    name="progress"
                    rules={[{ required: true, message: 'Please input progress!' }]}>
                    <Input style={{ width : "30em"}} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Create a Entry
                    </Button>
                </Form.Item>
                {success && <Alert type="success" message="Timeline added!"/>}
            </Form>
        
        </div>
    )
}

export default InputForm
