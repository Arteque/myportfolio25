import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Class from "./MarkdownLoader.module.scss";

const LinkRenderer = ({ children, ...props }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={Class.externalLink}
      {...props}
    >
      <span>
        {children}
        <FontAwesomeIcon icon={faExternalLink} />
      </span>
    </a>
  );
};

const MarkdownLoader = ({ mdsrc }) => {
  const [md, setMd] = useState("");

  const P = ({ children }) => <p className={Class.p}>{children}</p>;

  useEffect(() => {
    if (!mdsrc) return;
    fetch(mdsrc)
      .then((res) => res.text())
      .then(setMd)
      .catch((err) => console.log("Ooops:" + err));
  }, [mdsrc]);

  return (
    <ReactMarkdown components={{ a: LinkRenderer, p: P }}>{md}</ReactMarkdown>
  );
};

export default MarkdownLoader;
