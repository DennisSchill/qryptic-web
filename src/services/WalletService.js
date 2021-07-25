import http from '../http-common'

const getAll = () => {
  return http.get('/wallets/')
}

const getById = id => {
  return http.get(`/wallets/${id}/`)
}

const WalletService = {
  getAll,
  getById,
}

export default WalletService