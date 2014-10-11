module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: [ 'js/*.js', '!js/min.js']
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    cssmin: {
      combine: {
        files: {
          'css/min.css': [ 'css/app.css']
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'js/min.js': ['bower_components/jquery/dist/jquery.min.js', 'js/maquette.js']
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

      js: {
        files: ['js/*.js','!js/min.js'],
        tasks: ['jshint','uglify'],
        options: {
          spawn: false,
        }
      },

      css: {
        files: ['css/*.css','!css/min.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false,
        }
      }
      

    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['jshint','uglify','cssmin','build','watch']);
}