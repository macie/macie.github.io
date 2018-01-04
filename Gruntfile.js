/* jshint node: true */
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // grunt-contrib-connect
        connect: {
            server: {
                options: {
                    port: 4000,
                    base: '_site/'
                }
            }
        },

        // grunt-contrib-watch
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: [
                    'assets/css/**/*.css',
                    '!assets/css/**/*.min.css'
                ],
                tasks: ['exec:jekyll_build']
            },
            html: {
                files: [
                    '_config.yml',
                    '_includes/**/*',
                    '_layouts/**/*',
                    '_plugins/**/*',
                    '_sass/*',
                    '*.html'
                ],
                tasks: ['exec:jekyll_build']
            }
        },

        // grunt-exec
        exec: {
            install_gems: {
                command: 'bundle install --path _vendor/bundle'
            },
            jekyll_build: {
                command: 'bundle exec jekyll build'
            },
            jekyll_doctor: {
                command: 'bundle exec jekyll doctor'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');

    // default
    grunt.registerTask('default', [
        'exec:jekyll_build'
    ]);

    // prepare
    grunt.registerTask('prepare', [
        'exec:install_gems'
    ]);

    // server
    grunt.registerTask('serve', [
        'default',
        'connect:server',
        'watch'
    ]);

    // tests
    grunt.registerTask('test', [
        'exec:jekyll_doctor'
    ]);

};
