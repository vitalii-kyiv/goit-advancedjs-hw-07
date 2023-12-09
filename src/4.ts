class Key {
  constructor(private signature: number = Math.random()) {}

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key = new Key()) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected tenants: Person[] = [];

 constructor(protected key: Key = new Key(), protected door: boolean = false) {}

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    } 
  }

  OpenDoor(key: Key): void{};
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } 
  }
}

const myKey = new Key();
const person = new Person(myKey);
const myHouse = new MyHouse(myKey);


myHouse.comeIn(person);
myHouse.openDoor(person.getKey());

export {};