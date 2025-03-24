"use client";

import StudentForm from "../../components/StudentForm";

export default function Home() {
  const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID_STUDENT;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-500 relative">
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg p-8 max-w-2xl w-full">
          {databaseId ? (
            <StudentForm databaseId={databaseId} />
          ) : (
            <p className="text-center text-red-500">
              No DATABASE_ID set. Please contact admin to create the database.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}