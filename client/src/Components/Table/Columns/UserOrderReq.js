import React from 'react';
import moment from 'moment';
import { CloseOutlined } from '@ant-design/icons';

import Avatar from '../../Avatar';

const UserOrderReq = (onActions) => [
  {
    title: 'Provider Info',
    dataIndex: 'userInfo',
    key: 'userInfo',
    width: '18%',
    render([username, avatar]) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Avatar
            shape="circle"
            srcImg={avatar}
            size={45}
            style={{
              minWidth: '45px',
            }}
          />
          <label
            style={{
              lineHeight: '45px',
              paddingLeft: '14px',
              width: '120px',
            }}
          >
            {username}
          </label>
        </div>
      );
    },
    fixed: 'left',
  },
  {
    title: 'Service Title',
    dataIndex: 'serviceTitle',
    key: 'serviceTitle',
    width: '15%',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    width: '16%',
  },
  {
    title: 'Your Description',
    key: 'yourDescription',
    dataIndex: 'yourDescription',
    width: '30%',
  },
  {
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
    width: '19%',
    render(text) {
      return moment(text).format('MMM Do YY, h:mm a');
    },
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    width: '10%',
    fixed: 'right',
    render(text, record) {
      return (
        <div
          onClick={(e) => {
            onActions[0](e, record);
          }}
        >
          <CloseOutlined
            style={{
              paddingLeft: '5px',
              cursor: 'pointer',
              fontSize: '21px',
              color: '#F95151',
            }}
          />
        </div>
      );
    },
  },
];

export default UserOrderReq;