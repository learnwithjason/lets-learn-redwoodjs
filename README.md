<p align="center">
  <a href="https://www.learnwithjason.dev">
    <img src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto,w_240/v1579281727/lwj/learnwithjason.png" alt="Learn With Jason" width="120" />
  </a>
</p>
<h1 align="center">
  Let's Learn RedwoodJS! (with Anthony Campolo)
</h1>
<h3 align="center">
  This app was built live on <em>Learn With Jason</em> and it was super fun and I’m sad you weren’t there.
</h3>
<p align="center">
  But don’t worry! You can still:
  <a href="https://www.learnwithjason.dev/let-s-learn-redwoodjs"><strong>watch the video</strong></a> ·
  <a href="https://lets-learn-redwoodjs.netlify.app"><strong>see the demo</strong></a> ·
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/learnwithjason/lets-learn-redwoodjs&utm_source=learnwithjason&utm_medium=github&utm_campaign=devex"><strong>deploy this project</strong></a> ·
  <a href="https://jason.af/lwj/schedule"><strong>see upcoming episodes</strong></a>
</p>

&nbsp;

If we want to use the Jamstack, but also we need a database, but also you just want to build things and not waste all your energy configuring them? Anthony Campolo will teach us how Redwoodjs can help!

&nbsp;

## More Information

- [Watch this app get built live + see links and additional resources][episode]
- [Follow _Learn With Jason_ on Twitch][twitch] to watch future episodes live
- [Add the _Learn With Jason_ schedule to your Google Calendar][cal]

&nbsp;
<p align="center">
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/learnwithjason/lets-learn-redwoodjs&utm_source=learnwithjason&utm_medium=github&utm_campaign=devex">
    <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy this project to Netlify" />
  </a>
</p>

[episode]: https://www.learnwithjason.dev/let-s-learn-redwoodjs
[twitch]: https://jason.af/twitch
[cal]: https://jason.af/lwj/cal

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
