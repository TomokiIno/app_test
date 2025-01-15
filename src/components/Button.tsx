'use client'; // クライアントサイドで動作させる

import React, { useState } from 'react';

export default function CounterButton() {
  const[colorCord, setColorCord]=useState('#000000')
  const [colorR, setColorR] = useState(0);
  const [colorG, setColorG] = useState(0);
  const [colorB, setColorB] = useState(0);

  const colorCordChange = (e) => {
    const value = e.target.value;

    if(value.slice(0,1)=='#' && value.length==7){
      const valueR:number = parseInt(value.slice(1,3),16);
      const valueG:number = parseInt(value.slice(3,5),16);
      const valueB:number = parseInt(value.slice(5,7),16);

      if(!isNaN(valueR) && !isNaN(valueG) && !isNaN(valueB)){
        if(valueR >= 0 && valueR <= 255 && valueG >= 0 && valueG <= 255 && valueB >= 0 && valueB <= 255){
          setColorR(valueR);
          setColorG(valueG);
          setColorB(valueB);
          setColorCord(value);
        }
      }
    }else{
      setColorCord(value);
    }
    
  }

  const redColorChange = (e) => {
    const value = parseInt(e.target.value,10);

    if(!isNaN(value)){
      if(value >= 0 && value <= 255){
        let valueR:string = value.toString(16);
        let valueG:string = colorG.toString(16);
        let valueB:string = colorB.toString(16);

        if(valueR.length == 1){
          valueR = '0' + valueR;
        }

        if(valueG.length == 1){
          valueG = '0' + valueG;
        }

        if(valueB.length == 1){
          valueB = '0' + valueB;
        }
        const valueCord = '#' + valueR + valueG + valueB;
        setColorR(value);
        setColorCord(valueCord);
      }
    }
  }

  const greenColorChange = (e) => {
    const value = parseInt(e.target.value,10);

    if(!isNaN(value)){
      if(value >= 0 && value <= 255){
        let valueR:string = colorR.toString(16);
        let valueG:string = value.toString(16);
        let valueB:string = colorB.toString(16);

        if(valueR.length == 1){
          valueR = '0' + valueR;
        }

        if(valueG.length == 1){
          valueG = '0' + valueG;
        }

        if(valueB.length == 1){
          valueB = '0' + valueB;
        }
        const valueCord = '#' + valueR + valueG + valueB;
        setColorG(value);
        setColorCord(valueCord);
      }
    }
  }

  const blueColorChange = (e) => {
    const value = parseInt(e.target.value,10);

    if(!isNaN(value)){
      if(value >= 0 && value <= 255){
        let valueR:string = colorR.toString(16);
        let valueG:string = colorG.toString(16);
        let valueB:string = value.toString(16);

        if(valueR.length == 1){
          valueR = '0' + valueR;
        }

        if(valueG.length == 1){
          valueG = '0' + valueG;
        }

        if(valueB.length == 1){
          valueB = '0' + valueB;
        }
        const valueCord = '#' + valueR + valueG + valueB;
        setColorB(value);
        setColorCord(valueCord);
      }
    }
  }

  return (
    <div>
      <h2>カラーコード</h2>
      <input type="text" value={colorCord} onChange={colorCordChange}/>
      <h2>RGB</h2>
      <p>R:<input type="number" value={colorR} onChange={redColorChange}/></p>
      <p>G:<input type="number" value={colorG} onChange={greenColorChange}/></p>
      <p>B:<input type="number" value={colorB} onChange={blueColorChange}/></p>
      
      <h2>確定</h2>
      <p>{colorCord}</p>
      <div style={{width: '200px', height:'200px', backgroundColor: colorCord, marginTop:'20px', border:'1px solid #ccc'}}></div>
    </div>
  );
}