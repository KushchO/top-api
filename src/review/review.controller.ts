import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common'
import { CreateReviewDto } from './dto/createReview.dto'
import { REVIEW_NOT_FOUND } from './review.constants'
import { ReviewService } from './review.service'

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}
  @Post('create')
  async(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedDoc = await this.reviewService.delete(id)
    if (!deletedDoc) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
    }
  }

  @Get('byProduct:productId')
  async getByProduct(@Param('productId') productId: string) {
    return this.reviewService.findByProductId(productId)
  }

  @Post(':productId')
  async deleteReviewsByProductId(@Param('productId') productId: string) {
    return this.reviewService.deleteReviewsByProductId(productId)
  }
}
