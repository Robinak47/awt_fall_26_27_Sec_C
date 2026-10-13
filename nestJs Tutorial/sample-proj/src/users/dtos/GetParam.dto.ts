import { Type, Transform } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class GetParamDTO {
  @Transform(({ value }) => {
    // 💡 Logs the raw value and its type before any processing
    console.log(`Raw value:`, value, `| Type:`, typeof value);
    return value;
  })
  @Type(() => Number)
  @IsInt({ message: 'please make sure that the param id is number' })
  id: number;
}
