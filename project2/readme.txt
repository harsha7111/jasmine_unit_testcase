spies create test doubles and help us isolate dependencies for true unit testing.

test double is an object that can stand in for real object in a test similar to stunt double.

jasmine has test double function called spies.

A spy can stub any function and tracks calls to it and all arguments.

A spy only exists in the describe or it  block in which it is defined and will be removed after each spec.

matchers for spies:
  toHaveBeenCalled
  toHaveBeenCalledWith
  toHaveBeenCalledTimes

we cant use spyon on getters and setters