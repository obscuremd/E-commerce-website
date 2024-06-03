import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
const LoginSignup = () => {
  return (
    <div className="w-full h-full p-10 flex justify-center items-center">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Username" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
    </div>


  )
}

export default LoginSignup


{/* <div className="w-full h-screen bg-[#fce3fe] pt-[100px] flex justify-center items-center">
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
</div> */}