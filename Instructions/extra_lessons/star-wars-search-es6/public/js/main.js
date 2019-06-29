$(document).ready(() => {
  $('#submit-search').click((event) => {
    event.preventDefault();
    const search = $('#search-field').val().toLowerCase();

    $.get(`api/characters/${search}`)
      .then((data) => {
        $('#character').text(JSON.stringify(data, null, '  '));
      });
  });
});
