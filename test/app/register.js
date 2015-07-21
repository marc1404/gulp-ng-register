module.exports = app => {
	register(require('./register.js'));
	register(require('./test.controller.js'));
	register(require('./test.directive.js'));
	register(require('./test.service.js'));
	register(require('./nested/nested.controller.js'));

    function register(module){
        if(module.controller){
            return app.controller(module.name, module.controller);
        }

        if(module.directive){
            return app.directive(module.name, module.directive);
        }

        if(module.service){
            return app.factory(module.name, module.service);
        }
    }
};