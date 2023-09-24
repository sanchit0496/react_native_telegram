import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import axios from 'axios';
import { useState } from 'react';


export default function App() {

  
const BOT_API_TOKEN = 'TOKEN';
const [input, setInput] = useState('')

const sendMessageToTelegram = async (message) => {
  try {
    const response = await axios.post(`https://api.telegram.org/bot${BOT_API_TOKEN}/sendMessage`, {
      chat_id: 'CHAT_ID',
      text: message,
    });
    console.log('Message sent:', response.data);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};


  const handleSend = () => {
    sendMessageToTelegram(input)
    setInput('')
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to My Telegram Application</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          multiline
          numberOfLines={4}
          value = {input}
          onChangeText = {(text) => setInput(text)}
        />
        <Button onPress={handleSend} title="Send" />
        <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  }
});