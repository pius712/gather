import { Get, Param } from '@nestjs/common';
import { ApiController } from '../../support/ApiController';
import { GatheringService } from '../../../domain/gathering/gathering.service';
import { ApiResponse } from '../../support/ApiResponse';
import { GatheringResponseDto } from './response/gathering-response.dto';

@ApiController('gathering')
export class GatheringController {
  constructor(private readonly gatheringService: GatheringService) {}

  @Get(':id')
  async getGathering(@Param('id') id: number) {
    return ApiResponse.ok(
      GatheringResponseDto.toResponse(
        await this.gatheringService.getGathering(id),
      ),
    );
  }
}
