import { IconLogout } from "@tabler/icons-react";
import { useRouter } from 'next/navigation';

export default function HeaderPage() {

  const router = useRouter();
  return (
    <header>
      <div
        className="
         bg-blue-950
         h-16
         flex
         items-center
         justify-between
         px-4
         "
      >
        <div className="text-white">
          <img onClick={() => router.push("/clientes")} src="/logoHome.svg" alt="CSJ Group" />
        </div>

        <div className="flex items-end gap-5 text-white">

          <p>KENNEDY ALVES PEREIRA</p>

          <button className="text-white"
            onClick={() => router.push('/')}
          >
            <IconLogout />
          </button>
        </div>
      </div>
    </header>
  );
}
