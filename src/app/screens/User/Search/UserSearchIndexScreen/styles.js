import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonContainer: {
        paddingTop: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    addButtonContainer: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    searchBox: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },
    icon: {
        color: '#fff'
    },
    searchText: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 17
    },
    item: {
        width: 250
    },
    searchButton: {
        width: 52, height: 52
    },
    addFromListButton: {
        marginTop: 20
    },
    searchIcon: {
        fontSize: 27
    }
});