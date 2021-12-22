import { useState, useEffect } from 'react'
import { getPriceQuotes } from "../utils/api"
import { formatCirculatingSupply } from '../utils/calc';

export const usePriceQuotes = (delay: number = 10000) => {
    const [priceQuotes, setPriceQuotes] = useState([] as any[])
    let timeout: ReturnType<typeof setTimeout>;

    useEffect(() => {
        priceQuotes.length < 1
        ? getPriceQuotes().then(res => setPriceQuotes(res))
        : timeout = setTimeout(() => getPriceQuotes().then(res => setPriceQuotes(res)), delay)

        return () => clearTimeout(timeout)
    }, [priceQuotes])

    const formattedPriceQuotes = priceQuotes.map(({
        id,
        symbol,
        circulating_supply,
        quote
    }) => {
        return {
            id,
            symbol,
            circulating_supply: formatCirculatingSupply(circulating_supply),
            price: quote.USD.price.toFixed(2),
            market_cap: Math.round(quote.USD.market_cap).toString(),
            market_cap_dominance: Math.round(quote.USD.market_cap_dominance).toString(),
            percent_change_1h: quote.USD.percent_change_1h.toFixed(2).toString() + "%",
            percent_change_7d: quote.USD.percent_change_7d.toFixed(2).toString() + "%",
            percent_change_24h: quote.USD.percent_change_24h.toFixed(2).toString() + "%",
            percent_change_30d: quote.USD.percent_change_30d.toFixed(2).toString() + "%",
            percent_change_60d: quote.USD.percent_change_60d.toFixed(2).toString() + "%",
            percent_change_90d: quote.USD.percent_change_90d.toFixed(2).toString() + "%",
            volume_24h: Math.round(quote.USD.volume_24h).toString(),
            volume_change_24h: Math.round(quote.USD.volume_change_24h).toString() + "%",
        }    
    })

    return formattedPriceQuotes
}