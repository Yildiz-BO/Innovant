import React, { Component, Fragment } from "react";
import { Nav } from 'react-bootstrap';
import Image from 'next/image';


export { Footer };

function Footer() {    
        return (
            <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="image-column">            
            <Image src="/mypic.png" width={90} height={90}  />
            <p> All Rights Reserved </p>

</div>  
            <style jsx>{`
          .image-column {
            margin: 0 auto;
        }
      `}</style>
          </Nav>
        )
    }


