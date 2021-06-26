import Header from './components/Header';
import Profile from './components/Profile';
import Search from './components/SearchBar';
import Grid from '@material-ui/core/Grid'

import './App.css';

function App() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Profile />
      </Grid>
      <Grid item xs={8}>
        <Header />
        <Search />
      </Grid>
    </Grid>
  );
}

export default App;
