const url = "https://hyperloopmessageportal.herokuapp.com/";
const method = "post";
const shouldBeAsync = true;

function submit() {
  console.log("ello");
  const name = document.querySelector("#form-name").value;
  const email = document.querySelector("#form-email").value;
  const message = document.querySelector("#form-text").value;
  const postdata = { name: name, email: email, message: message };
  const request = XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  };

  request.open(method, url, shouldBeAsync);
  request.setRequestHeader(
    "Content-type",
    " application/x-www-form-urlencoded"
  );
  request.send(postdata);
}
