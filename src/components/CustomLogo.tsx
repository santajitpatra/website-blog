import Image from "next/image"

const CustomLogo = (props: any) => {
  const { renderDefault, title} = props;
  return (
    <div className="flex items-center space-x-2">
       <Image
       className="rounded-full object-cover"
      src="/img.jpeg"
      alt="Picture of the author"
      width={50}
      height={50}
    />
    <>{renderDefault(props)}</>
    </div>
  )
}

export default CustomLogo
