# Grunt MAMP

> Grunt MAMP allows you to configure, start and stop your MAMP server from the terminal.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mamp --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mamp');
```

## The "mamp" task

### The Goods
Configure your **path** and **user** and you are good to go.  Your Gruntfile.js should look like this:

```js
"use strict";
 
module.exports = function(grunt){
 
  /* !!!! CONFIGURE !!!!
  ====================================================  */
  var user = 'yourUsername'
  var path = '/relative/or/absolute/path';
  var port = 8888;
 
  /* Init
  ====================================================  */
  grunt.initConfig({
 
    mamp : {
      
      configserver : {
        options : {
          user : user,
          path : path,
          pathRelative : true,
          port : port
        }
      },
 
      startserver : {
        options : {
          user : user,
          path : path,
          pathRelative : true,
          port : port
        }
      },
      
      stopserver : {
      }
    }
 
  });
 
  grunt.loadNpmTasks('grunt-mamp');
 
  // Register tasks 
  grunt.registerTask("start", ["mamp:startserver"]);
  grunt.registerTask("stop", ["mamp:stopserver"]);
  grunt.registerTask("config", ["mamp:configserver"]);
 
};
```

### Getting Started (and Stopped!)
Once you have your Gruntfile.js file configged, you can run the following commands to config, start and stop MAMP.
```
grunt config
grunt start
grunt stop
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
