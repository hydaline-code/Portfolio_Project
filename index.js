const hideimg = document.querySelector('.imgmenu');
const hamburger = document.querySelector('.menu-open');
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

function menuclose() {
  view1.style.display = 'block';
  hamburger.style.display = 'block';
  hideimg.style.display = 'block';
  showimg.style.display = 'none';
  close1.style.display = 'none';
  newmenu.style.display = 'none';
}

close1.addEventListener('click', menuclose);

for (let i = 0; i < item.length; i += 1) {
  item[i].addEventListener('click', menuclose);
}

// create the  dynamic projects update
const projectsupdate = [
  {
    name: 'Project-1 name goes here',
    description:
      'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    img: 'dynamicpng/Rectangle 21.png',
    technologies: [
      {
        name: 'HTML/CSS',
      },

      {
        name: 'Ruby on Rails',
      },

      {
        name: 'JavaScript',
      },
    ],
  },
  {
    name: 'Project-2 name goes here',
    description:
      'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

    img: 'dynamicpng/Rectangle 21 (1).png',
    technologies: [
      {
        name: 'HTML/CSS',
      },

      {
        name: 'Ruby on Rails',
      },

      {
        name: 'JavaScript',
      },
    ],
  },

  {
    name: 'Project-3 name goes here',
    description:
      'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',

    img: 'dynamicpng/Rectangle 21 (2).png',
    technologies: [
      {
        name: 'HTML/CSS',
      },

      {
        name: 'Ruby on Rails',
      },

      {
        name: 'JavaScript',
      },
    ],
  },
  {
    name: 'Project-4 name goes here',
    description:
      'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

    img: 'dynamicpng/Rectangle 21 (3).png',
    technologies: [
      {
        name: 'HTML/CSS',
      },

      {
        name: 'Ruby on Rails',
      },

      {
        name: 'JavaScript',
      },
    ],
  },
  {
    name: 'Project-5 name goes here',
    description:
      'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

    img: 'dynamicpng/Rectangle 21 (4).png',
    technologies: [
      {
        name: 'HTML/CSS',
      },

      {
        name: 'Ruby on Rails',
      },

      {
        name: 'JavaScript',
      },
    ],
  },
  {
    name: 'Project-6 name goes here',

    description:
      'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

    img: 'dynamicpng/Rectangle 21 (5).png',
    technologies: [
      {
        name: 'HTML/CSS',
      },

      {
        name: ' Ruby on Rails',
      },

      {
        name: 'JavaScript',
      },
    ],
  },
];

projectsupdate.forEach((project) => {
  const project1 = document.querySelector('#updates');
  const divimg = document.createElement('div');
  const subdiv2 = document.createElement('div');
  const projectTitle = document.createElement('h2');
  const uL = document.createElement('ul');

  subdiv2.classList.add('details-1');
  divimg.classList.add('detail-img');

  subdiv2.appendChild(projectTitle);
  projectTitle.classList.add('project-title');
  project1.appendChild(divimg);
  project1.appendChild(subdiv2);
  subdiv2.appendChild(uL);

  uL.classList.add('refactorlist');

  projectTitle.textContent = project.name;

  project.technologies.forEach((tech) => {
    const tagLi = document.createElement('li');
    uL.appendChild(tagLi);
    tagLi.textContent = tech.name;
  });

  const imgdiv = document.createElement('img');
  imgdiv.src = project.img;
  imgdiv.classList.add('imgdynamic');
  divimg.appendChild(imgdiv);

  const btn = document.createElement('button');
  subdiv2.appendChild(btn);
  btn.classList.add('btn-pro_updat');
  btn.textContent = 'See this project  \u2192';

  const popupwindow = document.querySelector('.popup_window');

  btn.addEventListener('click', () => {
    popupwindow.style.display = 'block';
    const popheading = document.querySelector('.update_heading');
    popheading.textContent = project.name;

    const modalimage = document.querySelector('.modall-img');
    const imgmodal = document.createElement('img');
    modalimage.appendChild(imgmodal);
    imgmodal.classList.add('modal-img');
    imgmodal.src = 'dynamicpng/Group 109.png';

    const modalpara = document.querySelector('.modal-p');
    const para = document.createElement('p');
    modalpara.appendChild(para);
    para.textContent = project.description;

    project.technologies.forEach((tech) => {
      const modallang = document.querySelector('.modal-lang ul');
      const langli = document.createElement('li');
      modallang.appendChild(langli);
      const Lia = document.createElement('a');
      langli.appendChild(Lia);
      Lia.textContent = tech.name;
    });
  });

  const close2 = document.querySelector('.popup-close');
  const modallang = document.querySelector('.modal-lang ul');
  close2.addEventListener('click', () => {
    popupwindow.style.display = 'none';

    const removeLi = document.querySelector('.modal-lang ul li ');
    if (removeLi !== null) modallang.removeChild(removeLi);

    const modalimage = document.querySelector('.modall-img');
    const removeimg = document.querySelector('.modall-img img');
    if (removeimg !== null) modalimage.removeChild(removeimg);
  });
});

const desktoptech = ['HTML/CSS', ' Ruby on Rails', 'JavaScript'];
const project2 = document.querySelector('.project-1_name');
const project22 = document.querySelector('.project-2_name');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
project2.appendChild(btn1);
project22.appendChild(btn2);
btn1.classList.add('btn-pro_updat');
btn2.classList.add('btn-pro_updat');
btn1.textContent = 'See this project  \u2192';
btn2.textContent = 'See this project  \u2192';

const modalimage = document.querySelector('.modall-img');
const removeimg = document.querySelector('.modall-img img');
if (removeimg !== null) modalimage.removeChild(removeimg);

function popdesktop() {
  const popupwindow = document.querySelector('.popup_window');

  popupwindow.style.display = 'block';
  const popheading = document.querySelector('.update_heading');
  popheading.textContent = 'Project-desktop name goes here';

  const modalimage = document.querySelector('.modall-img');
  const imgmodal = document.createElement('img');
  modalimage.appendChild(imgmodal);
  imgmodal.classList.add('modal-img');
  imgmodal.src = 'dynamicpng/Group 105.png';

  const modalpara = document.querySelector('.modal-p');
  const para = document.createElement('p');
  modalpara.appendChild(para);
  const para1 = document.createElement('p');
  para.classList.add('para-desk');
  para1.classList.add('para-desk1');
  modalpara.appendChild(para1);
  para.textContent = 'Lorem ipsum dolor sit amet,  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis';
  para1.textContent = 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi';

  const divdesktop = document.querySelector('.divdestop');
  const smallbtn = document.createElement('button');
  const smallbtn1 = document.createElement('button');
  divdesktop.appendChild(smallbtn);
  divdesktop.appendChild(smallbtn1);
  smallbtn.classList.add('arrow');
  smallbtn1.classList.add('arrow1');
  smallbtn.textContent = ' \u2190 Previous project';
  smallbtn1.textContent = 'Next project  \u2192';

  for (let i = 0; i < desktoptech.length; i += 1) {
    const modallang = document.querySelector('.modal-lang ul');
    const langli = document.createElement('li');
    modallang.appendChild(langli);
    const Lia = document.createElement('a');
    langli.appendChild(Lia);
    Lia.textContent = desktoptech[i];
  }
}

btn1.addEventListener('click', popdesktop);
btn2.addEventListener('click', popdesktop);
const close2 = document.querySelector('.popup-close');
// const modal-lang = document.querySelector('.modal-lang ul');

close2.addEventListener('click', () => {
  const popupwindow = document.querySelector('.popup_window');
  popupwindow.style.display = 'none';

  const modalpara = document.querySelector('.modal-p ');
  const removep = document.querySelector('.para-desk');
  if (removep !== null) modalpara.removeChild(removep);
  const removep1 = document.querySelector('.para-desk1');
  if (removep1 !== null) modalpara.removeChild(removep1);

  const divdesktop = document.querySelector('.divdestop');
  const removearr = document.querySelector('.arrow1');
  if (removearr !== null) {
    divdesktop.removeChild(removearr);
  }
  const removearr1 = document.querySelector('.arrow');
  if (removearr1 !== null) {
    divdesktop.removeChild(removearr1);
  }
});

  / FORM VALIDATION-------------------
const form = document.getElementById('getintouch');
const error = document.getElementById('error');
const { email } = form.elements;

function checkUppercase(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)) {
      return true;
    }
  }
  return false;
}

email.addEventListener('click', () => {
  error.classList.remove('active');
  email.classList.remove('active');
});

form.addEventListener('submit', (event) => {
  const emailValue = email.value;
  if (checkUppercase(emailValue)) {
    event.preventDefault();
    error.innerHTML = 'please provide a valid email in format: email@email.com';
    error.classList.add('active');
    email.classList.add('active');
  } else {
    form.submit();
  }
});

// local storage .........
const contactForm = document.querySelector('.form');
const contactEmailField = document.getElementById('email');
const contactUsernameField = document.getElementById('name');
const contactMessageField = document.getElementById('textarea');

contactForm.addEventListener('input', () => {
  const username = contactUsernameField.value;
  const email = contactEmailField.value;
  const message = contactMessageField.value;
  localStorage.setItem('contact-form', JSON.stringify({ username, email, message }));
});

window.addEventListener('load', () => {
  const isDataExist = JSON.parse(localStorage.getItem('contact-form'));

  if (!isDataExist) return;

  contactUsernameField.value = isDataExist.username;
  contactEmailField.value = isDataExist.email;
  contactMessageField.value = isDataExist.message;
});


