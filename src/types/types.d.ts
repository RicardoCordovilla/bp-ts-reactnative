export interface Product {
    id: number
    name: string
    desription: string
    logo: string
    date_release: string
    date_revision: string
}

export interface ProductsList {
    products: Product[]
}



