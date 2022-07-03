import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard'
import { IdValidationPipe } from 'src/pipes/id-validation.pipe'
import { CreateTopPageDto } from './dto/create-top-page.dto'
import { FindTopPageDto } from './dto/find-top-page.dto'
import {
  TOP_PAGES_BY_CATEGORY_NOT_FOUND_ERROR,
  TOP_PAGE_NOT_FOUND_ERROR,
} from './top-page.constants'
import { TopPageModel } from './top-page.model'
import { TopPageService } from './top-page.service'

@Controller('top-page')
export class TopPageController {
  constructor(private readonly topPageService: TopPageService) {}

  @UseGuards(new JwtAuthGuard())
  @UsePipes(new ValidationPipe())
  @Post('create')
  async(@Body() dto: CreateTopPageDto) {
    return this.topPageService.create(dto)
  }

  @Get(':id')
  async get(@Param('id', IdValidationPipe) id: string) {
    const topPage = await this.topPageService.findById(id)
    if (!topPage) {
      throw new NotFoundException(TOP_PAGE_NOT_FOUND_ERROR)
    }
    return topPage
  }

  @Get('byAlias/:alias')
  async getByAlias(@Param('alias') alias: string) {
    const topPageByAlias = await this.topPageService.findByAlias(alias)
    if (!topPageByAlias) {
      throw new NotFoundException(TOP_PAGE_NOT_FOUND_ERROR)
    }
    return topPageByAlias
  }

  @UseGuards(new JwtAuthGuard())
  @Delete(':id')
  async delete(@Param('id', IdValidationPipe) id: string) {
    const deletedToPage = this.topPageService.delete(id)
    if (!deletedToPage) {
      throw new NotFoundException(TOP_PAGE_NOT_FOUND_ERROR)
    }
  }

  @UseGuards(new JwtAuthGuard())
  @UsePipes(new ValidationPipe())
  @Patch(':id')
  async patch(@Param('id', IdValidationPipe) id: string, @Body() dto: CreateTopPageDto) {
    const updatedTopPage = this.topPageService.updateById(id, dto)
    if (!updatedTopPage) {
      throw new NotFoundException(TOP_PAGE_NOT_FOUND_ERROR)
    }
    return updatedTopPage
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('/find-by-category')
  async find(@Body() dto: FindTopPageDto) {
    const topPages = await this.topPageService.findTopPagesByCategory(dto)
    return topPages
  }
}
