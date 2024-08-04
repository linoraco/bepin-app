// src/app/admin/layout.tsx
"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseAuth } from "../firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [user] = useAuthState(FirebaseAuth);
  const router = useRouter();
  const userSession =
    typeof window !== "undefined" ? sessionStorage.getItem("user") : null;

  console.log({ user });

  if (!user && !userSession) {
    router.push("/login");
  }

  const handleSignOut = async () => {
    try {
      await signOut(FirebaseAuth);
      sessionStorage.removeItem("user");
      router.push("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Head>
        <title>Admin Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}
      <aside className="bg-gray-800 text-white h-screen w-60 flex-none">
        <div className="flex flex-col h-full">
          <div className="text-xl font-bold p-4">Admin Dashboard</div>
          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <Link href="/admin/dashboard">
                  <h1 className="block p-4 hover:bg-gray-700">Dashboard</h1>
                </Link>
              </li>
              <li>
                <Link href="/admin/users">
                  <h1 className="block p-4 hover:bg-gray-700">Users</h1>
                </Link>
              </li>
              <li>
                <Link href="/admin/products">
                  <h1 className="block p-4 hover:bg-gray-700">Products</h1>
                </Link>
              </li>
              {/* Add more sidebar items as needed */}
            </ul>
          </nav>
          <button onClick={handleSignOut} className="btn p-4 hover:bg-red-500">
            keluar
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-4">
        {/* Admin dashboard content */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
