import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import DrawerStack from './DrawerStack'

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  )
}
