import http from '../http-common'
import { API_ENDPOINT } from '../config/url'

const getAll = () => {
  return http.get('/cryptocurrencies/')
}

const getById = id => {
  return http.get(`/cryptocurrencies/${id}/`)
}

const getFromUrl = (url) => {
  return http.get(url)
}

const search = (param) => {
  return http.get(`/search-currencies/?search=${param}`)
}

// const getExact = param => {
//  return http.get(`/search-tags-exact/?search=${param}`)
// }

const getAPILinkOfTagName = async (name) => {
  console.log('This is from get api link')
  const data = await http.get(`/search-tags-exact/?search=${name}`)
                         .then(res => res.data)

  if (data.count < 1) {
    return 'Tag does not exist'
  } else {
    console.log(data.results)
    return `${API_ENDPOINT}/tags/${data.results[0].id}/`
  }
}

const CryptoCurrencyService = {
  getAll,
  getById,
  getFromUrl,
  search,
  getAPILinkOfTagName,
}

export default CryptoCurrencyService