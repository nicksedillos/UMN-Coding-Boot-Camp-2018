$(document).ready(() => {
  $('#submit-add').click((event) => {
    event.preventDefault();

    const name = $('#name').val();
    const role = $('#role').val();
    const age = $('#age').val();
    const forcePoints = $('#forcePoints').val();
    const routeName = name.toLowerCase();

    const character = {
      name,
      role,
      age,
      forcePoints,
      routeName,
    };

    $.post('api/characters/new', character)
      .then((res) => {
        console.log(res);
      });
  });
});
