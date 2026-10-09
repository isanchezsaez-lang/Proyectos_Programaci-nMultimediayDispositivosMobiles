import { View, ScrollView, StyleSheet } from 'react-native';
import GameCard from './GameCard';

export default function GameList() {
  const games = [
    {
      id: 1,
      title: 'Adventure Quest',
      genre: 'RPG',
      rating: 4.8,
      description: 'Embárcate en una épica aventura llena de misterios, dragones y tesoros escondidos. Explora mundos fantásticos.',
      price: '$29.99',
    },
    {
      id: 2,
      title: 'Space Shooter Pro',
      genre: 'Acción',
      rating: 4.5,
      description: 'Defiende la galaxia de invasores alienígenas en este emocionante juego de disparos en tiempo real.',
      price: '$19.99',
    },
    {
      id: 3,
      title: 'Puzzle Master',
      genre: 'Puzzle',
      rating: 4.9,
      description: 'Desafía tu mente con más de 500 niveles de puzles progresivos. ¡Perfecto para todas las edades!',
      price: '$4.99',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.gameListContainer}>
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            genre={game.genre}
            rating={game.rating}
            description={game.description}
            price={game.price}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  gameListContainer: {
    padding: 16,
  },
});
