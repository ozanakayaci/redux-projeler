import { useState, useEffect } from "react";

//redux selector,dispatch
import { useSelector, useDispatch } from "react-redux";
//reducers
import { changeParas, changeFormat } from "../redux/textSlice";

import axios from "axios";

function Input() {
  const [paragraph, setParagraph] = useState();

  const dispatch = useDispatch();
  const paras = useSelector((state) => state.text.paras);
  const format = useSelector((state) => state.text.format);

  useEffect(() => {
    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${format}`
      )
      .then(function (res) {
        setParagraph(res.data);
      });
  }, [paras, format]);

  const onChangeInput = (e) => {
    dispatch(changeParas(e.target.value));
  };
  const onChangeFormat = (e) => {
    dispatch(changeFormat(e.target.value));
  };

  return (
    <div>
      <div className="input">
        <div>
          <label>Paragraphs</label>
          <input type="number" onChange={onChangeInput} min="1" value={paras} />
        </div>
        <div>
          <label>Include HTML</label>
          <select onChange={onChangeFormat}>
            <option value="text">No</option>
            <option value="html">Yes</option>
          </select>
        </div>
      </div>

      <div className="paragraph">{paragraph}</div>
    </div>
  );
}

export default Input;
