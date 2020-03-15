//Twitter: https://twitter.com/xploresec
//GitHub: https://github.com/interference-security
function read_plist_file(file_location)
{
	var dict = ObjC.classes.NSMutableDictionary
	console.log("[*] Read Plist File: " + file_location)
	console.log("[*] File Contents:")
	console.log(dict.alloc().initWithContentsOfFile_(file_location).toString())
}
read_plist_file("/path/to/file/filename.plist")//file location and path here
