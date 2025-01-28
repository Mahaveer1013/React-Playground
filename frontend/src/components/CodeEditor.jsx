import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';

const CodeEditor = ({ code, setCode }) => {
  const editorContainer = useRef(null);

  useEffect(() => {
    const editor = monaco.editor.create(editorContainer.current, {
      value: code,
      language: 'javascript',
      theme: 'vs-dark',
      automaticLayout: true,
    });

    editor.onDidChangeModelContent(() => {
      const newCode = editor.getValue();
      setCode(newCode);
    });

    return () => editor.dispose();
  }, [setCode, code]);

  return <div ref={editorContainer} style={{ height: '100%', width: '100%' }} />;
};

export default CodeEditor;
