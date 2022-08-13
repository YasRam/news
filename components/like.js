import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';

export default function Like() {
  let [likeNum, setlikeNum] = useState(100);
  let [but, setbut] = useState('Like');
  let [flag, setflag] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{likeNum}</Text>

      <Image
        style={styles.logo}
        source={require('../assets/wings-2053515__340.webp')}
      />
      <TouchableOpacity
        onPress={() => {
          if (setbut === 'Like') {
            setbut('unLike');
            setlikeNum(++likeNum);
            setflag(true);
          } else if (setbut === 'unLike') {
            setbut('Like');
            setlikeNum(--likeNum);
            setflag(false);
          } else {
            setbut('Error');
            setflag(true);
          }
        }}>
        <Text style={styles.paragraph}>{but}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});
