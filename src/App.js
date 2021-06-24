import Header from './components/Header';
import Profile from './components/Profile';
import Search from './components/SearchBar';
import RepositoryList from './components/RepositoryList';
import Repository from './components/Repository';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Search />
      <RepositoryList />
      <Repository />
    </div>
  );
}

export default App;
