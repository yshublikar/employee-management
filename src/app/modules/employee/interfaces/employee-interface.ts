export interface Employee {
    id: Number;
    name: String,
    phone: Number,
    address: {
        city: String,
        address_line1: String,
        address_line2: String,
        postal_code: Number
    }
}

export interface Employees {
    [key: number]: Employee;
}