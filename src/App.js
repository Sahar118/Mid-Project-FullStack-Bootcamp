import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';
import { DiagnosticHistory, Home, NewDiagnosis, RootLayout, Error, EditParagraphs, SaveParagraphs, ConcludingParagraphs } from './pages/index'

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
      { path: '/concludingParagraph/editDiagnosis', element: < EditParagraphs /> }
    ]
  },
]

);
function App() {


  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
