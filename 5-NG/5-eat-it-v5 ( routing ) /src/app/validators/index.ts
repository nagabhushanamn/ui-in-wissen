
import { FormControl, AbstractControl } from '@angular/forms'

const badWords = [
    'shit'
]
export function badWord(c: AbstractControl): { [key: string]: any } | null {
    let value = c.value;
    if (!badWords.includes(value)) return null
    else return { bad: true }
}
