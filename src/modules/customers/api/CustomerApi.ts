import { API } from '@/config'
import axios from 'axios'
import { Customer } from '../models/Customer'

export async function addCustomer(customer: Customer) {
  try {
    const endpoint = `${API}/customers`
    const response = await axios.post(endpoint, customer)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export async function updateCustomer(customer: Customer) {
  try {
    const endpoint = `${API}/customers/${customer.id}`
    const response = await axios.put(endpoint, customer)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export async function deleteCustomer(id: number) {
  try {
    const endpoint = `${API}/customers/${id}`
    const response = await axios.delete(endpoint)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export async function inactiveCustomer(id: number) {
  try {
    const endpoint = `${API}/customers/${id}`
    const response = await axios.patch(endpoint)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export async function getCustomers() {
  try {
    const endpoint = `${API}/customers`
    const response = await axios.get(endpoint)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}

export async function getCustomer(id: number) {
  try {
    const endpoint = `${API}/customers/${id}`
    const response = await axios.get(endpoint)
    return response
  } catch (error) {
    console.log(error)
    return error.response
  }
}
