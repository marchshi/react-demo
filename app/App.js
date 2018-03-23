import { Component } from 'react'
import { browserHistory } from 'react-router'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import { connect } from 'react-redux'
import intl from 'react-intl-universal'
import AppHeader from './common/AppHeader/AppHeader'
import AppFooter from './common/AppFooter/AppFooter'
import { load } from '../utils/common'
import config from '../utils/config'
import './App.css'

const locales = {
    enUS: require('./common/locales/enUS.json'),
    zhCN: require('./common/locales/zhCN.json'),
}

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        const currentLocale = this.props.locale
        console.log("constructor",currentLocale)
        intl.init({
            currentLocale,
            locales,
        })
    }
    componentWillMount() {
        // if (document.cookie) {
        //     load(`${config.xhr}/api/session/sync`, res => {
        //         if (res.code === 200 && res.result.msg === 'sync error') {
        //             browserHistory.push('/')
        //         } else if (res.code === 200 && res.result && res.result.info.user.type === 'user') {
        //             this.props.loadSession(res.result.info.user)
        //         } else if (res.result.info.user.type !== 'user') {
        //             load(`${config.xhr}/api/user/logout?id=${res.result.info.user.id}`)
        //         }
        //     }, false)
        // }
    }

    componentWillReceiveProps(nextProps) {
        intl.init({
            currentLocale: nextProps.locale,
            locales,
        })
    }

    render() {
        const { locale } = this.props
        return (
            <LocaleProvider locale={locale === 'enUS' ? enUS : null}>
                <div className="app">
                    <div className="wrap">
                        <div className="main">
                            <AppHeader path={this.props.location.pathname} />
                            <div className="childrenContainer">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <div className="appFooter">
                        <AppFooter />
                    </div>
                </div>
            </LocaleProvider>
        )
    }
}

const mapStateToProps = state => state.signin

const mapDispatchTopProps = dispatch => ({
    loadSession(user) {
        dispatch({
            type: 'LOAD_SESSION',
            user,
        })
    },
})

export default connect(mapStateToProps, mapDispatchTopProps)(App)
