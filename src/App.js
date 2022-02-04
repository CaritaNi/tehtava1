import { useState } from 'react';
import './styles.css/style.css'

function App() {
const [paino, setPaino] = useState(0);
const [pullot, setPullot] = useState(0);
const [aika, setAika] = useState(0);
const [sukupuoli, setSukupuoli] = useState('mies');
const [tulos, setTulos] = useState(0);



  function alcometer(e){

    e.preventDefault();

    let pitoisuus = 0;
    let litra = pullot * 0.33;
    let gramma = litra * 8 * 4.5;
    let poltto = paino / 10;
    let jaljella = gramma - (poltto * aika);

    if (sukupuoli === 'mies'){
      pitoisuus= jaljella / (paino * 0.7);
    }
    else {
      pitoisuus= jaljella / (paino * 0.6);
    }
    setTulos(pitoisuus);
    
    if (pitoisuus > 0){
      setTulos(pitoisuus)
    } else {
      setTulos(0)
    }
  }

  return (
    <form>
      <h3>Alcometer</h3>
    <div>
      <label>Weight:</label>
      <input id='weight'
       type='number'
       value ={paino}
       onChange={e=> setPaino(e.target.value)}/>
    </div>
    <div>
      <label>Bottles:</label>
      <input id='bottles'
       type='number'
       value={pullot}
       onChange={e=> setPullot(e.target.value)}/>
    </div>
    <div>
      <label>Time : </label>
      <input id='time'
       type='number'
       value={aika}
       onChange={e=> setAika(e.target.value)}/>
    </div>
    <div>
      <label>Male</label>
      <input type='radio'
      value={sukupuoli}
      name='sukupuoli'
      onChange={e=> setSukupuoli(e.target.value)}
      />
    </div>
    <div>
      <label>Female</label>
      <input type='radio'
      value={sukupuoli}
      name='sukupuoli'
      onChange={e=> setSukupuoli(e.target.value)}
      />
     </div> 

    <br></br>

    <button onClick={alcometer}>Calculate</button>
    
    <br></br>
    <br></br>

    <div>
      <label>Result :</label> <br></br>
      <output>{tulos.toFixed(1)}</output>
    </div>

    </form>
  );
}

export default App;

