module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        css: {
            files: [
                '**/*.sass',
                '**/*.scss'
            ],
            tasks: ['compass']
        },
    },
    compass: {
        dist: {
            options: {
                sassDir: 'sass',
                cssDir: 'stylesheets',
                outputStyle: 'compressed'
            }
        }
    },
    browser_sync: {
        dev: {
            bsFiles: {
                src: [
                    'stylesheets/*.css',
                    '**/*.html',
                ],
                options: {
                    watchTask: false
                }
            }
        }
    }
});

// Load the Grunt plugins.
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-jst');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync');
// Register the default tasks.
grunt.registerTask('default', ['watch']);
grunt.registerTask('bs', ['browser_sync']);

};
