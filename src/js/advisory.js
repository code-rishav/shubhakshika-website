'use strict';

class Carousel {
  constructor(el) {
    this.el = el;
    this.carouselOptions = ['previous', 'next'];
    this.carouselData = [
      {
        'id': '1',
        'src': 'assets/images/team/Picture1.png',
        'name': 'Mr. Ankit Goel',
        'info':'The story of a youngman, Harichand Aggarwal, chasing his dreams with  courage and grit, is  the saga  of the rise of Insecticides India Limited  to India’s leading crops protection solution provider. Over the years, IIL’s focus has been to bring the latest technology products within the reach of even the small and marginal farmers. Shri Aggarwal’s desire to make a difference in peoples lives has added a new dimension to his personality. He leaves a positive imprint in the lives of people around him with his passionate willingness  to support social causes. Shri Harichand Aggarwal has been providing support and succour to various children homes, schools and other non profit organisations. His continuous financial assistance to shubhakshika Educational Society has enabled the NGO to fulfill its obligations to the disadvantaged children',
      },
      {
        'id': '2',
        'src': 'assets/images/team/Picture2.png',
        'name': 'Prof. Neelima Gupta',
        'info':'Shri Om Prakash Aggarwal is the Founder & Group Chairman of “The Indogulf Group”, a 28-year old growing company providing 3600 support mechanism to Farmers. With a vast experience of more than 50 years in the Agrochemical Industry, he has transformed the Indogulf Group into a leading agrochemical player of India. He is an MBA, and a commerce graduate from Sri Ram College of Commerce, University of Delhi. '
      },
      {
        'id': '3',
        'src': 'assets/images/team/Picture3.png',
        'name': 'Mr. Ravi Dadhich',
        'info':'Dr Gyan Aggarwal, the chairman of Rajdeep Agri Products Pvt Ltd, a pioneer establishment for Designing, Fabrication and Construction of Green Houses, is an ardent social activist. He was awarded an honorary doctorate degree by Bharath Virtual University in 2021 for his avid philanthropic activities which have benefited many individuals and charitable organizations. He also holds the post of the chairman of Agrasen International Hospital and that of vice chairman of Agrasen Institute of Technology. It’s our privilege that he supports Shubhakshika Educational Society as it’s patron',
      },
      {
        'id': '4',
        'src': 'assets/images/team/Picture4.png',
        'name': 'Mr. Rajat Prakash ',
        'info':'Mr. Ankit Goel is the founder and MD of the Space World Group, that has several ventures in the sectors of Data Centre, Chemicals, Optical Fiber, equipment manufacturing etc. Mr. Goel’s vision of providing ubiquitous connectivity to people started with him setting up his first venture in 2007, right after his graduation. Owing to his passion and knack of identifying opportunities, he has been recognized as the ‘Most Promising Business Leaders of Asia’ by Economic Times consecutively for 3 years from 2020-22, ‘Entrepreneur of the year’ by CMO ASIA 2022, and ‘Business Icons of India 2022’ by Zee Business',
      },
      {
        'id': '5',
        'src': 'assets/images/team/Picture5.png',
        'name': 'Mr. Harichand Aggarwal',
        'info':"Prof. Neelima Gupta is a Professor in the Department of Computer Science, University of Delhi. She has been associated with the department since March 2002, prior to which she worked as an Assistant Professor with Hansraj College, University of Delhi and as a software engineer with HCL Technologies. She has served as the Head of the Department of Computer Science, University of Delhi for two terms, and also briefly served as the Dean of the Faculty of Mathematical Sciences, University of Delhi. She did her Doctorate in Computer Science, M.Tech. in Computer Applications and M.Sc. in Mathematics (all from IIT Delhi), and her Bachelor's degree in Mathematics Honors from Hindu College, University of Delhi"
      },
      {
        'id': '6',
        'src': 'assets/images/team/Picture6.png',
        'name': 'Mr. Shri Om Prakash ',
        'info':"Mr. Ravi Dadhich is a Career Civil Servant. He had joined Civil Services as a DANICS Officer in 1996 batch and started his career as Sub Divisional Magistrate, Preet Vihar, Delhi. He has held various positions as OSD to VC DDA, Director (Estate), NDMC and Additional Commissioner in Food and Supplies Department of Delhi Govt. Mr. Dadhich has also served as Director (Panchayat) and Director (Tourism) and CEO, District Panchayat in remote island territories of Lakshadweep between 2010 and 2012.  He has been Additional Secretary to the Chief Minister, Delhi and Secretary to the Minister (Transport), Delhi Govt. during 2015-16 and also handled the work of General Manager, Delhi Tourism. He has worked as Member (Administration/Finance) and CVO in Delhi Urban Shelter Improvement Board (DUSIB). During 2019-21, he is was Registrar, Guru Gobind Singh Indraprastha University, New Delhi and Special Secretary (Finance), Govt. of Delhi. Presently he is CEO, Pharmaceutical and Medical Devices Bureau of India. Also, the implementation of Prime Minister Jan Aushadhi Pariyojna, a flagship scheme of providing affordable generic medicines for all, is being handled by him",
      },
      {
        'id': '7',
        'src': 'assets/images/team/Picture7.png',
        'name': 'Mr. Gyan Aggarwal',
        'info':"Mr. Rajat Prakash is an IT professional with over 33 years of experience in multinational companies. He completed B.Tech. from IIT, Delhi and MBA from FMS, Delhi University. His global experience in sales, marketing, operations, client management, M&A and setting up of an organization in ICIM, EDS and Xerox, equips him to bring an end to end view of an IT ecosystem. He also brings in wealth of experience in the NGO environment. This includes leadership role in Xerox IT Services (India) as head of CSR for providing support to organizations that aligned with causes related to the female population. In addition, he was also the lead from EDS(India) Pvt. Limited for their Global Volunteer day efforts in India",
      }
    ];
    
    this.carouselInView = [1, 2, 3, 4, 5];
    this.carouselContainer;
    this.carouselPlayState;
  }

  mounted() {
    this.setupCarousel();
  }
  

  // Build carousel html
  setupCarousel() {
    const container = document.createElement('div');
    const controls = document.createElement('div');
    const person = document.createElement('div');


    // Add container for carousel items and controls
    this.el.append(container, controls,person);
    container.className = 'carousel__container';
    controls.className = 'carousel__controls';

    // Take dataset array and append items to container
    this.carouselData.forEach((item, index) => {
      const carouselItem = item.src ? document.createElement('img') : document.createElement('div');

      container.append(carouselItem);
      
      // Add item attributes
      carouselItem.className = `carousel__item carousel__item-${index + 1}`;
      carouselItem.src = item.src;
      carouselItem.setAttribute('loading', 'lazy');
      // Used to keep track of carousel items, infinite items possible in carousel however min 5 items required
      carouselItem.setAttribute('data-index', `${index + 1}`);
      
    });

    

    this.carouselOptions.forEach((option) => {
      const btn = document.createElement('button');
      const axSpan = document.createElement('span');

      // Add accessibilty spans to button
      axSpan.innerText = option;
      axSpan.className = 'axss-hidden';
      btn.append(axSpan);

      // Add button attributes
      btn.className = `carousel__control carousel__control-${option}`;
      btn.setAttribute('data-name', option);

      // Add carousel control options
      controls.append(btn);
    });


    // After rendering carousel to our DOM, setup carousel controls' event listeners
    this.setControls([...controls.children]);

    // Set container property
    this.carouselContainer = container;
    this.play();
   
  }

  setControls(controls) {
    controls.forEach(control => {
      control.onclick = (event) => {
        event.preventDefault();

        // Manage control actions, update our carousel data first then with a callback update our DOM
        this.controlManager(control.dataset.name);
      };
    });
  }

  controlManager(control) {
    if (control === 'previous') return this.previous();
    if (control === 'next') return this.next();

    return;
  }

  play(){
    const startPlaying = () => this.next();
    this.carouselPlayState = setInterval(startPlaying, 2000);
  }
  stop(){
    clearTimeout(this.carouselPlayState);
  }

  previous() {
    // Update order of items in data array to be shown in carousel
    this.carouselData.unshift(this.carouselData.pop());

    // Push the first item to the end of the array so that the previous item is front and center
    this.carouselInView.push(this.carouselInView.shift());

    // Update the css class for each carousel item in view
    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[index].className = `carousel__item carousel__item-${item}`;
    });

    // Using the first 5 items in data array update content of carousel items in view
    this.carouselData.slice(0, 7).forEach((data, index) => {
      document.querySelector(`.carousel__item-${index + 1}`).src = data.src;
    });
  }

  next() {
    // Update order of items in data array to be shown in carousel
    this.carouselData.push(this.carouselData.shift());

    // Take the last item and add it to the beginning of the array so that the next item is front and center
    this.carouselInView.unshift(this.carouselInView.pop());

    // Update the css class for each carousel item in view
    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[index].className = `carousel__item carousel__item-${item}`;
    });

    // Using the first 5 items in data array update content of carousel items in view
    this.carouselData.slice(0, 7).forEach((data, index) => {
      document.querySelector(`.carousel__item-${index + 1}`).src = data.src;
      document.querySelector('.name').textContent = data.name;
      this.modal_view(index+1,data.info);
    });
  }

  



  modal_view(index,data){
    var modal = document.getElementById('myModal');
    var figure = document.querySelector(`.carousel__item-${index}`);
    var span = document.getElementsByClassName("close")[0];
    var about = document.getElementById('information');

    figure.onclick = function(){
      modal.style.display = "block";
      about.textContent = data;
      exampleCarousel.stop();
    }

    span.onclick = function() {
      modal.style.display = "none";
      exampleCarousel.play();
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        exampleCarousel.play();
      }
    
    }
  }
}

// Refers to the carousel root element you want to target, use specific class selectors if using multiple carousels
const el = document.querySelector('.carousel');
// Create a new carousel object
const exampleCarousel = new Carousel(el);
// Setup carousel and methods
exampleCarousel.mounted();
