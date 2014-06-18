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
    browserSync: {
        dev: {
            bsFiles: {
                src: [
                    'stylesheets/*.css',
                    '**/*.html',
                ],
                options: {
                    watchTask: true
                }
            }
        }
    },
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/'
            }]
        }
    },
    concurrent: {
        dev: ['imagemin', 'browserSync', 'watch'],
        options: {
            logConcurrentOutput: true
        }
    }
});

// Load the Grunt plugins.
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-concurrent');
// Register the default tasks.
grunt.registerTask('default', ['concurrent:dev']);
grunt.registerTask('bs', ['browserSync']);

};
