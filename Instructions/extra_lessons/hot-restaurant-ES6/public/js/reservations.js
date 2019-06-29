$('.submit').on('click', async (event) => {
  event.preventDefault();

  // Here we grab the form elements
  const newReservation = {
    customerName: $('#reserve-name').val().trim(),
    phoneNumber: $('#reserve-phone').val().trim(),
    customerEmail: $('#reserve-email').val().trim(),
    customerID: $('#reserve-unique-id').val().trim(),
  };

  const data = await $.post('/api/tables', newReservation);

  if (data[0]) {
    alert('Yay! You are officially booked!'); // eslint-disable-line
  } else {
    alert('Sorry you are on the wait list'); // eslint-disable-line
  }

  // Clear the form when submitting
  $('#reserve-name').val('');
  $('#reserve-phone').val('');
  $('#reserve-email').val('');
  $('#reserve-unique-id').val('');
});
