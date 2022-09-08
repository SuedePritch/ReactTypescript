import { useState } from "react";
type AuthUser = {
    name: string
    email: string
}

export const User =()=>{
    const [user, setUser] = useState<null | AuthUser>(null)
    const handleLogin = () =>{
        setUser({
            name:'James',
            email: 'james@email.com'
        })
    }
    const handleLogout = () =>{
        setUser(null)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>LogOut</button>
            <h6>User name is {user?.name}</h6>
            <h6>User email is {user?.email}</h6>
        </div>
    )
}