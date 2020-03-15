//Credit: PassionFruit (https://github.com/chaitin/passionfruit/blob/master/agent/app/classdump.js)
//Twitter: https://twitter.com/xploresec
//GitHub: https://github.com/interference-security
function run_show_app_classes_methods_only()
{
    console.log("[*] Started: Find App's Classes")
    var free = new NativeFunction(Module.findExportByName(null, 'free'), 'void', ['pointer'])
    var copyClassNamesForImage = new NativeFunction(Module.findExportByName(null, 'objc_copyClassNamesForImage'), 'pointer', ['pointer', 'pointer'])
    var p = Memory.alloc(Process.pointerSize)
    Memory.writeUInt(p, 0)
    var path = ObjC.classes.NSBundle.mainBundle().executablePath().UTF8String()
    var pPath = Memory.allocUtf8String(path)
    var pClasses = copyClassNamesForImage(pPath, p)
    var count = Memory.readUInt(p)
    var classesArray = new Array(count)
    for (var i = 0; i < count; i++)
    {
        var pClassName = Memory.readPointer(pClasses.add(i * Process.pointerSize))
        classesArray[i] = Memory.readUtf8String(pClassName)
		var className = classesArray[i]
		console.log("[+] Class: " + className);
		//var methods = ObjC.classes[className].$methods;
		var methods = ObjC.classes[className].$ownMethods;
		for (var i = 0; i < methods.length; i++)
		{
			console.log("\t[-] Method: " + methods[i]);
			try
			{
				console.log("\t\t[-] Arguments Type: " + ObjC.classes[className][methods[i]].argumentTypes);
				console.log("\t\t[-] Return Type: " + ObjC.classes[className][methods[i]].returnType);
			}
			catch(err) {}
		}
    }
    free(pClasses)
    console.log("\n[*] App Classes found: " + count);
    console.log("[*] Completed: Find App's Classes")
}

function show_app_classes_methods_only()
{
    setImmediate(run_show_app_classes_methods_only)
}

show_app_classes_methods_only()
