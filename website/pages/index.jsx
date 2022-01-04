import { useState, useEffect } from 'react';

import { userService } from 'services';

export default Home;

function Home() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    return (
        <section className="jumbotron text-center">
        <div className="container">
          <div className={"navlogo"}>
        <span className={"arrow1"}></span>
        <span className={"arrow"}></span>
        <style jsx>{`
          .arrow1 {
            width: 5vw;
            height: 5vw;
            border: 2.5vw solid;
            border-color: 
              #feb236 	
              transparent
              transparent
             #feb236;
            border-radius: 5px;
            transform: rotate(-45deg);
          border-bottom: 5px ;
              border-right: 5px ;}
          
          .arrow {
            border-radius: 5px;
            width: 5vw;
            height: 5vw;
            border: 2.5vw solid;
            border-color: #80ced6 transparent transparent #80ced6;
            transform: rotate(135deg);
           margin: -55px;
             margin-top: -7px;
             margin-left: -30px;
          
           border-bottom: 0px ;
              border-right: 0px ;}        
          .navlogo {
            width: 90vw;
  height: 40vh;
  display: flex;
  
  justify-content: center;
  align-items: center;
  display: flex;
    width: 100%;
    max-width: 60%;
    margin: 0 auto;
    justify-content: center;

          }
        `}</style>
      </div>
          <h1>

The Logo Above Is Made Of Pure CSS          </h1>
        </div>
      </section>

    );
}
