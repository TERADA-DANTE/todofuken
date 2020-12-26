import { Injectable } from '@nestjs/common';

import { Result } from './enitities/result.entity';
@Injectable()
export class PostsService {
  private results: Result[] = [];
  getAddress(zipcode: string): Result {
    // What if there is no match?
    return this.results.find((result) => result.zipcode === zipcode);
    // const result = this.results.find((result) => result.zipcode === zipcode)
    // return result ? result : {}
  }
}
