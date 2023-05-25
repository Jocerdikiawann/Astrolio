export default function Button({route}) {
  return (
    <div className="border border-black sm:w-64 w-full sm:mt-5 mt-3 text-black hover:bg-black hover:text-white">
      <a href={route}>
        <p className="p-4 text-center">About me</p>
      </a>
    </div>
  );
}
