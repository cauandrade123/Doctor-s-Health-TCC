import './App.scss';
import Land from './pages/land-pages/land';

function App() {
  return (
      <main className='App'>
        <Land/>
        <section className='secao-2'>
            <div className="main">
                <div className="saibaMais">
                      <div className="iconeEtexto">
                          <img src="" alt="" />
                          <h2>Saiba Mais</h2>
                      </div>
                      <div className="textoSaibaMais">
                          <p>
                            
                          </p>
                      </div>
                </div>
                <div className="conhecaMe">
                      <div className="textoConhecaMe">
                        
                      </div>
                      <div className="iconesConhecaMe">
                          <img src="" alt="" />
                          <img src="" alt="" />
                          <img src="" alt="" />
                      </div> 
                </div>
            </div>
        </section>
      </main>
  );
}

export default App;
