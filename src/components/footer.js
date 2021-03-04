import React from "react";
import '../resources/cards.css'


const content ={ 
    title: 'All Rigths Reserved by Felipe Pineda Alpizar',
}

const Footer = props => {
    return (

        <div className="p-3 mt-5 mb-5 bg-dark text-light">
            
            <p className="fs-3 text-center">{content.title}</p>
        
        </div>
       

        );

};

export default Footer;


