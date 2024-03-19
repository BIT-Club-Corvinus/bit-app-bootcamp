import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [text, setText] = useState("Plészholder")

  return (
    <View style={styles.container}>
      <Text style={[{color: '#fff'}]}>Sziasztok!</Text>
      <TextInput style={styles.textInput} onChangeText={(value)=> setText(value)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={()=> Alert.alert('Megnyomtad a gombot')}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12b0b0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    width: '100%',
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#f69133',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 16,
    padding: 16
  }
});
