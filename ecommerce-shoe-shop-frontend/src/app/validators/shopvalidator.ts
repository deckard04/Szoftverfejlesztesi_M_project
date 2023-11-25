import { FormControl, ValidationErrors } from "@angular/forms";

export class Shopvalidator {

    //whitespace validation
    static notOnlyWhiteSpace(control: FormControl): ValidationErrors {

        if ((control.value != null) && (control.value.toString().trim().length === 0)) {
            return { 'notOnlyWhiteSpace': true };
        }else {
            return null;
        }

    }
}