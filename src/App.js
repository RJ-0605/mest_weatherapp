import React from 'react';
import dogpic from './doggie.jpg';

import NavbarComponent from './NavbarComponent';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';

import SixthComponent from './SixthComponent';

import TenthComponent from './TenthComponent';
import './App.css';
import './NewCssApp.css';
import './Arrangeapp.css';
import './weather.css';


function App() {

          // <input   placeholder="Search.."  style={{float: 'right', padding: '6px', border: 'none', marginTop: '15px', marginRight: '16px',fontSize: '17px',}} />

  return (
    

    <div >

    <br />
          <form className="col-md-12" >
                    <div className="input-group">
                        <input type="text" className="form-control" id="search"  style={{height: 56}} placeholder="Search for..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-default bg-light" type="submit" style={{height: 56,}}>Go!</button>
                        </span>
                    </div>
                </form>
       <br />
       <br />
       <br />
      
      <SecondComponent />
      <ThirdComponent />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      
      
      
     
       
    </div>
      
  );
}

export default App;
