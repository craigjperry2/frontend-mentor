import qrcode from "./assets/image-qr-code.png";

export default function App() {
  return (
    <div className="min-h-screen bg-lightgray grid place-items-center">
      <div className="w-[335px] bg-white rounded-3xl p-4">
        <img src={qrcode} className="rounded-xl" />
        <h1 className="font-bold text-2xl my-5 text-center text-darkblue">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-center text-greyishblue text-[15px] px-5">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
