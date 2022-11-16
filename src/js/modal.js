// Get the modal
const modal = document.getElementById("our-projects__myModal");
const ourProjectsModalP = document.getElementById("our-projects__modal__p");
const ourProjectsModalH2 = document.getElementById("our-projects__modal__h2");

// Get the button that opens the modal
// var btn = document.getElementById("our-projects__myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("our-projects__close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function () {
// modal.style.display = "block";
// };

const ourProjectsHandler = id => {
    modal.style.display = "block";

    switch (id) {
        case 1:
            ourProjectsModalH2.textContent = "Education for all";
            ourProjectsModalP.textContent =
               "We believe that education is the foundation for leading a happy and fulfilled life. With this objective in mind we have been imparting value-creating education to needy children since 2001. We are happy to share that so far, we have provided basic education to more than 15,000 children with most of them inducted into formal education system after completing the bridge course. In 2006, we expanded the project to include orphans, beggars and other destitute children who were deprived of this opportunity. We also reached out to children in conflict with law in observations homes, and offered after-release back-up classes after their release or acquittal. We strive to tap the inherent potential of these children to bring about a positive change in their lives.";
            break;

        case 2:
            ourProjectsModalH2.textContent = "Vocational Training";
            ourProjectsModalP.textContent =
                "We have been imparting vocational training to make the beneficiaries self-reliant. Some of the popular skills that have been taught are Cookery, Textile Designing, Beauty Culture, Mobile Repair, Retail Management, Data-entry Computer Course, and Cutting and Tailoring (for women). We have also provided vocational training to women in Nari Niketan and children in Delhi-govt.-run children homes.";
            break;
        case 3:
            ourProjectsModalH2.textContent =
                "Open Shelter Home for Street Children";
            ourProjectsModalP.textContent =
                "Determined to make a difference in the lives of destitute children, we have set up an Open Shelter Home to provide them care, protection, and a healthy and happy environment. These children include beggars, rag- pickers, small vendors, orphaned, deserted, run-away and other vulnerable children. Besides giving them food, clothing, medical care and basic education, we also counsel them to bring about behavioural changes.";
            break;
        case 4:
            ourProjectsModalH2.textContent = "Girl Child Project";
            ourProjectsModalP.textContent =
                "Resonating with the national objective of 'Beti padhao beti bachao' campaign, we started the Girl Child Project in 2016. The programme aims at providing opportunities for education and employment to girls who have been treated as liabilities in their families and immediate surroundings. It is a matter of pleasure to report that the number of enrolment is increasing every year.";
            break;
        case 5:
            ourProjectsModalH2.textContent = "De-addiction Programme";
            ourProjectsModalP.textContent =
                "Observing that many of the boys in the Open Shelter Home were involved in substance abuse, we have initiated a project to wean children off this harmful habit. It is encouraging to see that many of these children give up addiction through love, care and activities that engage them at physical, mental and emotional levels.";
            break;
            case 'v1':
                ourProjectsModalH2.textContent =
                    "ARUN";
                ourProjectsModalP.textContent =
                    "Arun was found begging on the streets by the NGO. He had no dreams other than to beg for money and consume the leftover food that was given as aims. He was a very pleasant boy and wished to go to school like other boys and one day he was brought to Shubhakshika centre. ARN soon proved that he was a very intelligent and receptive boy. Despite his adverse circumstances , he had big dreams. It took him no time to give up begging. His parents too, agreed not to send him for begging. He was admitted to class V in MCD school and was provided regular coaching at the NGO centre. He passed class V from MCD school and was shifted to State school. ARN is now in class VIII. He has been regularly receiving support from Shubhakshika. ARN wants to be an engineer . Shubhakshika stands by him to make his desire come true.";
                  
                    break;
            case 'v2':
                ourProjectsModalH2.textContent =
                    "CHOTTU";
                ourProjectsModalP.textContent =
                    "Chottu was separated from his parents when he was a small boy. He stayed in Children Home for Boys , Alipur, Delhi for 8 years. He was considered a difficult boy who was rude and undisciplined. He was later transferred to Astha Kunj Rewari, Haryana, Home on 24-02-2015.  He was sent back to Delhi. Child Welfare Committee , Avantika, appreciating our sincere efforts for rehabilitation of wayward children , referred Chottu to Shubhakshika Open Shelter Home Initially Chottu was a belligerent boy who would break glasses or throw things at the slightest provocation by fellow children. The NGO staff made an earnest effort to find out the reason for the unsocial behaviour of the boy. After a few days, it was realised that  the boy was very lonely. He felt he had no one as his own and had no future. The NGO staff started a single point programme to make him feel an important member of Shubhakshika Parivar. He was involved in various activities. Chottu showed keen interest in cooking. He enjoyed cooking for other children in the Shelter Home. So, with the permission of CWC, he was apprenticed to a chat/ chole bhature shop where he was paid RS 2500p.m as stipend. The money was deposited in his Bank account. Chottu completed 18 years in May 2016. He had about 30,000 in his account. Chottu started working at restaurant in Badli,  earning for himself. His ambition is to start his own business. Shubhakshika wishes him the best.";
                break;
            case 'v3':
                ourProjectsModalH2.textContent =
                    "DILKHUSH";
                ourProjectsModalP.textContent =
                    "Dilkhush is a 14-year-old boy who is a resident of Sahibabad, Daulat Pur in Delhi. He was found as a smoker and school dropout in 2018, who was then provided clothes, food, hygiene and is now completing his education in 10th standard. In 2018 he’s very much addicted of smoking cigarettes/bidi & consumption of tobacco.This is because of his father as he was also a chain smoker and a alcoholic, even he passed away because of that His mother was not able to pay attention on him, as she has to earn her daily bread and butter We helped him to quit all these things as we involved him in other activities like study and sports It will take a year but he quit smoking completely";
                break;
            case 'v4':
                ourProjectsModalH2.textContent =
                    "RAUNAK";
                ourProjectsModalP.textContent =
                    "Raunak  an 8/9 year old boy was found begging at Badli station . The boy was smoking and eating tobacco. It took the NGO staff some time and lot of counselling to convince the parents to send the boy to the shelter home . Raunak was a quarrelsome boy and fought with other boys over small matters. The staff soon, found out  that the child liked to dance and enjoyed playing cricket. This was the take off point for his reformation. The NGO held dance sessions with other children of his age . He learnt to share space with others .Cricket coaching was for him a lesson in working with the team. Raunak gave up smoking and spent his time in creative activities. Gradually , he was weaned off from begging too. Raunak is now going to an MCD school studying in class V. he is provided back-up teaching by the NGO.";
                break;
            
            case 'v5':
                    ourProjectsModalH2.textContent =
                        "HIMANSHU";
                    ourProjectsModalP.textContent =
                        "Himanshu used to beg at Railway Stations for living and was indulge in bad habits like smoking cigarettes/bidi & consumption of tobacco.Subhakshika assisted him in giving up all of these vices by including him in other pursuits like education and sports. He entirely gave up smoking after a year. Himanshu is in 9th class currently and he also secured first position in class 8th.";
                    break;
        default:
            break;
    }

    
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
