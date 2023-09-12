import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const session5 = () => (
  <View style={styles.container}>

    <Text style={styles.titre}> Cardio long</Text> 
    <Text style={styles.exercice}> Run (5km) ou Vélo (10km)</Text>
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

export default session5;
