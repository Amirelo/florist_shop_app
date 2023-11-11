import React from 'react';
import { ColorValue, StyleSheet, Text, TextStyle } from 'react-native';
import colors from '../colors/colors';

interface Props {
    children: String,
    savedStyle?: String,
    fontSize?: Number,
    color?: ColorValue,
    padding?: Number,
    paddingTop?: Number, 
    paddingBottom ?: Number,
    paddingStart ?: Number,
    paddingEnd ?: Number,

}

const CustomText = (props: Props): JSX.Element => {

    const styleFilter = (filter) => {
        const test = props[filter] ?  props[filter] : styles[props.savedStyle][filter];
        return test;
    }

    const compFontSize = styleFilter('fontSize')
    const compColor = styleFilter('color')
    return (
        <Text style={
            [
                {
                    fontSize: compFontSize,
                    color: compColor,
                    padding: props.padding,
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
        fontSize: 24,
        color: colors.light.text,
        fontWeight: '700'
    },
    subTitle: {
        fontSize: 20,
        color: colors.light.text,
        fontWeight: '700'
    },
    normal: {
        fontSize: 16,
        colors: colors.light.text,
        fontWeight: 'normal'
    }
})