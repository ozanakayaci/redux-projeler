import React from "react";

import { toggleHelp } from "../redux/textSlice";

import { useDispatch, useSelector } from "react-redux";

function Help() {
  const dispatch = useDispatch();

  const help = useSelector((state) => state.text.help);

  let handleToggle = () => {
    dispatch(toggleHelp());
  };

  return (
    <div>
      <button
        className={help === true ? "help-button active" : "help-button"}
        onClick={() => handleToggle()}
      >
        ?
      </button>
    </div>
  );
}

export default Help;
