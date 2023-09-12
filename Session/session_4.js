import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const session4 = () => (
  <View style={styles.container}>

    <Text style={styles.titre}> Circuit Training x5</Text> 
    <Text style={styles.exercice}> 10 pompes</Text>
    <Text style={styles.exercice}> 10 abdos crunch </Text>
    <Text style={styles.exercice}> 10 tractions </Text>
    <Text style={styles.exercice}> 10 dips</Text>
    <Text style={styles.exercice}> 10 squat </Text>
    <Text style={styles.exercice}> 1min de gainage </Text>
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

export default session4;
