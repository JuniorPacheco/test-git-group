import React from 'react'

const Junior = () => {
  return (
    <article className='bg-green-600 text-white text-xl p-4 cursor-pointer rounded-md hover:shadow-2xl hover:shadow-green-500 transition duration-300'>
      <h2 className='text-3xl font-bold text-center'>Junior Pacheco</h2>
      <ul className='flex flex-col gap-2 mt-2'>
        <li>Videojuegos (Monster hunter, god of war...)</li>
        <li>Ejercicio (Calistenia, Gym)</li>
        <li>Comer (Hamburguesa, Picadas)</li>
        <li>Voleibol</li>
      </ul>
    </article>
  )
}

export default Junior