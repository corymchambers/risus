//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import useFeed from '../../hooks/useFeed';
import {useAppSelector} from '../../redux/hooks';
import {LinkPreview} from '@flyerhq/react-native-link-preview';

// create a component
const Post = ({post, author}) => {
  console.log({post});
  console.log({author});
  const theme = useAppSelector(state => state.theme.theme);
  const {displayPubkey} = useFeed();

  const name = author?.display_name ?? displayPubkey(post.pubkey);
  const image = author?.picture
    ? {uri: author?.picture}
    : require('../../assets/images/logo-icon-small.png');
  // const createdAt = new Date(post.created_at * 1000)
  //   .toISOString()
  //   .split('T')[0];
  const timestamp = 1682859406; // Unix timestamp in seconds
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

//make this component available to the app
export default Post;
