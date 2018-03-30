
      var search = document.querySelector(".open-form-search");

      var popup = document.querySelector(".modal-search");

      var form = popup.querySelector("form");
      var arrival_date = popup.querySelector("[name=come]");
      var departure_date = popup.querySelector("[name=ride-out]");
      var parent = popup.querySelector("[name=number-one]");
      var children = popup.querySelector("[name=number-two]");


      search.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.toggle("modal-show");
        arrival_date.focus();
      });

      form.addEventListener("submit", function (evt) {
        if (!arrival_date.value || !departure_date.value || !parent.value || !children.value) {
          evt.preventDefault();
          console.log("Нужно ввести даты приезда и отъезда и количество отдыхающих");
        }
      });
