import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Navbar 
      navContent={{
        imgSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' 
      }}
      />
      <Main 
      listItems={['Was first released in 2013','Was orginally created by Jordan Walke','Has well over 100k stars on GitHub','Is maintained by Facebook','Powers thousands of enterprise apps, including mobile apps']}
      />
    </div>
  );
}

export default App;
