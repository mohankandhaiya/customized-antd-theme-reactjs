import React, { Component } from 'react'
import { Card, Rate, Tag, Modal, Button, Form, Input, Radio } from 'antd';

class ProductForm extends React.Component {
    state = {
        modal2Visible: false,
    };

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Button type="primary" onClick={() => this.setModal2Visible(true)}>
                    Vertically centered modal dialog
                </Button>
                <Modal
                    title="Vertically centered modal dialog"
                    centered
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                >
                    <Form layout="vertical" onSubmit={this.handleSubmit}>
                        <Form.Item label="Title">
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: 'Please input the title of collection!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Description">
                            {getFieldDecorator('description')(<Input type="textarea" />)}
                        </Form.Item>
                        <Form.Item className="collection-create-form_last-form-item">
                            {getFieldDecorator('modifier', {
                                initialValue: 'public',
                            })(
                                <Radio.Group>
                                    <Radio value="public">Public</Radio>
                                    <Radio value="private">Private</Radio>
                                </Radio.Group>,
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}

const CardModal = Form.create({ name: 'product_card' })(ProductForm);

export default CardModal