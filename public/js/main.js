/* @flow */

import React from 'react'
import DemoPage from './DemoPage'
import SignUp from './signup'

class Main extends React.Component {
    render() {
        return (
            <div>
                <video style={videoStyle} autoPlay loop muted absolute
                       src="https://d3hjue7omxs01q.cloudfront.net/Video/homepage/background-header-v1.mp4"
                       type="video/mp4"/>
                <pageFront style={topStyle}>
                    <logo style={logoStyle}>
                        <img style={{height:20, width:20, marginRight: 5}} src="Happychain.png" />
                        HappyChain
                    </logo>
                    <tabs style={tabsStyle}>
                        <docs style={tabButtonStyle}>Docs</docs>
                        <signin style={tabButtonStyle}>Sign In</signin>
                    </tabs>

                    <DemoPage />
                </pageFront>
            </div>
        )
    }

}

let videoStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    alignSelf: 'stretch'
}
let topStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    fontFamily: 'sans-serif'
}
let logoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10,
    fontSize: 20,
    cursor: 'pointer'
}
let tabsStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 10
}
let tabButtonStyle = {
    height: 22,
    width: 50,
    margin: 10,
    padding: 2,
    fontSize: 18,
    color: 'white',
    backgroundColor: 'dark-grey',
    cursor: 'pointer'
}

export default Main