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
    name : 'Project-1 name goes here',
    description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    img: 'dynamicpng/Rectangle 21.png',
    technologies : [
    {
      name : 'HTML/CSS',
    },

    {
      name : 'Ruby on Rails',
    },

    {
      name : 'JavaScript'
    },

  ],

  },
  {
    name : 'Project-2 name goes here',
    description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    img: 'dynamicpng/Rectangle 21 (1).png',
    technologies : [
    {
      name : 'HTML/CSS',
    },

    {
      name : 'Ruby on Rails',
    },

    {
      name : 'JavaScript'
    },

  ],

  },
  
{
  name : 'Project-3 name goes here',
    description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    img: 'dynamicpng/Rectangle 21 (2).png',
    technologies : [
    {
      name : 'HTML/CSS',
    },

    {
      name : 'Ruby on Rails',
    },

    {
      name : 'JavaScript'
    },

  ],

  },
  {
    name : 'Project-4 name goes here',
    description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    img: 'dynamicpng/Rectangle 21 (3).png',
    technologies : [
    {
      name : 'HTML/CSS',
    },

    {
      name : 'Ruby on Rails',
    },

    {
      name : 'JavaScript'
    },

  ],

  },
  {
    name : 'Project-5 name goes here',
    description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    img: 'dynamicpng/Rectangle 21 (4).png',
    technologies : [
    {
      name : 'HTML/CSS',
    },

    {
      name : 'Ruby on Rails',
    },

    {
      name : 'JavaScript'
    },

  ],

  },
  {
    name : 'Project-6 name goes here',
    description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    img: 'dynamicpng/Rectangle 21 (5).png',
    technologies : [
    {
      name : 'HTML/CSS',
    },

    {
      name : ' Ruby on Rails',
    },

    {
      name : 'JavaScript'
    },

  ],

  },
  
]



// creating dynamic project details
 projectsupdate.forEach((project) => {
  const project_1 =document.querySelector('#updates');
  // filling the project details 
  const div_img = document.createElement('div');
  const sub_div_2 = document.createElement('div');
  //
  const projectTitle = document.createElement('h2');
  sub_div_2.appendChild(projectTitle);
  projectTitle.classList.add('project-title');
  projectTitle.textContent = projectsupdate.name;
  const uL = document.createElement('ul');
  // place it in the html
  project_1 .appendChild(div_img);
  project_1 .appendChild(sub_div_2);
  sub_div_2.appendChild(uL);
  //populating the unorderedlist
  //const uLli = document.createElement('li');
  //uL.appendChild(uLli);
 
  // button created
  const  btn = document.createElement('button')
   sub_div_2.appendChild(btn);

  sub_div_2.classList.add('details-1')
  div_img.classList.add('detail-img');
  uL.classList.add('refactorlist')
  btn.classList.add('btn-pro_updat')
  // creating content for each part created 
    projectTitle.textContent = project.name;
  // creating content for ul
  project.technologies.forEach((tech) => {
    const tagLi = document.createElement('li');
    uL.appendChild(tagLi);
    tagLi.textContent = tech.name;
  });
  // content for button 
  const img_Btn = document.createElement('img');
  img_Btn.src='./svgfiles/Union (1).png';
  btn.appendChild(img_Btn);
  btn.textContent = 'See this project'
  // adding images 
  const img_div = document.createElement('img');
  img_div.src=project.img;
  img_div.classList.add('img_dynamic')
  div_img.appendChild(img_div);

   // creating the  button click
  const popupwindow = document.querySelector('.popup_window');
  
  btn.addEventListener('click', () => {
  const pop_heading = document.querySelector('.update_heading');
   pop_heading.textContent = project.name;
    popupwindow.style.display='block';
  })

  });
  
  
 
