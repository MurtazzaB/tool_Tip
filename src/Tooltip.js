import React from "react";

class Tooltip extends React.Component {
  classn = () => {
    return `${this.props.position}`;
  };

  render() {
    return (
      <div className={`${this.classn()}`}>
        Thanks for hovering! I'm "{this.props.position}" tooltip
      </div>
    );
  }
}

export default Tooltip;
