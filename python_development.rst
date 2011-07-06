Python development methodology
==============================

When working on Large Blue python development projects, please stick to the
following guidelines.


New functionality
-----------------

- **Start on an even keel** - Really take the time to understand the task. If
  something doesn't make sense or you think there's a better way ofimplementing
  it, say something.
- **Don't be shy** - If you need some UIs, designs, someone else to push their
  work, etc. ask the person responsible (nicely).
- **Communicate** - If work you're doing might affect someone else working on
  the project, talk to them about it and make sure you're on the same page.
- **Abstract where possible** - If the code looks like it might be useful
  elsewhere (within reason), put it somewhere sensible for others.
- **Merge often** - Pull in upstream changes to reduce the risk of having to
  deal with conflicts further down the line.
- **Test it** - Write unit and functional (if necessary) tests covering all the
  main use cases for the new functionality (and preferably some edge cases too).
- **Test it more** - Make sure the test suite covers all the code you've written
  by running nosetests with the --with-coverage flag. It's not going in the
  trunk if it doesn't adhere to the rest of the project coverage.
- **Run the tests** - It's all good and well writing the tests but if they're
  not run regularly, you're not going to be able to see if they're breaking. Run
  them at the very least before you're about to push upstream.

Bug fixing
----------

- **Start on an even keel** - Make sure you can replicate the bug on the live
  site and on your local instance by following a definitive set of steps.
- **Write a test for it** - This use case obviously hasn't been correctly
  anticipated in the existing tests so write a new one for it (and make sure
  it's failing before you start the work).
- **Keep up the coverage** - Run the tests to make sure the new code hasn't
  decreased the overall test coverage.
