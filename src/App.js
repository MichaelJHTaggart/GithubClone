import Header from './components/Header';
import Profile from './components/Profile';
import Search from './components/SearchBar';
import RepositoryList from './components/RepositoryList';
import Repository from './components/Repository';
import Grid from '@material-ui/core/Grid'

import './App.css';

function App() {
  return (
    <Grid container
    >
      <Grid item xs={3}>
        <Profile />
      </Grid>
      <Grid item xs={8}>
        <Header />
      </Grid>
      <Grid item xs={8}>
        <Search />
      </Grid>
      <Grid item xs={8}>
        <RepositoryList />
      </Grid>
      <Grid item xs={8}>
        <Repository />
      </Grid>
    </Grid>
  );
}

export default App;
