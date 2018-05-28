# Patrón de diseño Microvoz Front-End con React y Sagas




### Instalar libreria de componentes microvoz en un proyecto

```

npm install microvoz/callcenter2_react_components --save
git config --global url."https://${GITHUB_TOKEN}@github.com/".insteadOf git@github.com:

"dependencies": {
"GitRepo": "git+https://<token-from-github>:x-oauth-basic@github.com/<user>/<GitRepo>.git"
}

```



### Crear e instalar un proyecto desde cero
```
npm install create-react-app -g
create-react-app projectname
npm start
```

### Instalar un proyecto e iniciarlo
```
npm install
npm start

http://127.0.0.1:3000
```


### Publicar el proyecto
```
npm run build
cd rootProject/build
```




## Instalar node y npm
```
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash
$ source ~/.bashrc
$ nvm install 9.2.0
$ nvm use 9.2.0
$ nvm alias default 9.2.0
$ npm install pm2 -g
$ nvm current // 9.2.0
```

## Tecnologías utilizadas

| Tecnologías   | Documentación |
| ------------- |-----------|
| NodeJs        |      [https://nodejs.org/en/docs/guides/](https://nodejs.org/en/docs/guides/). |
| ReactJs       |      [https://reactjs.org/docs/hello-world.html](https://reactjs.org/docs/hello-world.html) |
| Sagas         |      [https://github.com/barbuza/react-saga](https://github.com/barbuza/react-saga) |
| Redux         |      [https://redux.js.org/](https://redux.js.org/) |
| Axios         |      [https://github.com/axios/axios](https://github.com/axios/axios) |
| Redux-sagas   |      [https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html) |
| Express       |      [http://expressjs.com/es/](http://expressjs.com/es/) |
| Bem Css       |      [http://getbem.com/introduction/](http://getbem.com/introduction/) |
| React Redux       |      [https://github.com/reduxjs/react-redux](https://github.com/reduxjs/react-redux) |

### Uso de componentes
Los componentes los usamos para poner el código html, se localiza en la carpeta compoenentes y se nombra con letra capital, ejemplo, si tenemos el componente FormLogin, tendriamos algo asi:

```

import React, { Component } from 'react'

import { Grid, Row, Form, FormGroup, Col, Checkbox, ControlLabel, Button, FormControl, Panel } from 'react-bootstrap'

import './FormLogin.css'


class FormLogin extends Component {
  contructor(props){
    this.setState({
      username: null,
      password: null
    })
  }
  onInputChange(e){
    this.setState({[e.target.id]: e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.state)
  }
  render() {
    const { username, password } = this.state || { username: "", password: "" }

    return (
          <Form className="FormLogin" onSubmit={ this.onSubmit.bind(this) } >
            <FormControl className="FormLogin__Input FormLogin__Input--email" type="text" id="email" placeholder="Email" value={ username } onChange = { this.onInputChange.bind(this) } />
            <FormControl className="FormLogin__Input FormLogin__Input--password" type="password" id="password" placeholder="Password" value={ username } onChange = { this.onInputChange.bind(this) } />
            <Button type="submit"  className="btn-lg btn-primary btn-block">Sign in</Button>
            <Checkbox className='FormLogin__Rememberme__Input'>Remember me</Checkbox>
            <a href="#" className="pull-right FormLogin__NeedHelp">Need help? </a>
            <span class="clearfix"></span>
          </Form>
    )
  }
}

export default FormLogin
```
NOTA: Es importante tener encuenta que si el componente tiene lógica de programación, esta debe ser escrita en los contenedores.


### Uso de containers

Los componentes los usamos para poner el código javascript o la lógica de los componentes.
```
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../actions/authActions'

import FormLoginComponent from '../../components/Elements/FormLogin/FormLoginComponent'


class FormLoginContainer extends Component {
  render() {
    return (
    <FormLoginComponent {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
	return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      auth: bindActionCreators(authActions, dispatch),
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormLoginContainer)

```

### Bem css (Escritura css)


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



```
tree -d
src/  
├── [actions](https://redux.js.org/basics/actions "actions!")  
├── [components](https://reactjs.org/docs/components-and-props.html "Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.")  
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
├── [containers](https://github.com/krasimir/react-in-patterns/blob/master/book/chapter-6/README.md)  
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
├── [reducers](https://redux.js.org/basics/reducers)  
├── routes  
├── [sagas](https://github.com/barbuza/react-saga)  
│   ├── internal  
│   │   └── sagaHelpers  
│   └── Services  
│       └── Providers  
│           └── Api  
├── services  
│   └── providers  
│       └── Api  
├── statics  
├── [store](https://redux.js.org/api-reference/store)  
└── utils  





### References

```
https://github.com/krasimir/react-in-patterns/blob/master/book/chapter-6/README.md
https://github.com/krasimir/react-in-patterns
http://getbem.com/introduction/
https://stackoverflow.com/questions/23210437/npm-install-private-github-repositories-by-dependency-in-package-json

```
