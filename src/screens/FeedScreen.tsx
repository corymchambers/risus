import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Post from '../components/feed/Post';
import useFeed from '../hooks/useFeed';
import {useAppSelector} from '../redux/hooks';
import { FlashList } from '@shopify/flash-list';

export default function FeedScreen() {
  const theme = useAppSelector(state => state.theme.theme);

  const {feed} = useFeed();
  // console.log({feed})

  // const feed = [
  //   {
  //     about: 'I post pictures',
  //     banner: '',
  //     content:
  //       'https://nostr.build/i/nostr.build_16f794849658dd91fcfce839c6316f7483fbef4738f0964011113ef07b14239c.jpg What does it mean kneel in front of god? https://i.imgur.com/123.jpg and then  https://i.imgur.com/57e0xaV.jpg some more text',
  //     created_at: 1682354222,
  //     displayName: 'display name',
  //     display_name: 'asdf asdf ',
  //     id: 'a987c3afbe96e0e8c3d7a6a581bd3c57398bab2c42ffeb41d8af49c2bb4b773d',
  //     kind: 1,
  //     lud06: '',
  //     lud16: 'mildmessage32@walletofsatoshi.com',
  //     name: 'Le Vagabond ',
  //     nip05: '',
  //     picture: 'https://i.postimg.cc/j2vPwxXq/f8Ahoy1.gif',
  //     pubkey:
  //       '86090b6b13158deaf8fdf3dd012e7a241d6944d47a525e71b1e211370f617717',
  //     sig: '4d8ebb8c07e654cc6f3ac3c36ed3d73c4ffcf9f785f05b8410e87cc23987af64d0009c3e790b3f9a10b72cb13a434f3bbc6b71c0cd24166c5ada9acd3a6558aa',
  //     tags: ['#alk;sdfj', '#sdfsd'],
  //     username: 'Le Vagabond ',
  //     website: '',
  //   },
  //   {
  //     about:
  //       'Pragmatic anarchist. Nationalist libertarian. Chaotic good. Bitcoin. Monero. Encrypt everything.',
  //     banner:
  //       'https://nostr.build/i/nostr.build_107aeafd9eca3452b4e1dc351e7392cd4e4b266c042d63a32a340d4aa1695ac5.jpg',
  //     content:
  //       'https://i.postimg.cc/j2vPwxXq/f8Ahoy1.gif A/G because I drive https://nostr.build/i/nostr.build_16f794849658dd91fcfce839c6316f7483fbef4738f0964011113ef07b14239c.jpg a stick shift.',
  //     created_at: 1682371367,
  //     id: '8c71de1b993805ba87a4922e833552c946514cd7396721028edf284d7fcc57fa',
  //     kind: 1,
  //     lud16: 'lprimordium@getalby.com',
  //     name: 'Libertas Primordium',
  //     nip05: 'lprimordium@iris.to',
  //     nip05valid: true,
  //     picture:
  //       'https://nostr.build/i/nostr.build_f8806459055dc6a7e72c881ceac9a2a7dda7ea703afdf12c570be57a06498309.jpg',
  //     pubkey:
  //       '0d06480b0c6e3be3c9a1a65d7e6bc2091227d55bf4c77eeb6037ba7776c300ec',
  //     sig: '8813d44138e859b453e53fac96b4e836db7c936097273b1a9e51768e1508abfcf404548f28611addaac95642ecdf969c9ecf37843d0e54ddc8e10c10dcf8e583',
  //     tags: [],
  //     website: 'https://github.com/libertas-primordium',
  //   },
  // ];
  return (
    <View style={[styles.container, {backgroundColor: theme.color1}]}>
      {/* <FlatList
        keyExtractor={item => item.id}
        data={feed}
        renderItem={({item}) => <Post post={item} />}
      /> */}
      <FlashList
        data={feed}
        renderItem={({item}) => <Post post={item} />}
        estimatedItemSize={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
