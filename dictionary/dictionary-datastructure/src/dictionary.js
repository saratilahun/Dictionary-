import React, {useState} from 'react';
import './dictionary.css';

export default function Dictionary(){

    return(
        <div className= 'pagecontainer'>
            <div className='header'>
            <div className="name">
             <h3> English <br /> Dictionary </h3> 
             </div>
              <div>
            <form>
                
                 <input type="text" className="searchbox" name="searchbox" placeholder="search here..."/>
                 <button className="clearbtn" type="reset">&times;</button>
            </form>
                <button className="searchbtn" >&#x1F50E;&#xFE0E;</button>
              </div>
            </div>

            <div className="sideWordbox">
                <button className="Addbtn">Add</button>
                <ul className="sidewords">
                
                </ul>
            </div>

            <div className="descriptionWrapper">
                <button className="editbtn"> &#x270E;</button>
                <button className='deletebtn'> &#x2421;</button>
                <h2 className="word"></h2>
                <h3 className= "defof">Defination of <a id='worddef'></a> </h3>
                <p className="description"> </p>
                
            </div>

        </div>
        

    );
}