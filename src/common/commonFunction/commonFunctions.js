 function isMobile() {
    console.log('isMobile : ',  window.navigator.userAgentData.mobile);
    return   window.navigator.userAgentData.mobile;
}

module.exports = isMobile;