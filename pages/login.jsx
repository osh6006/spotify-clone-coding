import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button";
import Input from "../components/input";
import SocialButton from "../components/socialButton";
import useMutation from "../libs/client/useMutation";

const Login = () => {
  const [login, { loading, data, error }] = useMutation("/api/users/login");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  const router = useRouter();

  const onValid = validForm => {
    login(validForm);
  };

  const gotoEnter = () => {
    router.push("/enter");
  };

  useEffect(() => {
    if (data?.ok) {
      router.push("/");
    }
  }, [data, router]);

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
        {!data?.ok && (
          <div className="w-full h-20 bg-red-500 flex items-center justify-center text-white font-bold">
            이메일 또는 비밀번호를 확인하세요
          </div>
        )}
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
        <form className="w-full space-y-5" onSubmit={handleSubmit(onValid)}>
          <Input
            register={register("email", {
              required: "이메일을 입력해야 합니다.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "이메일 형식이 맞지 않습니다.",
              },
            })}
            name="email"
            errors={errors}
            label="이메일 주소 입력"
            type="email"
            required
          />
          <Input
            register={register("password", {
              required: "비밀번호를 입력해야 합니다.",
            })}
            name="password"
            type="password"
            kind="password"
            errors={errors}
            label="비밀번호"
          />
          <div className="w-full hover: cursor-pointer hover:underline">
            비밀번호를 잊었나요?
          </div>
          <div className="w-full flex justify-end">
            <Button text="로그인 하기" color="bg-green-500" />
          </div>
        </form>
        <div className="w-full flex flex-col items-center">
          <div className="w-full border-t-[0.1px] mt-3"></div>
          <div className="my-6 text-black text-lg font-bold">
            계정이 없나요?
          </div>
          <SocialButton
            text="SPOTIFY에 가입하기"
            textColor="text-slate-500"
            outline={true}
            onClick={gotoEnter}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
