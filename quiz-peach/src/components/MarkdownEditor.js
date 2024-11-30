import React, { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import './MarkdownEditor.css'
import { Stack } from '@mui/material';

const mdStr = `اینجا تست می‌کنیم
# عنوان بزرگ اولیه

ادامه مباحث اینجا بیان خواهد شد.

* مورد اول
* مورد اول
* مورد اول

1. اولین
1. اولین
1. اولین
1. اولین  


اینجا یک قطعه کد کوچک و ساده قرار می‌گیرد که متغیر \`temp\` را در خود دارد.
\`\`\`java
String test = new String("that is")
\`\`\`

`;

const Dome = () => {
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

export default Dome;