import { extendTheme, ThemeOverride, withDefaultVariant, type ThemeConfig } from "@chakra-ui/react";
import { InputForm } from "./Input";
import { mode } from '@chakra-ui/theme-tools'


const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}



export const theme = extendTheme(
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'NumberInput', 'PinInput', 'Textarea'],
  }),
  withDefaultVariant({
    variant: 'solid',
    components: ['Button'],
  }),
  {
    config,
    styles: {
      global: (props: any) => ({
        body: {
          bg: mode('#f7f7f7', '#223544')(props),
        },
      })
    },
    // colors: {
    //   primary: {
    //     main: '#01b981',
    //     50: "#e3f2fd",
    //     100: "#bbdefb",
    //     200: "#90caf9",
    //     300: "#64b5f6",
    //     400: "#01b981",
    //     500: "#01b981",
    //     600: "#01b981",
    //     700: "#1976d2",
    //     800: "#1565c0",
    //     900: "#0d47a1",
    //   },
    // },
    components: {
      Input: {
        baseStyle: {
          _focus: {
            // borderColor: '#766fe4',
            // boxShadow: 'none'
          },
        },
        filled: {
          _focus: {
            outlineColor: '#766fe4',
            borderColor: '#766fe4',
            boxShadow: 'none'
          },
        },
        // defaultProps: {
        //   variant: 'baseStyle'
        // }
      },
      ...InputForm,
      Container: {
        baseStyle: {
          maxW: "1280px",
          // maxW: "1680px",
        },
      },
      Button: {
        baseStyle: {
          // ...define your base styles
          // color: '#fff',
          // bg: '#01b981',
          _hover: {
            // bg: '#059669'
          }
        },
        variants: {
          // Make a variant, we'll call it `base` here and leave it empty
          base: {},
          secondary: {
            //...define other variants
          }
        },
        defaultProps: {
          // Then here we set the base variant as the default
          variant: 'base'
        }
      },
    },
  });
