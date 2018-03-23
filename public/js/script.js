$(document).ready(() => {
  console.log("loading");

  const $characterSearchForm = $("#character-search-form");
  const $characterSearchName = $("#character-search-name");
  $characterSearchForm.submit(e => {
    e.preventDefault();
    const data = $characterSearchName.val();
    // console.log("data:", data);
    $.ajax({
      method: "get",
      dataType: "json",
      url: `/characters/search/${data}`,
      success: function(response) {
        console.log("ajax API", response);
        const $characterSearchResult = $("#character-search-result");
        $characterSearchResult.children().remove();
        $characterSearchResult.append($("<p>", { text: response.name }));
      }
    });
  });
});
