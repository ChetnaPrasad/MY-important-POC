import React, { useState } from "react";
import { View,Button, StyleSheet,TextInput, Alert } from "react-native";
// import Parse from "parse/react-native";

 function LoginPage({ navigation }){
  const [username, setUsername] = useState("");
  // console.log(username)
  const [password,setPassword] = useState("");
  // const [agree , setAgree] =useState("")

  const submit = ()=>{
    // return Alert.alert(username)
    if(username === "chetna" && password === "123"){
    // Alert.alert("thank you  ${username}");
    Alert.alert("login sucessfull");
    navigation.navigate("Home")
  } else {
    Alert.alert("username and password is not correct ")
  }
  };

  return (
    <View>
      <View style={styles.Regiview}>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      {/* <View>
        <CheckBox
         value={agree}
         onValueChange={()=>setAgree(!agree)}
         color={agree ? "blue":undefined}
        />
      </View> */}
      
      <View style={styles.Button}>
      <Button title={"Sign In"} onPress={() =>submit()} />
      </View>
      </View>
    </View>
  );
};

export default LoginPage;
const styles = StyleSheet.create({
  input: {
    width:"80%",
    marginLeft:"10%",
    height: 50,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  Regiview:{
    marginTop:"10%",
  },
  Button:{
    width:"80%",
    height:50,
    marginLeft:"10%",
  }
});
