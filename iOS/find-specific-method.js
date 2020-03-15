//Twitter: https://twitter.com/xploresec
//GitHub: https://github.com/interference-security
function run_find_specific_method_in_all_classes(func_name)
{
	console.log("[*] Started: Find Specific Method in All Classes");
	for (var className in ObjC.classes)
	{
		if (ObjC.classes.hasOwnProperty(className))
		{
			//var methods = ObjC.classes[className].$methods;
			var methods = ObjC.classes[className].$ownMethods;
			for (var i = 0; i < methods.length; i++)
			{
				if(methods[i].includes(func_name))
				{
					console.log("[+] Class: " + className);
					console.log("\t[-] Method: "+methods[i]);
					console.log("\t\t[-] Arguments Type: " + ObjC.classes[className][methods[i]].argumentTypes);
					console.log("\t\t[-] Return Type: " + ObjC.classes[className][methods[i]].returnType);
				}
			}
		}
	}
	console.log("[*] Completed: Find Specific Method in All Classes");
}

function find_specific_method_in_all_classes(func_name)
{
	setImmediate(run_find_specific_method_in_all_classes,[func_name])
}

//Your function name goes here
find_specific_method_in_all_classes("function_name_here")
