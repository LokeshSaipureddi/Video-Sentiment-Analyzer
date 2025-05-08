"use server";

import { SignOutButton } from "~/components/client/signout";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { Inference } from "~/components/client/Inference";

export default async function HomePage() {
  const session = await auth();
  const quota = await db.apiQuota.findUniqueOrThrow({
    where: {
      userId: session?.user.id,
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex h-16 items-center justify-between border-b border-gray-200 px-10">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-800 text-white">
            SA
          </div>
          <span className="text-lg font-medium">Sentiment Analysis</span>
        </div>

        <SignOutButton />
      </nav>

       <main className="flex min-h-screen w-full flex-col gap-6 p-4 sm:p-10 md:flex-row">
         <Inference quota={{ secretKey: quota.secretKey }} /> 
        <div className="hidden border-l border-slate-200 md:block"></div>
        <div className="flex h-fit w-full flex-col gap-3 md:w-1/3">
           <div className="mt-3 flex h-fit w-full flex-col rounded-xl bg-gray-100 bg-opacity-70 p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm">Credits</span>
              <span className="text-sm text-gray-500">
                {quota.requestsUsed} / {quota.maxRequests} requests
              </span>
            </div>
            <div className="mt-1 h-1 w-full rounded-full bg-gray-200">
              <div
                style={{
                  width: (quota.requestsUsed / quota.maxRequests) * 100 + "%",
                }}
                className="h-1 rounded-full bg-gray-800"
              ></div>
            </div>
          </div> 
        </div>
      </main>  
    </div>
  );
}