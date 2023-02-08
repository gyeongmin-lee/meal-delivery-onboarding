import { FC } from "react";
import DropDown, { ReactDropdownProps } from "react-dropdown";
import { Arrow } from "../Arrow/Arrow";
import "./Dropdown.scss";

const Dropdown: FC<ReactDropdownProps> = (props) => {
  return (
    <DropDown
      className="dropdown"
      menuClassName="dropdown-menu"
      controlClassName="dropdown-control"
      arrowClassName="dropdown-arrow"
      value=""
      arrowClosed={<Arrow direction="down" />}
      arrowOpen={<Arrow direction="up" />}
      {...props}
    >
      Filter
    </DropDown>
  );
};

export default Dropdown;
