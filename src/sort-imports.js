const vscode = require("vscode");

module.exports = function() {
	const editor = vscode.window.activeTextEditor;

	if (!editor) {
		return;
	}

	const document = editor.document;
	const selections = editor.selections;

	editor.edit(editBuilder => {
		selections.forEach(selection => {
			const line = document.lineAt(selection.active.line);

			// Determine whether the cursor is in an import statement.
			if (isImportStatement(line.text)) {
				const sortedImport = sortImport(line.text);

				editBuilder.replace(line.range, sortedImport);
			}
		});
	});
};

/**
 * Given a line of text, determine if the current line is an import statement.
 *
 * @param  {string}  lineText
 *     The line of text to test.
 */
function isImportStatement(lineText) {
	const importRegex = /^import\s*{\s*[^}]*\s*}\s*from\s*['"][^'"]+['"]\s*;?$/;

	return importRegex.test(lineText);
}

/**
 * Sort an import statement alphabetically.
 */
function sortImport(importStatement) {
	const parts = importStatement.match(/^import\s*{\s*([^}]*)\s*}\s*from\s*(['"][^'"]+['"])\s*;?$/);

	if (!parts) {
		return importStatement;
	}

	const imports = parts[1].split(",").map(item => item.trim()).sort();

	return `import { ${imports.join(", ")} } from ${parts[2]};`;
}
