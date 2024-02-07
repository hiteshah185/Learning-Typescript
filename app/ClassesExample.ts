/// <reference path="interfacesExample.ts" />

class Developer {
    public department!: string;
    private _title!: string;

    get title(): string {
        return this._title;
    }
    set title(newTitle: string) {
        this._title = newTitle.toLowerCase();
    }
}

class WebDeveloper extends Developer {
    favoriteEditor!: string;
    writeTypeScript(): void {
        console.log('I am writing typescript');
    }
}