import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Game Store</Text>
          <Text style={styles.sectionText}>La mejor tienda de juegos móviles</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoSection}>
          <Text style={styles.text}>© 2026 Game Store</Text>
          <Text style={styles.version}>v1.0.0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#1a1a2e',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopWidth: 2,
    borderTopColor: '#FF6B35',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  footerContent: {
    alignItems: 'center',
  },
  infoSection: {
    alignItems: 'center',
    marginVertical: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF6B35',
    marginBottom: 2,
  },
  sectionText: {
    fontSize: 12,
    color: '#aaa',
  },
  divider: {
    width: 30,
    height: 1,
    backgroundColor: '#FF6B35',
    marginVertical: 8,
  },
  text: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 2,
  },
  version: {
    fontSize: 11,
    color: '#888',
  },
});
