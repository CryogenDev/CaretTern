SET USER REFS: /CaretTern/js for require

#Documentation
1. Commands: https://github.com/thomaswilburn/Caret/wiki/Commands
2. session:file-changed - added to switching.js, this command is fired when tab changes or when tab is reloaded because file changed externally. tells tern to update file


#LEFT OFF
- somethign is broken with showing arg hints randomly and it happens in lang tools...
1. make tern read .ternproj file instead of using preferences
2. big fix- total change of how things work with local docs (delay til small fixes done)
3. edit the project manager- make it load all javascript files into tern
4. edit tern - dont let it add a file 'current'
5. when tab changes, add the 'hide doc' before the tab change is fired
6. will likely want to change the switchToDoc and getfile options set for tern in editor.js
7. will need to make sure that restarting the server re-adds all the files in the project
8. not sure how to handle files with tern when multiple projects are open...


##Tern Issues
1. There are no methods to push settings to the worker, what ever settings are there when the thing is initalized is how it remains
2. Need to fix this so defs, plugs, etc.. can be changed as needed (by reading files in the project that direct tern on what to do)
3. NOTE: this is ghetto by design as Marijnh made the worker server super fast as an option for code mirror!



#TODO list

- clean up worker-tern- no need for the setting of defs after server starts, instead just restart server after changing defs
- Add context menus for ace, contextmenu.js
- Add option and binding (with debounce) for showing type on cursor activity (make sure not in call before sending request to tern)
- find a way to update jshint options for entire project, the state.maxerrors default is 100, and its way too low
- Add find refs
- add caching of auto show type so it doesnt have to keep calling tern for type info (just like arg hints)
-   PROBLEM: requirejs plugin not working because im setting the requirejs options in the editor.js after tern is initialized, and it appaers that the settings are not being pushed to the worker. ALSO: commented out setting the get file option in editor.js as it breaks auto complete because the current file doesnt seem to get added... needs lots of work
-  for auto show type, make it not do it unless its a funcion call (check for paren ater), will have to do something slightly complex like the function that finds out if its in a call
- tooltip stays open if currently open and tab switched... figure out a good generic way to handle this



##Things to Remember

1. editor.ternServer.options.plugins.requirejs ={"baseURL": "./", "paths": {}}
2./* jshint laxcomma:false, unused:true, laxbreak:false, maxerr:10000 */






#Scraps

1. using chrome context menus for the editor wont work as it doesnt seem possible to render the context menu on demand:

chrome.contextMenus.create({
    "title": "test title BLA",
    "contexts": ["editable"],
    "id": "contexttestid"
});

// The onClicked callback function.
function onClickHandler(info, tab) {
    log('info', info, 'tabl', tab);
    if (info.menuItemId == "radio1" || info.menuItemId == "radio2") {
        console.log("radio item " + info.menuItemId + " was clicked (previous checked state was " + info.wasChecked + ")");
    }
    else if (info.menuItemId == "checkbox1" || info.menuItemId == "checkbox2") {
        console.log(JSON.stringify(info));
        console.log("checkbox item " + info.menuItemId + " was clicked, state is now: " + info.checked + " (previous state was " + info.wasChecked + ")");

    }
    else {
        console.log("item " + info.menuItemId + " was clicked");
        console.log("info: " + JSON.stringify(info));
        console.log("tab: " + JSON.stringify(tab));
    }
}
chrome.contextMenus.onClicked.addListener(onClickHandler);


2. will likely want to use custom context menu using //editor.renderer.$cursorLayer.element.on("click"



#Native Context Menu

-http://www.howtogeek.com/107965/how-to-add-any-application-shortcut-to-windows-explorers-context-menu/
    -- use regedit

- launch chrome app with file from windows command line: https://developer.chrome.com/apps/first_app#open
