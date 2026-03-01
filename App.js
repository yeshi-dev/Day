import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import FocusTime from './componenets/FocusTime';
import { useState } from 'react';

export default function APP(){
  const [tasks, setTasks]=useState([])
  const [task,setTask]=useState("");
  const [selectedTask,setSelectedTask]=useState('');
  const [switchScreen,setSwitchScreen]=useState(false);

const addTask=()=>{
const trimmed =task.trim();
if(trimmed.length>0){
  setTask(prev=>[...prev,trimmed]);
  setTasks('');
  setSelectedTask(trimmed);

}
console.log(trimmed)
}
const changeScreen=()=>{
  setSwitchScreen(!switchScreen);
}

if(switchScreen){
  return <FocusTime focusTask={selectedTask}onBack={changeScreen}/>
}
  
  return(
  
    <SafeAreaView style={styles.container}>
      <View style ={styles.inputcontainer}>
        <TextInput
          placeholder ="what would you like to focus...."
          mode={"outlined"} 
          label ="Focus"
          style ={styles.InputText}
          value ={task}
        
          onChangeText={(Text)=>setTask(Text)}
          />
       <TouchableOpacity style={styles.fabButton} onPress={()=>{
        changeScreen();
        addTask();
       }}>
        <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.focusedTasks}>
        <Text style={styles.focusTitle}>Things we have focused on:</Text>
        <View style={{padding:20}}>
          {tasks.map((t,i)=>(
            <Text key ={i}style={{color:'white',fontsize:18}}>{t}</Text>
          ))}
          <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>1, learn react native</Text>
          <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>2, js basics</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles =StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#2f0b68',
},
inputcontainer:{
  flexDirection :'row',
  padding: 20,
},
InputText:{
  flex:1,
},
focusedTasks:{
  marginTop:20,
  flex:10,
},
fabButton:{
  height:60,
  width:60,
  borderRadius:30,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'transparent',
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
},
taskText:{
  fontWeight:"semi-bold",
  fontSize:18,
  color:"white",
padding:10,
}

})