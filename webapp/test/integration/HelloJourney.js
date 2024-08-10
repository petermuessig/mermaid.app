/* global QUnit */
sap.ui.define(["sap/ui/test/opaQunit", "./pages/Main"], function (opaTest) {
	"use strict";

	QUnit.module("Sample Hello Journey");

	opaTest("Should open the Hello dialog", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "mermaid.app"
			}
		});

		// Actions
		When.onTheMainPage.iPressTheSayHelloButton();

		// Assertions
		Then.onTheMainPage.iShouldSeeTheHelloDialog();

		// Actions
		When.onTheMainPage.iPressTheOkButtonInTheDialog();

		// Assertions
		Then.onTheMainPage.iShouldNotSeeTheHelloDialog();

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("Should close the Hello dialog", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "mermaid.app"
			}
		});

		// Actions
		When.onTheMainPage.iPressTheSayHelloButton();
		When.onTheMainPage.iPressTheOkButtonInTheDialog();

		// Assertions
		Then.onTheMainPage.iShouldNotSeeTheHelloDialog();

		// Cleanup
		Then.iTeardownMyApp();
	});
});
