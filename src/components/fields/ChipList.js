import React from "react";
import Tooltip from '@material-ui/core/Tooltip';

const ChipList = props => {
  let heading = "";
  if (props.tooltip) {
    heading = <div className="heading">
                <Tooltip placement="top-start" title={props.tooltip}>
                  <div>{props.heading}</div>
                </Tooltip>
              </div>
  } else {
    heading = <div className="heading">{props.heading}</div>
  }

  return (
    <div>
      {heading}
      {props.value}
    </div>
  );
};

export default ChipList;
