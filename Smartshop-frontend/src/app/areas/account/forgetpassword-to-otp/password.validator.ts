import { AbstractControl } from '@angular/forms';


export function passwordValidator(control:AbstractControl):{[key:string]:boolean}| null {
    const NewPassword=control.get('NewPassword');
    const cpass=control.get('cpass');
    if(NewPassword.pristine||cpass.pristine)
    {
        return null;
    }
    return NewPassword && cpass && NewPassword.value !== cpass.value ?
    {'mismatch':true}:null;
}