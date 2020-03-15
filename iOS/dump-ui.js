//Credit: http://blog.itselectlab.com/?p=10485
//Twitter: https://twitter.com/xploresec
//GitHub: https://github.com/interference-security
console.warn("[*] Started: Dumping UI")
if (ObjC.available)
{
    var current_window = ObjC.classes.UIWindow.keyWindow()
    console.log(current_window.recursiveDescription().toString());
}
else
{
    console.log("Objective-C Runtime is not available!");
}
console.warn("[*] Completed: Dumping UI")
