import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getProfile() {
    return this.prisma.profile.findFirst({
      include: {
        experiences: true,
        education: true,
        skills: true,
        certifications: true,
      },
    });
  }
}
