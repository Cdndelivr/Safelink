document.addEventListener('DOMContentLoaded', function () {
  var lastbtn = $('#lastbtn');
  var sessionid = sessionStorage.getItem('id');

  if (sessionid != null && sessionid !== "null") {
    setTimeout(function () {
      $('#step2-topad, #step2-btmad, #step2-btmtopad, #step2-btmbtmad').removeClass('hidden');
    });

    setTimeout(function () {
      $('#step2-progress').removeClass('hidden');
    });

    setTimeout(function () {
      $('#finishbox').removeClass('hidden');
    });

    setTimeout(function () {
      lastbtn.removeClass('hidden');
    });
  }
});
