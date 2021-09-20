//Twitter: https://twitter.com/xploresec
//GitHub: https://github.com/interference-security
function show_modules()
{
	var count = 0;
	var module_name_list = Process.enumerateModules();
	for(var i=0 ; i<Process.enumerateModules().length ; i++)
	{
		var module_name = module_name_list[i].name;
		console.log("[*] " + module_name);
		count = count + 1;
	}
	console.log("\nFound Modules: " + count + "\n");
}
setImmediate(show_modules)
