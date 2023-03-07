import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
// import { SubjectProvider } from './context/SubjectContext';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    {/* <SubjectProvider> */}
    <App tab='home' />
    {/* </SubjectProvider> */}
  </React.StrictMode>
);

