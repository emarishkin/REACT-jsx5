

const Informations = ({infos}) =>{
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
               {infos.map(info=>(
                 <div style={{width:'800px',fontSize:20,marginBottom:25}} key={info.title}>
                    {info.title} {info.descriptions}
                 </div>
               ))}              
            </div>
    )
}

export default Informations