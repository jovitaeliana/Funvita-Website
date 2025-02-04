import React from 'react';
import { Building2, Megaphone, BookOpen, Users, Award, Target, UserCheck, BarChart } from 'lucide-react';
import funvitaLogo from '../assets/logo.png';

const BusinessSite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navigation */}
<nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-blue-100">
  <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
    <img src={funvitaLogo} alt="Funvita Logo" className="w-32 h-32" />
      {/* Logo and company name */}
      <div>
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          FUNVITA
        </div>
        <div className="text-sm text-indigo-600">
          INDONESIA
        </div>
      </div>
    </div>
    <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-6 py-2 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-amber-200 active:scale-95">
    <a href="mailto:funvitaindonesia@gmail.com" className="text-white">Hubungi Kami</a>
    </button>
  </div>
</nav>

      {/* Rest of the code exactly as provided */}
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Kembangkan Bisnis Anda Bersama Kami
          </h1>
          <p className="text-xl mb-12 text-blue-100">
            Training & Mentoring Collaboration Network Indonesia
          </p>
          <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-amber-500/20 active:scale-95">
          <a href="mailto:funvitaindonesia@gmail.com" className="text-white">Hubungi Kami Sekarang</a>
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Tentang Kami
        </h2>
        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl shadow-blue-200">
          <p className="text-gray-700 text-center text-lg leading-relaxed">
            PT. Funvita Indonesia Investama adalah perusahaan konsultan dan training terkemuka yang berfokus pada pengembangan bisnis dan sumber daya manusia. Kami memiliki pengalaman luas dalam memberikan solusi bisnis yang komprehensif dan pelatihan yang disesuaikan dengan kebutuhan klien.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Layanan Utama
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Building2 size={28} />}
              title="Konsultasi Bisnis"
              description="Solusi bisnis yang komprehensif untuk perkembangan perusahaan Anda"
            />
            <ServiceCard
              icon={<Megaphone size={28} />}
              title="Training Digital Marketing"
              description="Strategi pemasaran digital yang efektif dan terukur"
            />
            <ServiceCard
              icon={<BookOpen size={28} />}
              title="Training Digital Literasi Keuangan"
              description="Pemahaman mendalam tentang manajemen keuangan di era digital"
            />
            <ServiceCard
              icon={<Target size={28} />}
              title="Training Branding Produk"
              description="Strategi branding yang kuat untuk produk Anda"
            />
            <ServiceCard
              icon={<Users size={28} />}
              title="Public Speaking"
              description="Pengembangan kemampuan berbicara di depan umum"
            />
            <ServiceCard
              icon={<UserCheck size={28} />}
              title="Collaboration"
              description="Membangun jaringan kerja sama yang produktif"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Mengapa Memilih Kami
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FeatureCard
            icon={<Users className="text-blue-600" size={28} />}
            title="Tim Professional Berpengalaman"
            description="Didukung oleh tim ahli dengan pengalaman luas di bidangnya"
          />
          <FeatureCard
            icon={<Target className="text-blue-600" size={28} />}
            title="Program Yang Terukur"
            description="Setiap program dirancang dengan target dan hasil yang terukur"
          />
          <FeatureCard
            icon={<UserCheck className="text-blue-600" size={28} />}
            title="Pendekatan Personal"
            description="Program disesuaikan dengan kebutuhan spesifik klien"
          />
          <FeatureCard
            icon={<BarChart className="text-blue-600" size={28} />}
            title="Hasil Terbukti"
            description="Track record kepuasan dengan berbagai klien"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="font-bold text-xl mb-6">Informasi Kontak</h3>
              <p className="mb-4 text-blue-100">Jalan Raya Ngaglik No. 02 Ngartang Malang 65392</p>
              <p className="mb-4 text-blue-100">+62816064358</p>
              <p className="text-blue-100">funvitaindonesia@gmail.com</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6">Social Media</h3>
              <div className="flex space-x-6">
              <a href="https://www.instagram.com/funvitaindonesia" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-amber-400 transition-colors">Instagram</a>
              </div>
            </div>
            <div>
              <p className="text-blue-100">© 2024 PT. Funvita Indonesia Investama. All rights reserved.</p>
              <p className="text-blue-200 mt-4">Nomor Badan Hukum: AHU-0027185-AH.01.14</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group bg-white/60 backdrop-blur-md p-8 rounded-3xl transition-all hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-1">
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-2xl mb-6 w-fit group-hover:shadow-lg group-hover:shadow-blue-200/50 transition-all">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-center group">
      <div className="inline-block p-6 bg-white/60 backdrop-blur-md rounded-3xl mb-6 transition-all group-hover:shadow-xl group-hover:shadow-blue-200 group-hover:-translate-y-1">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default BusinessSite;