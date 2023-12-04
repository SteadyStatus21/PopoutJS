// Created by SteadyStatus21, in 2023. Reuse allowed with proper credits. 
// Reuse prohibited IF credit is removed.
// The purpose of this is to ensure that my teacher propertly grades
// my stuff.

if (window.self !== window.top) {

  var popup = document.createElement('div');
  popup.innerHTML = `
    <div class="popup-container animate__animated animate__pulse" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #202020; color: #fff; padding: 20px; border-radius: 12px; width: 75%;">
      <h3 style="margin-top: 0;">iFrame Detected! Recommended to view Full Page.</h3>
      <p>It is recommended by the page's developer to push the page out into a new tab, however the developer also wants to give you the choice to do so. <br><br>Please select:</p>
      <div style="display: flex; justify-content: space-between;">
        <button id="popupOpenButton" style="background: #2196f3; color: #fff; border: none; padding: 10px 20px; border-radius: 50px; cursor: pointer;">Open in New Tab</button>
        <button id="popupNoThanksButton" style="background: #757575; color: #fff; border: none; padding: 10px 20px; border-radius: 50px; cursor: pointer;">No, thanks</button>
      </div>
    </div>
  `;
  document.body.appendChild(popup);

  var popupOpenButton = document.getElementById('popupOpenButton');
  popupOpenButton.addEventListener('click', function() {

    window.open(window.self.location.href, '_blank');

    document.body.removeChild(popup);
  });

  var popupNoThanksButton = document.getElementById('popupNoThanksButton');
  popupNoThanksButton.addEventListener('click', function() {

    document.body.removeChild(popup);
  });
}
