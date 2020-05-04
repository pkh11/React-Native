import React from 'react';
import { Button, Text } from 'react-native';


export default ({ navigation }) => {
    <Container>
    <Header>
        <Left>
            <Button transparent>
                <Icon name='menu' />
            </Button>
        </Left>
        <Body>
            <Title>Header</Title>
        </Body>
        <Right />
    </Header>
    <Content>
        <Text>DiaryList</Text>

        <Button title="go to View page" onPress={() => navigation.navigation('DiaryView')}></Button>
    </Content>
    <Footer>
        <FooterTab>
            <Button full>
                <Text>Footer</Text>
            </Button>
        </FooterTab>
    </Footer>
</Container>

    
};