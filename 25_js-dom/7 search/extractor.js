export default (document) => {
  const title = document.querySelector("h1").innerText;
  const description = document.querySelector(".description").innerText;
  const items = Array.from(document.querySelectorAll(".links > div")).map(
    (e) => {
      const title = e.querySelector("h2").innerText;
      const description = e.querySelector("p").innerText;
      return { title, description };
    }
  );
  return { title, description, items };
};

// <div class="links">
//   <div>
//     <h2><a href="#">Article Name 1</a></h2>
//     <p>Article Description 1</p>
//   </div>
//   <div>
//     <h2><a href="#">Article Name 2</a></h2>
//     <p>Article Description 2</p>
//   </div>
// </div>

// {
//   title: 'Category Name',
//   description: 'Category Description',
//   items: [
//     { title: 'Article Name 1', description: 'Article Description 1' },
//     { title: 'Article Name 2', description: 'Article Description 2' }
//   ]
// }
