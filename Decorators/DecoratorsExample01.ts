
function logClass(message: string): ClassDecorator {
    console.log('logClass init...');
    return function (constructor: Function): void {
        console.log(`Logging from Class:${message}`);
    }
}
@logClass("A-Phone Class")
class Phone {
    private availableCountries: string[];
    constructor(availablePhones: string[]) {
        this.availableCountries = availablePhones;
    }
    public addCountry(country: string) {
        this.availableCountries.push(country);
    }
}