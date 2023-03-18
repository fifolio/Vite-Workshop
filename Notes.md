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

# .env file

The .env file in Vite is a configuration file that allows you to set environment variables for your project. These variables can be accessed in your code using the "import.meta.env.<varName>" object. The .env file is typically used to store sensitive information such as API keys, database passwords, and other configuration options that should not be hard-coded in your code. By using the .env file, you can keep your sensitive information separate from your code and easily switch between different environments (such as development, staging, and production) without having to modify your code.
