import * as React from "react";
import { StyleSheet, Image, StyleProp, ViewStyle } from "react-native";
import { Text, View, } from "../../../components/Themed";
import LottieView from 'lottie-react-native';

interface IProps {
    headerText: string;
    style?: StyleProp<ViewStyle>;
}

export default function Header(props: IProps) {

    return (
        <View style={[styles.container, props.style]}>
            <LottieView
                style={styles.logoStyle} source={require("../../../assets/lottiefiles/78126-secure-login.json")}
                autoPlay={true}
                loop={true}
                resizeMode="cover"
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    },
    logoStyle: {
        flex: 1,
    },
    headerText: {
        textAlign: 'center'
    }
});