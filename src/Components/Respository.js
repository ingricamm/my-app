import dashboard  from "./img/dashboard.jpg";
import python  from "./img/python.jpg";
import database from "./img/database.jfif";
import js from "./img/js.jpg"

function  Repository (){
        return(
        <div className="App-main-repository">
            <h2>
                Repository
            </h2>
            <div className="container">
                <ul className="App-list-repository ">
                         {/* toma los articulos de acuerdo a su unico identificador, 
                        pasa la informacion a la tarjeta
                        y los separa de acuerdo al tamaño de pantalla  */}
                          <li>
                        <div className="Card-repository ">
                            
                            <div className="card-media">
                                <img   
                                src={dashboard}
                                className="image" 
                                alt="excel"
                               />
                            </div>
                            <div className="card-header">
                                <a href="/product/" > Excel/Power BI</a>
                            </div>
                            <p className="description">Repositorio Excel</p>
                        </div>
                    </li>                    
                      <li>
                        <div className="Card-repository ">
                            
                            <div className="card-media">
                                <img
                                    className="image"
                                    src={python}
                                    alt="python"
                                    with="200px"
                                    height="150px"
                                />
                            </div>
                            <div className="card-header">
                                <a href="/product/" > python</a>
                            </div>
                            <p className="description">Repositorio python</p>
                        </div>
                    </li>
                    <li>
                        <div className="Card-repository ">
                            
                            <div className="card-media">
                                <img
                                    className="image"
                                    src={database}
                                    alt="mysql"
                                    with="200px"
                                    height="150px"
                                />
                            </div>
                             <div className="card-header">
                                <a href="/product/" > Bases de datos</a>
                            </div>
                            <p className="description">Repositorio Basesb de datos</p>
                        </div>
                    </li>
                    <li>
                    <div className="Card-repository ">
                            
                            <div className="card-media">
                                <img
                                    className="image"
                                    src={js}
                                    alt="python"
                                    with="200px"
                                    height="150px"
                                />
                            </div>
                             <div className="card-header">
                                <a href="/product/" > Desarrollo Web</a>
                            </div>
                            <p className="description">Repositorio desarrollo web</p>
                        </div>
                    </li> 
                </ul>
            </div>
        </div>
    )
    };
    
    export default Repository