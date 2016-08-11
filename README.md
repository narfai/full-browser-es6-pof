# Proof of concept :  Browser ECMAScript 6 to 5 compilation and dynamic evaluation.

This pof use requirejs and babel for compile and evaluate ECMAScript 6 code.
It can be usefull if you want to create client only applications, or test modular UI without any server.
( So you juste have to open index.html with your favorite browser )

However, you should NEVER use this for production environment cause it has several cons :
1. This is a pretty heavy computation : your browser do the job of server without any caching
2. You have to prefix the path of your imported resources with a "babel!"
3. Error handling is NOT convenient at all

May we can use r.js for building lightweight / reusable es5 code without modify application code (by using write method of require plugins).
