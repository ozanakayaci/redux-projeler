import React from "react";

import { updateText } from "../redux/textSlice";

import { useDispatch, useSelector } from "react-redux";

function Input() {
  const dispatch = useDispatch();

  const text = useSelector((state) => state.text.text);

  let handleChange = (e) => {
    dispatch(updateText(e.target.value));
  };

  return (
    <div className="input">
      <div>Markdown</div>
      <textarea
        onChange={handleChange}
        name=""
        id=""
        cols="60"
        rows="20"
        defaultValue={text}
      ></textarea>
    </div>
  );
}

export default Input;
