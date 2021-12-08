import logo from './logo.svg';

function App() {
  return (
      <div className="container-sm d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <nav className="nav justify-content-center float-md-end">
              <a className="nav-link" href="https://upliftduo.com">Projects</a>
              <a className="nav-link" href="mailto:chris@dougliu.com">Contact</a>
            </nav>
          </div>
        </header>

        <main className="px-3 text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Christopher Douglas Liu.</h1>
          <p className="lead m-3">Howdy.</p>
          <p className="lead m-3">
            <a href="https://duo.page/chris" className="btn btn-lg btn-secondary border-white bg-white">My Pages</a>
          </p>
        </main>
      </div>
  );
}

export default App;
