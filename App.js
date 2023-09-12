import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import session_1 from './Session/session_1.js';
import session_2 from './Session/session_2.js';
import session_3 from './Session/session_3.js';
import session_4 from './Session/session_4.js';
import session_5 from './Session/session_5.js';

const image = require('./assets/Images/Stade.jpeg');

/* HomePage */
const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Bienvenue au BenGym</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Saison 3')}>
            <Text style={styles.buttonText}>Saison 3</Text>
          </TouchableOpacity>
        </View>
    </ImageBackground>
  </View>
);

/* Vue sur toutes les séances */
const SeancesScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.all_buttons}>
      <TouchableOpacity style={styles.button_seance} onPress={() => navigation.navigate('Séance 1')}>
        <Text style={styles.buttonText}>Séance 1 (Pecs / Dos) </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button_seance} onPress={() => navigation.navigate('Séance 2')}>
        <Text style={styles.buttonText}>Séance 2 (Jambes / Cardio) </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button_seance} onPress={() => navigation.navigate('Séance 3')}>
        <Text style={styles.buttonText}>Séance 3 (Bras) </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button_seance} onPress={() => navigation.navigate('Séance 4')}>
        <Text style={styles.buttonText}>Séance 4 (Circuit training) </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button_seance} onPress={() => navigation.navigate('Séance 5')}>
        <Text style={styles.buttonText}>Séance 5 (Cardio) </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Saison 3" component={SeancesScreen} />
      <Stack.Screen name="Séance 1" component={session_1} /> 
      <Stack.Screen name="Séance 2" component={session_2} /> 
      <Stack.Screen name="Séance 3" component={session_3} /> 
      <Stack.Screen name="Séance 4" component={session_4} /> 
      <Stack.Screen name="Séance 5" component={session_5} /> 
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  text: {
    color: 'white',
    fontSize: 40,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 40,
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    backgroundColor: 'black',
  },

  buttonText: {
    color: 'white',
  },

  all_buttons: {
    padding: 40,
  },

  button_seance: {
    justifyContent: 'center',
    padding: 20,
    width: 250,
    height: 70,
    backgroundColor: 'grey',
    marginBottom: 60,
    borderRadius: 5,
  },
});

export default App;
