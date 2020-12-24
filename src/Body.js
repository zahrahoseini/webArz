import React, { useEffect , useState } from "react"
import './Body.css';
import  money from './image/money.svg';
import  coin from './image/coin.svg';
import  gold from './image/gold.svg';
import  tala from './image/tala.svg';
import  bit from './image/bitcoin.svg';
import usa from './flags/049-united states of america.svg';
import europ from './flags/europ.svg';
import uk from './flags/uk.svg';
import eng from './flags/eng.svg';
import can from './flags/can.svg';
import ost from './flags/ost.svg';
import sou from './flags/sou.svg';
import norv from './flags/norv.svg';
import rus from './flags/rus.svg';
import thi from './flags/thi.svg';
import sang from './flags/sang.svg';
import hong from './flags/hong.svg';
import azar from './flags/azar.svg';
import arm from './flags/arm.svg';
import don from './flags/don.svg';
import ema from './flags/ema.svg';
import jap from './flags/jap.svg';
import turk from './flags/turk.svg';
import chin from './flags/chin.svg';
import arab from './flags/arab.svg';
import ind from './flags/ind.svg';
import male from './flags/male.svg';
import afg from './flags/afg.svg';
import kov from './flags/kov.svg';
import iraq from './flags/iraq.svg';
import bah from './flags/bah.svg';
import oman from './flags/oman.svg';
import qatar from './flags/qatar.svg';
import UpdateIcon from '@material-ui/icons/Update';
import { IconButton } from "@material-ui/core";


export default function Body( ) {
  var [arz, setArz] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json")
      .then(res => res.json())
      .then(
        (result) => {
          setArz(result);
          console.log(result);          
        })
      },[])
 
      const update = evt => {
        if((evt)){
            fetch("https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json")
              .then(res => res.json())
              .then(
                (result) => {
                  setArz(result);
                  console.log(result);          
                })
              
        }
        
      }
        
  
    return (
    
      <div className="Body" >
          
        <div className="body_header">
  
         <div id="coin" > 
         <a href="#seke"><img id="h_img" src={coin} /></a>
         </div>
  
         <div id="curency"> 
         <a href="#cur"><img id="h_img" src={money} /></a>
         </div>
  
         <div id="gold"> 
         <a href="#tala"><img id="h_img" src={gold} /></a>
        </div>
  
        </div>
  
        {(typeof arz.sana != "undefined") ? (
          <div className="body_main" >
          <div id="cur"><p id="tittle_list">CURRENCY </p>
          <ul>
            <li id="style">
              <div id="flag">
              <img src={usa} />
              </div>
              <div>Dollar</div>
              <div>{arz.sana.data[0].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[0].l}</div>
                 <div className="Green">+{arz.sana.data[0].h}</div>
              </div>
            </li>
            <li id="style">
              <div id="flag">
                <img src={europ} />
              </div>
              <div>Euro</div>
              <div>{arz.sana.data[1].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[1].l}</div>
                 <div className="Green">+{arz.sana.data[1].h}</div>
              </div>
              </li>  
            <li id="style">
              <div id="flag">
              <img src={uk} />
              </div>
              <div>Pound</div>
              <div>{arz.sana.data[10].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[10].l}</div>
                 <div className="Green">+{arz.sana.data[10].h}</div>
              </div>
              </li> 
              <li id="style">
            <div id="flag">
            <img src={eng} />
            </div>
            <div>Pound</div>
            <div>{arz.sana.data[6].p}</div>
            <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[6].l}</div>
                 <div className="Green">+{arz.sana.data[6].h}</div>
              </div>
            </li>
            <li id="style">
              <div id="flag">
              <img src={can} />
              </div>
              <div>Dollar</div>
              <div>{arz.sana.data[9].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[9].l}</div>
                 <div className="Green">+{arz.sana.data[9].h}</div>
              </div>
            </li>
            <li id="style">
              <div id="flag">
              <img src={ost} />
              </div>
              <div>Dollar</div>
              <div>{arz.sana.data[14].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[14].l}</div>
                 <div className="Green">+{arz.sana.data[14].h}</div>
              </div>
              </li>  
            <li id="style">
              <div id="flag">
              <img src={sou} />
              </div>
              <div>Cron</div>
              <div>{arz.sana.data[11].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[11].l}</div>
                 <div className="Green">+{arz.sana.data[11].h}</div>
              </div>
              </li> 
              <li id="style">
            <div id="flag">
            <img src={norv} />
            </div>
            <div>Cron</div>
            <div>{arz.sana.data[12].p}</div>
            <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[12].l}</div>
                 <div className="Green">+{arz.sana.data[12].h}</div>
              </div>
            </li>
            <li id="style">
              <div id="flag">
              <img src={rus} />
              </div>
              <div>Rubles</div>
              <div>{arz.sana.data[5].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[5].l}</div>
                 <div className="Green">+{arz.sana.data[5].h}</div>
              </div>
            </li>
            <li id="style">
              <div id="flag">
              <img src={thi} />
              </div>
              <div>Bat</div>
              <div>{arz.sana.data[7].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[7].l}</div>
                 <div className="Green">+{arz.sana.data[7].h}</div>
              </div>
              </li>  
            <li id="style">
              <div id="flag">
              <img src={sang} />
              </div>
              <div>Dollar</div>
              <div>{arz.sana.data[15].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[15].l}</div>
                 <div className="Green">+{arz.sana.data[15].h}</div>
              </div>
              </li> 
              <li id="style">
            <div id="flag">
            <img src={hong} />
            </div>
            <div>Dollar</div>
            <div>{arz.sana.data[16].p}</div>
            <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[16].l}</div>
                 <div className="Green">+{arz.sana.data[16].h}</div>
              </div>
            </li>
            <li id="style">
              <div id="flag">
              <img src={azar} />
              </div>
              <div>Manat</div>
              <div>{arz.sana.data[17].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[17].l}</div>
                 <div className="Green">+{arz.sana.data[17].h}</div>
              </div>
            </li>
            <li id="style">
              <div id="flag">
              <img src={arm} />
              </div>
              <div>Deram</div>
              <div>{arz.sana.data[18].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[18].l}</div>
                 <div className="Green">+{arz.sana.data[18].h}</div>
              </div>
              </li>  
            <li id="style">
              <div id="flag">
              <img src={don} />
              </div>
              <div>Cron</div>
              <div>{arz.sana.data[19].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[19].l}</div>
                 <div className="Green">+{arz.sana.data[19].h}</div>
              </div>
              </li> 
              <li id="style">
            <div id="flag">
            <img src={ema} />
            </div>
            <div>Derham</div>
            <div>{arz.sana.data[2].p}</div>
            <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[2].l}</div>
                 <div className="Green">+{arz.sana.data[2].h}</div>
              </div>
            </li>
            <li id="style">
              <div id="flag">
              <img src={jap} />
              </div>
              <div>Yen</div>
              <div>{arz.sana.data[8].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[8].l}</div>
                 <div className="Green">+{arz.sana.data[8].h}</div>
              </div>
            </li>
            <li id="style">
              <div id="flag">
              <img src={turk} />
              </div>
              <div>Lyra</div>
              <div>{arz.sana.data[4].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[4].l}</div>
                 <div className="Green">+{arz.sana.data[4].h}</div>
              </div>
              </li>  
            <li id="style">
              <div id="flag">
              <img src={chin} />
              </div>
              <div>Yuan</div>
              <div>{arz.sana.data[20].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[20].l}</div>
                 <div className="Green">+{arz.sana.data[20].h}</div>
              </div>
              </li> 
              <li id="style">
            <div id="flag">
            <img src={arab} />
            </div>
            <div>Rial</div>
            <div>{arz.sana.data[21].p}</div>
            <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[21].l}</div>
                 <div className="Green">+{arz.sana.data[21].h}</div>
              </div>
            </li>
           
            <li id="style">
              <div id="flag">
              <img src={ind} />
              </div>
              <div>Rupee</div>
              <div>{arz.sana.data[3].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[3].l}</div>
                 <div className="Green">+{arz.sana.data[3].h}</div>
              </div>
              </li>  
            <li id="style">
              <div id="flag">
              <img src={male} />
              </div>
              <div>Ringgit</div>
              <div>{arz.sana.data[25].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[25].l}</div>
                 <div className="Green">+{arz.sana.data[25].h}</div>
              </div>
              </li> 
              <li id="style">
            <div id="flag">
            <img src={afg} />
            </div>
            <div>Afghan</div>
            <div>{arz.sana.data[22].p}</div>
            <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[22].l}</div>
                 <div className="Green">+{arz.sana.data[22].h}</div>
              </div>
            </li>
            <li id="style">
              <div id="flag">
              <img src={kov} />
              </div>
              <div>Dinar</div>
              <div>{arz.sana.data[23].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[23].l}</div>
                 <div className="Green">+{arz.sana.data[23].h}</div>
              </div>
            </li>
            <li id="style">
              <div id="flag">
              <img src={iraq} />
              </div>
              <div>Dinar</div>
              <div>{arz.sana.data[13].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[13].l}</div>
                 <div className="Green">+{arz.sana.data[13].h}</div>
              </div>
              </li>  
            <li id="style">
              <div id="flag">
              <img src={bah} />
              </div>
              <div>Dinar</div>
              <div>{arz.sana.data[24].p}</div>
              <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[24].l}</div>
                 <div className="Green">+{arz.sana.data[24].h}</div>
              </div>
              </li> 
              <li id="style">
            <div id="flag">
            <img src={oman} />
            </div>
            <div>Rial</div>
            <div>{arz.sana.data[25].p}</div>
            <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[25].l}</div>
                 <div className="Green">+{arz.sana.data[25].h}</div>
              </div>
            </li>
            <li id="style">
            <div id="flag">
            <img src={qatar} />
            </div>
            <div>Rial</div>
            <div>{arz.sana.data[26].p}</div>
            <div id="hl"> 
                 <div className="Red"> -{arz.sana.data[26].l}</div>
                 <div className="Green">+{arz.sana.data[26].h}</div>
              </div>
            </li>
          </ul>
          </div>
  
          <div id="seke"><p id="tittle_list">COIN </p>
          <ul>
            <li id="style">
            <div id="flag">
            <img src={coin} />
            </div>
            </li>
            <li id="style">
            <div id="flag">
            <img src={coin} />
            </div>
            </li>
            <li id="style">
            <div id="flag">
            <img src={coin} />
            </div>
            </li>
            <li id="style">
            <div id="flag">
              <img src={coin} />
            </div>
            </li>
          </ul>
          </div>
  
          <div id="tala"><p id="tittle_list">GOLD </p>
          <ul>
            <li id="style">
            <div id="flag">
            <img src={tala} />
            </div>
            </li>
            <li id="style">
            <div id="flag">
            <img src={tala} />
            </div>
            </li>
            <li id="style">
            <div id="flag">
            <img src={tala} />
            </div>
            </li>
            <li id="style">
            <div id="flag">
            <img src={bit} />
            </div>
            </li>
          </ul>
          </div>
        </div>
  
        ) : ('')}

       <div className="body_footer">       
        <div className="Update_botton" >
            <IconButton onClick={update} >
            <UpdateIcon />
            </IconButton>        
          </div>
          {(typeof arz.sana != "undefined") ? (
          <div className="modify">
            <h4>Last Modified </h4>
            {arz.sana.data[0].updated_at}
          </div>
          ) : ('')}
      </div>

      
        </div>
    
    );
  }

 