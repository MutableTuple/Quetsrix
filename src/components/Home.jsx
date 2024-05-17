import React from "react";
import Header from "./Header";
import Question from "./Question";
import QNAContainer from "./QNAContainer";
import Footer from "./Footer";
import { useState } from "react";

export const questions = [
  {
    Question: "How does climate change affect polar bears?",
    Answer:
      "Climate change reduces sea ice habitat, affecting polar bears' ability to hunt seals, leading to malnutrition, lower cub survival rates, and population decline.",
  },
  {
    Question: "What is quantum computing?",
    Answer:
      "Quantum computing is a type of computing based on quantum mechanics principles, utilizing quantum bits (qubits) to perform calculations much faster than classical computers for certain problems.",
  },
  {
    Question: "How can I improve my mental health?",
    Answer:
      "Improving mental health can involve regular exercise, healthy eating, sufficient sleep, stress management techniques, building strong relationships, and seeking professional help if needed.",
  },
  {
    Question: "What causes the Blue Screen of Death (BSOD)?",
    Answer:
      "The BSOD can be caused by hardware issues, driver conflicts, software bugs, or corrupted system files. Common triggers include faulty RAM, failing hard drives, incompatible drivers, or recent software changes.",
  },
  {
    Question: "How can I find out what caused the BSOD?",
    Answer:
      "Note the error code displayed on the BSOD screen. Use tools like Event Viewer (eventvwr.msc) and BlueScreenView to analyze the crash dump files for more details on the cause.",
  },
  {
    Question: "What causes the Blue Screen of Death (BSOD)?",
    Answer:
      "The BSOD can be caused by hardware issues, driver conflicts, software bugs, or corrupted system files. Common triggers include faulty RAM, failing hard drives, incompatible drivers, or recent software changes.",
  },
  {
    Question: "How do I fix a BSOD related to a specific driver?",
    Answer:
      "Boot into Safe Mode and update or rollback the problematic driver using Device Manager. If you recently updated a driver, rolling it back to a previous version might resolve the issue.",
  },
  {
    Question: "Can a virus cause a BSOD?",
    Answer:
      "Yes, malware can corrupt system files or interfere with critical processes, leading to a BSOD. Run a full system scan with a reliable antivirus program to detect and remove any malicious software.",
  },
  {
    Question: "How do I prevent future BSODs?",
    Answer:
      "Keep your system updated with the latest Windows updates and drivers. Regularly check your hardware for issues, avoid installing untrusted software, and maintain good system hygiene by running regular scans and monitoring system performance.",
  },
  {
    Question: "What are the benefits of meditation?",
    Answer:
      "Meditation can reduce stress, enhance concentration, improve emotional health, increase self-awareness, and promote overall well-being.",
  },
  {
    Question: "How do vaccines work?",
    Answer:
      "Vaccines work by stimulating the immune system to recognize and fight specific pathogens, providing immunity without causing the disease itself.",
  },
  {
    Question: "What is artificial intelligence (AI)?",
    Answer:
      "Artificial intelligence is the simulation of human intelligence processes by machines, particularly computer systems, involving learning, reasoning, and self-correction.",
  },
  {
    Question: "What is the difference between an asteroid and a comet?",
    Answer:
      "Asteroids are rocky bodies orbiting the sun, mostly found in the asteroid belt between Mars and Jupiter, while comets are composed of ice, dust, and rocky material, typically originating from the outer solar system.",
  },
  {
    Question: "How do I protect my online privacy?",
    Answer:
      "Protect online privacy by using strong, unique passwords, enabling two-factor authentication, being cautious with personal information, using VPNs, and regularly updating software.",
  },
  {
    Question: "What causes earthquakes?",
    Answer:
      "Earthquakes are caused by the sudden release of energy in the Earth's crust due to tectonic plate movements, volcanic activity, or human activities like mining or reservoir-induced seismicity.",
  },
  {
    Question: "What are the signs of a healthy relationship?",
    Answer:
      "A healthy relationship involves mutual respect, trust, open communication, support, shared values, and the ability to resolve conflicts constructively.",
  },
  {
    Question: "How can I reduce my carbon footprint?",
    Answer:
      "Reduce your carbon footprint by using energy-efficient appliances, reducing meat consumption, recycling, using public transportation, and supporting renewable energy sources.",
  },
  {
    Question: "What is the significance of the Higgs boson?",
    Answer:
      "The Higgs boson is significant because it confirms the existence of the Higgs field, which gives mass to elementary particles, playing a crucial role in the Standard Model of particle physics.",
  },
  {
    Question: "What is blockchain technology?",
    Answer:
      "Blockchain technology is a decentralized digital ledger that records transactions across multiple computers in a way that ensures security and transparency.",
  },
  {
    Question: "How do I start investing in stocks?",
    Answer:
      "Start investing in stocks by researching the market, setting financial goals, choosing a brokerage account, diversifying your portfolio, and continuously monitoring and adjusting your investments.",
  },
  {
    Question: "What are the symptoms of depression?",
    Answer:
      "Symptoms of depression include persistent sadness, loss of interest in activities, changes in appetite or weight, sleep disturbances, fatigue, and difficulty concentrating.",
  },
  {
    Question: "What is the purpose of the International Space Station (ISS)?",
    Answer:
      "The purpose of the ISS is to conduct scientific research, demonstrate new technologies, and foster international cooperation in space exploration.",
  },
  {
    Question: "How can I improve my public speaking skills?",
    Answer:
      "Improve public speaking skills by practicing regularly, understanding your audience, organizing your content, using visual aids, and managing anxiety through relaxation techniques.",
  },
  {
    Question: "What is genetic engineering?",
    Answer:
      "Genetic engineering is the manipulation of an organism's DNA to alter its characteristics, often used in medicine, agriculture, and research.",
  },
  {
    Question: "How does the internet work?",
    Answer:
      "The internet works by connecting computers and devices through a global network of servers and routers, using standardized protocols like TCP/IP to transmit data.",
  },
  {
    Question: "What are the benefits of renewable energy?",
    Answer:
      "Renewable energy benefits include reducing greenhouse gas emissions, decreasing air pollution, providing sustainable energy sources, and creating jobs in green industries.",
  },
  {
    Question: "How do I manage stress effectively?",
    Answer:
      "Manage stress effectively by practicing relaxation techniques, maintaining a healthy lifestyle, setting realistic goals, staying organized, and seeking support from friends or professionals.",
  },
  {
    Question: "What is the theory of relativity?",
    Answer:
      "The theory of relativity, developed by Albert Einstein, consists of special relativity and general relativity, explaining the relationship between space, time, and gravity.",
  },
  {
    Question: "How does photosynthesis work?",
    Answer:
      "Photosynthesis is the process by which green plants convert sunlight into chemical energy, using carbon dioxide and water to produce glucose and oxygen.",
  },
  {
    Question: "What is machine learning?",
    Answer:
      "Machine learning is a subset of artificial intelligence that involves training algorithms to learn from and make predictions or decisions based on data.",
  },
  {
    Question: "How do I create a budget?",
    Answer:
      "Create a budget by tracking your income and expenses, categorizing spending, setting financial goals, and adjusting your habits to save money and avoid debt.",
  },
  {
    Question: "What is the difference between a virus and bacteria?",
    Answer:
      "Viruses are tiny infectious agents that require a host cell to replicate, while bacteria are single-celled microorganisms that can live independently and are often beneficial, though some cause infections.",
  },
  {
    Question: "How do electric cars work?",
    Answer:
      "Electric cars work by using electric motors powered by batteries, which are charged through an external power source, providing a clean and efficient alternative to internal combustion engines.",
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchedQuestions =
    searchQuery.length > 0
      ? questions.filter((ques) =>
          ques.Question.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : questions;

  return (
    <>
      <Header
        question={questions}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="">
        {searchedQuestions.map((ques) => (
          <QNAContainer question={ques.Question} answer={ques.Answer} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
