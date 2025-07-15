export interface Keyboard {
    productName: string,
    description: string,
    merk: string,
    switchType: string,
    size: string,
    feature: string[],
    keycaps: string,
    year: number,
    type: string,
    knob: boolean,
    price: string,
    picture: string,
    reference: string | null,
}

export interface DataReference {
    layout: number,
    keycaps: string,
    switchType: string,
    connectivity: string,
    knob: boolean,
    minPrice: number,
    maxPrice: number,
}
