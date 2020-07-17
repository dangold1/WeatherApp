import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { INITIAL_ACTION } from './store/constants';
import { useSelector } from 'react-redux';
import { Provider, KeepAlive } from 'react-keep-alive';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Switches from './components/Switches';

import './App.css';


function App() {
  const dispatch = useDispatch();

  useEffect(() => { didMount() }, []);

  const didMount = () => {
    dispatch({ type: INITIAL_ACTION })
  }

  const userThemePreference = useSelector(state => state.mainState.theme)

  const theme = createMuiTheme({
    palette: {
      type: userThemePreference,
      primary: {
        main: userThemePreference === 'dark' ? '#2e2e2e' : '#1976d2'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Provider>
            <Header />
            <Paper className="container" elevation={0}>
              <Switches />
              <Switch>
                <Route exact path="/home" render={() => <KeepAlive name="home" ><Home /></KeepAlive>} />
                <Route path="/favorites" render={() => <KeepAlive name="favorites"> <Favorites /></KeepAlive>} />
                <Redirect from="/" to="/home" />
              </Switch>
            </Paper>
          </Provider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
