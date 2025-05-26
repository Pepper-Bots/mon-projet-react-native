import {Text} from 'react-native';
import {UserType} from "@/components/UserType";


type CarteUtilisateurProps = { user : UserType}

export function CarteUtilisateur  ({user}: CarteUtilisateurProps) {
    return (
        <Text>{user.name}</Text>
    );
}