import Image from "next/image";

export const AuthWrapper = () => {
  return (
    <div className="m-0 grid h-screen align-items-center justify-content-center">
      <Image
        src="login-image.png"
        layout="responsive"
        height={900}
        width={800}
        alt="login image"
        className="max-w-full h-auto"
      />
    </div>
  );
};
