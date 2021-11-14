//Stategy pattern

class Info {
    logging(msg) {
        console.info(msg);
    }
}

class Warn {
    logging(msg) {
        console.warn(msg); //in other cases you will see it will have other information not just log this is why we wrap it
    }
}

class Error {
    logging(msg) {
        console.error(msg);
    }
}

class Table {
    logging(msg) {
        console.table(msg);
    }
}

class Strategy {
    setStrategy(loggingMethod) {
        this.loggingMethod = loggingMethod;
    }

    logging(msg) {
        this.loggingMethod.logging(msg);
    }
}

//TEST CODE
const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);