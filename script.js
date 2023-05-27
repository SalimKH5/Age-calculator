const display_year=document.getElementById('year')
const display_month=document.getElementById('month')
const display_day=document.getElementById('day')

const text_label=document.getElementsByTagName('label')


const warning_year=document.getElementById('warning-year')
const warning_month=document.getElementById('warning-month')
const warning_day=document.getElementById('warning-day')




function isDateValid(year, month, day) {
    
    year=parseInt(year)
    month=parseInt(month)
    day=parseInt(day)


    const date = new Date(year, month -1,day);
    console.log(date)
    console.log(date.getFullYear() === parseInt(year) &&
    date.getMonth() +1 === month &&
    date.getDate() === day)

    return (
      date.getFullYear() === parseInt(year) &&
      date.getMonth()+1 === month &&
      date.getDate() === day
    );
}  



let day=01
let month=01
let year=2000


display_year.addEventListener("input", function() {
    // Get the input value
    const inputValue = display_year.value;
  
    // Remove any non-numeric characters using regular expression
    const numericValue = inputValue.replace(/\D/g, "").slice(0, 4);
    
    // Update the input value with the numeric value
    year=numericValue
    
    if (!isDateValid(year, month, day)) {
        
        for (i=0;i<text_label.length;i++){
            text_label[i].classList.add('color_warning')
            display_year.classList.add("input-border")
            warning_year.innerHTML="Must be in the past"
            warning_year.classList.add('color_warning')
            
        }
    }else{
        for (i=0;i<text_label.length;i++){
            text_label[i].classList.remove('color_warning')
            display_year.classList.remove("input-border")
            warning_year.innerHTML=""
            warning_year.classList.remove('color_warning')
       }
    
    } 
      
    display_year.value = numericValue;
});

display_month.addEventListener("input", function() {
    // Get the input value
    const inputValue = display_month.value;
  
    // Remove any non-numeric characters using regular expression
    const numericValue = inputValue.replace(/\D/g, "").slice(0, 2);
    
    // Update the input value with the numeric value
    month=numericValue
    if (!isDateValid(year, month, day)) {
        for (i=0;i<text_label.length;i++){
            text_label[i].classList.add('color_warning')
            display_month.classList.add("input-border")
            warning_month.innerHTML="Must be a valid month"
            warning_month.classList.add('color_warning')
        }
    }else{
        for (i=0;i<text_label.length;i++){
            text_label[i].classList.remove('color_warning')
            display_month.classList.remove("input-border")
            warning_month.innerHTML=""
            warning_month.classList.remove('color_warning')
        }
    
    } 
  
    display_month.value = numericValue;

});
  



display_day.addEventListener("input", function() {
    // Get the input value
    const inputValue = display_day.value;
  
    // Remove any non-numeric characters using regular expression
    const numericValue = inputValue.replace(/\D/g, "").slice(0, 2);
    
    // Update the input value with the numeric value
    
    day=numericValue
    if (!isDateValid(year, month, day)) {
        for (i=0;i<text_label.length;i++){
            text_label[i].classList.add('color_warning')
            display_day.classList.add('input-border')
            warning_day.innerHTML="Must be a valid day"
            warning_day.classList.add('color_warning')

        }
    }else{
        for (i=0;i<text_label.length;i++){
            text_label[i].classList.remove('color_warning')
            display_day.classList.remove('input-border')
            warning_day.innerHTML=""
            warning_day.classList.remove('color_warning')
        }
    
    } 
  
    display_day.value = numericValue;

});


  

const Calcul_age=()=>{
   
    if (isDateValid(year, month, day))
    {
        const today = new Date();
        const birthday = new Date(year, month-1, day);
                
                // Calculate the difference in years
        const diffYears = today.getFullYear() - birthday.getFullYear();

        // Calculate the difference in months
        let diffMonths = today.getMonth() - birthday.getMonth();
        diffMonths += diffYears * 12; // Adjust for difference in years

        // Calculate the difference in days
        const diffDays = today.getDate() - birthday.getDate();

        // Handle cases where the day of date2 is less than the day of date1
        if (diffDays < 0) {
        diffMonths--; // Reduce one month
        const lastMonthDate = new Date(today.getFullYear(), birthday.getMonth(), 0);
        diffDays += lastMonthDate.getDate();
        }

        // Calculate the remaining years and months after considering the days
        const remainingYears = Math.floor(diffMonths / 12);
        const remainingMonths = diffMonths % 12;

        // Print the result
        console.log(`${remainingYears} years, ${remainingMonths} months, ${diffDays} days`);

                
        document.getElementById('year-now').innerHTML=remainingYears
        document.getElementById('month-now').innerHTML=remainingMonths
        document.getElementById('days-now').innerHTML=diffDays

                        
    }else{
        alert('please enter a valid date')
    }
}
