# Read Design Pattern (Transactional Apps with sagas)




#instalar libreria de componentes microvoz en un proyecto

```
https://stackoverflow.com/questions/23210437/npm-install-private-github-repositories-by-dependency-in-package-json
npm install microvoz/callcenter2_react_components --save
git config --global url."https://${GITHUB_TOKEN}@github.com/".insteadOf git@github.com:

"dependencies": {
"GitRepo": "git+https://<token-from-github>:x-oauth-basic@github.com/<user>/<GitRepo>.git"
}

```



### Install create react project
```
npm install create-react-app -g
create-react-app projectname
npm start
```

### Install and Start this project
```
npm install
npm start

http://127.0.0.1:3000
```


### Build this project
```
npm run build
cd rootProject/build
```




## install node and npm
```
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash
$ source ~/.bashrc
$ nvm install 9.2.0
$ nvm use 9.2.0
$ nvm alias default 9.2.0
$ npm install pm2 -g
$ nvm current // 9.2.0
```
## Tecnologias utilizadas

| Tecnologías   | Requerida     | Opcional  	| Documentacion |
| ------------- |:-------------:|:-----------:|-----------|
| NodeJs        | 	    x       |  	        	|      [https://nodejs.org/en/docs/guides/](https://nodejs.org/en/docs/guides/). |
| ReactJs       | 	    x 	    |  	        	|      [https://reactjs.org/docs/hello-world.html](https://reactjs.org/docs/hello-world.html) |
| Sagas         |  		          |     	x   	|      [https://github.com/barbuza/react-saga](https://github.com/barbuza/react-saga) |
| Redux         |  		          |     	x   	|      [https://redux.js.org/](https://redux.js.org/) |
| Axios         |  		          |     	x   	|      [https://github.com/axios/axios](https://github.com/axios/axios) |
| Redux-sagas   |  		          |    	  x   	|      [https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html) |
| Express       |  		          |     	x   	|      [http://expressjs.com/es/](http://expressjs.com/es/)

### Bem css


```
BlockName
BlockName__element
BlockName__element__grandchildren
BlockName--modifier


.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }


<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>




```src/
├── actions                     https://redux.js.org/basics/actions
├── components
│   ├── Elements
│   │   ├── ContentSection
│   │   ├── FormLogin
│   │   ├── Navbar
│   │   └── Spinner
│   ├── HomePage
│   ├── Layouts
│   │   ├── Friendly
│   │   └── Guest
│   ├── LoginPage
│   └── UsersPage
├── containers
│   ├── Layouts
│   └── Modules
├── css
├── fonts
├── history
│   └── Middlewares
├── http
│   └── Middlewares
├── img
├── js
├── reducers
├── routes
├── sagas
│   ├── internal
│   │   └── sagaHelpers
│   └── Services
│       └── Providers
│           └── Api
├── services
│   └── providers
│       └── Api
├── statics
├── store
└── utils





### References

```
https://github.com/krasimir/react-in-patterns/blob/master/book/chapter-6/README.md
https://github.com/krasimir/react-in-patterns


```
