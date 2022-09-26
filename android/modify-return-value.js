Java.perform(function() {
  //enter class name here: example android.security.keystore.KeyGenParameterSpec$Builder
	//class inside a class is defined using CLASS_NAME$SUB_CLASS_NAME
	var class_name = Java.use("CLASS_NAME_HERE");
  //replace FUNC_NAME_HERE with method name you want to hook and remove arg1 or add more if the function has arguments
	class_name["FUNC_NAME_HERE"].overload('ARG1_SIGNATURE_HERE','ARG2_SIGNATURE_HERE').implementation = function (arg1, arg2) {
		console.log("\n[*] CLASS_NAME_HERE:FUNC_NAME_HERE() was called");
		//console.log("\t[-] Tampering return value to FALSE");
		return this.FUNC_NAME_HERE(arg1, arg2);
	}
});
