import { PrismaClient } from '@prisma/client'
import { UserEntity } from '../../entities/UserEntity'
import { UserRepository } from '../UserRepository'

const prisma = new PrismaClient()

export class PrismaUserRepository implements UserRepository {
  async create({ email, id, name, password }: UserEntity): Promise<void> {
    await prisma.user.create({
      data: {
        email,
        id,
        name,
        password,
      },
    })
  }
}
