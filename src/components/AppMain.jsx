import { useState } from "react"
import { differences, infos } from "../data"
import Button from "./Button"
import Informations from "./Informations"



const AppMain = () =>{

const [tab,setTab] = useState('')

    return (
        <div>
           <h3>Чем мы отличаемся от других</h3>
            <Informations infos={infos} />
            <div>
            <Button onTab={()=>setTab(differences.way)}>Подход</Button>
            <Button onTab={()=>setTab(differences.easy)}>Творчество</Button>
            <Button onTab={()=>setTab(differences.program)}>Норм</Button>
            </div>
            <h3>{tab}</h3>
        </div>
    )
}
export default AppMain