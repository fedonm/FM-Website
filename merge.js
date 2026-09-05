const fs = require('fs');

const offPath = 'src/components/OfferingsSection.tsx';
let offCode = fs.readFileSync(offPath, 'utf8');

// Add imports
offCode = offCode.replace(
  "import { branchingCategoriesData, bookingData } from '../data';",
  "import { branchingCategoriesData, bookingData, philosophyData } from '../data';"
);
offCode = offCode.replace(
  "import { ChevronRight, ArrowRight, CheckCircle2, BookOpen, Layers, Target, Compass, Sparkles } from 'lucide-react';",
  "import { ChevronRight, ArrowRight, CheckCircle2, BookOpen, Layers, Target, Compass, Sparkles, Zap, Award, Atom } from 'lucide-react';"
);

// Add state and helpers
const helperCode = `
  const pData = philosophyData[language];
  const [activePillar, setActivePillar] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-6 h-6" />;
      case "Zap":
        return <Zap className="w-6 h-6" />;
      case "Award":
        return <Award className="w-6 h-6" />;
      default:
        return <Atom className="w-6 h-6" />;
    }
  };
`;
offCode = offCode.replace(
  "const { language, setPreselectedLevel } = useApp();",
  "const { language, setPreselectedLevel } = useApp();\n" + helperCode
);

// Add the philosophy UI
const philosophyUI = `
        {/* Integrated Philosophy / Pedagogical Framework */}
        <div className="mt-16 pt-12 border-t border-stone-200/80 dark:border-stone-800">
          <div className="max-w-2xl mb-8 md:mb-10">
            <h3 className="font-serif text-3xl font-normal text-stone-900 dark:text-stone-100">
              {pData.heading}
            </h3>
            <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed font-sans font-light">
              {pData.intro}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pData.pillars.map((pillar, idx) => {
              const isActive = activePillar === idx;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  onClick={() => setActivePillar(idx)}
                  className={\`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between cursor-pointer \${
                    isActive
                      ? "bg-white dark:bg-stone-900 border-teal-600 dark:border-teal-400 shadow-lg ring-1 ring-teal-500/20"
                      : "bg-stone-50/70 dark:bg-stone-900/40 border-stone-200/80 dark:border-stone-800/80 hover:bg-white dark:hover:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-700"
                  }\`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-semibold text-stone-400 dark:text-stone-500">
                        Pillar {pillar.number}
                      </span>
                      <div
                        className={\`p-2.5 rounded-xl transition-colors \${
                          isActive
                            ? "bg-teal-700 dark:bg-teal-500 text-white dark:text-stone-950"
                            : "bg-stone-200/70 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                        }\`}
                      >
                        {getIcon(pillar.iconName)}
                      </div>
                    </div>
                    <div className="space-y-1 mb-5">
                      <h4 className="font-serif text-2xl font-normal text-stone-900 dark:text-stone-100">
                        {pillar.title}
                      </h4>
                      <p className="text-xs font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400 font-medium">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-stone-200/70 dark:border-stone-800/80 mt-auto">
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                  {isActive && (
                    <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-teal-600 dark:bg-teal-400 ring-4 ring-white dark:ring-stone-900" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
`;

offCode = offCode.replace(
  "        </div>\n      </div>\n    </section>\n  );\n};\n",
  "        </div>\n" + philosophyUI + "\n      </div>\n    </section>\n  );\n};\n"
);

fs.writeFileSync(offPath, offCode);
console.log('Merged successfully');
