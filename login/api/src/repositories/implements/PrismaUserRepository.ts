import { PrismaClient } from '@prisma/client'
import { UserEntity } from '../../entities/UserEntity'
import {
  GetUserByEmailReturn,
  LoginReturn,
  UserRepository,
} from '../UserRepository'

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

  async getUserByEmail(email: string): Promise<GetUserByEmailReturn | null> {
    return await prisma.user.findFirst({
      select: {
        email: true,
        id: true,
        name: true,
      },
      where: {
        email,
      },
    })
  }

  async login(email: string): Promise<LoginReturn | null> {
    const user = await prisma.user.findFirst({
      select: {
        email: true,
        id: true,
        name: true,
        password: true,
      },
      where: {
        email,
      },
    })

    return user
  }
}
