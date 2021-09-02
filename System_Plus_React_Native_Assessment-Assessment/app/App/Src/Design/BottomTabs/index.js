import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import ListingScreen from "../ListingScreen";
import CalenderScreen from "../CalenderScreen";

const LISTING = require('../../Assets/listing.png')
const LISTING_PUR = require('../../Assets/listing_pur.png')

const CALENDAR = require('../../Assets/calendar.png')
const CALENDAR_PUR = require('../../Assets/calendar_pur.png')

class BottomTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'Listings',
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0 }}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() =>
                        this.setState({
                            selectedItem: "Listings",
                            showComponent: true
                        })}
                        style={[styles.tabView, { borderTopColor: this.state.selectedItem === "Listings" ? "#E33E38" : "white" }]}>
                        <Image source={this.state.selectedItem === "Listings" ? LISTING_PUR : LISTING}
                            style={styles.iconStyle} />
                        <Text style={{ color: this.state.selectedItem === "Listings" ? '#38274C' : "grey" }}>Listings</Text>
                        {this.state.selectedItem === "Listings" ?
                            <View style={styles.indicatorStyle} /> : null}
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} onPress={() =>
                        this.setState({
                            selectedItem: "Calendar",
                        })
                    } style={[styles.tabView, { borderTopColor: this.state.selectedItem === "Calendar" ? "#E33E38" : "white" }]}>
                        <Image source={this.state.selectedItem === "Calendar" ? CALENDAR_PUR : CALENDAR}
                            style={styles.iconStyle} />
                        <Text style={{ color: this.state.selectedItem === "Calendar" ? '#38274C' : "grey" }}>Calendar</Text>
                        {this.state.selectedItem === "Calendar" ?
                            <View style={styles.indicatorStyle} /> : null}
                    </TouchableOpacity>
                </View>
                {this.state.selectedItem === "Calendar" ?
                    <View style={styles.ComponentContainer}>
                        <CalenderScreen />
                    </View> :
                    <View style={styles.ComponentContainer}>
                        <ListingScreen />
                    </View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabView: {
        width: '50%',
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        elevation: 10,
    },
    iconStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    ComponentContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    indicatorStyle: {
        width: '100%',
        height: 2,
        backgroundColor: "red",
        position: 'absolute',
        top: 0
    }
})

export default BottomTabs;