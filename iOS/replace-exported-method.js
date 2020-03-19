//Twitter: https://twitter.com/xploresec
//GitHub: https://github.com/interference-security

//replace a function. In this example we are replacing ptrace
var ptracePtr = Module.findExportByName(null, "ptrace"); //null can be replaced with libsystem_kernel.dylib which exports ptrace
Interceptor.replace(ptracePtr, new NativeCallback(function () {
	console.log("[*] Ptrace called and replaced")
}, "int", []));
