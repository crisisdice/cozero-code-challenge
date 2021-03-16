import React from 'react'

import { CryptoData } from '../../../ctypes/coinbaseResponse'

export function CryptoDataView({ data }: { data: CryptoData }): JSX.Element {
    const direction = data.market_data.price_change_percentage_24h < 0 ? "down" : "up";

    return <table className="styled-table">
        <thead>
            <tr>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name </td><td>{data.name} ( {data.symbol} )</td>
            </tr>
            <tr>
                <td>Logo </td><td><img src={data.image.small} alt="cryptoLogo"/></td>
            </tr>
            <tr>
                <td>Market Cap Rank </td><td>{data.market_cap_rank}</td>
            </tr>
            <tr>
                <td>Current Price </td><td>$ {data.market_data.current_price.usd} { }</td>
            </tr>
            <tr>
                <td>Price Change </td><td><div className={direction + "-triangle"}  ></div>{data.market_data.price_change_percentage_24h}</td>
            </tr>
        </tbody>
    </table>
}