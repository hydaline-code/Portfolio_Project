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
    description : 'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
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
    description : 'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  
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
  description : 'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  
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
    description : 'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  
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
    description : 'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  
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

    description : 'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  
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

 

projectsupdate.forEach((project) => {
  const project_1 =document.querySelector('#updates');
  const div_img = document.createElement('div');
  const sub_div_2 = document.createElement('div');
  const projectTitle = document.createElement('h2');
   const uL = document.createElement('ul');
  

    sub_div_2.classList.add('details-1');
    div_img.classList.add('detail-img');

  sub_div_2.appendChild(projectTitle);
  projectTitle.classList.add('project-title');
  project_1 .appendChild(div_img);
  project_1 .appendChild(sub_div_2);
  sub_div_2.appendChild(uL);
   
  uL.classList.add('refactorlist');
 

 
   projectTitle.textContent = project.name;
   
  
  project.technologies.forEach((tech) => {
    const tagLi = document.createElement('li');
    uL.appendChild(tagLi);
    tagLi.textContent = tech.name; 
  });
  
  const img_div = document.createElement('img');
  img_div.src=project.img;
  img_div.classList.add('img_dynamic')
  div_img.appendChild(img_div);

  
  

    const btn = document.createElement('button');
    sub_div_2.appendChild(btn);
     btn.classList.add('btn-pro_updat');
    btn.textContent = 'See this project  \u2192';

    const popupwindow = document.querySelector('.popup_window');

    btn.addEventListener('click', () => {

      popupwindow.style.display='block';
     const pop_heading = document.querySelector('.update_heading');
    pop_heading.textContent = project.name;
    

    const modal_image = document.querySelector('.modall-img');
    const img_modal = document.createElement('img');
    modal_image.appendChild(img_modal);
    img_modal.classList.add('modal-img');
    img_modal.src='dynamicpng/Group 109.png';

    const modal_para = document.querySelector('.modal-p');
    const para = document.createElement('p');
    modal_para.appendChild(para);
    para.textContent= project.description;


  project.technologies.forEach((tech) => {
    const modal_lang = document.querySelector('.modal-lang ul');
    const lang_li = document.createElement('li');
    modal_lang.appendChild(lang_li);
    const Li_a= document.createElement('a');
    lang_li.appendChild(Li_a);
        Li_a.textContent = tech.name;
      });
    });

    const close2 = document.querySelector('.popup-close');
    const modal_lang = document.querySelector('.modal-lang ul');
    close2.addEventListener('click', () => {
      popupwindow.style.display='none';

      const remove_Li = document.querySelector('.modal-lang ul li ');
      if ( remove_Li !== null) modal_lang.removeChild(remove_Li);

      const modal_image = document.querySelector('.modall-img');
      const remove_img = document.querySelector('.modall-img img');
      if ( remove_img !== null) modal_image.removeChild(remove_img);

    });

  
  });

   
const desktoptech = [ 'HTML/CSS',  ' Ruby on Rails', 'JavaScript'];
  const project_2 =document.querySelector('.project-1_name');
  const project_22 =document.querySelector('.project-2_name');
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');
  project_2.appendChild(btn1);
  project_22.appendChild(btn2);
    btn1.classList.add('btn-pro_updat');
    btn2.classList.add('btn-pro_updat');
   btn1.textContent = 'See this project  \u2192';
   btn2.textContent = 'See this project  \u2192';

   btn1.addEventListener('click', popdesktop);
   btn2.addEventListener('click', popdesktop);

   

   const modal_image = document.querySelector('.modall-img');
   const remove_img = document.querySelector('.modall-img img');
   if ( remove_img !== null) modal_image.removeChild(remove_img);

   function popdesktop() {
  const popupwindow = document.querySelector('.popup_window');

      popupwindow.style.display='block';
     const pop_heading = document.querySelector('.update_heading');
     pop_heading.textContent = 'Project-desktop name goes here'
   

    const modal_image = document.querySelector('.modall-img');
    const img_modal = document.createElement('img');
    modal_image.appendChild(img_modal);
    img_modal.classList.add('modal-img');
    img_modal.src='dynamicpng/Group 105.png';

    const modal_para = document.querySelector('.modal-p');
    const para = document.createElement('p');
    modal_para.appendChild(para);
    const para1 = document.createElement('p');
    para.classList.add('para-desk');
    para1.classList.add('para-desk1');
    modal_para.appendChild(para1);
    para.textContent= 'Lorem ipsum dolor sit amet,  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis';
    para1.textContent= 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi';

    const divdesktop = document.querySelector('.divdestop');
    const smallbtn = document.createElement('button');
    const smallbtn1 = document.createElement('button');
    divdesktop.appendChild(smallbtn);
    divdesktop.appendChild(smallbtn1);
    smallbtn.classList.add('arrow');
    smallbtn1.classList.add('arrow1');
    smallbtn.textContent=' \u2190 Previous project';
    smallbtn1.textContent='Next project  \u2192';


      for (let i = 0; i < desktoptech.length; i += 1) {
        const modal_lang = document.querySelector('.modal-lang ul');
        const lang_li = document.createElement('li');
        modal_lang.appendChild(lang_li);
        const Li_a= document.createElement('a');
        lang_li.appendChild(Li_a);
         Li_a.textContent=desktoptech[i]
      }
      
    }
 
    const close2 = document.querySelector('.popup-close');
    const modal_lang = document.querySelector('.modal-lang ul');

    close2.addEventListener('click', () => {
      const popupwindow = document.querySelector('.popup_window');
      popupwindow.style.display='none';

      const modal_para = document.querySelector('.modal-p ');
      const remove_p = document.querySelector('.para-desk');
      if ( remove_p !== null) modal_para.removeChild(remove_p);
      const remove_p1 = document.querySelector('.para-desk1');
      if ( remove_p1 !== null) modal_para.removeChild(remove_p1);

      const divdesktop = document.querySelector('.divdestop');
      const remove_arr = document.querySelector('.arrow1');
      if (  remove_arr !== null) divdesktop.removeChild( remove_arr);
      const remove_arr1 = document.querySelector('.arrow');
      if ( remove_arr1 !== null) divdesktop.removeChild(remove_arr1);
    
    });
  
 
 
  
  
 
