sap.ui.define(["sap/ui/core/Control", "mermaid/dist/mermaid"], function(Control, mermaid) {
	"use strict";

	mermaid.initialize({
		startOnLoad: false
	});

	const sheet = new CSSStyleSheet();
	sheet.replaceSync(`
		.mermaidTooltip {
			position: absolute;
			padding: 0.25rem;
			background-color: lightgoldenrodyellow;
			border: 2px solid red;
			border-radius: 0.5rem;
		}
	`);
	document.adoptedStyleSheets.push(sheet);

	return Control.extend("mermaid.app.control.Mermaid", {
		metadata: {
			properties: {
				"definition": { type: "string" }
			}
		},

		renderer: {
			apiVersion: 2,
			render: function(oRm, oControl) {
				oRm.openStart("pre", oControl);
				oRm.class("mermaid");
				oRm.openEnd();
				oRm.unsafeHtml(oControl.getDefinition().split("\\n").map((line) => line.trim()).join("\n"));
				oRm.close("pre");
			}
		},

		onAfterRendering: function() {
			mermaid.run();
		}
	});

});
