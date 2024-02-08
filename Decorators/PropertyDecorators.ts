function logProperty(message: string) {
    console.log("logProperty init...");
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor): void {
        console.log(`logProperty message:${message}`);
    }
}