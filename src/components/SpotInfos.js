import { useContext, useState } from "react"
import { MpsContext } from "../context/MpsContext"
import '../css/SpotInfos.css'

const SpotInfos = () => {
    const {value2, value3, value6} = useContext(MpsContext)
    const [surfData, setSurfData] = value2
    const [windData, setWindData] = value3
    const [comments, setComments] = value6

    console.log(value2)
    console.log(value3)
    
    return(
        <div className="card-surf-infos shadow">
            <div>
                <p>Time</p>
                <p></p>
            </div>
            <div>
                <p>Wave Direction</p>
                <p></p>
            </div>
            <div>
                <p>Wave Height</p>
                <p></p>
            </div>
            <div>
                <p>Wave period</p>
                <p></p>
            </div>
            <div>
                <p>Wind Speed</p>
                <p></p>
            </div>
            <div>
                <p>Wind Direction</p>
                <p></p>
            </div>
        </div>
    )
}

export default SpotInfos