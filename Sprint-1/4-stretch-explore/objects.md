## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

<!---
After typing console.log i got the following output: ƒ log() { [native code] }

--->
<!---
After typing enter i got the following : console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

--->
<!---
Console stores the Console Object
console.log syntax means from the console object call the log() method
console.assert means from the console object call the assert() method
the `.` allows us to call specific methods from the console object
particularly in this example `console.log` and `console.assert`
--->
