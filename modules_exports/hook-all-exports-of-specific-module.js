//Twitter: https://twitter.com/xploresec
//GitHub: https://github.com/interference-security
function hook_specific_module_export(module_name, export_name)
{
	console.log("\t[-] Hooking Export: " + export_name)
	Interceptor.attach(Module.findExportByName(module_name, export_name), {
		onEnter: function(args) {
			console.log("\n[*] [" + module_name + "] Entering export name: " + export_name);
		},
		onLeave: function(retval) {
			console.log("\n[*] [" + module_name + "] Leaving export name: " + export_name);
		}
	});
}

function hook_exports_of_module(module_name)
{
	console.log("\n[+] Hooking Exports of Module:" + module_name)
	var module_export_list = Module.enumerateExports(module_name)
	for(var j=0 ; j<module_export_list.length; j++)
	{
		if(module_export_list[j].type == "function")
			hook_specific_module_export(module_name, module_export_list[j].name)
	}
}
//hook_exports_of_module("MODULE_NAME_HERE")
