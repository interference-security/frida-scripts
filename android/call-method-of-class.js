//Source: https://11x256.github.io/Frida-hooking-android-part-2/

//Update fully qualified activity class name here
Java.choose("com.example.app.activity_class_name" , {
  onMatch : function(instance){ //This function will be called for every instance found by frida
    console.log("Found instance: "+instance);
    console.log("Result of method call: " + instance.method_name_to_call()); //Update method name here to call
  },
  onComplete:function(){}
});
