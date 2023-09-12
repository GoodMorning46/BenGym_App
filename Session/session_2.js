import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const session2 = () => (
  <View style={styles.container}>
    <Text style={styles.titre}> Muscu jambes + cardio </Text> 
    <Text style={styles.exercice}> (3x10) Fentes avec haltère</Text> 
    <Text style={styles.exercice}> (3x10) Leg Extension</Text>
    <Text style={styles.exercice}> (3x10) Soulevé de terre jambes tendu</Text>
    <Text style={styles.exercice}> (3x10) Extension des mollets</Text>
    <Text style={styles.exercice}> (15min) Rameur ou Escalier</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 1000,
  },

  titre: {
    color: 'white',
    fontSize: 30,
    marginTop: 20,
    padding: 20,
    fontWeight: 'bold',
  },

  exercice: {
    padding: 20,
    color: 'white',
    fontSize: 20,
  },
});

export default session2;
