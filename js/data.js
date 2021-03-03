const questions = [{
  question: "What is a closure?",
  answer: `
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).<br />
... In JavaScript, closures are created every time a function is created, at function creation time.<br />
To use a closure, define a function inside another function and expose it.
<br />
<br />
<b>Example:</b>
<pre>
<code class="javascript">
  function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
</code>
<pre>
`
}, {
  question: "What are their disadvantages?",
  answer: `
  <ol>
    <li>
      As long as the closures are active, the memory can’t be garbage collected.
Example : If we are using closure in ten places then unless all the ten processes complete it holds the memory which cause memory leak.
How to fix this?
If there come a point in your program where you are done using closure then you need to set closure to null.
    </li>
    <li>
      Creating a function inside a function leads to duplicity in memory and causes slowing down the application.
How to fix?
Use closures only when you need privacy otherwise use module pattern to create new objects with shared methods.
    </li>
  </ol>
`
},
{
  question: "How does the inheritance system in JavaScript work?",
  answer: `
  <pre>
    <code class="javascript">
    function Person({ first, last, age, gender, interests }) {
      this.name = {
        first,
        last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }

    // The methods are all defined on the constructor's prototype. For example:

    Person.prototype.getThisName = function() {
        alert("Hi! I'm " + this.name.first + '.');
      };
    };

    Person.getThoseName = function() {
      alert("Hi! I'm Patrick");
    };

    const person = new Person({
      first: "John",
      last: "Doe",
      age: 28,
      gender: "male",
      interests: "programming"
    });

    person.getThisName(); // Hi! I'm John.
    person.getThoseName(); // ERROR!

    Person.getThoseName(); // Hi! I'm Patrick.
    Person.getThisName(); // ERROR!
  </code>
`},
{
  question: "What is `this`?",
  answer: `
This is a built in directive that allows developer to call context of current object.
`
},
{
  question: "How can you change its value?",
  answer: `
<pre>
<code class="javascript">
const data = {
  name: "test",
  getName: function() {
    console.log(this.name);
  }
};

data.getName() // test

const _data = { name: "test2" }

// by bind new context
const newCtx = data.getName.bind(_data);
newCtx(); // test2

// by calling apply(), call
data.getName.call({ name: "test3" })
data.getName.apply({ name: "test4" })
</code>
</pre>
`}];