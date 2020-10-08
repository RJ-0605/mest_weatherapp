

import React from 'react';
import './NewCssApp.css';
import './Arrangeapp.css';
import FirstComponent from './FirstComponent';
import ThirdComponent from './ThirdComponent';
import TempComponent from './TempComponent';
import LocateComponent from './LocateComponent';


 function SecondComponent() {

 	    const cat='https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png'


 	return (
 		<div className="leftcolumn">

 		<br/>
   			<FirstComponent />
      <br/>
      <img src={cat}   style={{display: 'block' , margin:'auto',}}  />

      <br/>
      <br/>
      		<TempComponent />
      		
       
 		</div>

 	);

 }

 export default SecondComponent;