import { faker } from '@faker-js/faker'
export class RegistrationModel {
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNumber: string;
  private occupation: string;
  private gender: string;
  private password: string;
  private confirmPassword: string;


  constructor(gender: string, occupation: string, phone: string) {
    const pass = faker.internet.password({ length: 12, memorable: true, pattern: /[A-Z][a-z][1-9][!"#$%&/()=]/, prefix: 'M!3' });
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.email = faker.internet.email({ firstName: this.firstName, lastName: '-' + this.lastName, provider: 'gmail.com', allowSpecialCharacters: false })
    this.phoneNumber = phone; 
    this.occupation = occupation;
    this.gender = gender;
    this.password = pass;
    this.confirmPassword = pass;
  }

  getFirstName(): string { return this.firstName }
  getLastName(): string { return this.lastName }
  getEmail(): string { return this.email }
  getPhoneNumber(): string { return this.phoneNumber }
  getOccupation(): string { return this.occupation }
  getGender(): string { return this.gender }
  getPassword(): string { return this.password }
  getconfirmPassword(): string { return this.confirmPassword }
}

