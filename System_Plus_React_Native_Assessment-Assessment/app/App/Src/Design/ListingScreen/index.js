import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: require('../../Assets/house1.png'),
        location: '5519 NE Skidmore',
        status: 'Inactive'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bsfdfa',
        image: require('../../Assets/house2.png'),
        location: '5519 NE Skidmore',
        status: 'Active'
    },
    {
        id: 'bd7acbdfea-c1b1-46c2-aed5-3ad53abb28bsfdfa',
        image: require('../../Assets/agent.png'),
        location: '5519 NE Skidmore',
        status: 'Active'
    },
];

function listingScreen() {
    const renderItem = ({ item }) => (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", marginBottom: 10 }}>
                <Image style={{ width: '95%', height: 200, resizeMode: 'cover', marginTop: 5, borderRadius: 10, alignSelf: 'center' }} source={item.image} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%', alignSelf: 'center' }}>
                    <View>
                        <Text style={{ marginTop: 10, fontSize: 16 }}>{item.location}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#707070' }}>{"4 new"}</Text>
                            <Text style={{ marginStart: 5, fontSize: 12, color: '#707070' }}>requests</Text>
                        </View>
                    </View>
                    <View style={{ width: '25%', height: 30, backgroundColor: item.status === "Inactive" ? '#E33E3830' : "#58B25830", justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ fontSize: 16, color: item.status === "Inactive" ? '#E33E38' : "#58B258", fontWeight: 'bold', marginTop: -2 }}>{item.status}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.testStyle}>Listing</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={{ width: '100%', height: 60 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    headerContainer: {
        width: "100%",
        height: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    testStyle: {
        fontWeight: 'bold',
        color: '#090909',
        fontSize: 16,
        marginTop: '7%'
    }
})

export default listingScreen

