#TODO list

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