import {View, Text, TextInput,Button ,stylesheet} from 'react-native';
export default function App(){
  return(
    <View style={styles.container}>
    <Text style={styles.title}>My tasks</Text>
    <Text>My tasks</Text>
    <View style={styles.divider}/>
    <View style ={styles.inputcontainer}/>
    <Textinput
     placeholder='add a new task....'
     style={styles.inputText}
      />

     <Button
     title='Add'
     />
    </View>
  );
}
const styles =StyleSheet.create({
container:{
  flex:1,
  flexDirection:'column',
 backgroundcolor: '#fff',
  alignItems: 'center',
  justifycontent: 'center',
},
title:{
  fontsize:20,
  fontweight:'bold',
},
divider:{
  width:'100%',
height:2,
backgroundcolor:'#c7c3c3',
},
inputcontainer:{
  flexDirection:'row',
  marginTop:2,
  width:'80%',
},
inputText:{
  flex: 1,
  
}
});
