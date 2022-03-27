import React, {useState} from 'react'
import {TextInput, StyleSheet, Button, View, Text} from 'react-native'

//On recupère tjrs un props dans une fonction  export 
export default function TaskForm({ onAddTask }) {
    const [newTitle, setNewTitle] = useState("")

    const onChangeText = (val) => {
        setNewTitle(val)
    }

    const onAddNewTask = () => {
        if(newTitle==="") return //si le titre est vide on ne fait rien
        onAddTask(newTitle) //on valide le titre avec l'ajout
        setNewTitle("") //on vide le champs après le clique.
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.input} 
                    placeholder="Nouvelle tâche" 
                    onChangeText={onChangeText} 
                    value={newTitle} 
                />
                <Button style={styles.button}
                    onPress={onAddNewTask}
                    title="Ajouter"
                    color="#841584"></Button>
            </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems:"center",
        margin:20
    },
    input:{
        borderColor:"#000",
        borderWidth:1,
        width:"70%",
        height: 40,
        borderRadius: 5,
        
    },
}) 
