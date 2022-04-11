import React from "react";
import {Button, Icon} from "react-native-magnus";
import * as S from "./App.styles";
import {SafeAreaView} from "react-native";
import { Text } from "react-native";

const App = () => {
	return (
		<SafeAreaView>
			<S.AppWrapper>
				<S.Header>My Header</S.Header>
				<Text>My Normal Header</Text>
				<Button bg="blue500" h={40} w={40} rounded="circle">
					<Icon name="like1" color="white" />
				</Button>
			</S.AppWrapper>
		</SafeAreaView>
	);
};

export default App;
