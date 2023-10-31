import React from 'react';

class Food extends React.Component {
  render() {
    return <div id={this.props.id} style={this.props.style}>
        {this.props.content}
    </div>
  }
}

export default Food;