if (ObjC.available)
{
    try
    {
        //Your class name here
        var className = "YOUR_CLASS_NAME_HERE";
        //Your function name here
        var funcName = "YOUR_EXACT_FUNC_NAME_HERE";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
        Interceptor.attach(hook.implementation, {
          onLeave: function(retval) {
            console.log("[*] Class Name: " + className);
            console.log("[*] Method Name: " + funcName);
            console.log("\t[-] Type of return value: " + typeof retval);
            //console.log(retval.toString());
            console.log("\t[-] Return Value: " + retval);
            //For modifying the return value
            //newretval = ptr("0x0") //your new return value here
            //retval.replace(newretval)
            //console.log("\t[-] New Return Value: " + newretval)
          }
        });
    }
    catch(err)
    {
        console.log("[!] Exception2: " + err.message);
    }
}
else
{
    console.log("Objective-C Runtime is not available!");
}
