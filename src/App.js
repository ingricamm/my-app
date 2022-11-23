import './App.css';
import Contact from './Components/Contact';
import Description from './Components/Description';
import Repository from './Components/Respository';


function App() {
  return (
    <div className="App">
      <header className="App-header" >
              <nav className='navBar '>
              <ul>
                <li> <button className="search-Btn" ><i className="fa fa-search" ></i></button></li>
                <li><a href='/about'> About</a></li>
                <li><a href='/blog'> blog</a></li>
                <li><a href='/Repository'> Repository</a></li>
                <li><a href='/contact'> Contact</a></li>
            </ul>
              </nav>
              <div className='App-header-content'>
                <div className='Autor'>
                  <h2> 
                    Carolina Mosquera Moreno
                  </h2>
                 Process Engineer/ Data Analytics
                </div>
              </div>
              <div className='Photo-profile'>

              </div>
      </header>
      <main className='App-main'>
        <div className='App-main-content'>
          <Description/>
          <Repository/>
          <Contact/>
        </div>
        <footer className='App-footer'>
            <div className='App-footer-content'>
            <ul>
                <li> <i className="fa fa-twitter" > </i></li>
                <li> <i className="fa fa-linkedin" ></i></li>
                <li> <i className="fa fa-facebook" ></i></li>

            </ul>
              
            </div>
            <div className='Adicional-info'>
                  terminos y condiciones
              </div>
      </footer>
      </main>
      
    </div>
  );
}

export default App;