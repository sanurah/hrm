export class EmployeeModel {

  private _id: number;
  private _firstName: string;

  constructor(id: number, firstName: string) {
    this._id = id;
    this._firstName = firstName;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }
}
