import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Input extends React.Component {
  
  state = { value: 0 };
  
  render() {
    const { value } = this.state;
    return (
      <div>
        <input
          value = { value }
          onChange = { ({ target : { value } }) => this.setState({ value }) }
        />
        { this.props.render(value) }
      </div>
    );
  }
}

ReactDOM.render(
  <Input render={(n)=><span>{n**2}</span>}/>,
  document.getElementById('app')
);
