import React, { useRef, useState ,useEffect} from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
 const   List= () => {

    const [current , setCurrent]=useState('')

     const tasks = [
        {
            taskId : 1,
            taskName : 'Clean the bathroom',
            taskStatus: 'Complete'
        },
        {
            taskId : 2,
            taskName : 'Learn filtering data in React',
            taskStatus: 'To do'
        },
        {
            taskId : 3,
            taskName : 'Fix the bug on React project',
            taskStatus: 'To do'
        },
        {
            taskId : 4,
            taskName : 'Fix the car',
            taskStatus: 'Complete'
        }
    ];


    let list = tasks;

    if(current.length >0){
        list = tasks.filter(i=>i.taskName.toLocaleLowerCase().indexOf(current.toLocaleLowerCase())>-1)
    }
    

    return (
        <View>

            <TextInput style={{width:300, height:40}} placeholder="enter something"
            value={current}
           onChange={(e)=>setCurrent(e.target.value)}
            ></TextInput>
            <Text>React Examples</Text>
                <FlatList output={tasks}
                renderItem={({item})=>{
                    return (
                    <>
                    
                    <Text>{item.taskId}</Text>
                        <Text>{item.taskName}</Text>
                        <Text>{item.taskStatus}</Text>
                    </>
                )
                }}
                />
        </View>
    )
}
export default List;
