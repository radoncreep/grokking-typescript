
type WatchedParameter = {
    methodName: string;
    parameterIndex: number;
}

const watcheParameters: WatchedParameter[] = [];
function Watch(target: any, methodName: string, parameterIndex: number) {
    watcheParameters.push({
        methodName,
        parameterIndex
    })
}


class Vehicle {
    move(@Watch speed: number) {

    }
}