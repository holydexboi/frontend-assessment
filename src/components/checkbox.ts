import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: { // change the font family of the label
    fontSize: '100px'
  },
  control: {
    padding: 1.5, // change the padding of the control
    borderRadius: 2, // change the border radius of the control
    borderColor: '#615bd2'
  }
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })
