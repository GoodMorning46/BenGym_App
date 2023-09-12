import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const session3 = () => (
  <View style={styles.container}>
        <Text style={styles.titre}> Muscu bras</Text> 

    <Text style={styles.exercice}> (2x10) Rotation externe de l'épaule (échauffement)</Text> 
    <Text style={styles.exercice}> (3x10) Développé militaire debout</Text>
    <Text style={styles.exercice}> (3x10) Elévation frontale</Text>
    <Text style={styles.exercice}> (3x10) Curl barre EZ debout</Text>
    <Text style={styles.exercice}> (3x10) Curl prise marteau debout</Text>
    <Text style={styles.exercice}> (3x10) Extension verticale à la poulie</Text>
    <Text style={styles.exercice}> (3x10) Haltère au front incliné</Text>
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

export default session3;
