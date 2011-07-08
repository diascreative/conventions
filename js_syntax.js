///////////////////////////////////////////////////////////////
//
// - Indentation of 4 spaces
// - single quotes ' prefered to " ( specifically useful when creating strings with HMTL )
//
// - Filenames should be all lowercase in order to avoid confusion on case-sensitive platforms.
// - Filenames should end in .js, and should contain no punctuation except for - or _ (prefer - to _).
//
///////////////////////////////////////////////////////////////


/////////////////////
//
// NAMESPACES
// Use namespaces for global code
// Prefix identifiers in the global scope with a unique pseudo namespace related to the project.
//
/////////////////////

    var project_name = {};

    project_name.finish = function() {
        /* ... */
    };


/////////////////////
//
// CURLY BRACES
// Always start your curly braces on the same line as whatever they're opening. For example:
//
///////

    if (something) {
        // ...
    } else {
        // ...
    }


/////////////////////
//
// FUNCTIONS
//
// There should be no space between the name of a function and the left parenthesis of its parameter list.
// There should be one space between the right parenthesis and the left curly brace that begins the statement body.
// The closing curly brace should be aligned with the line containing the beginning of the declaration of the function.
//
///////

    /**
     * Description of what the function does
     * @param {string} arg1 And what is it?
     * @return {string} Some return value.
     */
    function functionNamesLikeThis(arg1) {
    
        // Variables naming conventions
        var CONSTANTS_LIKE_THIS     = 42;
        var variableNamesLikeThis   = 'London';
        
        // Functions that take a variable number of arguments should have the last argument named var_args.
    
    }

// When possible, all function arguments should be listed on the same line.
// If it feels like the line is too long, set it up parenthesis-aligned indentation. Visually group arguments,

    function foo(thisIsMyFirstArgument, thisIsMySecondArgument,
                 thisIsMyThirdArgument, thisIsMyFourthArgument) {

        // ...

    }


/////////////////////
//
// CLASS DEFINITIONS
// Classes must be documented with a description and usage. The constructor parameters must also be documented.
// If the class inherits from another class, that should be documented with an @extends tag.
// If the class implements an interface, that should be documented with an @implements tag.
//
///////

    /**
     * Class description
     * @param {Array.<number>} arg1 What does this do?
     * @constructor
     */
    function ClassNamesLikeThis(arg1) {
    
         // Private properties, variables, and methods should be named with a trailing underscore.
         // Protected properties, variables, and methods should be named without a trailing underscore (like public ones).

    }


/////////////////////
//
// METHOD DEFINITIONS
// The preferred approach for attaching methods and properties to a constructor is as below :
//
///////

    /**
     * Description of what the method does
     * @return {string} Some return value.
     */
    project.prototype.methodNamesLikeThis = function() {

        /* ... */

    }


///////////////////////////////////////////////////////////////
//
// Quick tips
// 
///////////////////////////////////////////////////////////////

///////
// Blank lines - Use newlines to group related pieces of code. For example:

    doSomethingTo(a);
    doSomethingElseTo(a);
    andThen(a);
    
    nowDoSomethingWith(b);
    
    andNowWith(c);

///////
// ARRAY Constructors are error-prone due to their arguments.
    var a1 = new Array(x1, x2, x3); // no no no

// Use the more readable array literal instead
    var a = [x1, x2, x3];
    var a2 = [];

///////
// OBJECTS
    var o = new Object();   // no no no

// Object constructors don't have the same problems, but for consistency object literals should be used.
    var o = {};
    var o2 = {
        a : 0,
        b : 1,
        c : 2,
        'strange key' : 3
    };    


///////////////////////////////////////////////////////////////
//
// FINAL NOTE
// Abstract when possible
// Since we work heavily with jQuery, Write abstracted jQuery
// plugins when it can be benificial
// 
///////////////////////////////////////////////////////////////