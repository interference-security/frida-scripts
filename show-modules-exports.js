//Script to show modules and its exports. Works on both Android and iOS
for(var i=0 ; i<Process.enumerateModules().length ; i++)
{
	var module_name = Process.enumerateModules()[i].name;
	console.log("[*] " + module_name);
	for(var j=0 ; j<Module.enumerateExports(module_name).length ; j++)
	{
		var module_export_name = Module.enumerateExports(module_name)[j].name;
		console.log("\t[-] " + module_export_name);
	}
}
