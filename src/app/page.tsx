import Image from 'next/image'
import Button from '@mui/material/Button';
import Textfield from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
export default function Home() {
  return (
    //min-h-screen
    <main className="flex h-full w-full flex-col items-center justify-between p-24">
      <div className='text-primary-accent'>test1</div>
      <div className='text-primary-yellow'>test2</div>
      <div className='text-teal-700'>test3</div>
      <div className='text-purple-600'>test4</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Textfield variant="outlined">dd</Textfield>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <div className='text-700'>abcdefghijklmnopq</div>
    </main>
  )
}
