import './StorageType.css'
import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import WalletStorageService from "../../../../services/WalletStorageService";


const StorageType = (id) => {
    let match = useRouteMatch()
    const [wallets, setWallets] = useState([])

    useEffect(() => {
        retrieveAllWallets()
    }, [])

    const retrieveAllWallets = async () => {
        try {
            const response = await WalletStorageService.getById(id)
            setWallets(response.data)
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className='StorageType'>
            { wallets.map(i => i) }
        </div>
    )
}

export default StorageType
