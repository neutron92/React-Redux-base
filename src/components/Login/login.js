import React, {Component} from 'react';
import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    Row,
    Col
} from 'antd';
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import './login.less';
import {connect} from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        const {dispatch} = this.props
        const cookieName = 'LoginTest'
        const cookieLogged = Cookies.getJSON(cookieName)
        if (cookieLogged && cookieLogged.logged === true) {
            console.log("already logged in");
            dispatch({type: 'USER_LOGGEDIN'})
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
           
      
                    const cookieName = 'LoginTest'
                    const cookieLogged = Cookies.getJSON(cookieName)
                    if (cookieLogged && cookieLogged.logged === true) {
                        console.log("already logged in");

                    } else {
                        if (values.username === "react" && values.password === "react") {
                            Cookies.set(cookieName, {
                                logged: true
                            }, {
                                expires: 7,
                                path: ''
                            })
                            const {dispatch} = this.props
                            dispatch({type: 'USER_LOGGEDIN'})
                        }
                    }

                }
            });
    };
    render() {
        console.log("loggedIn", this.props);

        const {getFieldDecorator} = this.props.form;
        const {loggedIn} = this.props

        return (
            <Row>
                <Col md={6} lg={8} xl={10}></Col>
                <Col md={12} lg={8} xl={4}>
                    {loggedIn ? ("loggedin"):(<Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your username!'
                                    }
                                ]
                            })(
                                <Input
                                prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                placeholder="Username"/>,)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Password!'
                                    }
                                ]
                            })(
                                <Input
                                prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                type="password"
                                placeholder="Password"/>,)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <Link className="login-form-forgot" to="">
                                Forgot password
                            </Link><br/>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button><br/>
                            Or
                            <Link to="">register now!</Link>
                        </Form.Item>
                    </Form>)}
                    
                </Col>
            </Row>
        );
    }
}
const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(Login);
function select(state) {
    console.log('state ====================================');
    console.log(state);
    console.log('====================================');
    return {loggedIn: state.logged}
}
export default connect(select)(WrappedNormalLoginForm);