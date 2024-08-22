export interface Product {
    id: string
    name: string
    description: string
    logo: string
    date_release: string
    date_revision: string
}

export type ProductsList = {
    products: Product[]
}

export type ProductListProps = {
    products: Product[]
}


export interface Error {
    timestamp: Date;
    status: number;
    error: string;
    path: string;
}

export interface FieldProps {
    label: string
    placeholder: string
    // onChange: (value: string | number) => void
    validation: string | undefined
    disabled: boolean
    value: number | string
}

export type InputFieldProps = FieldProps





