import BeginnerFunction from "./images/loginAccount-starter-code.png";
import DecoupleFirst from "./images/Decouple-first.png";

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
        things are and we have to define them.
      </p>
      <p>
        In order to define these 3 things, we have to pass in props as objects.
        And with using typescript here, we also have to assign types to them as
        well. This part can be a little tricky trying to figure out what type to
        assign them, but I found a cool trick on how to know what to assign it.
      </p>
    </div>
  );
}

export default App;
