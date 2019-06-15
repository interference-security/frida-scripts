console.log("[*] Started: Find Classes")
if (ObjC.available)
{
    count = 0
    for (var className in ObjC.classes)
    {
        if (ObjC.classes.hasOwnProperty(className))
        {
            console.log(className);
            count = count + 1
        }
    }
    console.log("Classes found: " + count);
}
else
{
    console.log("Objective-C Runtime is not available!");
}
