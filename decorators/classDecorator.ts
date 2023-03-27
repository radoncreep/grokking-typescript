type SelectorOptions = {
    selector: string;
}
function Component(options: SelectorOptions) {
    return function (construtor: Function) {
        construtor.prototype.uniqueId = Date.now();
        construtor.prototype.insertInDom = () => {
            console.log("inserting in DOM.");
        }
    }
}

function Pipe(construtor: Function) {
    console.log("Pipe decorator called");
    construtor.prototype.pipe = "Pipe this class";
}

@Component({ selector: "#my-selector" })
@Pipe
class ProfileComponent {}