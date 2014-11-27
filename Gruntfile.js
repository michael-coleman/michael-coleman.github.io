//Grunt is just JavaScript running in node, after all...
module.exports = function(grunt) {

    // All upfront config goes in a massive nested object.
    // within this config You can set key-value pairs.
    grunt.initConfig({

        // within this object you can reference any grunt config property you want.
        // Ex: '<%= concat.options.separator %>' instead of ';'

        // specify the dist folder - other subtasks will reference this
        // distFolder: '',

        // You can also set the value of a key as parsed JSON.
        // Allows us to reference properties we declared in package.json.
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            js: {
                // The files to concatenate:
                // Notice the wildcard, which is automatically expanded.
                src: ['./bower_components/jquery/dist/jquery.js',
                        './bower_components/bootstrap/dist/js/bootstrap.js',
                        './bower_components/angular/angular.js',
                        './bower_components/angular-route/angular-route.js',
                        './custom/javascript/app.js'
                ],

                 // The destination file:
                 // You can use angle-bracketed ERB-like templating,
                 // which allows you to reference other properties.
                 // This is equivalent to 'whatever_your_distFolder_is'/main.js'.
                 // dest: '<%= distFolder %>/main.js'
                dest: 'deploy/app.js'
            }
        },

        less: {

            development: {
                    // Specify some options, usually specific to each plugin.
                    options: {
                        compress: true,
                        sourceMap: true,
                        sourceMapFilename: "frontend.css.map"
                        //sourceMapBasepath: "assets/style/"
                    },
                    files: {
                        // compile: destination << source
                        // i.e. frontend.css FROM frontend.less
                        "./deploy/frontend.css" :"./custom/stylesheets/frontend.less"
                    }
            }
        },

        markdown: {
            all: {
                files: [
                    {
                        expand: true,
                        src: 'docs/*.md',
                        dest: 'docs-html/',
                        ext: '.html'
                    }
                ]
            },
            options: {
                template: 'docs/template.html'
            }
        },

        /*----------------------------------------------------------------------
        |           GRUNT WATCH CONFIG
        |-----------------------------------------------------------------------
        |
        |  When registering watch task can specify multiple task and also sub tasks
        |  e.g. ['concat:js_backend','uglify:backend']
        |
        */
        watch: {
            less: {
                files: ['./custom/stylesheets/**/*.less',
                    'index.html',
                ],
                tasks: ['less']
            },
            js: {
                files: [
                    // watched files
                    './custom/javascript/**/*.js'
                ],
                tasks: ['concat']
            },
            markdown: {
                files: ['docs/**/*.md'],
                tasks: ['markdown']
            }

        }

    }); // The end of grunt.initConfig

    // Load grunt plugins
    // This will do a lookup similar to node's require() function.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-markdown');

    // Register our own custom task alias.
    grunt.registerTask('build', ['concat','less']);
    // The task "default" is the one that will be executed when we run only grunt in the terminal.
    grunt.registerTask('default', ['watch']);

};