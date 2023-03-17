import '../css/Meteo.css'
import { useContext, useState } from 'react'
import { MpsContext } from '../context/MpsContext'
import Sunrise from '../images/sunrise.png'
import Sunset from '../images/sunset.png'
import HighTemp from '../images/high_temperature.png'
import LowTemp from '../images/low_temperature.png'
import Rain from '../images/rain.png'

const Meteo = () => {
    const {value9} = useContext(MpsContext)
    const [meteoData, setMeteoData] = value9

    console.log(meteoData)
    
    return(
        <div className='meteo-card shadow'>
            <div className='line'>
                <img src={Sunrise} alt='sunrise' className='img-meteo'/>
                <p>{meteoData.sunrise[0].slice(11, 16).replace(":", "h")}</p>
            </div>
            <div className='line'>
                <img src={Sunset} alt='sunset' className='img-meteo' />
                <p>{meteoData.sunset[0].slice(11, 16).replace(":", "h")}</p>
            </div>
            <div className='line'>
                <img src={HighTemp} alt='max-temperature' className='img-meteo'/>
                <p>{meteoData.temperature_2m_max[0]} °C</p>
            </div>
            <div className='line'>
                <img src={LowTemp} alt='min-temperature' className='img-meteo'/>
                <p>{meteoData.temperature_2m_min[0]} °C</p>
            </div>
            <div className='line'>
                <img src={Rain} alt='rain' className='img-meteo'/>
                <p>{meteoData.precipitation_sum[0]} mm</p>
            </div>
        </div>
)
}

export default Meteo