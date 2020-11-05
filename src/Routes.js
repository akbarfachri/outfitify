import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Main from './pages/Index'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Forgot from './pages/ForgotPass';
import NewPass from './pages/NewPass';
import Interest from './pages/InterestPage'

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			    	<Scene key="index" component={Main} title="Index" initial={true}/>
			      	<Scene key="login" component={Login} title="Login"/>
			      	<Scene key="signup" component={SignUp} title="Register"/>
			      	<Scene key="forgot" component={Forgot} title="Forgot Password"/>
			      	<Scene key="newpass" component={NewPass} title="New Password"/>
			      	<Scene key="interest" component={Interest} title="Interest" />
			    </Stack>
			 </Router>
			)
	}
}