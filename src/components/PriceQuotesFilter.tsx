import { Wrap, Stack, Center, WrapItem } from "@chakra-ui/react"
import { Button } from '@chakra-ui/react'

export const PriceQuotesFilter = ({filter, setFilter}: any) => {
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
        <Wrap justify='center' h="32" w="60%" wrap={"wrap"}>
            {filterOptions.map(({label, value}) => (
                <WrapItem>
                    <Button
                        key={label}
                        w="14" 
                        colorScheme='teal' 
                        variant={value === filter ? 'solid' : 'outline'} 
                        onClick={() => setFilter(value)}
                    >
                        {label}
                    </Button>
                </WrapItem>
            ))}
        </Wrap>
    )
}