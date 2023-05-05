import React, {ReactElement, useState} from 'react';
import {View, StyleSheet, Modal, Pressable, TextInput} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppSelector} from '../../redux/hooks';
import AppButton from '../AppButton';
import useCreatePost from '../../hooks/useCreatePost';

interface Props {
  modalVisible: boolean;
  setModalVisible: (b: boolean) => void;
}

export default function NewPostModal({
  modalVisible,
  setModalVisible,
}: Props): ReactElement {
  const {theme} = useAppSelector(state => state.theme);
  const [message, setMessage] = useState('');
  const {createPost} = useCreatePost();
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={[styles.modal, {backgroundColor: theme.color1}]}>
          <Pressable
            style={styles.exitBtnContainer}
            onPress={() => setModalVisible(false)}>
            <Ionicons name="close-outline" size={32} color="white" />
          </Pressable>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="What's on your mind?"
            placeholderTextColor="black"
            multiline={true}
          />
          <View style={{width: '100%', marginTop: 16}}>
            <AppButton title="Submit" onPress={() => createPost(message)} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  exitBtnContainer: {
    alignSelf: 'flex-end',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 160,
    paddingLeft: 8,
    width: '100%',
    marginTop: 16,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    elevation: 5,
    width: '90%',
    height: '60%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    color: 'white',
  },
});
