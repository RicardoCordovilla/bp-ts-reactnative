import { create } from 'zustand'
import { Product } from '../../types/types';

interface GlobalStoreProps {
    productStore: Product
    setProductStore: (product: Product) => void
    clearProductStore: () => void
}

export const useGlobalStore = create<GlobalStoreProps>((set) => ({
    productStore: {
        id: '',
        name: '',
        description: '',
        logo: '',
        date_release: '',
        date_revision: ''
    },
    setProductStore: (product: Product) => set({ productStore: product }),
    clearProductStore: () => set({ productStore: { id: '', name: '', description: '', logo: '', date_release: '', date_revision: '' } })
}))
