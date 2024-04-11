import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import supabase from './lib/supabase-client';

export default function App() {
  const [text, setText] = useState("Plészholder")

  async function insertData(text) {
    try {
      const { error } = await supabase
        .from('example')
        .insert({name: text })
      
      if (error) {
        throw new error
      }
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[{ color: '#fff' }]}>Sziasztok!</Text>
      <TextInput style={styles.textInput} onChangeText={(value) => setText(value)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => insertData(text)}>
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
    width: '80%',
    padding: 16,
    backgroundColor: 'white',
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
