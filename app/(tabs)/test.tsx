import {StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
// eslint-disable-next-line import/namespace
import {TestComposant} from "@/components/TestComposant";


export default function Test() {

    return (
        <SafeAreaView style={styles.conteneur}>
            <TestComposant></TestComposant>
        </SafeAreaView>
    );
}


// Toujours mettre mes styles à l'extérieur du composant pour un souci de performance
const styles = StyleSheet.create({
    monTexte: {
        color: "green",
        // fontSize : 50,
        // textAlign: "center",
        // paddingVertical: 300
    },
    conteneur : {
        display: "flex",
        flexDirection: "row",
    }
});