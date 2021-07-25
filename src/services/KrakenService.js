import http from '../http-kraken'
  
const getPrice = (ticker) => {
    return http.get(`/ticker/price?symbol=${ticker}`)
}

const getPriceChange24HoursPercent = (ticker) => {
    return http.get(`/ticker/24hr?symbol=${ticker}`)
}

const KrakenService = {
    getPrice,
    getPriceChange24HoursPercent
}
  
export default KrakenService