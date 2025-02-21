"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface MentorFormProps {
  databaseId: string;
}

interface MentorSubmissionResponse {
  pageId?: string;
  success?: boolean;
  error?: string;
}

const INDUSTRY_EXPERTISE_OPTIONS = [
  "Software",
  "Hardware",
  "Consumer",
  "EdTech",
  "FinTech",
  "Other",
];

const FUNCTIONAL_EXPERTISE_OPTIONS = [
  "Product",
  "Marketing",
  "Sales",
  "Finance",
  "Legal",
  "Tech",
  "Other",
];

const COMM_STYLE_OPTIONS = ["email", "calls", "text", "video-calls"];

export default function MentorForm({ databaseId }: MentorFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    cityState: "",
    affiliation: "",
    currentRole: "",
    fieldExperience: "",
    industryExpertise: [] as string[],
    functionalExpertise: [] as string[],
    meetingAvailability: "2x per month",
    mentorshipApproach: "Hands-on with frequent check-ins",
    communicationStyle: [] as string[],
    motivationToMentor: "",
    gainsFromMentoring: "",
    consentToList: "No",
    schedulingConstraints: "",
    blacksburgAvailability: "",
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

  const handleCheckboxChange = (
    field: "industryExpertise" | "functionalExpertise" | "communicationStyle",
    option: string
  ) => {
    setFormData((prev) => {
      const isChecked = prev[field].includes(option);
      if (isChecked) {
        return {
          ...prev,
          [field]: prev[field].filter((o: string) => o !== option),
        };
      } else {
        return {
          ...prev,
          [field]: [...prev[field], option],
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
      const response = await fetch("/api/append-data-mentor", {
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
        name: "",
        email: "",
        phoneNumber: "",
        cityState: "",
        affiliation: "",
        currentRole: "",
        fieldExperience: "",
        industryExpertise: [],
        functionalExpertise: [],
        meetingAvailability: "2x per month",
        mentorshipApproach: "Hands-on with frequent check-ins",
        communicationStyle: [],
        motivationToMentor: "",
        gainsFromMentoring: "",
        consentToList: "No",
        schedulingConstraints: "",
        blacksburgAvailability: "",
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-8 p-8 rounded-mg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">
        Nucleus Program Mentor Application
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Enter your full name"
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
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-black"
          >
            Phone Number (Optional)
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Optional"
          />
        </div>
        <div>
          <label
            htmlFor="cityState"
            className="block text-sm font-medium text-black"
          >
            City / State
          </label>
          <input
            type="text"
            id="cityState"
            name="cityState"
            value={formData.cityState}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="e.g. Blacksburg, VA"
          />
        </div>
        <div>
          <label
            htmlFor="affiliation"
            className="block text-sm font-medium text-black"
          >
            Affiliation with University
          </label>
          <input
            type="text"
            id="affiliation"
            name="affiliation"
            value={formData.affiliation}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Alumni, Industry Partner, etc."
          />
        </div>
        <div>
          <label
            htmlFor="currentRole"
            className="block text-sm font-medium text-black"
          >
            Current Role / Title / Company
          </label>
          <input
            type="text"
            id="currentRole"
            name="currentRole"
            value={formData.currentRole}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Your job title and company"
          />
        </div>
        <div>
          <label
            htmlFor="fieldExperience"
            className="block text-sm font-medium text-black"
          >
            Tell us about your experience in your field of interest
          </label>
          <textarea
            id="fieldExperience"
            name="fieldExperience"
            value={formData.fieldExperience}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Briefly describe your professional background"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Industry Expertise (select all that apply)
          </label>
          <div className="flex flex-col space-y-1">
            {INDUSTRY_EXPERTISE_OPTIONS.map((option) => (
              <label key={option} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.industryExpertise.includes(option)}
                  onChange={() =>
                    handleCheckboxChange("industryExpertise", option)
                  }
                  className="mr-2"
                />
                <span className="text-black">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Functional Expertise (select all that apply)
          </label>
          <div className="flex flex-col space-y-1">
            {FUNCTIONAL_EXPERTISE_OPTIONS.map((option) => (
              <label key={option} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.functionalExpertise.includes(option)}
                  onChange={() =>
                    handleCheckboxChange("functionalExpertise", option)
                  }
                  className="mr-2"
                />
                <span className="text-black">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label
            htmlFor="meetingAvailability"
            className="block text-sm font-medium text-black"
          >
            Availability to meet with student teams
          </label>
          <select
            id="meetingAvailability"
            name="meetingAvailability"
            value={formData.meetingAvailability}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 bg-white text-black"
          >
            <option>1x per month</option>
            <option>2x per month</option>
            <option>4x per month</option>
          </select>
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
            <option>Hands-on with frequent check-ins</option>
            <option>Strategic Advisor with monthly calls</option>
            <option>On-demand contact</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Preferred modes of communication (select all that apply)
          </label>
          <div className="flex flex-col space-y-1">
            {COMM_STYLE_OPTIONS.map((option) => (
              <label key={option} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.communicationStyle.includes(option)}
                  onChange={() =>
                    handleCheckboxChange("communicationStyle", option)
                  }
                  className="mr-2"
                />
                <span className="text-black">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label
            htmlFor="motivationToMentor"
            className="block text-sm font-medium text-black"
          >
            What is your motivation to mentor?
          </label>
          <textarea
            id="motivationToMentor"
            name="motivationToMentor"
            value={formData.motivationToMentor}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Why do you want to mentor students?"
          />
        </div>
        <div>
          <label
            htmlFor="gainsFromMentoring"
            className="block text-sm font-medium text-black"
          >
            What do you hope to gain from mentoring?
          </label>
          <textarea
            id="gainsFromMentoring"
            name="gainsFromMentoring"
            value={formData.gainsFromMentoring}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Describe what you hope to get out of this experience"
          />
        </div>
        <div>
          <label
            htmlFor="consentToList"
            className="block text-sm font-medium text-black"
          >
            Consent to be listed in the mentor directory for student teams
          </label>
          <select
            id="consentToList"
            name="consentToList"
            value={formData.consentToList}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 bg-white text-black"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="schedulingConstraints"
            className="block text-sm font-medium text-black"
          >
            Scheduling Constraints
          </label>
          <textarea
            id="schedulingConstraints"
            name="schedulingConstraints"
            value={formData.schedulingConstraints}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Time zones, best days, etc."
          />
        </div>
        <div>
          <label
            htmlFor="blacksburgAvailability"
            className="block text-sm font-medium text-black"
          >
            Blacksburg availability
          </label>
          <textarea
            id="blacksburgAvailability"
            name="blacksburgAvailability"
            value={formData.blacksburgAvailability}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-black"
            placeholder="Are you able to come to Blacksburg? When?"
          />
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
