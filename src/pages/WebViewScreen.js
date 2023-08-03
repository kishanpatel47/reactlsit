// import React from 'react';
// import { View } from 'react-native';
// import { WebView } from 'react-native-webview';
// import AppBase from '../AppBase';
// import ApiParams from '../connection/api-urls';
// import Consts from '../helper/Const';

// export default class WebViewScreen extends AppBase {
//   constructor(props) {
//     super(props);
//     this.state = {
//       webViewUrl: '',
//     };
//   }
//   componentDidMount() {
//     let fileName = "";
//     let titleName = "";
//     let urlType = Consts.Url_Type;
//     urlType = this.props.route.params.selectedUrlType;
//     if (urlType == Consts.Url_Type.Url_Type_Privacy_Policy) {
//       titleName = "Privacy Policy";
//       fileName = 'privacy-policy.html'
//     } else if (urlType == Consts.Url_Type.Url_Type_Refund_Cancellation) {
//       titleName = "Refund & Cancellation Policy";
//       fileName='refund-cancellation.html';
//     } else if (urlType == Consts.Url_Type.Url_Type_Shipping_Policy) {
//       titleName = "Shipping Policy";
//       fileName = 'shipping-policy.html';
//     }
//     this.setState({
//       webViewUrl: ApiParams.API_URLS.DEVELOPMENT + '/policy/' + fileName
//     });

//     this.props.navigation.setOptions({
//       title: titleName,
//     });
//   }

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <WebView source={{ uri: this.state.webViewUrl }} />
//       </View>
//     );
//   }
// }
import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class WebViewScreen extends Component {
  render() {
    return (
      <View>
        <Text>WebViewScreen</Text>
      </View>
    )
  }
}