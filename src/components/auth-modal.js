import React from "react"
import { View, Button, WebView } from "react-native"


export default class AuthModal extends React.Component {

  handleLogin = (e) => {
    if (e.url.match('(?=https://unsplash.com/oauth/authorize/).*')) {
      this.props.navigation.goBack(null)
      this.props.navigation.navigate('Profile')
      this.props.handleLogin(e)
    }
  }


  render() {
    
    return (
      <View style={{ flex: 1, marginTop: 20, justifyContent: 'center' }}>
        <WebView 
          source={{ uri: this.props.authUrl }} 
          onNavigationStateChange={ (e) => this.handleLogin(e) }
         />
        <Button
          onPress={() => this.props.navigation.goBack(null)}
          title="Dismiss"
        />
      </View>
    )
  }

}
