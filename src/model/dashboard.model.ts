export class DashboardModel {
  private categories: string[];
  private password: string;

  constructor(categories: string[], password: string) {
    this.categories = categories;
    this.password = password;
  }
  getCategories(): string[] { return this.categories }
  getPassword(): string { return this.password }
}