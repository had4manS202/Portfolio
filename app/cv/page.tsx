"use client"
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Code, 
  Terminal,
  Shield
} from 'lucide-react';

export default function ManashHadaCV() {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-indigo-900 text-white p-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-wide">MANASH HADA</h1>
            <p className="text-indigo-200 mt-1 text-lg">CYBERSECURITY ENTHUSIAST</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col">
            <div className="flex items-center mb-2">
              <Mail size={16} className="mr-2" />
              <span className="text-indigo-100">hadamanash2023@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span className="text-indigo-100">33, Lokanthali, Bhaktapur</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Summary Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-2 mb-4">
            SUMMARY
          </h2>
          <p className="text-gray-700">
            I am a dedicated BSc IT student with a strong interest in cybersecurity and data science. 
            I enjoy working on hands-on projects like CTF challenges, Arduino-based systems, and learning 
            about ethical hacking and network security. I'm always curious to learn new technologies and 
            enjoy solving problems step by step with focus and consistency.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-2 mb-4">
            SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm">
              <Terminal className="text-indigo-600 mr-3" size={24} />
              <span>Kali Linux</span>
            </div>
            <div className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm">
              <Code className="text-indigo-600 mr-3" size={24} />
              <span>C Programming</span>
            </div>
            <div className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm">
              <Shield className="text-indigo-600 mr-3" size={24} />
              <span>CTFs</span>
            </div>
            <div className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm">
              <Briefcase className="text-indigo-600 mr-3" size={24} />
              <span>Problem Solving</span>
            </div>
            <div className="flex items-center bg-gray-50 p-3 rounded-md shadow-sm">
              <Mail className="text-indigo-600 mr-3" size={24} />
              <span>Graphic Design</span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-2 mb-4">
            EDUCATION
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex items-start mb-2 md:mb-0">
                <GraduationCap className="text-indigo-600 mr-2" size={20} />
                <span className="text-indigo-700 font-medium">2024 - 2028</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-lg font-semibold">Presidential Graduate School</h3>
                <p className="text-gray-600">BACHELOR OF TECHNOLOGY</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex items-start mb-2 md:mb-0">
                <GraduationCap className="text-indigo-600 mr-2" size={20} />
                <span className="text-indigo-700 font-medium">2023 - 2024</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-lg font-semibold">Trinity International SS & College</h3>
                <p className="text-gray-600">SECONDARY SCHOOL</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex items-start mb-2 md:mb-0">
                <GraduationCap className="text-indigo-600 mr-2" size={20} />
                <span className="text-indigo-700 font-medium">2017 - 2023</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-lg font-semibold">Little Angels School</h3>
                <p className="text-gray-600">PRIMARY SCHOOL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 p-4 text-center text-gray-600 text-sm">
        <p>Manash Hada | Cybersecurity Enthusiast | © {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}