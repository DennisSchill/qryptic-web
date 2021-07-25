import http from '../http-common'

const getAll = () => {
    return http.get('/wallet-storages')
}

const getById = id => {
    return http.get(`/wallet-storages/${id}`)
}

const WalletStorageService = {
    getAll,
    getById,
}

export default WalletStorageService