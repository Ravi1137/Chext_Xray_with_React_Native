import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation=useNavigation()
  return (
    <View>
      <Text style={styles.titlename}>Medicare</Text>

      <TouchableOpacity style={styles.buttonscan} onPress={() => navigation.navigate("Scan")}>
        <Text style={styles.buttonscantext}>Scan X-ray</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonscan}>
        <Text style={styles.buttonscantext}>Get Video Exercise</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonscan}>
        <Text style={styles.buttonscantext}>Get Prescription</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonscan}>
        <Text style={styles.buttonscantext}>Book Appointment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonscan}>
        <Text style={styles.buttonscantext}>Search Nearby Jym</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonscan}>
        <Text style={styles.buttonscantext}>Home Remedies</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonscan}>
        <Text style={styles.buttonscantext}>Scan </Text>
      </TouchableOpacity>

      

    </View>
  )
}

const styles = StyleSheet.create({
  titlename :{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop:25,
    fontSize: 50,
    fontWeight: "bold",
    color :"red"
  },
  buttonscan:{
    textAlign: 'center',
    marginTop:35,
    backgroundColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 42,
    borderRadius: 30,
    backgroundColor: "#009688",

  },

  buttonscantext:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    textTransform: "uppercase",
  }

})

export default Home;