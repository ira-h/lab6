$.ajax({
    url: "https://some.con",
    type: "POST",

    contentType: "application/json",
    data: JSON.stringify(dataToSend),
    success: () => {
      //alert(1);
    },
    error: () => {
      //alert(0);
    }
})
