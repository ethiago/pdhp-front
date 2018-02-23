module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
        dist: {
            src: ['dist'],
            force: true
        }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      app: {
        src: ['app/**/*.js', '!app/bower_components/**', '!app/**/*_test.js'] ,
        dest: 'dist/js/app.min.js',
      },
      vendor: {
          dest: 'dist/js/vendor.min.js',
          src: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
        ],
      }
    },
    cssmin: {
        options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1,
            flatten: true,
            filter: 'isFile',
        },
        target: {
            files: {
                'dist/css/app.min.css': ['app/**/*.css', '!app/bower_components/**'],
                'dist/css/vendor.min.css': [
                    'app/bower_components/html5-boilerplate/dist/css/normalize.css',
                    'app/bower_components/html5-boilerplate/dist/css/main.css',
                ],
            }
        }
    },
    copy: {
      modernizrjs: {
          src: ['app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js'],
          dest: 'dist/js/modernizr.min.js',
      },
      index: {
        expand: true,
        src: 'app/index*.html',
        dest: 'dist/',
        flatten: true,
        filter: 'isFile',
      },
      views:{
        expand: true,
        src: ['app/**/*.html', '!app/bower_components/**', '!app/index*.html'],
        dest: 'dist/views/',
        flatten: true,
        filter: 'isFile',
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'copy']);

};