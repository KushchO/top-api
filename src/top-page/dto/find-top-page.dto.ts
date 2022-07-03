import { IsEnum, IsNotEmpty } from 'class-validator'
import { TopLevelCategory } from '../top-page.model'

export class FindTopPageDto {
  @IsNotEmpty()
  @IsEnum(TopLevelCategory)
  readonly firstLevelCatagory: TopLevelCategory
  firstCategory: TopLevelCategory
}
