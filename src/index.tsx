import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
	<Hello compiler="TypeScript" framework="React" />,
	document.getElementById("example")
);

if (module && module.hot) {
	module.hot.accept();

	module.hot.addStatusHandler(status => {
		if (status === 'prepare') console.clear();
	});
}