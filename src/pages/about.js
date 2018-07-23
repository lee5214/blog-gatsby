import React, { Component } from 'react';
import MessageWall from '../components/Wall/MessageWall';

class About extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor:'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 100,
          padding:100
        }}
      >
        <tr>
          <td>LinkedIn :</td>
          <td>
            <a href={'https://linkedin.com/in/lee5214'}>
              https://linkedin.com/in/lee5214
            </a>
          </td>
        </tr>
        <tr>
          <td>Github :</td>
          <td>
            <a href={'https://github.com/lee5214'}>
              https://github.com/lee5214
            </a>
          </td>
        </tr>
        <tr>
          <td>Homepage :</td>
          <td>
            <a href={'https://cong-li.com'}>https://cong-li.com</a>
          </td>
        </tr>
        <tr>
          <td>Email :</td>
          <td>
            <a href={'mailto: cong-li@cong-li.com'}>cong-li@cong-li.com</a>
          </td>
        </tr>
      </div>
    );
  }
}
export default About;
