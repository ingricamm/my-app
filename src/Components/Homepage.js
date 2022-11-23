
import Contact from './Contact';
import Description from './Description';
import Repository from './Respository';

function Homepage() {
    return (
      <div className="main">
    
        
          <div className="App-main-content">
            <Description/>
            <Repository/>
            <Contact/>
          </div>
          <footer className="App-footer">
              <div className="App-footer-content">
                <ul>
                    <li> <i className="fa fa-twitter" > </i></li>
                    <li> <i className="fa fa-linkedin" ></i></li>
                    <li> <i className="fa fa-github" ></i></li>
                </ul>
              </div>
              <div className="Adicional-info">
                    terminos y condiciones
                </div>
        </footer>

        
      </div>
    );
  }
  
  export default Homepage;