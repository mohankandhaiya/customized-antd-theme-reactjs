import React from "react";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { Avatar } from "antd";
import Post1 from "../../images/post-1.png";

class BlogContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title level={3} className={"blog-content-title"}>
          Sample Blog Post 1
        </Title>
        <Text className={"blog-content-author"}>Mohan Kandhaiya</Text>
        <br />
        <Text type={"secondary"}>24/20/2019 08:00 GMT</Text>
        <Avatar
          className={"blog-content-avatar"}
          shape={"square"}
          src={
            "https://cdn3.wpbeginner.com/wp-content/uploads/2016/11/blogplatforms-180x180.jpg"
          }
        />
        <Text className={"blog-content-article"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </React.Fragment>
    );
  }
}

export default BlogContent;
