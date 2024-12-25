// _models/Projects.ts
import { Tag } from './tag';

export class Project {
  id: number;
  name: string;
  description: string;
  footer: Tag[];
  link: string;
  picture: string;

  constructor(id: number, name: string, description: string, footer: Tag[], link: string, picture: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.footer = footer;
    this.link = link;
    this.picture = picture;
  }
}