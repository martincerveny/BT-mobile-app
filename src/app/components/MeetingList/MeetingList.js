import React from 'react';
import { ListView  } from 'react-native';
import MeetingListItem from './../MeetingListItem/MeetingListItem';

import styles from './styles';

const MeetingList = ({ items, onItemPress }) => (
    <ListView
        enableEmptySections
        dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(items)}
        renderRow={item => (
            <MeetingListItem
                item={item}
                onPress={onItemPress}
            />
        )}
    />
);

export default MeetingList;