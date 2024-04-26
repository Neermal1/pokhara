//images
import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import Image from "next/image";
import student1 from "../../../public/images/academicprograms/studentone.jpg";
import BlogCard from "../Blogs/BlogCard";
import ComponentHeader from "@/components/componentHeader/ComponentHeader";
const BlogDetail = ({ slug }: any) => {
  return (
    <div className="">
      <div className="max-w-5xl mt-[-45px] mb-10 mx-auto bg-white drop-shadow-md  rounded-[8px] p-8 flex flex-col gap-10">
        <div>
          <Image
            src={student1}
            alt="loading"
            className="w-full h-[50vh] object-cover rounded-[8px]"
          />
        </div>
        <div className="leading-[25px]">
          <div>
            Increasing brain capacity, often referred to as cognitive
            enhancement or cognitive optimization, is a topic that encompasses
            various strategies and techniques aimed at improving cognitive
            function, memory, focus, and overall brain health. Heres a detailed
            breakdown of some approaches: Healthy Lifestyle Choices: Maintaining
            a healthy lifestyle is crucial for optimal brain function. This
            includes regular exercise, adequate sleep, a balanced diet rich in
            fruits, vegetables, whole grains, lean proteins, and healthy fats,
            and staying hydrated. Exercise has been shown to promote
            neurogenesis (the formation of new brain cells), improve mood, and
            enhance cognitive function. Mental Stimulation: Engaging in mentally
            stimulating activities such as puzzles, games, reading, learning new
            skills or languages, and participating in challenging activities
            like music or art can help keep the brain active and improve
            cognitive abilities. Continuous learning and intellectual
            stimulation promote neuroplasticity, the brains ability to adapt and
            reorganize itself. Mindfulness and Meditation: Practices such as
            mindfulness meditation and deep breathing exercises can reduce
            stress, improve focus, and enhance cognitive function.
          </div>
          <br />
          <div>
            These techniques have been shown to increase gray matter density in
            brain regions associated with memory, learning, and emotional
            regulation. Brain Training Programs: There are various brain
            training programs and apps designed to exercise different cognitive
            skills such as memory, attention, processing speed, and
            problem-solving. While the efficacy of some of these programs is
            debated, engaging in activities that challenge the brain can still
            be beneficial. Social Engagement: Maintaining social connections and
            participating in social activities can have a positive impact on
            brain health. Social interaction stimulates the brain, reduces the
            risk of cognitive decline, and promotes emotional well-being.
            Brain-Boosting Supplements: Some supplements claim to enhance
            cognitive function and memory.
          </div>
          <br />
          <div>
            However, its essential to approach these with caution and consult
            with a healthcare professional before taking any supplements, as
            their effectiveness and safety may vary. Brain-Healthy Nutrients:
            Certain nutrients and dietary supplements have been associated with
            brain health. These include omega-3 fatty acids found in fish oil,
            antioxidants such as vitamins C and E, and other nutrients like B
            vitamins, magnesium, and zinc. Consuming a well-balanced diet that
            includes these nutrients may support brain function. Quality Sleep:
            Adequate sleep is essential for cognitive function, memory
            consolidation, and overall brain health. Aim for 7-9 hours of
            quality sleep per night, as sleep deprivation can impair cognitive
            abilities and lead to memory problems. Stress Management: Chronic
            stress can have detrimental effects on the brain, including
            impairing memory and cognitive function.
          </div>
          <br />

          <div>
            Practicing stress management techniques such as relaxation
            exercises, mindfulness, and time management can help mitigate the
            impact of stress on the brain. Medical Interventions: In some cases,
            medical interventions such as medication or therapy may be necessary
            to address underlying conditions that affect cognitive function,
            such as depression, anxiety, attention deficit hyperactivity
            disorder (ADHD), or sleep disorders. Its important to note that
            while these strategies may help support brain health and cognitive
            function, individual results may vary. Additionally, maintaining a
            healthy lifestyle and engaging in brain-boosting activities is
            beneficial not only for increasing brain capacity but also for
            overall well-being and quality of life.
          </div>
        </div>
        <div className="">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="blog-image"
                className="h-[8vh] w-[8vh] rounded-full object-cover"
              />
              <div className="flex flex-col">
                <div className="font-medium text-[18px]">Louis</div>
                <div className="text-[14px]">Student (Class 10)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout component-padding">
        <div>
          <ComponentHeader
            data={{
              heading: "Related Blogs",
              subheading:
                "From consultation to implementation, we're here to support you every step of the way",
            }}
          />
        </div>
        <div>
          <BlogCard />
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default BlogDetail;
