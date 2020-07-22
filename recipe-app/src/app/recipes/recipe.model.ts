// purposefully left type checks to see how Angular behaves with
// diferent kinds of data.

export class Recipe {
  public name
  public description
  public imagePath

  constructor(name, desc, imagePath) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
