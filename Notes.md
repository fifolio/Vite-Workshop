# Vite vs Traditional Module Bundlers 
> TMB
- Bundles all your JS modules, CSS and other assets
  Does this every time you make a change, which can get really slow as your app grows

> Vite
- Vite takes advantage of native ES modules. Serves directly to the browser
Uses Rollup to bundle files for production (npm run build)

# Replacement for CRA (Create React App)
- CRA is great for beginners. it's easy to use and has some great features
- it can get quite laggy as your application grows as it uses Webpack under the hood
- Vite has a React Plugin, which makes it a great replacement for a faster experience 
