import {Text, Pressable} from 'react-native';
import {useEffect, useState} from "react";


// type TestComposantProps = {value: string, callback: (event : GestureResponderEvent) => void}


export function TestComposant() {

  const [nombreClics, setNombreClics] = useState(0)

  let jsxlisteUtilisateurs : any;

  useEffect(() => { // qui va déclencher qu'une seule fois la méthode suivante
    fetch("https://jsonplaceholder.typicode.com/users")// requete sur un serveur - pour l'instant sur un faux svr
        .then(response => response.json()) // va nous renvoyer un json
        .then(utilisateurs => jsxlisteUtilisateurs = utilisateurs.map(  // avec méthode map -> key obligatoire
            (utilisateur : {name : string})  => (<Text key={utilisateur.name}>{utilisateur.name}</Text>) // objet 'utilisateur' avec une propriété name de type string
        ))
  }, [nombreClics]);

  // 1 ère technique montrée avec .map()

  // const listeUtilisateurs = [{nom: "tata"}, {nom: "titi"}, {nom: "toto"}]
  //                                           // ["tata", "titi", "toto"]
  // const listeNomUtilisateurs = listeUtilisateurs.map(
  //     utilisateur => utilisateur.nom // il y a un return implicite après la =>
  // )
  // console.log(listeNomUtilisateurs)

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

