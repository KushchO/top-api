import { Injectable } from '@nestjs/common'
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types'
import { QueryWithHelpers, Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { CreateReviewDto } from './dto/createReview.dto'
import { ReviewModel } from './review.model'

@Injectable()
export class ReviewService {
  constructor(@InjectModel(ReviewModel) private readonly reviewModel: ModelType<ReviewModel>) {}

  async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
    const newDto = { ...dto, productId: new Types.ObjectId(dto.productId) }
    return this.reviewModel.create(newDto)
  }

  async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
    return this.reviewModel.findByIdAndDelete(id).exec()
  }

  async findByProductId(productId: string): Promise<DocumentType<ReviewModel>[]> {
    return this.reviewModel.find({ productId: new Types.ObjectId(productId) }).exec()
  }

  async deleteReviewsByProductId(productId: string) {
    return this.reviewModel.deleteMany({ productId: new Types.ObjectId(productId) }).exec()
  }
}
