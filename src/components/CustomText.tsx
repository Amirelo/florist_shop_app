import React from 'react';
import { ColorValue, StyleSheet, Text, TextStyle } from 'react-native';
import colors from '../colors/colors';

interface Props {
    children: String,
    savedStyle?: String,
    fontSize?: Number,
    color?: ColorValue

}

const CustomText = (props: Props): JSX.Element => {

    const styleFilter = (filter) => {
        const test = props[filter] ? props[filter] : styles[props.savedStyle] ? styles[props.savedStyle][filter] : null;
        return test;
    }

    const compFontSize = styleFilter('fontSize')
    const compColor = styleFilter('color')
    return (
        <Text style={
            [
                {
                    fontSize: compFontSize,
                    color: compColor
                }] as TextStyle
        }>
            {props.children}
        </Text>
    )
}

CustomText.defaultProps = {

}

export default CustomText;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: colors.light.primary,
        fontWeight: '700'
    }
})