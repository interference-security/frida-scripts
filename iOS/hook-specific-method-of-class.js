//Source: http://www.mopsled.com/2015/log-ios-method-arguments-with-frida/
//Twitter: https://twitter.com/xploresec
//GitHub: https://github.com/interference-security
if (ObjC.available)
{
    try
    {
        //Your class name here
        var className = "YOUR_CLASS_NAME_HERE";
        //Your function name here
        var funcName = "YOUR_FUNC_NAME_HERE";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
        Interceptor.attach(hook.implementation, {
          onEnter: function(args) {
            // args[0] is self
            // args[1] is selector (SEL "sendMessageWithText:")
            // args[2] holds the first function argument, an NSString
            console.log("[*] Detected call to: " + className + " -> " + funcName);
            //For viewing and manipulating arguments
            //console.log("\t[-] Value1: "+ObjC.Object(args[2]));
            //console.log("\t[-] Value2: "+(ObjC.Object(args[2])).toString());
            //console.log(args[2]);
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
