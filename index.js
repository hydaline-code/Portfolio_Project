const hideimg = document.querySelector('.imgmenu');
const hamburger = document.querySelector('.mobile--nav');
const close1 = document.querySelector('.menu-close');
const item = document.querySelectorAll('.items');
const newmenu = document.querySelector('#Menu');
const view1 = document.querySelector('.whoiam');
const showimg = document.querySelector('.imgmenu1');
const footimg = document.querySelector('.Menu-foot');

hamburger.addEventListener('click', () => {
  hideimg.style.display = 'none';
  showimg.style.display = 'block';
  newmenu.style.display = 'block';
  view1.style.display = 'none';
  hamburger.style.display = 'none';
  close1.style.display = 'block';
  footimg.style.display = 'block';
});

close1.addEventListener('click', () => {
  view1.style.display = 'block';
  hamburger.style.display = 'block';
  hideimg.style.display = 'block';
  showimg.style.display = 'none';
  close1.style.display = 'none';
  newmenu.style.display = 'none';
});

for (let i = 0; i < item.length; i += 1) {
  item[i].addEventListener('click', () => {
    newmenu.style.display = 'none';
    view1.style.display = 'block';
  });
}
