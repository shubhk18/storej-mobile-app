import React from "react";
import {render} from "@testing-library/react-native";
import App from "./App";
describe("App",()=>{
	it("should render the component",()=>{
		const {toJSON} = render(<App/>);
		expect(toJSON).toMatchSnapshot();
	});
});