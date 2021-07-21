import React, {userContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import FormButton from "../components/FormButton";
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome To Social Media App</Text>
            <FormButton buttonTitle='Logout'  onPress={()=>navigation.goBack()}></FormButton>
           
        </View>

    )

};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#f9fafd',
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      padding:20
    },
    buttonText: {
      fontSize: 20,
      color: '#333333',
    },
  });
  