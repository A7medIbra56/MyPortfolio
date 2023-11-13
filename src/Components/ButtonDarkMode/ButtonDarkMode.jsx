'use client'

import {
  Button,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'


const NavLink = (props) => {
  const { children } = props

  return (
      {children}
  )
}

export default function ButtonDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
         <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
    </>
  )
}

/* 


































 */