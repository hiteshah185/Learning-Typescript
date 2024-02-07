interface Book {
    name: string;
    author: Author;
    publisher: Publisher;
    yearOfPublication: number;
}
interface Author {
    name: string;
    country: string
    doB: number;
}
interface Publisher {
    publicationHouseName: string;
    chiefEditor: string;
    establishedYear: number;
    headOffice: string;
    noOfEmployees?: number;
    publish(newBook: Book): void;
    recall(oldBook: Book): string;
}