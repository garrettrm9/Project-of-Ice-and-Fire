$(document).ready(() => {
  console.log("loading");

  const $characterSearchForm = $("#character-search-form");
  const $characterSearchName = $("#character-search-name");
  $characterSearchForm.submit(e => {
    e.preventDefault();
    const data = $characterSearchName.val();
    console.log("data:", data);
    $.ajax({
      method: "get",
      dataType: "json",
      url: `/characters/search/${data}`,
      success: function(response) {
        console.log("ajax API", response);
        const $characterSearchResult = $("#character-search-result");
        $characterSearchResult.children().remove();
        $characterSearchResult.append(
          $("<p>", { text: "Name: " + response.name })
        );
        $characterSearchResult.append(
          $("<p>", { text: "Gender: " + response.gender })
        );
      }
    });
  });

  const $newCategoryForm = $("#new-category-form");
  const $newCategoryName = $("#new-category-name");
  $newCategoryForm.submit(e => {
    e.preventDefault();
    const data = $newCategoryName.val();
    // console.log("data:", data);
    $.ajax({
      method: "post",
      url: "/categories",
      data: { name: data },
      // dataType: "json",
      success: function(response) {
        console.log("success!", response);
        window.location.href = "/categories";
      }
    });
  });
});
