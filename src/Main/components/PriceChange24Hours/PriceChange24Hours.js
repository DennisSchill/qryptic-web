import './PriceChange24Hours.css'
import { useEffect, useState } from 'react'
import KrakenService from '../../../services/KrakenService'

const PriceChange24Hours = ({ ticker }) => {
    const [priceInfo, setPriceInfo] = useState(null)
    const displayCurrencyValue = 'USDT'
    
    useEffect(() => {
      getCurrencyData(ticker + displayCurrencyValue)
    }, [])
  
    const getCurrencyData = async (ticker) => {
      try {
        const response = await KrakenService.getPriceChange24HoursPercent(ticker)
        console.log(response.data.priceChangePercent)
        const convertNum = Number(response.data.priceChangePercent)
        setPriceInfo(convertNum.toFixed(2));
      } catch (err) {
        console.log(err)
      }
    }
  
    return (
      <div className='PriceChange24Hours'>{priceInfo}%</div>
    )
}

export default PriceChange24Hours