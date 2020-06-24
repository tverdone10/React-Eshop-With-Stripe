import React from "react"

const items = [
    {skey: "sku", quantity: 1, price: 99999}
]

export default function Cart ({stripeToken}) {
    return <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                    }
                </tbody>
            </table>

        </div>
}