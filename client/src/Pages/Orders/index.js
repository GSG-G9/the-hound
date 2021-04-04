import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Typography, Rate, Input } from 'antd';

import Button from '../../Components/Button';

import './style.css';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

function Orders({
  username,
  coverImage,
  userAvatar,
  professionTitle,
  ratings,
  location,
  mobile,
  price,
}) {
  const [rateValue, setRateValue] = useState(2.5);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (value) => {
    setRateValue(value);
    setIsLoading(true);
  };

  return (
    <Row className="Orders" gutter={[16, 16]}>
      <Col
        className="bg-image"
        style={{
          backgroundImage: `url(${coverImage})`,
        }}
        span="24"
      ></Col>
      <Col span={24}>
        <Row className="Orders-card">
          <Col xs={24} sm={24} md={8}>
            <div
              className="image-container"
              style={{
                backgroundImage: `url(${userAvatar})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <Text value={5}>{username}</Text>
            </div>
          </Col>
          <Col xm={24} md={16} className="Orders-card__details">
            <Row align="middle">
              <Title level={5}>{professionTitle}</Title>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={12}>
                <span className="label-text label-text__rating label-text__emp">
                  {rateValue}
                </span>
                <Rate
                  className="rating"
                  allowHalf
                  defaultValue={2.5}
                  value={rateValue}
                  onChange={handleChange}
                />
                <span className="label-text">{`(${ratings} ${
                  ratings === 1 ? 'rating' : 'ratings'
                })`}</span>
              </Col>
              <Col xs={24} sm={24} md={5}>
                <span className="label-text">
                  Location: <span className="label-text__emp">{location}</span>
                </span>
              </Col>
              <Col xs={24} sm={24} md={7}>
                <span className="label-text">
                  Mobile: <span className="label-text__emp">{mobile}</span>
                </span>
              </Col>
            </Row>
            <Row>
              <Col sm="24">
                <span className="label-text">
                  Price: $ <span className="label-text__emp">{price}</span>/H
                </span>
              </Col>
            </Row>
            <Row>
              <Col sm="24">
                <Paragraph
                  ellipsis={{
                    rows: 3,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  varius elit erat odio dictum felis dolor adipiscing varius.
                  Nisl bibendum orci in eleifend proin. Leo at lacus, iaculis
                  aliquet. Felis, turpis dui, rhoncus massa id nisl rutrum
                  sapien. Eu le...
                </Paragraph>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="Orders-detail-input">
            <TextArea
              placeholder="Controlled autosize"
              autoSize={{
                minRows: 3,
                maxRows: 5,
              }}
            />
          </Col>
          <Col span={24}>
            <Button
              className="hireme-btn"
              type="primary"
              htmlType="submit"
              loading={isLoading}
            >
              Hire me
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

Orders.defaultProps = {
  username: 'Username',
  coverImage: '/static/order-bg.png',
  userAvatar: '/static/avatar.png',
  professionTitle: 'Electrician',
  ratings: 2,
  location: 'Gaza',
  mobile: '0599000000',
  price: 15,
};

Orders.propTypes = {
  username: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  professionTitle: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Orders;
