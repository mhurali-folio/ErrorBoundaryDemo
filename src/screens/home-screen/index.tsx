import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface IHomeScreenProps {}

const userData = {
  email: 'mhurali@folio3.com',
  name: 'Hur Ali',
};

const HomeScreen = (_: IHomeScreenProps) => {
  console.log(userDat);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>User Email: {userData.email}</Text>
      <Text>User Name: {userData.name}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    flex: 1,
  },
});
