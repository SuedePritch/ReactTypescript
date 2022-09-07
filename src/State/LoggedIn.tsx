import { useState } from "react"
export const LoggedIn = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {setIsLoggedIn(true)}
    const handleLogout = () =>{setIsLoggedIn(false)}
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>LogOut</button>
            <div>The User is {isLoggedIn ? 'Logged In' : 'Logged Out'}</div>
        </div>
    )
}