import {Text, TextInput} from "react-native";

interface TextInputWithDefaultProps extends TextInput {
    defaultProps?: {allowFontScaling?: boolean};
}
interface TextWithDefaultProps extends TextInput {
    defaultProps?: {allowFontScaling?: boolean};
}

export const disableFontScaling = (allowFontScaling = false) => {
	((Text as unknown) as TextWithDefaultProps).defaultProps = {
		...(((Text as unknown) as TextWithDefaultProps).defaultProps || {}),
		allowFontScaling,
	};
	((TextInput as unknown) as TextInputWithDefaultProps).defaultProps = {
		...(((TextInput as unknown) as TextInputWithDefaultProps).defaultProps ||
            {}),
		allowFontScaling,
	};
};
