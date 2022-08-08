import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import {
  defaultHighlightStyle,
  syntaxHighlighting,
} from "@codemirror/language";
import { languages } from "@codemirror/language-data";
import { tags as t } from "@lezer/highlight";
import { createTheme } from "@uiw/codemirror-themes";
import CodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import React, { useState } from "react";
import { githubDark } from "@uiw/codemirror-theme-github";

interface Props {
  onCodeChange?: ReactCodeMirrorProps["onChange"];
}

const myTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#282828",
    foreground: "#da55f9",
    caret: "#5d00ff",
    selection: "#5c6166",
    selectionMatch: "#036dd626",
    lineHighlight: "#4b4646",
    gutterBackground: "#1f1f1f",
    // gutterForeground: "red", //line number color
  },
  styles: [
    { tag: t.comment, color: "#787b8099" },
    { tag: t.variableName, color: "#ff5d40" },
    { tag: [t.string, t.special(t.brace)], color: "#5c6166" },
    // { tag: t.string, color: "#fff" },
    { tag: t.number, color: "#5c6166" },
    { tag: t.bool, color: "#5c6166" },
    { tag: t.null, color: "#5c6166" },
    { tag: t.keyword, color: "#5c6166" },
    { tag: t.operator, color: "#0080ff" },
    { tag: t.className, color: "#5c6166" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "#5c6166" },
    { tag: t.angleBracket, color: "#b4a5a5" },
    { tag: t.tagName, color: "#5c6166" },
    // { tag: t.attributeName, color: "#83c1ff" },
    { tag: t.annotation, color: "red" },
    // { tag: t.brace, color: "#468aff" },
    { tag: t.propertyName, color: "#6fb0ff" },
    { tag: t.arithmeticOperator, color: "#ff5d40" },
    { tag: t.bracket, color: "#ee9292" },
    // { tag: t.string, color: "white" },
  ],
});
// ##b7a7a7

const CodeEditor: React.FC<Props> = ({ onCodeChange }) => {
  //   const editorRef = useRef(null);
  const [value, setValue] = useState(`
  // console.log('hello world!');
  console.log('hello world!');
  new a
  let abc ='sgrin'
  <div attr='super'></div>
  function key = () => {
    const a = {
      key:{
        abc :{}
      }
    }
  }
  console.log('hello world!');`);
  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    console.log("value:", value, "viewedit", viewUpdate);
  }, []);
  return (
    <CodeMirror
      className="my-code-editor"
      value={value}
      width="100%"
      theme={githubDark}
      autoCorrect=""
      height="400px"
      extensions={[
        javascript({ jsx: true, typescript: true }),
        css(),
        syntaxHighlighting(defaultHighlightStyle),
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      onChange={onCodeChange}
    />
  );
};

export default CodeEditor;
