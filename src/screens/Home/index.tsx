import { Text, TextInput, TouchableOpacity, View, FlatList, Alert} from "react-native";
import { Participant } from "../../components/Participants";

import { styles } from "./style";

export default function Home() {

   const participants = ["Bruno", "Gabriel", "Stephanie", "Roberto", "Daniel","Eduardo","Angela", "Mirian", "Daniela","Elaine"]

    function handleParticipantAdd() {

      if(participants.includes("Bruno")) {
         return Alert.alert("Participante existe", "Ja existe esse nome na lista")
      }
        
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
        />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
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