Java.perform(function() {
	var class_name = Java.use("android.util.Log");
	//isLoggable
	class_name.isLoggable.overload("java.lang.String", "int").implementation = function (arg1, arg2) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " isLoggable was called:")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}
	//DEBUG
	class_name.d.overload("java.lang.String", "java.lang.String").implementation = function (arg1, arg2) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " DEBUG (d):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}
	class_name.d.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2, arg3) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " DEBUG (d):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		console.log("\targ3 : " + arg3.toString())
		return true;
	}
	//ERROR
	class_name.e.overload("java.lang.String", "java.lang.String").implementation = function (arg1, arg2) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " ERROR (e):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}
	class_name.e.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2, arg3) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " ERROR (e):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		console.log("\targ3 : " + arg3.toString())
		return true;
	}
	//INFO
	class_name.i.overload("java.lang.String", "java.lang.String").implementation = function (arg1, arg2) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " INFO (i):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}
	class_name.i.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2, arg3) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " INFO (i):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		console.log("\targ3 : " + arg3.toString())
		return true;
	}
	//VERBOSE
	class_name.v.overload("java.lang.String", "java.lang.String").implementation = function (arg1, arg2) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " VERBOSE (v):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}
	class_name.v.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2, arg3) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " VERBOSE (v):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		console.log("\targ3 : " + arg3.toString())
		return true;
	}
	//WARNING
	class_name.w.overload("java.lang.String", "java.lang.String").implementation = function (arg1, arg2) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " WARNING (w):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}
	class_name.w.overload("java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " WARNING (w):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}
	class_name.w.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2, arg3) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " WARNING (w):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		console.log("\targ3 : " + arg3.toString())
		return true;
	}
	//What a Terrible Failure (WTF)
	class_name.wtf.overload("java.lang.String", "java.lang.String").implementation = function (arg1, arg2) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " WTF (wtf):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}
	class_name.wtf.overload("java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " WTF (wtf):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}
	class_name.wtf.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2, arg3) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " WTF (wtf):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		console.log("\targ3 : " + arg3.toString())
		return true;
	}
});
