import React, { useContext } from 'react'
import { Context } from '../Context'
import './Div.css'

function Div({row,col}) {
    const {incrementCounter,visible,grid}=useContext(Context);
    return (
        <div className='mydiv' onClick={()=>incrementCounter(row,col,grid[row][col])}>
            <img src={visible[row][col] ? grid[row][col]: "https://plainbackground.com/plain1024/d9dddc.png"}/>
        </div>
    )
}

export default Div
