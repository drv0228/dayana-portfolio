import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
