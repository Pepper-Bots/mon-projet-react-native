import { useState } from 'react';
import { Image } from 'expo-image';
import { Button, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TestScreen() {
    const [count, setCount] = useState(0);

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#FFDAC1', dark: '#1A1A1A' }}
            headerImage={
                <IconSymbol
                    size={110}
                    color="#FF7F50"
                    name="sparkles"
                    style={styles.headerImage}
                />
            }
        >
            <ThemedView style={styles.centered}>
                <Image
                    source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                    style={styles.avatar}
                />
                <ThemedText type="title" style={styles.centerText}>
                    Salut Hélène 👋
                </ThemedText>
                <ThemedText style={styles.centerText}>
                    Bienvenue sur ta page de test Expo !
                    {"\n"}Tu peux modifier ce fichier à volonté 😄
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.counterContainer}>
                <ThemedText style={styles.centerText}>Compteur magique : {count}</ThemedText>
                <Button title="Incrémente !" onPress={() => setCount(count + 1)} />
            </ThemedView>
            <ThemedView style={styles.quoteBox}>
                <ThemedText type="subtitle" style={styles.centerText}>
                    “Chaque jour est une nouvelle chance de coder.” 🚀
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#FF7F60',
        bottom: -20,
        left: 10,
        position: 'absolute',
    },
    centered: {
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 24,
        gap: 10,
    },
    centerText: {
        textAlign: 'center',
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        marginBottom: 12,
    },
    counterContainer: {
        alignItems: 'center',
        marginVertical: 16,
    },
    quoteBox: {
        backgroundColor: '#FF7F60',
        borderRadius: 14,
        margin: 18,
        padding: 12,
        alignItems: 'center',
    },
});
