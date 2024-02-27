type ValidationFunction = (
    target: any,
    propertyKey: string,
    validationOptions?: any
) => string | void;

interface ValidationRule {
    validationOptions?: any;
    validator: ValidationFunction;
}

export function validate(object: any) {
    const keys = Reflect.getMetadata("validation:properties", object) as string[];
    let errorMap = {};
    if (!keys || !Array.isArray(keys)) {
        return errorMap;
    }
    for (const key of keys) {
        const rules: ValidationRule[] = Reflect.getMetadata("validation:rules", object, key) as ValidationRule[];
        if (!Array.isArray(rules)) {
            continue;
        }
        for (const rule of rules) {
            const errorMessage = rule.validator(object, key, rule.validationOptions);
            if (errorMessage) {
                errorMap[key] = errorMap[key] || [];
                errorMap[key].push(errorMessage);
            }
        }
    }
    return errorMap;
}

function addValidation(target: any, propertyKey: string, validator: ValidationFunction, validationOptions?: any) {
    let objectProperties: string[]
        = Reflect.getMetadata("validation:properties", target) || [];
    if (!objectProperties.includes(propertyKey)) {
        objectProperties.push(propertyKey);
        Reflect.defineMetadata("validation:properties", objectProperties, target);
    }
    let validators: ValidationRule[]
        = Reflect.getMetadata("validation:rules", target, propertyKey) || [];
    let validationRule = {
        validator: validator,
        validationOptions: validationOptions
    };
    validators.push(validationRule);
    Reflect.defineMetadata("validation:rules", validators, target, propertyKey);
}

function emailValidator(target: any, propertyKey: string): string | void {
    let value = target[propertyKey];
    if (null == value) {
        return;
    }
    const isValid = isValidEmailChecker(value);
    if (!isValid) {
        return `Property ${propertyKey} must be a valid email.`
    }
    return;
}

function isValidEmailChecker(email: string): boolean {
    let emailPattern = new RegExp(`[a-z0-9._%+-]+@[trivandrum]+\.[a-z]{2,4}$`);
    return emailPattern.test(email);
}

function requiredValidator(target: any, propertyKey: string): string | void {
    let value = target[propertyKey];
    if ('' != value || null != value) {
        return;
    }
    return `Property ${propertyKey} is required`;
}

export function isEmail(target: any, propertyKey: string) {
    addValidation(target, propertyKey, emailValidator);
}

export function isRequired(target: any, propertyKey: string) {
    addValidation(target, propertyKey, requiredValidator);
}