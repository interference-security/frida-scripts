//Twitter: https://twitter.com/xploresec
//GitHub: https://github.com/interference-security
function hook_specific_module_export(module_name, export_name)
{
	console.log("\n[+] Hooking:")
	console.log("\t[-] Module Name: " + module_name)
	console.log("\t[-] Export Name: " + export_name)
	Interceptor.attach(Module.findExportByName(module_name, export_name), {
		onEnter: function(args) {
			console.log("\n[*] [" + module_name + "] Entering export name: " + export_name);
		},
		onLeave: function(retval) {
			console.log("\n[*] [" + module_name + "] Leaving export name: " + export_name);
		}
	});
}
//hook_specific_module_export("MODULE_NAME_HERE", "EXPORT_NAME_HERE")
