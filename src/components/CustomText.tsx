import React from 'react';
import { ColorValue, StyleSheet, Text, TextStyle } from 'react-native';
import colors from '../colors/colors';

interface Props {
    children: String,
    savedStyle?: String,
    fontSize?: Number,
    textColor?: ColorValue

}

const CustomText = (props: Props): JSX.Element => {
    const compFontSize = props.fontSize ? props.fontSize : null;
    const compColor = props.textColor ? props.textColor : null;
    return (
        <Text style={
            [
                {
                    fontSize: compFontSize,
                    color: compColor
                }, styles[props.savedStyle]] as TextStyle
        }>
            {props.children}
        </Text>
    )
}

export default CustomText;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: colors.light.primary,
        fontWeight: '700'
    }
})