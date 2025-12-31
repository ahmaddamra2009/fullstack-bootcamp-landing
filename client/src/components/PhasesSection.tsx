/**
 * Training Phases Section - Desert Night Campfire Theme
 * Displays the 11 training phases in an interactive timeline
 * Features: Accordion-style expansion, animated timeline, tech icons
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Clock, ChevronLeft, ChevronDown } from "lucide-react";

interface SubTopic {
  title: string;
  items?: string[];
}

interface PhaseSection {
  sectionTitle: string;
  topics: (string | SubTopic)[];
}

interface Phase {
  id: string;
  title: string;
  duration: string;
  hours: string;
  topics?: string[];
  sections?: PhaseSection[];
}

const phases: Phase[] = [
  {
    id: "01",
    title: "التعرف على مصطلحات البرمجة وال IT",
    duration: "أسبوع",
    hours: "8 ساعات",
    topics: [
      "45 مصطلح برمجي مهم وأساسي",
      "شرح معنى SQL ببساطة",
      "الفرق بين Compiled و Interpreted Languages",
      "مبادئ وأساسيات الـ OOP",
    ],
  },
  {
    id: "02",
    title: "الخوارزميات وحل المشكلات Problem Solving",
    duration: "أسبوع",
    hours: "10 ساعات",
    topics: [
      "ما هو Problem Solving وكيف تتم حل المشكلات",
      "ما هي الخوارزميات Algorithm",
      "Flowchart ماهي المخططات التدفقية",
      "تطبيقات عملية على الخوارزميات",
    ],
  },
  {
    id: "03",
    title: "تعلم لغة برمجة ال C# بشكل مبتدأ ومتقدم",
    duration: "أسبوعان",
    hours: "20 ساعة",
    sections: [
      {
        sectionTitle: "C# مبتدئ",
        topics: [
          "Introduction to C#",
          "History of C# Version",
          "C# Code Execution",
          "Installing and Configuring C# in Visual Studio",
          {
            title: ".NET Framework",
            items: [
              "What is .NET?",
              "CLR – Common Language Runtime",
              "Standard Class Libraries",
            ],
          },
          "Variable and Datatype (Call by value and call by reference)",
          "Operators and Operators Precedence",
          "Increment and Decrement Operators",
          {
            title: "Conditional Statements",
            items: ["If, else if, else", "Switch statements"],
          },
          {
            title: "Loops",
            items: [
              "For Loops in C#",
              "Foreach loops",
              "While loops",
              "Do-While loops",
              "Infinite Loops",
              "Jump Statements",
            ],
          },
          {
            title: "Arrays",
            items: ["Arrays and Types of Arrays", "Manipulating Arrays"],
          },
          "Lists",
          {
            title: "String",
            items: [
              "Strings and String Methods",
              "Slicing strings into substrings & Formatting strings",
            ],
          },
          "Predefined data types",
          {
            title: "Working with DateTime",
            items: [
              "DateTime class",
              "Timespan class",
              "Formatting dates and times",
            ],
          },
          {
            title: "User-defined data types (Classes) - OOP",
            items: [
              "Object-Oriented Programming Concepts",
              "Classes and Objects",
              "Encapsulation and Abstraction",
              "Constructors",
              "Inheritance",
            ],
          },
          {
            title: "Git & GitHub",
            items: [
              "How to use Git & GitHub to manage your code and upload projects",
            ],
          },
        ],
      },
      {
        sectionTitle: "C# متقدم",
        topics: [
          {
            title: "C# Namespace",
            items: [
              "What is a namespace?",
              "Creating a namespace",
              "C# System namespace",
            ],
          },
          {
            title: "C# Generic",
            items: [
              "What is a generic?",
              "Generic Type Parameters",
              "Constraints on Type Parameters",
              "Generic Classes and Interfaces",
              "Generic Methods",
            ],
          },
          "Polymorphism",
          {
            title: "Interfaces",
            items: [
              "What is an interface?",
              "Creating an interface",
              "Implementing an interface",
            ],
          },
          "Static Class and Static Methods",
          "Extension Methods",
          {
            title: "C# Debugging, Exception Handling",
            items: [
              "What is debugging",
              "Types of Errors – Syntax, Runtime, and Logical",
              "Compile Time vs. Runtime Errors",
              "Null Reference Exception",
              "Divide By Zero Exception",
            ],
          },
          {
            title: "LINQ C#",
            items: [
              "What is LINQ?",
              "Write your first LINQ query!",
              "Select and Select Many",
              "OfType and Where",
              "OrderBy, and Reverse",
              "GroupBy",
              "Distinct, Except",
              "Any, and Contains",
              "Skip and Take",
              "Inner Join",
              "First, Last, Single, and ElementAt",
              "Aggregate and Count",
            ],
          },
          "Lambda Expression",
          "What is Synchronous and Asynchronous?",
          {
            title: "How to write good code",
            items: [
              "What is good code?",
              "Writing reusable code",
              "Writing clean code",
              "Writing efficient code",
              "Writing scalable code",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "04",
    title: "تعلم تصميم صفحات الويب HTML5-CSS3-JAVASCRIPT",
    duration: "أسبوعان",
    hours: "20 ساعة",
    sections: [
      {
        sectionTitle: "HTML5",
        topics: [
          "Introduction to Web Development",
          "What is HTML5?",
          "Doctype & layout",
          "HTML Tag",
          "Formatting HTML Tag",
          "Forms and Input Tag",
          "IFrame Tag",
          "Links and Images",
          "Video Tag",
          "div, id & class",
          "List Tag",
          "Table Tag",
          "Semantic and Non-Semantic Tags",
        ],
      },
      {
        sectionTitle: "CSS3",
        topics: [
          "What is CSS?",
          "CSS Syntax",
          "CSS Simple Selector",
          "CSS Combinator Selectors",
          "Pseudo-class Selectors",
          "Pseudo Elements Selectors",
          "Attribute Selectors",
          "CSS Fonts Property",
          "CSS Positions",
          "CSS Float",
          "CSS Display",
          "CSS Colors",
          "CSS Background Colors",
          "CSS Style Table",
          "CSS Styling Images",
          "CSS Forms",
          "CSS Text Effects",
        ],
      },
      {
        sectionTitle: "JavaScript",
        topics: [
          "Introduction to JavaScript",
          "Setting up your development environment",
          "Writing your first JavaScript program",
          "Understanding variables",
          "Understanding data types",
          "Using arithmetic and comparison operators",
          "Arrays in JavaScript",
          "Working with strings",
          "Working with string manipulation",
          "Conditional statements (if/else, switch)",
          "Looping structures (for, while)",
          "Functions and scope",
          "Understanding the Document Object Model (DOM)",
          "Accessing DOM elements with JavaScript",
          "Creating and removing DOM elements with JavaScript",
          "Handling errors and exceptions",
        ],
      },
    ],
  },
  {
    id: "05",
    title: "تعلم بناء قواعد البيانات Microsoft SQL Server",
    duration: "أسبوع ونصف",
    hours: "15 ساعة",
    topics: [
      "Database Design و Normalization",
      "SQL Queries (SELECT, INSERT, UPDATE, DELETE)",
      "Joins, Subqueries, Stored Procedures",
      "Database Security و Backup",
    ],
  },
  {
    id: "06",
    title: "بناء تطبيق الويب ASP.NET CORE MVC Using C#",
    duration: "أسبوعان",
    hours: "25 ساعة",
    topics: [
      "MVC Architecture Pattern",
      "Controllers, Views, Models",
      "Entity Framework Core",
      "Authentication و Authorization",
    ],
  },
  {
    id: "07",
    title: "تعلم LINQ Query والتعامل مع الـ Data Sources",
    duration: "أسبوع",
    hours: "10 ساعات",
    topics: [
      "LINQ Syntax و Query Expressions",
      "LINQ to Objects و LINQ to SQL",
      "Lambda Expressions",
      "Data Filtering و Sorting و Grouping",
    ],
  },
  {
    id: "08",
    title: "بناء الخدمات Restful Web API Services",
    duration: "أسبوع ونصف",
    hours: "15 ساعة",
    topics: [
      "RESTful API Principles",
      "HTTP Methods و Status Codes",
      "JWT Authentication",
      "API Documentation و Testing",
    ],
  },
  {
    id: "09",
    title: "تصميم الواجهات باستخدام React",
    duration: "أسبوعان",
    hours: "20 ساعة",
    topics: [
      "React Components و JSX",
      "State Management و Hooks",
      "React Router و Navigation",
      "API Integration و Axios",
    ],
  },
  {
    id: "10",
    title: "نشر الموقع على الويب Web Hosting",
    duration: "أسبوع",
    hours: "8 ساعات",
    topics: [
      "Azure Deployment",
      "IIS Configuration",
      "Domain و SSL Setup",
      "CI/CD Basics",
    ],
  },
  {
    id: "11",
    title: "تطوير المسار المهني (LinkedIn & مقابلات HR)",
    duration: "أسبوع",
    hours: "9 ساعات",
    topics: [
      "بناء LinkedIn Profile احترافي",
      "كتابة CV فعال",
      "التحضير لمقابلات العمل",
      "مهارات التفاوض على الراتب",
    ],
  },
];

function TopicItem({ topic }: { topic: string | SubTopic }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (typeof topic === "string") {
    return (
      <li className="flex items-start gap-2 text-white/70">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
        <span>{topic}</span>
      </li>
    );
  }

  return (
    <li className="text-white/70">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-start gap-2 w-full text-right hover:text-white/90 transition-colors"
      >
        <ChevronDown
          className={`w-4 h-4 mt-1 text-cyan-400 transition-transform shrink-0 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
        <span className="font-medium text-white/80">{topic.title}</span>
      </button>
      {isExpanded && topic.items && (
        <ul className="mr-6 mt-2 space-y-1">
          {topic.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-white/60 text-sm">
              <span className="w-1 h-1 rounded-full bg-cyan-400/60 mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function PhaseContent({ phase }: { phase: Phase }) {
  const [activeSection, setActiveSection] = useState(0);

  if (phase.sections) {
    return (
      <div className="pr-16 pt-2">
        {/* Section Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {phase.sections.map((section, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSection(idx)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === idx
                  ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              {section.sectionTitle}
            </button>
          ))}
        </div>

        {/* Section Content */}
        <ul className="space-y-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
          {phase.sections[activeSection].topics.map((topic, topicIndex) => (
            <TopicItem key={topicIndex} topic={topic} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="pr-16 pt-2">
      <ul className="space-y-2">
        {phase.topics?.map((topic, topicIndex) => (
          <li key={topicIndex} className="flex items-start gap-2 text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PhasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section id="phases" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{ backgroundImage: "url('/images/coding-journey.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]" />

      <div className="container relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            مراحل <span className="gradient-text">البرنامج</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            رحلة متكاملة من الصفر إلى الاحتراف في 11 مرحلة مدروسة بعناية
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="glass-light rounded-xl px-8 py-4 text-center">
              <p className="text-4xl font-bold text-cyan-400 font-['Poppins']">
                11
              </p>
              <p className="text-white/60 text-sm">مرحلة</p>
            </div>
            <div className="glass-light rounded-xl px-8 py-4 text-center">
              <p className="text-4xl font-bold text-cyan-400 font-['Poppins']">
                14
              </p>
              <p className="text-white/60 text-sm">أسبوع</p>
            </div>
            <div className="glass-light rounded-xl px-8 py-4 text-center">
              <p className="text-4xl font-bold text-cyan-400 font-['Poppins']">
                160
              </p>
              <p className="text-white/60 text-sm">ساعة</p>
            </div>
          </div>
        </motion.div>

        {/* Phases Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion
            type="multiple"
            value={openItems}
            onValueChange={setOpenItems}
            className="space-y-3"
          >
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={phase.id}
                  className="glass rounded-xl border-0 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5 transition-colors [&[data-state=open]>div>.chevron]:rotate-90">
                    <div className="flex items-center gap-4 w-full">
                      {/* Phase Number */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shrink-0">
                        <span className="text-white font-bold font-['Poppins']">
                          {phase.id}
                        </span>
                      </div>

                      {/* Phase Info */}
                      <div className="flex-1 text-right">
                        <h3 className="text-white font-semibold text-base sm:text-lg">
                          {phase.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-1 text-white/50 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {phase.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {phase.hours}
                          </span>
                        </div>
                      </div>

                      {/* Chevron */}
                      <ChevronLeft className="w-5 h-5 text-cyan-400 transition-transform duration-200 chevron" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <PhaseContent phase={phase} />
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.7);
        }
      `}</style>
    </section>
  );
}
