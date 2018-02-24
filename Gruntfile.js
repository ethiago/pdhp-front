module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: {
        dist: {
            src: ["dist"],
            force: true
        }
    },
    uglify: {
      options: {
        banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */\n"
      },
      app: {
        src: ["app/**/*.js", "!app/**/*_test.js"] ,
        dest: "dist/js/app.min.js",
      },
    },
    concat: {
        options: {
            separator: ";",
        },
        jsvendor: {
            dest: "dist/js/vendor.min.js",
            src: [
                "node_modules/angular-route/angular-route.min.js",
                "node_modules/angular-resource/angular-resource.min.js",
                "node_modules/angular-aria/angular-aria.min.js",
                "node_modules/angular-messages/angular-messages.min.js",
                "node_modules/angular-animate/angular-animate.min.js",
                "node_modules/angular-material/angular-material.min.js"
            ],

        },
    },
    cssmin: {
        options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1,
            flatten: true,
            filter: "isFile",
        },
        target: {
            files: {
                "dist/css/app.min.css": ["app/**/*.css"],
                "dist/css/vendor.min.css": [
                    "node_modules/html5-boilerplate/dist/css/normalize.css",
                    "node_modules/html5-boilerplate/dist/css/main.css",
                ],
            }
        }
    },
    copy: {
      modernizrjs: {
          src: ["node_modules/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js"],
          dest: "dist/js/modernizr.min.js",
      },
      index: {
        expand: true,
        src: "app/index*.html",
        dest: "dist/",
        flatten: true,
        filter: "isFile",
      },
      views:{
        expand: true,
        src: ["app/**/*.html", "!app/index*.html"],
        dest: "dist/views/",
        flatten: true,
        filter: "isFile",
      },
      angular:{
        expand: true,
        src: "node_modules/angular/angular.min.js",
        dest: "dist/js/",
        flatten: true,
        filter: "isFile",
      },
      material: {
        expand: true,
        src: "node_modules/angular-material/angular-material.min.css",
        dest: "dist/css/",
        flatten: true,
        filter: "isFile"
      }
    },
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-concat");

  // Default task(s).
  grunt.registerTask("default", ["clean", "uglify", "cssmin", "copy", "concat"]);

};