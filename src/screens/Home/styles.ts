import { StyleSheet } from "react-native";
//import { getStatusBarHeight } from 'react-native-linear-gradient';

export const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: getStatusBarHeight() + 26
        marginTop: 26
    }
})