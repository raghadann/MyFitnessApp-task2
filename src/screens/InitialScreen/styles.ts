import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../assets/constants/colors";

const createStyles = () =>
    StyleSheet.create({
        body: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
       
        background: {
            width: '100%',
            height: '100%',
            alignItems: 'center'
        },
        logo: {
            width: RFValue(130),
            height: RFValue(130),
            marginTop: RFValue(10),
            marginBottom: RFValue(.3),
        },
        text: {
            fontSize: RFValue(25),
            fontWeight: '600',
            fontFamily: 'Helvetica',
            color: Colors.BLACK,
            textAlign: 'center',
            marginHorizontal: RFValue(50),
            marginVertical:RFValue( 0.3 ),
        },
        footer: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
        },
        loginText: {
            fontSize: RFValue(30),
            fontFamily:'Chilanka',
            marginTop: RFValue(20),
            color: Colors.BLACK,
            marginBottom: RFValue(50),
            textAlign: 'center',
            fontWeight: '500',
        }
    });

export default createStyles;