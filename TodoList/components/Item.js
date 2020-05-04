import React from 'react';
import styled from 'styled-components/native';
import {Button, Text} from 'react-native';

const TodoItem = styled.View`
flexDirection: row;
width: 350;
justifyContent: space-between;
`
// 구조 분해 할당, Destructure Assignment
const Item = ( { item, remove } ) => {
    console.log( item.id ); // new Date().getTime().toString()
    console.log( item.content ); // content 할일 내용
    return (
      <TodoItem key={ item.id } style={ [styles.row, styles.todoItem] }>
        <Text>{ item.content }</Text>
        <Button color={ '#f00' } title="삭제" onPress= { ()=> remove( item.id ) }></Button>
      </TodoItem>
    );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    todoItem: {
      width: 350,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  });
  export default Item;
  // import Item from './components/Item;'