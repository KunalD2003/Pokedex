import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    background: {
        height: responsiveHeight(100),
        backgroundColor: "#191917",
        alignItems: 'center',
        paddingVertical: responsiveHeight(5),
    },
    container: {
        width: '90%',
        height: '100%',
        justifyContent: "space-between",
    },
    title: {
        fontWeight: '400',
        color: '#FFFFFF',
        fontSize: responsiveFontSize(3.8),
        fontFamily: 'Aclonica-Regular',
        lineHeight: responsiveHeight(5),
    },
    content: {
        gap: responsiveHeight(2.5),
    },
    description: {
        color: '#FFFFFF',
        fontSize: responsiveFontSize(2.55),
        fontWeight: '700',
        fontFamily: "Inter",
        lineHeight: responsiveHeight(3.5),
    },
    button: {
        backgroundColor: "#FFFFFF",
        width: '80%',
        alignItems: "center",
        paddingVertical: responsiveHeight(1.8),
        borderRadius: 50,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: responsiveFontSize(2),
        fontWeight: '900',
        fontFamily: "Inter",
    },
});

export default styles;
