import { PrismaClient, Pupil } from "@prisma/client";

const client = new PrismaClient()

async function findAll(): Promise<Pupil[]> {
  return client.pupil.findMany()
}

async function create(pupil: Pupil): Promise<Pupil> {
  return client.pupil.create({
    data: {
      name:    pupil.name,
      surname: pupil.surname,
      group:   pupil.group,
      photo:   pupil.photo
    }
  })
}

async function remove(incomingid: number): Promise<Pupil> {
  return client.pupil.delete({
    where: {id: incomingid}
  })
}

async function updata(incomingid: number, pupil: Pupil): Promise<Pupil>{
  return client.pupil.update({
    data: {
      name: pupil.name,
      surname: pupil.surname,
      group: pupil.group,
      photo: pupil.photo
    },
    where: {id: incomingid}
  })
}


export default {
  findAll,
  create,
  remove,
  updata
}













