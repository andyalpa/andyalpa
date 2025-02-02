import React from "react";
import "./resume.css";
import Card from "./Card";

const Resume = () => {
  const experiences = [
    {
      id: 1,
      category: "education",
      year: "2013-2014",
      title: "Intermediate Technician in Computer Science",
      icon: "icon-graduation",
      subtitle: "IPI Republica Bolivariana de Venezuela (Cuba)",
      description: (
        <>
          As an Intermediate Technician in Computer Science specializing in
          Computer Hardware, I have a robust skill set in IT hardware support
          and computer science. My expertise includes: <br />
          • Providing technical support for computer hardware, ensuring optimal
          performance and resolving hardware-related issues.
          <br />
          • Diagnosing and fixing hardware problems efficiently.
          <br />
          • Installing and configuring software applications for compatibility
          and smooth operation.
          <br />
          • Applying theoretical concepts to practical hardware solutions.
          <br />
          • Managing and troubleshooting Windows-based environments.
          <br />
          • Understanding the design and organization of computer systems and
          components.
          <br />
          • Performing hardware diagnostics to ensure reliable computer systems.
          <br />
          My comprehensive skill set makes me a valuable asset in the field of
          computer hardware, capable of addressing a wide range of technical
          challenges and contributing to the efficient operation of IT systems.
          <br />
        </>
      ),
    },
    {
      id: 1,
      category: "education",
      year: "2015",
      title: "Full-Stack Software Developer",
      icon: "icon-graduation",
      subtitle: "4Geeks Academy",
      description: (
        <>
          As a Full-Stack Software Developer, I have a comprehensive skill set
          acquired from 4Geeks Academy. My expertise includes:
          <br />
          • Managing and collaborating on code repositories.
          <br />
          • Implementing agile methodologies for efficient project management.
          <br />
          • Developing server-side applications using Node.jsand Python.
          <br />
          • Managing and querying databases with SQL and MySQL.
          <br />
          • Utilizing frameworks like Bootstrap for responsive design.
          <br />
          • Handling version control and code management with Git.
          <br />
          • Creating intuitive and user-friendly interfaces.
          <br />
          • Building interactive and dynamic web pages with JavaScript and
          React.js.
          <br />
          • Styling web pages with CSS.
          <br />
          • Developing web applications with Flask.
          <br />
          • Structuring web content with HTML.
          <br />
          • Ensuring websites work on various devices with responsive web
          design.
          <br />
          My diverse skill set makes me a versatile and valuable asset in the
          field of software development.
        </>
      ),
    },
    {
      id: 2,
      category: "experience",
      year: "05/2016 - 06/2020",
      title: "Department Manager",
      icon: "icon-briefcase",
      subtitle: "Walmart - North Bergen, NJ",
      description: (
        <>
          • Handled shift overstock, restocking and inventory control.
          <br />
          • Worked closely with sales associates to complete tasks. <br />
          • Followed safety protocols and company processes and procedures.
          <br />
          • Kept department on-target to meet sales and profit objectives by
          minimizing waste and pursuing revenue generation opportunities.
          <br />
          • Executed targeted merchandising and promotional plans to meet
          department sales goals.
          <br />
          • Supported shrinkage and safety awareness, reviewed sales and
          inventory data, identified trends and prepared reports for management.
          <br />
        </>
      ),
    },
    {
      id: 3,
      category: "experience",
      year: " 07/2020 - Current",
      title: "Team Lead",
      icon: "icon-briefcase",
      subtitle: "Walmart - Venice, Fl ",
      description: (
        <>
          • Delegated daily tasks to team members to optimize group
          productivity. <br />• Monitored team progress and enforced deadlines.
          <br /> • Collaborated with management team to implement new work
          procedures or policies.
          <br /> • Fostered positive employee relationships through
          communication, training and development coaching.
          <br /> • Organized and prioritized incoming work orders and optimized
          team workflows and resources to handle dynamic demands.
          <br /> • Counted inventory, resolved discrepancies and completed
          paperwork to keep system accurate and current.
          <br /> • Kept work areas clean, neat and free of safety hazards to
          maximize efficiency.
        </>
      ),
    },
  ];

  return (
    <div className="resume container section" id="resume">
      <h2 className="section-title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {experiences.map((experience, id) => {
            if (experience.category === "education") {
              return (
                <Card
                  key={id}
                  icon={experience.icon}
                  title={experience.title}
                  subtitle={experience.subtitle}
                  year={experience.year}
                  description={experience.description}
                />
              );
            }
          })}
        </div>

        <div className="timeline grid">
          {experiences.map((experience, index) => {
            if (experience.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={experience.icon}
                  title={experience.title}
                  subtitle={experience.subtitle}
                  year={experience.year}
                  description={experience.description}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
