import React from 'react';
import Header from './components/header';
import News from './components/news';
import RolePlayMenu from './components/role-play-menu';
import MostActiveUsers from './components/most-active-users';
import LatestPosts from './components/latest-posts';
import Footer from './components/footer';


import './css/main.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <News/>
      <RolePlayMenu/>
      <MostActiveUsers/>
      <LatestPosts/>
      <Footer/>
    </div>
  );
}

export default App;
