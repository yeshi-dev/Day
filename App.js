import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
export default function APP(){
  return(
    <SafeAreaView style={styles.container}>
      <View style ={styles.inputcontainer}>
        <TextInput
          placeholder ="what would you like to focus...."
          mode={"outlined"}
          lable ="Focus"
          style ={styles.InputText}
          
          />
       <TouchableOpacity style={styles.fabButton} onpress={()=>{}}>
        <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.focusedTasks}>
        <Text style={styles.focusTitle}>Things we have focused on:</Text>
        <View style={{padding:20}}>
          <Text style={{fontSize:18, color:'white', fontWeight:'semi-bold'}}>1, learn react native</Text>
          <Text style={{fontSize:18, color:'white', fontWeight:'semi-bold'}}>2, js basics</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles =StyleSheet.create({
container:{
  flex:1,
  backgroundcolor:'#2f0b68949',
},
inputcontainer:{
  flexDirection :'row',
  padding: 20,
},
InputText:{
  flex:1,
},
fabButton:{
  height:6,
  width:60,
  borderRadius:30,
  justifyContent:'center',
  alignItems:'center',
  backgroundcolor:'transparent',
  borderWidth:2,
  borderColor:'white',
  marginLeft:10,
},
fabText:{
  fontSize:20,
  color:'white',
},
focusTitle:{
  fontWeight:'bold',
  fontSize:22,
  marginLeft:20,
  color :'white',
}

})