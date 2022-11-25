## Table of Contents

- [Books Warehouse](#books-warehouse)
  - [Basic Project Setup](#basic-project-setup)
    - [`Project Setup 01 (Basic Setup)`](#project-setup-01-basic-setup)
    - [`Project Setup 02 (Design Necessary Pages & Sections)`](#project-setup-02-design-necessary-pages--sections)
    - [`Project Setup 03 (Design Blogs Sections)`](#project-setup-03-design-blogs-sections)
    - [`Project Setup 04 (Firebase Deploy & Authentication)`](#project-setup-04-firebase-deploy--authentication)
      - [`Some Errors and/or Solutions`](#some-errors-andor-solutions)

# Books Warehouse

## Basic Project Setup

### `Project Setup 01 (Basic Setup)`

- [Project Setup 01 (Basic Setup)](https://github.com/crescentpartha/Red-Onion/blob/main/red-onion/__Steps__.md#project-setup-01-basic-setup)
- [Setup tailwind CSS with Create React App (website)](https://tailwindcss.com/docs/guides/create-react-app)
- [Setup tailwind CSS with Create React App](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module51-reactBootstrap-tailwindCSS-axios-rechart/01react-with-botstrap-and-tailwind.md#513-setup-tailwind-css-with-create-react-app)
- [Tailwind CSS documentation](https://tailwindcss.com/docs/utility-first)
- Not Used Icons
  - [HeroIcons my documentation](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone09/module51-reactBootstrap-tailwindCSS-axios-rechart/01react-with-botstrap-and-tailwind.md#514-responsive-navbar-using-react-and-tailwind)
  - [HeroIcons.com](https://heroicons.com/)
  - [HeroIcons/github](https://github.com/tailwindlabs/heroicons#react)
- Used Icons
  - [React Icons](https://react-icons.github.io/react-icons/)

**[🔼Back to Top](#table-of-contents)**

### `Project Setup 02 (Design Necessary Pages & Sections)`

- `Banner` section added
- `Services` section added
- `Core Values` section added
- `Footer` section added
- `404 page` added 
- `Register` page Design
- `Login` page Design
- `RetrievePassword` page Design
- `Handle errors` in ___Register___, ___Login___, and ___RetrievePassword___ form

**[🔼Back to Top](#table-of-contents)**

### `Project Setup 03 (Design Blogs Sections)`

- Create components such as `BlogsHome`, `JavascriptVsNode`, `NodeVsMongo`, `SqlVsNoSql`, `Jwt`, `CustomLink`, `CustomLinkTag`.
- Implement the `dynamic routing` for the Blogs post.
- `CustomLink` ___(Active Link)___ added for Blogs' ___Recent Post___ navigation section.
- `CustomLinkTag` ___(Active Link)___ added for Blogs' ___Tag___ navigation section.
- `JavaScript Vs Nodejs` blog post added
- `SQL Vs NoSQL` blog post added
- `Nodejs Vs MongoDB` blog post added
- `JWT` blog post added

**[🔼Back to Top](#table-of-contents)**

### `Project Setup 04 (Firebase Deploy & Authentication)`

- [Authentication Steps or Auth_steps](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#authentication-steps-or-auth_steps)
- [Firebase Hosting/Deploy Steps: (for 1st time)](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#firebase-hostingdeploy-steps-for-1st-time)
- [Firebase Hosting/Deploy Steps: (for 2nd/multiple times)](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#firebase-hostingdeploy-steps-for-2ndmultiple-times)
- [Adding Custom Environment Variables: (Set Environment Variables for Firebase Config)](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#adding-custom-environment-variables-set-environment-variables-for-firebase-config)
- [Email password based authentication with react firebase hooks](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#617-email-password-based-authentication-with-react-firebase-hooks)
  - [Install react-firebase-hooks](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#install-react-firebase-hooks)
  - [useCreateUserWithEmailAndPassword from react-firebase-hooks](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#usecreateuserwithemailandpassword-from-react-firebase-hooks-signupjs)
  - [useSignInWithEmailAndPassword from react-firebase-hooks](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#usesigninwithemailandpassword-from-react-firebase-hooks-loginjs)
  - [signOut from react-firebase-hooks](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#signout-from-react-firebase-hooks-headerjs)
  - [Introduction to Protected Route and Require Auth](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#618-introduction-to-protected-route-and-require-auth)
  - [Fix Reload redirect to login page](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#628-fix-reload-redirect-to-login-page-and-display-toast-message)

`Notes:` `.env.local` file need to put on `Root folder` like ___book-warehouse___ and `firebase.init.js` file should be in the `src` folder. After that run `npm start` command. Otherwise, `webpack` doesn't identify the modification.

**[🔼Back to Top](#table-of-contents)**

#### `Some Errors and/or Solutions`

- [Bug: too hard to fix "Cannot update a component from inside the function body of a different component."](https://github.com/facebook/react/issues/18178#issuecomment-595846312)
- [Firebase Error: auth/invalid-api-key, Your API key is invalid, please check you have copied it correctly](https://github.com/firebase/quickstart-js/issues/61#issuecomment-1327236639) (My Comment)
- [Firebase invalid api key error in console](https://stackoverflow.com/questions/54636324/firebase-invalid-api-key-error-in-console)

**[🔼Back to Top](#table-of-contents)**
