import React from 'react';

export const MadLibresult = props => {
    

    {
        return <>
            
            <div id = "result"class="line-height">
                    <p class="h6 m-2 line-height">
                    You felt <span class="badge badge-secondary">{props.results.firstAdj}</span> while checking the baby Yoda meme on a Saturday morning.
                   </p>

                    <p class="h6 m-2 line-height">
                    While you took a break from the memes, <span class="badge badge-secondary">{props.results.firstVerb}</span> and thinking about the importance of memes in your life, 
                    you got an email from Tim.</p>
                    
                    <p class="h6 m-2 line-height">
                    In the email Tim said you did a/an <span class="badge badge-secondary"> {props.results.secondAdj}</span> job on your UNO project and he wanted to talk to you on Monday. 
                    </p>   

                    <p class="h6 m-2 line-height">
                    On Monday, you walked <span class="badge badge-secondary">{props.results.firstAdv}</span> into Tim’s office. It turned out Tim just wanted to give you a birthday surprise and invited you to play a UNO game.    
                    </p> 

                    <p class="h6 m-2 line-height">

                    After the UNO project you had a complicated feeling about the UNO game, so you could not help but <span class="badge badge-secondary">{props.results.secondVerb}</span> the UNO cards in front of him.
                    </p>
                </div>

        </>
    }

}