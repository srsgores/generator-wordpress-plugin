"use strict";
var util = require("util");
var path = require("path");
var yeoman = require("yeoman-generator");

var wordpressPluginGenerator = module.exports = function wordpressPluginGenerator(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);

	this.on("end", function () {
		this.installDependencies({ skipInstall: options["skip-install"] });
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, "../package.json")));
};

util.inherits(wordpressPluginGenerator, yeoman.generators.Base);

wordpressPluginGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	// have Yeoman greet the user.
	console.log(this.yeoman);

	var prompts = [
		{
			name: "name",
			message: "What is the name of the new wordpress plugin?",
			default: "My Plugin Name"
		},
		{
			name: "description",
			message: "Give me a description on what your plugin is supposed to do",
			default: "A sample description"
		},

		//author and header info
		{
			name: "authorName",
			message: "Who is the creator of this style?",
			default: "Sean Goresht"
		},
		{
			name: "authorEmail",
			message: "What is your primary e-mail address",
			default: "seangores@gmail.com"
		},

		{
			name: "authorURL",
			message: "What is the site where the author can be reached?",
			default: "http://seangoresht.com"
		},

		{
			name: "authorGitHub",
			default: "srsgores",
			message: "What is your gitHub account?"
		},

		{
			name: "authorTwitter",
			default: "SGoresht",
			message: "What is your Twitter account?"
		},

		{
			name: "authorCompanyName",
			default: "Company Name",
			message: "(optional) What is your company name?"
		}
	];

	this.prompt(prompts, function (props) {
		//date helper
		var today = new Date();

		var prefix = today.getUTCMonth() + 1;
		prefix += "-" + today.getDate();
		prefix += "-" + today.getFullYear();

		this.currentDate = prefix;
		this.name = props.name;
		this.safePluginName = this._.slugify(this.name);
		this.description = props.description;
		this.authorName = props.authorName;
		this.authorEmail = props.authorEmail;
		this.authorURL = props.authorURL;
		this.authorGitHub = props.authorGitHub;
		this.authorTwitter = props.authorTwitter;
		this.authorCompanyName = props.authorCompanyName;
		cb();
	}.bind(this));
};

wordpressPluginGenerator.prototype.emptyIndexFiles = function emptyIndexFiles() {
	this.copy("index.php", "css/index.php");
	this.copy("index.php", "js/index.php");
	this.copy("index.php", "sass/index.php");
	this.copy("index.php", "lang/index.php");
	this.copy("index.php", "views/index.php");
	this.copy("index.php", "assets/index.php");
};

wordpressPluginGenerator.prototype.app = function app() {
	//javascript
	this.template("js/_admin.js", "js/" + this.safePluginName + "-admin.js");
	this.template("js/_public.js", "js/" + this.safePluginName + ".js");
	//lang
	this.template("lang/_plugin-name.pot", "lang/" + this.safePluginName + ".pot");
	//views
	this.template("views/_admin.php", "views/admin.php");
	this.template("views/_public.php", "views/public.php");

	//main components
	this.template("_plugin-name.php", this.safePluginName + ".php");
	this.template("_class-plugin-name.php", this._.camelize(this.name) + ".php");

	//uninstall
	this.template("_uninstall.php", "uninstall.php");

	//readme
	this.template("_README.txt", "README.txt");
};

wordpressPluginGenerator.prototype.projectfiles = function projectfiles() {
	this.template("_package.json", "package.json");
	this.template("_bower.json", "bower.json");
	this.copy("editorconfig", ".editorconfig");
	this.copy("jshintrc", ".jshintrc");
};
