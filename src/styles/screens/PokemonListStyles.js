import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191917',
        height: responsiveHeight(100),
    },
    backgroundImageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: "center",
    },
    backgroundImage: {
        opacity: 0.6,
    },
    content: {
        paddingTop: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(5),
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    addButton: {
        backgroundColor: "#FFCC00",
        justifyContent: "center",
        paddingHorizontal: responsiveWidth(3),
        borderRadius: 50,
    },
    addButtonText: {
        fontSize: responsiveFontSize(1.5),
        fontWeight: '500',
    },
    titleContainer: {
        marginTop: responsiveHeight(5),
        marginBottom: responsiveHeight(2),
    },
    title: {
        fontWeight: '400',
        color: '#FFFFFF',
        fontSize: responsiveFontSize(4.5),
        fontFamily: 'Aclonica-Regular',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: responsiveHeight(2),
    }
});

export default styles;
