module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          config: 'config.rb'
        }
      }
    },

    connect: {
      all: {
        port: 8000,
        protocol: 'http',
        hostname: 'localhost',
        base: '.',
        directory: null,
        keepalive: false,
        debug: false,
        livereload: true,
        open: true
      }
    },

    watch: {

      sass: {
        files: ['sass/*.scss'],
        tasks: ['compass']
      },
      css: {
        files: ['*.css'],
        options: { livereload: true }
      },
      html: {
        files: ['*.html'],
        options: { livereload: true }
      },
      livereload: {
        files: ['css/*.css'],
        options: { livereload: true }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ['connect', "watch"]);
};