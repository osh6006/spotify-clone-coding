import { useRouter } from "next/router";
import Button from "../components/button";
import Input from "../components/input";
import SocialButton from "../components/socialButton";

const Enter = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col items-center p-10">
      <div className="w-[400px] flex flex-col items-center space-y-7">
        <img className="w-32" src="/enterlogo.png" alt="enterlogo" />
        <h1 className="text-black font-bold text-3xl">
          무료로 가입하고 들어보세요.
        </h1>
        <div className="w-full space-y-5">
          <SocialButton
            text="Facebook으로 가입하기"
            color="bg-[#405A93]"
            textColor="text-white"
          />
          <SocialButton
            text="Google로 가입하기"
            textColor="text-slate-500"
            outline={true}
          />
        </div>
        <div className="w-full flex items-center justify-around space-x-4">
          <hr className="flex-grow border-t-[0.1px]  border-slate-300" />
          <div className="text-slate-400">또는</div>
          <hr className=" flex-grow border-t-[0.1px]  border-slate-300" />
        </div>
        <h2 className="text-black font-bold text-lg">이메일 주소로 가입하기</h2>
        <form className="w-full space-y-5">
          <Input
            name="email"
            label="이메일이 어떻게 되시나요?"
            type="email"
            required
          />
        </form>
        <Button text="가입하기" color="bg-green-500" />
        <div>
          계정이 있나요?&nbsp;
          <strong
            onClick={() => router.push("/login")}
            className="text-green-500 underline cursor-pointer hover:text-green-300"
          >
            로그인하세요
          </strong>
          .
        </div>
      </div>
    </div>
  );
};

export default Enter;
