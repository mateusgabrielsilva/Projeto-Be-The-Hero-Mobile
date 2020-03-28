import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
//import { BorderlessButton } from 'react-native-gesture-handler';

export default StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    returnButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        marginTop: 32,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 12,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#42424d',
        fontWeight: 'bold',
    },

    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    heroTitle: {
        fontSize: 20,
        color: '#13131a',
        fontWeight: 'bold',
    },

    heroDescription: {
        marginTop: 10,
        fontSize: 15,
        lineHeight: 24,
        color: '#737380',
    },

    actions:  {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 5,
        height:50,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        
    },
})