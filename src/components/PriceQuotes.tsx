import { Center, Stack, Wrap } from "@chakra-ui/react"
import { usePriceQuotes } from "../utils/hooks";
import { PriceQuoteItem } from "./PriceQuoteItem";
import { PriceQuotesFilter } from './PriceQuotesFilter';
import { useState } from "react";

export const PriceQuotes = () => {
    const [filter, setFilter] = useState('percent_change_24h')
    const priceQuotes = usePriceQuotes(100000)

    return (
        <Center flexDirection={'column'}>
            <PriceQuotesFilter filter={filter} setFilter={setFilter}/>
            <Wrap 
                w='50%'
                spacing='20'
                justify='center'
            >
                {
                    priceQuotes.map(quote => <PriceQuoteItem key={quote.id} filter={filter} {...quote} />)
                }
            </Wrap>
        </Center>
    )
}