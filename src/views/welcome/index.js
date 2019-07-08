import React, {Component} from 'react';
class Welcome extends Component {
  render() {
    return (
      <div>欢迎页: { this.props.match.params.userId }</div>
    )
  }
}

export default Welcome;
