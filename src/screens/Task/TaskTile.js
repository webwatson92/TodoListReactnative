import React from 'react';
import {Pressable, View, Text, Image, StyleSheet} from 'react-native';

export default function Tasktile({ task, onUpdateTask, onDeleteTask}) {

  const onChangeStatus = () => {
    onUpdateTask(task.id)
  }

  const _onDeleteTask = () => {
     onDeleteTask(task.id)
  }

  return (
    <View style={styles.container}>         
            <Pressable onPress={onChangeStatus} style={styles.subContainer}>
                <Image
                    style={styles.check}
                    source={task.isCompleted ? require('../../../assets/icons/icon_check.png') : require('../../../assets/icons/icon_uncheck.png')}
                />
                <Text style={styles.title}>{task.title}</Text>
            </Pressable>
        <Pressable onPress={_onDeleteTask}>
            <Image
                style={styles.check}
                source={require('../../../assets/icons/icon_del.png')}
            />
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        padding : 10,
        justifyContent: "space-between"
    },
    subContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between'
    },
    check: {
        width:26,
        height:26
    },
    title:{
        marginLeft: 25,
        fontSize:16
    }
})
