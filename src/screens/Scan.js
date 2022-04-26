import { StyleSheet, Text, View,Image,TouchableOpacity,Alert } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
// import * as tf from '@tensorflow/tfjs';


const Scan = () => {
  const [testimage,settestimage]=useState(null)
  const Predict =(props)=>{
    return(
        <View>
          <Text style={styles.predictiontext}>{props.name}</Text>
        </View>
    );
  }

// const modelJson = await require("./assets/model/model.json");
// const modelWeight = await require("./assets/model/group1-shard.bin");
// const X_ray = await tf.loadlayersModel(bundleResourceIO(modelJson, modelWeight));

  const openImageLibrary = async () => {
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
        alert('Sorry, we need cameraroll permissions to make this work!');
    }
    if(status==='granted'){
      const response=await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
      });
      if(!response.cancelled){
        response.width=500
        response.height=500
        settestimage(response.uri)
      }
      console.log(response)
    }
  };

  return (
    <View>
      <Text style={styles.titlename}>Scan X-ray</Text>
      <TouchableOpacity style={styles.buttonphoto} onPress={openImageLibrary}>
        <Text style={styles.buttonscantext}>CHOSSE A PHOTO</Text>
      </TouchableOpacity>
      <Image  style={styles.imgshow}
            source={{uri:testimage}}
      />
      <Predict name="Prediction will come here"/>
      <TouchableOpacity>
        <Text style={styles.predictbutton}>Predict</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    titlename :{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop:55,
        fontSize: 30,
        fontWeight: "bold",
        color :"blue"
      },
      buttonphoto:{
        textAlign: 'center',
        marginTop:65,
        backgroundColor: "#DDDDDD",
        justifyContent: "center",
        alignItems: 'center',
        paddingVertical: 22,
        paddingHorizontal: 42,
        borderRadius: 30,
        backgroundColor: "#009688",
      },
      imgshow:{
        marginHorizontal: 75,
        marginTop:20,
        width:200,
        height:200,
        borderWidth: 2,
        borderColor: "black",
      },
      predictiontext:{
        marginTop:20,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
      predictbutton :{
        textAlign: 'center',
        marginTop:65,
        backgroundColor: "#DDDDDD",
        justifyContent: "center",
        alignItems: 'center',
        paddingVertical: 22,
        paddingHorizontal: 42,
        borderRadius: 30,
        fontWeight: "bold",

      }
});
export default Scan;



