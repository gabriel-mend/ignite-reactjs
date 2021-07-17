import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "980": "#181B23",
      "880": "#1f2029",
      "780": "#353646",
      "680": "#4b4d63",
      "580": "#616480",
      "480": "#797d9a",
      "380": "#9699b0",
      "280": "#b3b5c6",
      "180": "#d1d2dc",
      "50": "#eeeef2"
    }
  },
  fonts: {
    body: "Roboto",
    heading: "Roboto"
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
})