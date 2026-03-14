/**
 * Home Page - Portfolio for Sangki Kim
 * Design Philosophy: Modern Minimalism with Professional Elegance
 * - Deep Navy primary color for trust & professionalism
 * - Warm Cream background for accessibility
 * - Teal accents for innovation
 * - Merriweather (serif) for headings, Poppins (sans-serif) for body
 * - Generous whitespace and subtle depth effects
 */

import { useEffect, useState } from 'react';
import { ArrowRight, Code2, BookOpen, Award, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold font-serif text-primary">SK</div>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-sm font-medium hover:text-accent transition-colors">Experience</button>
            <button onClick={() => scrollToSection('education')} className="text-sm font-medium hover:text-accent transition-colors">Education</button>
            <button onClick={() => scrollToSection('skills')} className="text-sm font-medium hover:text-accent transition-colors">Skills</button>
            <button onClick={() => scrollToSection('publications')} className="text-sm font-medium hover:text-accent transition-colors">Publications</button>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <nav className="flex flex-col gap-4 p-4">
              <button onClick={() => { scrollToSection('about'); setMobileMenuOpen(false); }} className="text-sm font-medium hover:text-accent transition-colors text-left">About</button>
              <button onClick={() => { scrollToSection('experience'); setMobileMenuOpen(false); }} className="text-sm font-medium hover:text-accent transition-colors text-left">Experience</button>
              <button onClick={() => { scrollToSection('education'); setMobileMenuOpen(false); }} className="text-sm font-medium hover:text-accent transition-colors text-left">Education</button>
              <button onClick={() => { scrollToSection('skills'); setMobileMenuOpen(false); }} className="text-sm font-medium hover:text-accent transition-colors text-left">Skills</button>
              <button onClick={() => { scrollToSection('publications'); setMobileMenuOpen(false); }} className="text-sm font-medium hover:text-accent transition-colors text-left">Publications</button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663437057401/jdLQ3dBiMMWL3BgFUW2rWa/hero-background-8vap9iqdVqeQgdEDdzBf4A.webp"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
              김상기
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-secondary mb-6">
              SK텔레콤 Developer Relations Manager
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              약 20년간 소프트웨어 개발, 프로세스 개선, 품질 보증 분야에서 경험을 쌓아온 기술 리더입니다. 
              현재 SK텔레콤에서 개발자 생태계 활성화와 기술 혁신을 주도하고 있습니다.
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                자세히 알아보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                이력서 다운로드
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-1 h-12 bg-accent rounded-full flex-shrink-0"></div>
            <h2 className="text-4xl font-serif font-bold text-primary">소개</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                소프트웨어 공학을 전공한 후 제품과 프로세스의 품질 향상을 목표로 다양한 역할을 수행해왔습니다. 
                개발 문화, 퍼스널 브랜딩, 소프트 스킬의 중요성을 깨달으며 개발자들이 장기적으로 경쟁력을 갖출 수 있도록 돕는 것에 관심을 가지고 있습니다.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                현재 SK텔레콤 역량혁신팀에서 Developer Relations를 담당하며, 개발자 커뮤니티와의 협력을 통해 
                기술 생태계를 활성화하고 AI 등 신기술 도입을 주도하고 있습니다.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "코드 너머, 회사보다 오래 남을 개발자"의 저자로서, 기술 전문성뿐만 아니라 
                개발자로서의 지속 가능한 성장과 경력 개발에 대해 이야기하고 있습니다.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663437057401/jdLQ3dBiMMWL3BgFUW2rWa/tech-innovation-kntLni6M2ktwnTk4kP7Jaq.webp"
                alt="Technology and Innovation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-1 h-12 bg-accent rounded-full flex-shrink-0"></div>
            <h2 className="text-4xl font-serif font-bold text-primary">경력</h2>
          </div>

          <div className="space-y-8">
            {/* SK Telecom */}
            <div className="bg-white rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">SK텔레콤</h3>
                  <p className="text-lg font-medium text-accent">역량혁신팀 Developer Relations 담당</p>
                </div>
                <Code2 className="h-8 w-8 text-accent flex-shrink-0" />
              </div>
              <p className="text-muted-foreground mb-4">현재 근무 중</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>개발자 생태계 활성화 및 기술 커뮤니티 운영</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>AI 생태계 활성화 방안 연구 및 추진</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>개발자 역량 혁신 및 교육 프로그램 개발</span>
                </li>
              </ul>
            </div>

            {/* Software Development Experience */}
            <div className="bg-white rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">소프트웨어 개발 경력</h3>
                  <p className="text-lg font-medium text-accent">약 20년</p>
                </div>
                <Code2 className="h-8 w-8 text-accent flex-shrink-0" />
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>소프트웨어 개발 및 아키텍처 설계</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>프로세스 개선 및 품질 보증 (QA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>팀 리더십 및 기술 멘토링</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-1 h-12 bg-accent rounded-full flex-shrink-0"></div>
            <h2 className="text-4xl font-serif font-bold text-primary">학력</h2>
          </div>

          <div className="bg-background rounded-lg p-8 border border-border">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">고려대학교</h3>
                <p className="text-lg font-medium text-accent">소프트웨어 공학 전공</p>
              </div>
              <Award className="h-8 w-8 text-accent flex-shrink-0" />
            </div>
            <p className="text-muted-foreground">
              소프트웨어 공학의 기초부터 고급 주제까지 학습하며, 
              제품 개발과 프로세스 개선에 대한 체계적인 이해를 형성했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-1 h-12 bg-accent rounded-full flex-shrink-0"></div>
            <h2 className="text-4xl font-serif font-bold text-primary">스킬</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="text-xl font-serif font-bold text-primary mb-6">기술 스킬</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-primary mb-2">소프트웨어 엔지니어링</p>
                  <p className="text-muted-foreground">아키텍처 설계, 개발 방법론, 코드 품질</p>
                </div>
                <div>
                  <p className="font-medium text-primary mb-2">프로세스 개선</p>
                  <p className="text-muted-foreground">CI/CD, 자동화, 개발 문화 혁신</p>
                </div>
                <div>
                  <p className="font-medium text-primary mb-2">품질 보증 (QA)</p>
                  <p className="text-muted-foreground">테스트 전략, 품질 메트릭, 결함 관리</p>
                </div>
                <div>
                  <p className="font-medium text-primary mb-2">AI & 신기술</p>
                  <p className="text-muted-foreground">AI 생태계, 기술 트렌드 분석</p>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="text-xl font-serif font-bold text-primary mb-6">소프트 스킬</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-primary mb-2">Developer Relations</p>
                  <p className="text-muted-foreground">커뮤니티 관리, 기술 이벤트 운영</p>
                </div>
                <div>
                  <p className="font-medium text-primary mb-2">리더십 & 멘토링</p>
                  <p className="text-muted-foreground">팀 리더십, 기술 멘토링, 역량 개발</p>
                </div>
                <div>
                  <p className="font-medium text-primary mb-2">기술 커뮤니케이션</p>
                  <p className="text-muted-foreground">기술 글쓰기, 발표, 저술</p>
                </div>
                <div>
                  <p className="font-medium text-primary mb-2">퍼스널 브랜딩</p>
                  <p className="text-muted-foreground">개발자 경력 개발, 전문성 구축</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-1 h-12 bg-accent rounded-full flex-shrink-0"></div>
            <h2 className="text-4xl font-serif font-bold text-primary">저서 및 활동</h2>
          </div>

          <div className="bg-gradient-to-br from-background to-background/50 rounded-lg p-8 border border-border">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                  코드 너머, 회사보다 오래 남을 개발자
                </h3>
                <p className="text-lg text-accent font-medium">한빛미디어 | 2025년 6월 30일 출판</p>
              </div>
              <BookOpen className="h-8 w-8 text-accent flex-shrink-0" />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              소프트 스킬, 개발 문화, 퍼스널 브랜딩을 통해 개발자가 장기적으로 경쟁력을 갖출 수 있는 방법을 제시합니다. 
              단순한 기술 전문성을 넘어 "코드 너머"의 가치를 탐구하며, 회사보다 오래 남을 수 있는 개발자가 되기 위한 
              실질적인 조언과 인사이트를 담고 있습니다.
            </p>
            <div className="flex gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                도서 정보 보기
              </Button>
            </div>
          </div>

          {/* Activities */}
          <div className="mt-12">
            <h3 className="text-xl font-serif font-bold text-primary mb-6">주요 활동</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-primary">AI 커뮤니티 운영 및 생태계 활성화</p>
                  <p className="text-sm text-muted-foreground">NVIDIA, 모두의연구소 등과 협업하여 AI 생태계 활성화 방안 논의</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-primary">개발자 역량 혁신 프로그램</p>
                  <p className="text-sm text-muted-foreground">SK텔레콤 내 개발자들의 역량 개발 및 교육 프로그램 주도</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-primary">기술 커뮤니티 활동</p>
                  <p className="text-sm text-muted-foreground">개발자 커뮤니티와의 협력을 통한 기술 생태계 활성화</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">김상기</h3>
              <p className="text-primary-foreground/80">
                SK텔레콤 Developer Relations Manager<br />
                소프트웨어 공학 전문가
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">빠른 링크</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary-foreground transition-colors">소개</button></li>
                <li><button onClick={() => scrollToSection('experience')} className="hover:text-primary-foreground transition-colors">경력</button></li>
                <li><button onClick={() => scrollToSection('skills')} className="hover:text-primary-foreground transition-colors">스킬</button></li>
                <li><button onClick={() => scrollToSection('publications')} className="hover:text-primary-foreground transition-colors">저서</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/ksangki" className="hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com" className="hover:text-primary-foreground transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="mailto:contact@example.com" className="hover:text-primary-foreground transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Sangki Kim. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
