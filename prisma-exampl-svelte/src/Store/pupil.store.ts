import { writable } from "svelte/store";
import axios from 'axios'

let URL = 'http://localhost:4563/pupils/'

export let pupils = writable<any[]>([])

export function fatchPupils() {
  axios.get(URL)
    .then(res => pupils.set(res.data.pupils))
    .catch(err => alert(err.toString()))
}

export function addPupil(pupil: any) {
  axios.post(URL, Object.fromEntries(pupil))
    .then(res => fatchPupils())
    .catch(err => alert(err.toString()))
}

export function updataPupil(id: string, pupil: any) {
  axios.put(URL +  id, Object.fromEntries(pupil))
    .then(res => fatchPupils())
    .catch(err => alert(err.toString()))
}


export function deleteOne(id: number) {
  axios.delete(URL + id)
    .then(res => fatchPupils())
    .catch(err => alert(err.toString()))
}