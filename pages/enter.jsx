import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button";
import Input from "../components/input";
import SocialButton from "../components/socialButton";
import useEmailCheck from "../libs/client/useEmailCheck";
import useMutation from "../libs/client/useMutation";

const Enter = () => {
  const [enter, { loading, data, error }] = useMutation("/api/users/enter");
  const [loginCheck, { emailData, emailError }] = useEmailCheck(
    "/api/users/emailCheck"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onBlur" });
  const router = useRouter();

  const onValid = vilidform => {
    enter(vilidform);
  };

  const validateEmail = value => {
    loginCheck(value);

    if (emailData?.ok) {
      return "이미 존재하는 메일 주소 입니다.";
    }
  };
  // console.log(errors, data, error);
  // console.log(emailData);
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
        <form
          onSubmit={handleSubmit(onValid)}
          className="flex flex-col w-full space-y-5"
        >
          <Input
            register={register("email", {
              required: "이메일을 입력해야 합니다.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "이메일 형식이 맞지 않습니다.",
              },
              validate: validateEmail,
            })}
            name="email"
            errors={errors}
            label="이메일이 어떻게 되시나요?"
          />
          <Input
            register={register("password", {
              required: "비밀번호를 입력해야 합니다.",
              validate: validatePassword,
            })}
            name="password"
            type="password"
            kind="password"
            errors={errors}
            label="비밀번호를 만드세요."
          />
          <div className="mb-1 block text-sm  text-black font-extrabold">
            성별이 무엇인가요?
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="male"
                name="gender"
                value="M"
                {...register("gender", {
                  required: "성별을 선택해야 합니다.",
                })}
              />
              <label htmlFor="male">남성</label>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="female"
                name="gender"
                value="W"
                {...register("gender", {
                  required: "성별을 선택해야 합니다.",
                })}
              />
              <label htmlFor="female">여성</label>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="none"
                name="gender"
                value="N"
                {...register("gender", {
                  required: "성별을 선택해야 합니다.",
                })}
              />
              <label htmlFor="none">논바이너리</label>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="etc"
                name="gender"
                value="E"
                {...register("gender", {
                  required: "성별을 선택해야 합니다.",
                })}
              />
              <label htmlFor="etc">기타</label>
            </div>
            <div className="flex items-center space-x-4 mt-3">
              <input
                type="radio"
                id="reject"
                name="gender"
                value="R"
                {...register("gender", {
                  required: "성별을 선택해야 합니다.",
                })}
              />
              <label htmlFor="reject">답변 거부</label>
            </div>
          </div>
          <div className="text-sm text-red-500">{errors?.gender?.message}</div>
          <div className="self-center">
            <Button text="가입하기" color="bg-green-500" />
          </div>
        </form>
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

// validation function
const validatePassword = value => {
  if (value.length < 6) {
    return "비밀번호는 6글자 이상이어야 합니다.";
  } else if (
    !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
  ) {
    return "비밀번호는 1개의 대문자와 특수문자가 포함되어야 합니다.";
  }
  return true;
};

export default Enter;
