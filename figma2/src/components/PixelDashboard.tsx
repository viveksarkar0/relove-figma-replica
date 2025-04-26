


export default function PixelDashboard() {
  // App Icons
  const appIcons = [
    {   icon: '/image/myapp.svg' },
    { icon: '/image/figma.svg' },
    { icon: '/image/figjam.svg' },
    { icon: '/image/findoffigma.svg' },
    {  icon: '/image/configsticker.svg'},
    { icon: '/image/cummnity.svg' },
  ];

  // Folder Icons
  const folderIcons = [
    {  icon: '/image/myfolder.svg'},
    {  icon: '/image/figmauser.svg'},
    {  icon: '/image/music.svg'},
    {  icon: '/image/reading.svg' },
    { icon: '/image/movies.svg'},
  ];

  // File Icons
  const fileIcons = [
    {  icon: '/image/myfile.svg' },
    {  icon: '/image/lovVison.svg' },
    {  icon: '/image/deaf.svg' },
    {  icon: '/image/parent.svg' },
    {  icon:'/image/mentor.svg'  },
    {icon: '/image/vetern.svg'  },
    {  icon: '/image/student.svg'  },
  ];

  // Drive Icons
  const driveIcons = [
    { name: 'MY DRIVE', color: 'bg-gray-300', icon: '/image/mudrive.svg'  },
    { name: 'AMBIVERT', color: 'bg-pink-300', icon: '/image/avbdrive.svg' },
    { name: 'INTROVERT', color: 'bg-blue-400', icon: '/image/intdrive.svg' },
    { name: 'EXTROVERT', color: 'bg-yellow-200', icon: '/image/extdrive.svg'  },
  ];

  // Social Links
  const socialLinks = [
    { platform: '@HANDLE', icon: '🌐' },
    { platform: '@HANDLE', icon: '🐦' },
    { platform: '@HANDLE', icon: '📷' },
    { platform: '@HANDLE', icon: '🔗' },
    { platform: '@HANDLE', icon: '🎥' },
    { platform: 'LINK.COM', icon: '🌎' },
  ];

  return (
    <div className=" p-4 grid grid-cols-12 gap-1" >
      <div className="col-span-12">
        {/* App Icons Section */}
        <div className="grid grid-cols-6 gap-3 mb-4 w-fit">
          {appIcons.map((app, index) => (
            <div key={`app-${index}`} className="flex flex-col w-fit ">
              <div >
               <img src={app.icon} alt="" className="w-14" />
              </div>

            </div>
          ))}
        </div>

        {/* Folder Icons */}
        <div className="grid grid-cols-5 gap-4 mb-4  w-fit">
          {folderIcons.map((folder, index) => (
            <div key={`folder-${index}`} className="flex flex-col">
              <div >
            
                <img src={folder.icon} alt="" className="w-14" />

              </div>
              
            </div>
          ))}
        </div>

        {/* File Icons */}
        <div className="grid grid-cols-7 gap-5 mb-4 w-fit">
          {fileIcons.map((file, index) => (
            <div key={`file-${index}`} className="flex flex-col w-14 ">
              <img src={file.icon} alt="" />
           
            </div>
          ))}
        </div>

        {/* Drive Icons */}
        <div className="grid grid-cols-4 gap-2 mb-4 w-fit">
          {driveIcons.map((drive, index) => (
            <div key={`drive-${index}`} className="flex flex-col w-14 ">
             
             <img src={drive.icon} alt="" />
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6 overflow-hidden">
          {socialLinks.map((link, index) => (
            <div key={`social-${index}`} className="flex items-center gap-1 text-sm">
              <span>{link.icon}</span>
              <span className="font-mono text-xs">{link.platform}</span>
              <span className="text-xs">↗</span>
            </div>
          ))}
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">

            
        <img src="/sticker/favfood.svg" alt="" />

          {/* Favorite GIF */}
          
            <img src="/sticker/favgif.svg" alt="" />
          
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
        <img src="/sticker/fav.svg" alt="" />

          {/* Top 2 Talks */}
          <img src="/sticker/talk.svg" alt="" />
        </div>

        {/* Song Player */}
        <div className="  max-w-md mt-7">
         <img src="/sticker/music.svg" alt="" />
        </div>
      </div>
    </div>
  );
}