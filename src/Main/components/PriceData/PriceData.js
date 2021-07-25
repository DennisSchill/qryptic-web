import './PriceData.css'
import { useEffect, useState } from 'react'
import KrakenService from '../../../services/KrakenService'

const PriceData = ({ ticker }) => {
    const [priceInfo, setPriceInfo] = useState(null)
    const displayCurrencyValue = 'USDT'
    
    useEffect(() => {
      getCurrencyData(ticker + displayCurrencyValue)
    }, [])
  
    const getCurrencyData = async (ticker) => {
      try {
        const response = await KrakenService.getPrice(ticker)
        const convertNum = Number(response.data.price)
        setPriceInfo(convertNum.toFixed(2));
      } catch (err) {
        console.log(err)
      }
    }
  
    return (
      <div className='PriceData'>${priceInfo}</div>
    )
}

export default PriceData