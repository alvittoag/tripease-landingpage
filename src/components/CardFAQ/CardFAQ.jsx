import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.858398" width="44" height="44" rx="22" fill="#E5F2FF"/>
    <path d="M17 20.8584L22 25.8584L27 20.8584H17Z" fill="#0080FF"/>
    </svg>

  );
}
 
export default function CardFAQ(props) {
  const [open, setOpen] = useState(0);
  const { text, description } = props
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className='bg-white py-[23px] max-w-[910px] border border-[#D2D7E0] px-[32px] flex justify-between items-center cursor-pointer mb-[32px] hover:bg-[#f9fcff]'>
          {text}
        </AccordionHeader>
        <AccordionBody className='max-w-[910px] p-5 px-10 bg-white border border-[#D2D7E0] mb-[32px] text-[#262627] text-[20px] leading-loose'>
          {description}
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
