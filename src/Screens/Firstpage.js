import React, { useState } from "react";
import { View,Button, StyleSheet, TextInput } from "react-native";
// import Parse from "parse/react-native";

 function FirstPage(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");


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
       <TextInput
        style={styles.input}
        value={email}
        placeholder={"email"}
        secureTextEntry
        onChangeText={(text) => setEmail(text)}
      />
       <TextInput
        style={styles.input}
        value={Mobile}
        placeholder={"Mobile Number"}
        secureTextEntry
        onChangeText={(text) => setMobile(text)}
      />
      <View style={styles.Button}>
      <Button title={"Sign Up"} onPress={() => {}} />
      </View>
      </View>
    </View>
  );
};

export default FirstPage;
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
    marginLeft:"10%",
  }
});
