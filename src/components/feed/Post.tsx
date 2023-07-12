import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {nip19} from 'nostr-tools';
import {LinkPreview} from '@flyerhq/react-native-link-preview';

import {useAppSelector} from '../../redux/hooks';

const Post = ({post, author}) => {
  const theme = useAppSelector(state => state.theme.theme);

  const name =
    author?.name ?? `${nip19.npubEncode(post.pubkey).slice(0, 10)}...`;

  const image = author?.picture
    ? {uri: author?.picture}
    : require('../../assets/images/logo-icon-small.png');

  const timestamp = post.created_at; // Unix timestamp in seconds
  const now = new Date(); // current time
  const diffInMs = now.getTime() - timestamp * 1000; // diff in milliseconds
  const diffInMinutes = Math.round(diffInMs / (1000 * 60)); // diff in minutes

  let formattedDate;

  if (diffInMinutes < 60) {
    formattedDate = `${diffInMinutes} minutes ago`;
  } else {
    const date = new Date(timestamp * 1000); // convert seconds to milliseconds
    // format the date and time as a string in mm/dd/yyyy format with 12-hour clock and AM/PM
    formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date
      .getDate()
      .toString()
      .padStart(2, '0')}/${date.getFullYear()} ${(date.getHours() % 12 || 12)
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date
      .getSeconds()
      .toString()
      .padStart(2, '0')} ${date.getHours() < 12 ? 'AM' : 'PM'}`;
  }

  const tags = post.tags.filter(t => t[0] === 't').map(t => t[1]);
  return (
    <View
      key={post?.id}
      style={[styles.container, {backgroundColor: theme.color3}]}>
      {/* Profile */}
      <View style={styles.profileContainer}>
        {/* Profile pic */}
        <View>
          {image && <Image style={styles.profilePic} source={image} />}
        </View>
        {/* Name/Date */}
        <View style={styles.userContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.createdAt}>{formattedDate}</Text>
        </View>
      </View>
      {/* Content */}
      <View style={styles.contentContainer}>
        <LinkPreview text={post?.content} />
        {/* <Text>{post?.content}</Text> */}
        {tags.map(t => (
          <Text style={styles.tag}>#{t}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginTop: 8,
    padding: 8,
    borderRadius: 4,
  },
  contentContainer: {
    padding: 8,
  },
  createdAt: {
    fontSize: 14,
  },
  name: {
    fontSize: 16,
    color: 'white',
    marginVertical: 4,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profilePic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  tag: {
    color: 'white',
    fontSize: 14,
    margin: 2,
  },
  userContainer: {
    paddingHorizontal: 8,
  },
});

export default Post;
