import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { Types } from 'mongoose'

export interface ReviewModel extends Base {}

export class ReviewModel extends TimeStamps implements ReviewModel {
  @prop()
  name: string

  @prop()
  title: string

  @prop()
  description: string

  @prop()
  rating: number

  @prop()
  productId: Types.ObjectId
}
