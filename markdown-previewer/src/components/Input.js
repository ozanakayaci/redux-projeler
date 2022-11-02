import { useEffect, useState } from "react";

import { updateText } from "../redux/textSlice";

import { useDispatch, useSelector } from "react-redux";

function Input() {
  const dispatch = useDispatch();

  const text = useSelector((state) => state.text.text);
  const help = useSelector((state) => state.text.help);
  const initialHelp = useSelector((state) => state.text.initialHelp);

  let handleChange = (e) => {
    dispatch(updateText(e.target.value));
  };
  return (
    <div className="input">
      <div>#Markdown</div>

      <textarea
        onChange={handleChange}
        readOnly={help}
        name="markdown"
        id="markdown"
        rows="4"
        cols="20"
        value={help === false ? text : initialHelp}
      />
    </div>
  );
}

export default Input;
