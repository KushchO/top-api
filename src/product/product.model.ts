import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

class ProductCharacterisitic {
  @prop()
  name: string

  @prop()
  value: string
}

export interface ProductModel extends Base {}

export class ProductModel extends TimeStamps implements ProductModel {
  @prop()
  image: string

  @prop()
  title: string

  @prop()
  price: number

  @prop()
  oldPrice: number

  @prop()
  calculatingRating: number

  @prop()
  description: string

  @prop()
  advantages: string

  @prop()
  disadvantages: string

  @prop({ type: () => [String] })
  categories: string[]

  @prop({ type: () => [String] })
  tags: string[]

  @prop({ type: () => [ProductCharacterisitic], _id: false })
  characteristics: ProductCharacterisitic[]
}
