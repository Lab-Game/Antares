import { VideoCard } from "@/components/video-card";

// Add a video to a category by appending one entry to its array below.
const electricalVideos = [
  {
    title: "Introduction to Electricity",
    description:
      "Describes the topics we'll cover in this video series, including basic concepts (charge, current, voltage, power, and resistance), a couple equations (Ohm's Law and the power equation), and some special topics (CAN and ESD).",
    youtubeId: "3KePcASD0NQ",
  },
];

export default function TrainingPage() {
  return (
    <main className="site-page">
      <h1>Training</h1>
      <h2>Mechanical</h2>
      <h2>Electrical</h2>
      {electricalVideos.map((video) => (
        <VideoCard key={video.youtubeId} {...video} />
      ))}
      <h2>Motors</h2>
      <h2>Code</h2>
      <h2>Control</h2>
      <h2>Fabrication</h2>
    </main>
  );
}
