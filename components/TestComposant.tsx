import {Text, Pressable, FlatList} from 'react-native';
import {useEffect, useState} from "react";
import {CarteUtilisateur} from "@/components/CarteUtilisateur";


export function TestComposant() {

  const [nombreClics, setNombreClics] = useState(99)

  const [jsxlisteUtilisateurs, setJsxlisteUtilisateurs] = useState([]);

  type UserType = {name : string}  // avec un type on peut faire de l'héritage mais sinon 0 différence avec une interface

  const [utilisateurs, setUtilisateurs] = useState<{name: string}[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(utilisateurs => setUtilisateurs(utilisateurs))
  }, []);



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
          <CarteUtilisateur user={item}></CarteUtilisateur>)
    }></FlatList>
  </>

}

