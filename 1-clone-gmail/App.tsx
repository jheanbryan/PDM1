import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Header  from './src/components/Header/Header';
import Button from './src/components/Button/Button';
import Footer from './src/components/Footer/Footer';
import CardMessage from './src/components/Message/Message';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <CardMessage 
        sender= 'ds'
        title= 'sadasd'
        text= 'dasadad'
        urlImage= 'asdadad'
        messageDate = 'fdjj'
      />

      <Button />
      
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'rgb(32,33,36)',
    alignItems: 'center',
    paddingTop: 45
  },
});
