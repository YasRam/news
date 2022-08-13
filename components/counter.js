import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function Counter() {
  let [count, setcount] = useState(2);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{count}</Text>
          <View style={styles.butView}>

      <Button style={styles.but} title="+" onPress={() => {setcount(++count)}} />
      <Button title="-" onPress={() => {count == 0 ? setcount(0):setcount(--count)}} />
          </View>

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
  butView:{
    flexDirection:'row',
    margin:50,
    backgroundColor: "blue",
    

  },
  but:{
    margin:10
  }
});
