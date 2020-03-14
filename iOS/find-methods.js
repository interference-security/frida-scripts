function run_show_classes_methods_of_app()
{
    console.log("[*] Started: Find Methods of All Classes")
	for (var className in ObjC.classes)
	{
		if (ObjC.classes.hasOwnProperty(className))
		{
			console.log("[+] Class: " + className);
			//var methods = ObjC.classes[className].$methods;
			var methods = ObjC.classes[className].$ownMethods;
			for (var i = 0; i < methods.length; i++)
			{
				console.log("\t[-] Method: "+methods[i]);
			}
		}
	}
	console.log("[*] Completed: Find Methods of All Classes")
}

function show_classes_methods_of_app()
{
	setImmediate(run_show_classes_methods_of_app)
}

show_classes_methods_of_app()
