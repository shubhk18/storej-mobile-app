/* eslint-disable prefer-rest-params */
/* eslint-disable no-param-reassign */
import {Text} from "react-native";

export const forText = customProps => {
	const TextRender = Text.render;
	const initialDefaultProps = Text.defaultProps;
	Text.defaultProps = {
		...initialDefaultProps,
		...customProps,
	};
	Text.render = function render(props) {
		const oldProps = props;
		props = {...props, style: [customProps.style, props.style]};
		try {
			return TextRender.apply(this, arguments);
		} finally {
			props = oldProps;
		}
	};
};
