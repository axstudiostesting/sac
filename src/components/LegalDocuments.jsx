"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const LegalDocuments = () => {
  const [activeTab, setActiveTab] = useState("terms");
  const [openSections, setOpenSections] = useState({
    terms: [0],
    privacy: [0],
  });

  const toggleSection = (docType, index) => {
    setOpenSections((prev) => {
      const current = prev[docType];
      const isOpen = current.includes(index);
      return {
        ...prev,
        [docType]: isOpen
          ? current.filter((i) => i !== index)
          : [...current, index],
      };
    });
  };

  const termsSections = [
    {
      title: "1. قبول الشروط والأحكام",
      content: (
        <>
          <p className="mb-4 text-lg leading-relaxed">
            بالوصول إلى خدمات شركة Custom Edge Consulting أو استخدامها، فإنك
            توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق مع أي جزء
            من هذه الشروط، فيجب عليك عدم استخدام خدماتنا.
          </p>
          <p className="text-lg leading-relaxed">
            تنطبق هذه الشروط على جميع الزوار والمستخدمين والآخرين الذين يصلون
            إلى خدماتنا الاستشارية أو يستخدمونها.
          </p>
        </>
      ),
    },
    {
      title: "2. الخدمات المقدمة",
      content: (
        <>
          <p className="mb-4 text-lg leading-relaxed">
            تقدم Custom Edge Consulting حلولاً استشارية شاملة تشمل على سبيل
            المثال لا الحصر:
          </p>
          <ul className="list-disc pr-6 mb-4 space-y-2 text-lg leading-relaxed">
            <li>استشارات رأس المال البشري والموارد البشرية</li>
            <li>التخطيط الاستراتيجي وإستراتيجيات الأعمال</li>
            <li>التميز المؤسسي والحوكمة</li>
            <li>تحليل الأعمال ودراسات الجدوى</li>
            <li>التطوير التنظيمي والهيكلي</li>
          </ul>
          <p className="text-lg leading-relaxed">
            جميع الخدمات تخضع للتوافر والاتفاقيات التعاقدية الخاصة.
          </p>
        </>
      ),
    },
    {
      title: "3. الملكية الفكرية",
      content: (
        <p className="text-lg leading-relaxed">
          جميع المحتويات والتصاميم والرسومات والتقنيات التي طورتها Custom Edge
          Consulting تبقى ملكاً حصرياً لنا. يمنع منعاً باتاً الاستخدام أو
          الاستنساخ أو التوزيع غير المصرح به لأي مواد خاصة بـ Custom Edge
          Consulting دون موافقة خطية مسبقة.
        </p>
      ),
    },
    {
      title: "4. السرية والخصوصية",
      content: (
        <p className="text-lg leading-relaxed">
          نحن ملتزمون بالحفاظ على سرية جميع المعلومات الخاصة بالعملاء والمشاريع.
          يتم التعامل مع جميع البيانات والمعلومات بسرية تامة ولا يتم مشاركتها مع
          أي أطراف ثالثة دون موافقة خطية مسبقة من العميل.
        </p>
      ),
    },
    {
      title: "5. المسؤولية والضمان",
      content: (
        <p className="text-lg leading-relaxed">
          تقدم Custom Edge Consulting خدماتها بأعلى معايير الجودة والاحترافية.
          ومع ذلك، لا تتحمل الشركة مسؤولية أي أضرار غير مباشرة أو تبعية تنشأ عن
          استخدام خدماتنا. يتم تحديد نطاق المسؤولية في الاتفاقيات التعاقدية
          المبرمة مع كل عميل.
        </p>
      ),
    },
  ];

  const privacySections = [
    {
      title: "1. جمع المعلومات",
      content: (
        <>
          <p className="mb-4 text-lg leading-relaxed">
            تجمع Custom Edge Consulting المعلومات الضرورية لتقديم خدماتنا، بما
            في ذلك:
          </p>
          <ul className="list-disc pr-6 mb-4 space-y-2 text-lg leading-relaxed">
            <li>معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
            <li>تفاصيل الشركة والمؤسسة</li>
            <li>مواصفات المشروع ومتطلباته</li>
            <li>البيانات التنظيمية والإدارية (لأغراض التحليل والاستشارة)</li>
          </ul>
          <p className="text-lg leading-relaxed">
            نجمع هذه المعلومات من خلال موقعنا الإلكتروني والعقود والاتصالات
            المباشرة.
          </p>
        </>
      ),
    },
    {
      title: "2. استخدام المعلومات",
      content: (
        <p className="text-lg leading-relaxed">
          تُستخدم المعلومات المجمعة حصرياً لتقديم خدماتنا الاستشارية وتحسينها،
          والتواصل مع العملاء، ومعالجة المعاملات، والامتثال للالتزامات
          القانونية. نحن لا نبيع أو نشارك البيانات الشخصية مع أطراف ثالثة لأغراض
          التسويق.
        </p>
      ),
    },
    {
      title: "3. أمان البيانات",
      content: (
        <p className="text-lg leading-relaxed">
          تطبق Custom Edge Consulting إجراءات أمان قياسية في الصناعة لحماية
          معلوماتك. يشمل ذلك التشفير وضوابط الوصول والتدقيق الأمني المنتظم. ومع
          ذلك، لا يوجد نقل أو تخزين إلكتروني آمن بنسبة 100٪، ولا يمكننا ضمان
          الأمان المطلق.
        </p>
      ),
    },
    {
      title: "4. حقوق المستخدم",
      content: (
        <p className="text-lg leading-relaxed">
          لديك الحق في الوصول إلى معلوماتك الشخصية التي نحتفظ بها وتصحيحها أو
          حذفها. إذا كنت ترغب في ممارسة أي من هذه الحقوق، يرجى الاتصال بنا على
          التفاصيل المقدمة على موقعنا الإلكتروني.
        </p>
      ),
    },
    {
      title: "5. التغييرات على السياسة",
      content: (
        <p className="text-lg leading-relaxed">
          قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر جميع التغييرات
          على موقعنا الإلكتروني، وستصبح النسخة المحدثة سارية المفعول فور النشر.
        </p>
      ),
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16" dir="rtl">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">
        الشروط والأحكام وسياسة الخصوصية
      </h1>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab("terms")}
          className={`px-6 py-3 font-medium text-lg ${
            activeTab === "terms"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          الشروط والأحكام
        </button>
        <button
          onClick={() => setActiveTab("privacy")}
          className={`px-6 py-3 font-medium text-lg ${
            activeTab === "privacy"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          سياسة الخصوصية
        </button>
      </div>

      {/* Document Content */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        {activeTab === "terms" ? (
          <div className="divide-y divide-gray-200">
            {termsSections.map((section, index) => (
              <div
                key={index}
                className="p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleSection("terms", index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {section.title}
                  </h3>
                  {openSections.terms.includes(index) ? (
                    <FiChevronUp className="text-primary text-xl" />
                  ) : (
                    <FiChevronDown className="text-primary text-xl" />
                  )}
                </button>
                {openSections.terms.includes(index) && (
                  <div className="mt-4 text-gray-700 bg-gray-50 rounded-lg p-4">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {privacySections.map((section, index) => (
              <div
                key={index}
                className="p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleSection("privacy", index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {section.title}
                  </h3>
                  {openSections.privacy.includes(index) ? (
                    <FiChevronUp className="text-primary text-xl" />
                  ) : (
                    <FiChevronDown className="text-primary text-xl" />
                  )}
                </button>
                {openSections.privacy.includes(index) && (
                  <div className="mt-4 text-gray-700 bg-gray-50 rounded-lg p-4">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact Information */}
      <div className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/10">
        <h3 className="text-2xl font-bold text-primary mb-4 text-center">
          للاستفسارات حول الشروط أو الخصوصية
        </h3>
        <div className="text-center space-y-2 text-gray-700 text-lg">
          <p>
            البريد الإلكتروني:{" "}
            <a
              href="mailto:info@customedge.sa"
              className="text-primary hover:underline font-medium"
            >
              info@customedge.sa
            </a>
          </p>
          <p>
            الهاتف:{" "}
            <a
              href="tel:+966596735773"
              className="text-primary hover:underline font-medium"
            >
              (+966) 55 151 0633
            </a>
          </p>
        </div>
      </div>

      {/* Last Updated */}
      <div className="mt-8 text-center text-gray-500">
        <p className="text-lg">
          آخر تحديث:{" "}
          <span className="ltr-nums" dir="ltr">
            {new Date().toLocaleDateString("ar-SA", {
              year: "numeric",
              month: "long",
              day: "numeric",
              numberingSystem: "latn",
            })}
          </span>
        </p>
        <p className="mt-2 text-lg">
          © {new Date().getFullYear()} Custom Edge Consulting. جميع الحقوق
          محفوظة.
        </p>
      </div>
    </section>
  );
};

export default LegalDocuments;
