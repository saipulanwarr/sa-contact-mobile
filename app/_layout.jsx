import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { store } from '@/store'
import { Provider } from 'react-redux'
import HeaderRight from '@/components/HeaderRight'

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ 
          title: 'Contacts',
          headerRight: () => <HeaderRight />
        }} />
      </Stack>
      </Provider>
  );
}
