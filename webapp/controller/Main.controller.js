sap.ui.define(["./BaseController", "sap/m/MessageBox", "mermaid/dist/mermaid"], function (BaseController, MessageBox, mermaid) {
	"use strict";

	mermaid.initialize({ startOnLoad: true });

	return BaseController.extend("mermaid.app.controller.Main", {
		sayHello: function () {
			MessageBox.show("Hello World!");
		}
	});
});
