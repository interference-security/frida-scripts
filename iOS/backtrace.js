//Credit: github.com/iddoeldor/frida-snippets
var backtrace = Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join("\n\t");
console.warn("\n[-] ======== Backtrace Start  ========");
console.log(backtrace);
console.warn("\n[-] ======== Backtrace End  ========");
