import { BlogRawType, BlogType } from "@/@types";

export const BLOGS: BlogType[] = [
  {
    id: "1",
    subtitle: "first blog",
    title: "OOPs! It's OOPs.",
    date: "Mon jan 22, 2022",
    description:
      "Object-Oriented Programming as the name implies is a language that uses Objects in programming. You might be confused with what this Object is? Whose Object it is? No worries, I will be covering this later in the blog. Grab your Popcorn box and enjoy reading!....",
    image: "oop.png",
    link: "https://medium.com/dsc-ghrce/oops-its-oops-c9684437fc49",
    tags: [
      "C++",
      "oop",
      "Object-oriented-programming",
      "Programming",
      "Software-development",
      "Learn to code",
    ],
    time_to_read: "7 min read",
  },
  {
    id: "2",
    subtitle: "interview blog 1",
    title: "Dphi React.js SDE Intern Interview experience - I",
    date: "Sat Apr 22, 2023",
    description:
      "As an aspiring artificial intelligence (AI) enthusiast, I decided to apply for an internship at AI Planet (formerly DPhi). AI Planet is a global ecosystem that aims to educate and empower individuals and organizations to build and utilize AI. In this blog, I want to share my interview experience at AI Planet in detail...",
    image: "raju-rastogi-interview.png",
    tags: ["Interview", "JS", "HTML", "CSS", "TS", "React.js"],
    time_to_read: "8 min read",
  },
  {
    id: "3",
    subtitle: "interview blog 2",
    title: "Dphi React.js SDE Intern Interview experience - II",
    date: "Wed May 17, 2023",
    description:
      "As an aspiring artificial intelligence (AI) enthusiast, I decided to apply for an internship at AI Planet (formerly DPhi). AI Planet is a global ecosystem that aims to educate and empower individuals and organizations to build and utilize AI. In this blog, I want to share my interview experience at AI Planet in detail...",
    image: "interview-2.jpeg",
    tags: ["Interview", "HR", "JS", "HTML", "CSS", "TS", "React.js"],
    time_to_read: "3 min read",
  },
  {
    id: "4",
    subtitle: "Leetcode blog 1",
    title: "LeetCode 75: Sort Colors - Dutch National Flag Algorithm",
    date: "Mon May 15, 2023",
    description:
      "Dutch national flag algorithm is imortant algorithm interview point of view, and is used to sort the array containing just 3 type of numbers for example, 0's, 1's, and 2's only. In this blog we will be discussing about all the appraoches to solve this problem...",
    image: "dnf.png",
    tags: [
      "Interview",
      "Technical",
      "C++",
      "DSA",
      "LeetCode",
      "dutch-national-flag",
    ],
    time_to_read: "5 min read",
  },
];

export const BLOGS_DETAILED: BlogRawType[] = [
  {
    id: "1",
    name: "OOPS! It's OOPs.",
    markdown: `
![](https://miro.medium.com/v2/resize:fit:700/1*bx-_rIdgjCe0kEyNPwYJVw.png)

**What do you mean by object-oriented programming?**

Some of you might have coded in the C programming language, in which you first include header files in the program and then create the main function. It is a must in C++ object-oriented programming language as well, then you construct the program inside main, where you create variables and outside main you create some functions which can manipulate those variables. This type of programming approach is called procedural programming.

We Also have a new programming method called Object-Oriented Programming, abbreviated as OOPs. In this method, we use a user-defined data type called **Class.**

Object-Oriented Programming as the name implies is a language that uses Objects in programming. You might be confused with what this Object is? Whose Object it is? No worries, I will be covering this later in the blog. Grab your Popcorn box and enjoy reading!

The main aim of OOPs is to bind the data and the methods which can manipulate those data together so that data would only be accessible to those methods only and no other part of the program could manipulate it. OOPs help us to implement real-world entities like inheritance, polymorphism, data abstraction, encapsulation, etc. in programming which we will learn about further in the blog. OOPs, work on the principle of DRY.

**What do you mean by dry?**

![](https://miro.medium.com/v2/resize:fit:289/1*NvF00v3j3bIEwkxJp1LLAw.png)

DRY means **Don’t Repeat Yourself**. Simply, instead of writing the same code many times, just write it in one place and use it many times.

What is a Class and an Object?
------------------------------

Class is nothing but a data type like int, float, etc. But, it is a user-defined data type, we can define it according to our needs. The class helps us to bind variables and functions, that can manipulate the variables. And an Object is the instance of the Class. Didn’t understand what an object is? Let’s understand with a live example, let’s consider fruits to be a class then apple is an object of the class fruit. So eventually object is nothing but a variable of the data type class, for which it is created.

Using class, you can implement the real-world entity, let’s suppose you are building a system to manage the employee details like employee id, employee address, employee mobile number, etc. So far that you are not going to create all these variables separately as follows (I’m using c++ here)

Example:

\`\`\`cpp
string employeeName;
int employeeId;
string employeeAddress;
int employeeMobileNumber;
\`\`\`

since all these data have different data types you can’t use an array. Alternatively, you can create a template using a class like follow:

\`\`\`cpp
class employee {    
public:        
      string employeeName;        
      int employeeId;        
      string employeeAddress;        
      int employeeMobileNumber;
};
\`\`\`

The above template is a Class. Which helps us to bind variables having different data types in a single place. Now you might have a doubt. What about functions?

You can create a function inside the class that can be used to manipulate or change the values of the variables or simply use those variables.

Example:

\`\`\`cpp
class employee{
public:       
      string employeeName;       
      int employeeId;       
      string employeeAddress;       
      int employeeMobileNumber;       
      void getName() //function to get employee name from user 
      {
            cout << " Enter employee name:";
            cin >> employeeName;        
      }       
      void printName() //function print the employee name        
      {              
            cout << " The employee name is " << employeeName;        
      }
};
\`\`\`

The above class has a function getName() and printName() which can be used to get the name of the employee as user input and print the name of the employee respectively. Now with the above class, you can create your variables called objects, which can be used to access data and functions inside the class.

(**Note**: using objects you can only access public data outside the class, private and protected data cannot be accessed).

Now for the above class, we can create object as follows:

\`\`\`cpp
employee obj1; //creating object
obj1.getName(); //calling getName function
obj1.printName(); //calling the printName function
\`\`\`

The above code will simply take the employee name as input from the user and print the name entered by the user. If you have coded in C programming language and used **structure** in C language you can relate structure with class.

Simple, right? Now let’s move on…

**What makes oops so important in programming?**
------------------------------------------------

Most of you might be wondering as to why take so much interest in learning Objects and Classes. The simple reason is that OOPs enable users to create modules that remain as it is even if we include more data types in the program. It also provides features like inheritance, data abstraction, encapsulation, and polymorphism which make the four pillars of OOPs.

OOPs allows software engineers to break down large software into various modules which can be easy to understand and create the software with ease.

**Four pillars of Object-Oriented Programming:**
------------------------------------------------

![](https://miro.medium.com/v2/resize:fit:700/1*IpYnumcs1umAC1n7myBxag.png)

1) **Encapsulation**: In OOPs, Data encapsulation means to bind the data and the functions/methods which are made to manipulate data, together.

![](https://miro.medium.com/v2/resize:fit:700/1*jufOdSTOhT0ikUIFAzfSPQ.png)

2) **Abstraction**: Abstraction means showing only essential data and hiding the nonessential data from the outside world of that class. For example, When you buy a car, you know how to drive it, you can see the steering wheel, accelerator, etc. but you are not told how this accelerator works, or how the engine works.

![](https://miro.medium.com/v2/resize:fit:607/1*_fvu4G8ZmaZCH1KvgqCCrA.jpeg)

3) **Inheritance**: Inheritance is one of the core concepts of object-oriented programming. Inheritance means to derive attributes and methods from one class to another class. The class from which the attributes and methods are getting derived is called the parent class, and the class in which these attributes and methods are getting derived is called a derived class. Inheritance work on the principle of code reusability.

![](https://seleniumautomationtester.files.wordpress.com/2017/03/inheritance-1.gif)

4) **Polymorphism**: When you break the word into two parts, “poly” means “many” and “morphism” means “forms” giving it a complete meaning of “many forms”. A real-time example of polymorphism is, a person can be a father, son, and husband at the same time, so here a person has many forms depending upon the situation.

![](https://miro.medium.com/v2/resize:fit:400/1*XDdk1xk2SyqnGpkjj41_gw.png)

**What are the uses of these four pillars in oops?**

1.\ Using OOPs it is easy to model real-world problems as each object can be viewed as a real-world entity having some attributes and methods.

2.\ Using inheritance, we can reuse the existing class to derive a new class such that unnecessary code is eliminated and the use of the existing class is extended. This helps to save time and costs for the program.

3.\ In OOP, data can be made private to a class so that only member functions of the class can access the data. This principle of data hiding helps to hide the data to the outside of a class so that it won’t get mistakenly changed by the programmer.

4.\ Using polymorphism, the same function or same operator can be used for different purposes. This helps to manage the complexity of software easily.

5.\ Large problems can be reduced into smaller modules and more manageable problems. It is easy to divide the work into a project based on objects.

**Let’s see some real-life examples of OOPs:**

*   It is used to create various Real-Time Systems like real-time operating systems.

*   It is used in software development

*   It is used to create user interface designs such as windows, menus.

*   It is also used in the fields of Simulation and Modelling

*   It is used to create object-oriented databases

*   It is used to create AI and Expert Systems

*   It is used to create Neural Networks and parallel programming

*   It is also used in creating office automation systems etc.

Your Learnings:
===============

- What is OOPs?

- Why use OOPs and what is its importance in the software field?

- What are the real-life examples of OOPs?

The motive of this article is to introduce you to object-oriented programming and to tell you how important it is to study object-oriented programming while creating software as well as projects. I hope this article has helped you to better understand the concept of object-oriented programming and its need in the software field.

Thank you for reading 😊

### Find me here:

Email: <a href="mailto:vidhanshu7218@gmail.com" target="_blank"><i>vidhanshu7218@gmail.com</i></a>

Github: <a href="https://github.com/vidhanshu" target="_blank"><i>@github.com/vidhanshu</i></a>

Portfolio: <a href="https://vidhanshu.vercel.app" target="_blank"><i>vidhanshu.vercel.app</i></a>


> <a href="https://medium.com/dsc-ghrce/oops-its-oops-c9684437fc49" target="_blank"><i>OOPs it's OOps</i></a>  was originally published in <a target="_blank" href="https://medium.com/dsc-ghrce"><i>GDSC GHRCE</i></a> on Medium, where people are continuing the conversation by highlighting and responding to this story. 
> 
    `.toString(),
  },
  {
    id: "2",
    name: "My Interview Experience at AI Planet",
    markdown: `
![](https://i.postimg.cc/yNMKW9MC/image.png)
As an aspiring artificial intelligence (AI) enthusiast, I decided to apply for an internship at **AI Planet (formerly DPhi)**. AI Planet is a global ecosystem that aims to educate and empower individuals and organizations to build and utilize AI. In this blog, I want to share my interview experience at AI Planet in detail.

### Application Process <hr/>

I applied for an internship from **Wellfound (formerly AngelList)** on around 14th March and got a response back with an email mentioned below on 22nd March at 10pm:

![email image](https://i.postimg.cc/wvZxdZVH/diphi-first-mail.png)

As stated in the email, you can see I was provided with an assignment that should be completed on or before 27th March. I was curious about the assignment, so I started working on it right away after receiving the email at around 10 pm on 22nd March. I decided to use *React.js, Typescript*, and *MUI* as my tech stack as it was allowed to use any kind of library like *React-Bootstrap* or *MUI*, and one more reason behind using *MUI* was the UI they provided, which was clearly looking like it was created using *MUI*. I worked throughout the night on the assignment, and it was easy but time-consuming, as I wanted to create the UI as it was. I bunked the college on the next day, which was Thursday, and was working on the assignment itself till evening 5 pm and completed everything. Then I submitted the assignment at 5 pm on 23rd March.

Here is the assignment link for you to take a closer look at what type of assignment it was:  <a href="https://docs.google.com/document/d/1qoQWFa5fzKsol3an9MavzCXRvy0UjU1TzHOWr9tkKbw/edit?usp=sharing" target="_blank">Assignment</a>
The link to the assignment I built  <a href="https://hackshow.vercel.app" >My assignment</a>

I got a response back from AI Planet on 28th March, which is as follows:

![email png](https://i.postimg.cc/sxWWFp56/image.png)


As mentioned in the above message, you can see that it had two issues like spacing issues, and the date was not showing up on the card. I made the necessary changes and resolved those two issues, along with making the entire website responsive, and reverted them back.

Then on 2nd April, I got a response back from AI Planet, saying I got shortlisted for the Technical interview round.

![](https://i.postimg.cc/d3Fs1dzS/image.png)

As mentioned in the above mail, you can see that I got shortlisted for the interview and was provided with the opportunity to choose the slot as per my convenience. In the recruitment process of AI Planet, I liked that they provide shortlisted candidates to choose the preferred day and time for the interview, unlike one of the companies I applied to on AngelList.

I scheduled my interview on 7th April at 3pm. On 7th of April, I joined the Google Meet before 5 minutes and was waiting for the interviewer. The interviewer came after 5-10 minutes, and we started interacting with each other with greetings. Then the interviewer asked me to give my introduction. I was a bit nervous and was not prepared, so I gave my introduction in a little bit of an incomplete way, Name, College(not mentioned that I'm in 3rd year), Skills. So make sure that whenever you start your introduction, it could be in the following order:
1) Greetings
2) Name, place you live
3) Academic details (degree, year, semester), College name, place of college
4) Skills and areas of interest (technical and non-technical)
5) Experience (can have previous internship experience)
6) Achievements (hackathons won, competitions won, etc.)

This way, you would be giving your complete introduction without leaving anything for the interviewer to ask you back. Because in my case, I missed saying that "I'm in 3rd year," and the interviewer asked me about it.

### Round 1: Questions on assignment <hr/>

After the introduction, we moved to the technical questions round, where the first round was *"Questions on the Assignment."* The interviewer asked me to share my screen and open the assignment I built. I had previously set up my assignment, so it saved time. The interviewer asked me to add a hackathon by clicking the *"Add hackathon"* button. I completed the task successfully, and the interviewer then asked me to visit different pages and mark the hackathon as a favorite, checking whether it worked as expected or not. Everything was working fine. Then, the interviewer asked me to go to the *"Update hackathon"* page and check the validations in the input fields there. I completed this task successfully, except I forgot to add the validation for the date (i.e., the start date should be less than or equal to the end date). The interviewer caught this issue and asked me to solve it later.

### Round 2: Questions on HTML <hr/>

During the interview process, we progressed to the next round, which was focused on *HTML* fundamentals. The interviewer began by posing a basic question, *"Why do we use <!DOCTYPE Html> at the top of each HTML page?"* I replied that, *"it is used to indicate to the browser that the file is an HTML page, and not another type of file like JSON or XML. Additionally, I mentioned that it could aid in SEO (although I was uncertain of the exact reason)"*. The interviewer acknowledged that my response was partially correct but added that the primary reason for using *\<\!DOCTYPE Html\>* is to inform the browser of the specific version of *HTML* being used.

The interviewer went on to pose several more straightforward HTML-related questions, which I was able to answer accurately. These questions included defining a tag and attribute, describing how a form operates, explaining what multipart form data means, and discussing the purpose of the action and method attributes in a form.

### Round 3: Questions on CSS <hr/>

In the next round of the interview, the interviewer assessed my knowledge of *CSS*, or cascading style sheets. The questions asked were relatively easy, and I answered them all correctly. The questions were as follows:

1. What is the difference between **flex-box** and **grid**?
2. What are the different position properties in *CSS*, and can you explain each with an example?
3. What are the different types of selectors in *CSS*?

### Round 4: Questions on JS <hr/>

Moving on to the *JavaScript* round, I faced some difficulty since I had not prepared for any *JavaScript* topic. The interviewer began with some simple questions, such as:

1. What are the different data types in *JavaScript*?
2. What is the difference between **\=\=** and **\=\=\=**?
3. What is **hoisting**?

I was able to answer all of these correctly. However, the interviewer then asked some more challenging questions, such as:

1. How does the browser execute *JavaScript* on a website?
2. How does an event loop work?
3. What is *JavaScript* closure?
4. What is asynchronous programming?
5. What is type coercion?
6. What are promises?

Although I was able to answer most of these questions correctly, I struggled with questions 3 and 5 due to not revising them. I provided partial answers instead of giving a complete response.

### Round 5: Questions on React.js <hr/>

After the lengthy *JavaScript* round, we progressed to the *React.js* round, which was undoubtedly my favorite. The interviewer asked me the following questions:
1) What is *React*, and why do we use it?
2) What is a hook, and why were they introduced?
3) What are the different types of hooks in *React*?
4) Can you show me how to make an API call using Axios or Fetch API?

### Round 6: Practical Round <hr/>

We then moved on to the final round of the interview, the *"Practical round"* where the interviewer aimed to evaluate my practical skills in *React.js*. He requested that I create an asynchronous counter with two buttons:
1) Start - to start the counter
2) End - to stop and reset the counter
He asked me to open **CodeSandbox** and begin constructing it.

It was straightforward for me to implement, and the code that I created is below:

\`\`\`js
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [id, setId] = useState(null);

  const startCounter = () => {
    setId(
      setInterval(() => {
        setCount((i) => i + 1);
      }, 1000)
    );
  };

  const stopCounter = () => {
    clearInterval(id);
    setId(null);
    setCount(0);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={startCounter}>start</button>
      <button onClick={stopCounter}>end</button>
    </div>
  );
}
\`\`\`

The interviewer then asked me to implement the counter using the useEffect hook, which was also straightforward for me, and I implemented the following code:

\`\`\`js
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let id = null;
    if (start) {
      id = setInterval(() => {
        setCount((i) => i + 1);
      }, 1000);
    } else {
      clearInterval(id);
      setCount(0);
    }

    return () => clearInterval(id);
  }, [start]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setStart(true)}>start</button>
      <button onClick={() => setStart(false)}>end</button>
    </div>
  );
}
\`\`\`

In conclusion, the technical interview process can be challenging, but it is an opportunity to showcase your skills and knowledge. From my experience, I learned that preparation is key to success, and it is important to revise all the fundamental concepts before going for an interview. In this blog, I shared my experience of the technical interview process, which included *HTML*, *CSS*, *JavaScript*, and *React.js* rounds. The next round of the interview, which was the final round, is described in another blog. Which was with **Founder and CEO of AI planet, Chanukya Patnaik**, where I will share how I tackled the behavioral questions . Remember, the more you practice, the better you will become, and always stay curious to learn and grow in your career.

### Your learnings <hr/>

-  How to introduce yourself.
-  How to prepare for the frontend interview.
-  Before interview always brush-up your practical as well as theoretical concepts.
-  Todo and not-todo while interview.

The link to the assignment I built  [My assignment](https://hackshow.vercel.app)

I hope this experience helps you, Thanks for reading 😇!

### Find me here:

Email: <a href="mailto:vidhanshu7218@gmail.com" target="_blank"><i>vidhanshu7218@gmail.com</i></a>

Github: <a href="https://github.com/vidhanshu" target="_blank"><i>@github.com/vidhanshu</i></a>

Portfolio: <a href="https://vidhanshu.vercel.app" target="_blank"><i>vidhanshu.vercel.app</i></a>
`.toString(),
  },
  {
    id: "3",
    name: "My Interview Experience at AI Planet",
    markdown: `
<img src="https://www.aihr.com/wp-content/uploads/Interview-guide.jpg" alt=""/>

### Introduction:<hr/>
In today's competitive job market, interviews serve as crucial milestones for job seekers. Recently, I had the opportunity to go through a comprehensive HR interview at **Ai Planet** for the position of **React.js Developer**. Led by the talented interviewer, <a href="https://www.linkedin.com/in/chanukyapatnaik">Mr. Chanukya Patnaik</a> Founder & CEO Aiplanet, the interview provided insights into my skills, experiences, and aspirations. In this blog post, I will recount my interview experience, highlight the questions asked, and reflect on the lessons learned along the way.

**Question 1:  How much time does it take to build the assignment?**
During the interview, I was questioned about the time required to complete an assignment. This question aimed to gauge my estimation skills and ability to plan tasks effectively. I emphasized the importance of thorough planning, considering project complexity and personal proficiency. By showcasing my experience in managing assignments efficiently, I expressed my commitment to meeting deadlines while maintaining a high standard of quality.

**Question 2: Why did you schedule the interview late?**
The interviewer wanted to know why did I scheduled the interview bit late, but I had a genuine reason for this question, which was due to ESE (End semester examination) going on in the college. So, make sure if you don't have any reason to schedule the interview late you should schedule the interview as soon as possible.

**Question 3: Suppose you are an interviewer and you want to be extremely critical, review your assignment and identify areas of improvement.**
The interview took an intriguing turn when I was asked to put myself in the shoes of an interviewer and critically review my own assignment. This question aimed to assess my ability to identify flaws and areas for improvement in my work. I approached the task with a self-reflective mindset, acknowledging that no project is perfect. By objectively analyzing my assignment, I highlighted areas where I could enhance code optimization, improve documentation, and refine user experience. This demonstrated my commitment to continuous learning and growth as a developer.

**Question 4: What was your role and responsibility in your last internship?**
To gauge my past experience, the interviewer inquired about my role and responsibilities during my previous internship. I enthusiastically described my involvement in a challenging React.js project, emphasizing my ability to collaborate with a multidisciplinary team, adhere to project milestones, and contribute to the successful delivery of the application. By showcasing my ability to adapt to different roles within a development team, I conveyed my versatility and strong work ethic.

**Question 5: What made you get into CSE? What was the story behind it?**
The interviewer was curious about the factors that influenced my decision to pursue Computer Science Engineering (CSE). This question allowed me to share my passion for problem-solving and my fascination with the world of technology from a young age. I narrated personal experiences that ignited my curiosity and how these experiences led me to choose CSE as my academic and professional path. By sharing my journey, I showcased my genuine enthusiasm for the field and my long-term commitment to it.

**Question 6: Achievements and Extracurricular Activities – How many hackathons have you participated in?**
The interview delved into my achievements and extracurricular activities, specifically focusing on my participation in hackathons. I enthusiastically shared my experience of participating in several hackathons, highlighting how they provided me with opportunities to collaborate, innovate, and enhance my problem-solving skills under pressure. I emphasized the valuable lessons I learned from each hackathon and how they honed my ability to deliver impactful solutions within tight deadlines.

**Question 7: What's your vision in life? What do you want to do?**
The interviewer sought to understand my long-term vision and aspirations. I expressed my desire to leverage technology to create positive social impact. I shared my vision of developing innovative applications that simplify complex processes and improve the lives of individuals worldwide. I highlighted my commitment to continuous learning, seeking opportunities to contribute to the ever-evolving tech industry, and becoming a catalyst for change through technology-driven solutions.

**Question 8: What are your ambitions as an individual?**
Building upon the previous question, I was asked about my personal ambitions. I spoke about my aspirations to become a respected industry professional known for my expertise in React.js development. I stressed the importance of cultivating a growth mindset and constantly pushing the boundaries of my skills. By expressing my ambitions, I conveyed my dedication to personal and professional development.

**Question 9: Why do you want to join Ai Planet?**
The interviewer probed my motivations for joining Ai Planet. I seized the opportunity to highlight the alignment between Ai Planet's mission, my passion for React.js development, and my desire to contribute to cutting-edge projects in the field of artificial intelligence. I emphasized the company's reputation, work culture, and commitment to innovation as factors that deeply resonated with my own values and career aspirations.

**Question 10: What makes you happy when it comes to any package?**
The interviewer inquired about my perspective on compensation packages. Here, I provided insights into my priorities beyond monetary rewards. While acknowledging the importance of fair compensation, I emphasized that job satisfaction, professional growth opportunities, and a supportive work environment held significant value for me. I conveyed my belief that a balanced package encompassing these elements would contribute to long-term happiness and fulfillment in my career.

*Note: These questions were asked to me based on my resume, interests and past experience and this blog aims to share my experience with you.*

**Conclusion:**
The HR interview at Ai Planet, conducted by Chanukya Patnaik, provided me with a valuable opportunity to reflect on my skills, experiences, and aspirations. Through the thought-provoking questions, I gained deeper insights into my own journey as a React.js developer and the impact I aspire to create. This interview experience reinforced the importance of thorough preparation, self-reflection, and the ability to effectively communicate my motivations and ambitions. I am grateful for the chance to engage in this enriching interview process and look forward to contributing my skills to the innovative projects at Ai Planet.  

I hope this experience helps you, Thanks for reading 😇!

### Find me here:

Email: <a href="mailto:vidhanshu7218@gmail.com" target="_blank"><i>vidhanshu7218@gmail.com</i></a>

Github: <a href="https://github.com/vidhanshu" target="_blank"><i>@github.com/vidhanshu</i></a>

Portfolio: <a href="https://vidhanshu.vercel.app" target="_blank"><i>vidhanshu.vercel.app</i></a>
    `.toString(),
  },
  {
    id: "4",
    name: "LeetCode 75: Sort Colors - Dutch National Flag Algorithm",
    markdown: `
Dutch national flag algorithm is an algorithm technic to sort the array containing only 3 values i.e. 0, 1, and 2 that too in just O(n) time complexity with no extra space. in this blog we will be learning about **Dutch national flag algorithm** with an example:

Q. Given an array  \`nums\`  with  \`n\`  objects colored red, white, or blue, sort them  **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers  \`0\`,  \`1\`, and  \`2\`  to represent the color red, white, and blue, respectively.

Note: *You must solve this problem without using the library's sort function.*

**Example 1:**

**Input:** nums = [2,0,2,1,1,0]
**Output:** [0,0,1,1,2,2]

**Example 2:**

**Input:** nums = [2,0,1]
**Output:** [0,1,2]

**Constraints:**

 n == nums.length
 1 <= n <= 300
 nums[i]  is either  0,  1, or  2.

**Follow up:** Could you come up with a one-pass algorithm using only constant extra space?

**Solutions:**
## Approach 1 <hr/>
So, just after reading this question the *brute-force* approach comes into our mind is, using the **sort** function provided in the library in almost every programming language. but the time complexity of using that function will be \`(nlogn)\` and we have to do it in \`O(n)\`.
\`\`\`js
class Solution {
public:
	void  sortColors(vector<int>&  nums) {
		sort(nums.begin(), nums.end());
	}
};
\`\`\`

**Complexity:**
Time complexity: \`O(nlogn)\`
Space complexity: \`O(1)\`

## Approach 2 <hr/>
The second approach that comes into mind is, since there are just 3 values in the array i.e. \`o's\`, \`1's\` and \`2's\` we can keep track of their counts in three different variables:
- \`ct_0\`: count of number of 0's
- \`ct_1\`: count of number of 1's
- \`ct_2\`: count of number of 2's

now, in the given array itself, we can replace all the values from index 

- \`0 to ct_0 - 1\` by 0,
- \`ct_0 to ct_0 + ct_1 - 1\` by 1
- \`ct_0 + ct_1 to n - 1\` by 2, where n is length of the array.

thus, eventually we will get the array sorted in *O(2n)* time complexity. But can we optimize it further? So the answer is yes, This is where *Dutch national flag algorithm* comes into picture which helps us to sort the array of \`0's\`, \`1's\` and \`2's\` within *O(n)* complexity.

**Code:**
\`\`\`js
class Solution {
  public:
      void sortColors(vector<int>& nums) {
          if(nums.size() == 1) return;
          int ct_0 = 0, ct_1 = 0, ct_2 = 0;
          for(auto&it: nums){
              if(it == 0) ct_0++;
              else if(it == 1) ct_1++;
              else ct_2++;
          }
          for(int i = 0; i < ct_0; i++) nums[i] = 0;
          for(int i = 0; i < ct_1; i++) nums[ct_0 + i] = 1;
          for(int i = 0; i < ct_2; i++) nums[ct_0 + ct_1 + i] = 2;
      }
};
\`\`\`

**Complexity:**
Time complexity: \`O(2n)\`
Space complexity: \`O(1)\`

## Approach 3 <hr/>
Dutch national flag algorithm is a three pointer approach where we keep three pointers i.e. \`low\`, \`mid\` and \`high\`. 

where, the range
- \`[0, low]\`: contains only 0's
- \`[low, mid-1]\`: contains only 1's
- \`[mid, high]\`: is unsorted (can contain anything out of 0's, 1's and 2's in any order)
- \`[high+1, n]\`: contains only 2's

The following image better demonstrate it:
![Dutch national flag algorithm](https://i.postimg.cc/QdNw1zth/image.png)

**Algorithm:**
\`\`\`js
If nums[mid] == 0:
	swap(nums[low], nums[mid]);
	low++; mid++;
else if nums[mid] == 1:
	mid++;
else:
	swap(nums[mid], nums[high])
	high--;
\`\`\`

**Algorithm explanation:**
1) initially, initialize \`lo = 0, mid = 0, hi = n - 1\`,
2) while \`mid <= hi\`, do following:
	1) if the \`nums[mid] == 0\` then \`swap(nums[mid], nums[lo])\` and \`increment lo and mid by 1\`
	2) else if \`nums[mid] == 1\` then just \`increment mid by 1\`
	3) else \`nums[mid] == 2\` then \`swap(nums[mid], nums[hi])\` and \`decrement hi by 1\`
3) done, you have sorted array now.

**Note**: *you can better understand by the below dry run, I would also recommend trying by dry running yourself*

So, now what to do with these pointers? Let's understand it better with an example.
Let's say, our input is:
**Input:** nums = [1,0,2,2,1,1,0]
<img src="https://i.postimg.cc/gj24nxmp/image.png" width="100%" height="auto" alt="step 1"/>
<img src="https://i.postimg.cc/G3TxSntq/image.png" width="100%" height="auto" alt="step 2"/>
<img src="https://i.postimg.cc/zXSW9zrS/image.png" width="100%" height="auto" alt="step 3"/>
<img src="https://i.postimg.cc/vT7gFzpH/image.png" width="100%" height="auto" alt="step 4"/>
<img src="https://i.postimg.cc/Jhys4m9F/image.png" width="100%" height="auto" alt="step 5"/>
<img src="https://i.postimg.cc/901mYN6T/image.png" width="100%" height="auto" alt="step 6"/>
<img src="https://i.postimg.cc/dtMp5BsZ/image.png" width="100%" height="auto" alt="step 7"/>
<img src="https://i.postimg.cc/TPRZrqjM/image.png" width="100%" height="auto" alt="step 8"/>
<img src="https://i.postimg.cc/7P1nyM12/image.png" width="100%" height="auto" alt="step 9"/>

finally, when mid > high the unsorted part i.e. \`[low, high]\` is sorted in just *O(n)* time complexity.

**Code:**
\`\`\`js
class Solution {
	public:
	void  swap(int  &a, int  &b){
		int t = a;
		a = b;
		b = t;
	}
	void sortColors(vector<int>&  nums) {
		if(nums.size() == 1) return;
		int lo = 0, mid = 0, hi = nums.size() - 1;
		while(mid <= hi){
			if(nums[mid] == 0){
				swap(nums[mid], nums[lo]);
				lo++; mid++;
			}else  if(nums[mid] == 1){
				mid++;
			}else{
				swap(nums[mid], nums[hi]);
				hi--;
			}
		}
	}
};
\`\`\`

**Complexity:**
Time complexity: \`O(n)\`
Space complexity: \`O(1)\`

### Your learnings <hr/>

- Different approaches to solve the \`sort colors\` problem.
- Dutch national flag algorithm.

### Find question here:
Question: <a href="https://leetcode.com/problems/sort-colors/description" target="_blank"><i>https://leetcode.com/problems/sort-colors/description</i></a>

### References:
striver's video: <a href="https://youtu.be/tp8JIuCXBaU" target="_blank"><i>https://youtu.be/tp8JIuCXBaU</i></a>

I hope this helps you, Thanks for reading 😇!

### Find me here:

Email: <a href="mailto:vidhanshu7218@gmail.com" target="_blank"><i>vidhanshu7218@gmail.com</i></a>

Github: <a href="https://github.com/vidhanshu" target="_blank"><i>@github.com/vidhanshu</i></a>

Portfolio: <a href="https://vidhanshu.vercel.app" target="_blank"><i>vidhanshu.vercel.app</i></a>
    `.toString(),
  },
];
