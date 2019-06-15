console.log("[*] Started: Find All Methods of a Specific Class");
if (ObjC.available)
{
    try
    {
        //Your class name here
        var className = "YOUR_CLASS_NAME_HERE";
        count = 0;
        var methods = eval('ObjC.classes.' + className + '.$methods');
        for (var i = 0; i < methods.length; i++)
        {
            try
            {
                console.log("[-] "+methods[i]);
                count = count + 1
            }
            catch(err)
            {
                console.log("[!] Exception1: " + err.message);
            }
        }
    }
    catch(err)
    {
        console.log("[!] Exception2: " + err.message);
    }
    console.log("\n[*] Methods found: " + count);
}
else
{
    console.log("Objective-C Runtime is not available!");
}
console.log("[*] Completed: Find All Methods of a Specific Class");
