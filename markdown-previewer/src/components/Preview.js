import { useSelector } from "react-redux";

import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

function Preview() {
  const [textValue, setTextValue] = useState("");

  const text = useSelector((state) => state.text.text);
  const help = useSelector((state) => state.text.help);
  const initialHelp = useSelector((state) => state.text.initialHelp);

  useEffect(() => {
    help === false ? setTextValue(text) : setTextValue(initialHelp);
  }, [help, text, initialHelp]);

  return (
    <div className="preview">
      <div>
        Preview<span>er</span>
      </div>
      <div className="output">
        <ReactMarkdown
          children={textValue}
          remarkPlugins={[remarkGfm, remarkBreaks]}
        />
      </div>
    </div>
  );
}

export default Preview;
