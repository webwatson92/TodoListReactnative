import React, { useState } from 'react'
import { FlatList, View, StyleSheet} from "react-native"

import TaskTile from "./TaskTile"
import TaskForm from "./TaskForm"
import FloatingBtn from "../../components/FloatingBtn"
import Header from "../../components/Header";
import Counter from "../../components/Counter";

export default function TasksScreen() {
  //liste des taches
  //state pour garder en mémoire les taches
   const [ isFormVisible, setIsFormVisible] = useState(false) 
   const [ tasks, setTasks] = useState([]) 

  //{title: "Hello word", isComplete: false}
  const renderItem = ({item}) => {
      return <TaskTile task={item}  onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask}/>
  }

   //Ajouter une fonction  pour ajouter une tache  au state
  //Passer cette fonction à notre formulaire
  const onAddTask = (title) => {
    // [task]=[ [1,2,3 ] ]
    //[..task]=[1,2,2]
    setTasks([...tasks, {
        id: Date.now(),
        title,
        isCompleted:false
    }])
  }

  const onUpdateTask = (id) => {
      let newTasks = [] //un tableau de task
      tasks.forEach(t => {
          if(t.id !== id){ //s'il ne trouve pas l'id dans le state
              newTasks.push(t) 
              return
          }
          //Il trouve l'ID dans ce cas on push change l'état de completed
          newTasks.push({
              id,
              title: "Ok",//t.title,
              isCompleted : !t.isCompleted
          })
      })
      setTasks(newTasks)
  }

  const onDeleteTask = (id) => {
        let newTasks = [] //On vide le tableau 
        tasks.forEach(t => {
            if(t.id !== id){ //s'il ne trouve pas l'id dans le state
                newTasks.push(t) 
                return
            }
        })
        setTasks(newTasks)
  }

  const _toggleForm = () => {
    setIsFormVisible(!isFormVisible)
  }

  
  //2x TaskCouter => props nb & title
  //TasksList => return FlatList => TaskTile

  //Ajouter un bouton flottant => style absolute
  //callback => rendu cond . TaskForm
  return (
    <>
        
        <FlatList 
            ListHeaderComponent={
                <>
                    <Header />
                    {isFormVisible && <TaskForm onAddTask={onAddTask}/>}
                    <View style={styles.containerCounters}>
                        <Counter nb={tasks.length} title={"Tâches crées"}/>
                        <Counter nb={tasks.filter(t => t.isCompleted === true).length} title={"Tâches effectuées"}/>
                    </View>
                </>
            }
            contentContainerStyle={{ flexGrow:1 }}
            data={tasks} 
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
        />
        
        <FloatingBtn toggle={_toggleForm} isOpen={isFormVisible}/>
    </>
  );
}

const styles = StyleSheet.create({
    containerCounters:{
        flexDirection:"row",
        justifyContent: "space-between",
        marginTop:10,
        paddingHorizontal :20,
    }
})

