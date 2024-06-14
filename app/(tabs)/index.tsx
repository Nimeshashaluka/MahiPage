import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  SafeAreaView,
  TextInput,
} from "react-native";

const Flex = () => {
  const [text, onChangeText] = React.useState('Enter Your Username');
  const [password, onChangePassword] = React.useState('Enter Your Password');

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "ffff",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={styles.text1}>Welcome To අපේ හාමුදුරුවනේ 😌🙏</Text>
      </View>

      <View style={{ flex: 2 }}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/R.02ab23c5bb0e866397fb9a06f04f093c?rik=w9SMHa8RRXMHzw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-CCNnrAwco3w%2fVAaDyav_MmI%2fAAAAAAAAC-g%2fpSJKuqxSMxc%2fs1600%2fmahinda.jpg&ehk=0AJEgdWfJFKlOtvK8svQqNnn0Nx4Db%2fIBfHHMftxUyc%3d&risl=&pid=ImgRaw&r=0",
          }}
          style={{ width: 360, height: 250 }}
        />
      </View>

      <View style={{ flex: 3, backgroundColor: "black", alignItems: "center" }}>
        <Text style={styles.text2}>
        Don't think about what happened before, let's start anew, මේ පාර වෙනසක් කරමු ඈ 😹🎉
        </Text>

        <Button
          title="[ X ] = 🌹"
          color="#F44336"
          onPress={() =>
            Alert.alert("Test my app", "Hi, my test app is successfuly")
          }
        />

        {/* <View style={{ marginTop: 10, backgroundColor: "#ffff" }}>
          <Text style={styles.text3}>
            The title and onPress handler are required. It is recommended to set
            accessibilityLabel to help make your app usable by everyone.
          </Text>
        </View> */}

        <View>
          <Text style={styles.text4}>Join us and Build the Country 🌏🛩️...</Text>
          <Text style={{color:'#ffff',marginLeft:18,marginTop:15,}}>User Name</Text>
          <TextInput style={styles.input1} onChangeText={onChangeText} value={text}/>
        </View>
        
        <View>
          <Text style={{color:'#ffff',marginLeft:18,}}>Password</Text>
          <TextInput style={styles.input1} onChangeText={onChangePassword} value={password}/>
        </View>

        <View>
        <Button
          title="Sign In"
          color="green"
          onPress={() =>
            Alert.alert("Successe", "Your Data is successfuly Upload")
          }
          
        />
        
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  text1: {
    marginTop: 15,
    padding:10,
    color: "#ffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  text2: {
    color: "#ffff",
    padding: 10,
    fontSize: 20,
    textAlign: "center",
  },
  text3: {
    padding: 10,
    textAlign: "center",
    color: "black",
  },
  text4: {
    backgroundColor:'white',
    fontSize: 18,
    color: "black",
    padding: 5,
    marginTop:10,
    textAlign: "center",
  },
  input1:{
    color:'#ffff',
    textAlign:"center",
    width:300,
    height:40,
    margin:12,
    borderWidth:2,
    borderColor:'white',
    borderRadius:10,
  },
});

export default Flex;
