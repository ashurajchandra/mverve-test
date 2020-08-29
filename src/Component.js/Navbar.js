import React  from 'react';


const Navbar=(props)=>
{
    const {showMovie,toggleScreen}=props;
   
   //calling showHome function to toggle the home and details screeen
    const showHome=()=>{
        toggleScreen();
    }
    return(
        <div className='nav-bar'>
         
   {showMovie ?   <div> <button className="back-button" onClick={showHome}>Back</button>
   <span className='nav-heading'> Details </span> </div>
   
   :<span className='nav-heading'>Home</span> } 
        </div>
    )
}




export default Navbar;
