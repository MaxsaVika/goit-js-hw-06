const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

const makeGalleryImg = (images) => {
  return images.reduce(
    (acc, { url, alt }) =>
      acc +
      `<li><img src ='${url}' alt = "${alt}" style = 'display: block;
      width: 250px; height: 160px'></li>`,
    ""
  );
};

const allImages = makeGalleryImg(images);
galleryList.insertAdjacentHTML("beforeend", allImages);

galleryList.setAttribute(
  "style",
  "display: flex; justify-content: center; gap: 30px; list-style: none"
);
