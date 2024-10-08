import dynamic from "next/dynamic";
import localfont from "next/font/local";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Image from "next/image";
import Product from "@/components/Product";
import Modal from "@/components/Modal";
import Header from "@/components/Header";
import Form from "@/components/Form";

const CountdownTimer = dynamic(() => import("../components/CountdownTimer"), {
  ssr: false,
});

export const helvetic = localfont({
  src: [
    { path: "../../public/fonts/HELVETICANEUECYR-BOLD.ttf", weight: "700" },
    { path: "../../public/fonts/helvetMedium.ttf", weight: "500" },
    { path: "../../public/fonts/helvetRoman.ttf", weight: "400" },
  ],
});

export const vetren = localfont({
  src: [{ path: "../../public/fonts/VETREN.woff", weight: "400" }],
});

export default function Home() {
  return (
    <div className={`${helvetic.className} fade-in`}>
      <Container>
        <Header />
        <div className='flex items-center justify-between pt-20 tablet:pt-0 mb-[43px] mobile:mb-[118px] relative'>
          <div className='flex items-center flex-col justify-between gap-[145px] tablet:gap-[49px]'>
            <Image
              src={"/icons/starBig.svg"}
              alt='star'
              width={63.78}
              height={108.22}
              className='mr-[-80px] tablet:w-[49px] tablet:h-[82px] tablet:mr-0 mobile:absolute mobile:w-[44px] mobile:h-[74px] mobile:top-[-37px] mobile:left-[15px]'
            />
            <Image
              src={"/images/mainImage.jpg"}
              alt='image'
              width={280}
              height={366}
              className='tablet:w-[130px] tablet:h-[204px] mobile:hidden'
              placeholder='blur'
              blurDataURL='/icons/mainImage1.svg'
            />
            <Image
              src={"/images/mobileMainImage.jpg"}
              alt='image'
              width={221}
              height={157}
              className='hidden mobile:block absolute left-0 bottom-[-74px] z-[-1]'
            />
          </div>
          <Image
            src={"/images/mainImage2.jpg"}
            alt='image'
            width={538}
            height={703}
            className='tablet:w-[296px] tablet:h-[415px] mobile:hidden'
          />
          <Image
            src={"/images/mobileMainImage3.jpg"}
            alt='image'
            width={273}
            height={358}
            className=' mobile:block hidden'
          />
          <div className='flex items-center flex-col justify-between gap-[79px] tablet:gap-[53px]'>
            <Image
              src={"/images/mainImage3.jpg"}
              alt='image'
              width={280}
              height={366}
              className='tablet:w-[130px] tablet:h-[180px] mobile:hidden'
            />
            <Image
              src={"/images/mobileMainImage2.jpg"}
              alt='image'
              width={90}
              height={234}
              className='hidden mobile:block absolute right-0 top-[-25px] z-[2]'
            />
            <Image
              src={"/icons/starBig.svg"}
              alt='star'
              width={63.78}
              height={108.22}
              className='ml-[-80px] tablet:w-[44px] tablet:h-[74px] tablet:ml-0 mobile:absolute mobile:w-[44px] mobile:h-[74px] mobile:bottom-[-37px] mobile:right-[2px]'
            />
          </div>
        </div>
        <p className='font-bold text-[#1A1921] text-[86px] tablet:text-[48px] mobile:text-[42px] mobile:tracking-[-2.1px] tablet:tracking-[-2.4px] tracking-[-4.3px] leading-[80px] tablet:leading-none mb-[43px] text-center mobile:text-start'>
          Скидки до 30%{" "}
          <span className='font-normal'>на нужные товары для вашего дома!</span>
        </p>
        <div className='flex justify-center mb-[88px] tablet:mb-[61px] mobile:mb-12'>
          <Modal className='!w-[500px] !h-[90px] !text-[36px] !tracking-[-1.8px] tablet:!w-[350px] mobile:!w-[343px] tablet:!h-[74px] tablet:!text-[24px] tablet:!tracking-[-1.2px]' />
        </div>
        <div className='bg-[#BBBBBB] h-[1px] w-full mb-[85px] tablet:mb-[50px] mobile:mb-5' />
        <div className='flex items-center justify-between mb-[88px] tablet:mb-[50px] tablet:flex-col tablet:gap-[50px] mobile:mb-5 mobile:gap-y-5'>
          <p className='text-[#1A1921] text-[86px] tablet:text-[64px] mobile:text-[40px] mobile:tracking-[-2px] tablet:tracking-[-3.2px] tablet:leading-none mobile:leading-[80px] leading-[80px] tracking-[-4.3px]'>
            До конца <span className='font-normal'>акции</span>
          </p>
          <CountdownTimer />
        </div>
        <div className='bg-[#BBBBBB] h-[1px] w-full mb-[94px] tablet:mb-[59px] mobile:mb-[35px]' />
        <div className='flex mb-[140px] px-[148px] tablet:px-0 tablet:mb-[56px] mobile:mb-[49px] tablet:flex-wrap tablet:gap-y-6 mobile:gap-y-4'>
          <Product
            size={{ w: 254, h: 224 }}
            img='product1'
            lost='2'
            text='Разделитель для холодильных полок (2 шт.)'
            price={{ first: "85 000 сум", second: "40 000 сум" }}
            imageClass='mobile:!h-[204px] tablet:!w-[166px] tablet:!h-[270px] mobile:!w-[128px] mt-[-20px] mobile:mt-0'
            imgMobile='mobileProduct1'
            className='mobile:!border-r-[1px]'
            noneRightBorder
          />
          <Product
            size={{ w: 296, h: 394 }}
            img='product2'
            lost='2'
            text='Зажим, крючок для полотенец (2 шт.)'
            price={{ first: "75 000 сум", second: "40 000 сум" }}
            imgMobile='product2'
            imageClass='mobile:!h-[216px] mobile:w-[162px] mt-[-20px]'
            className=' tablet:border-r-[1px]'
          />
          <Product
            size={{ w: 228, h: 279 }}
            img='product9'
            lost='4'
            text='Карманная шкатулка для украшений'
            price={{ first: "100 000 сум", second: "50 000 сум" }}
            imgMobile='mobileProduct9'
            imageClass='mobile:!h-[13] mobile:w-[130px] mobile:mt-[-10px] mt-10 tablet:w-[174px] tablet:h-[213px] tablet:mt-3'
            noneLeftBorder
            className='mobile:!border-l-[1px]'
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
        >
          <div className='flex items-end tablet:items-center pl-[200px] tablet:pl-[98px] mobile:pl-0 mobile:justify-center relative gap-[51px] mb-3 mobile:mb-0'>
            <p
              className={`${vetren.className} text-[86px] tablet:text-[72px] mobile:text-[64px] mobile:tracking-[-3.2px] tablet:tracking-[-3.6px] tracking-[-4.3px] leading-[80px] text-[#1A1921]`}
            >
              РАСПРОДАЖА
            </p>
            <Image
              src={"/icons/starSmall.svg"}
              width={60}
              height={82}
              alt='star'
              className='mb-1 tablet:mb-0 mobile:hidden'
            />
            <Image
              src={"/icons/circleLine.svg"}
              alt='line'
              width={610}
              height={585.72}
              className='absolute left-[310px] top-[-6px] tablet:top-[-18px] z-[-1] tablet:w-[588.39px] tablet:h-[185.72px] tablet:left-[10px] mobile:hidden'
            />
            <Image
              src={"/icons/mobileCircleLine1.svg"}
              alt='line'
              width={447}
              height={417}
              className='hidden mobile:block absolute top-[22px] z-[-1]'
            />
          </div>
          <div className='flex justify-end mb-[68px] mobile:pl-4 tablet:mb-[86px] mobile:mb-[35px] pr-[100px] tablet:pr-0 mobile:justify-between'>
            <Image
              src={"/icons/starSmall.svg"}
              width={52}
              height={52}
              alt='star'
              className='mobile:block hidden'
            />
            <p className='text-[#1A1921] text-[20px] tracking-[-1px] w-[580px] tablet:w-[370px] leading-5 mobile:text-base mobile:tracking-[-0.8px] mobile:w-[239px] mobile:leading-4'>
              Превратите каждое пространство в уютный уголок с нашими
              изысканными предложениями.
            </p>
          </div>
        </motion.div>
        <div className='flex mb-[140px] px-[148px] tablet:px-0 tablet:mb-[56px] mobile:mb-[49px] tablet:flex-wrap tablet:gap-y-6 mobile:gap-y-4'>
          <Product
            size={{ w: 213, h: 403 }}
            img='product3'
            lost='2'
            text='Разделитель для холодильных полок (2шт, большой)'
            price={{ first: "75 000 сум", second: "60 000 сум" }}
            imgMobile='product3'
            imageClass='mobile:!h-[13] mobile:w-[100px] mobile:!h-[250px] mobile:mt-[-25px] tablet:!w-[160px] tablet:!h-[271px]'
            noneRightBorder
            className='mobile:!border-r-[1px]'
          />
          <Product
            size={{ w: 276, h: 394 }}
            img='product4'
            lost='2'
            text='Наклейки для ковров (фигурные 4 шт.)'
            price={{ first: "125 000 сум", second: "100 000 сум" }}
            imgMobile='product4'
            imageClass='mobile:!h-[240px] mobile:!w-[223px] mobile:mt-[-25px]'
          />
          <Product
            size={{ w: 264, h: 352 }}
            img='product5'
            lost='2'
            text='Держатель для швабры'
            price={{ first: "65 000 сум", second: "50 000 сум" }}
            imgMobile='product5'
            imageClass='mobile:!h-[189px] mobile:w-[129px] '
            noneLeftBorder
            className='mobile:!border-l-[1px]'
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          className='tablet:relative'
        >
          <div className='flex relative items-center justify-between mb-[14px] mobile:mb-6 tablet:mb-0 pl-[85px] pr-[70px] mobile:p-0 mobile:justify-center tablet:pl-[107px] tablet:pr-0'>
            <Image
              src={"/icons/starSmall.svg"}
              alt='star'
              width={100}
              height={106}
              className='tablet:hidden'
            />
            <p
              className={`${vetren.className} text-[86px] mobile:text-[39px] mobile:tracking-[-1.95px] tracking-[-4.3px] leading-[80px] mobile:leading-none text-[#1A1921] tablet:text-[64px] tablet:tracking-[-3.2px]`}
            >
              СОЗДАЙ СЕБЕ КОМФОРТ
            </p>
            <Image
              src={"/icons/circleLine2.svg"}
              alt='line'
              width={1101}
              height={145}
              className='absolute z-[-1] left-[45px] top-[-40px] tablet:left-0 tablet:top-[-2px] mobile:hidden'
            />
            <Image
              src={"/icons/mobileLine2.svg"}
              alt='line'
              width={316}
              height={47}
              className='absolute z-[-1] left-3 top-[0px] mobile:block hidden'
            />
          </div>
          <p className='text-[#1A1921] text-[20px] tracking-[-1px] ml-[100px] mobile:leading-none tablet:ml-0 mb-[51px] tablet:mb-[62px] mobile:mb-[49px] mobile:w-[187px] mobile:text-[16px] mobile:tracking-[-0.8px] mobile:text-end'>
            Создайте уют в каждом уголке вашего дома.
          </p>
          <Image
            src={"/icons/starSmall.svg"}
            alt='star'
            width={72}
            height={72}
            className='tablet:block hidden absolute right-[55px] bottom-[-18px] mobile:w-[52px] mobile:bottom-[-5px]'
          />
        </motion.div>
        <div className='flex mb-[96px] px-[148px] tablet:gap-y-6 tablet:mb-[56px] tablet:flex-wrap tablet:px-0 mobile:gap-y-8 mobile:mb-11'>
          <Product
            size={{ w: 259, h: 385 }}
            img='product6'
            lost='2'
            text='Силиконовые наклейки для вешалок (20 шт.)'
            price={{ first: "75 000 сум", second: "40 000 сум" }}
            imgMobile='product6'
            imageClass='mobile:!h-[204px] mobile:!w-[171px] mt-[-7px] tablet:w-[190px] tablet:h-[250px] tablet:mt-3'
            className=' tablet:border-r-[1px]'
          />
          <Product
            size={{ w: 257, h: 388 }}
            img='product7'
            lost='2'
            text='Лопатка для сыпучих (2 шт.)'
            price={{ first: "85 000 сум", second: "50 000 сум" }}
            imgMobile='product7'
            imageClass='mobile:!h-[204px] mobile:w-[153px] mobile:mt-[0px] tablet:w-[200px] tablet:h-[250px]'
            noneLeftBorder
            className='mobile:!border-l-[1px]'
          />
          <Product
            size={{ w: 254, h: 394 }}
            img='product8'
            lost='2'
            text='Щетка для удаления пятен'
            price={{ first: "90 000 сум", second: "80 000 сум" }}
            imgMobile='mobileProduct8'
            imageClass='mobile:!h-[208px] mobile:w-[134px] mobile:mt-[-10px] tablet:w-[200px] mobile:mt-[-25px] tablet:h-[280px] tablet:mt-[-20px]'
            noneLeftBorder
            className='mobile:!border-l-[1px]'
          />
        </div>
        <div className='bg-[#BBBBBB] h-[1px] w-full mb-[100px] tablet:mb-10' />
        <Form />
      </Container>
    </div>
  );
}
