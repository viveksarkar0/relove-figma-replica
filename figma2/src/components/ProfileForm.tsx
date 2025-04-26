export default function ProfileForm() {
  return (
    <div className="w-full max-w-2xl mx-auto font-mono mt-4">
      {/* Picture section */}
      <div className="flex flex-col sm:flex-row mb-1">
        <div className="w-full sm:w-2/5 bg-black text-white p-4 flex flex-col items-end justify-center">
          <div className="text-2xl mb-4">PICTURE</div>
          <div className="text-right text-sm leading-tight">
            replace picture<br />
            and select frame
          </div>
        </div>
        <div className="w-full sm:w-[200px] sm:space-x-96 ml-2">
          <div className="relative">
            {/* Purple dot and label */}
            <div className="absolute -top-8 left-2 flex items-center">
              <div className="text-purple-600 text-2xl mr-1">◆</div>
              <div className="text-purple-600 text-sm">avatar.data</div>
            </div>
            {/* Yellow outer frame */}
            <div>
              <img src="/namebadge.svg" alt="" className="mt-4 mb-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Form fields */}
      <div className="space-y-5">
        {/* Pronouns */}
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/5 bg-black text-white p-2 flex items-center justify-end">
            <span className="text-2xl">PRONOUNS</span>
          </div>
          <div className="w-full sm:w-3/5 relative">
            {/* Purple dot and label */}
            <div className="absolute -top-4 left-2 flex items-center">
              <div className="text-purple-600 text-2xl mr-1">◆</div>
              <div className="text-purple-600 text-sm">pronouns.data</div>
            </div>
            <div className="p-2 flex items-center">
              <span className="text-2xl">He/Him</span>
            </div>
          </div>
        </div>

        {/* First Name */}
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/5 bg-black text-white p-2 flex items-center justify-end">
            <span className="text-2xl">FIRST NAME</span>
          </div>
          <div className="w-full sm:w-3/5 relative">
            {/* Purple dot and label */}
            <div className="absolute -top-4 left-2 flex items-center">
              <div className="text-purple-600 text-2xl mr-1">◆</div>
              <div className="text-purple-600 text-sm">firstname.data</div>
            </div>
            <div className="p-2 flex items-center">
              <span className="text-2xl">Bruno</span>
            </div>
          </div>
        </div>

        {/* Last Name */}
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/5 bg-black text-white p-2 flex items-center justify-end">
            <span className="text-2xl">LAST NAME</span>
          </div>
          <div className="w-full sm:w-3/5 relative">
            {/* Purple dot and label */}
            <div className="absolute -top-4 left-2 flex items-center">
              <div className="text-purple-600 text-2xl mr-1">◆</div>
              <div className="text-purple-600 text-sm">lastname.data</div>
            </div>
            <div className="p-2 flex items-center">
              <span className="text-2xl">Figueiredo</span>
            </div>
          </div>
        </div>

        {/* Job Role */}
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/5 bg-black text-white p-2 flex items-center justify-end">
            <span className="text-2xl">JOB ROLE</span>
          </div>
          <div className="w-full sm:w-3/5 relative">
            {/* Purple dot and label */}
            <div className="absolute -top-4 left-2 flex items-center">
              <div className="text-purple-600 text-2xl mr-1">◆</div>
              <div className="text-purple-600 text-sm">job.data</div>
            </div>
            <div className="p-2 flex items-center">
              <span className="text-2xl">Community Advocate</span>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/5 bg-black text-white p-2 flex items-center justify-end">
            <span className="text-2xl">COMPANY</span>
          </div>
          <div className="w-full sm:w-3/5 relative">
            {/* Purple dot and label */}
            <div className="absolute -top-4 left-2 flex items-center">
              <div className="text-purple-600 text-2xl mr-1">◆</div>
              <div className="text-purple-600 text-sm">company.data</div>
            </div>
            <div className="p-2 flex items-center">
              <span className="text-2xl">Friends of Figma</span>
            </div>
          </div>
        </div>

        {/* Small Bio */}
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/5 bg-black text-white p-2 flex items-center justify-end">
            <span className="text-2xl">SMALL BIO</span>
          </div>
          <div className="w-full sm:w-3/5 relative">
            {/* Purple dot and label */}
            <div className="absolute -top-4 left-2 flex items-center">
              <div className="text-purple-600 text-2xl mr-1">◆</div>
              <div className="text-purple-600 text-sm">bio.data</div>
            </div>
            <div className="p-2">
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices urna consequat commodo ornare commodo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
