import { useState, useEffect } from 'react';
import Image from 'next/image';

import { NavLink } from '.';
import { userService } from 'services';

export { Nav };

function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
             <div class="navbar-collapse collapse justify-content-between">

            <div className="navbar-nav mr-auto">
            <Image src="/mypic.png" width={50} height={48} />

                <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
                <NavLink href="/about" exact className="nav-item nav-link">About</NavLink>
                <NavLink href="/contact" exact className="nav-item nav-link">Contact</NavLink>
            </div>
               <div classNAme="navbar-nav ml-auto">
                   <a onClick={logout} className="nav-item nav-link ">Logout</a></div>
                
            </div>
        </nav>
    );
}