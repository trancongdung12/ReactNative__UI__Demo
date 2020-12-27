import React from 'react';
import { View,StyleSheet } from 'react-native';
import Facebook from './components/Facebook';
import Momo from './components/Momo';

const App = () => {
  
    return (
      
      <View style={styles.container}>
          {/* <Momo/> */}
          <Facebook/>
      </View>
    );
};
  const styles = StyleSheet.create({
      container:{
         flex: 1,
      }
  })
export default App;