$(document).ready(() => {
  console.log("loading");

  const $characterSearchForm = $("#character-search-form");

  $characterSearchForm.submit(e => {
    e.preventDefault();
    const data = $(e.target).serialize();
    console.log("data:", data);
    $.ajax({
      method: "get",
      dataType: "json",
      url: `/characters/character/search/${data}`,
      success: function(response) {
        console.log("ajax API", response);
        const $characterSearchResult = $("#character-search-result");
        $characterSearchResult.children().remove();
        // $characterSearchResult.append($("<p>", { text: data.name }));
      }
    });
  });
});
