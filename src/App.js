import React from 'react';
import './App.css';
import Tooltip from './Tooltip';


class App extends React.Component{

  constructor(){
    super();
    this.state={
      position:"top",
      hovering:false,
    };
  }

  handleClick=(pos)=>{
    this.setState({
      position:pos,
    })
  };


  handleMouseEnter=()=>{
    this.setState({
      hovering:true,
    });
  };

  handleMouseLeave=()=>{
    this.setState({
      hovering:false
    })
  }

  render(){
    return (
      <div className="App">
{  
}
        <div className='btn-position'>
          <div className='grp-name'>
            Select the Position for Tool-Tip :
          </div>
          <button
          className= {this.state.position=== 'top' ? "btn active" :"btn" }
          onClick={(e)=>{
            this.handleClick('top');
          }}>
            Top
          </button>
          <button
          className={this.state.position=== 'left' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('left');
          }}>
            Left
          </button>
          <button
          className={this.state.position=== 'right' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('right');
          }}>
            Right
          </button>
          <button
          className={this.state.position=== 'down' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('down');
          }}>
            Down
          </button>
        </div>
{

}        <div id="button-container">
          <button
          className='buttonH hover-btn'
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
          >
            Hover over me!
          </button>
          {this.state.hovering && <Tooltip position={this.state.position}/>}
        </div>
      </div>
    );
  }
}

export default App;
