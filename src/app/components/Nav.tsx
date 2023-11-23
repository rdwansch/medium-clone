import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="my-container flex items-center justify-between py-[10px]">
      <div className="flex items-center gap-3">
        <Image src="/medium.png" alt="medium" width={44} height={0} />
        <p className="text-sm font-serif leading-normal">Draft in Ridhwan R. Siddiq</p>
        <p className="text-xs  text-gray-500">Saved</p>
      </div>

      <div className="flex items-center gap-[21px]">
        <button className="bg-green-600 bg-opacity-30 text-white rounded-full px-3 py-[5px] text-xs">Publish</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          fill="currentColor"
          className="stroke-gray-400 stroke-[0.5]"
          viewBox="0 0 16 16"
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          fill="currentColor"
          className="stroke-gray-400 stroke-[0.5]"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
        </svg>
        <Image
          src="/profile.png"
          alt="profile"
          width={50}
          height={0}
          className="w-8 h-8 rounded-full"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
      </div>
    </nav>
  );
}
