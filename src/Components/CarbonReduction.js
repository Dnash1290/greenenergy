import "./CarbonReduction.css"

export default function CarbonReduction({data}){
    return(
        <div className="carbon-reduction-container">
            <h2>{data.title}</h2>
            <div className="carbon-reduction-flex" >
                <p>{data.description}</p>
                <img src={data.img}></img>
            </div>
        </div>
    )
}
