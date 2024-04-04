document.addEventListener("DOMContentLoaded", function () {
  var videoModal = document.getElementById("exampleModal");
  var videoIframe = videoModal.querySelector("iframe");
  var originalSrc = videoIframe.src;

  videoModal.addEventListener("hide.bs.modal", function () {
    // Pause the video when the modal is hidden
    videoIframe.src = "";
    videoIframe.src = originalSrc;
  });
});
