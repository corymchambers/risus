//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import useFeed from '../../hooks/useFeed';
import {useAppSelector} from '../../redux/hooks';
import {LinkPreview} from '@flyerhq/react-native-link-preview';
import reactotron from 'reactotron-react-native';

// create a component
const Post = ({post}) => {
  const theme = useAppSelector(state => state.theme.theme);
  const {displayPubkey} = useFeed();
  reactotron.log(post?.id);

  const regex = /https?:\/\/.*\.(?:png|jpg|jpeg|gif)/gi;

  // Extract the image URL from the text string
  const match = regex.exec(post?.content);
  // console.log(match);

  const name = post?.display_name ?? displayPubkey(post.pubkey);
  const image =
    post?.picture ?? `https://dicebear.com/api/initials/${post.pubkey}.svg`;
  const createdAt = new Date(post.created_at * 1000)
    .toISOString()
    .split('T')[0];
  const tags = post.tags.filter(t => t[0] === 't').map(t => t[1]);
  return (
    <View
      key={post?.id}
      style={[styles.container, {backgroundColor: theme.color3}]}>
      {/* Profile */}
      <View style={styles.profileContainer}>
        {/* Profile pic */}
        <View>
          {image && <Image style={styles.profilePic} source={{uri: image}} />}
        </View>
        {/* Name/Date */}
        <View style={styles.userContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.createdAt}>{createdAt}</Text>
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
    // <View style={{borderWidth: 1, marginTop: 8, backgroundColor: theme.color3}}>
    //   <Text style={{color: 'red', fontWeight: 'bold'}}>
    //     {post?.display_name ?? 'No Name'}
    //   </Text>
    //   {image && <Image width={25} height={25} source={{uri: image}} />}
    //   <Text>{createdAt}</Text>
    //   <Text>{post?.content}</Text>
    // {tags.map(t => (
    //   <Text>#{t}</Text>
    // ))}
    // </View>
  );
};

// define your styles
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
