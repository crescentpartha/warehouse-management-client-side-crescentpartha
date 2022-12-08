## Table of Contents

- [Books Warehouse](#books-warehouse)
  - [Basic Project Setup](#basic-project-setup)
    - [`Project Setup 01 (Basic Setup)`](#project-setup-01-basic-setup)
    - [`Project Setup 02 (Design Necessary Pages & Sections)`](#project-setup-02-design-necessary-pages--sections)
    - [`Project Setup 03 (Design Blogs Sections)`](#project-setup-03-design-blogs-sections)
    - [`Project Setup 04 (Firebase Deploy & Authentication)`](#project-setup-04-firebase-deploy--authentication)
      - [`Some Errors and/or Solutions`](#some-errors-andor-solutions)
    - [`Project Setup 05 (Client-with-Server-API)`](#project-setup-05-client-with-server-api)

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
  - [Dynamic routing for the Blogs post using Tailwind-CSS](https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-crescentpartha/blob/main/books-warehouse/src/components/Pages/Blogs/BlogsHome/BlogsHome.js)
  - [Dynamic routing for the Admin panel using React-Bootstrap](https://github.com/crescentpartha/Volunteer-Network/blob/main/volunteer-network/src/components/Admin/Admin/Admin.js)
  - [Dynamic routing for the PythonHome using React-Bootstrap](https://github.com/crescentpartha/Bangla-EdTech-Resources/blob/main/bangla-resources/src/components/Pages/Python/pythonHome/PythonHome.js)
  - [Dynamic routing for the CHome using React-Bootstrap](https://github.com/crescentpartha/Bangla-EdTech-Resources/blob/main/bangla-resources/src/components/Pages/C/CHome/CHome.js)
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
- Create some routes called `Manage Items`, `Add Item`, `My Items` and make them Protected Route or RequireAuth
- [Display alert/notification using React-Toastify](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#show-the-reset-password-alert-using-react-toastify)
- [Implement Google Login System from react-firebase-hooks](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/02react-router-and-firebase-auth-recap.md#623-implement-google-login-system-from-react-firebase-hooks)

`Notes:` `.env.local` file need to put on `Root folder` like ___book-warehouse___ and `firebase.init.js` file should be in the `src` folder. After that run `npm start` command. Otherwise, `webpack` doesn't identify the modification.

**[🔼Back to Top](#table-of-contents)**

#### `Some Errors and/or Solutions`

- [Bug: too hard to fix "Cannot update a component from inside the function body of a different component."](https://github.com/facebook/react/issues/18178#issuecomment-595846312)
- [Firebase Error: auth/invalid-api-key, Your API key is invalid, please check you have copied it correctly](https://github.com/firebase/quickstart-js/issues/61#issuecomment-1327236639) (My Comment)
- [Firebase invalid api key error in console](https://stackoverflow.com/questions/54636324/firebase-invalid-api-key-error-in-console)

**[🔼Back to Top](#table-of-contents)**

### `Project Setup 05 (Client-with-Server-API)`

- [Basic Server Setup Steps](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#basic-server-setup-steps)
  - [Conditional CSS Rendering for Hover Effect (Service)](https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-crescentpartha/blob/main/books-warehouse/src/components/Pages/Home/Services/Service.js)
  - [Conditional CSS Rendering for Hover Effect (DisplayManageItems)](https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-crescentpartha/blob/main/books-warehouse/src/components/Pages/Manage/DisplayManageItems/DisplayManageItems.js)
- [Connect to database with secure password on environment variable](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#connect-to-database-with-secure-password-on-environment-variable)
- [Load all products from database by creating a product API of get method](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#load-all-products-from-database-by-creating-a-product-api-of-get-method)
  - [Dynamic responsive Table in the React project with React-Bootstrap (VolunteerRegisterList)](https://github.com/crescentpartha/Volunteer-Network/tree/main/volunteer-network/src/components/Admin/VolunteerRegisterList)
  - [Dynamic responsive Table in the React project with Tailwind-CSS (Manage)](https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-crescentpartha/tree/main/books-warehouse/src/components/Pages/Manage)
- [Insert a Product data to the MongoDb Cloud Database](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#insert-a-product-data-to-the-mongodb-cloud-database)
  - [Create a form using react-hook-form in the AddProducts component (without error message)](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#create-a-form-using-react-hook-form-in-the-addproducts-component)
  - [Create a form using react-hook-form in the AddEvent component (without error message)](https://github.com/crescentpartha/Volunteer-Network/blob/main/volunteer-network/src/components/Admin/AddEvent/AddEvent.js)
  - [Create a form using react-hook-form in the Register component (with display error message)](https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-crescentpartha/blob/main/books-warehouse/src/components/Authentication/Register/Register.js)
  - [Create a form using react-hook-form in the AddItemsHome component (with display error message)](https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-crescentpartha/blob/main/books-warehouse/src/components/Pages/AddItems/AddItemsHome/AddItemsHome.js)
- [Manage Products and Explore DELETE API](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#manage-products-and-explore-delete-api)
- Load a particular book data from database to server-side
  - [Get a particular event from database and Create a GET API to get a particular event (id-wise)](https://github.com/crescentpartha/Volunteer-Network-Server/blob/main/Steps.md#get-a-particular-event-from-database-and-create-a-get-api-to-get-a-particular-event-id-wise)
  - [Load single product data by using id and Setup form's field value](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#load-single-product-data-by-using-id-and-setup-forms-field-value)
  - [Setup Dynamic Route and Access route params](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/00module-overview-and-react-review.md#612-setup-dynamic-route-and-access-route-params)
  - Added `Stock Update` button in the DisplayManageItems and Implement Setup Dynamic Route and Access route params
- [Update a single product info according to id](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#update-a-single-product-info-according-to-id)
- Insert ordered book data from client-side to server-side to database
  - [Insert a Product data to the MongoDb Cloud Database](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#insert-a-product-data-to-the-mongodb-cloud-database)
  - [ItemDetail.js](https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-crescentpartha/blob/main/books-warehouse/src/components/Pages/Home/InventoryItems/ItemDetail/ItemDetail.js)
- Update existing ordered book data from client-side to server-side for orderCollection
  - Create a Custom hooks with dependency to load all orders book data from orderCollection (`useOrders.js`)
  - Create a Custom hooks with dependency to load a particular orders book data from orderCollection (`useLoadSingleOrderedBookItem.js`)
  - [Update a single product info according to id](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module66.5-CRUD-Update-and-Product-Management/04crud-product-management.md#update-a-single-product-info-according-to-id)
  - [ItemDetail.js](https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-crescentpartha/blob/main/books-warehouse/src/components/Pages/Home/InventoryItems/ItemDetail/ItemDetail.js)
- Load a particular ordered book data from database to server-side | (email-wise data load) for orderCollection
  - [index.js](https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-crescentpartha/blob/main/index.js)
  - Create a custom hooks call `useLoadEmailOrderedBook.js`
  - Display Ordered Books data on `DisplayMyItems.js` and `MyItemsHome.js`

**[🔼Back to Top](#table-of-contents)**
