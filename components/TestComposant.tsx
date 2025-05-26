import {Text, Pressable} from 'react-native';
import {useEffect, useState} from "react";


export function TestComposant() {

  const [nombreClics, setNombreClics] = useState(99)

  const [jsxlisteUtilisateurs, setJsxlisteUtilisateurs] = useState([]);

  useEffect(() => { // qui va déclencher qu'une seule fois la méthode suivante
    fetch("https://jsonplaceholder.typicode.com/users")// requete sur un serveur - pour l'instant sur un faux svr
        .then(response => response.json()) // va nous renvoyer un json
        .then(utilisateurs => setJsxlisteUtilisateurs = utilisateurs.map(  // avec méthode map -> key obligatoire
            (utilisateur : {name : string})  => (<Text key={utilisateur.name}>{utilisateur.name}</Text>) // objet 'utilisateur' avec une propriété name de type string
        ))
  }, []);


  return <>
    <Pressable onPress={() => {
      setNombreClics(nombreClics + 1);
      console.log(nombreClics);
    }}>
      <Text>Presse moi !</Text>
    </Pressable>
    <Text>{nombreClics}</Text>
    {jsxlisteUtilisateurs}
  </>

}

