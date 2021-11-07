import { useSelector } from "react-redux";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Preview() {
  const text = useSelector((state) => state.text.text);

  return (
    <div className="preview">
      <div>
        Preview<span>er</span>
      </div>
      <div className="output">
        <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
}

export default Preview;
