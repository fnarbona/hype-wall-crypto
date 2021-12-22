import { Center, Stack, Wrap } from "@chakra-ui/react"
import { usePriceQuotes } from "../utils/hooks";
import { PriceQuoteItem } from "./PriceQuoteItem";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from "react";

export const PriceQuotes = () => {
    const [filter, setFilter] = useState('percent_change_24h')
    const priceQuotes = usePriceQuotes(10000000)

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

export const PriceQuotesFilter = ({filter, setFilter}: any) => {
    console.log(filter)
    const filterOptions = [
        {
            label: '1H',
            value: 'percent_change_1h'
        },
        {
            label: '24H',
            value: 'percent_change_24h'
        },
        {
            label: '7D',
            value: 'percent_change_7d'
        },
        {
            label: '30D',
            value: 'percent_change_30d'
        },
        {
            label: '60D',
            value: 'percent_change_60d'
        },
        {
            label: '90D',
            value: 'percent_change_90d'
        },
    ]

    return (
        <Stack direction='row' spacing={2} align='center' h="32">
            {filterOptions.map(({label, value}) => (
                <Button
                    key={label}
                    w="14" 
                    colorScheme='teal' 
                    variant={value === filter ? 'solid' : 'outline'} 
                    onClick={() => setFilter(value)}
                >
                    {label}
                </Button>
            ))}
        </Stack>
    )
}