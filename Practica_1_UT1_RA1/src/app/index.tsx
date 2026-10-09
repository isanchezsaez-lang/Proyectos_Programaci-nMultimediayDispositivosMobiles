import { StyleSheet, View } from 'react-native';
import Footer from '../components/Footer';
import GameList from '../components/GameList';
import Header from '../components/Header';

export default function GameStore() {
  return (
    <View style={styles.container}>
      <Header />
      <GameList />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});