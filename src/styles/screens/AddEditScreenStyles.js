import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#191917",
  },
  title: {
    color: "#ffffff",
    fontFamily: 'Aclonica-Regular',
    fontSize: responsiveFontSize(4),
    marginBottom: responsiveHeight(4),
  },
  imageContainer: {
    borderWidth: 1,
    marginBottom: 10,
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderRadius: 12,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  input: {
    marginBottom: 10,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#c6c6c6',
    color: "#c6c6c6",
  },
  descriptionInput: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    height: 100,
    borderColor: '#c6c6c6',
    borderRadius: 12,
    color: "#c6c6c6",
    textAlignVertical: 'top',
  },
  saveButton: {
    borderWidth: 1,
    borderColor: "#FFCC00",
    width: '40%',
    marginHorizontal: 'auto',
    alignItems: 'center',
    paddingVertical: responsiveHeight(2),
    marginTop: responsiveHeight(3),
    borderRadius: 50,
  },
  saveButtonText: {
    color: '#FFCC00',
  }
});

export default styles;