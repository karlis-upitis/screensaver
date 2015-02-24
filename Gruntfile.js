module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true,
                port: 9000,
                nospawn: true
            },
            watch_sass: {
                files: ['scss/**/*.scss'],
                tasks: ['sass:dev', 'autoprefixer:dev'],
                options:{
                    livereload: {
                        livereload: true,
                        port: 3030
                    }
                }
            },
            configFiles: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            }
        },


        /*COMPILE SASS*/
        sass: {
            options: {
                includePaths: [
                  require('node-bourbon').includePaths,
                  'node_modules/node-neat/assets/stylesheets',
                  '../views/blocks'
                ],
                sourceComments: 'normal'
            },
            dev: {
                files: {
                    'scss/style-unprefixed.css': 'scss/style.scss'
                }
            }
        },


        /*AUTOPREFIX CSS*/
        autoprefixer: {
            dev: {
                src: 'scss/style-unprefixed.css',
                dest: 'output/style.css'
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['sass:dev', 'watch']);

};