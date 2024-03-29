import React from 'react';
import { View} from 'react-native';
import Modal from 'expo/src/modal/Modal';
import ModalHost from 'expo/src/modal/ModalHost';
import {Container, Content, Form, Item, Input, Button, Text, Icon} from 'native-base';
import Header from '../../../../components/Header/Header'
import styles from './styles';
import UserSearchResultScreen from "../UserSearchResultScreen/UserSearchResultScreen";
import UserAddFromListScreen from "../../UserAddFromListScreen/UserAddFromListScreen";
import UserCreateScreen from "../../UserCreateScreen/UserCreateScreen";

//obrazovka zobrazujuca pridanie uzivatela spolu s moznostou vyhladania
class UserSearchIndexScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            term: '',
            userSearchResultModalVisible: false,
            userAddFromListModalVisible: false,
            userCreateModalVisible: false,
        };

        this.goBack = this.goBack.bind(this);
        this.setUserSearchResultModalVisible = this.setUserSearchResultModalVisible.bind(this);
        this.setUserAddFromListModalVisible = this.setUserAddFromListModalVisible.bind(this);
        this.setUserCreateModalVisible = this.setUserCreateModalVisible.bind(this);
    };

    setUserSearchResultModalVisible(visible) {
        this.setState({userSearchResultModalVisible: visible});
    }

    setUserAddFromListModalVisible(visible) {
        this.setState({userAddFromListModalVisible: visible});
    }

    setUserCreateModalVisible(visible) {
        this.setState({userCreateModalVisible: visible});
    }

    goBack () {
        this.props.navigation.goBack()
    }

    render() {

        return (
            <ModalHost>
                <Container >
                    <Header
                        title='Pridať osobu'
                        left={
                            <Button transparent onPress={this.goBack}>
                                <Icon style={ styles.icon} name="arrow-round-back" />
                            </Button>
                        }
                    />
                    <View style={ styles.container }>
                        <Content>
                            <Form>
                                <Text style={ styles.searchText}>Vyhľadať osobu</Text>

                                <View style={ styles.searchBox}>
                                    <Item regular style={ styles.item}>
                                        <Input autoCorrect={false} onChangeText={(term) => this.setState({term})} placeholder="Zadajte meno" />
                                    </Item>
                                    <Button full danger style={ styles.searchButton} onPress={() => {this.setUserSearchResultModalVisible(true)}}><Icon style={ styles.searchIcon } name='search' /></Button>
                                </View>
                                <Text style={ styles.searchText}>alebo</Text>
                                <View style={ styles.buttonContainer }>
                                    <View style={ styles.addButtonContainer }>
                                        <Button danger block onPress={() => {this.setUserCreateModalVisible(true)}}>
                                            <Text>Vytvoriť osobu</Text>
                                        </Button>

                                        {
                                            this.props.navigation.state.params.meetingId
                                                ? (<Button danger block style={ styles.addFromListButton } onPress={() => {this.setUserAddFromListModalVisible(true)}}><Text>Vybrať zo zoznamu</Text></Button>)
                                                : null
                                        }
                                    </View>

                                </View>
                            </Form>
                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.userSearchResultModalVisible}
                            >
                                <UserSearchResultScreen
                                    modalVisible={this.setUserSearchResultModalVisible}
                                    term={this.state.term}
                                    meetingId={this.props.navigation.state.params.meetingId}
                                />
                            </Modal>


                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.userAddFromListModalVisible}
                            >
                                <UserAddFromListScreen
                                    modalVisible={this.setUserAddFromListModalVisible}
                                    navigation={this.props.navigation}
                                    meetingId={this.props.navigation.state.params.meetingId}
                                />
                            </Modal>

                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.userCreateModalVisible}
                            >
                                <UserCreateScreen
                                    modalVisible={this.setUserCreateModalVisible}
                                    meetingId={this.props.navigation.state.params.meetingId}
                                />
                            </Modal>
                        </Content>
                    </View>
                </Container>
            </ModalHost>
        );
    }
}

export default UserSearchIndexScreen;