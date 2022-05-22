import { Pupil } from "@prisma/client";
import { Router } from "express";
import pupilService from "../service/pupil.service";
import { handleError } from "../util";

const router = Router()

router.get('/', async (req, res) => {
  try {
    let pupils = await pupilService.findAll()
    res.json({
      message: 'Pupils retrived',
      pupils
    })
  }
  catch (err: any) {
    res.status(500).send(handleError(err))
  }
})

router.post('/', async (req, res) => {
  let pupil: Pupil = {
    id: req.body.id,
    name:    req.body.name,
    surname: req.body.surname,
    photo:   req.body.photo,
    group:   req.body.group
  }

  pupilService.create(pupil)
    .then(pupil => res.send({ message: 'Pupil Create.', pupil }))
    .catch(err => res.status(500).send(handleError(err)))
})

router.delete('/:id', async (req, res) => {
  pupilService.remove(+req.params.id)
    .then(pupil => res.send({ message: 'Pupils deleted.', pupil }))
    .catch(err => res.status(500).send(handleError(err)))
})

router.put('/:id', (req, res) => {
  let pupil: Pupil = {
    id: req.body.id,
    name: req.body.name,
    surname: req.body.surname,
    photo: req.body.photo,
    group: req.body.group
  }

  pupilService.create(pupil)
    .then(pupil => res.send({ message: 'Pupil Create.', pupil }))
    .catch(err => res.status(500).send(handleError(err)))
})

export default router

