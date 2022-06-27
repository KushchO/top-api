import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface TopPageModel extends Base {}

export enum TopLevelCategory {
  Courses,
  Servisec,
  Books,
  Products,
}

export class TopPageHH {
  @prop()
  count: number

  @prop()
  juniorSalary: number

  @prop()
  middleSalary: number

  @prop()
  seniorSalary: number
}

export class TopPAgeAdvantages {
  @prop()
  title: string

  @prop()
  description: string
}

export class TopPageModel extends TimeStamps implements TopPageModel {
  @prop({ enum: TopLevelCategory })
  firstLevelCatagory: TopLevelCategory

  @prop()
  secondCategory: string

  @prop()
  title: string

  @prop()
  category: string
  hh?: TopPageHH

  @prop({ type: () => [TopPAgeAdvantages] })
  advantages: TopPAgeAdvantages[]

  @prop()
  seoText: string

  @prop({ type: () => [String] })
  tags: string[]

  @prop()
  tagsTitle: string
}
