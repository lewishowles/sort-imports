const vscode = require("vscode");
const sortImports = require("./src/sort-imports");

function activate(context) {
	const disposable = vscode.commands.registerCommand("sort-imports.sortImports", sortImports);

	context.subscriptions.push(disposable);
}

module.exports = {
	activate,
};
