module.exports = function (grunt) {

    //require('load-grunt-tasks')(grunt); //�������е�����
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    var rewrite = require( "connect-modrewrite" );
    //require('time-grunt')(grunt); ���Ҫʹ�� time-grunt ���
    grunt.initConfig({
        connect: {
            options: {
                open:true,
                middleware: function ( connect, options, middlewares ) {
                    var rules = [
                        "!\\.html|\\.js|\\.css|\\.otf|\\.eot|\\.svg|\\.ttf|\\.woff|\\.jpg|\\.bmp|\\.gif|\\.png|\\.txt$ /index.html"
                    ];
                    middlewares.unshift( rewrite( rules ) );
                    return middlewares;
                }
            },
            server: {
                options: {
                    port: 5000,
                    base: "./"
                }
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: '<%=connect.options.livereload%>'  //����ǰ�������Ķ˿�  35729
                },

                files: [  //�����ļ��ĸı�ͻ�ʵʱˢ����ҳ
                    '*'

                ]

            }
        },
        uglify:{
            options: {
                banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//���banner
            },
            build: {
                src: 'app/<%=pkg.file %>.js',
                dest: 'dest/<%=pkg.file %>.min.js'
            }


        }

    });

    grunt.registerTask('default', [
        'connect:server',
        'watch',
        'uglify'
    ]);
};