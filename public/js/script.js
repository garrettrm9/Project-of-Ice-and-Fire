$(document).ready(() => {
  console.log("loading");

  const $characterSearchForm = $("#character-search-form");
  const $characterSearchName = $("#character-search-name");
  $characterSearchForm.submit(e => {
    e.preventDefault();
    const name = $characterSearchName.val();
    const id = e.target.getAttribute("categoryId");
    // console.log("data:", data);
    $.ajax({
      method: "get",
      dataType: "json",
      url: `/characters/${id}/search/${name}`,
      success: function(response) {
        // console.log("ajax API", response);
        const $characterSearchResult = $("#character-search-result");
        $characterSearchResult.children().remove();
        $characterSearchResult.append(
          $("<p>", {
            text: response.name,
            id: "character-name"
          })
        );
        console.log("response.name", response.name);
      }
    });
  });

  const $addCharacterButton = $("#add-character-button");
  $addCharacterButton.click(e => {
    e.preventDefault();
    const $characterName = $("#character-name")[0].innerHTML;
    const id = e.target.getAttribute("categoryId");
    console.log("addCharacterButton", id);
    const data = $characterName;
    console.log("addCharacterButton", data);
    $.ajax({
      method: "post",
      url: `/characters/${id}`,
      data: { name: data },
      success: data => {
        window.location.href = "/categories";
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
      dataType: "json",
      success: function(response) {
        // console.log("success!", response);
        window.location.href = "/categories";
      }
    });
  });

  const $deleteCategoryButton = $(".delete-category-button");
  $deleteCategoryButton.click(e => {
    e.preventDefault();
    const categoryId = e.target.getAttribute("categoryId");
    $.ajax({
      method: "delete",
      url: `/categories/${categoryId}`,
      success: data => {
        window.location.href = "/categories";
      }
    });
  });

  const $editCategoryForm = $(".edit-category-form");
  const $editCategoryName = $(".edit-category-name");
  $editCategoryForm.submit(e => {
    e.preventDefault();
    const categoryId = e.target.getAttribute("categoryId");
    const data = $editCategoryName.val();
    // console.log("categoryId", categoryId);
    // console.log("data", data);
    $.ajax({
      method: "put",
      url: `/categories/${categoryId}`,
      data: { name: data },
      dataType: "json",
      success: response => {
        // console.log("successful edit", response);
        window.location.href = "/categories";
      }
    });
  });

  // const $time = $("#time");
  // const currentTime = ;
  // console.log("currentTime", currentTime);
});
