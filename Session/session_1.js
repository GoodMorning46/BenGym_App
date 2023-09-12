import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const session1 = () => (
  <View style={styles.container}>
        <Text style={styles.titre}> Muscu pecs + dos </Text> 

    <Text style={styles.exercice}> (3x10) Dips / Traction (superset)</Text> 
    <Text style={styles.exercice}> (3x10) Développé couché à la barre (travailler la force)</Text>
    <Text style={styles.exercice}> (3x10) Butterfly</Text>
    <Text style={styles.exercice}> (3x10) Rowing haltère sur banc incliné</Text>
    <Text style={styles.exercice}> (3x10) Tirage verticale</Text>
    <Text style={styles.exercice}> (3x10) (3sec en haut) Superman / Crunch jambes verticales</Text>
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

export default session1;
