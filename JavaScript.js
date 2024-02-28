let data2;
fetch("https://sudhanshu1313.github.io/shoppingjson/data.json")
  .then((response) => response.json())
  .then((AllData) => {
    // console.log(AllData);
    data2 = AllData;
    let data = AllData.map((value, index) => {
      return `
        <div onclick="show(${index})">
            <img
                src=${value.imgurl}
                alt="Image"
            />
        </div>

        `;
    });

    document.getElementById("Small-Images").innerHTML = data;
  })
  .catch((error) => console.error("Unable to fetch Data:", error));

function show(index) {
  // I have gives index from upper map function..!
  // alert(index);
  // I ahve put data2 in new variavble and asined all images to Big-images section
  const imageUrl = data2[index].imgurl;
  document.getElementById("Big-Images").src = imageUrl;
}
