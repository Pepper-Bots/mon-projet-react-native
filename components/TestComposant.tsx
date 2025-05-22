import {View, Text, Pressable, GestureResponderEvent} from 'react-native';


type TestComposantProps = {value: string, callback: (event : GestureResponderEvent) => void}


export function TestComposant({ value, callback } : TestComposantProps) {

  return <Pressable onPress={callback}>
    <View>
      <Text>MON TEST : {value}</Text>
    </View>
  </Pressable>;

}

