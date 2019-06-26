const runTableQuery = async () => {
  const tableData = await $.get('/api/tables');
  const tableList = $('#tableList');

  // Loop through and display each of the customers
  tableData.forEach((table, i) => {
    // Then display the fields in the HTML (Section Name, Date, URL)
    const listItem = $("<li class='list-group-item mt-4'>");

    listItem.append(
      $('<h2>').text(`Table #${i + 1}`),
      $('<hr>'),
      $('<h2>').text(`ID: ${table.customerID}`),
      $('<h2>').text(`Name: ${table.customerName}`),
      $('<h2>').text(`Email: ${table.customerEmail}`),
      $('<h2>').text(`Phone: ${table.phoneNumber}`),
    );

    tableList.append(listItem);
  });
};

const runWaitListQuery = async () => {
  const waitData = await $.get('/api/waitlist');
  const waitList = $('#waitList');

  // Loop through and display each of the customers
  waitData.forEach((wait, i) => {
    // Then display the fields in the HTML (Section Name, Date, URL)
    const listItem = $("<li class='list-group-item mt-4'>");

    listItem.append(
      $('<h2>').text(`Table #${i + 1}`),
      $('<hr>'),
      $('<h2>').text(`ID: ${wait.customerID}`),
      $('<h2>').text(`Name: ${wait.customerName}`),
      $('<h2>').text(`Email: ${wait.customerEmail}`),
      $('<h2>').text(`Phone: ${wait.phoneNumber}`),
    );

    waitList.append(listItem);
  });
};

const clearTable = async () => {
  // Clear the tables on the server and then empty the elements on the client
  await $.post('/api/clear');
  $('#waitList').empty();
  $('#tableList').empty();
};

$('#clear').on('click', clearTable);


// Run Queries!
// ==========================================
runTableQuery();
runWaitListQuery();
