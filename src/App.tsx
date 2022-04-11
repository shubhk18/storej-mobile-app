import React, {useEffect} from "react";
import {Button, Icon} from "react-native-magnus";
import * as S from "./App.styles";
import {SafeAreaView} from "react-native";
import {disableFontScaling} from "./utils/scale";
import setGlobalProps from "./utils/global-props";

const App = () => {

	const defaultFontStyle = {
		fontFamily: "Inter-Regular",
	};
	const textProps = {
		style: {
			...defaultFontStyle,
		},
	};
	const textInputProps = {
		style: {
			...defaultFontStyle,
		},
	};

	useEffect(() => {
		// Disable the font scaling in the app.
		disableFontScaling();
		setGlobalProps.forText(textProps);
		setGlobalProps.forTextInput(textInputProps);
	}, []);

	return (
		<SafeAreaView>
			<S.AppWrapper>
				<S.Header>My Header</S.Header>
				<S.Text>My Normal Header</S.Text>
				<Button bg="blue500" h={40} w={40} rounded="circle">
					<Icon name="like1" color="white" />
				</Button>
			</S.AppWrapper>
		</SafeAreaView>
	);
};

export default App;
