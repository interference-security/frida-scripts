#!/bin/bash
import frida
import sys


def on_message(message, data):
    try:
        if message:
            print("[*] Received data: {0}".format(message["payload"]))
    except Exception as e:
        print(message)
        print(e)


def run_frida_script():
    frida_script_code = """

    // Get a reference to the openURL selector
    var openURL = ObjC.classes.UIApplication["- openURL:"];

    // Intercept the method
    Interceptor.attach(openURL.implementation, {
      onEnter: function(args) {
        // As this is an ObjectiveC method, the arguments are as follows:
        // 0. 'self'
        // 1. The selector (openURL:)
        // 2. The first argument to the openURL selector
        var myNSURL = new ObjC.Object(args[2]);
        // Convert it to a JS string
        var myJSURL = myNSURL.absoluteString().toString();
        // Log it
        console.log("Launching URL: " + myJSURL);
        send(myJSURL);
      }
    });

    """
    print "[*] Executing following code:\n" + frida_script_code
    return frida_script_code

if __name__ == '__main__':
    if(len(sys.argv)<3):
        print "Usage:" + sys.argv[0] + "<process_name> <local|usb>"
        sys.exit(1)
    try:
        session = None
        if(sys.argv[2]=="local"):
            #For local connection
            session = frida.attach(sys.argv[1])
        elif(sys.argv[2]=="usb"):
            #For USB connection
            session = frida.get_usb_device().attach(sys.argv[1])
        else:
            #Invalid connection choice
            print "Usage:" + sys.argv[0] + "<process_name> <local|usb>"
            sys.exit(1)
        script = session.create_script(run_frida_script())
        script.on('message', on_message)
        script.load()
        sys.stdin.read()
    except KeyboardInterrupt:
        sys.exit(0)
