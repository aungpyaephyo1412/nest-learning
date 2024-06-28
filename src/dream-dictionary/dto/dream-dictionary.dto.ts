export class CreateDreamDictionaryDto {
  BlogHeader: DreamDictionaryListDto[];
  BlogDetail: DreamDictionaryDetailDto[];
}

export class DreamDictionaryListDto {
  BlogId: number;
  BlogTitle: string;
}

export class DreamDictionaryDetailDto {
  BlogDetailId: number;
  BlogId: number;
  BlogContent: string;
}
