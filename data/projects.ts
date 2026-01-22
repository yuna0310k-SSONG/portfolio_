// data/projects.ts

export type Project = {
    id: string;
    title: string;
    description: string;
    motivation?: string;
    stack: string[];
    image: string;
    link: string;
    status?: string;
  };
  
  export const projects: Project[] = [
    {
      id: "midas",
      title: "Midas 한의원",
      description:
        "한의원 홈페이지 리뉴얼 프로젝트",
        motivation:
  "평소 다니던 한의원의 홈페이지가 오래되어 개선이 필요하다고 느꼈고, 원장님께서 새로 만들고 싶다는 말씀을 주셔서 실제 사용을 목표로 프로젝트를 진행 중입니다.",
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "NestJS",
    "Supabase",
    "JWT",
    "bcrypt",
  ],
      image: "/projects/midas.png", // 없으면 임시 이미지 써도 OK
      link: "https://midas-front-alpha.vercel.app/",
      status: "상세페이지 협의중",
    },
    
    
    {
      id: "talk-2-sheet",
      title: "Talk 2 Sheet",
      description:
        "카카오톡 대화(.txt)를 엑셀, CSV, PDF 형식으로 변환하는 웹 애플리케이션입니다.",
      motivation:
        "지인이 카카오톡 대화를 수기로 정리하는 모습을 보며, 이 과정을 프로그램으로 자동화할 수 있지 않을까라는 생각에서 프로젝트를 시작하게 되었습니다.",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "xlsx",
        "jsPDF",
      ],

      image: "/projects/talk2sheet.png", 
      link: "https://talk-2-sheet.vercel.app/",
      status: "완료",
    },
    
  ];
  