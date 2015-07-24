var fs = require('fs');
var path = require('path');
var through = require('through2');
var File = require('gulp-util').File;
var endOfLine = require('os').EOL;
var registerTemplate = fs.readFileSync(path.join(__dirname, 'register.template.js'), { encoding: 'utf8' });

module.exports = function(fileName){
    fileName = fileName || 'register.js';
    var contents = '';

    return through.obj(transform, flush);

    function transform(file, encoding, callback){
        var parsedFile = path.parse(file.path);

        if(parsedFile.ext === '.js') {
            var requirePath = './' + file.path.replace(file.base, '').replace(/\\/g, '/');
            var requireStatement = 'require(\'' + requirePath + '\')';
            contents += '\tregister(' + requireStatement + ');' + endOfLine;
        }

        return callback();
    }

    function flush(callback){
        if(contents.length > 0) {
            contents = registerTemplate.replace('/* inject */', contents);

            var file = new File({
                path: path.join(process.cwd(), fileName),
                contents: new Buffer(contents)
            });

            this.push(file);
        }

        return callback();
    }
};