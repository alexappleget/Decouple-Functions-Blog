import BeginnerFunction from "./images/loginAccount-starter-code.png";
import DecoupleFirst from "./images/Decouple-first.png";
import HoverVideo from "./images/hover-video.mp4";
import PropObjects from "./images/Prop-objects.png";
import UserCredentials from "./images/UserCredentials.mp4";
import FinalProps from "./images/Final-Props.png";
import ImportFunction from "./images/ImportFunction.png";
import FinalLook from "./images/FinalLook.png";
import PassTest from "./images/PassTest.png";
import FailTest from "./images/FailTest.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function App() {
  return (
    <div className="blog-main-div">
      <h1>Decouple A Function for Testing</h1>
      <h2>By: Alex Appleget</h2>
      <p>
        Decoupling a function can be very challenging at first. My first time it
        took me weeks to figure it out for a certain function that I had to
        decouple and then test. I hope that after this blog, I can teach you how
        to decouple functions and be more efficient as a software engineer.
      </p>
      <p>
        What is decoupling? Decoupling is when you take a function from inside a
        component, extract it into another file, and then export it. This allows
        you to import the function into testing to be used.
      </p>
      <p>
        Before we begin, I want to point out that I will be using Next.js with
        typescript (for the frontend) and jest/React Testing Library for the
        testing in this example. I will walk through my process on how I did
        things.
      </p>
      <p>
        When decoupling a function, it provides many benefits. Some of these
        benefits include:
      </p>
      <ol>
        <li>
          Reusability: One of the coolest things about decoupling a function is
          it`s reusability. When a function gets decoupled, you can then import
          it anywhere in your project to be used.
        </li>
        <li>
          Testability: Testing is a crucial part in any software engineer`s task
          at hand. Testing ensures reliability of your software. Decoupling
          enables better unit testing because you can isolate the function and
          test it individually.
        </li>
      </ol>
      <p>
        Now that we learned what decoupling is and why it`s useful, let`s get
        started.
      </p>
      <p>
        In this scenario, I was assigned a task to add notifications for when a
        user logs into their account. I should display a success notification
        when the user logs in and then show an error notification for when they
        can`t log in.
      </p>
      <img
        src={BeginnerFunction}
        alt="image of a function inside of a component"
      />
      <p>
        In the photo, I placed my two notifications using toast.custom(). Now, I
        have to test that they work as intended by doing a unit test of the
        function, but I won`t be able to test the function because it is
        currently inside of the AuthContextProvider component. This is where
        decoupling comes into use. I now have to take this function out and put
        it inside of another file to then be exported. And the file will look
        something like this.
      </p>
      <img
        src={DecoupleFirst}
        alt="the function that was decoupled into another file all by itself"
      />
      <p>
        As you can see, there are a ton of dependency errors. Now that the
        loginAccount() function was taken out of it`s component. It doesn`t know
        what to do and the errors are because the function can`t define what
        they are. So, the next step we have to do is fix this. And no, we don`t
        have to import everything. We just have to pass everything in as
        objects.
      </p>
      <p>
        In order to know what abjects need passed in, I go from top to bottom in
        the function and write down everything that is erroring. In this case it
        is:
      </p>
      <ul>
        <li>user</li>
        <li>getUser()</li>
        <li>router</li>
      </ul>
      <p>
        These are the 3 things causing this function to error now. Since we took
        the function outside AuthContextProvider, it doesn`t know what these 3
        things are and we have to define them. In order to define these 3
        things, we have to pass in props as objects. And with using typescript
        here, we also have to assign types to them as well. This part can be a
        little tricky trying to figure out what type to assign them, but I found
        a cool trick on how to know what to assign it.
      </p>
      <p>
        If you go to the original function in it`s original location, you can
        actually hover over the specific word you`re trying to define. It`ll
        show it`s type. For example, let`s take a look at getUser() because it
        is a function itself and how would you define that?
      </p>
      <video src={HoverVideo} autoPlay loop muted />
      <p>
        In the video did you notice that I highlighted{" "}
        <span>
          () ={">"} Promise{"<"}IUser {"|"} undefined{">"}
        </span>
        ? That is it`s type that you will need to define it inside your
        decoupled function. So, let`s go back to the decoupled function with the
        knowledge we now know. Remember those pesky errors from the function not
        knowing it? Well use what you have learned to figure out the types for
        `user` and `router`. It will look something like this:
      </p>
      <img
        src={PropObjects}
        alt="picture showing what the new decoupled function will look like with the props passed in"
      />
      <p>
        Now, we just have to deal with these last 2 errors that are new. Once
        again, the function doesn`t understand what these 2 things are. We can
        easily define them. First, I have to go back to the original function
        (before it was decoupled), and I hover over `UserCredentials`:
      </p>
      <video src={UserCredentials} autoPlay loop muted />
      <p>
        This let`s me know that `UserCredentials` will consist of an email and
        password in the form of strings. As for `AppRouterInstance`, that is
        just something that you can easily import from the router that you use.
        Inside the decoupled function file, everything will look like this:
      </p>
      <img
        src={FinalProps}
        alt="decoupled function with the last 2 types defined"
      />
      <p>
        We imported for `AppRouterInstance` and then we quickly explain
        `UserCredentials` inside of the decoupled function file. Now the
        decoupled function is now complete!
      </p>
      <p>
        Our next step will be to take this new decoupled function and then
        import back to where it was to begin with. We go back inside the
        AuthContextProvider component, import our new function into the file and
        then call our new function like this:
      </p>
      <img
        src={ImportFunction}
        alt="importing the decoupled function to be used"
      />
      <img
        src={FinalLook}
        alt="what the new function looks like inside Auth Context Provider component"
      />
      <p>
        Now the new function has been imported back into where it is supposed to
        go and is being called now with each prop that was defined for it. This
        allows the decoupled function to receive those 3 things and know what to
        do with them.
      </p>
      <p>We decoupled our first function! Let`s recap on what we did:</p>
      <ul>
        <li>
          First we created a seperate file to be able to decouple the
          loginAccount() function.
        </li>
        <li>
          Then we found out what needed to be passed in as prop objects and
          defined them accordingly.
        </li>
        <li>
          After fixing the decoupled function, we exported it. Then imported it
          back into AuthContextProvider, where it first belonged, and then
          called the new function.
        </li>
      </ul>
      <p>
        The function is now decoupled and able to be exported to be used
        anywhere in your project. It is ready to be tested in our unit testing.
        Since it is decoupled, we can now import it into our test file to be
        able to test the function itself.
      </p>
      <p>
        I want to test that the function shows the right notification for when
        it passes and fails. To do this I first test the function and mock
        everything inside of it to make it pass:
      </p>
      <img
        src={PassTest}
        alt="unit test for the function passing and showing a success notification"
      />
      <p>
        In the test, I directly called the function, but then mocked all the
        functions inside of it. I don`t want the test actually calling api
        functions because that will cause a rate limit issue.
      </p>
      <p>
        Next, we force the function to fail and make sure it shows the error
        notification like this:
      </p>
      <img
        src={FailTest}
        alt="unit test for the function failing and showing an error notification"
      />
      <p>
        In this test we purposely make the function fail, so that we can check
        that the error notification shows up.
      </p>
      <p>
        And with this, we have succeeded on decoupling our first function! I
        hope this has helped a lot and if you have any questions please feel
        free to DM me on Twitter or LinkedIn with the links below.
      </p>
      <div className="icons">
        <a href="https://x.com/ApplegetAlex" target="_blank">
          <FaSquareXTwitter className="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/alex-appleget/" target="_blank">
          <FaLinkedin className="linkedin" />
        </a>
      </div>
    </div>
  );
}

export default App;
