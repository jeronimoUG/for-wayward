/**
 * @author Uno Siniestro
 */

var newHealth = '<svg id="health-new" width="31.5" height="75" >'+
'    <defs>'+
'        <clipPath id="health-mask" >'+
'            <path d="M25.8,45.8c-0.1-0.1-0.1-0.2-0.2-0.3c0.8-0.9,1.6-1.9,2.2-2.9c3.5-5.4,6-15.7,0-19.2c-0.3-0.2-0.7-0.4-1-0.5'+
'    c0.5-0.8,0.9-1.7,1-2.7c0.1-1.7-0.7-3.1-1.4-4.4c-0.2-0.4-0.4-0.7-0.6-1.1c-1.7-3.6-0.9-8,0.1-11.8c0.2-0.8-0.3-1.5-1-1.7'+
'    c-0.8-0.2-1.5,0.3-1.7,1c-1.1,4.3-1.9,9.3,0.1,13.6c0.2,0.4,0.4,0.8,0.6,1.2c0.6,1,1.1,2,1,2.9c-0.1,0.9-0.7,2-1.5,2.7'+
'    c-4.3,0.5-7.7,4.8-7.7,4.8h0c0,0-0.9-1.3-2.4-2.4c0.7-1,1.5-2.2,1.8-3.5c0.3-1.1,0.3-2.3,0.2-3.4l-0.1-4.5c0-0.4,0-1.3,0.2-1.5'+
'    c0.5-0.6,0.5-1.5-0.1-2c-0.6-0.5-1.5-0.5-2,0.1c-1.1,1.1-1,2.6-1,3.5l0.1,4.4c0,0.9,0.1,1.7-0.1,2.5c-0.2,0.9-0.8,1.7-1.5,2.6'+
'    c-1.4-0.7-3-1.1-4.6-0.9c-0.7-1.1-1.2-2.3-1.6-3.6c-0.2-0.8-0.3-1.4-0.3-2c0.1-1.7,1.2-3.3,2.4-4.9c0.8-1.1,1.6-2.3,2.2-3.6'+
'    c1-2.3,1.2-5,0.4-7.4c-0.2-0.7-1-1.2-1.8-0.9C7,0.3,6.6,1.1,6.8,1.8c0.6,1.8,0.4,3.8-0.3,5.4c-0.5,1.1-1.2,2.1-2,3.1'+
'    c-1.4,1.9-2.8,3.9-2.9,6.4c0,0.9,0.1,1.7,0.3,2.8c0.4,1.3,0.9,2.6,1.6,3.8c-5.9,3.5-3.4,13.9,0.1,19.2c0.2,0.3,0.4,0.6,0.6,0.9'+
'    c-0.2,0.7-0.5,1.4-0.8,2.1c-0.1,0.2-0.2,0.5-0.3,0.7c-2.3,5.9-2.4,11.6-0.4,16.2c0.3,0.6,0.6,1.2,0.9,1.8c0.5,0.9,0.9,1.7,1.2,2.5'+
'    c0.7,1.9,0.5,4.1,0.3,6.2c-0.1,0.8,0.5,1.5,1.3,1.5c0.1,0,0.1,0,0.2,0c0.7,0,1.3-0.5,1.4-1.3c0.3-2.4,0.4-4.9-0.4-7.3'+
'    c-0.4-1.1-0.9-2-1.4-2.9c-0.3-0.6-0.6-1.1-0.8-1.6c-2.4-5.2-0.7-11.1,0.4-14.1c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.1-0.3,0.2-0.5'+
'    c4.1,4.5,9.4,7.9,9.4,7.9l0,0c0,0,0.3-0.2,0.8-0.6c0,0.4-0.1,0.7-0.1,1.1c-0.1,1.5,0.2,2.9,0.4,4.3c0.1,0.7,0.2,1.4,0.3,2.1'+
'    c0.3,2.7-0.1,5.5-1,8c-0.3,0.7,0.1,1.5,0.9,1.8c0.2,0.1,0.3,0.1,0.5,0.1c0.6,0,1.1-0.4,1.3-0.9c1.1-2.9,1.5-6.1,1.2-9.3'+
'    c-0.1-0.8-0.2-1.5-0.3-2.3c-0.2-1.3-0.4-2.6-0.4-3.8c0-1.4,0.4-2.8,1-4.1c1-0.8,2.1-1.8,3.2-2.9c0.4,0.7,0.7,1.4,1.1,2.2'+
'    c1.9,4.3,2.4,9.3,1.4,14.1c-0.2,0.8-0.4,1.5-0.6,2.4c-0.6,2.4-1.3,4.9-0.9,7.5c0.1,0.7,0.7,1.2,1.4,1.2c0.1,0,0.1,0,0.2,0'+
'    c0.8-0.1,1.3-0.8,1.2-1.6c-0.3-2.1,0.3-4.2,0.9-6.4c0.2-0.8,0.4-1.6,0.6-2.5c1.1-5.4,0.6-11-1.5-15.8C26.8,47.7,26.3,46.7,25.8,45.8'+
'    z"/>'+
'            </clipPath>'+
'        </defs>'+
'        <path fill="white" d="M25.8,45.8c-0.1-0.1-0.1-0.2-0.2-0.3c0.8-0.9,1.6-1.9,2.2-2.9c3.5-5.4,6-15.7,0-19.2c-0.3-0.2-0.7-0.4-1-0.5'+
'    c0.5-0.8,0.9-1.7,1-2.7c0.1-1.7-0.7-3.1-1.4-4.4c-0.2-0.4-0.4-0.7-0.6-1.1c-1.7-3.6-0.9-8,0.1-11.8c0.2-0.8-0.3-1.5-1-1.7'+
'    c-0.8-0.2-1.5,0.3-1.7,1c-1.1,4.3-1.9,9.3,0.1,13.6c0.2,0.4,0.4,0.8,0.6,1.2c0.6,1,1.1,2,1,2.9c-0.1,0.9-0.7,2-1.5,2.7'+
'    c-4.3,0.5-7.7,4.8-7.7,4.8h0c0,0-0.9-1.3-2.4-2.4c0.7-1,1.5-2.2,1.8-3.5c0.3-1.1,0.3-2.3,0.2-3.4l-0.1-4.5c0-0.4,0-1.3,0.2-1.5'+
'    c0.5-0.6,0.5-1.5-0.1-2c-0.6-0.5-1.5-0.5-2,0.1c-1.1,1.1-1,2.6-1,3.5l0.1,4.4c0,0.9,0.1,1.7-0.1,2.5c-0.2,0.9-0.8,1.7-1.5,2.6'+
'    c-1.4-0.7-3-1.1-4.6-0.9c-0.7-1.1-1.2-2.3-1.6-3.6c-0.2-0.8-0.3-1.4-0.3-2c0.1-1.7,1.2-3.3,2.4-4.9c0.8-1.1,1.6-2.3,2.2-3.6'+
'    c1-2.3,1.2-5,0.4-7.4c-0.2-0.7-1-1.2-1.8-0.9C7,0.3,6.6,1.1,6.8,1.8c0.6,1.8,0.4,3.8-0.3,5.4c-0.5,1.1-1.2,2.1-2,3.1'+
'    c-1.4,1.9-2.8,3.9-2.9,6.4c0,0.9,0.1,1.7,0.3,2.8c0.4,1.3,0.9,2.6,1.6,3.8c-5.9,3.5-3.4,13.9,0.1,19.2c0.2,0.3,0.4,0.6,0.6,0.9'+
'    c-0.2,0.7-0.5,1.4-0.8,2.1c-0.1,0.2-0.2,0.5-0.3,0.7c-2.3,5.9-2.4,11.6-0.4,16.2c0.3,0.6,0.6,1.2,0.9,1.8c0.5,0.9,0.9,1.7,1.2,2.5'+
'    c0.7,1.9,0.5,4.1,0.3,6.2c-0.1,0.8,0.5,1.5,1.3,1.5c0.1,0,0.1,0,0.2,0c0.7,0,1.3-0.5,1.4-1.3c0.3-2.4,0.4-4.9-0.4-7.3'+
'    c-0.4-1.1-0.9-2-1.4-2.9c-0.3-0.6-0.6-1.1-0.8-1.6c-2.4-5.2-0.7-11.1,0.4-14.1c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.2,0.1-0.3,0.2-0.5'+
'    c4.1,4.5,9.4,7.9,9.4,7.9l0,0c0,0,0.3-0.2,0.8-0.6c0,0.4-0.1,0.7-0.1,1.1c-0.1,1.5,0.2,2.9,0.4,4.3c0.1,0.7,0.2,1.4,0.3,2.1'+
'    c0.3,2.7-0.1,5.5-1,8c-0.3,0.7,0.1,1.5,0.9,1.8c0.2,0.1,0.3,0.1,0.5,0.1c0.6,0,1.1-0.4,1.3-0.9c1.1-2.9,1.5-6.1,1.2-9.3'+
'    c-0.1-0.8-0.2-1.5-0.3-2.3c-0.2-1.3-0.4-2.6-0.4-3.8c0-1.4,0.4-2.8,1-4.1c1-0.8,2.1-1.8,3.2-2.9c0.4,0.7,0.7,1.4,1.1,2.2'+
'    c1.9,4.3,2.4,9.3,1.4,14.1c-0.2,0.8-0.4,1.5-0.6,2.4c-0.6,2.4-1.3,4.9-0.9,7.5c0.1,0.7,0.7,1.2,1.4,1.2c0.1,0,0.1,0,0.2,0'+
'    c0.8-0.1,1.3-0.8,1.2-1.6c-0.3-2.1,0.3-4.2,0.9-6.4c0.2-0.8,0.4-1.6,0.6-2.5c1.1-5.4,0.6-11-1.5-15.8C26.8,47.7,26.3,46.7,25.8,45.8'+
'    z"/>'+
'    <rect id="health-fill" x="0" y="35" width="31.5" height="75" fill="#FF001D" clip-path="url(#health-mask)" />'+
'    <text id="health-text" x="0" y="37.5" font-size="7px" fill="black" >100%</text>'+
'</svg>';

var newStamina = '<svg id="stamina-new" width="31.5" height="75" >'+
'    <defs>'+
'        <clipPath id="stamina-mask" >'+
'            <path d="M31.1,22.1c0,0-0.1-0.1-0.1-0.1c-0.5-1.2-1.5-2.1-2.5-2.9c-1.9-1.5-4-2.7-6.2-3.6c-0.4-0.8-1-1.4-1.8-1.7'+
'    c-0.3-0.1-0.6-0.2-0.8-0.3c-0.4-0.3-0.7-0.8-0.8-1.4c-0.6-2.4,0.8-5,0.6-7.5c-0.2-2.4-2.2-4.3-4.3-4.6c-0.7-0.1-1.5,0-2.1,0.4'+
'    c-1.2,0.6-1.9,1.9-2.3,3.3c-0.4,1.4-0.4,2.8-0.5,4.3c-0.1,1.8,0,3.9,1.3,4.9c0.5,0.4,1.2,0.6,1.7,1.1c0.8,1,0.3,2.5-0.1,3.8'+
'    c-0.8,2.8-0.7,5.9,0,8.8c-2.1-0.7-4.2-1.3-6.4-1.7c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.4-0.2-0.6-0.3c-0.9-0.6-1.6-1.3-2.6-1.7'+
'    c-0.9-0.4-2.2-0.2-2.7,0.7c-0.1,0.2-0.2,0.5-0.2,0.7c-0.3,1-0.4,2.3,0.2,3.1c0.4,0.6,1.1,0.9,1.7,1c0.7,0.1,1.3-0.1,2-0.2'+
'    c0.4-0.1,0.7-0.2,1.1-0.2c0.1,0,0.3-0.1,0.4-0.1c0.5,0.5,1.1,1,1.6,1.4c2.2,1.6,4.6,2.6,7.2,3.1c0.2,0,0.4,0.1,0.6,0.1'+
'    c0.2,0.5,0.5,1.1,0.8,1.6c-3.7,1.6-7,4.5-9.1,8.2c-0.4,0.7-0.8,1.4-0.9,2.2c0,0,0,0,0,0.1c0,0,0,0-0.1,0c0.2,4,2.9,7.2,5.6,9.9'+
'    c1.9,1.9,4,3.7,6.4,4.6c0,0.5,0,1.1,0.1,1.6c0.2,2,0.4,4.2,0,6.1C17.7,67,17.6,67.7,18,68c0.9-0.5,1.6-1.3,2.2-2.1'+
'    c0.4-0.5,0.8-1.1,1-1.7c0.5-1.2,0.3-2.5,0.2-3.8c0.2,0.7,0.5,1.3,0.7,2c1,2.5,2.1,5.1,3.8,7c-1.2,1.6-2.4,3.1-4.1,4'+
'    c-0.4,0.2-1,0.6-0.9,1.1c0.9,0.4,1.9,0.5,2.8,0.5c0.6,0,1.2,0,1.8-0.2c1.4-0.5,2.3-2,3.4-3.2c0.3-0.4,0.7-0.7,0.9-1.2'+
'    c0.1-0.4,0.1-0.8,0-1.2c-0.1-0.5-0.4-1.1-0.8-1.4c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2-1.2-0.7-2.4-1-3.6c-0.8-3.2-0.3-6.7-1.7-9.6'+
'    c-0.2-0.3-0.3-0.6-0.5-0.9c0.9-1.9,1.5-4,1.7-6.2c0.2-1.7,0.2-3.4,0-5.1c-0.2-2.8-0.8-5.6-2.1-8c0,0,0,0,0-0.1'+
'    c0-0.6-0.2-1.2-0.6-1.7c0,0,0-0.1,0-0.1c0.3-0.2,0.7-0.4,1-0.7c2.1-1.6,4-3.7,5.4-6.2c0.3-0.5,0.6-1.1,0.7-1.7'+
'    C31.6,23.2,31.5,22.5,31.1,22.1z M20.3,56.9c-0.2-0.1-0.5-0.2-0.8-0.3c0,0,0,0,0-0.1c-0.6-1.4-1.8-2.4-2.7-3.5'+
'    c-1.6-2.1-2.4-4.8-4-6.7c0.6-0.2,1.2-0.4,1.8-0.6c1.2-0.5,2.3-1.1,3.4-1.9c0.1,3.3,0.8,6.6,2.2,9.5c-0.1,1.2,0,2.5,0.3,3.7'+
'    C20.5,57,20.4,57,20.3,56.9z M24.3,26.7c-0.1-1.1-0.1-2.2-0.3-3.3c0.4,0.1,0.7,0.3,1.1,0.4c0.4,0.1,0.7,0.2,1.1,0.2'+
'    C25.6,24.9,24.9,25.8,24.3,26.7z"/>'+
'            </clipPath>'+
'        </defs>'+
'        <path fill="white" d="M31.1,22.1c0,0-0.1-0.1-0.1-0.1c-0.5-1.2-1.5-2.1-2.5-2.9c-1.9-1.5-4-2.7-6.2-3.6c-0.4-0.8-1-1.4-1.8-1.7'+
'    c-0.3-0.1-0.6-0.2-0.8-0.3c-0.4-0.3-0.7-0.8-0.8-1.4c-0.6-2.4,0.8-5,0.6-7.5c-0.2-2.4-2.2-4.3-4.3-4.6c-0.7-0.1-1.5,0-2.1,0.4'+
'    c-1.2,0.6-1.9,1.9-2.3,3.3c-0.4,1.4-0.4,2.8-0.5,4.3c-0.1,1.8,0,3.9,1.3,4.9c0.5,0.4,1.2,0.6,1.7,1.1c0.8,1,0.3,2.5-0.1,3.8'+
'    c-0.8,2.8-0.7,5.9,0,8.8c-2.1-0.7-4.2-1.3-6.4-1.7c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.4-0.2-0.6-0.3c-0.9-0.6-1.6-1.3-2.6-1.7'+
'    c-0.9-0.4-2.2-0.2-2.7,0.7c-0.1,0.2-0.2,0.5-0.2,0.7c-0.3,1-0.4,2.3,0.2,3.1c0.4,0.6,1.1,0.9,1.7,1c0.7,0.1,1.3-0.1,2-0.2'+
'    c0.4-0.1,0.7-0.2,1.1-0.2c0.1,0,0.3-0.1,0.4-0.1c0.5,0.5,1.1,1,1.6,1.4c2.2,1.6,4.6,2.6,7.2,3.1c0.2,0,0.4,0.1,0.6,0.1'+
'    c0.2,0.5,0.5,1.1,0.8,1.6c-3.7,1.6-7,4.5-9.1,8.2c-0.4,0.7-0.8,1.4-0.9,2.2c0,0,0,0,0,0.1c0,0,0,0-0.1,0c0.2,4,2.9,7.2,5.6,9.9'+
'    c1.9,1.9,4,3.7,6.4,4.6c0,0.5,0,1.1,0.1,1.6c0.2,2,0.4,4.2,0,6.1C17.7,67,17.6,67.7,18,68c0.9-0.5,1.6-1.3,2.2-2.1'+
'    c0.4-0.5,0.8-1.1,1-1.7c0.5-1.2,0.3-2.5,0.2-3.8c0.2,0.7,0.5,1.3,0.7,2c1,2.5,2.1,5.1,3.8,7c-1.2,1.6-2.4,3.1-4.1,4'+
'    c-0.4,0.2-1,0.6-0.9,1.1c0.9,0.4,1.9,0.5,2.8,0.5c0.6,0,1.2,0,1.8-0.2c1.4-0.5,2.3-2,3.4-3.2c0.3-0.4,0.7-0.7,0.9-1.2'+
'    c0.1-0.4,0.1-0.8,0-1.2c-0.1-0.5-0.4-1.1-0.8-1.4c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2-1.2-0.7-2.4-1-3.6c-0.8-3.2-0.3-6.7-1.7-9.6'+
'    c-0.2-0.3-0.3-0.6-0.5-0.9c0.9-1.9,1.5-4,1.7-6.2c0.2-1.7,0.2-3.4,0-5.1c-0.2-2.8-0.8-5.6-2.1-8c0,0,0,0,0-0.1'+
'    c0-0.6-0.2-1.2-0.6-1.7c0,0,0-0.1,0-0.1c0.3-0.2,0.7-0.4,1-0.7c2.1-1.6,4-3.7,5.4-6.2c0.3-0.5,0.6-1.1,0.7-1.7'+
'    C31.6,23.2,31.5,22.5,31.1,22.1z M20.3,56.9c-0.2-0.1-0.5-0.2-0.8-0.3c0,0,0,0,0-0.1c-0.6-1.4-1.8-2.4-2.7-3.5'+
'    c-1.6-2.1-2.4-4.8-4-6.7c0.6-0.2,1.2-0.4,1.8-0.6c1.2-0.5,2.3-1.1,3.4-1.9c0.1,3.3,0.8,6.6,2.2,9.5c-0.1,1.2,0,2.5,0.3,3.7'+
'    C20.5,57,20.4,57,20.3,56.9z M24.3,26.7c-0.1-1.1-0.1-2.2-0.3-3.3c0.4,0.1,0.7,0.3,1.1,0.4c0.4,0.1,0.7,0.2,1.1,0.2'+
'    C25.6,24.9,24.9,25.8,24.3,26.7z"/>'+
'    <rect id="stamina-fill" x="0" y="35" width="31.5" height="75" fill="#00EA0B" clip-path="url(#stamina-mask)" />'+
'    <text id="stamina-text" x="0" y="37.5" font-size="7px" fill="black" >100%</text>'+
'</svg>';

var newHunger = '<svg id="hunger-new" width="31.5" height="75" >'+
'    <defs>'+
'        <clipPath id="hunger-mask" >'+
'            <path d="M30.2,70.6c0.2,0.8,1.2,0.6,1.2,1.6c0,1-1,1.8-1.7,2.3c-2.1,1.5-3.8-0.5-6.2-0.1c-2.4,0.3-4.1,0.5-6.4-0.5'+
'    c-2.3-1-4.5-2.5-6.3-4.3C3.2,62.1,0.6,49.2,0,38.9c-0.5-9,0.7-20.8,6.6-28C8,9.3,9.9,8.1,11.8,7.3c1-0.4,2.1-0.7,3.3-0.7'+
'    c0.9-1.2,1.9-2.4,2.4-3.8c0.4-1.1-0.2-2.4,0.9-2.7c1.9-0.6,1.6,0.8,2.4,1.8c0.6,0.7,1.4,1.2,2.3,1.4c1.6,0.4,0.8,1.3,1.1,2.5'+
'    c-0.9,0.3-1.8-0.5-2.5,0c-1.1,0.7-1.5,3.1-2.6,2.3c4.1,2.7,2.7,12.5,2.1,15.8c-1.2,6.5-2.2,12.7-1.6,19.3c0.5,5.7,1.7,12.6,5.7,17'+
'    c1.5,1.7,3.3,2.8,4,5.1C29.6,67,29.8,68.8,30.2,70.6z"/>'+
'            </clipPath>'+
'        </defs>'+
'        <path fill="white" d="M30.2,70.6c0.2,0.8,1.2,0.6,1.2,1.6c0,1-1,1.8-1.7,2.3c-2.1,1.5-3.8-0.5-6.2-0.1c-2.4,0.3-4.1,0.5-6.4-0.5'+
'    c-2.3-1-4.5-2.5-6.3-4.3C3.2,62.1,0.6,49.2,0,38.9c-0.5-9,0.7-20.8,6.6-28C8,9.3,9.9,8.1,11.8,7.3c1-0.4,2.1-0.7,3.3-0.7'+
'    c0.9-1.2,1.9-2.4,2.4-3.8c0.4-1.1-0.2-2.4,0.9-2.7c1.9-0.6,1.6,0.8,2.4,1.8c0.6,0.7,1.4,1.2,2.3,1.4c1.6,0.4,0.8,1.3,1.1,2.5'+
'    c-0.9,0.3-1.8-0.5-2.5,0c-1.1,0.7-1.5,3.1-2.6,2.3c4.1,2.7,2.7,12.5,2.1,15.8c-1.2,6.5-2.2,12.7-1.6,19.3c0.5,5.7,1.7,12.6,5.7,17'+
'    c1.5,1.7,3.3,2.8,4,5.1C29.6,67,29.8,68.8,30.2,70.6z"/>'+
'    <rect id="hunger-fill" x="0" y="35" width="31.5" height="75" fill="#B200FF" clip-path="url(#hunger-mask)" />'+
'    <text id="hunger-text" x="0" y="37.5" font-size="7px" fill="black" >100%</text>'+
'</svg>';

var newThirst = '<svg id="thirst-new" width="31.5" height="75" >'+
'    <defs>'+
'        <clipPath id="thirst-mask" >'+
'            <path d="M10.5,0.5c-0.7,0-0.7-0.6-0.7,0.1v0.6c0,0.7,0,2.2,0.7,2.2h0.6c0,6,1.3,11.9-0.7,17.6c-1.4,4-6.7,10.4-8,14.5'+
'    c-0.8,2.5-1.2,5-1.5,7.6c-1.4,11-1,19.1-0.7,30.2c0,0.5,0,1,0.3,1.4c0.5,0.6,1.4,0.5,2.1,0.4c4-0.5,8.8-0.6,13-0.8'+
'    c4.2,0.2,9,0.3,13,0.8c0.7,0.1,1.6,0.2,2.1-0.4c0.3-0.4,0.3-0.9,0.3-1.5c0.4-11.1,0.7-19.2-0.7-30.3c-0.3-2.6-0.7-5.2-1.5-7.6'+
'    c-1.3-4.1-6.6-10.3-8-14.3c-2-5.7-0.6-11.6-0.7-17.6h0.6c0.7,0,0.9-1.5,0.9-2.2V0.6c0-0.7-0.3-0.1-0.9-0.1H10.5z"/>'+
'            </clipPath>'+
'        </defs>'+
'        <path fill="white" d="M10.5,0.5c-0.7,0-0.7-0.6-0.7,0.1v0.6c0,0.7,0,2.2,0.7,2.2h0.6c0,6,1.3,11.9-0.7,17.6c-1.4,4-6.7,10.4-8,14.5'+
'    c-0.8,2.5-1.2,5-1.5,7.6c-1.4,11-1,19.1-0.7,30.2c0,0.5,0,1,0.3,1.4c0.5,0.6,1.4,0.5,2.1,0.4c4-0.5,8.8-0.6,13-0.8'+
'    c4.2,0.2,9,0.3,13,0.8c0.7,0.1,1.6,0.2,2.1-0.4c0.3-0.4,0.3-0.9,0.3-1.5c0.4-11.1,0.7-19.2-0.7-30.3c-0.3-2.6-0.7-5.2-1.5-7.6'+
'    c-1.3-4.1-6.6-10.3-8-14.3c-2-5.7-0.6-11.6-0.7-17.6h0.6c0.7,0,0.9-1.5,0.9-2.2V0.6c0-0.7-0.3-0.1-0.9-0.1H10.5z"/>'+
'    <rect id="thirst-fill" x="0" y="35" width="31.5" height="75" fill="#007FFF" clip-path="url(#thirst-mask)" />'+
'    <text id="thirst-text" x="0" y="37.5" font-size="7px" fill="black" >100%</text>'+
'</svg>';

$('.stats').append('<div class="meters" ></div>');

$('.meters').append(newHealth);
$('.meters').append(newStamina);
$('.meters').append(newHunger);
$('.meters').append(newThirst);

$('#healthcont').hide();
$('#staminacont').hide();
$('#hungercont').hide();
$('#thirstcont').hide();

setHealth();
setStamina();
setHunger();
setThirst();

function setHealth() {
	var yy = Math.round(75-((player.health/player.strength)*75));
	$('#health-fill').attr('y', yy);
	var yp = Math.round((player.health/player.strength)*100);
	$('#health-text').html(yp+'%');
	var yx = (31.5-$('#health-text').width())*0.5;
	$('#health-text').attr('x', yx);
}

function setStamina() {
	var yy = Math.round(75-((player.stamina/player.dexterity)*75));
	$('#stamina-fill').attr('y', yy);
	var yp = Math.round((player.stamina/player.dexterity)*100);
	$('#stamina-text').html(yp+'%');
	var yx = (31.5-$('#stamina-text').width())*0.5;
	$('#stamina-text').attr('x', yx);
}

function setHunger() {
	var yy = Math.round(75-((player.hunger/player.starvation)*75));
	$('#hunger-fill').attr('y', yy);
	var yp = Math.round((player.hunger/player.starvation)*100);
	$('#hunger-text').html(yp+'%');
	var yx = (31.5-$('#hunger-text').width())*0.5;
	$('#hunger-text').attr('x', yx);
}

function setThirst() {
	var yy = Math.round(75-((player.thirst/player.dehydration)*75));
	$('#thirst-fill').attr('y', yy);
	var yp = Math.round((player.thirst/player.dehydration)*100);
	$('#thirst-text').html(yp+'%');
	var yx = (31.5-$('#thirst-text').width())*0.5;
	$('#thirst-text').attr('x', yx);
}

stats = (function() {
    var cached_function = stats;

    return function() {
        // your code
        
        
        
        // ald function

        cached_function.apply(this, arguments); // use .apply() to call it

        // more of your code
        
        setHealth();
        setStamina();
        setHunger();
        setThirst();
        
    };
}());
