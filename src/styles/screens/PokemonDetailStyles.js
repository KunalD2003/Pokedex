import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#191917',
    },
    imageBackground: {
        height: responsiveHeight(70),
    },
    infoContainer: {
        backgroundColor: "rgba(39, 39, 40, 0.6)",
        marginTop: 'auto',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(3),
    },
    textContainer: {
        width: '80%',
    },
    nameText: {
        fontWeight: '400',
        color: '#FFFFFF',
        fontSize: responsiveFontSize(5),
        fontFamily: 'Aclonica-Regular',
    },
    breedText: {
        color: "#ffffff",
        fontFamily: 'Aclonica-Regular',
        fontSize: responsiveFontSize(2.5),
    },
    buttonContainer: {
        gap: responsiveHeight(1),
        marginVertical: 'auto',
    },
    icon: {
        height: responsiveHeight(5),
        width: responsiveWidth(10),
    },
    descriptionContainer: {
        marginTop: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(3),
        gap: responsiveHeight(2),
    },
    descriptionTitle: {
        fontWeight: '400',
        color: '#dedede',
        fontSize: responsiveFontSize(3),
        fontFamily: 'Inter',
    },
    descriptionText: {
        color: "#dedede",
        fontFamily: 'Inter',
    }
});

export default styles;
