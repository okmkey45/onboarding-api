const source = process.argv.slice(2)[0];

const filename = source.split('.')[0]
const ext = 'png'

const target = `${filename}.${ext}`

var wsd = require('websequencediagrams')
var fs = require('fs')

fs.readFile(source, 'utf8', (err, diagStr) => {
	if (err) {
		console.log('error on fs.readFile');
		console.error(err)
		return
	}

	wsd.diagram(diagStr, 'modern-blue', 'png')
		.then((result) => {
			convertoToPNG(result)
		}).catch((err) => {
			console.log('error on wsd.diagram');
			console.log(err);
		});
});

const convertoToPNG = ([buf, typ]) => {
	fs.writeFile(target, buf, (err) => {
		if (err) {
			console.log('error on fs.writeFile');
			console.log(err);
			return
		}
	});
}
