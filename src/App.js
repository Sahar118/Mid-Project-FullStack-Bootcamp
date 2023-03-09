import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';
import {
  DiagnosticHistory,
  Home,
  NewDiagnosis,
  RootLayout,
  Error,
  EditParagraphs,
  SaveParagraphs,
  ConcludingParagraphs,
  Glossary
} from './pages/index'
import AnimCursor from './components/animation/AnimCursor.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/New-Diagnosis', element: <NewDiagnosis /> },
      { path: '/Diagnostic-history', element: <DiagnosticHistory /> },
      { path: '/concludingParagraph/newDiagnosis', element: < ConcludingParagraphs /> },
      { path: '/concludingParagraph/saveParagraphs', element: <SaveParagraphs /> },
      { path: '/concludingParagraph/editDiagnosis', element: < EditParagraphs /> },
      { path: '/Glossary', element: < Glossary /> }



    ]
  },
]

);
function App() {


  return (
    <div className="App">
      <AnimCursor />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
