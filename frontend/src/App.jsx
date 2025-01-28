// src/App.js
import { useState } from 'react';
import axios from 'axios';
import CodeEditor from './components/CodeEditor.jsx';
import Preview from './components/Preview.jsx';

const App = () => {
  const [code, setCode] = useState(`
    import React from 'react';
    const App = () => <h1>Hello World</h1>;
    ReactDOM.render(<App />, document.getElementById('output'));
  `);
  const [packageName, setPackageName] = useState('');
  const [installedPackages, setInstalledPackages] = useState([]);

  const handlePackageInstall = async () => {
    if (packageName) {
      try {
        await axios.post('http://localhost:5000/api/install-package', { packageName });
        setInstalledPackages([...installedPackages, packageName]);
        alert(`Package ${packageName} installed successfully!`);
        setPackageName('');
      } catch (error) {
        alert(`Failed to install ${packageName}`);
      }
    }
  };

  return (
    <div>
      <h1>React Code Editor</h1>

      <CodeEditor code={code} setCode={setCode} />

      <div>
        <input
          type="text"
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
          placeholder="Enter package name"
        />
        <button onClick={handlePackageInstall}>Install Package</button>
      </div>

      <Preview code={code} />
    </div>
  );
};

export default App;
