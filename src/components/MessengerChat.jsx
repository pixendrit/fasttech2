// import React from "react";

// class MessengerChat extends React.Component {
//   componentDidMount() {
//     window.fbAsyncInit = function() {
//       FB.init({ //eslint-disable-line
//         xfbml: true,
//         version: 'v12.0'
//       });
//     };

//     (function(d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s); js.id = id;
//       js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
//   }

//   render() {
//     return (
//       <>
//         <div id="fb-root" />
//         <div
//           className="fb-customerchat"
//           attribution="setup_tool"
//           page_id="103543838170656"
//           theme_color="#2f8dff"
//           logged_in_greeting="Përshëndetje! Si mund të ju ndihmojmë?"
//            />
//       </>
//     );
//   }
// } 

// export default MessengerChat;

import React, { useEffect } from "react";

function MessengerChat() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v12.0",
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="biz_inbox"
        page_id="103543838170656"
        theme_color="#2f8dff"
        logged_in_greeting="Përshëndetje! Si mund të ju ndihmojmë?"
      />
    </>
  );
}

export default MessengerChat;