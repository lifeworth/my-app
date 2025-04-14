'use client'
import { Button } from '@heroui/button'
import React from 'react'

import { PrismaClient } from '../../../../prisma/generated/prisma/client'


export default function UserPage() {

  const prisma = new PrismaClient()


  const handlerAdd = async () => {
    console.log('add')
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
  }
  return (
    <div>
      <Button onPress={() => handlerAdd()}>Add button</Button>
    </div>
  )
}
