
import React from 'react'
import '../styles/styles.css'

import michaelPersona from '../assets/MichaelPersona.png'
import jenniferPersona from '../assets/JenniferPersona.png'
import storyboard from '../assets/Storyboard.jpeg'
import interfaceSketch from '../assets/InterfaceSketch.jpeg'


export function Intro() {
    return (
    <div>
        <h1>Understanding Point-of-Sale Experiences of Brown Dining Hall Workers</h1>
        <h2>Project Overview</h2>
        <p>In this project, I set out to better understand the experiences of Brown Dining Services workers with point-of-sale (POS) interfaces. To accomplish this, I conducted a series of interviews, analyzed common challenges, needs, and strengths of the existing POS system, in order to provide data-driven recommendations for improvement.</p>
    </div>
    )
}

export function InterfaceSketch() {
    return (
        <div>
            <h2>Inteface Sketch</h2>
            <p>For context, here is a sketch of the point-of-sale (POS) interface that Brown Dining Services workers use. Large, colorful, simple buttons make workflows easy by limiting decision fatigue. A lack of nesting allows for simple, efficient transactions that only require two clicks to complete.</p>
            <img className='img' src={interfaceSketch} alt='sketch of Brown Dining Services Point of Sale System'/>
        </div>
    )
}

export function UserInterviews() {
    return (
        <div>
            <h2>User Interviews</h2>
            <h3>Interview Insights</h3>
            <p>To better understand the experiences of Brown Dining Services employees, I conducted a series of interviews and observational studies. Through these interviews, I gained the following insights: </p>
            <ul>
                <li>
                Dining hall workers are able to quickly process student transactions
                </li>
                <li>
                The cognitive load of the POS system is likely low because dining hall workers do this for hours while interacting with students, standing, and being in distracting sensory environments
                </li>
                <li>
                Because the system takes 2-clicks to complete purchases, there likely isn’t much nested-menus for common items
                </li>
                <li>
                The system is simple enough that dining hall workers to use quickly for an entire shift or rush period, but flexible enough to work across a variety of dining options (e.g. different food choices or meal selection types)
                </li>
                <li>
                Users perceive the system as simple and easy to learn even if they don’t view themselves as tech-savvy
                </li>
            </ul>
            <br/>
            <h3>Interview Questions</h3>
            <p>To gain these insights, I asked the following questions: </p>
            <ol>
                <li>
                What is your experience with the interface?
                </li><li>
                How simple & easy to use do you find the POS interface?
                </li><li>
                Do you have any frustrations with the POS interface? If so, what?
                </li><li>
                Have you used other POS interfaces and if so, what has your experience been?
                </li><li>
                Does the interface ever conflict with your expectations of how it should work? If yes, when and how?
                </li>
            </ol>
            <br/>
            <h3>Interview Summaries</h3>
            <p>In summary, ⅔ users used the registers regularly, and the other used it occasionally as a manager. All users expressed that they were happy with the simplicity and learnability of the interface, with one noting that it was easy even “for an older gentleman.” In particular, users noted the big, colorful buttons and transactions taking only two clicks as key features that led to their enjoyment and usability of the interface. When asked about frustrations they encountered with the system, users generally expressed that they didn’t find it frustrating at all. However, when asked a second time, users would remember occasional system errors, noting that every once in a while the system will go down and take up to 10 minutes to reboot. Thus, based on my interviews, it seems that interface improvements can come in the form of reliability improvements rather than workflow changes.</p>
        </div>
        
    )
}

export function Personas() {
    return (
        <div>
            <h2>Personas</h2>
            <p>As an exercise in understanding the thoughts, feelings, actions, and words end-users, I created these two personas as 'archtypal users', which I hope to use to capture key kinds of users who interact with this system.</p>
            <h3 >Persona #1: Manager Mike</h3>
            <img className='img' src={michaelPersona} alt='persona for manager Mike'/>
            <p>Manager Mike represents users who only interact with the system occasionally. For users like manager Mike, who's attention is split between managerial or other administrative duties, it's essential that the system be simple, learnable, intuitive, and memorable. </p>
            <h3>Persona #2: Jennifer</h3>
            <img className='img' src={jenniferPersona} alt='persona for Jennifer'/>
            <p>Jennifer represents users who interact with the system for long periods of time, often under the stress of multiple simultaneous demands like student questions or long lines. For users like Jennifer, it's important that the system be fast, reliable, and have low-cognitive demand in order to effectively multitask through long shifts.</p>
        </div>
    )
}

export function Storyboard() {
    return (
        <div>
            <h2>Storyboard</h2>
            <p>Storyboarding is another helpful way to understand the journey and friction points a user experiences with a system. This storyboard depicts the demands placed on Jennifer when a long line forms during lunch rush at the Ratty, requiring her to efficiently swipe students in and simultaneously process a student takeout box. </p>
            <h3>Jennifer's Ratty Lunch Rush</h3>
            <img className='img' src={storyboard} alt="storyboard of Jennifer's swiping students in and simultaneously giving a student a takeout box during lunch rush"/>
        </div>
    )
}

export function Conclusion() {
    return (
        <div>
            <h2>Conclusion</h2>
            <p>Through this project, I was able to understand and map out the experiences of Brown Dining Services workers with point-of-sale (POS)interfaces. Through user interviews, user personas, and story-boarding, I was able to identify common challenges and how POS systems can be improved to support users. I found that POS systems succeed in being simple, learnable, and memorable, which satisfies the needs of both occasional and power-users. One area for improvement would be improving reliability and decreasing the frequency of system outages. This would improve the experiences of dining services workers by not putting them in an awkward position where there is a long line and the system is unresponsive.</p>
        </div>
    )
}

export default function PersonasAndStoryboarding() {
    return (
        <div className='container'> 
            <Intro/>
            <InterfaceSketch/>
            <UserInterviews/>
            <Personas/>
            <Storyboard/>
            <Conclusion/>
            
            

            {/* <Headings/> */}
        </div>
        
    )
}
