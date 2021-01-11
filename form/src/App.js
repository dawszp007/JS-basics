import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import Home from './pages/MasterForm';
import Theme from './pages/Theme';
import Results from './pages/Results'


function App() {
  const meta = {
    title: 'Form by Dawid Szpunar',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags',
        author: 'Dawid Szpunar',
        viewport: 'width=device-width, initial-scale=1',
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
      <Theme>
        <Router>
          <div className="formMain">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/result' component={Results} />
            </Switch>
          </div>
        </Router>
      </Theme>
    </DocumentMeta>
  );
}

export default App;
