import { API } from '@/config'
import axios from 'axios'
import { Account } from '../models/Account'

export async function getAccounts() {
  try {
    const endpoint = `${API}/accounts`
    const response = await axios.get(endpoint)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export async function getAccount(id: number) {
  try {
    const endpoint = `${API}/accounts/${id}`
    const response = await axios.get(endpoint)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}


export async function lockAccount(account: Account) {
  try {
    const endpoint = `${API}/${account.id}/lock`
    const response = await axios.post(endpoint, account)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export async function unlockAccount(lockaccount: Account) {
  try {
    const endpoint = `${API}/${lockaccount.id}/unlock`
    const response = await axios.put(endpoint, lockaccount)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

