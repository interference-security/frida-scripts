function show_functions_of_specifc_class(className_arg)
{
    console.log("[*] Started: Find All Methods of a Specific Class");
    var className = className_arg;
    count = 0;
    var methods = eval('ObjC.classes.' + className + '.$methods');
    for (var i = 0; i < methods.length; i++)
    {
        console.log("[-] "+methods[i]);
        count = count + 1
    }
    console.log("[*] Completed: Find All Methods of a Specific Class");
}
//Your class name here
show_functions_of_specifc_class("YOUR_CLASS_NAME_HERE");
