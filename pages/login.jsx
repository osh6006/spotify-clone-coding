import Button from "../components/button";
import Input from "../components/input";
import SocialButton from "../components/socialButton";

const Login = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <img className="w-44 mt-5" src="/enterlogo.png" alt="enterlogo" />
      <div className="w-full border-t-[0.1px] border-gray-300 my-5"></div>
      <div className="mt-5 w-[400px] flex flex-col items-center space-y-3">
        <h1 className="text-black font-semibold text-sm">
          계속하려면{" "}
          <strong className="font-extrabold text-base">Spotify</strong>에
          로그인하세요.
        </h1>
        <div className="w-full space-y-2">
          <SocialButton
            text="FACEBOOK으로 계속하기"
            color="bg-[#405A93]"
            textColor="text-white"
          />
          <SocialButton
            text="GOOGLE로 계속하기"
            textColor="text-slate-500"
            outline={true}
          />
        </div>
        <div className="w-full flex items-center justify-around space-x-4">
          <hr className="flex-grow border-t-[0.1px]  border-slate-300" />
          <div className="text-slate-400">또는</div>
          <hr className=" flex-grow border-t-[0.1px]  border-slate-300" />
        </div>
        <form className="w-full space-y-5">
          <Input
            name="email"
            label="이메일 주소 또는 사용자 이름"
            type="email"
            required
          />
        </form>
        <div className="w-full hover: cursor-pointer hover:underline">
          비밀번호를 잊었나요?
        </div>
        <div className="w-full flex justify-end">
          <Button text="로그인 하기" color="bg-green-500" />
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full border-t-[0.1px] mt-3"></div>
          <div className="my-6 text-black text-lg font-bold">
            계정이 없나요?
          </div>
          <SocialButton
            text="SPOTIFY에 가입하기"
            textColor="text-slate-500"
            outline={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
