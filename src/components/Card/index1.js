import React, { Component } from 'react'
import {Card, Rate, Tag} from 'antd';
import Text from "antd/es/typography/Text";

const { Meta } = Card;

class CustomCard extends Component {
    render() {
        return (
            <Card
                hoverable
                style={{ width: 200 }}
                cover={<img src={'https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg'} />}
            >
                <Text>Redmi 7A (Matte Gold, 16 GB)  (2 GB RAM)</Text>
                <br />
                <Rate value="4.5" style={{ fontSize: 13 }} allowHalf />
                <br />
                <Text className="bold space"> &#8377;250 </Text> <Text delete className="bold space"> &#8377;300</Text> <Tag type="primary" className="bold space">15% OFF</Tag>
                <br />
            </Card>
        )
    }
}

export default CustomCard