import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const DAYS_AND_DATES = [
    {
        id: 1,
        date: 11,
        day: "Sun"
    },
    {
        id: 2,
        date: 5,
        day: "Mon"
    },
    {
        id: 3,
        date: 6,
        day: "Tue"
    },
    {
        id: 4,
        date: 7,
        day: "Wed"
    },
    {
        id: 5,
        date: 8,
        day: "Thr"
    },
    {
        id: 6,
        date: 9,
        day: "Fri"
    }
]

const LOCATION_ICON = require('../../Assets/location.png')
const AGENT_PHOTO = require('../../Assets/agent.png')


function calenderScreen() {
    const [selectedItem, setSelectedItem] = useState(3)
    const [selectedDay, setSelectedDay] = useState("Wed")

    function onPressList(index, item) {
        setSelectedItem(index);
        setSelectedDay(item.day)
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.testStyle}>Calendar</Text>
            </View>
            <View style={styles.calendarContainer}>
                <View style={{ height: 70, width: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>Aug</Text>
                </View>
                {DAYS_AND_DATES.map((item, index) => {
                    const isSelected = selectedItem === index
                    return (
                        <TouchableOpacity key={item.id} activeOpacity={0.5} onPress={() => onPressList(index, item)}>
                            <View style={{ backgroundColor: isSelected ? "#38274C" : "transparent", marginStart: 3, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, elevation: isSelected ? 20 : 0 }}>
                                <View style={{ margin: 10, }} >
                                    <Text style={{ color: isSelected ? "white" : "grey", }}>{item.day}</Text>
                                    <Text style={{ textAlign: 'center', marginTop: 15, color: isSelected ? "white" : "grey", }}>{item.date}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            {selectedDay === "Wed" ?
                <>
                    <View style={{ flexDirection: 'row', margin: 15, alignItems: 'center' }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Wednesday</Text>
                        <Text style={{ marginStart: 10, fontSize: 16 }}>07 August 2021</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ alignItems: 'center', width: '10%', marginStart: '5%', marginTop: "10%" }}>
                            <View style={styles.greenCircle} />
                            <View style={{ width: 1, height: 120, backgroundColor: '#70707070' }} />
                            <View style={[styles.greenCircle, { backgroundColor: '#FF8B00', borderColor: '#FF8B0050' }]} />
                        </View>
                        <View style={{ marginTop: "10%" }}>
                            <View style={{}}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>8 AM
                                </Text>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>(30 mins)</Text>
                            </View>
                            <View style={{ marginTop: '120%' }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', }}>8 AM
                                </Text>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>(30 mins)</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={styles.greenViewContainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 15, marginTop: 10 }}>
                                    <Image style={styles.iconStyle} source={LOCATION_ICON} />
                                    <Text style={{ color: 'white', marginStart: "3%", fontWeight: 'bold' }}>5519 NE Skidmore Portland</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 15, marginTop: 10 }}>
                                    <Image style={[styles.iconStyle, { width: 25, height: 25 }]} source={AGENT_PHOTO} />
                                    <Text style={{ color: 'white', marginStart: "3%", fontWeight: 'bold', fontSize: 12 }}>Rick Adams</Text>
                                </View>
                                <View style={{ width: '40%', height: 25, backgroundColor: 'white', marginStart: 15, marginTop: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#58B25890', fontWeight: 'bold', fontSize: 14, marginTop: -2 }}>Approved</Text>
                                </View>
                            </View>
                            <View style={[styles.greenViewContainer, { marginTop: 10, backgroundColor: '#FF8B0090' }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 15, marginTop: 10 }}>
                                    <Image style={styles.iconStyle} source={LOCATION_ICON} />
                                    <Text style={{ color: 'white', marginStart: "3%", fontWeight: 'bold' }}>5519 NE Skidmore Portland</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 15, marginTop: 10 }}>
                                    <Image style={[styles.iconStyle, { width: 25, height: 25 }]} source={AGENT_PHOTO} />
                                    <Text style={{ color: 'white', marginStart: "3%", fontWeight: 'bold', fontSize: 12 }}>Rick Adams</Text>
                                </View>
                                <View style={{ width: '40%', height: 25, backgroundColor: 'white', marginStart: 15, marginTop: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#FF8B0090', fontWeight: 'bold', fontSize: 14, marginTop: -2 }}>Pending</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </> : null}
            {selectedDay === "Thr" ?
                <>
                    <View style={{ flexDirection: 'row', margin: 15, alignItems: 'center' }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Thursday</Text>
                        <Text style={{ marginStart: 10, fontSize: 16 }}>08 August 2021</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ alignItems: 'center', width: '10%', marginStart: '5%', marginTop: "10%" }}>
                            <View style={[styles.greenCircle, { backgroundColor: '#38274C', borderColor: '#38274C50' }]} />
                        </View>
                        <View style={{ marginTop: "10%" }}>
                            <View style={{}}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>8 AM
                                </Text>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>(30 mins)</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={[styles.greenViewContainer, { backgroundColor: '#38274C90' }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 15, marginTop: 10 }}>
                                    <Image style={styles.iconStyle} source={LOCATION_ICON} />
                                    <Text style={{ color: 'white', marginStart: "3%", fontWeight: 'bold' }}>5519 NE Skidmore Portland</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 15, marginTop: 10 }}>
                                    <Image style={[styles.iconStyle, { width: 25, height: 25 }]} source={AGENT_PHOTO} />
                                    <Text style={{ color: 'white', marginStart: "3%", fontWeight: 'bold', fontSize: 12 }}>Rick Adams</Text>
                                </View>
                                <View style={{ width: '55%', height: 25, backgroundColor: 'white', marginStart: 15, marginTop: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#38274C90', fontWeight: 'bold', fontSize: 14, marginTop: -2 }}>Buyer Reschedule</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </> : null}
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
    },
    greenCircle: {
        width: 18,
        height: 18,
        backgroundColor: '#58B258',
        borderRadius: 20,
        borderColor: '#58B25850',
        borderWidth: 3,
    },
    greenViewContainer: {
        width: '65%',
        height: 110,
        backgroundColor: '#58B25890',
        marginStart: '2%',
        borderRadius: 12
    },
    calendarContainer: {
        height: 70,
        backgroundColor: '#F6F8FA',
        flexDirection: 'row'
    },
    iconStyle: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
})

export default calenderScreen