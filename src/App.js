import './App.css';

const App = () => {
  return (
    <div>
      <div>one div</div>
      <div className="App">
        <ul>
          <li>css</li>
          <li>html</li>
          <li>js</li>
          <li>react</li>
        </ul>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a>Home</a>
      <a>New Feed</a>
      <a>Messages</a>
    </div>
  )
}


export default App
