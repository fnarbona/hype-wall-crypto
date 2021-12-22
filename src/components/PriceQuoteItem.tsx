import { Center, WrapItem, Text } from "@chakra-ui/react"
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'

interface Props {
    [filter: string]: string,
    symbol: string,
    circulating_supply: string,
    price: string,
    market_cap: string,
    market_cap_dominance: string,
    percent_change_1h: string,
    percent_change_7d: string,
    percent_change_24h: string,
    percent_change_30d: string,
    percent_change_60d: string,
    percent_change_90d: string,
    volume_24h: string,
    volume_change_24h: string
}

export const PriceQuoteItem = ({filter, symbol, price, circulating_supply, ...props}: Props) => {
    const tickerColor = props[filter] >= "0" ? 'green.400' : 'red.500'

    return (
    <WrapItem>
        <Center
            h='200px'
            w='200px'
            flexDirection='column'
            borderRadius='5'
            color='white'
            bg="gray.700"
        >
            <Text fontSize={30}fontWeight={'bold'}>{symbol}</Text>
            <Text fontSize={30}>$ {price}</Text>
            <Text fontSize={24}>{circulating_supply}</Text>
            <Text fontSize={20} color={ tickerColor }>
                { tickerColor === 'green.400' ? <ChevronUpIcon/> : <ChevronDownIcon/> }
                { props[filter] }
            </Text>
        </Center>
    </WrapItem>
)}