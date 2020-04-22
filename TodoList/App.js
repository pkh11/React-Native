import React, { useState, Component } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import _ from 'underscore';
import styled from 'styled-components/native';

// styled components
const Row = styled.View`
  flex-Direction: row;
`
const TodoItem = styled.View`
  flexDirection: row;
  width: 350;
  justifyContent: space-between;
`
const Input = styled.TextInput`
  width:300;
  borderColor: #000;
  borderBottomWidth: 1;
`
/* 
<View style={{ flexDirection: 'row', width: 350, ... }}/>
*/
export default function App() {
  const [ content, setContent ] = useState( 'Text here' );
  const [ list, setList ] = useState( [] );
  const addItem = () => {
    const item = {
      id: new Date().getTime().toString(),
      content: content,
    }
    setList( [ ...list, item ] ); // 전개 연산자 Spread Operation
    // setList에는 항상 새로운 배열을 생성하여 입력한다. '불변성(immutable)'
    // useState가 일어날때, 원본을 두고 새로운 배열을 생성 (불변성 유지를 위해)   
  }
  const remove = id => {
    // https://underscore.org/#reject
    setList( _.reject( list, item => item.id === id ) );
  }
  //safeareaView : safearea 영역 확보
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={ [ styles.row, { marginBottom: 12 } ] }>
          <Input value={ content } 
                    onChangeText={ text => setContent( text )}   
                    style={ styles.inputStyle }></Input>
          <Button title="추가" onPress={ () => addItem() }></Button>
        </View>
        { list.map( item => (
          <TodoItem key={ item.id } style={ [styles.row, styles.todoItem] }>
            <Text>{ item.content }</Text>
            <Button color={ '#f00' } title="삭제" onPress= { ()=> remove( item.id ) }></Button>
          </TodoItem>
        ) )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  row: {
    flexDirection: 'row',
  },
  todoItem: {
    width: 350,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputStyle: {
    width:300, 
    borderColor: "#000", 
    borderBottomWidth: 1
  }
});
