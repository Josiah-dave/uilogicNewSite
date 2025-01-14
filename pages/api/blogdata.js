import FinanceIndustry from "./blogs/FinanceIndustry";
import FinancialPlaning from "./blogs/FinancialPlaning";
import HealthcareIndustry from "./blogs/HealthcareIndustry";
import SalesIndustry from "./blogs/SalesIndustry";
import UtilitiesIndustry from "./blogs/UtilitiesIndustry";

const blogs = [
  {
    cover: {
      coverImg:
        "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      Blogcategory: "Finance",
      title: "Innovation in Finance Industry Using PowerApps",
      BlogSummary: `In today's rapidly evolving financial landscape, institutions face a myriad of challenges:
    stringent regulatory compliance, ever-present security threats, rising customer expectations,
and the pressing need for operational efficiency. As these complexities mount... `,
      author: `UI LOGIC`,
      date: "23/10/2024",
    },
    blog: <FinanceIndustry />,
  },

  {
    cover: {
      coverImg:
        "https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      Blogcategory: " Finance",
      title: " Innovation in Energy and Utilities Industry Using PowerApps",
      BlogSummary: ` In an era of increasing energy demand, sustainability concerns, and evolving regulatory
landscapes, the energy and utilities industry faces unprecedented challenges... `,
      author: `UI LOGIC`,
      date: "23/10/2024",
    },
    blog: <UtilitiesIndustry />,
  },

  {
    cover: {
      coverImg:
        "https://images.pexels.com/photos/586042/pexels-photo-586042.jpeg?auto=compress&cs=tinysrgb&w=600",
      Blogcategory: "Sales and Marketing",
      title: "Innovation in Sales Industry Using PowerApps",
      BlogSummary: `  In today's fast-paced and fiercely competitive sales landscape, innovation is not just an
advantage—it&#39;s a necessity. Sales teams face numerous challenges...`,
      author: `UI LOGIC`,
      date: "23/10/2024",
    },
    blog: <SalesIndustry />,
  },

  {
    cover: {
      coverImg:
        "https://images.pexels.com/photos/4149032/pexels-photo-4149032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      Blogcategory: "Human Resources",
      title: "Innovation in Healthcare Industry Using PowerApps",
      BlogSummary: `  In an era where technological advancement is reshaping
                  industries across the board, healthcare stands at the
                  forefront of this digital revolution...`,
      author: `UI LOGIC`,
      date: "23/10/2024",
    },
    blog: <HealthcareIndustry />,
  },
  {
    cover: {
      coverImg:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      Blogcategory: "Finance",
      title: "Excel-Powered Financial Planning and Reporting with PowerApps",
      BlogSummary: ` One of the most powerful features of Microsoft PowerApps for
                  finance professionals is its seamless integration with Excel,
                  allowing for the rapid development of...`,
      author: `UI LOGIC`,
      date: "23/10/2024",
    },
    blog: <FinancialPlaning />,
  },
];

export default blogs;
