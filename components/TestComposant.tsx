import {Text, Pressable, FlatList} from 'react-native';
import {useEffect, useState} from "react";


export function TestComposant() {

  const [nombreClics, setNombreClics] = useState(99)

  const [jsxlisteUtilisateurs, setJsxlisteUtilisateurs] = useState([]);


  const [utilisateurs, setUtilisateurs] = useState<{name: string}[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(utilisateurs => setUtilisateurs(utilisateurs))
  }, []);

  // on met une majuscule parce que c'est un composant
  const CarteUtilisateur = ({utilisateur}: { utilisateur : {name : string } }) => (
    <Text>{utilisateur.name}</Text>
  );

  return <>
    <Pressable onPress={() => {
      setNombreClics(nombreClics + 1);
      console.log(nombreClics);
    }}>
      <Text>Presse moi !</Text>
    </Pressable>
    <Text>{nombreClics}</Text>
    <FlatList data={utilisateurs} renderItem={
      ({item}) => (
          <CarteUtilisateur utilisateur={item}></CarteUtilisateur>)
    }></FlatList>
  </>

}

