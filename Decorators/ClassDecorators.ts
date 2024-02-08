export function logClass(message: string): ClassDecorator {
    console.log('logClass init...');
    return function (constructor: Function): void {
        console.log(`Logging from Class:${message}`);
    }
}