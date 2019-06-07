import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import FieldHeading from "./FieldHeading";

const ChipList = props => {
  let heading = "";
  if (props.tooltip) {
    heading = <div>
                <Tooltip placement="top-start" title={props.tooltip}>
                  <FieldHeading heading={props.heading} />
                </Tooltip>
              </div>
  } else {
    heading = <FieldHeading heading={props.heading} />
  }

  return (
    <div>
      {heading}
      {props.value}
    </div>
  );
};

export default ChipList;
