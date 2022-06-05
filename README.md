# Server side coin flip
A project about building a raw node.js server and having the coin flip logic run on the server instead of the client.

**Link to project:** 

![]()

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js

Starts with a simple HTML page, and a little CSS for centering. I plan to continue to improve the looks of the site. A small Javascript file runs on the client device to insert an event listener on the coin image to signal flipping the coin on click and receive the response from the server in order to insert the new coin image and win quote onto the page. The server-side Javascript handles most of this app. It serves the HTML, CSS, client side JS, and image files as well as handling the coin flip logic and sending the json responses containing the result text and the image path to be handled by the client device.

## Optimizations

Current optimizations include mobile responsive resizing, refactoring the randomizaation method to do less work for the same result, and condensing the setTimeouts used into a function to be called with await to allow the coin flip gif to be seen before the coin flip resopnse takes over.

Planned optimizations include better page styling, get better coin assets, refactoring the server code with express, finding a new way to ensure the coin flip animation plays before showing the result without setTimeout, and adding statistics tracking (either local or across all users server side). Figure out how to run this on GitHub Pages given the server JS wanting to do the job.

## Lessons Learned:

Building out a node server is an interesting, if tedious, experience. Taking everything that needs to be sent to the client into account and making a serving step for each of them. It's easy to overlook some small thing such as overlooking one of the image serving steps leading to the image not being served and thus not loading.
  Finding a way to force the webpage to re-paint the page when it received the results of a coin flip. I found that setTimeout, even if only set to log to the console, will force that repaint. I do need to find out if there is a better way to do it.
  Double check that the order of image insertions onto the page makes sense. Having the coin flip gif in the wrong order in the client side JS caused it not to be used, or be loaded in place of a heads or tails image. In this case, it needs to be inserted right at the beginning of the event handler to show that something is happening while the api call is happening and the coin flip results are being received.
