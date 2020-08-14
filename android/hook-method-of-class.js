Java.perform(function() {
  //enter class name here: example android.security.keystore.KeyGenParameterSpec$Builder
	//class inside a class is defined using CLASS_NAME$SUB_CLASS_NAME
	var class_name = Java.use("android.security.keystore.KeyGenParameterSpec$Builder");
  //replace FUNC_NAME_HERE with method name you want to hook and remove arg1 or add more if the function has arguments
	class_name.FUNC_NAME_HERE.implementation = function (arg1) {
		console.log("[*] CLASS_NAME:FUNC_NAME was called");
		return this.FUNC_NAME_HERE(arg1)
	}
});
