import React, { useState } from 'react'

import { CryptoData, CryptoGraph } from '../../ctypes/coinbaseResponse'

import { CryptoGraphView } from './views/cryptoGraphView'
import { CryptoDataView } from './views/cryptoDataView'
import { SearchView } from './views/searchView'

function Home(): JSX.Element {
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);
  const [cryptoGraph, setCryptoGraph] = useState<CryptoGraph | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  return <div className="center">
    <div>
      <SearchView setCryptoData={setCryptoData}
        setCryptoGraph={setCryptoGraph}
        setLoading={setLoading}/>
      <div className="center">
        {
          loading ?
            <div className="loading"></div> :
            <div>
              <div>
                {cryptoData && <CryptoDataView data={cryptoData} />}
              </div>
              <div>
                {cryptoGraph && <CryptoGraphView data={cryptoGraph} />}
              </div>
            </div>
        }
      </div>
    </div>
  </div>
}

export default Home


