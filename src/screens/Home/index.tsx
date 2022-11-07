import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert} from "react-native";
import { Participant } from "../../components/Participants";

import { styles } from "./style";

export default function Home() {

   const [participants, setParticipants] = useState<string[]>([])
   const [participantName, setParticipantName] = useState('')

   console.log("participant ->", participants)
   console.log("participantName =>", participantName)

    function handleParticipantAdd() {

      if(participants.includes(participantName)) {
         return Alert.alert("Participante existe", "Ja existe esse nome na lista")
      }
      setParticipants(prevState => [...prevState, participantName])

      setParticipantName('')
      }

    function handleParticipantRemove(name : string) {

      Alert.alert("Remover", `Remover o participante ${name} ?`, [
        {
          text:"Sim",
          onPress: () => Alert.alert("Deletado")
        },
        {
          text:"Nao",
          style: 'cancel'
        }
        
      ])

      
    }
        
    
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
            onChangeText={setParticipantName}
            value={participantName}
            
        />

            <TouchableOpacity style={styles.button} onPress={ handleParticipantAdd}>
            <Text style={styles.buttonText}>
            +
            </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item) }
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
              Nobody has arrived in the event yet !
          </Text>
        )}

      />

    </View>
  )
}