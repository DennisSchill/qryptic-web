import http from '../http-common'

const getAll = () => {
    return http.get('/wallet-platforms')
}

const getById = id => {
    return http.get(`/wallet-platforms/${id}`)
}

const WalletPlatformService = {
    getAll,
    getById,
}

export default WalletPlatformService