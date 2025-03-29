import { infos } from "../data"
import Informations from "./Informations"



const AppMain = () =>{
    return (
        <div>
           <h3>Чем мы отличаемся от других</h3>
            <Informations infos={infos} />
        </div>
    )
}
export default AppMain