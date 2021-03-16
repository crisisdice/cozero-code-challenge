import React from 'react'

import { CryptoGraph } from '../../../ctypes/coinbaseResponse'
import { Chart } from 'react-google-charts'

export function CryptoGraphView({ data }: { data: CryptoGraph }): JSX.Element {
    function getPoints(data: CryptoGraph) {
        return data.prices.map(x => [new Date(x[0]), x[1]])
    }

    return <Chart
        height={'400px'}
        chartType="LineChart"
        loader={<div className="loading"></div>}
        data={[
            ['x', 'Price in USD'],
            ...getPoints(data)
        ]}
        options={{
            hAxis: {
                title: 'Date',
            },
        }}
        rootProps={{ 'data-testid': '1' }}
    />
}

