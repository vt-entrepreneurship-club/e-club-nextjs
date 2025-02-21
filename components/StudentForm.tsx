"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface StudentFormProps {
  databaseId: string;
}

interface MentorSubmissionResponse {
  pageId?: string;
  success?: boolean;
  error?: string;
}

const PROGRAM_GOALS_OPTIONS = [
  "Generate Revenue",
  "Build MVP",
  "Acquire Users",
  "Develop Pitch Deck",
  "Other",
];

export default function StudentForm({ databaseId }: StudentFormProps) {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    universityYear: "Freshman",
    major: "",
    ideaDescription: "",
    industry: "",
    stage: "Idea Validation",
    biggestChallenge: "",
    teamMembers: "",
    weeklyHours: "",
    skills: "",
    motivation: "",
    mentorExpectations: "",
    mentorshipApproach: "Hands-on weekly calls",
    programGoals: [] as string[],
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProgramGoalsChange = (goal: string) => {
    setFormData((prev) => {
      if (prev.programGoals.includes(goal)) {
        return {
          ...prev,
          programGoals: prev.programGoals.filter((g) => g !== goal),
        };
      } else {
        return {
          ...prev,
          programGoals: [...prev.programGoals, goal],
        };
      }
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/append-data-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (!response.ok) {
        const errorData = (await response.json()) as { error?: string };
        throw new Error(errorData.error || "Failed to submit data.");
      }

      const data = (await response.json()) as MentorSubmissionResponse;
      setSuccess(`Data submitted successfully! Page ID: ${data.pageId}`);

      setFormData({
        studentName: "",
        email: "",
        universityYear: "Freshman",
        major: "",
        ideaDescription: "",
        industry: "",
        stage: "Idea Validation",
        biggestChallenge: "",
        teamMembers: "",
        weeklyHours: "",
        skills: "",
        motivation: "",
        mentorExpectations: "",
        mentorshipApproach: "Hands-on weekly calls",
        programGoals: [],
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-8 p-8 rounded-md shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">
        Nucleus Program Student Application
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="studentName"
            className="block text-sm font-medium text-black"
          >
            Student Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            required
            value={formData.studentName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            htmlFor="universityYear"
            className="block text-sm font-medium text-black"
          >
            University Year
          </label>
          <select
            id="universityYear"
            name="universityYear"
            value={formData.universityYear}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 bg-white text-black"
          >
            <option>Freshman</option>
            <option>Sophomore</option>
            <option>Junior</option>
            <option>Senior</option>
            <option>Graduate</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="major"
            className="block text-sm font-medium text-black"
          >
            Major / Program
          </label>
          <input
            type="text"
            id="major"
            name="major"
            value={formData.major}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Enter your major or program"
          />
        </div>

        <div>
          <label
            htmlFor="ideaDescription"
            className="block text-sm font-medium text-black"
          >
            Startup Idea or Project Description
          </label>
          <textarea
            id="ideaDescription"
            name="ideaDescription"
            value={formData.ideaDescription}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Briefly describe your project or startup idea"
          />
        </div>

        <div>
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-black"
          >
            Industry / Sector
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="e.g. HealthTech, FinTech, Consumer, EdTech, etc."
          />
        </div>

        <div>
          <label
            htmlFor="stage"
            className="block text-sm font-medium text-black"
          >
            What stage is your startup in?
          </label>
          <select
            id="stage"
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 bg-white text-black"
          >
            <option>Idea / Concept</option>
            <option>Prototype or Product</option>
            <option>Early Revenue</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="biggestChallenge"
            className="block text-sm font-medium text-black"
          >
            Biggest Challenge
          </label>
          <input
            type="text"
            id="biggestChallenge"
            name="biggestChallenge"
            value={formData.biggestChallenge}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Technical Help, User Acquisition, Fundraising, etc."
          />
        </div>

        <div>
          <label
            htmlFor="teamMembers"
            className="block text-sm font-medium text-black"
          >
            If you have a team, put their names and emails below
          </label>
          <input
            type="text"
            id="teamMembers"
            name="teamMembers"
            value={formData.teamMembers}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="John Doe (john@abc.com), Jane Smith (jane@abc.com)"
          />
        </div>

        <div>
          <label
            htmlFor="weeklyHours"
            className="block text-sm font-medium text-black"
          >
            Approx. Weekly Hours the Team Can Commit
          </label>
          <input
            type="text"
            id="weeklyHours"
            name="weeklyHours"
            value={formData.weeklyHours}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="e.g. 5-10 hrs per week per member"
          />
        </div>

        <div>
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-black"
          >
            Skills Within the Team
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Marketing, Programming, Design, Business Dev, etc."
          />
        </div>

        <div>
          <label
            htmlFor="motivation"
            className="block text-sm font-medium text-black"
          >
            Why are you working on this idea?
          </label>
          <textarea
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="What motivates you to pursue this venture?"
          />
        </div>

        <div>
          <label
            htmlFor="mentorExpectations"
            className="block text-sm font-medium text-black"
          >
            What are you looking for in a mentor?
          </label>
          <input
            type="text"
            id="mentorExpectations"
            name="mentorExpectations"
            value={formData.mentorExpectations}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Type your answer here"
          />
        </div>

        <div>
          <label
            htmlFor="mentorshipApproach"
            className="block text-sm font-medium text-black"
          >
            Preferred Mentorship Approach
          </label>
          <select
            id="mentorshipApproach"
            name="mentorshipApproach"
            value={formData.mentorshipApproach}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 bg-white text-black"
          >
            <option>Hands-on weekly calls</option>
            <option>Monthly strategic guidance</option>
            <option>Quick check-ins as needed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">
            What do you hope to achieve while in the Program? (Select all that
            apply)
          </label>
          <div className="flex flex-col space-y-1">
            {PROGRAM_GOALS_OPTIONS.map((option) => (
              <label key={option} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.programGoals.includes(option)}
                  onChange={() => handleProgramGoalsChange(option)}
                  className="mr-2"
                />
                <span className="text-black">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={submitting}
            className={`w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md ${
              submitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {success && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <p>{success}</p>
        </div>
      )}
      {error && (
        <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
}
