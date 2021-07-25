import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.binance.com/api/v3',
  headers: {
    'Content-Type': 'application/json',
  }
})