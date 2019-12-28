import React from "react";
import {Card, Icon, Avatar, Typography, Button} from 'antd';
import Post1 from '../../images/post-1.png';

const { Title, Text } = Typography;
const { Meta } = Card;

class BlogCard extends React.Component{

    render() {
        return (
            <Card>
                <div className={'blog-card'}>
                <Avatar className={'blog-card-avatar'} shape={'square'} src= {'https://cdn3.wpbeginner.com/wp-content/uploads/2016/11/blogplatforms-180x180.jpg'} />
                <div className={'blog-card-content'} >
                    <Title level={2}>Sample Blog Post 1</Title>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                </div>
                </div>
                <Button type={'primary'} className={'blog-card-button'}>Read More...</Button>
            </Card>
        )
    }
}

export default BlogCard