#Frida scripts for iOS app testing

|Script Name| Script Description|
|:---|:---|
|dump-ios-url-scheme.js|Dump iOS url scheme when "openURL" is called|
|find-classes.js|Dump all classes used by the app|
|find-methods.js|Dump all methods inside all classes|
|find-specific-method.js|Find a specific method in all classes|
|frida_python_script.py|Python script to run Frida scripts|
|frida_without_jailbreak_ipa.png|Screenshot from Reddit for using Frida without jailbreak|
|hook-all-methods-of-specific-class.js|Hook all the methods of a particular class|
|hook-specific-method-of-class.js|Hook a particular method of a specific class|
|show-all-methods-of-specific-class.js|Dump all methods of a particular class|
|show-method-return-value.js|Show return value of a particular method inside a class|

```Note: Terminologies used for description might be off.```

##Executing Frida Scripts

If you try to run the scripts as a file from command line (```frida -U -p 1234 -l test_script.js```) then it will get terminated if execution time exceeds 28 seconds.

I recommend attaching to the target app's process and then pasting the Frida script code you want to execute.

You can also utilize the Python script for executing the Frida script code.
