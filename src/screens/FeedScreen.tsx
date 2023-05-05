import React, {useLayoutEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Post from '../components/feed/Post';
import useFeed from '../hooks/useFeed';
import {useAppSelector} from '../redux/hooks';
import {FlashList} from '@shopify/flash-list';
import NewPostBtn from '../components/feed/NewPostBtn';
import {ScreenProps} from '../navigation/navTypes';
import {Routes} from '../navigation/routes';
import NewPostModal from '../components/feed/NewPostModal';

const NewPost = (newPostPressed: () => void) => (
  <NewPostBtn onPress={newPostPressed} />
);

export default function FeedScreen({
  navigation,
}: ScreenProps<Routes.FeedScreen>) {
  const theme = useAppSelector(state => state.theme.theme);
  const [modalVisible, setModalVisible] = useState(false);

  const {feed, authors} = useFeed();

  const newPostPressed = () => {
    setModalVisible(true);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => NewPost(newPostPressed),
    });
  });

  return (
    <View style={[styles.container, {backgroundColor: theme.color1}]}>
      <FlashList
        data={feed}
        renderItem={({item}) => (
          <Post post={item} author={authors[item.pubkey]} />
        )}
        estimatedItemSize={200}
      />
      <NewPostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
