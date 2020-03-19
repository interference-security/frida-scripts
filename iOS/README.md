# Frida scripts for iOS app testing

|Script Name| Script Description|
|:---|:---|
|dump-ios-url-scheme.js|Dump iOS url scheme when "openURL" is called|
|dump-ui.js|Dump the current on-screen User Interface structure|
|find-all-classes-methods.js|Dump all methods inside all classes|
|find-all-classes.js|Dump all classes used by the app|
|find-app-classes-methods.js|Dump all methods inside classes owned by the app only|
|find-app-classes.js|Dump classes owned by the app only|
|find-specific-method.js|Find a specific method in all classes|
|frida_python_script.py|Python script to run Frida scripts|
|frida_without_jailbreak_ipa.png|Screenshot from Reddit for using Frida without jailbreak|
|hook-all-methods-of-all-classes-app-only.js|Hook all the methods of all the classes owned by the app|
|hook-all-methods-of-specific-class.js|Hook all the methods of a particular class|
|hook-specific-method-of-class.js|Hook a particular method of a specific class|
|intercept-nslog.js|Intercept calls to Apple's NSLog logging function|
|ios-app-static-analysis.js|iOS app static analysis|
|pasteboard-monitoring.js|Monitor usage of pasteboard. Useful to show lack of secure attribute on sensitive fields allowing data copying.|
|read-nsuserdefaults.js|Show contents of NSUserDefaults|
|read-plist-file.js|Show contents of a Plist file|
|show-all-methods-of-specific-class.js|Dump all methods of a particular class|
|show-argument-type-count-and-return-value-type.js|Show argument type & count and type of return value for a function in a class|
|show-instance-variables-for-specific-class.js|Show all instance variables of a particular class|
|show-modify-function-arguments.js|Show and modify arguments of a function inside a class|
|show-modify-method-return-value.js|Show and modify return value of a particular method inside a class|
|show_binarycookies.js|Show contents of Cookies.binarycookies file|

```Note: Terminologies used for description might be off.```

## Executing Frida Scripts

If you try to run the scripts as a file from command line (```frida -U -p 1234 -l test_script.js```) then it will get terminated if execution time exceeds 28 seconds.

I recommend attaching to the target app's process and then pasting the Frida script code you want to execute.

Some scripts are defined as functions. You can directly use the code and call the functions by supplying correct arguments to the function call.

You can also utilize the Python script for executing the Frida script code.
