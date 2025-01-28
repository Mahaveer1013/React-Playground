import { useEffect } from 'react';

const Preview = ({ code }) => {
  useEffect(() => {
    const iframe = document.getElementById("preview-frame");
    const iframeDoc = iframe.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(`
      <html>
        <head>
          <!-- Load React and ReactDOM as ES Modules -->
          <script type="module">
            import React from 'https://cdn.skypack.dev/react';
            import ReactDOM from 'https://cdn.skypack.dev/react-dom';
 
            window.React = React;
            window.ReactDOM = ReactDOM;
          </script>
        </head>
        <body>
          <!-- Ensure there's an element with id="output" for React to render into -->
          <div id="output"></div>
          
          <script type="module">
            const code = \`${code}\`; // Inject the user code
            
            try {

              const script = document.createElement('script');
              script.type = 'module'; // Ensure the script is treated as a module
              script.textContent = code; // Inject the user's code inside the script
              document.body.appendChild(script); // Append the script to the iframe body to execute it
            } catch (error) {
              const output = document.getElementById('output');
              output.innerHTML = '<div style="color: red;">' + error.message + '</div>';
            }
          </script>
        </body>
      </html>
    `);
    iframeDoc.close();
  }, [code]);

  return <iframe id="preview-frame" width="100%" height="400px" title="Preview" />;
};

export default Preview;
