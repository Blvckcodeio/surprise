"use client"; 
import { useState } from 'react';

function Firstcard() {
    const [gameStart, setGameStart] = useState(false);
    const [next1, setNext] = useState(1);

    return(
        <>
            <div className="background-container">
                <div className="overlay"></div>
                <div className="headerBox">
                    {!gameStart &&
                        <div className="box-content">
                            <h3>It's your Birthday!!!</h3>
                            <br></br>
                            <p>
                                So how about we play a game?
                            </p>
                            <p>
                                (Built this website in-between work, so pardon how it looks.)
                            </p>
                            <br></br>
                            <div className="button" onClick={() => setGameStart(true)}> Let's Play</div>
                        </div>
                    }
                    {gameStart && next1 === 1 && 
                        <div className="box-content">
                            <h3>Gifts</h3>
                            <p>
                                I have dropped 3 categories of gifts for you which are:
                                </p>
                                <p>* Thoughtful Gift</p>
                                <p>* Reckless Gift</p>
                                <p>* The gift that continues the story</p> 
                                <p>These gifts are in my house. Placed in places I will now give clues about:</p>
                            <br></br>
                            <div className="button" onClick={() => setNext(2)}> Next</div>
                        </div>
                    }
                    {gameStart && next1 === 2 && 
                        <div className="box-content">
                            <h3>Thoughtful gifts</h3>
                            <p>
                                Location: this has been placed in the place where you go to dream. The place where you have your dreams and comforts you till you let go of control. It’s a place where you lie.

                                Have you found the gift? If no, keep searching and don’t read any further. 

                                </p>
                                <b>DON’T READ ANY FURTHER TILL THIS GIFT HAS BEEN FOUND. </b> 
                            <br></br>
                            <div className="button" onClick={() => setNext(3)}> Next</div>
                        </div>
                    }
                    {gameStart && next1 === 3 && 
                        <div className="box-content">
                            <h3>Reckless gifts</h3>
                            <p>
                            The reason why it’s reckless is, it was a reckless buy for me but it doesn’t matter because sometimes life is meant to be reckless and if the recklessness has something that you like within it, I will dive in head first looking for it. 
                            </p>
                            <p>
                            Location: This has been placed in the room that has the junks and lore. The room is downstairs. It’s hidden amongst the chaos.
                            </p>
                                <b>DON’T READ ANY FURTHER TILL THIS GIFT HAS BEEN FOUND. </b> 
                            <br></br>
                            <div className="button" onClick={() => setNext(4)}> Next</div>
                        </div>
                    }
                    {gameStart && next1 === 4 && 
                        <div className="box-content">
                            <h3>The gift that continues the story</h3>
                            <p>
                                This isn't a physical gift, It is 3 words. 3 words I have never meant more since we have met. 

                            </p>
                            <p><b>Don't Loose Yourself</b></p>
                            <p>
                                I pray you get to love yourself more than I love you. I pray all your learning points are easy processes and I pray for strenght to go through the hard ones. Happy Birthday Love
                            </p>
                                <b>The End!</b> 
                            <br></br>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Firstcard;
