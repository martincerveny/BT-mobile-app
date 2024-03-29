import React from 'react';
import _ from 'lodash';
import { SectionList } from 'react-native';
import {Body, ListItem, Text} from "native-base";
import UserNoteListItem from "../UserNoteListItem/UserNoteListItem";
import styles from './styles';

//sekcie na zaklade nazvu schodzky - zoznam poznamok
const makeSections = (noteItems, meetingItems) => {
    // spojime noteItemy a meetingItemy na zaklade ID aby sme mohli ziskat nazov schodzky
    // ID noteItemov sa prepise na meetingId (kedze maju rovnaky key)
    var merged = _.map(noteItems, function(item) {
        return _.assign(item, _.find(meetingItems, ['id', item.meetingId]));
    });

    //zoskupi podla prveho pismena nazvu - podla abecedy
    const groupedItems = _.groupBy(merged, item => item.name);
    const ordered = {};

    //zoradi podla abecedy
    const orderedKeys = Object.keys(groupedItems).sort();

    orderedKeys.forEach(function (key) {
        ordered[key] = groupedItems[key]
    });

    let result = [];

    // vytvori sekcie data a key pre sectionList
    Object.keys(ordered).forEach(function (key) {
        result.push({
            key: key,
            data: ordered[key]
        })
    });

    return result;
};

//zoznam poznamok uzivatela
const UserNoteList = ({ noteItems, meetingItems }) => {
    const sections = makeSections(noteItems, meetingItems);

    return (
        <SectionList
            renderItem={({item, index}) => {
                return (
                    <UserNoteListItem
                        item={item}
                        index={index}
                    />
                )
            }}
            renderSectionHeader={({section}) => {
                return (
                    <ListItem itemDivider style={ styles.listItem }>
                        <Body>
                            <Text style={ styles.text}>{section.key}</Text>
                        </Body>
                    </ListItem>
                )
            }}
            sections={sections}
            keyExtractor={(item, index) => index}
        >
        </SectionList>
    )
};

export default UserNoteList;