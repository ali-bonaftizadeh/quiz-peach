import React, { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import './MarkdownEditor.css'
import { Stack } from '@mui/material';

const mdStr = `
# عنوان بزرگ اولیه

* مورد اول

\`\`\`java
String test = new String("that is")
\`\`\`
`;

const Editor = () => {
  const [markdown, setMarkdown] = useState(mdStr);
  return (
    <Stack spacing={3}>

      <MarkdownEditor
        value={markdown}
        enablePreview={false}
        onChange={(value, viewUpdate) => setMarkdown(value)}
      />
      <MarkdownEditor.Markdown source={markdown} />
    </Stack>

  );
};

export default Editor;