import logo from './logo.svg';

function App() {
  return (
      <div class="container-sm d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
          <div>
            <nav class="nav justify-content-center float-md-end">
              <a class="nav-link" href="https://upliftduo.com">Projects</a>
              <a class="nav-link" href="mailto:chris@dougliu.com">Contact</a>
            </nav>
          </div>
        </header>

        <main class="px-3 text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Christopher Douglas Liu.</h1>
          <p class="lead m-3">Howdy.</p>
          <p class="lead m-3">
            <a href="https://duo.page/chris" class="btn btn-lg btn-secondary border-white bg-white">My Pages</a>
          </p>
        </main>
      </div>
  );
}

export default App;
