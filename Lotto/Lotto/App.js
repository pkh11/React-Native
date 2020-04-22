import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import _ from 'underscore';

const numbers = [];
_.times( 45, n => numbers.push( n+1 ));
/*
  ( n ) => {
    number.push( n + 1 );
  }
*/

export default function App() {
  const shuffled = _.shuffle( numbers );
  shuffled.length = 6;
  const [ result, setResult ] = useState(shuffled);
  const onPressHandler = () => {
    const shuffled = _.shuffle( numbers );
    shuffled.length = 6;
    setResult(shuffled);
  };

  const [ count, setCount ] = useState( 0 ); // [스테이트명, 업데이트함수] = useState( 초기값 )
  const [ onOff, setOnOff ] = useState( false );
  // 업데이트가 필요한 것들은 useState를 통해 적용
  
  return (
    <View style={styles.container}>
      <Text>{ result.join( ', ' ) }</Text>
      <Button title="reload" onPress={ onPressHandler }></Button>
      <Text>{ count }</Text>
      <Button title="증가" onPress={ () => setCount( count + 1 )}></Button>
      <Button title="감소" onPress={ () => setCount( count - 1 )}></Button>
      <Text>{ onOff ? 'ON' : 'OFF' }</Text>
      <Button title="Toggle" onPress={ () => setOnOff(!onOff)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
