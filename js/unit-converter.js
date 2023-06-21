// Google Unit Converter
// fetch DOM objects
const unitType = document.querySelector('.row1');
const unit1 = document.getElementById('unit1');
const unit2 = document.getElementById('unit2');
const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const formula = document.getElementById('formula');

// change unit(list)s to match selected unit type, AND set defaults
unitType.addEventListener('change',changeUnit);

// convert units (according to unit type) whenever input value is changed
value1.addEventListener('change', convert);
value2.addEventListener('change', convert);

function changeUnit(){
    switch(unitType.value){
        case 'distance':
            value1.value = '1';
            value2.value = '5280';
        
            unit1[0].value='mi';
            unit1[0].textContent='Mile';
            
            unit2[0].value='ft';
            unit2[0].textContent='Foot';
            formula.textContent = "1 mi = 5280 ft";
        break;
        case 'length':
            value1.value = '1';
            value2.value = '2.54';
        
            unit1[0].value='in';
            unit1[0].textContent='Inch';
            
            unit2[0].value='cm';
            unit2[0].textContent='Centimeter';
            formula.textContent = "1 in = 2.54 cm";
        break;
        case 'weight':
            value1.value = '1';
            value2.value = '2.20462';

            unit1[0].value='kg';
            unit1[0].textContent='Kilogram';
            
            unit2[0].value='lb';
            unit2[0].textContent='Pound';
            formula.textContent = "1 kg = 2.20462 lb";
        break;
        case 'time':
            value1.value = '1';
            value2.value = '60';

            unit1[0].value='sec';
            unit1[0].textContent='Second';
            
            unit2[0].value='min';
            unit2[0].textContent='Minute';
            formula.textContent = "1 min = 60 sec";
        break;
        default:
            value1.value = '212';
            value2.value = '100';

            unit1[0].value='f'
            unit1[0].textContent='Fahrenheit';
            
            unit2[0].value='c';
            unit2[0].textContent='Celsius';
            formula.textContent = "F = C * 9/5 + 32";
        break;
    }
}
            
function convert(){
    //console.log(this.id);
    console.log(value1.value);
    console.log(value2.value);
    switch(unitType.value){
        case 'distance':
            //value1 - mile
            //value2 - foot
            if(this.id=='value1'){
                value2.value=value1.value*5280;
            }else{
                value1.value=value2.value/5280;
            }
        break;
        case 'length':
            //value1 - inch
            //value2 - centimeter
            if(this.id=='value1'){
                value2.value=value1.value*2.54;
            }else{
                value1.value=value2.value/2.54;
            }
        break;
        case 'weight':
            //value1 - kilogram
            //value2 - pound
            if(this.id=='value1'){
                value2.value=(value1.value*2.20462).toFixed(5);
            }else{
                value1.value=(value2.value/2.20462).toFixed(5);
            }
        break;
        case 'time':
            //value1 - second
            //value2 - minute
            if(this.id=='value1'){
                value2.value=value1.value/60;
            }else{
                value1.value=value2.value*60;
            }
        break;
        default:
            //value1 - fahrenheit
            //value2 - celsius
            if(this.id=='value1'){
                value2.value=((Number(value1.value) - 32) * 5 / 9).toFixed(5);
            }else{
                value1.value=(Number(value2.value) * 9 / 5 + 32).toFixed(5);
            }
        break;
    }
}