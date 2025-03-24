"use client";

import MentorForm from "../../components/MentorForm";

export default function MentorPage() {
  const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID_MENTOR;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-500 relative">
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg p-8 max-w-2xl w-full">
          {databaseId ? (
            <MentorForm databaseId={databaseId} />
          ) : (
            <p className="text-center text-red-500">
              No MENTOR_DATABASE_ID set. Please contact admin to create the database.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}