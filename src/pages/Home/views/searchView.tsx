import React, { useState } from 'react'

import { CryptoData, CryptoGraph } from '../../../ctypes/coinbaseResponse'
import { config } from '../../../config'

export function SearchView({ setCryptoData, setCryptoGraph, setLoading }:
    { setCryptoData: Function, setCryptoGraph: Function, setLoading: Function }):
    JSX.Element {
    const [error, setNotFoundError] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [previousSearches, setPreviousSearches] = useState<string[]>([]);

    async function get<T>(endpoint: string) {
        let response = await fetch(config.cryptoApi + endpoint) as Response;
        if (!response.ok) {
            throw Error(response.status.toString());
        }
        return await response.json() as T;
    }

    async function submit(event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>) {
        try {
            setNotFoundError(false);
            if (searchTerm === "")
                return;

            setLoading(true);

            let cryptoData = await get<CryptoData>(searchTerm);
            let cryptoGraph = await get<CryptoGraph>(`${searchTerm}/market_chart?vs_currency=usd&days=5`);

            setCryptoData(cryptoData);
            setCryptoGraph(cryptoGraph);

            if (!previousSearches.includes(searchTerm))
                setPreviousSearches([...previousSearches, searchTerm]);
        } catch (error) {
            if (error.message === "404")
                setNotFoundError(true);
            setCryptoData(null);
            setCryptoGraph(null);
        } finally {
            setLoading(false);
            setSearchTerm("");
        }
    }

    return <div >
        <div className="search">
            <input className="search-input"
                type="text"
                onChange={(event) => setSearchTerm(event.target.value)}
                value={searchTerm}>
            </input>
            <button onClick={submit} className="search-button">Search</button>
            <div className="search-content">
                {previousSearches.map(term => <span onClick={() => { setSearchTerm(term); }} key={term}>{term}</span>)}
            </div>
            { error && <div>Currency not Found</div> }
        </div>
    </div>
}