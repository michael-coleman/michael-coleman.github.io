
module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //concat: {
        //    options: {
        //        // define a string to put between each file in the concatenated output
        //        separator: ';'
        //    },
        //    dist: {
        //        // The files to concatenate
        //        src: ['src/**/*.js'],
        //        //
        //    }
        //}

        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    // compile: destination << source
                    // i.e. frontend.css FROM frontend.less
                    "./deploy/frontend.css" :"./custom/stylesheets/frontend.less"
                }
            }
        }

    });

    // Load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-less');

};