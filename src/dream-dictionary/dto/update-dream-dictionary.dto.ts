import { PartialType } from '@nestjs/swagger';
import { CreateDreamDictionaryDto } from './create-dream-dictionary.dto';

export class UpdateDreamDictionaryDto extends PartialType(
  CreateDreamDictionaryDto,
) {}
