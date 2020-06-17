

export const verification = (id, value ) => {
    let errorMessages = []
    let disabled = false
    let invalid = false
    let touched = true
    let rejex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

           switch (id) {
               case 'password':
                   if (touched && value.length < 6) {
                       invalid = true
                       disabled = true
                       errorMessages.push('Password too short')

                   }
                  break;
                   case 'username':
                   if (touched && value.length < 2) {
                       invalid = true
                       disabled = true
                       errorMessages.push('Username too short')

                   }
                  break;
               case 'email':
                   if (touched && !rejex.test(value)) {
                       invalid = true
                       disabled = true
                       errorMessages.push('Email invalid')
                      

                   }
                   
                  break;
               case 'city':
                   if (touched && value.length < 2) {
                       invalid = true
                       disabled = true
                       errorMessages.push('Invalid city')

                   }

                   break;
               case 'street':
                   if (touched && value.length < 5) {
                       invalid = true
                       disabled = true
                       errorMessages.push('Invalid street')

                   }

                   break;
              

               default:
                   return [invalid, disabled, errorMessages]
           }
    
  
    return{
        
        errorMessages: errorMessages,
        disabled: disabled,
        invalid: invalid,
        value: value
    } 

        }

  


// export const checkVerifyLogin = (email, password) => {
//     let errorMessages = []
//     let invalid = false
//     if (!rejex.test(email)) {
//         invalid = true
//         errorMessages.push('Email invalid')
//     }
//     else if (password.length < 6){
//         invalid = true
//         errorMessages.push('Password too short')
//     }


// return{
// errorMessages: errorMessages,
// invalid: invalid
// }
// }