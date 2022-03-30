import React, {useState, useRef, useEffect} from "react";
import KUTE from 'kute.js';

function Blob() {

    const [isMouseOver, setIsMouseOver] = useState(false);
    const [hasMouseOver, setHasMouseOver] = useState(false);

    const blobRef = useRef();

    const tween = KUTE.to(blobRef.current, { path: '#blob-state-2' }, {repeat:99, duration:3000, yoyo:true});

    useEffect(() => {

        console.log(tween)
        if (hasMouseOver){
            tween.start();
        }

    }, [hasMouseOver])

    useEffect(() => {

        if (!hasMouseOver){
            isMouseOver && setHasMouseOver(true);
        }

        else{
            if (isMouseOver){
                console.log("Entered");
                tween.resume()
            }

            else {
                console.log("left")
                tween.pause()
            }
        }

    }, [isMouseOver])



    function playPause(){

        if (!hasMouseOver){
            setHasMouseOver(true);
        }

        else{

            if (tween.playing){
                console.log(tween)
                tween.pause();

            }

            else {
                console.log(tween)
                tween.resume();
            }

        }
    }


    //onMouseEnter={()=>setIsMouseOver(true)} onMouseLeave={()=>setIsMouseOver(false)}
    return (
        
        <div className="Blob">

            <div className="blob-container">
                <svg id="vis" viewBox="0 0 900 900" width="900" height="900" 
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                    
                    <g transform="translate(475.7185590015408 406.660252610519)">
                        <path ref={blobRef} id="blob-state-1" d="M171.1 -265.3C214.6 -238.3 237.8 -178.8 264 -120.8C290.2 -62.8 319.3 -6.3 332.5 62.6C345.6 131.6 342.9 213.2 304.8 272.9C266.7 332.7 193.4 370.7 118.5 383.7C43.6 396.6 -32.9 384.4 -109.4 365.3C-186 346.2 -262.7 320.1 -316.2 268.4C-369.7 216.7 -400.2 139.3 -388.6 69.7C-377.1 0.1 -323.6 -61.6 -287.3 -127C-250.9 -192.5 -231.7 -261.5 -186.7 -287.8C-141.6 -314.2 -70.8 -297.7 -3.5 -292.2C63.8 -286.8 127.6 -292.3 171.1 -265.3" fill="#ffd218"></path>
                    </g>

                    <g transform="translate(424.81155019315474 406.18826359167633)">
                        <path id="blob-state-2" d="M167.5 -249.8C230.1 -220.4 302.9 -196 345.3 -145.3C387.7 -94.6 399.7 -17.7 377.7 46C355.6 109.8 299.5 160.3 250.5 217.4C201.6 274.6 159.8 338.3 98.1 375.1C36.4 411.9 -45.2 421.9 -119 401.8C-192.8 381.7 -258.9 331.7 -284.2 266.4C-309.4 201.1 -293.9 120.5 -303.9 44.3C-313.9 -31.9 -349.3 -103.8 -334.6 -159.8C-320 -215.9 -255.1 -256 -191 -284.7C-126.9 -313.4 -63.4 -330.7 -5.5 -322.2C52.4 -313.6 104.9 -279.2 167.5 -249.8" fill="#ffd218"></path>
                    </g>

                </svg>

                <h1>blob</h1>

                <button onClick={playPause} type="button"> Play-Pause </button>
            </div>
        
        </div>
    
    )
}

export default Blob;