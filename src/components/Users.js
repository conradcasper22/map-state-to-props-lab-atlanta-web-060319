import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, index) => {
            return (
              <li key={index}>{user.username}</li>
            )
          })}
          <p>
            { this.props.userCount }
          </p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users, userCount: state.users.length }
}



export default connect(mapStateToProps)(Users)
