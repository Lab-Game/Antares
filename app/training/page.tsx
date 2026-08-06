import { VideoCard } from "@/components/video-card";

// Add a video to a category by appending one entry to its array below.
const mechanicalVideos = [
  {
    title: "Introduction to Mechanics",
    description:
      `Classical mechanics is at the heart of FRC, where forces move masses to score and win matches.  And,
      when misapplied, those same forces can tip, flip, and break robots.  Here, we'll preview concepts covered
      in this video series (motion, force, work, mass) and some useful relationships between them.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Motion",
    description:
      `Motion can be immensely complex.  We'll focus on two particularly useful special cases, linear and rotational motion.
      In each case, we'll look at ways to describe position, veloccity, and acceleration and discuss how these three
      characteristics of motion are related.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Force",
    description:
      `Intuitively, a force is a push, pull or twist.  We'll see how to quantify both linear and rotational forces in
      terms of Newtons and Newton-meters.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Friction",
    description:
      `Here, we'll zoom in on friction, a force that resists motion between contacting surfaces.  Friction comes up everywhere
      in FRC, both wreaking havoc and holding robots together.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Work, Energy, and Power",
    description:
      `Work measures the energy needed to move a force over a distance.  Many FRC mechanisms recast work, trading off force
      and distance, to create motion with the right balance of speed and strength.  We'll also look at power, which measures
      how fast work is done.  Power will later emerge as a bridge between the mechanical and electrical worlds, two essential
      aspects of FRC robotics.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Mass",
    description:
      `Mass measures the amount of matter in an object.  We'll look at how mass is quantified and how it relates to weight.
      Then we'll consider two quantities that summarize the distribution of mass in an object:  center-of-mass and moment of inertia.
      Center of mass says a lot about robot stability, while moment of inertia describes how much effort is required to get
      an object (like a shooter or intake roller) spinning.`,
    youtubeId: "dQw4w9WgXcQ",
  },
    {
    title: "Newton's Second Law",
    description:
      `The speed of robots and mechanisms are critical to competitive success FRC.  Newton's Second Law quantifies the 
      relationship between force, mass, and acceleration, allow us to reason about how fast robots and mechanisms can move.`,
    youtubeId: "dQw4w9WgXcQ",
  },
];

const electricalVideos = [
  {
    title: "Introduction to Electricity",
    description:
      `We'll look at the many ways electricity is used on FRC robot:  to power motors, send information, enable computation,
      and shine cool LEDS.
      This introduction previews the topics we'll cover in this video series, including basic concepts (charge, current, voltage,
      power, and resistance), a couple equations (Ohm's Law and the power equation), and some special topics (safety, CAN, and ESD).`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Electric Charge",
    description:
      `Electricity refers to a collection of phenomena associated with electric charge.  We'll look at charge at the atomic level,
      talk about quantification of charge, and discuss how charged particles interact.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Electric Current",
    description:
      `FRC robots are powered by movement of electric charge, or current.  We'll look at how current is quantified, how batteries
      produce current, and places where an understanding of current is paricularly important in FRC.  This includes the battery,
      main breaker, circuit breakers, and motor torque.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Voltage",
    description:
      `Voltage reflects how much energy we can extract from a unit of charge moving between two points.  To build intuition,
      we'll look at how masses moving between two points can release energy sufficient to power a primitive robot.  Then we'll
      consider some places voltage comes up in FRC:  battery voltage, voltage for low-power devices, voltage regulation,
      and motor speed.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Power",
    description:
      `We'll look at power, which is how fast energy is delivered to the robot or a subsystem.  As intuition might suggest,
      power is the amount of charge flowing in per second (current) multiplied by the energy delivered per unit charge
      (voltage).  Power is a great reasoning tool, because the concept spans the electrical and mechanical worlds.  So we
      can compute electrical power requirements for an action based on the mechanical behavior.     
      `,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Resistance",
    description:
      `This video covers resistance, which inhibits the flow of electric current.  Minimizing resistance in the power network
      of an FRC robot reduces the amount of potentially-useful electrical power squandered as waste heat.  Common sources of
      resistance include thin wires, poor connections, and battery internals.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Ohm's Law",
    description:
      `Three of the concepts we've covered, current, voltage, and resistance are linked by a simple equation called Ohm's Law,
      often written V = I R.  A vivid demonstration of Ohm's Law in FRC is provided by brownout, a temporary robot shutdown
      induced by drawing more current than the robot's power system can provide.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Power Revisited",
    description:
      `We'll combine Ohm's Law and the power equation to get a new relationship, P = I^2 R which says, "If you pump a lot
      of current through a thin wire, you're gonna make a lot of heat."  We'll see how this relates to FRC breaker sizing
      rules and powering a mechanism with multiple motors.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Electrical Safety",
    description:
      `FRC rules aim to keep electrical use in a relatively safe range, but there are some risks.  Drawing upon the
      theory we've learned, we'll consider risks of touching battery terminals, unprotected shorts, dropping and
      overheating batteries, and breaker sizing.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "CAN",
    description:
      `Electricity is also used to send data around the robot, and a lot is sent over CAN in particular.  When electricity
      is used for high-speed communication, sub-microsecond phenomena that we could ignore in the context of power distribution
      now loom large.  We'll discuss why CAN wires are twisted, the importance of wire lengths, and the purpose of
      termination-- one place on a robot where resistance is essential.`,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "ESD",
    description:
      `When different materials contact (like a gamepiece and a roller), charge may move preferentially in one direction,
      causing a buildup of "static" or non-moving charge.  This can produce thousands of volts and trigger a sudden flow of
      current called an electrostatic discharge (ESD).  Beyond a painful shock, ESD can cause peculiar and permanent damage
      to electrical devices.`,
    youtubeId: "dQw4w9WgXcQ",
  },
];

const wiringVideos = [
  {
    title: "Introduction to Wiring",
    description:
      `We'll frame the problem of wiring an FRC robot.  The goal is to secure a few hundred wires, connections,
      and devices in a cramped space full of moving parts to enable both efficient power transfer and data
      communication with zero failures over prolonged operation in abusive environment.  To achieve this goal,
      we'll counsel against fixating on a particular widget variety (Molex SL vs. soldering vs. WAGO, etc.) and
      for rigorous procedures to identify and mitigate threats to electrical reliability.`,
      youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Threats",
    description:
      `In this video, we'll talk about threats to the integrity of the electrical system:  loose connections, undersized wiring,
      improperly-assembled connectors, broken connectors, physical blows, G-forces, ingestion into mechanical components,
      metal fatigue, and insulation damage from abrasion.  Defending against these factors will motivate our subsequent
      discussion of wiring practices.`,
      youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Wires",
    description:
      `We'll review the basics of plain wire: conductive material, resistance, gauge, flexibility strands, insulation, and color.`,
      youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Data Wires",
    description:
      `We'll look at USB and Ethernet wire bundles, including versions, connectors, and shielding.`,
      youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Zip Ties",
    description:
      `Zip ties seem simple, but these humble fasterners are so critical to secure robot wiring that the nuances are worth
      understanding.  We'll look at sizes, getting a secure grip, removal, and safety.`,
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    title: "Ten Basic Principles of Secure Wiring",
    description:
      `Plan placement of electrical components and wire paths during design.  Minimize electrical connections.
      Practice your connection technique.  Minimize widgets on
      conductive paths.  Bundle wires and then secure bundles to structure at close intervals.  Put slack and strain relief
      next to each connection.  Secure wires close to moving parts.  No airborne wires.  Treat corners as wire strippers.
      Beware electromagnetic interference.  Use large, tight connections for power.  RTFDS.  Focus on wires crossing between
      moving parts.  Keep a high bending radius.  No connectors in drag chains.`,
      youtubeId: "dQw4w9WgXcQ"
  },
  {
    title: "Debugging CAN",
    description:
      `CAN problems are common and annoying.  We'll go over some quick tricks to identify and correct issues.
      Keep access points, especially at ends.  Resistance between green and yellow should be 60 ohms.  Check
      continuity at access points.  Resistance to frame should be large.  Check CAN IDs.`,
      youtubeId: "dQw4w9WgXcQ"
  },
];


export default function TrainingPage() {
  return (
    <main className="site-page">
      <h1>Training</h1>
      <h2>Mechanical</h2>
      {mechanicalVideos.map((video) => (
        <VideoCard key={video.youtubeId} {...video} />
      ))}
      <h2>Electrical</h2>
      {electricalVideos.map((video) => (
        <VideoCard key={video.youtubeId} {...video} />
      ))}
      <h2>Motors</h2>
      <h2>Simulation</h2>
      <h2>Code</h2>
      <h2>Control</h2>
      <h2>Fabrication</h2>
    </main>
  );
}
