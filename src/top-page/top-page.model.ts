import { index, Index, prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface TopPageModel extends Base {}

export enum TopLevelCategory {
  Courses = 'courses',
  Servisec = 'services',
  Books = 'books',
  Products = 'products',
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

export class TopPageAdvantages {
  @prop()
  title: string

  @prop()
  description: string
}

@index({ title: 'text', seoText: 'text' })
export class TopPageModel extends TimeStamps implements TopPageModel {
  @prop({ enum: TopLevelCategory })
  firstLevelCategory: TopLevelCategory

  @prop()
  secondCategory: string

  @prop({ unique: true })
  alias: string

  @prop()
  title: string

  @prop()
  category: string

  @prop({ type: () => TopPageHH })
  hh?: TopPageHH

  @prop({ type: () => [TopPageAdvantages] })
  advantages: TopPageAdvantages[]

  @prop()
  seoText: string

  @prop({ type: () => [String] })
  tags: string[]

  @prop()
  tagsTitle: string
}
