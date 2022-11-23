
function  Repository (){
        return(
        <div className="App-main-repository">
            <h2>
                Repository
            </h2>
            <div className='container'>
                <ul className='App-list-repository '>
                         {/* toma los articulos de acuerdo a su unico identificador, 
                        pasa la informacion a la tarjeta
                        y los separa de acuerdo al tamaño de pantalla  */}
                      <li>
                        <div className='Card-repository '>
                            
                            <div className="card-media">
                                <img
                                    className="product-image"
                                   
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
                        <div className='Card-repository '>
                            
                            <div className="card-media">
                                <img
                                    className="product-image"
                                   
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
                    <div className='Card-repository '>
                            
                            <div className="card-media">
                                <img
                                    className="product-image"
                                   
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
                </ul>
            </div>
        </div>
    )
    };
    
    export default Repository