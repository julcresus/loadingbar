import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        
    }
  render() {
      console.log(this.props)
    var loadingbar = <div className="bar_container"><div className="bar"></div></div>;
    return (
    <div>
        <p>{this.props.label}</p>
        <div class="bar_bg">
            <div className={this.props.class + " progress_bar"} style={{width: this.props.percentage + "%"}}>
            {loadingbar}
            </div>
        </div>     
     </div>
    );
  }
}

export default App;
