import React from 'react';
import { ColorValue, Image, ImageStyle, ViewStyle } from 'react-native';
import colors from '../colors/colors';

interface Props {
    src: any,
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: ColorValue;
}

const CustomImage = (props: Props): JSX.Element => {
    const compBorderRadius = props.borderRadius ? props.borderRadius : 0;
    const compBorderWidth = props.borderWidth ? props.borderWidth : 0;
    const compBorderColor = props.borderColor ? props.borderColor : null;

    return (
        <Image
            style = {{
                borderRadius: compBorderRadius,
                borderWidth: compBorderWidth,
                borderColor: compBorderColor,
            } as ImageStyle}
         width={100} height={100} source={props.src.substring(0,4) == 'http' ? { uri: props.src } : props.src} />
    )
}

export default CustomImage;
