import './App.css';
import Header from './Header';
import NotesList from './NotesList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from './Create';
import Footer from './Footer';
import NotesDetails from './NotesDetails';

function App() {

  return (
    <div className="App">
        <div className="notes-main-container">
          <div className="contents">

            <Router>
              <Switch>

                <Route exact path="/">
                  <Header />
                    <NotesList />
                </Route>

                <Route path="/create">
                  <Create />
                </Route>

                <Route path="/notes/:id">
                  <NotesDetails />
                </Route>

              </Switch>
            </Router>
            
            <Footer />
          </div>
        </div>
    </div>
  );
}

export default App;
