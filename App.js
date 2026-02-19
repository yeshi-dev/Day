import {View, Text, TextInput,Button ,StyleSheet} from 'react-native';
export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>My tasks</Text>

      <View style={styles.divider}/>

      <View style ={styles.inputcontainer}>
        <TextInput
        placeholder='add a new task....'
        style={styles.inputText}
          />

        <Button
        title='Add'
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
title:{
  fontsize:20,
  fontweight:'bold',
  marginTop:100,
},
divider:{
  marginTop:20,
  width:'100%',
  height:2,
  backgroundcolor:'#c7c3c3',
},
inputcontainer:{
  flexDirection:'row',
  marginTop:20,
  width:'80%',
  borderWidth:1,
}, 
inputText:{
}
});
