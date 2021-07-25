import http from '../http-common'

const getAll = () => {
  return http.get('/exchanges')
}

const getById = id => {
  return http.get(`/exchanges/${id}`)
}

const ExchangeService = {
  getAll,
  getById,
}

export default ExchangeService