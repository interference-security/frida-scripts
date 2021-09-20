//Twitter: https://twitter.com/xploresec
//GitHub: https://github.com/interference-security
//Script to show modules and its exports. Works on both Android and iOS
function show_modules_exports()
{
	var module_name_list = Process.enumerateModules();
	for(var i=0 ; i<Process.enumerateModules().length ; i++)
	{
		var module_name = module_name_list[i].name;
		var module_export_list = Module.enumerateExports(module_name);
		console.log("[*] " + module_name);
		for(var j=0 ; j<module_export_list.length ; j++)
		{
			var module_export_name = module_export_list[j].name;
			console.log("\t[-] " + module_export_name);
		}
	}
}
setImmediate(show_modules_exports)
