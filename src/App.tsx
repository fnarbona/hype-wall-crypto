import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { PriceQuotes } from './components/PriceQuotes'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="start" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text fontSize="60" fontWeight="bold" pb="20" color="#51C9C5">
            Hype Wall
          </Text>
          <PriceQuotes/>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
