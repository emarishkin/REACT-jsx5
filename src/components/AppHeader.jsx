import { useState } from 'react'
import logo from '/111.png'




const AppHeader = () => {

const [now,setNow] = useState(new Date())

setInterval(()=>setNow(new Date()),1000)
    return (
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',gap:100,borderBottom:'1px solid black'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <img style={{width:80,height:80}} src={logo} alt="" />
                <h1>Мое творчество</h1>
            </div>
            <nav style={{display:'flex',gap:20}}>
                <a href="https://result.school/">Главная</a>
                <a href="#">Обучение</a>
                <a href="#">Диагностика</a>
                <a href="#">Отзывы</a>
            </nav>
            <div>
                <p style={{fontSize:25}}>
                  {now.toLocaleTimeString()}
                </p>
            </div>
        </div>
    )
}

export default AppHeader