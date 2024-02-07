import { WorkingDirectory, myGitID as gitID } from "./modulesExample";
import * as Helpers from "./utility";


let myDirectory = WorkingDirectory;
let hiddenGitId = gitID;
let getName = Helpers.getInputValue('playerName');
let sayHello = Helpers.logger(`Hello, ${getName}`);