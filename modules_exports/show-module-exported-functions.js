//Twitter: https://twitter.com/xploresec
//GitHub: https://github.com/interference-security
function show_specific_module_exported_functions(modulesName)
{
	//var modulesName = "libsqlite3.dylib";
	var module_export_list = Module.enumerateExports(modulesName)
	for(var j=0 ; j<module_export_list.length ; j++)
	{
		if(module_export_list[j].type == "function")
			console.log(module_export_list[j].name)
	}
}

//Update module name in below line
show_specific_module_exported_functions("MODULE_NAME_HERE")
