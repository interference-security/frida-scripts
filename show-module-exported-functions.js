//Update module name in below line
var module_export_list = Module.enumerateExports("libsqlite3.dylib")
for(var j=0 ; j<module_export_list.length ; j++)
{
	if(module_export_list[j].type == "function")
		console.log(module_export_list[j].name)
}
