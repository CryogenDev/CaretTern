#TODO list

- Add context menus for ace, contextmenu.js
- Add option and binding (with debounce) for showing type on cursor activity (make sure not in call before sending request to tern)
- find a way to update jshint options for entire project, the state.maxerrors default is 100, and its way too low
- Add find refs
- add caching of auto show type so it doesnt have to keep calling tern for type info (just like arg hints)
-   PROBLEM: requirejs plugin not working because im setting the requirejs options in the editor.js after tern is initialized, and it appaers that the settings are not being pushed to the worker. ALSO: commented out setting the get file option in editor.js as it breaks auto complete because the current file doesnt seem to get added... needs lots of work


##Things to Remember

1. editor.ternServer.options.plugins.requirejs ={"baseURL": "./", "paths": {}}
2./* jshint laxcomma:false, unused:true, laxbreak:false, maxerr:10000 */