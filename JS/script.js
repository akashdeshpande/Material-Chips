function toggleSelectCheckbox(chipId, inputId) {
    /* this function toggles chips on or off. this funtion is built for the checkbox input
       this function does not require group name because many chips/checkboxes can be selected at once and
       checkbox input can have multiple vales
    */

    /* if not selected */
    if (document.getElementById(chipId).classList.contains("chipSelected")){
        //add inputid checked true flag logic in combination with above if statement, in above if statement 
        document.getElementById(chipId).classList.remove("chipSelected"); //change css class
        document.getElementById(chipId).classList.add("chip");

        document.getElementById(inputId).checked = false; //change input checked flag
    }
    else {
        document.getElementById(chipId).classList.add("chipSelected");
        document.getElementById(chipId).classList.remove("chip");

        document.getElementById(inputId).checked = true;
    }
}

function toggleSelectRadio(chipId, inputId, radioGroupName) {

    /* this function toggles chips on or off. this function is built for radio style inputs
       this function requires radioGroupName because we need to turn off all chips that dont have the same radio name
       as radio inputs get toggles due to the name attribute*/

    /* 
    1. check if inputId is not already selected
    2. enable chip, enable radio button
    3. disable all other chips -?
    3.1 if chip with given name is selected, disable chip, disable radio button
    */
}
