import { useContext } from "react"
import { ThemeContext } from './ThemeContext'
export const Box = () =>{
    const theme = useContext(ThemeContext)
    return(
        <div style={{backgroundColor: theme.primary.main, color: theme.primary.text, padding:'4rem', margin:'2rem', border: `15px solid ${theme.secondary.text}`}}>
            <h2>Theme Context</h2>
        </div>
    )
}