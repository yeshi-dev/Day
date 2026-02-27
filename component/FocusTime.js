import { useEffect, useState } from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function FocusTime({focusTask, onBack}){
  const [selectedTime,selectedTime]=useState(10);
  const time =[600,900,1200]
  const timeFormat =(time)=>{
    const minutes =Math.floor(time/60);
    const seconds =time%60;
    return '${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' :''}${seconds}';
  }
  const [isRunning,setIsRunning]=useState(false);
  useEffect(()=>{
    let interval =null;
    if()
  })

}