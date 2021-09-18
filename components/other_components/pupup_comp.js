import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONT_SIZE, ROBOTO_FONT } from '../utils/constant'
import CheckboxComp from './checkbox_comp'

export default function PopupComp(props) {
    return(
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.showModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{props.title}</Text>
                            {props.children}
                        <TouchableOpacity onPress={props.setShowModal}>
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
        
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText: {
        fontFamily: ROBOTO_FONT.bold,
        fontSize: FONT_SIZE.headLine_1,
        marginBottom: 15,
        textAlign: 'center',
    },
    textStyle: {
        color: COLORS.PRIMARY,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 25,
    },
    container:{
        width: '90%',
        height: '50%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})