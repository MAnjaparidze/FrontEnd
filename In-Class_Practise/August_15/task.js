let Task = function (data) {
    this.name = data.name;
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
}

Task.prototype.getPriority = function () {
    this.flyweight.priority;
}

function FlyWeight(project, priority, user, completed) {
    this.priority = priority;
    this.project = project;
    this.user = user;
    this.completed = completed;
}

let FlyweightFactory = function () {
    let flyweight = {};
    let get = function (project, priority, user, completed) {
        let currentObjectKey = project + priority + user + completed;
        if (!flyweight[currentObjectKey]) {
            flyweights[currentObjectKey] = new FlyWeight(project, priority, user, completed);
        }
    }
}()



