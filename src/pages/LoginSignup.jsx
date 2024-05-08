
const LoginSignup = () => {
  return (
    <div className="w-full h-screen bg-[#fce3fe] pt-[100px] flex justify-center items-center">
      <div className="w-[680px] h-[600px] bg-white m-auto py-[40px] px-[60px] flex flex-col justify-start items-start ">
        <h1 className="my-[20px] mx-0 text-2xl font-semibold w-full flex justify-start">Sign Up</h1>
        <div className="flex flex-col gap-5 mt-7 w-[540px]">
          <input type="text" placeholder="Your Name" className="h-16 w-full pl-5 border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg"/>
          <input type="email" placeholder="Email Address" className="h-16 w-full pl-5 border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg"/>
          <input type="password" placeholder="Password" className="h-16 w-full pl-5 border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg"/>
        </div>
        <button className="w-[540px] h-[72px] text-white bg-[#ff4141] mt-7">Continue</button>
        <p className="mt-[20px] text-[#5c5c5c] font-medium text-lg">Already have an account <span className="text-[#ff4141] font-semibold">Login Here</span></p>
        <div className="flex items-center mt-6 gap-5 text-[#5c5c5c] text-lg font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use and privacy polocy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
