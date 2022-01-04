import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import  Header  from './app/components/Header';
import  Heroimg  from './app/components/Heroimg';
import  Body  from './app/components/Body';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Heroimg />
      <Body />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
