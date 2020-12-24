import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    const dataBuilder = (d) => {
        let months = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , 
        "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];
        let days = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month =months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month}, ${year}`
    }
    return (
        <div className="header">
            <div id="name"> 
            <p id="d1">web arz</p>
            <div>                
                <MenuIcon />
            </div>
            </div>
            <div>
                <p id="update">Today </p>
                <p id="Dat">{dataBuilder(new Date())}</p>
            </div>
        </div>
        
    )
}

export default Header
