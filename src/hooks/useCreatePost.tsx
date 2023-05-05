import {publishPost} from '../nostr/post';
import {useAppSelector} from '../redux/hooks';

export default function useCreatePost() {
  const {pubKey, privateKey} = useAppSelector(state => state.user);
  const relays = useAppSelector(state => state.relays);
  const createPost = (post: string) => {
    console.log('create this post');
    publishPost(relays, post, pubKey, privateKey);
  };
  return {createPost};
}
