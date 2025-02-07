import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    pokemonCard: {
        borderWidth: 1,
        borderColor: "#ffffff",
        width: "48%",
        height: responsiveHeight(22),
        borderRadius: 12,
        marginBottom: responsiveHeight(2),
    },
    pokemonImage: {
        width: '100%',
        height: "100%",
        position: 'absolute',
        borderRadius: 12,
        zIndex: 1,
    },
    pokemonDetails: {
        zIndex: 2,
        backgroundColor: "rgba(39, 39, 40, 0.6)",
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(2.5),
        marginTop: 'auto',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingBottom: responsiveHeight(1),
    },
    pokemonName: {
        color: "#ffffff",
        fontSize: responsiveFontSize(3),
        fontFamily: 'Inter',
        fontWeight: '900',
    },
    pokemonBreed: {
        color: "#ffffff",
        fontFamily: 'Inter',
    },
});

export default styles;