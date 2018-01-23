[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Project: The **Offline** Death Square

As we all know, intergalactic WiFi isn't the best. With that in mind, we need to make sure we can see our Death Square Dashboard™, even when the internet is out.

### Instructions:

1) Open up our data banks. Navigate into `turret-api` and run `seed.js` and `server.js` — don't forget to install those `npm` modules.

2) Navigate into `imperial-starfleet` and start up our front end.

3) Globally install the `yarn` package with `npm`.

4) This version of the death square is old, we need to update it:

  a) Globally install the `npm-check-updates` package

  b) Update all the packages with `ncu -u`

  c) Install these updates packages with `npm install`

5) Follow the steps for `Adding a service worker to an existing app` in [this tutorial](https://angular.io/guide/service-worker-getting-started).

6) Open your app by `cd`ing into `dist` and running `python -m SimpleHTTPServer`. Go into the `Application` tab in Dev Tools, select `service workers` in the sidebar, and check the `offline` box. Refresh the page and the dashboard should stay.  We're offline!

7) Open a new incognito tab in Chrome, open Dev Tools, go into the `Application` tab in Dev Tools, select `service workers` in the sidebar, and check the `offline` box.  Try going to `http://localhost:8000`, it should not load.  Now uncheck the `offline` box, refresh, and you should see the dashboard.

8) Unheck `offline` again and refresh the page. This time, we should see our death square in all its offline glory.

>**Note:** Make sure you are going directly to `http://localhost:8000/` when you refresh, not any of the sub-pages like `/info/8`. You can navigate to those sub-pages later by clicking on the turrets, but if you do it in the beginning, it will trigger a network request. Because we're offline, this would fail.

### Resources

- [Angular Apps With Service Workers](https://coryrylan.com/blog/fast-offline-angular-apps-with-service-workers).
