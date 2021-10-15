import { Keypair } from '@solana/web3.js'
import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react'

type WalletState = {
    wallet?: Keypair
    selectWallet: (wallet?: Keypair) => void
}

const WalletContext = createContext<WalletState | undefined>(undefined)

type WalletProps = {}

export function WalletProvider({ children}: PropsWithChildren<WalletProps>) {
    const [wallet, setWallet] = useState<Keypair | undefined>()
    const selectWallet = useCallback((wallet?: Keypair) => {
        setWallet(wallet)
    }, [])

    const state = useMemo(() => ({ wallet, selectWallet }), [wallet, selectWallet])
    
    return (
        <WalletContext.Provider value={state}>
            {children}
        </WalletContext.Provider>
    )
}

export function useWallet() {
    const context = useContext(WalletContext)
    if (context === undefined) throw new Error('useWallet must be used within a WalletProvider.')
    return context
}