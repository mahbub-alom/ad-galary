var width = window.innerWidth;
if (width <= 768) {
  isContainerDesktop = false;
} else {
  isContainerDesktop = true;
}

function updateViewContainer() {
  if(showRedirectURL){
    let iframeUrl = (isContainerDesktop)?desktopUrl:mobileUrl;
    document.body.innerHTML = `<iframe src=${iframeUrl} frameborder="0" style="width:100dvw;height:100dvh"></iframe>`;
    document.body.style.display = 'block';
    return;
  }
  if (isContainerDesktop) {
    desktopIconClicked();
  } else {
    mobileView()
  }
  document.body.style.display = 'block';
  hideVidUrl()
}

updateViewContainer()

function hideVidUrl() {
  if(showRedirectURL){
    return;
  }
    if(hideUrl){
    gsap.set('.midIframe',{display:'none'})
    gsap.set('.viewChanger',{display:'none'})
  }else{
    gsap.set('.videoContainer',{display:'none'})
  }
}