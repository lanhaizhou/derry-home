import GithubSVG from "../../assets/github.svg"
import HomeSVG from "../../assets/home.svg"
import titleIMG from "../../assets/image.png"

const Blog = () => {

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-[20px] lg:mt-[50px] text-lg text-[#444444]">Robert</div>
      <div className="mt-[10px] lg:mt-[20px] text-base text-[#999999]">
        you can not always get what you want
      </div>
      <div className="flex space-x-4 mt-[10px] mb-[10px] lg:mt-[30px]">
        <img
          src={GithubSVG}
          alt=""
          className="cursor-pointer w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]"
        />
        <img
          src={HomeSVG}
          alt=""
          className="cursor-pointer w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]"
        />
      </div>

      {new Array(3).fill(null).map((item, index) => (
        <div
          key={index}
          className="w-full box-border py-[18px] px-[10px] lg:w-[800px] lg:py-[30px] lg:px-0 flex justify-between items-center border-b-[1px] border-solid border-[#e5e5e5]"
        >
          <div className="text-[#999999] text-xs w-[70px] lg:text-base lg:w-[100px]">
            DEC 9,2021
          </div>
          <div className="text-[#444444] text-sm w-[170px] lg:text-lg lg:w-[400px] hover:text-[#f33] cursor-pointer">
            晋级TypeScript高手，成为抢手的前端开发人才
          </div>
          <img
            src={titleIMG}
            alt=""
            className="w-[90px] lg:w-[200px] lg:h-[100px]"
          />
        </div>
      ))}
    </div>
  )
}

export default Blog
