var PROTOCOLS_30 = {
  // ============================================================================
  // INJURY PROTOCOLS (10)
  // ============================================================================

  "ACL_Reconstruction": {
    tier: "injury",
    category: "knee",
    arc: 24,
    evidence: [],
    phases: [
      {
        name: "Protect (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Quad set hold", "10 sec pain-free"],
          ["Straight leg raise", "15 reps no lag"]
        ],
        exercises: [
          {
            name: "Quad Sets (Supine)",
            load: "bodyweight", tempo: "2s hold", reps: "3×20", range: "0–60°",
            subs: ["Seated knee extension (15° knee bend)", "VMO bias quad sets (pillow under knee)"]
          },
          {
            name: "Straight Leg Raise (4-way)",
            load: "bodyweight", tempo: "3s lift/3s lower", reps: "3×12", range: "full",
            subs: ["Short arc quads (pillow under knee, 45° raise)", "Quad dominant step-up (6in)"]
          },
          {
            name: "Glute Bridge",
            load: "bodyweight", tempo: "3s hold", reps: "3×15", range: "full hip extension",
            subs: ["Single-leg bridge (uninjured leg)", "Quad+glute co-contraction (bridge + quad set)"]
          },
          {
            name: "Calf Raise (Double)",
            load: "bodyweight", tempo: "2s up/2s down", reps: "3×12", range: "full ROM",
            subs: ["Wall-assisted calf raise", "Towel-scrunches (toes)"]
          },
          {
            name: "Patellar Mobility (Soft Tissue)",
            load: "none", tempo: "slow oscillation", reps: "3×30s per quad", range: "medial/lateral/superior",
            subs: ["Quad foam roll", "Massage gun (light pressure)"]
          }
        ]
      },
      {
        name: "Build Strength (Weeks 5–12)",
        wks: 8,
        gates: [
          ["Leg press (0–60° knee)", "1× bodyweight + 25lbs"],
          ["Single-leg stance", "30s stable, no pain"],
          ["Quad strength asymmetry", "<15% deficit vs. uninjured"]
        ],
        exercises: [
          {
            name: "Leg Press (Bilateral, Shallow)",
            load: "start 1× BW, add 5% weekly", tempo: "3s lower/2s drive", reps: "3×8–12", range: "0–60° knee bend",
            subs: ["Hack squat", "Smith machine squat (0–60°)", "Belt-resisted leg press (off-load)"]
          },
          {
            name: "Nordic Curl (Eccentric Quad)",
            load: "assisted (partner/band) → unassisted", tempo: "5s eccentric", reps: "3×5–8", range: "90→0° knee",
            subs: ["Assisted knee extension (cable)", "Prone knee extension (floor)", "Short-lever Nordic (high-knee start)"]
          },
          {
            name: "Step-Up (30cm box)",
            load: "bodyweight → 10lbs/hand", tempo: "3s up/3s down", reps: "3×10 per leg", range: "full",
            subs: ["Lateral step-up", "Reverse step-down", "Split squat (static)"]
          },
          {
            name: "Copenhagen Adductor Squeeze",
            load: "pillow (30cmx30cm)", tempo: "3s squeeze/2s release", reps: "3×12", range: "pain-free ROM",
            subs: ["Adductor machine", "Sidelying adduction (straight leg)", "Banded side-lying adduction"]
          },
          {
            name: "Glute Medius (Side-Lying Abduction)",
            load: "bodyweight → 2lb ankle weight", tempo: "2s lift/2s lower", reps: "3×15", range: "45° abduction",
            subs: ["Clamshells (external rotation)", "Monster walks (band)", "Lateral band walks"]
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 13–24)",
        wks: 12,
        gates: [
          ["Single-leg squat (controlled)", "1× bodyweight, no valgus, 90° depth"],
          ["Triple hop for distance", ">90% of uninjured leg"],
          ["Y-Balance Test", ">90% composite score"],
          ["Isokinetic quad/ham ratio", "0.6–0.9 at 60°/s and 180°/s"]
        ],
        exercises: [
          {
            name: "Pistol Squat (Assisted → Unassisted)",
            load: "suspension trainer → box → bodyweight", tempo: "3s descent/2s drive", reps: "3×5–8", range: "full depth",
            subs: ["Single-leg squat to box", "Assisted single-leg press", "Offset dumbbell squat"]
          },
          {
            name: "Romanian Deadlift (Bilateral → Single)",
            load: "start 65lbs, +10lbs/week", tempo: "3s lower/1s drive", reps: "3×8–10", range: "chest to knee",
            subs: ["Trap bar deadlift", "Sled push (hamstring bias)", "Nordic curl (active eccentric)"]
          },
          {
            name: "Lateral Bound (Sport)",
            load: "bodyweight", tempo: "explosive", reps: "3×8 per direction", range: "lateral plane only",
            subs: ["Lateral hop hold-land", "Broad jump (controlled landing)", "Single-leg hop series (forward/back/lateral)"]
          },
          {
            name: "Lunge (Walking, Multi-Direction)",
            load: "bodyweight → dumbbells 15–25lbs", tempo: "3s down/2s recover", reps: "3×10 per direction", range: "full",
            subs: ["Lateral lunge (adductor focus)", "Reverse lunge (quad eccentric)", "Multi-planar lunge"]
          },
          {
            name: "Sport-Specific Agility (cutting drills)",
            load: "none", tempo: "sport-speed", reps: "3×10 cuts per direction", range: "80→90→100% intensity",
            subs: ["Pro-agility shuttle (L-drill)", "T-drill (figure-8)", "Sport simulation (soccer/hoops)"]
          }
        ]
      }
    ]
  },

  "Ankle_Sprain_Grade2": {
    tier: "injury",
    category: "ankle",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Acute Mobility (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Dorsiflexion ROM", "match uninjured side"],
          ["Swelling reduction", "<1cm circumference diff"]
        ],
        exercises: [
          {
            name: "Ankle Pumps (Plantarflex/Dorsiflex)",
            load: "none", tempo: "1s each direction", reps: "4×20", range: "pain-free ROM only",
            subs: ["Seated toe touches", "Lying plantarflex circles"]
          },
          {
            name: "Towel Scrunches",
            load: "bodyweight", tempo: "1s curl/1s release", reps: "3×15", range: "full foot",
            subs: ["Marble pickup (intrinsic foot)", "Towel slide (plantarflex emphasis)"]
          },
          {
            name: "Calf Raise (Double, Pain-Free)",
            load: "bodyweight", tempo: "2s up/2s down", reps: "3×10", range: "mild ROM only (no full plantarflex yet)",
            subs: ["Wall-supported calf raise", "Seated calf raise"]
          },
          {
            name: "Inversion/Eversion (Resistance Band)",
            load: "light band", tempo: "2s hold", reps: "3×12 each direction", range: "pain-free only",
            subs: ["Seated inversion/eversion", "Standing (wall-supported)"]
          }
        ]
      },
      {
        name: "Strength & Balance (Weeks 3–8)",
        wks: 6,
        gates: [
          ["Single-leg stance", "30s stable, eyes open"],
          ["Heel-to-toe walk", "10 steps, straight line"],
          ["Plantarflex strength", "20 double-leg calf raises unassisted"]
        ],
        exercises: [
          {
            name: "Single-Leg Stance (Progression)",
            load: "none", tempo: "static hold", reps: "3×30–60s", range: "eyes open → closed → floor target",
            subs: ["Tandem stance (heel-toe)", "BOSU dome (unstable)"]
          },
          {
            name: "Peroneal Strengthen (Eversion Focus)",
            load: "medium band", tempo: "2s squeeze/1s release", reps: "3×15", range: "full eversion",
            subs: ["Sled push (lateral edge focus)", "Monster walks (band above knee)", "Side-lying hip abduction + eversion"]
          },
          {
            name: "Calf Raise (Single-Leg)",
            load: "bodyweight", tempo: "3s up/3s down", reps: "3×12", range: "full ROM",
            subs: ["Double-leg calf raise with pause", "Step-up onto 6in box"]
          },
          {
            name: "Proprioceptive Training (Tandem Stance)",
            load: "none", tempo: "static", reps: "3×30s", range: "stable",
            subs: ["Firm foam pad (half-dome)", "BOSU ball (dome side)"]
          },
          {
            name: "Heel-to-Toe Walk (Line Drill)",
            load: "none", tempo: "slow, controlled", reps: "3×10 steps", range: "narrow base of support",
            subs: ["Backwards walk", "Lateral shuffle (eyes closed)"]
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Single-leg hop hold-land", "10 consecutive, stable"],
          ["Y-Balance test", ">90% limb symmetry"],
          ["Figure-8 run", "no limp, cutting comfort"]
        ],
        exercises: [
          {
            name: "Lateral Hop Series",
            load: "none", tempo: "explosive", reps: "3×8 per direction", range: "lateral plane",
            subs: ["Single-leg hop (forward)", "Bounding (bilateral)", "Figure-8 hop (agility)"]
          },
          {
            name: "Cutting Drill (45° Cut Run)",
            load: "none", tempo: "sport-speed", reps: "3×6 cuts", range: "progressive intensity 70→90→100%",
            subs: ["Shuttle run (T-drill)", "Pro-agility (L-drill)", "Sport-specific cutting"]
          },
          {
            name: "Single-Leg Romanian Deadlift",
            load: "light dumbbell 5–10lbs", tempo: "3s lower/2s recover", reps: "3×8 per leg", range: "controlled ROM",
            subs: ["Single-leg balance + reach", "Step-back lunge (single leg)", "Nordic curl (hamstring focus)"]
          },
          {
            name: "Ankle Stability (Circle Walk)",
            load: "none", tempo: "controlled", reps: "3×10 circles per direction", range: "pain-free, ~8ft diameter",
            subs: ["Figure-8 walk (eyes closed)", "Zigzag agility cones", "Balance beam walk"]
          },
          {
            name: "Sport Simulation (Running + Changing Direction)",
            load: "none", tempo: "sport-speed", reps: "3×30s sport-specific", range: "increasing intensity",
            subs: ["Sport drills (e.g., soccer cone drills)", "Plyometric agility series"]
          }
        ]
      }
    ]
  },

  "Rotator_Cuff_Repair": {
    tier: "injury",
    category: "shoulder",
    arc: 26,
    evidence: [],
    phases: [
      {
        name: "Immobilization & Passive ROM (Weeks 1–6)",
        wks: 6,
        gates: [
          ["Passive external rotation", "45° at 90° abduction"],
          ["Passive forward flexion", "120° pain-free"]
        ],
        exercises: [
          {
            name: "Codman's Pendulum (Passive Gravity Assist)",
            load: "gravity only", tempo: "slow circles", reps: "4×30s (forward/back/circles)", range: "pain-free ROM only",
            subs: ["Supine passive ROM (supine on couch, arm hanging)", "Isometric holds at end-range"]
          },
          {
            name: "Passive Forward Flexion (Supine Slide)",
            load: "therapist or uninjured arm assists", tempo: "5s up/5s down", reps: "3×10", range: "0→120° (wk 1–3), 0→140° (wk 4–6)",
            subs: ["Prone passive flexion (over table edge)", "Standing wall-assisted flexion"]
          },
          {
            name: "Passive External Rotation (Sleeper Hold Position)",
            load: "therapist assist", tempo: "sustained hold", reps: "3×30s", range: "0→45° ER (progressing)",
            subs: ["Supine ER with elbow supported", "Towel roll under arm (gentle ER)"]
          },
          {
            name: "Grip Strengthening (Isometric, Wrist/Hand)",
            load: "therapy putty (light)", tempo: "5s squeeze/5s rest", reps: "3×10", range: "hand/wrist only",
            subs: ["Grip dynamometer (pain-free squeeze only)", "Towel wringing (no shoulder movement)"]
          },
          {
            name: "Scapular Positioning (Awareness)",
            load: "none", tempo: "slow movement", reps: "3×10", range: "scapular retraction + depression",
            subs: ["Prone I-Y-T series (light hold, no weight)", "Shrug-and-release (gentle)"]
          }
        ]
      },
      {
        name: "Active-Assisted & Active Strengthening (Weeks 7–14)",
        wks: 8,
        gates: [
          ["Active forward flexion", "110° pain-free"],
          ["Supine ER at 90° abduction", "60° ROM achieved"],
          ["Scapular Y-T-W holds", "10 sec each, no lag"]
        ],
        exercises: [
          {
            name: "Active-Assisted Forward Flexion (Wall Walk)",
            load: "bodyweight assist (fingers on wall)", tempo: "3s up/3s down", reps: "3×10", range: "0→140° (progressing wk 7–14)",
            subs: ["Supine active flexion (gravity eliminated)", "Standing flexion with opposite arm assist"]
          },
          {
            name: "Prone I-Y-T Series (Scapular Activation)",
            load: "bodyweight (arms only)", tempo: "2s hold per position", reps: "3×8 per position (I/Y/T)", range: "prone flat",
            subs: ["Quadruped I-Y-T", "Standing band-resisted I-Y-T", "Supine I-Y-T"]
          },
          {
            name: "Side-Lying External Rotation (Shoulder ER)",
            load: "light dumbbell 2–3lbs (wk 7–10), 3–5lbs (wk 11–14)", tempo: "2s rotate/2s return", reps: "3×12", range: "0→70° ER",
            subs: ["Standing ER with band", "Supine ER with arm at 90° abduction", "Standing cable ER (low pulley)"]
          },
          {
            name: "Prone Horizontal Abduction (Posterior Deltoid)",
            load: "bodyweight (arms only) → 1–2lb weights wk 11+", tempo: "3s lift/3s lower", reps: "3×10", range: "30–45° abduction",
            subs: ["Quadruped diagonal (contralateral arm+leg)", "Reverse pec deck (light weight)", "Incline bench prone raise"]
          },
          {
            name: "Serratus Punch (Scapular Protraction)",
            load: "light dumbbell 3–5lbs", tempo: "2s forward/2s back", reps: "3×12", range: "supine, shoulder flexed 90°",
            subs: ["Push-up plus (modified, knees)", "Standing serratus punch with cable", "Prone hand-punch"]
          }
        ]
      },
      {
        name: "Strengthening & Return to Function (Weeks 15–26)",
        wks: 12,
        gates: [
          ["External rotation strength", "4/5 manual muscle test"],
          ["Prone Y-T-W hold", "30s each, no lag"],
          ["Push-up position hold", "20s stable, scapular control"],
          ["Overhead reach (sport-specific)", "full ROM pain-free"]
        ],
        exercises: [
          {
            name: "Prone Push-Up Series (Progression)",
            load: "bodyweight (incline → flat → decline)", tempo: "3s down/2s up", reps: "3×8–12", range: "0→full ROM (adapted)",
            subs: ["Push-up plus (elbows bent, scapular protraction)", "Dumbbell bench press (flat/incline)", "Landmine press (single-arm)"]
          },
          {
            name: "Standing Overhead Press (Light Dumbbell)",
            load: "start 5–8lbs, progress +2–3lbs/week", tempo: "2s up/3s lower", reps: "3×10–12", range: "shoulder to overhead",
            subs: ["Barbell press (light bar)", "Single-arm dumbbell press", "Machine shoulder press"]
          },
          {
            name: "Prone Horizontal Abduction (Progressive Load)",
            load: "2–5lbs dumbbells (wk 15–20), 5–8lbs (wk 21–26)", tempo: "2s lift/3s lower", reps: "3×12", range: "30→60° abduction",
            subs: ["Reverse pec deck", "Cable machine rear delt fly", "Incline bench prone raise"]
          },
          {
            name: "Lat Pulldown (Shoulder Adduction/Extension)",
            load: "start 20–30lbs, progress +5lbs/week", tempo: "2s down/2s return", reps: "3×12", range: "full ER→IR transition",
            subs: ["Assisted pull-up (negatives)", "Rope attachment face-pull", "Single-arm cable row"]
          },
          {
            name: "Sport-Specific Throwing (Interval Throwing Program)",
            load: "progressively increasing distance", tempo: "sport-speed", reps: "interval schedule (day 1: 25ft×25 throws, day 2: 45ft×25 throws, etc.)", range: "90° ER at end-range",
            subs: ["Plyometric ball slam (overhead)", "Medicine ball throw-and-catch (partner)", "Resistance band return-to-throw"]
          }
        ]
      }
    ]
  },

  "Total_Knee_Replacement": {
    tier: "injury",
    category: "knee",
    arc: 24,
    evidence: [],
    phases: [
      {
        name: "Immediate Post-Op (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Knee flexion ROM", "0–90° passive"],
          ["Quad set strength", "full contraction, 10 sec hold"],
          ["Ambulation", "50 ft with walker, WBAT"]
        ],
        exercises: [
          {
            name: "Quad Sets (Supine, Towel Under Knee)",
            load: "none", tempo: "5s squeeze/5s release", reps: "4×15–20", range: "0–15° knee bend",
            subs: ["Seated quad set (90° knee start)", "VMO bias quad set (pillow under knee, 15° bend)"]
          },
          {
            name: "Straight Leg Raise (4-Way: Flexion/Extension/Abduction/Adduction)",
            load: "bodyweight", tempo: "3s lift/3s lower", reps: "3×10 per direction", range: "pain-free ROM only",
            subs: ["Short arc quads (active ROM only, 0–40°)", "Prone knee flexion (prone lying, bend knee)"]
          },
          {
            name: "Heel Slides (Passive Knee Flexion)",
            load: "none", tempo: "slow slide", reps: "4×15", range: "0→90° flexion (progressing)",
            subs: ["Supine knee flexion with therapist assist", "Seated knee flexion (gravity-assisted)"]
          },
          {
            name: "Glute Sets & Bridges",
            load: "bodyweight", tempo: "5s squeeze/3s release", reps: "3×12", range: "mild hip extension only",
            subs: ["Supine hip abduction (pillow squeeze)", "Supine hip flexion (knee bend 45°)"]
          },
          {
            name: "Ankle Pumps & Calf Raises (Double Leg)",
            load: "none", tempo: "1s plantarflex/1s dorsiflex", reps: "4×20", range: "pain-free ROM",
            subs: ["Seated calf raises", "Lying plantarflex/dorsiflex"]
          }
        ]
      },
      {
        name: "Early Strengthening (Weeks 5–12)",
        wks: 8,
        gates: [
          ["Knee flexion ROM", "0–110° active"],
          ["Quad strength", "single-leg SLR, 20 reps pain-free"],
          ["Step-up (6in)", "unilateral, 10 reps per leg"],
          ["Ambulation", "household distances without crutches/walker"]
        ],
        exercises: [
          {
            name: "Step-Up (6in box)",
            load: "bodyweight", tempo: "3s up/3s down", reps: "3×10 per leg", range: "full ROM",
            subs: ["Step-down (eccentric focus)", "Lateral step-up (adductor emphasis)", "Stair climbing (1–2 flights)"]
          },
          {
            name: "Mini-Squats (Partial Depth)",
            load: "bodyweight", tempo: "3s down/2s up", reps: "3×12", range: "0→45° knee bend",
            subs: ["Sit-to-stand from standard chair (18in)", "Wall squat (back supported)"]
          },
          {
            name: "Leg Press (0–60° knee)",
            load: "bodyweight (1×BW easy), progress +5–10lbs/week", tempo: "3s lower/2s drive", reps: "3×12", range: "0→60° only",
            subs: ["Hack squat (0–60°)", "Smith machine squat (0–60°)", "Sled machine (unilateral start)"]
          },
          {
            name: "Standing Hip Abduction (Standing Kick)",
            load: "bodyweight → 2lb ankle weight wk 8+", tempo: "2s out/2s in", reps: "3×15", range: "45° abduction",
            subs: ["Side-lying abduction", "Monster walk (band)", "Cable hip abduction"]
          },
          {
            name: "Standing Hip Flexion (Standing Knee Lift)",
            load: "bodyweight", tempo: "2s lift/2s lower", reps: "3×12", range: "90° hip flexion",
            subs: ["Seated knee extension (quad focus)", "Marching in place (high knees)"]
          }
        ]
      },
      {
        name: "Advanced Strengthening & Return (Weeks 13–24)",
        wks: 12,
        gates: [
          ["Knee flexion ROM", "0–120° active (functional)"],
          ["Single-leg squat", "assisted, 1× BW, 90° depth"],
          ["Timed Up & Go", "<12 sec, balanced"],
          ["6-Minute Walk Test", ">80% expected for age"]
        ],
        exercises: [
          {
            name: "Bulgarian Split Squat (Elevated Rear Foot)",
            load: "bodyweight → dumbbells 10–20lbs", tempo: "3s down/2s up", reps: "3×8–10 per leg", range: "full depth on front leg",
            subs: ["Single-leg squat to box", "Forward lunge (stationary)", "Offset dumbbell squat"]
          },
          {
            name: "Romanian Deadlift (Bilateral → Single)",
            load: "start 45lbs, +10lbs/week", tempo: "3s lower/2s drive", reps: "3×10", range: "chest to below knee",
            subs: ["Trap bar deadlift", "Sled leg press (high reps, full ROM)", "Nordic hamstring curl (eccentric)"]
          },
          {
            name: "Lateral Step-Up (30cm box)",
            load: "bodyweight → 10–15lbs dumbbells", tempo: "3s up/3s down", reps: "3×10 per leg", range: "full",
            subs: ["Forward step-up (quad emphasis)", "Reverse step-down", "Split squat"]
          },
          {
            name: "Single-Leg Stance & Balance (Progressive)",
            load: "none", tempo: "static hold", reps: "3×60s", range: "eyes open → closed → floor target",
            subs: ["Tandem stance (narrow base)", "BOSU ball (dome side)", "Foam pad (unstable)"]
          },
          {
            name: "Walking & Agility (Sport Simulation)",
            load: "none", tempo: "increasing pace", reps: "3×walk 400m + agility drills", range: "brisk walk → jog → sport-specific",
            subs: ["Treadmill walking/jogging (0% grade)", "Figure-8 walking/running", "Sport drills (soccer/basketball)"]
          }
        ]
      }
    ]
  },

  "Hamstring_Strain": {
    tier: "injury",
    category: "hip_posterior",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Acute Mobility (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Straight leg raise", "60° pain-free"],
          ["Knee extension (prone)", "full ROM, 5/5 strength"]
        ],
        exercises: [
          {
            name: "Straight Leg Raise (Supine)",
            load: "bodyweight", tempo: "3s lift/3s lower", reps: "3×12", range: "pain-free ROM only (0→45°→60°)",
            subs: ["Prone knee extension (gravity-assisted)", "Seated hamstring stretch (light hold)"]
          },
          {
            name: "Glute Bridge (Isometric Hold)",
            load: "bodyweight", tempo: "5s hold", reps: "3×10", range: "mild hip extension, no pain",
            subs: ["Supine hip extension (hands-supported)", "Quad set + glute co-contraction"]
          },
          {
            name: "Prone Knee Flexion (Active Hamstring Contraction)",
            load: "none", tempo: "2s bend/2s extend", reps: "3×12", range: "0→60° knee bend",
            subs: ["Supine hamstring curl (gravity-assisted)", "Seated knee flexion (gravity-eliminated)"]
          },
          {
            name: "Calf Raise (Double Leg, Pain-Free)",
            load: "none", tempo: "2s up/2s down", reps: "3×10", range: "full ROM",
            subs: ["Wall-assisted calf raise", "Seated plantarflex"]
          }
        ]
      },
      {
        name: "Eccentric Strengthening (Weeks 3–8)",
        wks: 6,
        gates: [
          ["Nordic curl (eccentric only)", "5 reps unassisted"],
          ["Hip extension strength", "4/5 manual muscle test"],
          ["Prone knee flexion", "full ROM, 15 reps unassisted"]
        ],
        exercises: [
          {
            name: "Nordic Hamstring Curl (Eccentric Emphasis)",
            load: "partner-assisted concentric, eccentric unassisted", tempo: "5s eccentric lower", reps: "3×5–8", range: "90→0° knee bend",
            subs: ["Assisted Nordic curl (light band support)", "Prone knee flexion with resistance band", "Machine hamstring curl (slow eccentric)"]
          },
          {
            name: "Romanian Deadlift (Bilateral)",
            load: "start 45lbs, +5lbs/week", tempo: "3s lower/2s drive", reps: "3×8–10", range: "chest to knee",
            subs: ["Trap bar deadlift", "Dumbbell RDL", "Sled push (hamstring-focused, light)"]
          },
          {
            name: "Single-Leg RDL (Progression)",
            load: "bodyweight (light dumbbell 5–10lbs start)", tempo: "3s lower/2s recover", reps: "3×8 per leg", range: "hip to knee, pain-free",
            subs: ["Assisted single-leg RDL (use TRX)", "Step-back lunge (contralateral emphasis)", "Single-leg balance + reach"]
          },
          {
            name: "Hip Extension (Machine or Cable)",
            load: "start 20–30lbs, +5lbs/week", tempo: "2s drive/2s control", reps: "3×12", range: "full ROM, 45° extension",
            subs: ["Prone hip extension (no machine)", "Sled push (high reps, low load)", "Quadruped hip extension"]
          },
          {
            name: "Prone Hamstring Curl (Machine or Lie Flat)",
            load: "start bodyweight, +5–10lbs/week", tempo: "2s curl/2s extend", reps: "3×10–12", range: "0→90° knee bend",
            subs: ["Stability ball hamstring curl (supine)", "Rope machine curl", "Seated hamstring curl"]
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Nordic curl (eccentric)", "8 reps unassisted"],
          ["Single-leg RDL", "8 reps per leg, balanced"],
          ["Sprinting mechanics", "10×30m sprints, controlled deceleration"],
          ["Figure-8 run", "no limp, sport speed"]
        ],
        exercises: [
          {
            name: "Bounding (Single-Leg, Progressive)",
            load: "none", tempo: "explosive", reps: "3×10 per leg", range: "alternating legs, forward propulsion",
            subs: ["Broad jump (control on landing)", "Single-leg hop series (forward/back/lateral)", "Plyometric agility ladder"]
          },
          {
            name: "Sprinting Drills (Acceleration → Deceleration)",
            load: "none", tempo: "sport-speed", reps: "3×6 sprints per drill", range: "progressive intensity 70→90→100%",
            subs: ["Hill sprints (deceleration emphasis)", "Resisted sprints (light band)", "Shuttle runs (change of direction)"]
          },
          {
            name: "Lateral Bound Series",
            load: "none", tempo: "explosive", reps: "3×8 per direction", range: "lateral plane",
            subs: ["Lateral hop-hold (proprioception)", "Broad-jump lateral (control landing)", "Lateral shuffle with high knees"]
          },
          {
            name: "Agility Ladder Drills (Multi-Directional)",
            load: "none", tempo: "sport-speed", reps: "3×ladder drill set", range: "80→90→100% intensity",
            subs: ["T-drill (change of direction)", "Pro-agility shuffle (L-drill)", "Figure-8 agility"]
          },
          {
            name: "Sport-Specific Cutting & Deceleration",
            load: "none", tempo: "sport-speed", reps: "3×10 cuts per direction", range: "progressive intensity up to match-speed",
            subs: ["Sport simulation (soccer/rugby)", "Cutting with resistance band (deceleration load)", "Jump-cut-land (reactive proprioception)"]
          }
        ]
      }
    ]
  },

  "Achilles_Tendon_Repair": {
    tier: "injury",
    category: "ankle_posterior",
    arc: 24,
    evidence: [],
    phases: [
      {
        name: "Early Mobilization (Weeks 1–6)",
        wks: 6,
        gates: [
          ["Plantarflex strength", "full active ROM, 5/5 manual test"],
          ["Protected dorsiflexion ROM", "within the repair-specific limit confirmed by the operating team; do not use contralateral symmetry to override early protection"]
        ],
        exercises: [
          {
            name: "Ankle Pumps (Plantarflex/Dorsiflex, Pain-Free)",
            load: "none", tempo: "1s each direction", reps: "4×20", range: "mild ROM only (plantarflex 30→45° only early)",
            subs: ["Seated toe points", "Lying plantarflex circles"]
          },
          {
            name: "Towel Scrunches & Intrinsic Foot",
            load: "bodyweight", tempo: "1s curl/1s release", reps: "3×15", range: "foot arch",
            subs: ["Marble pickup (toe flexion)", "Short foot exercise (arch activation)"]
          },
          {
            name: "Calf Raise (Double-Leg, Partial ROM)",
            load: "bodyweight, hands on wall", tempo: "2s up/3s down", reps: "3×15", range: "0→15° plantarflex only (wk 1–4); progressing",
            subs: ["Seated calf raise", "Standing with chair support"]
          },
          {
            name: "Dorsiflexion Strengthening (Resistance Band)",
            load: "light band", tempo: "2s pull/2s release", reps: "3×12", range: "pain-free only",
            subs: ["Seated dorsiflexion", "Standing (wall-supported)"]
          },
          {
            name: "Inversion/Eversion (Proprioception)",
            load: "light band", tempo: "2s hold", reps: "3×10 each direction", range: "pain-free ROM",
            subs: ["Seated inversion/eversion", "Standing balance work"]
          }
        ]
      },
      {
        name: "Plantarflex Strengthening (Weeks 7–16)",
        wks: 10,
        gates: [
          ["Calf raise double-leg", "20 reps, full ROM, bodyweight"],
          ["Single-leg stance", "30s stable, eyes open"],
          ["Plantarflex strength asymmetry", "<10% deficit"],
          ["Running (treadmill)", "10 min at 6mph, pain-free"]
        ],
        exercises: [
          {
            name: "Calf Raise (Single-Leg Progression)",
            load: "bodyweight (double-leg first), progress to single-leg by wk 10", tempo: "3s up/3s down", reps: "3×10–15", range: "full plantarflex ROM",
            subs: ["Sled leg press (plantarflex position)", "Step-up (eccentric calf emphasis)", "Seated calf machine"]
          },
          {
            name: "Eccentric Sled Machine (Plantarflex Load)",
            load: "start 50lbs, +10lbs/week", tempo: "5s eccentric lower", reps: "3×8–10", range: "full plantarflex",
            subs: ["Machine calf press", "Smith machine calf raise", "Dumbbell single-leg calf raise"]
          },
          {
            name: "Double-Leg Hop (Hold-Land, Proprioception)",
            load: "none", tempo: "controlled hop", reps: "3×10 consecutive", range: "small amplitude hops",
            subs: ["Bilateral balance work (BOSU)", "Tandem stance progression"]
          },
          {
            name: "Walking Progressions (Heel-Toe Gait)",
            load: "none", tempo: "slow→moderate pace", reps: "3×walk 5–10 min", range: "increasing distance weekly",
            subs: ["Treadmill walking (0% grade)", "Outdoor walking (flat)"]
          },
          {
            name: "Heel-Toe Raises (Alternating Plantarflex/Dorsiflex)",
            load: "bodyweight", tempo: "2s plantarflex/2s dorsiflex", reps: "3×12 per foot", range: "full ROM",
            subs: ["Standing heel walk (on heels)", "Standing toe walk (on toes)"]
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 17–24)",
        wks: 8,
        gates: [
          ["Single-leg calf raise", "15 reps unassisted, full ROM"],
          ["Timed single-leg hop", "10 consecutive, stable landing"],
          ["Running (outdoor)", "20 min at sport pace, pain-free"],
          ["Agility/cutting", "figure-8 run, no limp"]
        ],
        exercises: [
          {
            name: "Single-Leg Hop Series (Progressive)",
            load: "none", tempo: "explosive", reps: "3×8 per leg per direction", range: "forward/back/lateral",
            subs: ["Bounding (bilateral)", "Lateral bounds (single-leg)", "Single-leg hop hold-land"]
          },
          {
            name: "Plyometric Progression (Box Hops)",
            load: "bodyweight", tempo: "explosive", reps: "3×8 per height", range: "6in → 12in → 18in box",
            subs: ["Double-leg box jump", "Single-leg lateral box hop", "Broad jump (progressive distance)"]
          },
          {
            name: "Running Progressions (Treadmill → Outdoor → Sport)",
            load: "none", tempo: "sport-speed", reps: "3×intervals or continuous", range: "week 17: 20min steady; week 18: add 3×2min faster; week 20: sport simulation",
            subs: ["Hill running (eccentric load)", "Track sprints (acceleration)", "Sport drills (agility)"]
          },
          {
            name: "Cutting & Deceleration Drill",
            load: "none", tempo: "sport-speed", reps: "3×8 cuts per direction", range: "45° → 90° cuts, progressive intensity",
            subs: ["T-drill", "Pro-agility shuttle", "Figure-8 agility run"]
          },
          {
            name: "Sport-Specific Movement (Return to Play)",
            load: "none", tempo: "sport-speed", reps: "sport-specific interval or match", range: "full match duration by wk 24",
            subs: ["Soccer/rugby drills", "Basketball conditioning", "Tennis court work"]
          }
        ]
      }
    ]
  },

  "Meniscus_Repair": {
    tier: "injury",
    category: "knee",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Protected ROM (Weeks 1–6)",
        wks: 6,
        gates: [
          ["Knee flexion ROM", "0–90° active"],
          ["Quad set strength", "full contraction, 10 sec hold"],
          ["Weight-bearing status", "WBAT with crutches"]
        ],
        exercises: [
          {
            name: "Quad Sets (Supine, Towel Under Knee)",
            load: "none", tempo: "5s squeeze/5s release", reps: "4×15–20", range: "0–15° knee bend",
            subs: ["VMO quad set", "Seated quad set"]
          },
          {
            name: "Straight Leg Raise (Supine)",
            load: "bodyweight", tempo: "3s lift/3s lower", reps: "3×10", range: "0–45° (progressing to 90°)",
            subs: ["Short arc quads", "Prone knee extension"]
          },
          {
            name: "Heel Slides (Passive Knee Flexion)",
            load: "none", tempo: "slow slide", reps: "4×15", range: "0→90° flexion (gradual progression)",
            subs: ["Supine knee flexion therapist-assist", "Seated knee flexion"]
          },
          {
            name: "Glute Bridge (Isometric)",
            load: "bodyweight", tempo: "5s hold", reps: "3×12", range: "mild hip extension only",
            subs: ["Supine hip extension (hands-supported)"]
          },
          {
            name: "Supine Hip Abduction & Adduction",
            load: "pillow (for squeeze) or none", tempo: "2s squeeze/2s release", reps: "3×12 each direction", range: "pain-free ROM",
            subs: ["Side-lying abduction/adduction", "Standing (wall-supported) abduction"]
          }
        ]
      },
      {
        name: "Early Strengthening (Weeks 7–12)",
        wks: 6,
        gates: [
          ["Knee flexion ROM", "0–110° active"],
          ["Single-leg SLR", "15 reps pain-free"],
          ["Mini-squat (0–45°)", "12 reps unassisted"],
          ["Ambulation", "household distances without assistive device"]
        ],
        exercises: [
          {
            name: "Mini-Squat (Bilateral, Shallow)",
            load: "bodyweight", tempo: "3s down/2s up", reps: "3×12", range: "0→45° knee bend",
            subs: ["Sit-to-stand (18in chair)", "Wall squat (back supported)"]
          },
          {
            name: "Step-Up (6in box, Pain-Free Load)",
            load: "bodyweight", tempo: "3s up/3s down", reps: "3×10 per leg", range: "full ROM",
            subs: ["Step-down (eccentric)", "Lateral step-up", "Stair climbing (1–2 flights)"]
          },
          {
            name: "Leg Press (0–60° knee only)",
            load: "bodyweight (easy), progress +5–10lbs/week", tempo: "3s lower/2s drive", reps: "3×12", range: "0→60° only",
            subs: ["Hack squat (0–60°)", "Sled machine"]
          },
          {
            name: "Standing Hip Abduction",
            load: "bodyweight", tempo: "2s out/2s in", reps: "3×15", range: "45° abduction",
            subs: ["Side-lying abduction", "Monster walk"]
          },
          {
            name: "Standing Marching (High Knee Lift)",
            load: "none", tempo: "controlled lift", reps: "3×12 per leg", range: "90° hip flexion",
            subs: ["Seated knee extension", "Lying prone knee flexion"]
          }
        ]
      },
      {
        name: "Advanced Return (Weeks 13–16)",
        wks: 4,
        gates: [
          ["Knee flexion ROM", "0–120° active"],
          ["Single-leg squat (assisted)", "within repair-specific limits; no unrestricted deep loaded flexion before four months and surgical clearance"],
          ["Timed Up & Go", "<12 sec"],
          ["Figure-8 run", "only after repair-specific clearance for running and rotation; not an automatic week 13–16 target"]
        ],
        exercises: [
          {
            name: "Bulgarian Split Squat",
            load: "bodyweight → dumbbells 10–15lbs", tempo: "3s down/2s up", reps: "3×8–10 per leg", range: "repair-specific permitted depth; avoid unrestricted deep loaded flexion before four months and surgical clearance",
            subs: ["Single-leg squat to box", "Forward lunge"]
          },
          {
            name: "Romanian Deadlift",
            load: "start 45lbs, +10lbs/week", tempo: "3s lower/2s drive", reps: "3×10", range: "full ROM",
            subs: ["Trap bar deadlift", "Sled leg press"]
          },
          {
            name: "Lateral Step-Up (30cm box)",
            load: "bodyweight → 10lbs dumbbells", tempo: "3s up/3s down", reps: "3×10 per leg", range: "full",
            subs: ["Forward step-up", "Reverse step-down"]
          },
          {
            name: "Single-Leg Balance & Movement",
            load: "none", tempo: "static/dynamic", reps: "3×30s stance + agility", range: "eyes open → closed → floor target",
            subs: ["Tandem stance", "BOSU ball"]
          },
          {
            name: "Agility & Sport Simulation",
            load: "none", tempo: "sport-speed", reps: "3×sport-specific drills", range: "brisk walk → jog → sport",
            subs: ["Figure-8 running", "Shuttle runs", "Sport drills (soccer/basketball)"]
          }
        ]
      }
    ]
  },

  "Low_Back_Pain": {
    tier: "injury",
    category: "lumbar_spine",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Acute Pain Management & Activation (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Pain reduction", "VAS <4/10 with activities"],
          ["Prone hold (Plank start)", "10s stable, no form break"],
          ["Standing tolerance", "5 min without posture change"]
        ],
        exercises: [
          {
            name: "Prone Press-Up (McKenzie Extension)",
            load: "bodyweight (hands support)", tempo: "3s up/3s down", reps: "3×10", range: "progressive spinal extension (early weeks: mild only)",
            subs: ["Lying prone hold (no push)", "Standing extension (hands behind back)"]
          },
          {
            name: "Quadruped Arm-Leg Raise (Bird Dog)",
            load: "bodyweight", tempo: "3s hold/3s return", reps: "3×10 per side", range: "contralateral arm-leg extension",
            subs: ["Quadruped hold (no movement)", "Single-arm raise (contralateral leg static)", "Prone superman hold"]
          },
          {
            name: "Supine Knee-to-Chest (Flexion Mobility)",
            load: "bodyweight (hands or therapist)", tempo: "sustained 30s per side", reps: "3× each leg", range: "pain-free flexion ROM",
            subs: ["Double knee-to-chest", "Supine figure-4 (piriformis)", "Cat-camel (quadruped flexion-extension)"]
          },
          {
            name: "Dead Bug (Supine Core Activation)",
            load: "bodyweight", tempo: "3s lower/3s return", reps: "3×8 per side", range: "contralateral limb movement",
            subs: ["Supine arm raise (legs static)", "Supine leg lift (arms static)", "Marching supine (low amplitude)"]
          },
          {
            name: "Walking (Gentle, Posture Focus)",
            load: "none", tempo: "slow→moderate pace", reps: "3×walk 5–10 min", range: "increasing duration weekly",
            subs: ["Stationary bike (light resistance)", "Swimming (pain-free strokes)"]
          }
        ]
      },
      {
        name: "Progressive Strengthening (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Plank hold", "30s with neutral spine"],
          ["Single-leg stance", "30s stable, balance"],
          ["Pain reduction", "VAS <2/10 with activities"],
          ["Hip mobility", "90° hip flexion both sides"]
        ],
        exercises: [
          {
            name: "Plank Hold (Progression: Mid-Range → Full)",
            load: "bodyweight", tempo: "static hold", reps: "3×20–40s", range: "neutral spine (wk 5–6: knees; wk 7–8: toes)",
            subs: ["Wall plank (incline)", "Stability ball plank", "Plank with arm/leg lift"]
          },
          {
            name: "Side Plank (Oblique/Lateral Core)",
            load: "bodyweight", tempo: "static hold", reps: "3×20–30s per side", range: "neutral spine",
            subs: ["Incline side plank (knees)", "Side plank with hip dip"]
          },
          {
            name: "Single-Leg Romanian Deadlift (Hip Stability)",
            load: "light dumbbell 5–8lbs", tempo: "3s lower/2s recover", reps: "3×8 per leg", range: "controlled ROM",
            subs: ["Single-leg balance + reach", "Step-back lunge (single leg)", "Supported RDL progression"]
          },
          {
            name: "Glute Bridge (Single-Leg, Progressive)",
            load: "bodyweight (bilateral first) → single-leg", tempo: "3s lift/3s lower", reps: "3×12", range: "full hip extension",
            subs: ["Bilateral bridge + hold", "Quadruped hip extension"]
          },
          {
            name: "Quadruped Rocking (Lumbar Stability)",
            load: "bodyweight", tempo: "slow rock", reps: "3×10 rocks forward/back", range: "spinal neutral with movement",
            subs: ["Quadruped hold (no movement)", "Cat-camel (flexion-extension)", "Quadruped arm-leg combinations"]
          }
        ]
      },
      {
        name: "Functional Movement & Sport (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Plank hold", "60s + movement (arm lift)"],
          ["Single-leg squat (assisted)", "8 reps per leg, balanced"],
          ["Return to sport", "running or sport-specific drills at 80%+ intensity"]
        ],
        exercises: [
          {
            name: "Rotational Movement (Pallof Press)",
            load: "light cable/band 5–10lbs", tempo: "2s press/2s control", reps: "3×10 per side", range: "anti-rotation focus",
            subs: ["Woodchops (diagonal)", "Banded Pallof (kneeling)", "Standing cable rotation"]
          },
          {
            name: "Deadlift (Bilateral, Progressive Load)",
            load: "start 65lbs, +10lbs/week", tempo: "3s lower/2s drive", reps: "3×8–10", range: "hip hinge, neutral spine",
            subs: ["Trap bar deadlift", "Sled push (leg-heavy)", "Romanian deadlift"]
          },
          {
            name: "Bulgarian Split Squat (Hip Stability)",
            load: "bodyweight → dumbbells 10–20lbs", tempo: "3s down/2s up", reps: "3×8 per leg", range: "full lunge depth",
            subs: ["Forward lunge", "Offset dumbbell squat", "Single-leg squat to box"]
          },
          {
            name: "Sled Push (Posterior Chain Load)",
            load: "start 45lbs, +10lbs/week", tempo: "explosive push", reps: "3×8–10", range: "full leg extension",
            subs: ["Leg press (quad-heavy)", "Hack squat", "Smith machine squat"]
          },
          {
            name: "Sport-Specific Return (Running + Agility)",
            load: "none", tempo: "sport-speed", reps: "3×sport drills or intervals", range: "progressive intensity 80→90→100%",
            subs: ["Interval running", "Agility ladder", "Sport simulation (soccer/basketball)"]
          }
        ]
      }
    ]
  },

  "Patellofemoral_Pain_Syndrome": {
    tier: "injury",
    category: "knee_anterior",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Pain Management & Hip Activation (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Pain with stairs", "VAS <3/10 descent"],
          ["Single-leg stance", "20s stable, glute control"],
          ["Glute med strength", "3/5 manual muscle test"]
        ],
        exercises: [
          {
            name: "Clam Shell (Glute Med Activation)",
            load: "bodyweight", tempo: "2s lift/2s lower", reps: "3×15", range: "45° hip abduction, external rotation",
            subs: ["Side-lying abduction (straight leg)", "Lateral band walks", "Monster walks (band)"]
          },
          {
            name: "Side-Lying Hip Abduction",
            load: "bodyweight → 2lb ankle weight", tempo: "2s lift/2s lower", reps: "3×15", range: "45° abduction",
            subs: ["Banded side-lying abduction", "Standing hip abduction (wall-support)"]
          },
          {
            name: "Monster Walk (Band, Multi-Direction)",
            load: "light band (around knees)", tempo: "controlled step", reps: "3×10 steps per direction", range: "forward/lateral/reverse",
            subs: ["Lateral band walk", "Forwards/backwards band walk"]
          },
          {
            name: "VMO Quad Set (Pillow Under Knee)",
            load: "pillow (optional)", tempo: "5s squeeze/5s release", reps: "3×15", range: "15° knee bend, quad squeeze",
            subs: ["Seated quad set", "Straight leg raise (VMO bias)"]
          },
          {
            name: "Step-Down (Eccentric Quad/Glute Control)",
            load: "bodyweight", tempo: "3s down/1s up", reps: "3×10 per leg", range: "6–12in step height",
            subs: ["Lateral step-down", "Forward step-down (eccentric)", "Reverse step-down"]
          }
        ]
      },
      {
        name: "Quad & Hip Strengthening (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Glute med strength", "4/5 manual test"],
          ["Single-leg squat (assisted)", "8 reps per leg"],
          ["Step-down control", "10 reps per leg, no valgus"],
          ["Pain with squats", "VAS <2/10 at 60° depth"]
        ],
        exercises: [
          {
            name: "Step-Up (6in box, Glute Med Focus)",
            load: "bodyweight", tempo: "3s up/3s down", reps: "3×10 per leg", range: "full ROM, upright torso",
            subs: ["Forward step-up", "Lateral step-up", "Reverse step-down (eccentric)"]
          },
          {
            name: "Mini-Squat (Bilateral, Pain-Free Depth)",
            load: "bodyweight", tempo: "3s down/2s up", reps: "3×12", range: "0→60° (not full depth yet)",
            subs: ["Sit-to-stand", "Wall squat (back supported)"]
          },
          {
            name: "Single-Leg Squat (Assisted, Progressive)",
            load: "TRX or suspension trainer assist", tempo: "3s down/2s up", reps: "3×8 per leg", range: "pain-free depth progression",
            subs: ["Single-leg squat to box", "Assisted single-leg leg press"]
          },
          {
            name: "Nordic Quad (Eccentric Emphasis)",
            load: "assisted (partner/band) eccentric", tempo: "5s eccentric lower", reps: "3×5–6", range: "90→0° knee bend",
            subs: ["Assisted knee extension (cable)", "Prone knee extension", "Short-lever Nordic"]
          },
          {
            name: "Copenhagen Adductor (Medial Stability)",
            load: "pillow squeeze", tempo: "3s squeeze/2s release", reps: "3×12", range: "pain-free compression",
            subs: ["Adductor machine", "Sidelying adduction"]
          }
        ]
      },
      {
        name: "Return to Activity (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Single-leg squat", "full depth (assisted allowed), no valgus"],
          ["Pain with running", "VAS <1/10 at moderate pace"],
          ["Agility drills", "figure-8 run, sport speed, controlled landing"]
        ],
        exercises: [
          {
            name: "Pistol Squat (Assisted → Unassisted, Progression)",
            load: "TRX → box → bodyweight", tempo: "3s descent/2s drive", reps: "3×6–8", range: "full depth",
            subs: ["Single-leg squat to box", "Assisted single-leg leg press"]
          },
          {
            name: "Bulgarian Split Squat",
            load: "bodyweight → dumbbells 10–20lbs", tempo: "3s down/2s up", reps: "3×10 per leg", range: "full lunge depth",
            subs: ["Forward lunge", "Offset dumbbell squat"]
          },
          {
            name: "Jump & Land (Plyometric Control)",
            load: "none", tempo: "controlled landing", reps: "3×8 per direction", range: "forward/lateral/diagonal",
            subs: ["Box jump (low height, control landing)", "Bounding (bilateral)", "Single-leg hop series"]
          },
          {
            name: "Running + Gait Retraining (Cadence Focus)",
            load: "none", tempo: "sport-speed", reps: "3×10min run + agility drills", range: "progressing intensity 70→90→100%",
            subs: ["Treadmill (cadence increase)", "Interval running (shorter reps)", "Sport-specific cutting"]
          },
          {
            name: "Agility Drill (T-Drill or Figure-8)",
            load: "none", tempo: "sport-speed", reps: "3×3 drills", range: "controlled cutting, progressive intensity",
            subs: ["Pro-agility shuffle", "Figure-8 run", "Sport simulation"]
          }
        ]
      }
    ]
  },

  "Shoulder_Instability": {
    tier: "injury",
    category: "shoulder",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Stability & Scapular Control (Weeks 1–6)",
        wks: 6,
        gates: [
          ["External rotation strength", "3/5 manual test at 90° abduction"],
          ["Scapular Y-T-W hold", "10s each, no lag"],
          ["Pain-free ROM", "full passive ROM without apprehension"]
        ],
        exercises: [
          {
            name: "Side-Lying External Rotation (Shoulder ER at 90° Abd)",
            load: "light dumbbell 2–3lbs", tempo: "2s rotate/2s return", reps: "3×12", range: "0→70° ER",
            subs: ["Standing ER with band", "Supine ER (arm at 90° abduction)", "Cable ER (low pulley)"]
          },
          {
            name: "Prone Horizontal Abduction (Posterior Deltoid)",
            load: "bodyweight (arms only)", tempo: "3s lift/3s lower", reps: "3×10", range: "30–45° abduction",
            subs: ["Incline bench prone raise", "Reverse pec deck", "Band pull-apart"]
          },
          {
            name: "Prone I-Y-T Series (Scapular Activation)",
            load: "bodyweight (arms only)", tempo: "2s hold per position", reps: "3×8 per position", range: "prone flat",
            subs: ["Quadruped I-Y-T", "Standing band-resisted I-Y-T"]
          },
          {
            name: "Half-Kneeling Chop (Core + Scapular Stability)",
            load: "light cable or band 5–10lbs", tempo: "2s chop/2s return", reps: "3×10 per side", range: "diagonal chop, anti-rotation",
            subs: ["Kneeling Pallof press", "Standing cable rotation"]
          },
          {
            name: "Supine External Rotation (Arm at 90° Abduction)",
            load: "light dumbbell 2–3lbs", tempo: "3s rotate/3s return", reps: "3×12", range: "0→80° ER",
            subs: ["Standing ER (wall-support)", "Prone ER (incline bench)"]
          }
        ]
      },
      {
        name: "Strengthening & Proprioception (Weeks 7–12)",
        wks: 6,
        gates: [
          ["External rotation strength", "4/5 manual test at 90° abduction"],
          ["Prone Y-T-W hold", "30s each, no lag"],
          ["Standing ER (90° abd)", "8 reps per arm, 5lbs, pain-free"]
        ],
        exercises: [
          {
            name: "Standing External Rotation (90° Abduction, Progressive Load)",
            load: "light dumbbell 3–5lbs, +1–2lbs/week", tempo: "2s rotate/2s return", reps: "3×12", range: "0→80° ER",
            subs: ["Cable ER (90° abduction pulley)", "Resistance band ER", "Supine ER with arm supported"]
          },
          {
            name: "Band Pull-Apart (Scapular Retraction)",
            load: "light band", tempo: "2s pull/2s return", reps: "3×15", range: "shoulder width to chest",
            subs: ["Rope face-pull (machine)", "Reverse pec deck", "Prone Y-T-W (with light weights)"]
          },
          {
            name: "Prone Horizontal Abduction (Progressive Weight)",
            load: "1–3lbs dumbbells, +0.5–1lb/week", tempo: "2s lift/3s lower", reps: "3×12", range: "30→60° abduction",
            subs: ["Incline bench prone raise", "Reverse pec deck", "Cable machine rear delt fly"]
          },
          {
            name: "Quadruped Shoulder Taps (Proprioception)",
            load: "bodyweight (contralateral arm lift)", tempo: "controlled tap", reps: "3×10 per arm", range: "stable core",
            subs: ["Push-up plus (knees)", "Tall quadruped hold + arm-leg lift"]
          },
          {
            name: "Supine Stability Ball Passé Hold (Proprioceptive Challenge)",
            load: "bodyweight (supine on ball)", tempo: "static hold", reps: "3×20–30s", range: "arm in external rotation, pain-free",
            subs: ["Supine on bench with arm held", "Standing balance (eyes closed)"]
          }
        ]
      },
      {
        name: "Eccentric Loading & Return to Sport (Weeks 13–16)",
        wks: 4,
        gates: [
          ["External rotation eccentric strength", "8 reps at 5–8lbs, controlled"],
          ["Prone Y-T-W", "40s hold each, no lag or pain"],
          ["Sport-specific throwing", "interval program at 80% distance/intensity"]
        ],
        exercises: [
          {
            name: "Standing Eccentric External Rotation (90° Abduction)",
            load: "light dumbbell 5–8lbs (eccentric only)", tempo: "5s eccentric lower", reps: "3×6–8", range: "concentric assisted (therapist), eccentric unassisted",
            subs: ["Assisted ER (bilateral concentric, unilateral eccentric)", "Cable ER eccentric"]
          },
          {
            name: "Prone Shoulder Y-T-W (Progressive Weight)",
            load: "1–2lbs dumbbells", tempo: "2s hold per position", reps: "3×10 per position", range: "prone flat",
            subs: ["Standing band-resisted I-Y-T", "Quadruped I-Y-T with weight"]
          },
          {
            name: "Standing Overhead Press (Progressive Load)",
            load: "light dumbbell 5–10lbs", tempo: "2s up/3s lower", reps: "3×10", range: "shoulder to overhead",
            subs: ["Machine shoulder press", "Single-arm dumbbell press"]
          },
          {
            name: "Lat Pulldown (Shoulder Adduction)",
            load: "start 20–30lbs, +5lbs/week", tempo: "2s down/2s return", reps: "3×12", range: "full shoulder adduction",
            subs: ["Cable row (single-arm)", "Assisted pull-up"]
          },
          {
            name: "Sport-Specific Throwing (Interval Program)",
            load: "progressively increasing distance/intensity", tempo: "sport-speed", reps: "interval schedule (day 1: 25ft×25 throws, day 2: 45ft×25 throws, etc.)", range: "90° ER at end-range",
            subs: ["Plyometric ball slam (overhead)", "Medicine ball throw-and-catch", "Resistance band throw-return"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // HEALTH PROTOCOLS (10)
  // ============================================================================

  "Post_Op_Recovery_General": {
    tier: "health",
    category: "systemic",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Immediate Post-Op Mobilization (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Ambulation distance", "100 ft with walker/assistance"],
          ["Pain control", "VAS <4/10 with movement"],
          ["Wound status", "dry, no signs of infection"]
        ],
        exercises: [
          {
            name: "Bed Mobility (Log Roll, Sitting)",
            load: "none", tempo: "controlled movement", reps: "2–3×daily", range: "pain-free ROM only",
            subs: ["Supine to sidelying", "Sidelying to sitting (edge of bed)"]
          },
          {
            name: "Quad Sets & Glute Bridge (Isometric Activation)",
            load: "none", tempo: "5s squeeze/5s release", reps: "3×15", range: "pain-free muscle activation",
            subs: ["Ankle pumps (DVT prophylaxis)", "Hip abduction (pillow squeeze)"]
          },
          {
            name: "Straight Leg Raise (If Tolerated)",
            load: "bodyweight", tempo: "3s lift/3s lower", reps: "3×10", range: "pain-free only",
            subs: ["Supine hip abduction", "Supine knee bends (gentle ROM)"]
          },
          {
            name: "Standing with Support (Walker/Parallel Bars)",
            load: "gravity + weight-bearing as tolerated", tempo: "30–60s stand", reps: "3–4× daily", range: "neutral alignment",
            subs: ["Sitting balance (edge of bed)", "Standing with two-hand support"]
          },
          {
            name: "Ambulation (Assisted, Progressive Distance)",
            load: "walker/crutches/person assist", tempo: "slow, controlled pace", reps: "2–3×daily (3–5 min each)", range: "distance per tolerance (50ft→100ft)",
            subs: ["Hallway walking with rail", "Room walking with supervision"]
          }
        ]
      },
      {
        name: "Early Strengthening (Weeks 3–8)",
        wks: 6,
        gates: [
          ["Ambulation distance", "household distances without device"],
          ["Quad strength", "single-leg SLR, 10 reps pain-free"],
          ["Pain reduction", "VAS <2/10 with ADLs"],
          ["Stair tolerance", "1 flight with rail, one step at a time"]
        ],
        exercises: [
          {
            name: "Step-Up/Down (Stair Training, 6–12in step)",
            load: "bodyweight with rail assist", tempo: "3s up/3s down", reps: "3×8 per leg", range: "one step at a time (rail for safety)",
            subs: ["Step-down (eccentric focus)", "Lateral step training"]
          },
          {
            name: "Standing Hip Abduction (Standing Kick)",
            load: "bodyweight", tempo: "2s out/2s in", reps: "3×12", range: "45° abduction",
            subs: ["Side-lying abduction", "Monster walk (band)"]
          },
          {
            name: "Sit-to-Stand (From 18in Chair)",
            load: "bodyweight", tempo: "3s stand/3s sit", reps: "3×10", range: "full height",
            subs: ["Chair with armrests (hand push-off)", "Higher seat (reduced ROM requirement)"]
          },
          {
            name: "Standing Marching (High Knee Lift)",
            load: "none", tempo: "controlled pace", reps: "3×10 per leg", range: "90° hip flexion",
            subs: ["Seated knee extension", "Lying knee bends"]
          },
          {
            name: "Walking Program (Progressive Distance & Pace)",
            load: "none", tempo: "slow→brisk pace", reps: "3×walk 10–20 min", range: "outdoor or treadmill (0% grade)",
            subs: ["Stationary bike (light resistance)", "Swimming (pain-free strokes)"]
          }
        ]
      },
      {
        name: "Functional Return (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Stair tolerance", "full flight, alternating feet, no rail"],
          ["Functional strength", "single-leg squat (assisted, full depth)"],
          ["Walking distance", ">1 mile continuous, moderate pace"]
        ],
        exercises: [
          {
            name: "Mini-Squat (Bilateral, Progressive Depth)",
            load: "bodyweight", tempo: "3s down/2s up", reps: "3×12", range: "0→60→90° knee bend (progressing)",
            subs: ["Sit-to-stand (reduced chair height)", "Wall squat"]
          },
          {
            name: "Single-Leg Romanian Deadlift",
            load: "light dumbbell 5–10lbs", tempo: "3s lower/2s recover", reps: "3×8 per leg", range: "controlled ROM",
            subs: ["Forward lunge", "Step-back lunge"]
          },
          {
            name: "Leg Press or Hack Squat",
            load: "bodyweight (easy), +10% weekly", tempo: "3s lower/2s drive", reps: "3×12", range: "0→60→90° (progressing)",
            subs: ["Sled machine", "Smith machine squat"]
          },
          {
            name: "Standing Balance & Proprioception",
            load: "none", tempo: "static hold", reps: "3×30s per stance", range: "single-leg, eyes open → closed",
            subs: ["Tandem stance", "BOSU ball (unstable)"]
          },
          {
            name: "Sport-Specific or Hobby Return (Progressive Activity)",
            load: "progressive intensity", tempo: "activity-specific", reps: "activity-based intervals", range: "80%→90%→100% intensity by wk 12",
            subs: ["Functional movement training", "Light agility drills"]
          }
        ]
      }
    ]
  },

  "Deconditioning": {
    tier: "health",
    category: "systemic",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Activation & Low-Intensity Movement (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Walking distance", "15 min continuous without fatigue"],
          ["HR response", "normalized resting HR within 10 bpm of baseline"],
          ["Fatigue rating", "Borg <5/10 at rest"]
        ],
        exercises: [
          {
            name: "Walking (Multiple Short Bouts)",
            load: "none", tempo: "slow→comfortable pace", reps: "5–6 bouts/day (10 min each)", range: "flat terrain",
            subs: ["Stationary bike (light, 10 min bouts)", "Swimming (easy pace)"]
          },
          {
            name: "Quad Sets & Glute Bridge",
            load: "none", tempo: "5s squeeze/5s release", reps: "3×15", range: "isometric activation",
            subs: ["Ankle pumps (calf activation)", "Hip abduction (pillow squeeze)"]
          },
          {
            name: "Straight Leg Raise (4-Way)",
            load: "bodyweight", tempo: "3s lift/3s lower", reps: "3×10 per direction", range: "full ROM",
            subs: ["Supine short arc quads", "Prone knee flexion"]
          },
          {
            name: "Sit-to-Stand (Bodyweight)",
            load: "bodyweight", tempo: "3s stand/3s sit", reps: "3×8", range: "full height",
            subs: ["Chair with armrests", "Higher seat (easier)"]
          },
          {
            name: "Standing Balance (Wall Support)",
            load: "none", tempo: "static hold", reps: "3×30s", range: "two-hand support → one-hand → no support",
            subs: ["Seated balance work", "Tandem stance (with rail)"]
          }
        ]
      },
      {
        name: "Progressive Strengthening (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Walking distance", "30 min continuous, moderate pace"],
          ["Strength asymmetry", "<15% limb-to-limb difference"],
          ["Stair tolerance", "1 flight, alternating feet"],
          ["Functional ROM", "full hip + knee ROM bilaterally"]
        ],
        exercises: [
          {
            name: "Step-Up (6in box)",
            load: "bodyweight", tempo: "3s up/3s down", reps: "3×10 per leg", range: "full ROM",
            subs: ["Lateral step-up", "Forward step-down"]
          },
          {
            name: "Mini-Squat (Shallow)",
            load: "bodyweight", tempo: "3s down/2s up", reps: "3×12", range: "0→45° knee bend",
            subs: ["Sit-to-stand from standard chair", "Wall squat"]
          },
          {
            name: "Leg Press or Machine",
            load: "start 1× bodyweight (easy), +5–10% weekly", tempo: "3s lower/2s drive", reps: "3×12", range: "0→60° (partial range OK)",
            subs: ["Hack squat", "Sled leg press"]
          },
          {
            name: "Hip Abduction & Adduction (Machine or Band)",
            load: "light resistance (20–30lbs machine)", tempo: "2s hold", reps: "3×12 per direction", range: "full ROM",
            subs: ["Standing hip abduction (no machine)", "Side-lying abduction"]
          },
          {
            name: "Walking Program (Continuous + Pace Progression)",
            load: "none", tempo: "slow→brisk pace", reps: "3×20–30 min walks", range: "increasing pace by 0.5 mph/week",
            subs: ["Stationary bike (progressive resistance)", "Treadmill (0% grade)"]
          }
        ]
      },
      {
        name: "Advanced Return to Activity (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Walking distance", ">1 mile continuous"],
          ["Functional strength", "single-leg squat (assisted, 60° depth)"],
          ["Aerobic capacity", "30 min moderate pace without fatigue"]
        ],
        exercises: [
          {
            name: "Bulgarian Split Squat (Lunge Progression)",
            load: "bodyweight → dumbbells 10–15lbs", tempo: "3s down/2s up", reps: "3×10 per leg", range: "full ROM",
            subs: ["Forward lunge", "Reverse lunge", "Single-leg squat to box"]
          },
          {
            name: "Romanian Deadlift",
            load: "start 45lbs, +10lbs/week", tempo: "3s lower/2s drive", reps: "3×10", range: "hip hinge ROM",
            subs: ["Trap bar deadlift", "Single-leg RDL"]
          },
          {
            name: "Aerobic Training (Progressive Intensity)",
            load: "progressive resistance/speed", tempo: "Zone 2 aerobic", reps: "3×20–40 min", range: "low-moderate intensity",
            subs: ["Bike interval training", "Elliptical (low impact)", "Swimming (continuous)"]
          },
          {
            name: "Balance & Proprioception (Advanced)",
            load: "none", tempo: "dynamic balance", reps: "3×30s per exercise", range: "single-leg, eyes closed, unstable surface",
            subs: ["Tandem stance (dynamic)", "BOSU ball work", "Foam pad"]
          },
          {
            name: "Sport or Hobby Return",
            load: "progressive intensity", tempo: "activity-specific", reps: "structured interval", range: "80→100% match intensity by wk 12",
            subs: ["Functional agility training", "Sport-specific drills"]
          }
        ]
      }
    ]
  },

  "Cardiac_Rehabilitation": {
    tier: "health",
    category: "systemic",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Acute/Supervised Early Phase (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Cardiac clearance", "physician approval for exercise"],
          ["Symptom stability", "no chest pain, dyspnea, or arrhythmias at rest"],
          ["Walking tolerance", "10 min continuous, RPE <3/10"]
        ],
        exercises: [
          {
            name: "Walking (Low-Intensity, Supervised)",
            load: "none", tempo: "slow pace (2–3 mph)", reps: "3×5–10 min/day", range: "flat terrain",
            subs: ["Stationary bike (light resistance)", "Elliptical (light, low impact)"]
          },
          {
            name: "Arm Ergometer (Upper Body Aerobic)",
            load: "minimal resistance", tempo: "slow cadence (40–50 rpm)", reps: "3×5 min", range: "upper body only",
            subs: ["Seated upper body ROM", "Arm circles"]
          },
          {
            name: "Quad Sets & Hip Activation",
            load: "none", tempo: "5s squeeze/5s release", reps: "3×15", range: "isometric only",
            subs: ["Glute bridge (gentle)", "Ankle pumps"]
          },
          {
            name: "Breathing Exercises (Diaphragmatic)",
            load: "none", tempo: "slow, deep breaths", reps: "3×10 breaths", range: "4s inhale/6s exhale",
            subs: ["Pursed-lip breathing", "Yoga-style breathing"]
          },
          {
            name: "Seated Marching (Warm-Up/Cool-Down)",
            load: "none", tempo: "slow pace", reps: "3×2 min", range: "full hip/knee flexion (gentle)",
            subs: ["Supine marching", "Lying leg circles"]
          }
        ]
      },
      {
        name: "Supervised Strengthening (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Walking tolerance", "20 min continuous, RPE 4/10"],
          ["Cardiac stability", "no events during monitored exercise"],
          ["Resistance tolerance", "light resistance (10–15lbs) for 2–3 sets"]
        ],
        exercises: [
          {
            name: "Treadmill Walking (Progressive Pace)",
            load: "none", tempo: "0–1% grade, 2.5–3.5 mph", reps: "3×10–15 min", range: "increasing pace by 0.2 mph/week",
            subs: ["Stationary bike (progressive resistance)", "Arm ergometer + legs combined"]
          },
          {
            name: "Leg Press (Light Resistance, High Reps)",
            load: "start 10–20lbs, +2–5lbs/week", tempo: "3s lower/2s drive", reps: "2–3×12–15", range: "0→60° (shallow)",
            subs: ["Leg extension machine (quad-focused)", "Sled machine"]
          },
          {
            name: "Chest Press (Machine, Light Load)",
            load: "start 10–20lbs, +2–5lbs/week", tempo: "3s lower/2s drive", reps: "2–3×12–15", range: "controlled ROM",
            subs: ["Resistance band chest press", "Seated row (machine)"]
          },
          {
            name: "Upper Body ROM (Arm Circles, Shoulder Raises)",
            load: "bodyweight", tempo: "controlled movement", reps: "3×10 per direction", range: "full ROM",
            subs: ["Lateral arm raise (light weight 1–2lbs)", "Resistance band shoulder work"]
          },
          {
            name: "Cycle Ergometer (Low-Intensity Aerobic)",
            load: "light resistance", tempo: "60–70 rpm", reps: "3×5–10 min", range: "continuous",
            subs: ["Elliptical (low impact)", "Rowing machine (light resistance)"]
          }
        ]
      },
      {
        name: "Independent Maintenance Phase (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Walking distance", ">30 min continuous, moderate pace"],
          ["Aerobic capacity", "sustained RPE 5–6/10 for 20+ min"],
          ["Resistance tolerance", "12–15lbs for 2–3 sets, 12–15 reps"]
        ],
        exercises: [
          {
            name: "Aerobic Activity (Walking/Biking/Elliptical)",
            load: "progressive intensity", tempo: "Zone 2 aerobic (60–70% HRmax)", reps: "4–5×/week, 30–40 min", range: "continuous or interval",
            subs: ["Treadmill", "Stationary bike", "Rowing machine"]
          },
          {
            name: "Resistance Training (Full-Body, Moderate Load)",
            load: "12–20lbs (progressing)", tempo: "3s lower/2s drive", reps: "2–3×12–15", range: "controlled ROM",
            subs: ["Leg press + chest press + row circuit", "Dumbbell exercises (light)"]
          },
          {
            name: "Interval Training (Monitored HIIT)",
            load: "progressive speed/resistance", tempo: "high intensity (RPE 7–8/10) alternating with low (RPE 3–4/10)", reps: "1×/week (3–4 intervals)", range: "1–2 min high/2–3 min low",
            subs: ["Treadmill intervals", "Bike intervals"]
          },
          {
            name: "Flexibility & Breathing (Yoga/Tai Chi)",
            load: "none", tempo: "slow, controlled movement", reps: "2–3×/week, 15–20 min", range: "gentle ROM",
            subs: ["Stretching routine", "Tai chi"]
          },
          {
            name: "Upper Body Strength (Arm Ergometer, Rowing)",
            load: "moderate resistance", tempo: "moderate pace", reps: "2–3×/week, 10–15 min", range: "controlled",
            subs: ["Cable row", "Lat pulldown", "Resistance band work"]
          }
        ]
      }
    ]
  },

  "Post_Fracture_Recovery": {
    tier: "health",
    category: "bone_regional",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Immobilization & Early Mobilization (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Fracture stability", "physician clearance for ROM"],
          ["Swelling reduction", "<2cm circumference difference"],
          ["Pain control", "VAS <4/10 with ROM"]
        ],
        exercises: [
          {
            name: "Isometric Muscle Contraction (Affected Limb)",
            load: "none", tempo: "5s squeeze/5s release", reps: "3×15", range: "within immobilizer constraints",
            subs: ["Quad sets (if knee involved)", "Glute squeeze (if hip/leg)", "Ankle pumps (if lower leg)"]
          },
          {
            name: "Passive ROM (Therapist-Assisted or Gravity-Eliminated)",
            load: "therapist or self-assist", tempo: "slow, gentle", reps: "3×10 reps per direction", range: "pain-free ROM only",
            subs: ["Pendulum exercises (if shoulder)", "Supine ROM (hip/knee)"]
          },
          {
            name: "Unaffected Limb Strengthening",
            load: "bodyweight or light resistance", tempo: "controlled", reps: "3×10", range: "full ROM",
            subs: ["Opposite limb quad sets", "Contralateral hip abduction"]
          },
          {
            name: "Swelling Management (Elevation, Compression)",
            load: "gravity + compression wrap", tempo: "throughout day", reps: "20+ min sessions", range: "elevation above heart level",
            subs: ["Ice application (15 min, 2–3×/day)", "Compression sleeve"]
          },
          {
            name: "Walking/Ambulation (WBAT or PWB as Directed)",
            load: "crutches/walker (load per clearance)", tempo: "slow pace", reps: "2–3×daily, 5–10 min", range: "distances per tolerance",
            subs: ["Stationary bike (no weight-bearing)", "Supine sled (if applicable)"]
          }
        ]
      },
      {
        name: "Protected Active Strengthening (Weeks 5–10)",
        wks: 6,
        gates: [
          ["ROM restoration", "90% of contralateral side"],
          ["Weight-bearing tolerance", "full weight-bearing without assistive device"],
          ["Muscle strength", "3/5 manual test in major plane"],
          ["Swelling resolution", "minimal circumference difference"]
        ],
        exercises: [
          {
            name: "Active-Assisted ROM (Gravity-Assisted)",
            load: "therapist or self-assist", tempo: "3s move/3s return", reps: "3×12", range: "gradual ROM increase",
            subs: ["Active ROM (unassisted)", "Gravity-eliminated ROM (sidelying)"]
          },
          {
            name: "Isometric to Isotonic Transition (Light Resistance)",
            load: "light band or 1–2lbs weight", tempo: "2s hold/2s return", reps: "3×10–12", range: "pain-free ROM",
            subs: ["Bodyweight resistance", "Gravity-assisted ROM"]
          },
          {
            name: "Mini-Squat or Step-Up (Lower Limb Fracture)",
            load: "bodyweight", tempo: "3s down/2s up", reps: "3×10", range: "0→45° knee bend (or pain-free)",
            subs: ["Sit-to-stand", "Straight leg raise (quad emphasis)"]
          },
          {
            name: "Standing Balance (Progressive Support Reduction)",
            load: "walker → rail → no support", tempo: "static hold", reps: "3×30s", range: "eyes open → closed",
            subs: ["Seated balance work", "Tandem stance (with support)"]
          },
          {
            name: "Gait Training (Progressive Weight-Bearing)",
            load: "none", tempo: "normal gait pattern", reps: "3×10–20 min", range: "increasing distance weekly",
            subs: ["Stationary bike", "Pool walking (buoyancy support)"]
          }
        ]
      },
      {
        name: "Return to Function (Weeks 11–16)",
        wks: 6,
        gates: [
          ["ROM parity", "100% of contralateral side"],
          ["Strength asymmetry", "<10% deficit"],
          ["Functional mobility", "stairs/community ambulation without difficulty"],
          ["Sport/work readiness", "full activity without pain or swelling"]
        ],
        exercises: [
          {
            name: "Progressive Resistance (Ramped Load Progression)",
            load: "bodyweight → 5–10lbs, +2–5lbs/week", tempo: "3s lower/2s drive", reps: "3×12", range: "full ROM",
            subs: ["Machine leg press", "Hack squat", "Dumbbell exercises"]
          },
          {
            name: "Single-Leg Balance & Movement",
            load: "none", tempo: "dynamic balance", reps: "3×30s per exercise", range: "single-leg stance → tandem walk → agility",
            subs: ["BOSU ball work", "Foam pad", "Eyes-closed balance"]
          },
          {
            name: "Romanian Deadlift or Hip Hinge",
            load: "start 45lbs, +10lbs/week", tempo: "3s lower/2s drive", reps: "3×10", range: "hip hinge ROM",
            subs: ["Single-leg RDL", "Step-back lunge"]
          },
          {
            name: "Agility & Sport Return (If Applicable)",
            load: "progressive intensity", tempo: "sport-speed", reps: "3×sport drills", range: "80→90→100% intensity",
            subs: ["Shuttle runs", "Cutting drills", "Sport-specific movement"]
          },
          {
            name: "Functional Walking/Running Program",
            load: "none", tempo: "progressive pace/distance", reps: "3–5×/week", range: "walk→walk/jog→jog→run (if cleared)",
            subs: ["Treadmill progression", "Outdoor walking/running"]
          }
        ]
      }
    ]
  },

  "Chronic_Pain_Management": {
    tier: "health",
    category: "systemic",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Pain Education & Graded Activation (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Pain acceptance", "reduced fear-avoidance (FABQ <15)"],
          ["Movement tolerance", "10 min activity without significant pain increase"],
          ["Sleep quality", "improved (self-reported)"]
        ],
        exercises: [
          {
            name: "Gentle Movement (Pain-Graded Exposure)",
            load: "bodyweight, pain-monitored", tempo: "slow, mindful movement", reps: "daily, 5–10 min bouts", range: "submaximal (pain <5/10)",
            subs: ["Yoga (gentle)", "Tai chi", "Walking (low-intensity)"]
          },
          {
            name: "Breathing & Relaxation (Diaphragmatic, Progressive)",
            load: "none", tempo: "slow, deep breaths", reps: "3×5 min/day", range: "4s inhale/6s exhale",
            subs: ["Progressive muscle relaxation", "Meditation (body scan)"]
          },
          {
            name: "Isometric Strengthening (Affected Region, Pain-Free)",
            load: "none", tempo: "5s squeeze/5s release", reps: "3×10", range: "pain-free contraction only",
            subs: ["Quad sets", "Glute squeeze", "Core bracing"]
          },
          {
            name: "Flexibility/Mobility (Gentle Stretching)",
            load: "gravity-assisted or self-hold", tempo: "sustained hold 30s", reps: "daily, major muscle groups", range: "submaximal stretch (no pain)",
            subs: ["Foam rolling (light pressure)", "Lacrosse ball (trigger point)"]
          },
          {
            name: "Activity Scheduling (Structured Low-Intensity Activities)",
            load: "self-paced", tempo: "leisure pace", reps: "daily activities (10–15 min each)", range: "hobby/social activities",
            subs: ["Walking with friend", "Light gardening", "Hobby engagement"]
          }
        ]
      },
      {
        name: "Progressive Strengthening & Aerobic Training (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Functional activity tolerance", "20 min activity, pain <3/10"],
          ["Strength improvement", "pain-free resistance exercises, 1–2 sets"],
          ["Aerobic capacity", "20 min continuous moderate activity"]
        ],
        exercises: [
          {
            name: "Resistance Training (Controlled Progressive Load)",
            load: "bodyweight → 5–10lbs, +1–2lbs/week", tempo: "3s work/2s rest", reps: "2–3×10–12", range: "full ROM, pain <3/10",
            subs: ["Machine exercises (quad, hamstring, chest)", "Dumbbell exercises (light)", "Bodyweight progressions"]
          },
          {
            name: "Aerobic Activity (Progressive Intensity, Pain-Monitored)",
            load: "none", tempo: "Zone 2 aerobic (low-moderate)", reps: "3–4×/week, 20–30 min", range: "continuous or intervals",
            subs: ["Walking", "Stationary bike", "Swimming (low-impact)"]
          },
          {
            name: "Core Strengthening (Planks, Bridges, Dead Bug)",
            load: "bodyweight", tempo: "3s hold", reps: "3×20–30s", range: "neutral spine",
            subs: ["Quadruped holds", "Side plank (knees)"]
          },
          {
            name: "Flexibility & Mobility (Progressive ROM)",
            load: "self-stretch or therapist", tempo: "sustained holds", reps: "daily, major groups", range: "mild stretch sensation",
            subs: ["Dynamic stretching", "Foam rolling (gradual pressure increase)"]
          },
          {
            name: "Functional Movement Training (Real-World Activities)",
            load: "progressive intensity", tempo: "controlled pace", reps: "structured practice", range: "squats, reaching, carrying (graded)",
            subs: ["Sit-to-stand", "Step training", "Reaching/carrying practice"]
          }
        ]
      },
      {
        name: "Maintenance & High-Function Return (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Functional activity tolerance", ">30 min moderate intensity pain-free"],
          ["Strength asymmetry", "<10% deficit (if unilateral)"],
          ["Return to hobby/work", "gradual return to previous activities"]
        ],
        exercises: [
          {
            name: "Advanced Resistance Training (Progressive Multi-Joint Loads)",
            load: "10–25lbs, +5lbs/week", tempo: "controlled 3s/2s", reps: "3×10–12", range: "full ROM",
            subs: ["Deadlifts (light)", "Squats", "Multi-joint machine exercises"]
          },
          {
            name: "Aerobic Cross-Training (Varied Modalities)",
            load: "progressive intensity", tempo: "Zone 2–3 mixed", reps: "4–5×/week, 30–45 min", range: "varied (running, biking, swimming)",
            subs: ["Interval training (HIIT)", "Long steady-state"]
          },
          {
            name: "Sport-Specific or Hobby Return (Structured Return Plan)",
            load: "graded activity exposure", tempo: "activity-specific", reps: "progressive intensity (70→90→100%)", range: "sport/hobby engagement",
            subs: ["Sport drills", "Hobby practice", "Functional agility"]
          },
          {
            name: "Mindfulness & Lifestyle Integration",
            load: "none", tempo: "daily practice", reps: "10–15 min/day", range: "meditation, yoga, tai chi",
            subs: ["Journaling", "Social activity", "Sleep optimization"]
          },
          {
            name: "Maintenance Exercise Program (Sustainability Plan)",
            load: "self-directed", tempo: "routine pace", reps: "3–4×/week indefinitely", range: "mixed modality (strength + aerobic + flexibility)",
            subs: ["Home exercise program", "Group fitness classes"]
          }
        ]
      }
    ]
  },

  "Mobility_Loss": {
    tier: "health",
    category: "regional",
    arc: 8,
    evidence: [],
    phases: [
      {
        name: "Baseline ROM Assessment & Gentle Mobilization (Weeks 1–2)",
        wks: 2,
        gates: [
          ["ROM baseline established", "measure active + passive range"],
          ["Comfort with stretching", "no pain during mobility work"],
          ["Daily routine adherence", "daily mobility practice initiated"]
        ],
        exercises: [
          {
            name: "Soft Tissue Mobilization (Foam Roll, Lacrosse Ball)",
            load: "self-applied pressure", tempo: "slow roll 1–2 sec per spot", reps: "3×30s per muscle group", range: "tender point hold 5–10 sec",
            subs: ["Massage gun (light pressure)", "Therapist-applied release"]
          },
          {
            name: "Dynamic Stretching (Active ROM)",
            load: "bodyweight", tempo: "controlled movement", reps: "3×10 per direction", range: "full pain-free ROM",
            subs: ["Arm circles (shoulder)", "Leg swings (hip)", "Thoracic rotation"]
          },
          {
            name: "Static Stretching (Hold, Submaximal Tension)",
            load: "gravity or self-assisted", tempo: "sustained hold 30s", reps: "3× major muscle groups", range: "mild stretch sensation",
            subs: ["PNF stretching (partner-assisted)", "Gravity-assisted stretching"]
          },
          {
            name: "Mobility Drills (Specific to Limited Region)",
            load: "bodyweight or light load", tempo: "controlled movement", reps: "3×10 per direction", range: "progressive ROM increase",
            subs: ["90/90 hip stretch (shoulder)", "Quadruped T-spine rotation (thoracic)", "Deep squat hold (hip/ankle)"]
          },
          {
            name: "Breathing During Mobility (Parasympathetic Activation)",
            load: "none", tempo: "4s inhale/6s exhale during stretches", reps: "throughout mobility session", range: "relaxation cue during hold",
            subs: ["Box breathing (4/4/4/4)", "Slow nasal breathing"]
          }
        ]
      },
      {
        name: "Progressive ROM with Load (Weeks 3–6)",
        wks: 4,
        gates: [
          ["ROM improvement", "10–15° increase from baseline"],
          ["Strength at end-range", "isometric hold 10 sec, no pain"],
          ["Mobility retention", "consistent daily practice yielding gains"]
        ],
        exercises: [
          {
            name: "Loaded Stretching (Isometric Hold at End-Range)",
            load: "bodyweight or light dumbbell 2–5lbs", tempo: "5s isometric hold", reps: "3×5–8 holds", range: "maximal pain-free stretch",
            subs: ["PNF contract-relax (partner-assisted)", "Active ROM with resistance band"]
          },
          {
            name: "Dynamic Stretching with Movement (Progressive ROM)",
            load: "bodyweight", tempo: "controlled swing/movement", reps: "3×15 per direction", range: "increasing amplitude weekly",
            subs: ["Leg swings (increased height)", "Arm circles (larger circles)", "Lunge pulses"]
          },
          {
            name: "Soft Tissue Work (Progression to Deeper Pressure)",
            load: "increased self-applied or tool pressure", tempo: "slow roll, 1–2 sec per spot", reps: "3×30–45s per group", range: "deeper tissue focus",
            subs: ["Massage gun (medium pressure)", "Roller on lacrosse ball", "Therapist-applied"]
          },
          {
            name: "Endurance Stretch Holds (Long-Duration, Low Intensity)",
            load: "gravity or passive assist", tempo: "sustained hold 60–90s", reps: "2–3×/day, 1 per major region", range: "mild stretch (no pain)",
            subs: ["Reclined butterfly hold", "Chest doorway stretch", "Child's pose hold"]
          },
          {
            name: "Activation at End-Range (Strengthening Mobility Gains)",
            load: "light resistance band or 1–2lbs", tempo: "2s hold/2s release", reps: "3×10", range: "isometric at end ROM",
            subs: ["Quad activation in deep squat", "Shoulder ER at end-range", "Hip flexor activation"]
          }
        ]
      },
      {
        name: "Retention & Functional Integration (Weeks 7–8)",
        wks: 2,
        gates: [
          ["ROM plateau achieved", "stable ROM improvement 15–25%"],
          ["Movement quality", "functional ROM in daily/sport activities"],
          ["Maintenance program adherence", "3–5×/week minimum to retain gains"]
        ],
        exercises: [
          {
            name: "Functional Movement at Achieved ROM (Integration)",
            load: "bodyweight or light load", tempo: "sport-speed or activity-speed", reps: "structured practice", range: "full achieved ROM",
            subs: ["Sport-specific drills requiring full ROM", "Movement screen progression"]
          },
          {
            name: "Maintenance Mobility Routine (Shortened Daily)",
            load: "self-directed", tempo: "sustainable routine", reps: "5×/week minimum (15–20 min)", range: "major restricted areas",
            subs: ["Yoga class", "Foam rolling routine", "Dynamic warm-up"]
          },
          {
            name: "Integrated Strengthening (Maintaining ROM Under Load)",
            load: "progressive resistance", tempo: "full ROM under tension", reps: "2–3×/week, 10–12 reps", range: "full achieved ROM",
            subs: ["Resistance training (full ROM)", "Loaded stretching (isometric holds)"]
          },
          {
            name: "Sport/Functional Return (ROM-Specific Activity)",
            load: "activity-specific intensity", tempo: "full speed", reps: "sport/hobby engagement", range: "full achieved ROM",
            subs: ["Sport-specific drills", "Activity-specific practice"]
          },
          {
            name: "Ongoing Assessment & Adjustment (Monthly Re-Test)",
            load: "self-assessment or therapist", tempo: "measurement", reps: "monthly", range: "ROM tracking",
            subs: ["Movement screen", "Functional assessment"]
          }
        ]
      }
    ]
  },

  "Balance_Deficit": {
    tier: "health",
    category: "systemic",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Static Balance Foundation (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Single-leg stance", "10s with support"],
          ["Tandem stance", "5s with rail"],
          ["Fall risk assessment", "Timed Up & Go >15 sec → <15 sec target"]
        ],
        exercises: [
          {
            name: "Tandem Stance (Progressive Support Reduction)",
            load: "walker → single rail → fingertip → no support", tempo: "static hold", reps: "3×10–30s per stance", range: "eyes open → closed",
            subs: ["Standing with one-hand support", "Standing with wall support"]
          },
          {
            name: "Single-Leg Stance (Supported, Progressive)",
            load: "walker → rail → single hand → fingertip", tempo: "static hold", reps: "3×5–10s per leg", range: "eyes open → closed",
            subs: ["Partial weight shift (holding support)", "Wall-supported stance"]
          },
          {
            name: "Standing Marching in Place",
            load: "walker or rail support", tempo: "controlled, slow pace", reps: "3×15–20 steps", range: "controlled knee lift",
            subs: ["Seated marching", "Standing (no lift, just weight shift)"]
          },
          {
            name: "Weight Shifting (Side-to-Side, Forward-Back)",
            load: "walker or counter support", tempo: "slow, controlled shift", reps: "3×10 shifts per direction", range: "gentle sway",
            subs: ["Seated weight shift", "Wall-supported shift"]
          },
          {
            name: "Heel-Toe Stance (Alignment Awareness)",
            load: "counter or walker support", tempo: "static hold", reps: "3×10–20s", range: "narrow base progression",
            subs: ["Wide stance (easier)", "Wall-supported"]
          }
        ]
      },
      {
        name: "Dynamic Balance & Strengthening (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Single-leg stance", "30s without support"],
          ["Tandem stance", "20s without support"],
          ["Step-ups", "8 reps per leg, no holding"],
          ["Functional reach test", "improved distance by 2–3 inches"]
        ],
        exercises: [
          {
            name: "Single-Leg Stance (Unsupported, Progressive Difficulty)",
            load: "none (fingertip support as backup)", tempo: "static hold", reps: "3×20–30s per leg", range: "eyes open → closed → floor target",
            subs: ["Tandem stance (no support)", "Single-leg stance with arm movement"]
          },
          {
            name: "Standing Hip Abduction (Balance + Strength)",
            load: "bodyweight → light ankle weight 1–2lbs", tempo: "2s lift/2s lower", reps: "3×12 per leg", range: "45° abduction",
            subs: ["Wall-supported abduction", "Rail-supported abduction"]
          },
          {
            name: "Step-Up (6in box, Single-Leg Focus)",
            load: "bodyweight", tempo: "3s up/3s down", reps: "3×8 per leg", range: "full ROM, controlled landing",
            subs: ["Lateral step-up", "Forward step-down (eccentric)"]
          },
          {
            name: "Sit-to-Stand (Chair Height Progression)",
            load: "bodyweight", tempo: "3s stand/3s sit", reps: "3×10", range: "progressively lower chair height",
            subs: ["Elevated chair (easier)", "Chair with armrests for backup"]
          },
          {
            name: "Gait Training (Speed, Pattern, Obstacles)",
            load: "none", tempo: "increasing pace", reps: "3×10–20 ft", range: "normal gait → faster → over obstacles",
            subs: ["Treadmill walking", "Outdoor walking (flat)"]
          }
        ]
      },
      {
        name: "Advanced Balance & Fall Prevention (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Single-leg stance (eyes closed)", "20s without support"],
          ["Timed Up & Go", "<12 sec, safe movement"],
          ["Functional reach test", "≥10 inches"],
          ["Fall risk", "low (based on assessment scale)"]
        ],
        exercises: [
          {
            name: "Unstable Surface Balance (BOSU, Foam Pad, Wobble Board)",
            load: "none", tempo: "dynamic balance", reps: "3×30s per stance", range: "single-leg → dynamic movement on unstable",
            subs: ["Firm foam pad (less unstable)", "Air pad (graduated instability)"]
          },
          {
            name: "Dual-Tasking (Balance + Cognitive)",
            load: "balance task + cognitive task (counting backward, naming items)", tempo: "divided attention", reps: "3×30s", range: "increasing complexity",
            subs: ["Single-leg stance while talking", "Walking while naming colors"]
          },
          {
            name: "Tandem Gait (Heel-Toe Walking)",
            load: "none", tempo: "slow, controlled pace", reps: "3×10 steps", range: "narrow base progression",
            subs: ["Heel-toe walk along line (marked)", "Walk along tape line"]
          },
          {
            name: "Figure-8 Walking (Agility, Turning)",
            load: "none", tempo: "increasing pace", reps: "3×figure-8 around cones (10ft apart)", range: "progressive speed increase",
            subs: ["Turning in place (slow)", "Lateral shuffling"]
          },
          {
            name: "Falls Prevention Training (Reactive Stepping, Recovery)",
            load: "therapist-guided or video-guided", tempo: "controlled stumble responses", reps: "3×5 per direction", range: "forward/backward/lateral steps",
            subs: ["Step-up/down with quick response", "Balance recovery drills"]
          }
        ]
      }
    ]
  },

  "Weakness_from_Illness": {
    tier: "health",
    category: "systemic",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Early Activation & Frequent Low-Intensity Movement (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Ambulation", "walking 15 min without significant fatigue"],
          ["Muscle activation", "isometric holds 10 sec, no tremor/fatigue"],
          ["Nutrition", "protein intake ≥1.2g/kg/day"]
        ],
        exercises: [
          {
            name: "Frequent Quad & Glute Sets (Multiple Daily Bouts)",
            load: "none", tempo: "5s squeeze/5s release", reps: "5–6 bouts/day, 2–3×15 reps", range: "isometric activation",
            subs: ["Ankle pumps (calf activation)", "Hip abduction (pillow squeeze)"]
          },
          {
            name: "Straight Leg Raise (4-Way, Light)",
            load: "bodyweight", tempo: "3s lift/3s lower", reps: "3×8–10 per direction", range: "pain-free ROM",
            subs: ["Short arc quads", "Supine knee bends"]
          },
          {
            name: "Walking (Multiple Short Bouts)",
            load: "none", tempo: "slow→comfortable pace", reps: "5–6 bouts/day (10 min each)", range: "flat terrain",
            subs: ["Stationary bike (light, 10 min bouts)", "Sitting marching"]
          },
          {
            name: "Sit-to-Stand (Bodyweight, High Frequency)",
            load: "bodyweight", tempo: "3s stand/3s sit", reps: "3–4 bouts/day, 5–8 reps", range: "full height",
            subs: ["Elevated seat (easier)", "Armrests for assistance"]
          },
          {
            name: "Upper Body ROM (Arm Circles, Shoulder Shrugs)",
            load: "bodyweight", tempo: "controlled movement", reps: "3×10 per direction", range: "full ROM",
            subs: ["Seated arm circles", "Lying shoulder ROM"]
          }
        ]
      },
      {
        name: "Progressive Resistance & Aerobic Training (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Walking tolerance", "30 min continuous, moderate pace"],
          ["Strength increase", "quad/glute 4/5 manual test"],
          ["Muscle soreness resolved", "minimal DOMS from exercise"],
          ["Functional mobility", "stairs, sit-to-stand without fatigue"]
        ],
        exercises: [
          {
            name: "Leg Press or Machine (Light Resistance, Multiple Sets)",
            load: "start 1× bodyweight (easy), +5–10% weekly", tempo: "3s lower/2s drive", reps: "3–4×10–12", range: "0→60° knee bend",
            subs: ["Hack squat", "Sled leg press"]
          },
          {
            name: "Step-Up (6in box, Progressive Reps)",
            load: "bodyweight", tempo: "3s up/3s down", reps: "3×10–12 per leg", range: "full ROM",
            subs: ["Lateral step-up", "Stair climbing"]
          },
          {
            name: "Walking Program (Continuous + Pace Progression)",
            load: "none", tempo: "slow→brisk pace", reps: "3×20–30 min walks", range: "increasing pace by 0.2 mph/week",
            subs: ["Stationary bike (progressive resistance)", "Elliptical (low impact)"]
          },
          {
            name: "Upper Body Resistance (Light Dumbbell or Machine)",
            load: "start 3–5lbs, +1–2lbs/week", tempo: "3s lower/2s drive", reps: "3×10–12", range: "controlled ROM",
            subs: ["Machine chest press/row", "Resistance band"]
          },
          {
            name: "Functional Strength (Sit-to-Stand, Step-Up, Reaching)",
            load: "progressive intensity", tempo: "controlled", reps: "3×10 per functional task", range: "daily activities",
            subs: ["Lifting light objects", "Reaching practice"]
          }
        ]
      },
      {
        name: "Advanced Strength & Return to Activity (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Walking distance", ">1 mile continuous"],
          ["Muscle strength", "quad/glute 5/5, minimal asymmetry"],
          ["Functional independence", "stairs, ADLs without assistance"],
          ["Return to work/hobby", "gradual return with activity progression"]
        ],
        exercises: [
          {
            name: "Leg Press or Squat Progression (Ramped Load)",
            load: "start 1.5× bodyweight, +10% weekly", tempo: "3s lower/2s drive", reps: "3×10–12", range: "0→90° full depth",
            subs: ["Hack squat", "Machine leg press"]
          },
          {
            name: "Romanian Deadlift (Light Progression)",
            load: "start 45lbs, +10lbs/week", tempo: "3s lower/2s drive", reps: "3×10", range: "hip hinge ROM",
            subs: ["Trap bar deadlift", "Single-leg RDL"]
          },
          {
            name: "Upper Body Strength (Rowing, Pressing)",
            load: "10–20lbs dumbbells, +2–5lbs/week", tempo: "3s lower/2s drive", reps: "3×10–12", range: "controlled ROM",
            subs: ["Machine row/press", "Cable exercises"]
          },
          {
            name: "Aerobic Conditioning (Mixed Modality)",
            load: "progressive intensity", tempo: "Zone 2–3 mixed", reps: "4–5×/week, 30–45 min", range: "varied (walk, bike, swim)",
            subs: ["Interval training (HIIT)", "Long steady-state"]
          },
          {
            name: "Work/Hobby Return (Structured Activity Progression)",
            load: "progressive intensity", tempo: "activity-specific", reps: "gradually increasing work/hobby time", range: "80→90→100% by wk 12",
            subs: ["Work simulation", "Hobby-specific drills"]
          }
        ]
      }
    ]
  },

  "Sedentary_Lifestyle_Activation": {
    tier: "health",
    category: "systemic",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Habit Formation & Low-Barrier Entry (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Activity frequency", "daily movement (even 10 min bouts)"],
          ["Energy perception", "subjective fatigue reduced"],
          ["Habit establishment", "activity integrated into daily routine"]
        ],
        exercises: [
          {
            name: "Walking (Multiple Short Bouts, Daily)",
            load: "none", tempo: "comfortable pace", reps: "5–6 bouts/day (10 min each) or 1×30 min", range: "any terrain",
            subs: ["Stairclimbing (10 min bouts)", "Cycling (easy, 10 min bouts)", "Dancing"]
          },
          {
            name: "Bodyweight Activation (Frequent, Low-Volume)",
            load: "none", tempo: "controlled movement", reps: "3–4 bouts/day, 2–3 min each", range: "simple movements (squats, marches, arm circles)",
            subs: ["Stretching routine (2 min)", "Mobility drills"]
          },
          {
            name: "Sitting Interruptions (Movement Breaks Every 30–45 min)",
            load: "none", tempo: "2–3 min movement break", reps: "every 30–45 min of sitting", range: "standing march, bodyweight squat, arm circles",
            subs: ["Desk walk", "Standing stretch"]
          },
          {
            name: "Household Activity Integration",
            load: "none", tempo: "routine pace", reps: "daily", range: "gardening, cleaning, stairs",
            subs: ["Parking further away", "Taking stairs instead of elevator"]
          },
          {
            name: "Enjoyable Activity Selection",
            load: "self-selected", tempo: "leisure pace", reps: "daily engagement", range: "hobby/social activities (walking with friend, dancing, sports)",
            subs: ["Group class attendance", "Activity with family"]
          }
        ]
      },
      {
        name: "Progressive Activity Progression (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Activity duration", "30–45 min continuous"],
          ["Activity frequency", "4–5×/week structured exercise"],
          ["Fitness markers", "improved energy, easier breathing during activity"],
          ["Social engagement", "activity shared with others"]
        ],
        exercises: [
          {
            name: "Walking Program (Progressive Pace & Distance)",
            load: "none", tempo: "slow→brisk pace", reps: "4–5×/week, 30–45 min", range: "outdoor or treadmill",
            subs: ["Hiking (low-intensity)", "Mall walking", "Walking group"]
          },
          {
            name: "Aerobic Class or Group Activity",
            load: "progressive intensity", tempo: "activity-specific", reps: "2–3×/week, 30–45 min", range: "Zumba, dance, water aerobics, cycling class",
            subs: ["Stationary bike (solo)", "Elliptical", "Swimming"]
          },
          {
            name: "Beginner Strength Training (Machines or Bodyweight)",
            load: "light machines 10–20lbs, bodyweight", tempo: "controlled 3s/2s", reps: "2×/week, 15–20 min per session", range: "full ROM",
            subs: ["YouTube bodyweight video", "Resistance band exercises", "Light dumbbells"]
          },
          {
            name: "Flexibility & Mobility Routine",
            load: "none", tempo: "sustained holds", reps: "3–4×/week, 10–15 min", range: "major muscle groups",
            subs: ["Yoga class", "Stretching routine", "Tai chi"]
          },
          {
            name: "Active Recreation (Hobby-Based, Enjoyable)",
            load: "self-selected intensity", tempo: "leisure→moderate pace", reps: "2–3×/week", range: "tennis, pickleball, golf, gardening, nature walks",
            subs: ["Golf (walk course)", "Recreational sports", "Active gaming"]
          }
        ]
      },
      {
        name: "Sustainable Fitness & Maintenance (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Activity routine sustainability", "4–5×/week minimum maintained"],
          ["Fitness improvements", "improved energy, strength, aerobic capacity"],
          ["Social/hobby integration", "activity shared with community"],
          ["Health markers", "improved blood pressure, glucose, or weight (if tracked)"]
        ],
        exercises: [
          {
            name: "Mixed Aerobic Activity (Varied Modalities)",
            load: "progressive intensity", tempo: "Zone 2–3 mixed", reps: "4–5×/week, 30–45 min", range: "walking, biking, swimming, classes",
            subs: ["Group fitness class", "Outdoor recreation"]
          },
          {
            name: "Resistance Training (Progressive Multi-Joint)",
            load: "15–25lbs, +5lbs every 2 weeks", tempo: "controlled 3s/2s", reps: "2–3×/week, 20–30 min", range: "legs, chest, back, core",
            subs: ["Group fitness class with weights", "YouTube guided resistance", "Gym membership"]
          },
          {
            name: "Flexibility Maintenance (Yoga or Stretching)",
            load: "none", tempo: "sustained holds", reps: "2–3×/week, 15–20 min", range: "full-body stretch or yoga",
            subs: ["Online yoga class", "Tai chi group"]
          },
          {
            name: "Sport or Recreational Activity",
            load: "full intensity", tempo: "sport/activity-specific", reps: "1–2×/week", range: "pickleball, tennis, golf, hiking, recreational league",
            subs: ["Community group activity", "Family-based recreation"]
          },
          {
            name: "Long-Term Behavior Maintenance (Habit Consolidation)",
            load: "self-directed", tempo: "routine pace", reps: "indefinitely", range: "mixed modality program (strength + aerobic + flexibility + recreation)",
            subs: ["Group fitness memberships", "Walking groups", "Sports leagues"]
          }
        ]
      }
    ]
  },

  "Neurological_Recovery": {
    tier: "health",
    category: "neurological",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Early Mobilization & Passive ROM (Weeks 1–4)",
        wks: 4,
        gates: [
          ["ROM preserved", "no contracture development (≥90° major joints)"],
          ["Spasticity controlled", "Modified Ashworth <3/4"],
          ["Bed mobility achieved", "rolling, sitting with assistance"]
        ],
        exercises: [
          {
            name: "Passive ROM (Therapist-Assisted, Affected Limb)",
            load: "therapist support", tempo: "slow, gentle movement", reps: "3–4×daily, 10 reps per direction", range: "pain-free ROM",
            subs: ["Supine passive ROM", "Sidelying passive movement"]
          },
          {
            name: "Spasticity Management (Stretching, Heat)",
            load: "gravity or therapist-assisted", tempo: "sustained hold 30–60s", reps: "3–4×daily", range: "mild tension (no pain)",
            subs: ["Moist heat application", "Manual massage"]
          },
          {
            name: "Bilateral Arm/Leg Activation (Unaffected + Affected)",
            load: "therapist-guided", tempo: "slow, coordinated movement", reps: "3×5–10 bilateral moves", range: "pain-free ROM",
            subs: ["Affected limb passive, unaffected active (bilateral coupling)", "Symmetrical movement training"]
          },
          {
            name: "Bed Mobility Training (Rolling, Repositioning)",
            load: "therapist or bed rails assist", tempo: "controlled movement", reps: "2–3×daily", range: "supine to sidelying to seated edge",
            subs: ["Therapist-assisted movement", "Bed rail use"]
          },
          {
            name: "Sitting Balance (Supported Progression)",
            load: "bed back support → chair support → minimal support", tempo: "static hold", reps: "2–3×daily, 5–10 min", range: "upright posture",
            subs: ["Reclined sitting (easier)", "Therapy ball support"]
          }
        ]
      },
      {
        name: "Active-Assisted & Active Training (Weeks 5–10)",
        wks: 6,
        gates: [
          ["Active ROM", "affected limb 70% of unaffected side"],
          ["Spasticity", "Modified Ashworth <2/4"],
          ["Sitting balance", "60s without support"],
          ["Standing tolerance", "5 min with minimal support"]
        ],
        exercises: [
          {
            name: "Active-Assisted ROM (Affected Limb, Gravity-Reduced)",
            load: "therapist or self-assist (sling, slide board)", tempo: "3s move/3s return", reps: "3×10–12 per direction", range: "progressing ROM",
            subs: ["Supine active ROM (gravity-eliminated)", "Sidelying active movement"]
          },
          {
            name: "Bilateral Coordinated Training (Mirror Therapy)",
            load: "unaffected limb moving, affected observing/mimicking", tempo: "slow, coordinated", reps: "3×10–15 bilateral moves", range: "symmetrical movement",
            subs: ["Visual feedback from mirror", "Therapist verbal cueing"]
          },
          {
            name: "Standing Balance Training (Supported Progression)",
            load: "parallel bars → single rail → fingertip support", tempo: "static hold", reps: "2–3×daily, 5–10 min progressively", range: "upright alignment",
            subs: ["Sit-to-stand → 5 sec stand → progress", "Wall-supported standing"]
          },
          {
            name: "Gait Training (Walker → Cane → Independent)",
            load: "assistive device as needed", tempo: "slow, controlled pace", reps: "2–3×daily, 5–20 ft", range: "increasing distance weekly",
            subs: ["Parallel bar ambulation", "Treadmill with support"]
          },
          {
            name: "Task-Specific Training (Functional Reaching, Grasping)",
            load: "light objects 0.5–2lbs", tempo: "functional pace", reps: "3×10 per task", range: "affected limb dominant",
            subs: ["Therapist-guided reaching", "Object manipulation practice"]
          }
        ]
      },
      {
        name: "Functional Strengthening & Return to Activity (Weeks 11–16)",
        wks: 6,
        gates: [
          ["Active ROM", "95%+ of unaffected side"],
          ["Strength (affected)", "4/5 manual test in major plane"],
          ["Gait pattern", "independent 50 ft, safe mechanics"],
          ["Functional independence", "ADLs with modified independence"]
        ],
        exercises: [
          {
            name: "Resistance Training (Affected Limb, Progressive Load)",
            load: "light dumbbell 1–5lbs, bodyweight", tempo: "3s lower/2s drive", reps: "2–3×10–12", range: "full achievable ROM",
            subs: ["Resistance band (light–medium tension)", "Machine exercises"]
          },
          {
            name: "Step Training (Progressive Stair Climbing)",
            load: "bodyweight, rail support as needed", tempo: "slow, controlled", reps: "2–3×10 steps per leg", range: "1–2 flights (over weeks)",
            subs: ["Step platform (4–6in)", "Ramp walking"]
          },
          {
            name: "Balance Training (Dynamic Challenges)",
            load: "none or light support", tempo: "dynamic movement", reps: "2–3×10 per exercise", range: "tandem walk → tandem stance → single-leg (with support)",
            subs: ["BOSU ball (supported)", "Foam pad (progressing)"]
          },
          {
            name: "Gait Pattern Retraining (Speed, Efficiency)",
            load: "none", tempo: "normal gait pace", reps: "2–3×daily, 20–50 ft + intervals", range: "home → community distances",
            subs: ["Treadmill with visual feedback", "Outdoor walking"]
          },
          {
            name: "Functional Activity (ADLs, Leisure)",
            load: "progressive intensity", tempo: "normal activity pace", reps: "structured daily practice", range: "reaching, grasping, climbing stairs, walking outdoors",
            subs: ["Therapist-guided ADL training", "Home-based functional practice"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // FITNESS PROTOCOLS (10)
  // ============================================================================

  "Distance_Running_Marathon": {
    tier: "fitness",
    category: "endurance",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Base Building (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Aerobic base", "4–5 runs per week, 20–40 min low intensity"],
          ["Long run", "1×/week, 8–12 miles at conversational pace"],
          ["Total weekly volume", "30–40 miles, 90% Zone 2 effort"]
        ],
        exercises: [
          {
            name: "Easy Runs (Conversational Pace)",
            load: "Zone 2 aerobic (60–70% HRmax)", tempo: "sustainable pace", reps: "4–5×/week", range: "20–40 min per run",
            subs: ["Elliptical (low impact)", "Stationary bike"]
          },
          {
            name: "Long Run (Steady, Gradual Distance Build)",
            load: "Zone 2 aerobic, easy pace", tempo: "conversational pace", reps: "1×/week", range: "start 8 mi, +1 mi/week to 16–18 mi",
            subs: ["Trail running (terrain variation)", "Treadmill with incline (0–1%)"]
          },
          {
            name: "Cross-Training (Low-Impact Aerobic)",
            load: "Zone 1–2 aerobic", tempo: "easy pace", reps: "1×/week optional", range: "20–30 min",
            subs: ["Swimming (easy pace)", "Cycling (low resistance)", "Elliptical"]
          },
          {
            name: "Strength Training (Lower Body Focus, High Reps)",
            load: "bodyweight to light dumbbells", tempo: "controlled 3s/2s", reps: "2×/week, 15–20 min per session", range: "full ROM",
            subs: ["Machine exercises (leg press, hamstring curl)", "Bodyweight circuits"]
          },
          {
            name: "Core & Hip Stability (Planks, Glute Work)",
            load: "bodyweight", tempo: "isometric/dynamic holds", reps: "2–3×/week, 10–15 min", range: "planks, bridges, side-lying work",
            subs: ["Yoga (core emphasis)", "Pilates"]
          }
        ]
      },
      {
        name: "Build Phase - Threshold & Speed (Weeks 5–12)",
        wks: 8,
        gates: [
          ["Tempo runs", "1×/week, 3–6 miles at threshold pace"],
          ["Interval speed", "1×/week VO2 max (2–4 min repeats at 95% max pace)"],
          ["Long run", "16–20 miles at marathon pace"],
          ["Weekly volume", "40–55 miles, 70% easy/20% threshold/10% VO2 max split"]
        ],
        exercises: [
          {
            name: "Easy Runs (Recovery Pace)",
            load: "Zone 1–2 aerobic", tempo: "conversational pace", reps: "3×/week", range: "20–30 min per run",
            subs: ["Elliptical", "Cross-training"]
          },
          {
            name: "Tempo Runs (Lactate Threshold)",
            load: "Zone 4 threshold (85–90% HRmax)", tempo: "comfortably hard", reps: "1×/week", range: "3–6 miles at threshold pace (after 2 mi warm-up)",
            subs: ["Interval threshold (8×3 min at threshold, 1.5 min recovery)", "Fartlek (unstructured speed play)"]
          },
          {
            name: "VO2 Max Intervals (High Intensity)",
            load: "Zone 5 (95–100% HRmax)", tempo: "hard, controlled effort", reps: "1×/week", range: "8–10×3–4 min hard, 1.5–2 min easy (after warm-up)",
            subs: ["800m repeats (8–10×800m at 5K pace)", "Ladder repeats (2–4–6–4–2 min)"]
          },
          {
            name: "Long Run (Marathon Pace Progression)",
            load: "Zone 2–3 aerobic", tempo: "marathon pace", reps: "1×/week", range: "start 12 mi, +1–2 mi/week to 18–20 mi",
            subs: ["Trail long run (varied terrain)", "Road long run with pace variation"]
          },
          {
            name: "Strength & Plyometric (Eccentric & Power Load)",
            load: "light–moderate dumbbells 10–25lbs, bodyweight", tempo: "3–5s eccentric, explosive concentric", reps: "2×/week, 20–25 min", range: "lunges, calf raises, bounding",
            subs: ["Eccentric sled push", "Nordic hamstring curl", "Bounding drills"]
          }
        ]
      },
      {
        name: "Peak & Taper (Weeks 13–16)",
        wks: 4,
        gates: [
          ["Peak long run", "20–22 miles at marathon pace"],
          ["Short sharpening", "3×/week, 2–3 week peak volume"],
          ["Taper week 15–16", "50% volume reduction, maintain intensity"]
        ],
        exercises: [
          {
            name: "Easy Runs (Recovery Focus, Taper)",
            load: "Zone 1–2 aerobic", tempo: "conversational pace", reps: "3×/week (taper: 2×/week wk 15–16)", range: "15–25 min per run",
            subs: ["Elliptical", "Stationary bike"]
          },
          {
            name: "Peak Long Run (Race-Pace Practice)",
            load: "Zone 2–3, marathon pace", tempo: "marathon effort + tempo miles", reps: "1×/week (last at wk 13)", range: "20–22 miles with 4–6 mi at race pace",
            subs: ["Course preview run", "Terrain-specific long run"]
          },
          {
            name: "Tempo or Threshold (Sharpening, Short)",
            load: "Zone 4 threshold", tempo: "comfortably hard", reps: "1×/week (wk 13–14)", range: "2–3 miles at threshold (after 1.5 mi warm-up)",
            subs: ["Short interval tempo (3×2 mi with 1 mi easy)", "Fartlek with marathon pace surges"]
          },
          {
            name: "VO2 Max or Striders (Final Speed Work)",
            load: "Zone 5 high intensity, short", tempo: "hard, short repeats", reps: "1×/week (wk 13–14)", range: "3–5×1 mile at 5K pace or 6–8×100m strides",
            subs: ["Short hill repeats", "Acceleration drills"]
          },
          {
            name: "Race Preparation (Pacing Practice, Fueling, Logistics)",
            load: "race-simulation intensity", tempo: "race-pace", reps: "1–2×/week (wk 13)", range: "mock race 10–13 miles at marathon pace",
            subs: ["Dress rehearsal (race attire, fueling)", "Course visualization"]
          }
        ]
      }
    ]
  },

  "Rugby_Match_Prep": {
    tier: "fitness",
    category: "team_sport",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Base Fitness & Injury Prevention (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Aerobic base", "4×/week aerobic work, 20–30 min easy intensity"],
          ["Collision tolerance", "tackling/scrum simulation without pain/bruising"],
          ["Strength asymmetry", "<10% quad/hamstring deficit both legs"]
        ],
        exercises: [
          {
            name: "Aerobic Running (Zone 1–2, Varied Terrain)",
            load: "Zone 2 aerobic (60–70% HRmax)", tempo: "easy pace", reps: "4×/week", range: "20–30 min per run",
            subs: ["Sport-specific running (varied direction change)", "Trail running (collision impact prep)"]
          },
          {
            name: "Strength Training (Full-Body, Compound Focus)",
            load: "moderate dumbbells 15–30lbs, bodyweight", tempo: "controlled 3s/2s", reps: "3×/week, 30–40 min per session", range: "full ROM",
            subs: ["Machine exercises (multi-joint)", "Barbell exercises (low load)"]
          },
          {
            name: "Eccentric Strength (Hamstring, Quad Prevention)",
            load: "moderate load (eccentric only)", tempo: "5s eccentric", reps: "2×/week", range: "Nordic curls, sled push (hamstring focus)",
            subs: ["Eccentric squat (slow descent)", "Hamstring machine (heavy eccentric)"]
          },
          {
            name: "Collision Preparation (Tackle Impact, Scrum Simulation)",
            load: "contact-sport progression", tempo: "controlled impact", reps: "2×/week, 15–20 min", range: "padded tackling dummies, low-intensity scrums",
            subs: ["Heavy bag work (impact absorption)", "Ruck simulation"]
          },
          {
            name: "Mobility & Recovery (Yoga, Stretching, Soft Tissue)",
            load: "bodyweight", tempo: "sustained holds", reps: "3–4×/week, 15–20 min", range: "post-match/practice recovery",
            subs: ["Massage (self or therapist)", "Foam rolling"]
          }
        ]
      },
      {
        name: "Power & Sport-Specific Conditioning (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Repeated sprint ability", "6×30m all-out with 30s recovery, <10% decrement"],
          ["Collision impact tolerance", "full-contact training without injury"],
          ["Match simulation", "40–60 min controlled game situations"]
        ],
        exercises: [
          {
            name: "Running (Varied Pace & Multi-Directional)",
            load: "Zones 2–4 mixed", tempo: "sport-specific pace", reps: "4–5×/week", range: "20–30 min easy + 1 workout with speed work",
            subs: ["Agility ladder drills", "Shuttle runs (rugby-specific direction change)"]
          },
          {
            name: "Power & Plyometric Training (Lower Body Emphasis)",
            load: "bodyweight, light dumbbells, medicine ball", tempo: "explosive concentric, 3s eccentric", reps: "2×/week, 20–25 min", range: "bounding, box jumps, broad jumps",
            subs: ["Depth jumps (lower box)", "Single-leg plyometrics"]
          },
          {
            name: "Sport-Specific Strength (Collision Tolerance)",
            load: "moderate–heavy dumbbells 20–40lbs, barbell", tempo: "controlled 3s/2s", reps: "2–3×/week, 30–40 min", range: "squat, deadlift, rows (multi-joint stability)",
            subs: ["Machine-based strength", "Sled push/pull"]
          },
          {
            name: "Repeated Sprint Ability (RSA Training)",
            load: "all-out sprint intensity", tempo: "short recovery (30–45s)", reps: "1–2×/week", range: "6–8×30–40m sprints with 30–45s active recovery",
            subs: ["Short intervals (6×200m with 1 min recovery)", "Pro-agility shuttle repeats"]
          },
          {
            name: "Match-Specific Conditioning (Contact + Decision-Making)",
            load: "match-intensity simulation", tempo: "sport-speed", reps: "2×/week, 30–60 min", range: "position-specific drills, modified games, scrums, rucking",
            subs: ["Video review + positional drills", "Mini-game formats"]
          }
        ]
      },
      {
        name: "Match Preparation & Maintenance (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Match fitness", "full 80 min performance at high intensity"],
          ["Recovery capacity", "return to max effort after short recovery"],
          ["Injury resilience", "full contact without limitation"]
        ],
        exercises: [
          {
            name: "Maintenance Running (Aerobic + Fartlek)",
            load: "Zones 1–3 mixed", tempo: "varied pace", reps: "3–4×/week", range: "20–30 min easy runs + 1 with speed play",
            subs: ["Sport-specific agility running", "Shuttle/direction-change running"]
          },
          {
            name: "Power Maintenance (Lower Reps, High Intensity)",
            load: "heavy dumbbells/barbell 30–50lbs", tempo: "explosive/controlled", reps: "2×/week, 20–30 min", range: "squat, deadlift, jump variations (3–5 reps)",
            subs: ["Olympic lift variations (power clean, snatch)", "Medicine ball throws"]
          },
          {
            name: "Match-Intensity Training (Full Contact)",
            load: "match-speed collision load", tempo: "game-pace", reps: "3×/week (modified: 2–3 per week, 1 full match)", range: "full team training, scrimmage, or competitive match",
            subs: ["Position-specific skill work", "Small-sided games"]
          },
          {
            name: "Injury Prevention Maintenance (Eccentric, Mobility)",
            load: "progressive eccentric load", tempo: "controlled", reps: "1–2×/week", range: "Nordic curls (hamstring), hip work (adductor), neck/shoulder stability",
            subs: ["Physiotherapy maintenance", "Regular sports massage"]
          },
          {
            name: "Recovery & Regeneration (Match Week Protocol)",
            load: "none", tempo: "active/passive recovery", reps: "daily post-match", range: "ice bath, stretching, soft tissue work, light movement day after match",
            subs: ["Sleep optimization", "Nutrition protocol"]
          }
        ]
      }
    ]
  },

  "Rowing_Crew_Conditioning": {
    tier: "fitness",
    category: "endurance",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Base Aerobic Building (Weeks 1–6)",
        wks: 6,
        gates: [
          ["Aerobic base", "6–7×/week on water + erg, 80% Zone 2 effort"],
          ["Long row distance", "7k+ on water at steady aerobic pace"],
          ["Erg baseline", "establish 2K erg pace baseline"]
        ],
        exercises: [
          {
            name: "On-Water Steady State (Zone 2 Aerobic Pace)",
            load: "Zone 2 aerobic (60–70% HRmax)", tempo: "conversational pace", reps: "4–5×/week", range: "30–45 min per session",
            subs: ["Single sculler or crew boat", "Crew boat at 4×/week minimum"]
          },
          {
            name: "Long Row (Aerobic Endurance Base)",
            load: "Zone 1–2 steady pace", tempo: "easy, sustainable effort", reps: "1–2×/week", range: "1–1.5 hrs at 18–22 spm (strokes per min)",
            subs: ["Variable-pace long row (with short faster surges)", "Crew boat endurance piece"]
          },
          {
            name: "Ergometer Steady State (Aerobic Conditioning)",
            load: "Zone 2 aerobic, steady pace", tempo: "consistent power output", reps: "2–3×/week", range: "30–45 min per session",
            subs: ["Increasing duration weekly", "Split sessions (2×20 min with 5 min rest)"]
          },
          {
            name: "Strength Training (Upper Body Focus, Rowing Muscles)",
            load: "light–moderate dumbbells 10–20lbs", tempo: "controlled 3s/2s", reps: "2–3×/week, 25–30 min", range: "lats, back, shoulders, core",
            subs: ["Machine rows", "Cable rows"]
          },
          {
            name: "Core & Stabilizer Work (Plank Progressions, Rotational)",
            load: "bodyweight, light resistance", tempo: "isometric/dynamic", reps: "3–4×/week, 10–15 min", range: "planks, side-planks, rotational holds",
            subs: ["Yoga (core emphasis)", "Pilates (rowing-specific)"]
          }
        ]
      },
      {
        name: "Build Phase - Tempo & Intervals (Weeks 7–12)",
        wks: 6,
        gates: [
          ["Tempo rows", "1–2×/week, 20 min at 90% lactate threshold pace"],
          ["Interval intensity", "1×/week high-intensity intervals (5K pace VO2 max work)"],
          ["2K erg testing", "establish weekly pace progression"],
          ["Total weekly volume", "50–60k meters/week (erg + water combined)"]
        ],
        exercises: [
          {
            name: "Steady State (Easy Aerobic Maintenance)",
            load: "Zone 1–2 aerobic", tempo: "conversational pace", reps: "3–4×/week", range: "25–35 min per session",
            subs: ["Crew boat at easy pace", "Varied cadence SS (18–20 spm)"]
          },
          {
            name: "Tempo Rows (Lactate Threshold Work)",
            load: "Zone 4 threshold (85–90% HRmax)", tempo: "comfortably hard", reps: "1–2×/week", range: "2×10 min or 20 min threshold (after 10 min warm-up)",
            subs: ["Pyramid tempo (10–15–10 min segments)", "Variable-pace tempo (30s hard/30s easy within session)"]
          },
          {
            name: "High-Intensity Intervals (VO2 Max, Ergometer or Water)",
            load: "Zone 5 (95–100% HRmax)", tempo: "hard, short repeats", reps: "1×/week", range: "6–8×5 min hard, 1.5–2 min easy (or 8–10×3 min)",
            subs: ["500m repeats (10×500m at 2K pace)", "2K pace intervals"]
          },
          {
            name: "Ergometer-Specific Training (2K Simulation)",
            load: "high intensity (2K race pace)", tempo: "race-simulation pace", reps: "1×/week", range: "3–4×1500m with 2 min rest or 2K full simulation",
            subs: ["Step tests (increasing power each minute)", "Power-output maintenance tests"]
          },
          {
            name: "Strength & Power (Upper Body, Rowing-Specific)",
            load: "moderate–heavy dumbbells 15–30lbs, barbell", tempo: "controlled 3s/2s, some explosive", reps: "2–3×/week, 30–35 min", range: "rows, pull-ups, chest press, leg press (crew stability)",
            subs: ["Machine-based strength (rowing machine load)", "Resistance band rows"]
          }
        ]
      },
      {
        name: "Peak & Race Taper (Weeks 13–16)",
        wks: 4,
        gates: [
          ["Peak 2K erg", "personal best performance on erg"],
          ["Race-simulation rows", "full-race-distance pieces at race pace"],
          ["Taper week 15–16", "50% volume, maintain intensity"]
        ],
        exercises: [
          {
            name: "Easy Aerobic Rows (Taper Volume Reduction)",
            load: "Zone 1–2 easy", tempo: "conversational pace", reps: "2–3×/week (taper: 2×/week wk 15–16)", range: "20–30 min per session",
            subs: ["Light on-water steady state", "Easy erg paddling"]
          },
          {
            name: "Race-Pace Simulation (Peak Week Focus)",
            load: "race-pace intensity (2K pace)", tempo: "race effort", reps: "1×/week (wk 13–14)", range: "full-race-distance piece (6000–7000m) at race pace",
            subs: ["2×3000m at race pace with 3–5 min rest", "Short sharp 2K full focus"]
          },
          {
            name: "Tempo or Threshold Sharpening",
            load: "Zone 4 threshold or slightly higher", tempo: "hard but controlled", reps: "1×/week (wk 13–14)", range: "2×10 min threshold or 3×5 min at 5K pace",
            subs: ["Power test (10 min max power output)", "Pyramid tempo"]
          },
          {
            name: "Short High-Intensity (Speed Work, Maintenance)",
            load: "Zone 5 high intensity, short", tempo: "race-pace short intervals", reps: "1×/week (wk 13–14)", range: "3–4×1 min at 2K pace or 5×500m at 1K pace",
            subs: ["Acceleration repeats", "Sprint finishes"]
          },
          {
            name: "Maintenance Strength (Light Load, Injury Prevention)",
            load: "light dumbbells 10–15lbs", tempo: "controlled", reps: "1×/week (wk 15–16)", range: "maintenance circuit (15–20 min)",
            subs: ["Bodyweight maintenance", "Passive recovery focus"]
          }
        ]
      }
    ]
  },

  "Sport_Climbing_Training": {
    tier: "fitness",
    category: "climbing",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Technique & Endurance Foundation (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Climbing volume", "4–5 session/week on wall, 20–30 min per session"],
          ["Route grade confidence", "sustained climbing at base grade (5.7–5.9)"],
          ["Finger health", "no tendon pain (A2 pulley)"]
        ],
        exercises: [
          {
            name: "On-Wall Climbing (Endurance Emphasis, Base Grade)",
            load: "base climbing grade", tempo: "sustained climbing 15–20 min", reps: "4–5×/week", range: "multiple pitches, varied terrain",
            subs: ["Top-rope (safer for fatigue)", "Auto-belay (independent progression)"]
          },
          {
            name: "Climbing-Specific Conditioning (Slab, Overhanging, Diverse Angles)",
            load: "submaximal intensity", tempo: "technique focus", reps: "3–4×/week", range: "5–10 routes per session, varied angle practice",
            subs: ["Boulder (short problem focus)", "Hangboard training (deferred to phase 2)"]
          },
          {
            name: "Antagonist Training (Shoulder Stability, Upper Back)",
            load: "light–moderate dumbbells 10–15lbs", tempo: "controlled 3s/2s", reps: "2×/week, 20–25 min", range: "rows, face pulls, reverse flyes, band work",
            subs: ["Machine rows", "Resistance band pull-aparts"]
          },
          {
            name: "Core & Leg Strength (Tension & Footwork)",
            load: "bodyweight, light resistance", tempo: "isometric/dynamic", reps: "2–3×/week, 15–20 min", range: "planks, side-planks, hollow holds, squats",
            subs: ["Yoga (core emphasis)", "Sled push (leg drive work)"]
          },
          {
            name: "Flexibility & Mobility (Shoulder, Hip, Ankle)",
            load: "bodyweight", tempo: "sustained holds", reps: "daily or 5–6×/week, 10–15 min", range: "stretching, shoulder mobility (wall slides, dislocations)",
            subs: ["Yoga (climbing-specific)", "Foam rolling (upper body focus)"]
          }
        ]
      },
      {
        name: "Power & Bouldering Strength (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Bouldering grade increase", "+1–2 grade increase from start"],
          ["Finger strength", "sustained hold on small edges (3/8–1/2 in) for 20s"],
          ["Antagonist strength", "5/5 band pull-apart reps (15+)"]
        ],
        exercises: [
          {
            name: "Boulder-Specific Training (Short Power-Intensive Routes)",
            load: "near-max bouldering grade", tempo: "explosive movement", reps: "3–4×/week", range: "6–8 problems per session, high intensity",
            subs: ["Campus board (upper-body power)", "Moonboard (consistent difficulty)"]
          },
          {
            name: "Hangboard Training (Finger Strength & Endurance)",
            load: "progressive hold size (3/4 in → 1/2 in → 3/8 in)", tempo: "max-grip hangs, 7–10 sec holds", reps: "2×/week, 15–20 min", range: "full crimp to open hand progressions",
            subs: ["Suspension trainer holds (easier)", "Thick-grip barbell hangs"]
          },
          {
            name: "Sport Route Training (Endurance Climbing, Moderate Grade)",
            load: "1–2 grades below max single-pitch", tempo: "continuous moderate effort", reps: "2×/week", range: "3–5 routes per session, focus on movement quality",
            subs: ["Top-rope endurance circuits", "Auto-belay multi-pitch"]
          },
          {
            name: "Sport-Specific Strength (Upper Body Power, Pulling)",
            load: "moderate–heavy dumbbells 20–30lbs, barbell", tempo: "explosive concentric, controlled eccentric", reps: "2–3×/week, 25–30 min", range: "pull-ups, rows, chin-ups (1–5 reps), dips",
            subs: ["Assisted pull-up machine", "Lat pulldown (high load)"]
          },
          {
            name: "Antagonist & Prevention (Rotator Cuff, Scapular Stability)",
            load: "light band, light dumbbells 5–10lbs", tempo: "controlled 3s/2s", reps: "3×/week, 15–20 min", range: "face pulls, external rotations, band pull-aparts, prone Y-T-W",
            subs: ["Machine rear-delt fly", "Cable face pulls"]
          }
        ]
      },
      {
        name: "Route Climbing & Power-Endurance (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Sport route grade", "+2–3 grade increase from start"],
          ["On-sight ability", "climbing routes 1 grade below max with planning"],
          ["Endurance capacity", "3–5 consecutive hard routes without falling"]
        ],
        exercises: [
          {
            name: "Sport Route Climbing (Goal-Grade Focus)",
            load: "target grade intensity", tempo: "moderate-hard effort", reps: "3–4×/week", range: "2–4 routes per session at goal grade + warm-ups",
            subs: ["Multi-pitch climbing (outdoor progression)", "Gym project focus"]
          },
          {
            name: "Boulder Training (Short Power Bursts, Recovery)",
            load: "near-max grade, short problems", tempo: "explosive movement", reps: "2×/week", range: "3–5 problems per session, focus on crux sequences",
            subs: ["Bouldering for power-endurance (4–5 boulder problems back-to-back)", "Moonboard repeats"]
          },
          {
            name: "Power-Endurance Intervals (Sustained Hard Climbing)",
            load: "climbing at power-endurance pace", tempo: "hard but sustainable", reps: "1–2×/week", range: "3–5 min climbs with 2–3 min rest, 3–4 rounds",
            subs: ["Problem repeats (same boulder, multiple ascents)", "Route repeats"]
          },
          {
            name: "Finger Strength Maintenance (Hangboard or Pulley)",
            load: "established hold size (1/2 in crimp)", tempo: "max-effort 7–10 sec holds", reps: "1–2×/week, 10–15 min", range: "varied hand positions (crimp, open, half-crimp)",
            subs: ["Pulley system (progressive load)", "Spring-loaded training board"]
          },
          {
            name: "Climbing-Specific Strength & Injury Prevention",
            load: "light–moderate dumbbells 15–25lbs", tempo: "controlled 3s/2s", reps: "2×/week, 20–25 min", range: "pull-ups (3–5 reps), rows, external rotations, antagonist band work",
            subs: ["Machine-based strength", "Bodyweight pull-up progressions"]
          }
        ]
      }
    ]
  },

  "Gymnastics_Adult_Conditioning": {
    tier: "fitness",
    category: "bodyweight",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Foundation & Flexibility Building (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Handstand hold", "20 sec against wall"],
          ["Shoulder mobility", "full passive ER/IR ROM"],
          ["Core strength", "60s plank, 30s side-plank per side"]
        ],
        exercises: [
          {
            name: "Handstand Training (Wall-Assisted Progression)",
            load: "bodyweight", tempo: "static hold progression", reps: "5–6×/week, 20–30 min total per day", range: "wall walk-up → hold progression → light movements",
            subs: ["Headstand progressions (easier)", "Chest-to-wall hold (safer early phase)"]
          },
          {
            name: "Shoulder Mobility Work (Dislocations, Wall Slides, Stretching)",
            load: "resistance band or light dowel", tempo: "sustained holds, dynamic movement", reps: "daily, 10–15 min", range: "shoulder dislocations (full ROM), wall slides, passive ER/IR stretches",
            subs: ["Yoga (shoulder focus)", "Flexibility routine"]
          },
          {
            name: "Core Strength Foundation (Planks, Hollow Holds, Bridges)",
            load: "bodyweight", tempo: "isometric holds", reps: "3–4×/week, 20–25 min", range: "planks (front/side), hollow body holds, glute bridges",
            subs: ["Stability ball holds", "Pilates core work"]
          },
          {
            name: "Basic Strength Training (Upper & Lower Body)",
            load: "light dumbbells 5–10lbs, bodyweight", tempo: "controlled 3s/2s", reps: "2–3×/week, 25–30 min", range: "pull-ups, rows, dips (assisted), squats, lunges",
            subs: ["Machine exercises", "Resistance band progressions"]
          },
          {
            name: "Wrist & Ankle Conditioning (Prehab)",
            load: "bodyweight", tempo: "controlled movement", reps: "3–4×/week, 5–10 min", range: "wrist circles, forearm strengthening (reverse wrist curls, squeeze ball), ankle mobility",
            subs: ["Wrist strengthening with light dumbbell", "Resistance band ankle work"]
          }
        ]
      },
      {
        name: "Skill Development & Strength Building (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Handstand hold", "60s free-standing or 30s balance progression"],
          ["Freestanding press handstand", "holds 10–15 sec assisted"],
          ["Pull-up progression", "5+ strict pull-ups (assisted if needed)"],
          ["L-sit hold", "20s on parallettes"]
        ],
        exercises: [
          {
            name: "Handstand Practice (Free-Standing Progression, Hollow Hold Emphasis)",
            load: "bodyweight", tempo: "balance/movement focus", reps: "5–6×/week, 30–40 min total", range: "wall-assisted → balance hold → hand-walking → hollow hold practice",
            subs: ["Assisted handstand holds (spot)", "Handstand on rings (instability challenge)"]
          },
          {
            name: "Press Handstand (Strength Prerequisite for Lower Body Control)",
            load: "bodyweight", tempo: "controlled descent", reps: "3–4×/week, part of main session", range: "pike push-ups → assisted press → hollow hold presses",
            subs: ["Dumbbell shoulder press (light)", "Pike push-up progressions"]
          },
          {
            name: "Strength-Building (Pull-ups, Dips, Rows, Weighted Progression)",
            load: "bodyweight → light weight vest 5–10lbs", tempo: "controlled 3s/2s", reps: "3–4×/week, 30–40 min", range: "pull-ups (5+ reps), dips (assisted → bodyweight), rows (heavy), weighted progressions",
            subs: ["Assisted pull-up machine", "Resistance band pull-up assist", "Lat pulldown (light–moderate load)"]
          },
          {
            name: "Specialized Holds & Skill Work (L-Sit, V-Sit, Manna, Tuck Planche)",
            load: "bodyweight", tempo: "isometric/dynamic holds", reps: "3–4×/week, part of main session", range: "L-sit on parallettes (progression) → V-sit (knees bent) → manna progressions",
            subs: ["Assisted holds (spotter)", "Ring-assisted holds"]
          },
          {
            name: "Rotator Cuff & Shoulder Stability (Face Pulls, External Rotations, Band Work)",
            load: "light band or light dumbbells 5–8lbs", tempo: "controlled 3s/2s", reps: "3×/week, 15–20 min", range: "face pulls, external rotations (cable or band), prone Y-T-W",
            subs: ["Machine face pull", "Band pull-aparts"]
          }
        ]
      },
      {
        name: "Advanced Skills & Power Integration (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Handstand press", "press to free-standing handstand (or holds 15+ sec)"],
          ["Muscle-up", "1 strict muscle-up (or 3+ assisted)"],
          ["Planche hold", "tuck planche 20+ sec"],
          ["Advanced holds", "1-arm handstand progressions or front/back lever tucks"]
        ],
        exercises: [
          {
            name: "Advanced Handstand Skill (Free-Standing, Walking, Movements)",
            load: "bodyweight", tempo: "balance/movement integration", reps: "5–6×/week, 30–45 min total", range: "free-standing holds → hand-walking → HS push-ups → HS shoulder taps",
            subs: ["Handstand walking practice (progression)", "HS on rings (advanced instability)"]
          },
          {
            name: "Planche Progression (Tuck → Straddle → Advanced)",
            load: "bodyweight", tempo: "isometric/dynamic holds", reps: "3–4×/week, part of main session", range: "tuck planche hold → straddle planche hold → one-arm progression",
            subs: ["Assisted planche (spotter)", "Pseudo-planche push-ups"]
          },
          {
            name: "Muscle-Up Training (Pull-Up + Dip Combination)",
            load: "bodyweight", tempo: "explosive pull + dip", reps: "3–4×/week, part of skill session", range: "assisted muscle-ups → jump-assisted → strict muscle-ups",
            subs: ["Band-assisted muscle-ups", "Box-assisted muscle-ups"]
          },
          {
            name: "Front/Back Lever Progressions",
            load: "bodyweight", tempo: "isometric holds on rings", reps: "2–3×/week, part of session", range: "front lever tuck hold → straddle → advanced; back lever progressions",
            subs: ["Assisted holds (support)", "Machine-assisted lever work"]
          },
          {
            name: "Power & Explosive Strength (Plyometrics, Weighted Pull-Ups)",
            load: "light weight vest 5–15lbs, dumbbells", tempo: "explosive concentric, controlled eccentric", reps: "2×/week, 20–25 min", range: "pull-up progressions (weighted, explosively), dips (weighted), handstand walks/pushes",
            subs: ["Plyometric pull-ups (explosive)", "Weighted ring dips"]
          }
        ]
      }
    ]
  },

  "Soccer_Training": {
    tier: "fitness",
    category: "team_sport",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Pre-Season Base & Injury Prevention (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Aerobic base", "4×/week easy running, 20–30 min per session"],
          ["Strength baseline", "<10% limb asymmetry, groin/hip stable"],
          ["Technical proficiency", "ball control + passing accuracy established"]
        ],
        exercises: [
          {
            name: "Aerobic Running (Zone 1–2, Soccer-Specific Footwork)",
            load: "Zone 2 aerobic (60–70% HRmax)", tempo: "conversational pace", reps: "4–5×/week", range: "20–30 min per run",
            subs: ["Sport-specific running (varied direction)", "Agility ladder work"]
          },
          {
            name: "Strength Training (Full-Body, Injury Prevention Emphasis)",
            load: "light–moderate dumbbells 10–20lbs, bodyweight", tempo: "controlled 3s/2s", reps: "2–3×/week, 30–40 min per session", range: "squats, lunges, rows, chest press, core",
            subs: ["Machine exercises", "Resistance band work"]
          },
          {
            name: "Hip & Groin Injury Prevention (Adductor, Hip Flexor, Abductor Work)",
            load: "light resistance band or pillow squeeze", tempo: "controlled 2–3s", reps: "2–3×/week, 15–20 min", range: "Copenhagen squeeze, hip abduction, hip flexor strengthening",
            subs: ["Machine adductor/abductor", "Resistance band work"]
          },
          {
            name: "Ball Mastery & Technical Work (Dribbling, Passing, First Touch)",
            load: "soccer ball", tempo: "submaximal intensity", reps: "3–4×/week, 20–30 min", range: "dribbling drills, passing accuracy, receiving practice",
            subs: ["Small-sided games (low intensity)", "Cone drills"]
          },
          {
            name: "Mobility & Recovery (Flexibility, Soccer-Specific Movements)",
            load: "bodyweight", tempo: "sustained holds", reps: "3–4×/week, 15–20 min", range: "hip flexibility (hip flexor, glute, IT band stretches), groin mobility",
            subs: ["Yoga (soccer-specific)", "Foam rolling"]
          }
        ]
      },
      {
        name: "Build Phase - Sport-Specific Conditioning (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Repeated sprint ability", "6×30m with 30s recovery, <10% decrement"],
          ["Interval capacity", "maintain high intensity for 15+ min total (intervals)"],
          ["Match simulation", "40–60 min controlled game situations without fatigue dropoff"]
        ],
        exercises: [
          {
            name: "Running (Varied Pace + Soccer-Specific Multi-Directional)",
            load: "Zones 1–4 mixed", tempo: "sport-specific pace", reps: "4–5×/week", range: "20–30 min easy runs + 1 workout with speed components",
            subs: ["Sport-specific agility runs (shuttle, cone drills)", "Agility ladder progressions"]
          },
          {
            name: "Interval Training (Repeated Sprint Ability Focus)",
            load: "high-intensity intervals", tempo: "short recovery (30–45s)", reps: "1–2×/week", range: "6–8×30–40m all-out sprints with 30–45s easy jog recovery",
            subs: ["Short intervals (6×200m with 1 min recovery)", "Varied-distance intervals (30m–200m)"]
          },
          {
            name: "90/90 Training (Soccer-Specific Interval Format)",
            load: "high-intensity/easy-intensity alternating", tempo: "90s hard/90s easy", reps: "1×/week", range: "2–4 rounds of 90s hard/90s easy",
            subs: ["Fartlek training", "Sport-specific small-sided game intervals"]
          },
          {
            name: "Strength & Power (Lower Body, Sport-Specific)",
            load: "moderate–heavy dumbbells 15–30lbs, bodyweight", tempo: "controlled 3s/2s", reps: "2–3×/week, 30–35 min", range: "squats, lunges, bounding, single-leg work",
            subs: ["Plyometric box jumps", "Sled push/pull"]
          },
          {
            name: "Match-Specific Training (Small-Sided Games, Positional Drills)",
            load: "match-intensity simulation", tempo: "sport-speed", reps: "2–3×/week, 30–60 min", range: "3v3 games, position-specific circuits, skill + condition integration",
            subs: ["Full-field small-sided games", "Positional skill work"]
          }
        ]
      },
      {
        name: "Competition Phase & Maintenance (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Match fitness", "full 90 min performance at high intensity"],
          ["Recovery speed", "return to high effort within short recovery windows"],
          ["Injury resilience", "full competition participation without limitation"]
        ],
        exercises: [
          {
            name: "Maintenance Running (Easy Aerobic + Fartlek)",
            load: "Zones 1–3 mixed", tempo: "varied pace", reps: "2–3×/week (non-match days)", range: "15–20 min easy runs + 1 with speed play",
            subs: ["Sport-specific agility running", "Shuttle/direction-change runs"]
          },
          {
            name: "Repeated Sprint Ability Maintenance",
            load: "high intensity, short sprints", tempo: "all-out 30–40s efforts", reps: "1×/week (non-match days)", range: "4–6×30m with 45–60s recovery",
            subs: ["Short shuttles", "Soccer-specific high-intensity drills"]
          },
          {
            name: "Strength Maintenance (Lower Body, Sport-Specific)",
            load: "moderate dumbbells 15–25lbs, bodyweight", tempo: "controlled 3s/2s", reps: "1–2×/week (non-match days), 20–25 min", range: "essential movements (squat, lunge, single-leg)", subs: ["Machine-based maintenance", "Bodyweight variations"]
          },
          {
            name: "Technical/Tactical Game Work (Team Training, Matches)",
            load: "match intensity", tempo: "game-pace", reps: "4–5×/week (training + match)", range: "team training (90 min), match play (90 min)",
            subs: ["Smaller field games", "Position-specific drill focus"]
          },
          {
            name: "Injury Prevention & Recovery (Groin/Hip/Knee Focus)",
            load: "light resistance, bodyweight", tempo: "controlled", reps: "2–3×/week (post-match/training)", range: "adductor/abductor maintenance, hip mobility, foam rolling",
            subs: ["Physiotherapy maintenance", "Preventive strength circuits"]
          }
        ]
      }
    ]
  },

  "Basketball_Training": {
    tier: "fitness",
    category: "team_sport",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Pre-Season Base & Power Development (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Aerobic base", "4×/week easy running, 20–25 min per session"],
          ["Vertical jump baseline", "establish testing standard (reach, peak height)"],
          ["Lower limb strength", "<10% quad/hamstring asymmetry bilaterally"]
        ],
        exercises: [
          {
            name: "Aerobic Running (Zone 1–2, Varied Terrain)",
            load: "Zone 2 aerobic (60–70% HRmax)", tempo: "conversational pace", reps: "4–5×/week", range: "20–25 min per run",
            subs: ["Sport-specific running (varied direction, court simulation)", "Elliptical (low-impact)"]
          },
          {
            name: "Plyometric & Jump Training (Vertical Jump Development)",
            load: "bodyweight", tempo: "explosive concentric", reps: "2–3×/week, 20–25 min", range: "box jumps, broad jumps, bounding, single-leg hops",
            subs: ["Jump rope progression", "Double-leg hops (easier)"]
          },
          {
            name: "Strength Training (Lower Body Emphasis, Quad/Hamstring Balance)",
            load: "light–moderate dumbbells 10–20lbs, bodyweight", tempo: "controlled 3s/2s", reps: "2–3×/week, 30–35 min", range: "squats, lunges, RDLs, hamstring work",
            subs: ["Machine leg press", "Leg curl machine"]
          },
          {
            name: "Ball Mastery & Court Skills (Dribbling, Shooting, Ball Handling)",
            load: "basketball", tempo: "submaximal intensity", reps: "3–4×/week, 20–30 min", range: "ballhandling drills, shooting practice, court footwork",
            subs: ["Small-sided games (low intensity)", "Shooting drills only"]
          },
          {
            name: "Mobility & Ankle/Knee Stability (Prevention)",
            load: "bodyweight, light resistance band", tempo: "controlled movement", reps: "3–4×/week, 15–20 min", range: "ankle mobility, single-leg balance, IT band/quad flexibility",
            subs: ["Yoga (court-specific)", "Foam rolling focus on lower body"]
          }
        ]
      },
      {
        name: "In-Season Build - Sport-Specific Conditioning (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Repeated sprint ability", "8×15–20s sprints with 15–20s recovery, <10% decrement"],
          ["Vertical jump improvement", "3–5in increase from baseline"],
          ["Court conditioning", "full 40 min simulation game at match intensity"]
        ],
        exercises: [
          {
            name: "Running (Sport-Specific Multi-Directional + Varied Pace)",
            load: "Zones 1–4 mixed, basketball-specific cuts", tempo: "sport-specific pace", reps: "3–4×/week", range: "15–20 min easy + 1 workout with speed/cutting",
            subs: ["Court agility drills", "Lateral shuffles + cuts"]
          },
          {
            name: "High-Intensity Interval Training (Basketball-Specific Repeats)",
            load: "high-intensity intervals, basketball-specific movements", tempo: "short recovery (15–20s)", reps: "1–2×/week", range: "8×15–20s sprints with 15–20s recovery, or court sprints",
            subs: ["Shuttle runs (basketball-pace)", "Court-based interval drills"]
          },
          {
            name: "Plyometric & Cutting Training (Agility, Change of Direction)",
            load: "bodyweight", tempo: "explosive movements", reps: "2×/week, 20–25 min", range: "single-leg bounding, lateral bounds, plyometric cuts, cutting drills",
            subs: ["Pro-agility drill", "T-drill (basketball specific)"]
          },
          {
            name: "Strength Maintenance (Lower Body, Sport-Specific)",
            load: "moderate dumbbells 15–25lbs, bodyweight", tempo: "controlled 3s/2s", reps: "1–2×/week, 20–25 min", range: "single-leg squats, lunges, hamstring eccentric work",
            subs: ["Machine exercises", "Isometric holds"]
          },
          {
            name: "Court-Specific Game Training (Team Practice, Drills, Scrimmages)",
            load: "match-intensity simulation", tempo: "game-pace", reps: "3–4×/week, 40–60 min team practice", range: "offensive/defensive drill circuits, 5v5 scrimmages, position-specific work",
            subs: ["Smaller court games", "Skill-specific drill focus"]
          }
        ]
      },
      {
        name: "Competition Phase - In-Season Maintenance (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Match fitness", "full game performance (4 quarters) at high intensity"],
          ["Injury resilience", "full competition participation without limiting injuries"],
          ["Performance maintenance", "vertical jump within 5% of peak, speed maintained"]
        ],
        exercises: [
          {
            name: "Maintenance Running (Low-Intensity Recovery Runs)",
            load: "Zone 1–2 easy", tempo: "conversational pace", reps: "1–2×/week (non-game days)", range: "10–15 min light runs",
            subs: ["Cross-training (bike/elliptical)", "Active recovery"]
          },
          {
            name: "Repeated Sprint/Agility Drills (Sport-Specific Maintenance)",
            load: "basketball-specific intensity", tempo: "sport-speed cuts/sprints", reps: "1×/week (non-game days)", range: "court agility circuits, 4–6×20m sprints",
            subs: ["Shuttle runs (reduced volume)", "Court cutting drills"]
          },
          {
            name: "Strength Maintenance (Lower Body, Quick Sessions)",
            load: "light–moderate dumbbells 10–20lbs", tempo: "controlled", reps: "1×/week (non-game days), 15–20 min", range: "essential movements (squat, lunge), emphasis on injury prevention",
            subs: ["Bodyweight circuits", "Machine-based (quick)"]
          },
          {
            name: "Team Practice & Game Play",
            load: "match intensity", tempo: "game-pace", reps: "4–5×/week (2–3 practices + 1–2 games)", range: "team practices (60–90 min), competitive games (40 min+ per team)",
            subs: ["Scrimmage focus", "Skill development drills"]
          },
          {
            name: "Recovery & Injury Prevention (Post-Game/Practice)",
            load: "light stretching, mobility work", tempo: "controlled, restorative", reps: "daily post-activity", range: "10–15 min stretching, ankle/knee stability work, foam rolling",
            subs: ["Physiotherapy maintenance", "Ice/compression protocols"]
          }
        ]
      }
    ]
  },

  "CrossFit_Training": {
    tier: "fitness",
    category: "crossfit",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Foundational Skill & Capacity Building (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Olympic lift technique", "air squats → PVC pass-throughs → empty bar technique established"],
          ["Bodyweight capacity", "5+ strict pull-ups, 15+ push-ups, 20+ air squats continuous"],
          ["Aerobic base", "10 min easy running/rowing/biking without stopping"]
        ],
        exercises: [
          {
            name: "Olympic Lift Technique (Empty Bar → Light Load Progression)",
            load: "PVC → empty bar (45lbs) → 65lbs", tempo: "explosive triple extension, controlled descent", reps: "3–4×/week, 15–20 min per session", range: "power clean, power snatch, overhead squat technique focus",
            subs: ["Dumbbell versions (power)", "Machine-based Olympic variations"]
          },
          {
            name: "Gymnastics Movement Basics (Pull-Ups, Push-Ups, Muscle-Up Progressions)",
            load: "bodyweight", tempo: "controlled tempo work", reps: "3–4×/week, part of daily sessions", range: "pull-up progressions (assisted/bands), push-up variations, dip progressions",
            subs: ["Ring work (progression)", "Band-assisted movements"]
          },
          {
            name: "Aerobic Capacity (Steady-State Base)",
            load: "Zone 2 aerobic, submaximal intensity", tempo: "conversational pace", reps: "3–4×/week, 10–15 min per session", range: "running/rowing/biking steady state or low-intensity CrossFit WOD",
            subs: ["Swimming (low intensity)", "Elliptical (low impact)"]
          },
          {
            name: "Metabolic Conditioning (Moderate Intensity, Varied Format)",
            load: "submaximal intensity, mixed movements", tempo: "moderate effort, 10–15 min", reps: "2–3×/week", range: "Tabata (20/10), EMOM (every min on the min), AMRAP (as many reps as possible in time) formats",
            subs: ["Circuit training", "Interval work (structured)"]
          },
          {
            name: "Strength Foundation (Squat, Deadlift, Press Progressions)",
            load: "light dumbbells 10–15lbs, bodyweight", tempo: "controlled 3s/2s", reps: "2–3×/week, 15–20 min", range: "goblet squats, dumbbell deadlifts, dumbbell presses, rows",
            subs: ["Machine exercises", "Kettlebell work"]
          }
        ]
      },
      {
        name: "Strength Block & Skill Refinement (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Olympic lift 1RM", "establish baseline power clean, power snatch, overhead squat"],
          ["Gymnastics capacity", "muscle-up attempts, 10+ strict pull-ups, 20+ push-ups"],
          ["Work capacity", "20 min moderate-intensity WOD sustainability"]
        ],
        exercises: [
          {
            name: "Olympic Lifting (Strength Focus, Progressive Load)",
            load: "50–70% 1RM progression", tempo: "explosive triple extension, controlled", reps: "3–4×/week, 20–25 min per session", range: "power clean, power snatch, squat, press singles/doubles (3–5 reps per set)",
            subs: ["Hang variations (squat/power)", "Complexes (multiple movements per set)"]
          },
          {
            name: "Advanced Gymnastics (Muscle-Ups, Handstand Push-Ups, Advanced Holds)",
            load: "bodyweight, light weight vest (5lbs)", tempo: "explosive pull-ups + transitions, controlled presses", reps: "3–4×/week, part of daily sessions", range: "muscle-up progressions, HSPU progressions, L-sit hold progressions",
            subs: ["Band-assisted muscle-ups", "Box-assisted HSPU"]
          },
          {
            name: "Strength Block (Squat, Deadlift, Press Cyclical)",
            load: "60–80% 1RM progression, +5–10% weekly", tempo: "controlled 3s/2s (eccentric emphasis)", reps: "3–4×/week, 25–30 min", range: "back squat, deadlift, overhead press, front squat (4–5 reps, 3–4 sets)",
            subs: ["Machine-based strength", "Dumbbell/kettlebell versions"]
          },
          {
            name: "Aerobic Capacity (Longer Steady-State or Threshold)",
            load: "Zone 2–3 aerobic/threshold mixed", tempo: "sustained moderate pace", reps: "2–3×/week, 15–20 min per session", range: "rowing/biking/running threshold intervals or extended steady state",
            subs: ["Long-distance WOD", "Aerobic intervals"]
          },
          {
            name: "Metabolic Conditioning (Higher Intensity, Varied WOD Formats)",
            load: "high-intensity, mixed movements", tempo: "competitive effort, 12–20 min", reps: "2–3×/week", range: "AMRAP, EMOM, Tabata, Chipper-style (extended working sets) WODs",
            subs: ["Individual movement drills", "Lighter load conditioning"]
          }
        ]
      },
      {
        name: "Power & Competition Phase (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Olympic lift 1RM progress", "+5–10% from start of block"],
          ["Gymnastics capacity", "3–5 muscle-ups consecutive, advanced holds sustained"],
          ["Anaerobic capacity", "high-intensity WOD (Fran-style: 21-15-9 pull-ups/thrusters) <10 min"]
        ],
        exercises: [
          {
            name: "Power Emphasis (Olympic Lifts, Plyometrics)",
            load: "55–65% 1RM with speed emphasis, bodyweight plyometrics", tempo: "explosive movement, controlled descent", reps: "3–4×/week, 20–25 min per session", range: "power clean/snatch (3 reps, multiple sets for speed), box jumps, broad jumps, med ball throws",
            subs: ["Dumbbell power movements", "Kettlebell swings (explosive)"]
          },
          {
            name: "Advanced Gymnastics & Competition Prep (Advanced Holds, Scaled Movements)",
            load: "bodyweight, progressive weight vests", tempo: "sport-speed", reps: "3–4×/week, part of daily sessions", range: "muscle-up practice, HSPU practice, toes-to-bar, advanced pull-up variations",
            subs: ["Ring muscle-ups (advanced)", "Double-unders (jump rope)"]
          },
          {
            name: "Competition-Style WODs (AMRAP, Chipper, Hero WODs)",
            load: "moderate–high intensity, mixed modality", tempo: "competitive pace", reps: "2–3×/week, 15–25 min per WOD", range: "benchmark WODs (Fran, Helen, Murph variations), competition simulation",
            subs: ["Scaled versions (lighter load, modifications)", "Modified time domains"]
          },
          {
            name: "Maintenance Strength (Squat, Press, Deadlift Touch)",
            load: "70–75% 1RM (moderate load)", tempo: "controlled", reps: "1–2×/week, 15–20 min", range: "3–5 reps per movement, focus on movement quality",
            subs: ["Variation exercises", "Accessory work (assistance)"]
          },
          {
            name: "Aerobic Recovery Workouts (Light Conditioning, Active Recovery)",
            load: "Zone 1–2 easy, light movement", tempo: "submaximal intensity", reps: "1–2×/week (non-WOD days or post-intense sessions)", range: "10–15 min easy row/bike/run, or light movement-based WOD",
            subs: ["Yoga", "Walking recovery"]
          }
        ]
      }
    ]
  },

  "Swimming_Training": {
    tier: "fitness",
    category: "endurance",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Base Aerobic Building (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Aerobic base", "4–5 swim sessions/week, 2000–3000m per session, 80% at Zone 2 pace"],
          ["Technique stability", "consistent stroke mechanics at sustained pace"],
          ["Shoulder health", "no pain, full ROM, rotator cuff engaged"]
        ],
        exercises: [
          {
            name: "Easy Pace Aerobic Swimming (Zone 2, Steady State)",
            load: "Zone 2 aerobic (60–70% max HR)", tempo: "conversational pace (if possible)—sustainable effort", reps: "4–5×/week", range: "2000–3000m per session at steady pace",
            subs: ["Pull-buoy drill (reduced kick load)", "Kickboard work (kick focus)"]
          },
          {
            name: "Long Swim (Aerobic Endurance Base)",
            load: "Zone 1–2 easy pace", tempo: "sustainable, easy effort", reps: "1×/week", range: "3000–4000m continuous at easy pace, or 2×2000m with 2–3 min rest",
            subs: ["Varied-stroke long swim (mix strokes)", "Open water swim (if available)"]
          },
          {
            name: "Technique & Drill Work (Stroke Efficiency Development)",
            load: "submaximal intensity, drill-based", tempo: "controlled movement", reps: "2–3×/week, 500–1000m per session", range: "kick drills, pull drills, catch drills, balance work",
            subs: ["Kickboard-only sets", "Pull-buoy sets"]
          },
          {
            name: "Dry-Land Strength (Upper Body, Rotator Cuff Focus)",
            load: "light dumbbells 3–8lbs, resistance band", tempo: "controlled 3s/2s", reps: "2–3×/week, 20–25 min per session", range: "rows, lat pulldowns, external rotations, prone Y-T-W",
            subs: ["Machine-based strength", "Cable work"]
          },
          {
            name: "Core & Stability Work (Swimming-Specific Core, Balance Hold)",
            load: "bodyweight", tempo: "isometric/dynamic holds", reps: "2–3×/week, 10–15 min", range: "planks, side-planks, hollow holds, Pilates core work",
            subs: ["Yoga (core focus)", "Pilates swimming-specific"]
          }
        ]
      },
      {
        name: "Build Phase - Threshold & Intervals (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Threshold pace", "1–2 sets of 300m–400m at threshold pace (88–92% max HR)"],
          ["VO2 max capacity", "6–8×150m or 8–10×100m at VO2 max pace with 20–30s rest"],
          ["Total weekly volume", "12,000–16,000m per week (erg + pool combined)"]
        ],
        exercises: [
          {
            name: "Easy Aerobic Swimming (Maintenance Pace, Recovery Emphasis)",
            load: "Zone 1–2 easy pace", tempo: "conversational pace", reps: "2–3×/week", range: "1500–2000m per session",
            subs: ["Kick/pull combinations (varied emphasis)"]
          },
          {
            name: "Threshold Swimming (Lactate Threshold Work)",
            load: "Zone 4 threshold (88–92% max HR)", tempo: "comfortably hard", reps: "1–2×/week", range: "2×300m or 400m at threshold pace (after warm-up) with 1–2 min recovery",
            subs: ["Pyramid threshold (200-300-400-300-200m segments)", "Step-ladder (increasing pace per rep)"]
          },
          {
            name: "VO2 Max Intervals (High Intensity, Short Repeats)",
            load: "Zone 5 (95–100% max HR)", tempo: "hard, short repeats", reps: "1×/week", range: "8–10×100m at 100% pace or 6–8×150m at 95% pace, 20–30s recovery",
            subs: ["Descending repeats (faster each rep)", "200m repeats (fewer reps, longer distance)"]
          },
          {
            name: "Tempo/Endurance Swimming (Extended Threshold Work)",
            load: "Zone 3–4 threshold/moderate", tempo: "sustained moderate effort", reps: "1×/week", range: "1–2×800m at tempo pace with 2 min rest, or 1200m continuous",
            subs: ["Broken sets (500m + 500m + 200m)", "Ladder sets"]
          },
          {
            name: "Dry-Land Conditioning (Strength + Power, Swimming-Specific)",
            load: "moderate dumbbells 8–15lbs, explosive movements", tempo: "controlled/explosive", reps: "2–3×/week, 25–30 min per session", range: "rows (heavy), pull-ups, dips, med ball throws, plyometric work",
            subs: ["Machine-based (rowing machine load)", "Cable pull-downs (heavy)"]
          }
        ]
      },
      {
        name: "Peak & Taper (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Peak 200m–400m time", "personal best performance"],
          ["Short-race pace capacity", "sustained high intensity for 4–6 min"],
          ["Taper week 15–16", "50% volume, maintain intensity stroke quality"]
        ],
        exercises: [
          {
            name: "Easy Recovery Swimming (Taper Volume Reduction)",
            load: "Zone 1–2 easy", tempo: "conversational pace", reps: "2–3×/week (taper: 1–2×/week wk 15–16)", range: "1000–1500m per session",
            subs: ["Drill-based swimming", "Kickboard work"]
          },
          {
            name: "Peak Interval Work (Race-Pace Simulation)",
            load: "race-pace intensity (200m–400m pace)", tempo: "race effort", reps: "1×/week (wk 13–14)", range: "3–4×200m at race pace or 2×400m at race pace with 2–3 min rest",
            subs: ["Descending 300-200-100m", "Step ladder (accelerating pace)"]
          },
          {
            name: "Threshold Sharpening (Short Threshold Sets)",
            load: "Zone 4 threshold, shorter distance", tempo: "hard but controlled", reps: "1×/week (wk 13–14)", range: "3–4×150m at threshold pace or 2×200m, with 1.5 min rest",
            subs: ["Pyramid (100-200-100)", "Power 50s (short bursts)"]
          },
          {
            name: "Sprint Finisher (Short High-Intensity, Maintenance)",
            load: "Zone 5 high intensity, very short", tempo: "all-out 25–50s sprints", reps: "1×/week (wk 13–14)", range: "6–8×50m at 100% effort with 30–45s recovery",
            subs: ["Speed work (sprinting technique)", "Acceleration repeats"]
          },
          {
            name: "Maintenance Dry-Land (Light Strength, Prevention Focus)",
            load: "light dumbbells 5–10lbs", tempo: "controlled", reps: "1×/week (wk 15–16), 15–20 min", range: "rotator cuff work, core stability, injury prevention circuits",
            subs: ["Bodyweight circuits", "Stretching/mobility focus"]
          }
        ]
      }
    ]
  },

  "Multi_Sport_Athletes": {
    tier: "fitness",
    category: "mixed_sports",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Base Fitness Across Modalities (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Aerobic base (mixed)", "4–5×/week cross-training (run/bike/swim), 20–30 min per session"],
          ["Movement quality", "established baseline fitness and injury-free status"],
          ["Sport-specific skills", "baseline proficiency in each sport"]
        ],
        exercises: [
          {
            name: "Primary Sport Training (70% Time Allocation)",
            load: "sport-specific intensity", tempo: "varied pace per sport", reps: "3–4×/week primary sport", range: "20–40 min per session, emphasis on skill + aerobic base",
            subs: ["Sport-specific drills only", "Reduced volume (maintenance mode)"]
          },
          {
            name: "Complementary Sport Conditioning (30% Time Allocation)",
            load: "secondary sport intensity", tempo: "lower intensity (aerobic focus)", reps: "2–3×/week secondary sport", range: "15–25 min per session, aerobic base emphasis",
            subs: ["Cross-training substitute (third sport)", "Reduced frequency (1×/week)"]
          },
          {
            name: "Aerobic Base Cross-Training (Mixed Modality)",
            load: "Zone 1–2 aerobic, varied intensity", tempo: "conversational pace", reps: "2–3×/week additional", range: "15–20 min per session (beyond primary/secondary sport)",
            subs: ["Extended primary sport (aerobic)", "Reduced frequency (1×/week)"]
          },
          {
            name: "General Strength Training (Full-Body, Injury Prevention)",
            load: "light–moderate resistance", tempo: "controlled 3s/2s", reps: "2×/week, 25–30 min per session", range: "compound movements (squat, deadlift, press, row), multi-planar",
            subs: ["Sport-specific strength circuits", "Machine-based full-body"]
          },
          {
            name: "Mobility & Sport-Specific Prehab (Flexibility, Core, Stability)",
            load: "bodyweight, light resistance", tempo: "sustained holds", reps: "3–4×/week, 10–15 min", range: "sport-specific flexibility (shoulder for swimmer, hips for runner), core, balance",
            subs: ["Yoga (multi-sport)", "Pilates (multi-sport)"]
          }
        ]
      },
      {
        name: "Sport-Specific Conditioning Build (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Primary sport conditioning", "specific fitness improvements (time/pace/power) evident"],
          ["Secondary sport maintenance", "consistent performance, no deconditioning"],
          ["General strength progress", "5–10% improvement in baseline strength measures"]
        ],
        exercises: [
          {
            name: "Primary Sport Build (70% Time, Increased Intensity)",
            load: "primary sport intensity escalation", tempo: "sport-specific pace (higher intensity)", reps: "3–4×/week primary sport", range: "25–45 min per session, includes speed/power work",
            subs: ["Extended duration (steady-state)", "Reduced intensity (aerobic focus)"]
          },
          {
            name: "Sport-Specific Intervals (Primary Sport)",
            load: "high-intensity sport-specific efforts", tempo: "short-recovery intervals", reps: "1×/week primary sport", range: "sport-specific interval format (e.g., running: 6×400m; cycling: 5×3 min; swimming: 8×100m)",
            subs: ["Threshold work", "Extended moderate intervals"]
          },
          {
            name: "Complementary Sport Maintenance (30% Time, Aerobic Focus)",
            load: "secondary sport, submaximal intensity", tempo: "easy pace", reps: "2×/week secondary sport", range: "15–20 min per session, aerobic base maintenance",
            subs: ["Skills work (no intensity)", "Reduced frequency (1×/week)"]
          },
          {
            name: "Cross-Training for Adaptability (Mixed Modalities)",
            load: "varied intensity, mixed sports", tempo: "sport-specific pace", reps: "1–2×/week tertiary sport or varied", range: "15–20 min per session",
            subs: ["Extended primary sport (extra session)", "Reduced frequency"]
          },
          {
            name: "Strength & Power Development (Sport-Specific Emphasis)",
            load: "moderate–heavy resistance, explosive movements", tempo: "explosive concentric/controlled eccentric", reps: "2–3×/week, 30–35 min per session", range: "compound lifts (plyometrics, Olympic lifts, power-based)", range: "periodized per primary sport demands",
            subs: ["Sport-specific strength circuits", "Machine-based power development"]
          }
        ]
      },
      {
        name: "Competition Phase & Maintenance (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Primary sport competition readiness", "peak fitness for competition"],
          ["Injury resilience", "full participation in both sports without limitation"],
          ["Performance maintenance", "fitness levels sustained at peak across both sports"]
        ],
        exercises: [
          {
            name: "Primary Sport Competition Focus (70% Time, Match-Ready)",
            load: "competition/match intensity", tempo: "game/race-pace", reps: "3–4×/week primary sport (training + competition)", range: "30–90 min per session depending on sport, competition simulation, match play",
            subs: ["Reduced training (maintenance)", "Extended competition schedule"]
          },
          {
            name: "Primary Sport Maintenance Sessions (Speed, Power Maintenance)",
            load: "sport-specific intensity, shorter duration", tempo: "high-intensity repeats or sprints", reps: "1×/week (non-competition day)", range: "15–20 min speed/power work (interval repeats, short-duration efforts)",
            subs: ["Skill-specific drill work", "Light technical practice"]
          },
          {
            name: "Complementary Sport Play/Competition (30% Time)",
            load: "secondary sport competition/match intensity", tempo: "game/sport-pace", reps: "2–3×/week secondary sport (training + competition)", range: "20–60 min per session, competition or scrimmage format",
            subs: ["Reduced frequency (1× competition)", "Skill-focused training only"]
          },
          {
            name: "Strength Maintenance (Essential Lifts Only, Light Load)",
            load: "light–moderate resistance", tempo: "controlled", reps: "1×/week (non-competition days), 15–20 min", range: "essential compound movements (quick circuit), emphasis on injury prevention",
            subs: ["Bodyweight circuits", "Isometric holds"]
          },
          {
            name: "Recovery & Sport-Specific Prehab (Injury Prevention, Mobility)",
            load: "light/no load, mobility focus", tempo: "recovery-based", reps: "2–3×/week post-competition/training", range: "15–20 min mobility, stretching, foam rolling (focus on high-use areas per sport)",
            subs: ["Massage/physiotherapy", "Yoga/tai chi (recovery)"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // ELBOW / WRIST / HAND — added 20 Aug 2026, region didn't exist before this.
  // Staged loading (isometric → isotonic/eccentric → heavy-slow-resistance)
  // follows the general tendinopathy-loading principle both the JOSPT CPGs and
  // the eccentric-exercise literature converge on; TFCC's phase count and named
  // outcome measures are drawn directly from Tse 2023's actual 5-phase program.
  // Exercise-level dosing (sets/reps/tempo) is standard clinical practice, same
  // convention as the rest of this file — not itself citation-sourced; see
  // PROTOCOL_CLINICAL in clinic-demo.html for what IS sourced and to what.
  // ============================================================================

  "Lateral_Epicondylalgia": {
    tier: "injury",
    category: "elbow_wrist_hand",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Isometric & Load Management (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Resisted wrist extension", "pain ≤3/10"],
          ["Pain-free grip", "≥50% uninjured side"]
        ],
        exercises: [
          {
            name: "Isometric Wrist Extension (Mid-Range)",
            load: "pain-free resistance", tempo: "5×45s hold", reps: "5×45s, 2×/day", range: "neutral wrist",
            subs: ["Isometric hold against wall", "Theraband isometric (light tension)"]
          },
          {
            name: "Pain-Free Grip Squeeze",
            load: "soft ball / putty", tempo: "3s squeeze/3s release", reps: "3×15", range: "full grip, pain-free only",
            subs: ["Towel squeeze", "Therapy putty (light resistance)"]
          },
          {
            name: "Activity Modification & Bracing (Counterforce Strap)",
            load: "none", tempo: "as needed", reps: "worn during aggravating tasks", range: "n/a",
            subs: ["Wrist splint (night use)", "Task pacing (reduce repetition load)"]
          }
        ]
      },
      {
        name: "Progressive Isotonic & Eccentric Loading (Weeks 4–8)",
        wks: 5,
        gates: [
          ["PRTEE score", "≤40"],
          ["Grip strength", "≥70% uninjured side"],
          ["Resisted extension", "pain-free through range"]
        ],
        exercises: [
          {
            name: "Eccentric Wrist Extension (Over Edge)",
            load: "light dumbbell, progress weekly", tempo: "3s lower, assist back up", reps: "3×15", range: "full wrist extension to flexion",
            subs: ["Theraband eccentric extension", "Flexbar eccentric twist"]
          },
          {
            name: "Isotonic Wrist Extension",
            load: "light–moderate dumbbell", tempo: "2s up/2s down", reps: "3×12", range: "full ROM",
            subs: ["Cable wrist extension", "Band-resisted extension"]
          },
          {
            name: "Grip & Forearm Pronation/Supination",
            load: "light hammer or weighted bar", tempo: "controlled", reps: "3×12 each direction", range: "full rotation",
            subs: ["Theraband rotation", "Wrist roller (light load)"]
          }
        ]
      },
      {
        name: "Heavy Slow Resistance & Return to Task (Weeks 9–12)",
        wks: 4,
        gates: [
          ["PRTEE score", "≤15"],
          ["Grip strength", "≥90% uninjured side"],
          ["Sport/work task tolerance", "full load, no next-day flare"]
        ],
        exercises: [
          {
            name: "Heavy Slow Resistance Wrist Extension",
            load: "progressive to near-maximal tolerable", tempo: "3s up/3s down", reps: "3×8", range: "full ROM",
            subs: ["Weighted flexbar", "Cable column heavy extension"]
          },
          {
            name: "Sport/Task-Specific Loading",
            load: "task-equivalent (racquet, tool)", tempo: "task-speed", reps: "progressive volume", range: "full task range",
            subs: ["Simulated work task circuit", "Racquet-specific drills at reduced then full intensity"]
          }
        ]
      }
    ]
  },

  "Medial_Epicondylalgia": {
    tier: "injury",
    category: "elbow_wrist_hand",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Isometric & Load Management (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Resisted wrist flexion", "pain ≤3/10"],
          ["Ulnar nerve provocation", "negative / no paraesthesia"]
        ],
        exercises: [
          {
            name: "Isometric Wrist Flexion (Mid-Range)",
            load: "pain-free resistance", tempo: "5×45s hold", reps: "5×45s, 2×/day", range: "neutral wrist",
            subs: ["Isometric hold against wall", "Theraband isometric (light tension)"]
          },
          {
            name: "Pain-Free Grip Squeeze",
            load: "soft ball / putty", tempo: "3s squeeze/3s release", reps: "3×15", range: "full grip, pain-free only",
            subs: ["Towel squeeze", "Therapy putty (light resistance)"]
          },
          {
            name: "Ulnar Nerve Glide (Passive)",
            load: "none", tempo: "slow, no lingering at end range", reps: "3×10", range: "cubital-tunnel-friendly path only",
            subs: ["Median/radial nerve glide if ulnar irritable", "Active-assisted glide (self-paced)"]
          }
        ]
      },
      {
        name: "Progressive Isotonic & Eccentric Loading (Weeks 4–8)",
        wks: 5,
        gates: [
          ["Grip strength", "≥70% uninjured side"],
          ["Resisted flexion/pronation", "pain-free through range"],
          ["Ulnar nerve symptoms", "none with loading"]
        ],
        exercises: [
          {
            name: "Eccentric Wrist Flexion (Over Edge)",
            load: "light dumbbell, progress weekly", tempo: "3s lower, assist back up", reps: "3×15", range: "full wrist flexion to extension",
            subs: ["Theraband eccentric flexion", "Flexbar eccentric twist (flexor bias)"]
          },
          {
            name: "Isotonic Wrist Flexion & Pronation",
            load: "light–moderate dumbbell", tempo: "2s up/2s down", reps: "3×12", range: "full ROM",
            subs: ["Cable wrist flexion", "Band-resisted pronation"]
          },
          {
            name: "Grip & Forearm Loading",
            load: "light hammer or weighted bar", tempo: "controlled", reps: "3×12 each direction", range: "full rotation",
            subs: ["Theraband rotation", "Wrist roller (light load)"]
          }
        ]
      },
      {
        name: "Heavy Slow Resistance & Return to Task (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Grip strength", "≥90% uninjured side"],
          ["Valgus stress at elbow", "pain-free, stable"],
          ["Sport/work task tolerance", "full load, no next-day flare"]
        ],
        exercises: [
          {
            name: "Heavy Slow Resistance Wrist Flexion",
            load: "progressive to near-maximal tolerable", tempo: "3s up/3s down", reps: "3×8", range: "full ROM",
            subs: ["Weighted flexbar (flexor bias)", "Cable column heavy flexion"]
          },
          {
            name: "Throwing/Task-Specific Progressive Loading",
            load: "task-equivalent (ball, tool, club)", tempo: "task-speed", reps: "progressive volume", range: "full task range",
            subs: ["Simulated work task circuit", "Interval throwing or swing programme at reduced then full intensity"]
          }
        ]
      }
    ]
  },

  "Carpal_Tunnel_Syndrome": {
    tier: "injury",
    category: "elbow_wrist_hand",
    arc: 8,
    evidence: [],
    phases: [
      {
        name: "Symptom Control & Nerve Gliding (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Night-time paraesthesia", "reduced frequency"],
          ["Boston CTQ symptom severity", "improving trend"]
        ],
        exercises: [
          {
            name: "Median Nerve Glide (Tendon Gliding Sequence)",
            load: "none", tempo: "slow, no lingering at end range", reps: "5 reps, 3×/day", range: "through the 6-position tendon-gliding sequence",
            subs: ["Median nerve glide (mobilising, not stretching)", "Reduced-range glide if symptoms provoked"]
          },
          {
            name: "Night Splinting (Neutral Wrist)",
            load: "none", tempo: "worn overnight", reps: "nightly", range: "neutral wrist position",
            subs: ["Prefabricated wrist splint", "Custom-moulded splint"]
          },
          {
            name: "Ergonomic & Load Modification",
            load: "none", tempo: "as needed", reps: "throughout aggravating tasks", range: "n/a",
            subs: ["Keyboard/mouse repositioning", "Task-break scheduling"]
          }
        ]
      },
      {
        name: "Progressive Loading (Weeks 4–6)",
        wks: 3,
        gates: [
          ["Grip strength", "≥70% uninjured side"],
          ["2-point discrimination", "within normal limits or improving"]
        ],
        exercises: [
          {
            name: "Wrist Extension/Flexion (Isotonic)",
            load: "light dumbbell or band", tempo: "2s up/2s down", reps: "3×12", range: "full ROM, symptom-free",
            subs: ["Band-resisted flexion/extension", "Cable wrist curls (light)"]
          },
          {
            name: "Grip Strengthening (Progressive)",
            load: "hand gripper or putty, progress weekly", tempo: "2s squeeze/2s release", reps: "3×15", range: "full grip",
            subs: ["Therapy putty (progressive resistance)", "Spring-loaded hand gripper"]
          }
        ]
      },
      {
        name: "Return to Task (Weeks 7–8)",
        wks: 2,
        gates: [
          ["Grip strength", "≥90% uninjured side"],
          ["Boston CTQ functional status", "at or near baseline for the role"]
        ],
        exercises: [
          {
            name: "Task-Specific Loading (Typing / Manual Task)",
            load: "task-equivalent", tempo: "task-speed with scheduled breaks", reps: "progressive duration", range: "full task range",
            subs: ["Simulated workstation circuit", "Graded return-to-role hours"]
          }
        ]
      }
    ]
  },

  "De_Quervains_Tenosynovitis": {
    tier: "injury",
    category: "elbow_wrist_hand",
    arc: 8,
    evidence: [],
    phases: [
      {
        name: "Orthosis & Symptom Control (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Finkelstein test", "pain reducing"],
          ["Rest pain", "≤3/10"]
        ],
        exercises: [
          {
            name: "Thumb Spica Orthosis (Full-Time Wear)",
            load: "none", tempo: "worn continuously except hygiene", reps: "daily", range: "thumb and wrist immobilised",
            subs: ["Prefabricated thumb spica splint", "Custom-moulded orthosis"]
          },
          {
            name: "Pain-Free AROM (Wrist & Thumb, Out of Splint)",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "pain-free arc only",
            subs: ["Passive range maintenance", "Tendon glide (thumb, light)"]
          },
          {
            name: "Activity Modification (Repetitive Grip/Pinch)",
            load: "none", tempo: "as needed", reps: "throughout aggravating tasks", range: "n/a",
            subs: ["Task pacing", "Adaptive grip tools (reduce thumb load)"]
          }
        ]
      },
      {
        name: "Progressive Tendon Loading (Weeks 4–6)",
        wks: 3,
        gates: [
          ["QuickDASH score", "improving trend"],
          ["Resisted thumb abduction/extension", "pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Isometric Thumb Abduction/Extension",
            load: "pain-free resistance", tempo: "5×30s hold", reps: "5×30s, 2×/day", range: "mid-range",
            subs: ["Theraband isometric (light)", "Manual resistance (self-applied)"]
          },
          {
            name: "Progressive Isotonic Thumb Loading",
            load: "light band or putty", tempo: "2s up/2s down", reps: "3×12", range: "full pain-free ROM",
            subs: ["Therapy putty pinch/abduction", "Light dumbbell wrist radial deviation"]
          }
        ]
      },
      {
        name: "Return to Grip & Pinch Tasks (Weeks 7–8)",
        wks: 2,
        gates: [
          ["Pinch strength", "≥90% uninjured side"],
          ["QuickDASH score", "≤10"]
        ],
        exercises: [
          {
            name: "Task-Specific Grip & Pinch Loading",
            load: "task-equivalent", tempo: "task-speed", reps: "progressive volume", range: "full task range",
            subs: ["Lifting/carrying with thumb-loaded grip", "Fine motor task circuit (typing, tool use)"]
          }
        ]
      }
    ]
  },

  "TFCC_Injury": {
    tier: "injury",
    category: "elbow_wrist_hand",
    arc: 15,
    evidence: [],
    phases: [
      {
        name: "Protect & Orthosis (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Rest pain (NPRS)", "≤3/10"],
          ["DRUJ stability grade", "no worsening"]
        ],
        exercises: [
          {
            name: "Wrist/DRUJ Orthosis (Immobilisation)",
            load: "none", tempo: "worn per protocol", reps: "daily", range: "wrist and forearm rotation restricted",
            subs: ["Short-arm splint", "Long-arm splint if foveal/DRUJ involvement"]
          },
          {
            name: "Pain-Free Digit Mobility (Fingers, Elbow, Shoulder)",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "full, wrist excluded",
            subs: ["Tendon glides (digits)", "Putty squeeze (light, pain-free)"]
          }
        ]
      },
      {
        name: "Controlled Motion & Early Strength (Weeks 4–9)",
        wks: 6,
        gates: [
          ["Wrist ROM (flex/ext, sup/pron)", "≥75% uninjured side"],
          ["Power grip", "≥50% uninjured side"],
          ["ADL pain score", "improving trend"]
        ],
        exercises: [
          {
            name: "Active Wrist ROM (Flexion/Extension)",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "pain-free arc, progressing weekly",
            subs: ["Wrist AAROM with contralateral hand assist", "Wand-assisted forearm rotation"]
          },
          {
            name: "Isometric Grip & Wrist Stabilisation",
            load: "pain-free resistance", tempo: "5×30s hold", reps: "5×30s", range: "neutral wrist",
            subs: ["Putty squeeze (progressive)", "Band isometric hold"]
          },
          {
            name: "Forearm Pronation/Supination (Light)",
            load: "light hammer or band", tempo: "controlled", reps: "3×12", range: "pain-free rotation",
            subs: ["Theraband rotation", "Wrist roller (light load)"]
          }
        ]
      },
      {
        name: "Progressive Strength & Proprioception (Weeks 10–15)",
        wks: 6,
        gates: [
          ["PRWE score", "≤15"],
          ["Power grip", "≥90% uninjured side"],
          ["DRUJ stability", "stable under load"]
        ],
        exercises: [
          {
            name: "Progressive Resisted Wrist & Forearm Loading",
            load: "light–moderate dumbbell or band, progress weekly", tempo: "2s up/2s down", reps: "3×12", range: "full ROM",
            subs: ["Cable wrist/forearm work", "Weighted wrist roller"]
          },
          {
            name: "Closed-Chain Weight-Bearing Progression",
            load: "bodyweight, progress to dynamic", tempo: "controlled", reps: "3×10", range: "quadruped to push-up plane, pain-free",
            subs: ["Quadruped weight shifts", "Wall push-up progression to floor push-up"]
          },
          {
            name: "Task/Sport-Specific Loading",
            load: "task-equivalent (racquet, bat, tool)", tempo: "task-speed", reps: "progressive volume", range: "full task range",
            subs: ["Simulated work task circuit", "Racquet/bat-specific drills at reduced then full intensity"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // ELBOW / WRIST / HAND — three more, added 21 Aug 2026, closing the gaps the
  // practising physio partner flagged against this region's original five.
  // Distal_Radius_Fracture: wrist-specific successor to the generic
  // Post_Fracture_Recovery entry (see that key, still in this file) — same
  // arc length, but gates and grip-strength benchmarks now trace to
  // wrist-fracture-specific cohort data (Takeuchi et al. 2016) rather than
  // being written generically. Trigger_Finger: built the requested 3-phase
  // shape, but the citations backing it argue AGAINST exercise being the
  // active ingredient — Choi et al. 2025 found tendon-gliding exercise added
  // no benefit over splinting/injection alone. Read this one skeptically; see
  // PROTOCOL-REVIEW.md for the honest version of that argument. UCL_Injury:
  // built as nonoperative/conservative management (there is no separate UCL
  // reconstruction entry in this taxonomy) — Rettig et al. 2001's 42%
  // return-to-play figure and Walker et al. 2021's 85% figure are the SAME
  // underlying condition studied 20 years apart with different tear-severity
  // selection, not a contradiction to paper over.
  // ============================================================================

  "Distal_Radius_Fracture": {
    tier: "injury",
    category: "elbow_wrist_hand",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Protect & Early Mobilisation (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Physician/surgical clearance for wrist AROM", "confirmed (cast removed or ORIF stable)"],
          ["Digit/elbow/shoulder ROM", "full, no stiffness"],
          ["Wrist/hand swelling", "<1cm circumference diff"],
          ["Rest pain (NPRS)", "≤3/10"]
        ],
        exercises: [
          {
            name: "Digit Tendon Glide (Full Fist Sequence)",
            load: "none", tempo: "5s hold per position", reps: "5 reps, 3×/day", range: "straight → hook → full fist → straight",
            subs: ["Composite finger flexion/extension", "Thumb opposition sequence"]
          },
          {
            name: "Elbow & Shoulder AROM (Unrestricted Joints)",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "full",
            subs: ["Pendulum shoulder swings", "Active elbow flexion/extension out of sling"]
          },
          {
            name: "Pain-Free Wrist AROM (Out of Splint)",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "pain-free arc only, progressing weekly",
            subs: ["Wrist AAROM with contralateral hand assist", "Putty-assisted wrist circles"]
          },
          {
            name: "Oedema Management (Elevation & Retrograde Massage)",
            load: "none", tempo: "continuous", reps: "20+ min sessions, 3×/day", range: "n/a",
            subs: ["Compression glove", "Contrast bathing once wound closed"]
          },
          {
            name: "Submaximal Grip Activation (Putty/Towel)",
            load: "soft putty or towel", tempo: "3s squeeze/3s release", reps: "3×15, pain-free only", range: "full grip",
            subs: ["Therapy putty (light resistance)", "Sponge squeeze"]
          }
        ]
      },
      {
        name: "Progressive Loading & Strengthening (Weeks 5–10)",
        wks: 6,
        gates: [
          ["Wrist ROM (flex/ext, sup/pron)", "≥75% uninjured side"],
          ["Grip strength", "≥70% uninjured side"],
          ["PRWE score", "clinically meaningful improvement from baseline (>11.5 points)"],
          ["Pain with resisted loading", "≤3/10"]
        ],
        exercises: [
          {
            name: "Active Wrist ROM (Flexion/Extension/Deviation)",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "progressing weekly toward full",
            subs: ["Wand-assisted forearm rotation", "Table wrist slides"]
          },
          {
            name: "Isotonic Wrist Flexion/Extension",
            load: "light dumbbell or band", tempo: "2s up/2s down", reps: "3×12", range: "full ROM",
            subs: ["Cable wrist curls (light)", "Theraband flexion/extension"]
          },
          {
            name: "Forearm Pronation/Supination (Loaded)",
            load: "light hammer or band", tempo: "controlled", reps: "3×12 each direction", range: "full rotation",
            subs: ["Wrist roller (light load)", "Theraband rotation"]
          },
          {
            name: "Progressive Grip Strengthening",
            load: "hand gripper or putty, progress weekly", tempo: "2s squeeze/2s release", reps: "3×15", range: "full grip",
            subs: ["Spring-loaded hand gripper", "Therapy putty (progressive resistance)"]
          },
          {
            name: "Closed-Chain Wrist Loading (Quadruped Weight Shift)",
            load: "bodyweight, progress to dynamic", tempo: "controlled", reps: "3×10", range: "quadruped to wall push-up plane, pain-free",
            subs: ["Wall push-up progression to floor push-up", "Weight-shift on table edge"]
          }
        ]
      },
      {
        name: "Return to Function & Load (Weeks 11–16)",
        wks: 6,
        gates: [
          ["Grip strength", "≥90% uninjured side"],
          ["Wrist ROM", "≥90% uninjured side"],
          ["PRWE score", "≤15"],
          ["Sport/work task tolerance", "full load, no next-day flare"]
        ],
        exercises: [
          {
            name: "Progressive Resisted Wrist & Forearm Loading",
            load: "light–moderate dumbbell or band, progress weekly", tempo: "2s up/2s down", reps: "3×12", range: "full ROM",
            subs: ["Cable wrist/forearm work", "Weighted wrist roller"]
          },
          {
            name: "Weight-Bearing Progression (Push-Up Plane)",
            load: "bodyweight", tempo: "controlled", reps: "3×10", range: "full press-up range, pain-free",
            subs: ["Incline push-up", "Plank with weight shift"]
          },
          {
            name: "Task/Sport-Specific Loading",
            load: "task-equivalent (tool, racquet, weight-training bar)", tempo: "task-speed", reps: "progressive volume", range: "full task range",
            subs: ["Simulated work task circuit", "Racquet/bat-specific drills at reduced then full intensity"]
          },
          {
            name: "Wrist Proprioception & Perturbation",
            load: "light", tempo: "controlled", reps: "3×10", range: "multi-planar",
            subs: ["Wobble board weight-bearing", "Rhythmic stabilisation (manual perturbation)"]
          }
        ]
      }
    ]
  },

  "Trigger_Finger": {
    tier: "injury",
    category: "elbow_wrist_hand",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Orthosis & Symptom Control (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Quinnell grade", "improving trend"],
          ["Triggering/locking frequency", "reduced"],
          ["Rest pain (NPRS)", "≤3/10"]
        ],
        exercises: [
          {
            name: "MCP/PIP Joint Orthosis (Blocking Splint)",
            load: "none", tempo: "worn per protocol (day and/or night per severity)", reps: "continuous, 6–10 weeks", range: "MCP or PIP joint immobilised, IP joints free",
            subs: ["Prefabricated ring/trigger-finger splint", "Custom-moulded orthosis"]
          },
          {
            name: "Pain-Free Composite Digit AROM",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "pain-free arc only, out of splint",
            subs: ["Passive range maintenance (uninvolved digits)", "Tendon glide (light, pain-free)"]
          },
          {
            name: "Activity Modification (Repetitive Grip/Pinch)",
            load: "none", tempo: "as needed", reps: "throughout aggravating tasks", range: "n/a",
            subs: ["Task pacing", "Adaptive grip tools (reduce flexor tendon load)"]
          }
        ]
      },
      {
        name: "Continued Immobilisation ± Injection Adjunct (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Quinnell grade", "0–1 (normal or uneven movement; actively correctable triggering is grade II)"],
          ["Triggering with active motion", "resolved or markedly reduced"],
          ["Corticosteroid injection response (if given)", "symptom relief sustained ≥4 weeks"]
        ],
        exercises: [
          {
            name: "Continued Orthosis Wear (Weaning as Symptoms Allow)",
            load: "none", tempo: "per tolerance", reps: "daytime wean, night wear continues", range: "n/a",
            subs: ["Buddy-taping during high-load tasks", "Part-time splint (symptomatic activities only)"]
          },
          {
            name: "Tendon Gliding Sequence (Adjunct, Not Primary Treatment)",
            load: "none", tempo: "slow, no lingering at end range", reps: "5 reps, 3×/day", range: "straight → hook → full fist → straight",
            subs: ["Composite fist with thumb opposition", "Blocked PIP/DIP glide"]
          },
          {
            name: "Pain-Free Grip Squeeze",
            load: "soft ball / putty", tempo: "3s squeeze/3s release", reps: "3×15", range: "full grip, pain-free only",
            subs: ["Towel squeeze", "Therapy putty (light resistance)"]
          }
        ]
      },
      {
        name: "Gradual Return to Grip & Pinch Tasks (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Triggering with functional grip/pinch tasks", "none"],
          ["Grip/pinch strength", "≥90% uninjured side"],
          ["Quinnell grade", "0"]
        ],
        exercises: [
          {
            name: "Task-Specific Grip & Pinch Loading",
            load: "task-equivalent", tempo: "task-speed", reps: "progressive volume", range: "full task range",
            subs: ["Lifting/carrying with full grip", "Fine motor task circuit (typing, tool use)"]
          },
          {
            name: "Progressive Resisted Grip Strengthening",
            load: "hand gripper or putty, progress weekly", tempo: "2s squeeze/2s release", reps: "3×15", range: "full grip",
            subs: ["Spring-loaded hand gripper", "Graduated resistance putty"]
          }
        ]
      }
    ]
  },

  "UCL_Injury": {
    tier: "injury",
    category: "elbow_wrist_hand",
    arc: 20,
    evidence: [],
    phases: [
      {
        name: "Protect & Restore (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Valgus stress test", "pain-free"],
          ["Elbow flexion/extension ROM", "full, pain-free, matches contralateral"],
          ["Rest/ADL pain", "none"]
        ],
        exercises: [
          {
            name: "Isometric Elbow Flexor–Pronator Mass Activation",
            load: "pain-free resistance", tempo: "5×20s hold", reps: "5×20s, 2×/day", range: "neutral, avoiding valgus load",
            subs: ["Isometric wrist flexion (light)", "Theraband isometric (light tension)"]
          },
          {
            name: "Rotator Cuff & Scapulothoracic Activation",
            load: "pain-free resistance", tempo: "3s hold", reps: "3×15", range: "mid-range",
            subs: ["Isometric ER/IR at 0° abduction", "Scapular setting (retraction/depression)"]
          },
          {
            name: "Forearm Pronation/Supination (Isometric)",
            load: "pain-free resistance", tempo: "5×15s hold", reps: "3×15s", range: "neutral",
            subs: ["Manual resistance (self-applied)", "Light band isometric hold"]
          },
          {
            name: "Kinetic Chain Conditioning (Core & Lower Half)",
            load: "bodyweight", tempo: "controlled", reps: "3×12", range: "full",
            subs: ["Single-leg balance work", "Hip/trunk rotational stability drills"]
          }
        ]
      },
      {
        name: "Progressive Strengthening (Weeks 5–10)",
        wks: 6,
        gates: [
          ["Grip & forearm strength", "≥90% uninjured side"],
          ["Rotator cuff/scapular strength", "symmetric, pain-free resisted testing"],
          ["Valgus stress test (manual, moderate load)", "pain-free"],
          ["KJOC score", "improving trend toward pre-injury baseline"]
        ],
        exercises: [
          {
            name: "Isotonic Elbow Flexion/Extension",
            load: "light dumbbell", tempo: "2s up/2s down", reps: "3×12", range: "full ROM",
            subs: ["Cable elbow flexion/extension", "Band-resisted flexion/extension"]
          },
          {
            name: "Forearm Pronation/Supination (Loaded)",
            load: "light hammer or band", tempo: "controlled", reps: "3×12 each direction", range: "full rotation",
            subs: ["Wrist roller (light load)", "Theraband rotation"]
          },
          {
            name: "Rotator Cuff Strengthening (ER/IR at 0° and 90°)",
            load: "light band or cable", tempo: "2s contraction/2s release", reps: "3×12", range: "full",
            subs: ["Prone horizontal abduction", "Sidelying external rotation"]
          },
          {
            name: "Scapular Stability (Rows, Y-T-W)",
            load: "light band or dumbbell", tempo: "controlled", reps: "3×12 each", range: "full",
            subs: ["Prone T-raise", "Face pulls (light)"]
          },
          {
            name: "Kinetic-Chain Plyometric Prep (Med-Ball Chest Pass)",
            load: "light medicine ball (2–4lbs)", tempo: "explosive release, controlled catch", reps: "3×10", range: "full extension",
            subs: ["Rotational med-ball throw (non-elbow-dominant)", "Two-hand overhead med-ball throw"]
          }
        ]
      },
      {
        name: "Interval Throwing & Return to Competition (Weeks 11–20)",
        wks: 10,
        gates: [
          ["Interval throwing programme – flat-ground phase", "completed pain-free"],
          ["Valgus stress test (full-effort throwing load)", "pain-free"],
          ["KJOC score", "at or near pre-injury baseline"],
          ["Mound/game-speed throwing or sport-specific loading", "full effort, no next-day elbow pain"]
        ],
        exercises: [
          {
            name: "Interval Throwing Programme (Flat-Ground Progression)",
            load: "n/a (progressive distance)", tempo: "per programme (rest day between outings)", reps: "progressive distance 30ft → 120ft", range: "n/a",
            subs: ["Position/age-specific throwing programme (distance-based)", "Return-to-tennis/golf interval swing programme (non-baseball throwers)"]
          },
          {
            name: "Mound Progression (Pitchers)",
            load: "progressive effort %", tempo: "per programme", reps: "progressive pitch count & intensity", range: "n/a",
            subs: ["Bullpen simulation", "Simulated at-bats"]
          },
          {
            name: "Rotator Cuff & Scapular Maintenance Strengthening",
            load: "light–moderate band or dumbbell", tempo: "controlled", reps: "3×12", range: "full",
            subs: ["Prone Y-T-W", "Cable ER/IR at 90°"]
          },
          {
            name: "Sport-Specific Velocity/Mechanics Work",
            load: "n/a", tempo: "progressive intensity", reps: "coach-supervised sessions", range: "n/a",
            subs: ["Video-assisted mechanics review", "Pitch-count-monitored bullpen"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // ELBOW / WRIST / HAND — two more, added 21 Aug 2026 (second gap-analysis
  // pass, same physio partner), closing named gaps against the now-eight-entry
  // region. Elbow_Osteoarthritis: distinct from the epicondylalgia (tendon)
  // entries — degenerative joint disease, not tendinopathy. Elbow-OA-specific
  // dosed-exercise literature is essentially nonexistent (searched directly;
  // nothing found beyond narrative reviews confirming conservative treatment
  // as first-line). The one number that DOES ground a gate — Morrey, Askew &
  // Chao 1981's 30-130° flexion/100° rotation "functional arc" — is a
  // biomechanics paper, not a treatment trial. The rest of the phase structure
  // borrows general upper-limb-OA principles (mostly from hand OA literature,
  // the nearest joint with any real exercise-therapy evidence) and says so.
  // Scaphoid_Fracture: distinct from Distal_Radius_Fracture — different bone,
  // and the retrograde blood supply gives it a real nonunion/AVN risk profile
  // the distal radius doesn't have. This one has unusually strong evidence
  // behind it (the Dias/SWIFFT RCT programme spans 2005-2020) — the gate that
  // matters most is imaging-confirmed union before any resisted loading,
  // held as a hard Phase 1 exit criterion rather than a soft target.
  // ============================================================================

  "Elbow_Osteoarthritis": {
    tier: "injury",
    category: "elbow_wrist_hand",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Symptom Modulation & Functional-Arc ROM (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Pain at rest (NPRS)", "≤3/10"],
          ["Elbow flexion/extension arc", "progressing toward 30–130° (Morrey et al. 1981 functional arc)"],
          ["Forearm pronation/supination", "progressing toward 50°/50°"],
          ["Isometric loading tolerance", "tolerated without flare >24h"]
        ],
        exercises: [
          {
            name: "Pain-Free AROM Flexion/Extension (Functional-Arc Focus)",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "pain-free arc, working toward 30–130°",
            subs: ["Wand-assisted AAROM", "Table slide flexion/extension"]
          },
          {
            name: "Forearm Pronation/Supination AROM",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "pain-free arc, working toward 50°/50°",
            subs: ["Wand-assisted forearm rotation", "Manual contralateral-assisted rotation"]
          },
          {
            name: "Isometric Elbow Flexor/Extensor Activation",
            load: "pain-free resistance", tempo: "5×10s hold", reps: "3×10", range: "mid-range",
            subs: ["Isometric wrist flexion/extension (light)", "Theraband isometric (light tension)"]
          },
          {
            name: "Joint Protection & Load-Management Education",
            load: "none", tempo: "n/a", reps: "1 session + written material", range: "n/a",
            subs: ["Activity/task modification for heavy-lifting or repetitive-loading occupations", "Home programme with red-flag guidance"]
          }
        ]
      },
      {
        name: "Progressive Strengthening (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Functional elbow arc (30–130° flexion/extension)", "achieved, or at patient's practical ceiling"],
          ["Manual muscle strength (flexion/extension/pronation/supination)", "improved ≥1 MMT grade or by dynamometry"],
          ["Pain during ADLs (lifting, carrying, dressing)", "≤3/10"],
          ["Grip strength", "improving trend toward uninjured side"]
        ],
        exercises: [
          {
            name: "Isotonic Elbow Flexion/Extension",
            load: "light dumbbell or band", tempo: "2s up/2s down", reps: "3×12", range: "full functional arc",
            subs: ["Cable elbow flexion/extension", "Band-resisted flexion/extension"]
          },
          {
            name: "Forearm Pronation/Supination (Loaded)",
            load: "light hammer or band", tempo: "controlled", reps: "3×12 each direction", range: "full rotation",
            subs: ["Wrist roller (light load)", "Theraband rotation"]
          },
          {
            name: "Progressive Grip Strengthening",
            load: "hand gripper or putty, progress weekly", tempo: "2s squeeze/2s release", reps: "3×15", range: "full grip",
            subs: ["Spring-loaded hand gripper", "Therapy putty (progressive resistance)"]
          },
          {
            name: "Scapular & Shoulder Girdle Strengthening",
            load: "light band", tempo: "controlled", reps: "3×12", range: "full",
            subs: ["Rows", "Prone Y-T-W (light)"]
          }
        ]
      },
      {
        name: "Function & Shared-Decision Checkpoint (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Functional elbow arc", "maintained pain-free through 30–130°/50°-50° for ADL tasks"],
          ["Pain with functional/occupational loading (lifting, gripping)", "≤3/10, no flare >24h"],
          ["Home programme adherence", "≥70% of supervised sessions attended"],
          ["Shared-decision conversation held", "continue conservative management vs. orthopaedic referral (injection/surgical) if plateaued"]
        ],
        exercises: [
          {
            name: "Progressive Resistance Elbow & Forearm Training",
            load: "light–moderate dumbbell or band, progress weekly", tempo: "2s up/2s down", reps: "3×8–12", range: "full functional arc",
            subs: ["Cable elbow/forearm work", "Weighted wrist roller"]
          },
          {
            name: "Functional Task Loading (Carrying, Lifting, Occupational Simulation)",
            load: "task-equivalent", tempo: "task-speed", reps: "3×10", range: "full task range",
            subs: ["Loaded carry (farmer's walk, light)", "Simulated work-task circuit"]
          },
          {
            name: "Maintenance Stretching / Mobility Programme",
            load: "none", tempo: "sustained end-range hold", reps: "daily", range: "full functional arc",
            subs: ["Self-stretch flexion/extension", "Self-stretch pronation/supination"]
          },
          {
            name: "Re-Assessment & Referral Discussion",
            load: "n/a", tempo: "n/a", reps: "n/a", range: "n/a",
            subs: ["Not an exercise — shared-decision checkpoint"]
          }
        ]
      }
    ]
  },

  "Scaphoid_Fracture": {
    tier: "injury",
    category: "elbow_wrist_hand",
    arc: 20,
    evidence: [],
    phases: [
      {
        name: "Protect & Immobilisation (Weeks 1–8)",
        wks: 8,
        gates: [
          ["Imaging-confirmed union (CT, or clearly bridging trabeculae on radiograph)", "confirmed by treating surgeon — required before Phase 2 loading"],
          ["Digit/elbow/shoulder ROM (unrestricted joints)", "full, no stiffness"],
          ["Cast/splint compliance", "maintained per surgeon's protocol (6–10 weeks; extended for proximal-pole fractures)"],
          ["Rest pain (NPRS)", "≤3/10"]
        ],
        exercises: [
          {
            name: "Digit Tendon Glide (Full Fist Sequence)",
            load: "none", tempo: "5s hold per position", reps: "5 reps, 3×/day", range: "straight → hook → full fist → straight",
            subs: ["Composite finger flexion/extension", "Thumb IP joint AROM only (MCP/CMC free per splint design)"]
          },
          {
            name: "Elbow & Shoulder AROM (Unrestricted Joints)",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "full",
            subs: ["Pendulum shoulder swings", "Active elbow flexion/extension out of sling"]
          },
          {
            name: "Oedema Management (Elevation & Retrograde Massage)",
            load: "none", tempo: "continuous", reps: "20+ min sessions, 3×/day", range: "n/a",
            subs: ["Compression glove (digits only)", "Contrast bathing once wound closed, if ORIF"]
          },
          {
            name: "Submaximal Isometric Grip Activation (If Permitted by Cast/Splint Design)",
            load: "none or soft putty", tempo: "3s squeeze/3s release", reps: "3×10, pain-free only", range: "within splint tolerance",
            subs: ["Isometric finger flexion against light resistance", "Skip entirely if splint design restricts hand function"]
          },
          {
            name: "Patient Education: Nonunion/AVN Risk & Splint Compliance",
            load: "none", tempo: "n/a", reps: "1 session + written material", range: "n/a",
            subs: ["Written home programme with red-flag guidance", "Verbal review of why early splint removal or premature loading raises nonunion/AVN risk"]
          }
        ]
      },
      {
        name: "Progressive Loading & Strengthening (Weeks 9–14)",
        wks: 6,
        gates: [
          ["Wrist ROM (flex/ext, radial/ulnar deviation)", "≥75% uninjured side"],
          ["Grip strength", "≥70% uninjured side"],
          ["PRWE score", "clinically meaningful improvement from baseline (>11.5 points)"],
          ["Pain with resisted loading", "≤3/10"]
        ],
        exercises: [
          {
            name: "Active/Active-Assisted Wrist ROM (Flexion/Extension/Deviation)",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "progressing weekly toward full",
            subs: ["Wand-assisted forearm rotation", "Table wrist slides"]
          },
          {
            name: "Forearm Pronation/Supination (AROM Progressing to Light Resistance)",
            load: "none, then light band", tempo: "controlled", reps: "3×12 each direction", range: "full rotation",
            subs: ["Wrist roller (light load)", "Theraband rotation"]
          },
          {
            name: "Progressive Grip Strengthening",
            load: "hand gripper or putty, progress weekly", tempo: "2s squeeze/2s release", reps: "3×15", range: "full grip",
            subs: ["Spring-loaded hand gripper", "Therapy putty (progressive resistance)"]
          },
          {
            name: "Closed-Chain Wrist Loading (Quadruped Weight Shift)",
            load: "bodyweight, progress to dynamic", tempo: "controlled", reps: "3×10", range: "quadruped to wall push-up plane, pain-free",
            subs: ["Wall push-up progression to floor push-up", "Weight-shift on table edge"]
          }
        ]
      },
      {
        name: "Return to Function, Sport & Impact Loading (Weeks 15–20)",
        wks: 6,
        gates: [
          ["Grip strength", "≥90% uninjured side"],
          ["Wrist ROM", "≥90% uninjured side, pain-free"],
          ["Pain with weight-bearing through the wrist (push-up plane)", "none"],
          ["Sport/work/impact task tolerance", "full load, no next-day flare; surgeon clearance for contact/collision sport if applicable"]
        ],
        exercises: [
          {
            name: "Progressive Resisted Wrist & Forearm Loading",
            load: "light–moderate dumbbell or band, progress weekly", tempo: "2s up/2s down", reps: "3×12", range: "full ROM",
            subs: ["Cable wrist/forearm work", "Weighted wrist roller"]
          },
          {
            name: "Weight-Bearing Progression (Push-Up Plane)",
            load: "bodyweight", tempo: "controlled", reps: "3×10", range: "full press-up range, pain-free",
            subs: ["Incline push-up", "Plank with weight shift"]
          },
          {
            name: "Task/Sport-Specific Loading",
            load: "task-equivalent (tool, racquet, climbing hold, weight-training bar)", tempo: "task-speed", reps: "progressive volume", range: "full task range",
            subs: ["Simulated work task circuit", "Sport-specific drills at reduced then full intensity"]
          },
          {
            name: "Wrist Proprioception & Perturbation",
            load: "light", tempo: "controlled", reps: "3×10", range: "multi-planar",
            subs: ["Wobble board weight-bearing", "Rhythmic stabilisation (manual perturbation)"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // SPINE — added 20 Aug 2026, filling five of the six gaps against the
  // original taxonomy table (lumbar spine gets four; cervicogenic headache is
  // the sixth). Cervical radiculopathy is deliberately left out of this pass —
  // 'Cervical strain / whiplash' already covers the region and a second
  // cervical presentation needs its own sourcing round, not a rushed one.
  // (That round happened 21 Aug 2026 — see Neck_Pain_Nonspecific and
  // Cervical_Radiculopathy near the end of this file.)
  // ============================================================================

  "Lumbar_Disc_Related": {
    tier: "injury",
    category: "lumbar_spine",
    arc: 10,
    evidence: [],
    phases: [
      {
        name: "Symptom Modulation & Education (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Centralisation of leg symptoms", "yes, or symptoms proximal only"],
          ["Rest pain (VAS)", "≤4/10"]
        ],
        exercises: [
          {
            name: "Directional Preference Exercise (Extension Bias)",
            load: "bodyweight", tempo: "slow, sustained end-range", reps: "10 reps, hourly if centralising", range: "pain-free extension, stop if peripheralising",
            subs: ["Prone lying (passive extension)", "Standing extension"]
          },
          {
            name: "Walking (Symptom-Limited)",
            load: "none", tempo: "steady pace", reps: "3×10 min/day, build as tolerated", range: "n/a",
            subs: ["Pool walking (unloaded)", "Stationary bike (upright, short bouts)"]
          }
        ]
      },
      {
        name: "Progressive Loading (Weeks 4–7)",
        wks: 4,
        gates: [
          ["Oswestry Disability Index", "≤30%"],
          ["Forward bend tolerance", "functional range, pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Progressive Hip Hinge / Deadlift Pattern",
            load: "light, progress weekly", tempo: "2s down/2s up", reps: "3×10", range: "pain-free hip hinge",
            subs: ["Kettlebell deadlift (light)", "Trap-bar deadlift (light)"]
          },
          {
            name: "Core Endurance (Anti-Extension/Anti-Rotation)",
            load: "bodyweight", tempo: "sustained hold", reps: "3×30–45s", range: "neutral spine",
            subs: ["Pallof press", "Dead bug", "Bird dog"]
          }
        ]
      },
      {
        name: "Return to Function (Weeks 8–10)",
        wks: 3,
        gates: [
          ["Oswestry Disability Index", "≤10%"],
          ["Loaded lift tolerance", "task-equivalent load, pain-free"]
        ],
        exercises: [
          {
            name: "Progressive Loaded Lifting (Task-Specific)",
            load: "progressive to work/sport-equivalent", tempo: "controlled", reps: "3×8", range: "full functional range",
            subs: ["Farmer's carry (progressive load)", "Sport-specific loaded movement"]
          }
        ]
      }
    ]
  },

  "Lumbar_Radiculopathy": {
    tier: "injury",
    category: "lumbar_spine",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Neural Symptom Control (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Straight leg raise", "improving degree, or pain-free"],
          ["Distal neurological signs", "stable or improving, not worsening"]
        ],
        exercises: [
          {
            name: "Nerve Glide (Sciatic, Sliders)",
            load: "none", tempo: "slow, no lingering at end range", reps: "3×10", range: "symptom-limited, non-provocative",
            subs: ["Seated slump nerve mobilisation (gentle)", "Reduced-range glide if irritable"]
          },
          {
            name: "Directional Preference / Positional Relief",
            load: "bodyweight", tempo: "sustained", reps: "as tolerated", range: "the position that centralises symptoms",
            subs: ["Prone lying", "Side-lying with pillow support"]
          }
        ]
      },
      {
        name: "Progressive Loading & Neural Mobility (Weeks 5–9)",
        wks: 5,
        gates: [
          ["Oswestry Disability Index", "≤30%"],
          ["Leg symptom distribution", "reduced, more proximal"]
        ],
        exercises: [
          {
            name: "Core Endurance (Anti-Extension/Anti-Rotation)",
            load: "bodyweight", tempo: "sustained hold", reps: "3×30–45s", range: "neutral spine",
            subs: ["Pallof press", "Dead bug", "Bird dog"]
          },
          {
            name: "Progressive Hip Hinge Pattern",
            load: "light, progress weekly", tempo: "2s down/2s up", reps: "3×10", range: "pain-free hip hinge",
            subs: ["Kettlebell deadlift (light)", "Trap-bar deadlift (light)"]
          }
        ]
      },
      {
        name: "Return to Function / Sport (Weeks 10–12)",
        wks: 3,
        gates: [
          ["Oswestry Disability Index", "≤10%"],
          ["Neural tension tolerance", "full range, symptom-free"]
        ],
        exercises: [
          {
            name: "Progressive Loaded Lifting (Task-Specific)",
            load: "progressive to work/sport-equivalent", tempo: "controlled", reps: "3×8", range: "full functional range",
            subs: ["Farmer's carry (progressive load)", "Sport-specific loaded movement"]
          }
        ]
      }
    ]
  },

  "Lumbar_Facet_Related": {
    tier: "injury",
    category: "lumbar_spine",
    arc: 8,
    evidence: [],
    phases: [
      {
        name: "Pain Control & Extension Avoidance (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Pain with extension/rotation", "≤4/10"],
          ["Rest pain", "≤3/10"]
        ],
        exercises: [
          {
            name: "Flexion-Biased Positional Relief",
            load: "none", tempo: "sustained", reps: "as needed", range: "comfortable flexion",
            subs: ["Knees-to-chest (supine)", "Child's pose"]
          },
          {
            name: "Walking (Symptom-Limited)",
            load: "none", tempo: "steady pace", reps: "3×10 min/day, build as tolerated", range: "n/a",
            subs: ["Pool walking (unloaded)", "Stationary bike (upright, short bouts)"]
          }
        ]
      },
      {
        name: "Progressive Flexion-Biased Strengthening (Weeks 3–6)",
        wks: 4,
        gates: [
          ["Oswestry Disability Index", "≤25%"],
          ["Extension tolerance", "improving, pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Core Endurance (Anti-Extension/Anti-Rotation)",
            load: "bodyweight", tempo: "sustained hold", reps: "3×30–45s", range: "neutral to flexed spine",
            subs: ["Dead bug", "Bird dog", "Pallof press"]
          },
          {
            name: "Progressive Hip Hinge Pattern",
            load: "light, progress weekly", tempo: "2s down/2s up", reps: "3×10", range: "pain-free hip hinge",
            subs: ["Kettlebell deadlift (light)", "Goblet squat (light)"]
          }
        ]
      },
      {
        name: "Return to Function (Weeks 7–8)",
        wks: 2,
        gates: [
          ["Oswestry Disability Index", "≤10%"],
          ["Extension-loaded task tolerance", "task-equivalent, pain-free"]
        ],
        exercises: [
          {
            name: "Progressive Loaded Lifting (Task-Specific)",
            load: "progressive to work/sport-equivalent", tempo: "controlled", reps: "3×8", range: "full functional range",
            subs: ["Farmer's carry (progressive load)", "Sport-specific loaded movement"]
          }
        ]
      }
    ]
  },

  "Spondylolysis": {
    tier: "injury",
    category: "lumbar_spine",
    arc: 20,
    evidence: [],
    phases: [
      {
        name: "Activity Cessation & Bracing (Weeks 1–12)",
        wks: 12,
        gates: [
          ["Rest pain", "resolving"],
          ["Bony healing on CT (3 months)", "present or improving"]
        ],
        exercises: [
          {
            name: "Thoracolumbosacral Orthosis (Full-Time Wear)",
            load: "none", tempo: "worn per protocol", reps: "daily, per prescription", range: "lumbar spine restricted",
            subs: ["Bone growth stimulator (adjunct, per prescription)"]
          },
          {
            name: "Pain-Free Non-Spinal Conditioning",
            load: "none/light", tempo: "steady", reps: "as tolerated", range: "upper body / non-axial only",
            subs: ["Stationary bike (upright, brace on)", "Pool walking (brace-permitting)"]
          }
        ]
      },
      {
        name: "Core-Strengthening Rehabilitation (Weeks 13–18)",
        wks: 6,
        gates: [
          ["Core endurance hold", "≥45s, pain-free"],
          ["Extension tolerance", "full range, pain-free"]
        ],
        exercises: [
          {
            name: "Core Endurance (Anti-Extension/Anti-Rotation)",
            load: "bodyweight", tempo: "sustained hold", reps: "3×30–45s", range: "neutral spine",
            subs: ["Dead bug", "Bird dog", "Pallof press"]
          },
          {
            name: "Progressive Hip Hinge Pattern",
            load: "light, progress weekly", tempo: "2s down/2s up", reps: "3×10", range: "pain-free hip hinge",
            subs: ["Kettlebell deadlift (light)", "Goblet squat (light)"]
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 19–20)",
        wks: 2,
        gates: [
          ["Sport-specific loading tolerance", "full intensity, pain-free"],
          ["Core endurance hold", "≥60s, pain-free"]
        ],
        exercises: [
          {
            name: "Sport-Specific Progressive Loading",
            load: "sport-equivalent", tempo: "sport-speed", reps: "progressive volume", range: "full sport range",
            subs: ["Graded return-to-training drills", "Non-contact then contact progression"]
          }
        ]
      }
    ]
  },

  "Cervicogenic_Headache": {
    tier: "injury",
    category: "cervical_spine",
    arc: 8,
    evidence: [],
    phases: [
      {
        name: "Assessment & Symptom Control (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Structural pathology / migraine", "ruled out"],
          ["Headache frequency", "tracked, baseline established"]
        ],
        exercises: [
          {
            name: "Low-Load Craniocervical Endurance Hold",
            load: "bodyweight", tempo: "sustained", reps: "3×10s, building duration", range: "chin nod, neutral cervical",
            subs: ["Supine craniocervical flexion (with feedback)", "Seated chin nod"]
          },
          {
            name: "Postural Correction & Load Management",
            load: "none", tempo: "as needed", reps: "throughout day", range: "n/a",
            subs: ["Workstation ergonomic review", "Scheduled posture breaks"]
          }
        ]
      },
      {
        name: "Progressive Craniocervical & Scapular Loading (Weeks 3–6)",
        wks: 4,
        gates: [
          ["Headache frequency/duration", "reducing trend"],
          ["Craniocervical endurance hold", "≥30s"]
        ],
        exercises: [
          {
            name: "Craniocervical Flexion (Progressive)",
            load: "bodyweight, progress hold time", tempo: "sustained", reps: "3×30s", range: "chin nod, neutral cervical",
            subs: ["Resisted craniocervical flexion (light band)", "Prone cervical extension endurance"]
          },
          {
            name: "Cervicoscapular Strengthening",
            load: "light band or dumbbell", tempo: "2s hold", reps: "3×12", range: "full scapular retraction/depression",
            subs: ["Prone I-Y-T series", "Band pull-aparts"]
          }
        ]
      },
      {
        name: "Return to Function (Weeks 7–8)",
        wks: 2,
        gates: [
          ["Headache frequency/duration", "at or near baseline goal"],
          ["Full activity tolerance", "no next-day flare"]
        ],
        exercises: [
          {
            name: "General Aerobic Conditioning",
            load: "none/light", tempo: "steady", reps: "3×20–30 min/week", range: "n/a",
            subs: ["Walking programme", "Stationary bike"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // KNEE — added 20 Aug 2026, closing four of the taxonomy's knee gaps.
  // Patellar tendinopathy follows the same isometric->isotonic/HSR->energy-
  // storage loading continuum as the rest of this file's tendon protocols;
  // ACL_Conservative is deliberately a distinct 16-week arc from the existing
  // 24-week ACL_Reconstruction, not a pathway flag on it — the two courses
  // diverge too much (no surgical healing constraint, no graft) to share one.
  // ============================================================================

  "Patellar_Tendinopathy": {
    tier: "injury",
    category: "knee",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Isometric & Load Management (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Isometric squat hold", "pain ≤3/10"],
          ["Single-leg decline squat pain", "reducing trend"]
        ],
        exercises: [
          {
            name: "Isometric Spanish Squat",
            load: "bodyweight, band-assisted", tempo: "5×45s hold", reps: "5×45s", range: "60° knee flexion",
            subs: ["Wall sit (isometric)", "Isometric leg press hold"]
          },
          {
            name: "Load Management (Reduce Energy-Storage Activity)",
            load: "none", tempo: "as needed", reps: "throughout aggravating activity", range: "n/a",
            subs: ["Activity substitution (swap jumping/running for cycling)", "Volume reduction on current sport"]
          }
        ]
      },
      {
        name: "Isotonic & Heavy Slow Resistance (Weeks 4–8)",
        wks: 5,
        gates: [
          ["VISA-P score", "≥60"],
          ["Single-leg decline squat", "pain ≤3/10 at full depth"]
        ],
        exercises: [
          {
            name: "Heavy Slow Resistance Leg Press",
            load: "progressive to near-maximal tolerable", tempo: "3s down/3s up", reps: "3×8–10", range: "0–90° knee flexion",
            subs: ["Leg press (bilateral, shallow range)", "Hack squat (controlled tempo)"]
          },
          {
            name: "Single-Leg Decline Squat",
            load: "bodyweight, progress to weighted", tempo: "3s down/2s up", reps: "3×10", range: "pain-guided depth, progressing weekly",
            subs: ["Decline board squat (assisted)", "Step-down (controlled)"]
          }
        ]
      },
      {
        name: "Energy Storage & Return to Sport (Weeks 9–12)",
        wks: 4,
        gates: [
          ["VISA-P score", "≥90"],
          ["Hop/jump tolerance", "pain-free, symmetrical landing"]
        ],
        exercises: [
          {
            name: "Plyometric Progression (Jump-Land)",
            load: "bodyweight", tempo: "explosive concentric, controlled landing", reps: "3×8", range: "double-leg to single-leg progression",
            subs: ["Box jump (low height)", "Depth jump (progressive height)"]
          },
          {
            name: "Sport-Specific Loading",
            load: "sport-equivalent", tempo: "sport-speed", reps: "progressive volume", range: "full sport range",
            subs: ["Graded return-to-training drills", "Change-of-direction progression"]
          }
        ]
      }
    ]
  },

  "Knee_Osteoarthritis": {
    tier: "injury",
    category: "knee",
    arc: 12,
    evidence: [],
    // Condition-level clinical guidance. flareRule and maintenance surface alongside the plan's
    // phases on the plan view. Both are evidence-anchored (flareRule: Lawford 2024 Cochrane +
    // NICE NG226 1.3.3 on exercise-induced pain; maintenance: GLA:D + NICE first-line position).
    flareRule: "If pain increases substantially after exercise (an exercise flare): reduce load or volume by about 25% for 24–48 hours, keep moving within tolerance, and resume progression once symptoms settle. Flares are expected and do not indicate joint damage. Review with the clinician if a flare lasts more than a week, disrupts sleep, or does not settle with reduced load.",
    maintenance: "Knee OA is a long-term condition. After this 12-week block, continuing a reduced-dose version of the programme (about 2 strength sessions plus 1 aerobic session per week, with daily walking the patient can tolerate) is strongly associated with sustained improvement in pain and function. Discharge should include a written self-progression plan and a review point.",
    phases: [
      {
        name: "Education & Low-Load Introduction (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Understands OA is not a contraindication to loading", "confirmed"],
          ["Pain with low-load exercise", "≤4/10"],
          ["Flare plan agreed with patient (reduce 25% × 24–48h, keep moving, review if >1 wk)", "confirmed"]
        ],
        exercises: [
          {
            name: "Arthritis Education (Load Tolerance, Not Avoidance)",
            load: "none", tempo: "n/a", reps: "1 session + written material", range: "n/a",
            subs: ["Group education class", "Written/video resource"]
          },
          {
            name: "Low-Load Quad & Glute Activation",
            load: "bodyweight", tempo: "2s hold", reps: "3×15", range: "pain-free range",
            freq: 3, intensity: "RPE 3–4 / 10 (very light)", rest: "60s",
            subs: ["Seated knee extension (light)", "Glute bridge"]
          },
          {
            name: "Neuromuscular / Balance Practice (GLA:D-style)",
            load: "bodyweight", tempo: "controlled", reps: "3×10 per movement", range: "controlled through-range",
            freq: 2, intensity: "RPE 3–5 / 10", rest: "60s",
            subs: ["Single-leg stance (30s, progress to eyes closed)", "Mini-squats to a chair", "Lateral step-overs", "Semi-tandem balance"]
          }
        ]
      },
      {
        name: "Progressive Structured Exercise (Weeks 4–9)",
        wks: 6,
        gates: [
          ["KOOS/WOMAC score", "improving trend"],
          ["Sit-to-stand ×5", "improving time"]
        ],
        exercises: [
          {
            name: "Progressive Resistance Leg Press",
            load: "light, progress weekly", tempo: "2s down/2s up", reps: "3×12", range: "pain-guided",
            freq: 2, intensity: "RPE 5–7 / 10 (progress as tolerated)", rest: "90–120s",
            subs: ["Bodyweight squat to box", "Resistance band leg press"]
          },
          {
            name: "Aquatic or Land-Based Aerobic Conditioning",
            load: "none/light", tempo: "steady", reps: "20–30 min, 3×/week", range: "n/a",
            freq: 3, intensity: "RPE 4–6 / 10 (comfortable, able to talk)", rest: "as needed",
            subs: ["Pool walking/aquatic exercise", "Stationary bike"]
          },
          {
            name: "Walking Programme (First-line NICE NG226)",
            load: "bodyweight", tempo: "self-selected pace", reps: "Start at a tolerated distance (e.g. 10–15 min); add ~10% per week", range: "n/a",
            freq: 5, intensity: "RPE 3–5 / 10 (brisk but conversational)", rest: "as needed; split into multiple shorter bouts if useful",
            subs: ["Outdoor walking", "Treadmill walking", "Walking with poles if balance is a concern"]
          }
        ]
      },
      {
        name: "Functional Capacity (Weeks 10–12)",
        wks: 3,
        gates: [
          ["KOOS/WOMAC score", "at patient's functional goal"],
          ["Stair negotiation", "pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Functional Task Loading (Stairs, Sit-to-Stand)",
            load: "bodyweight, progress to loaded", tempo: "controlled", reps: "3×10", range: "full functional range",
            freq: 3, intensity: "RPE 5–7 / 10", rest: "90s",
            subs: ["Weighted sit-to-stand", "Step-up/step-down progression"]
          },
          {
            name: "Self-Managed Maintenance Programme (post-discharge)",
            load: "bodyweight → loaded as able", tempo: "self-paced", reps: "Minimum 2 strength + 1 aerobic session per week + daily walking", range: "n/a",
            freq: 3, intensity: "RPE 4–6 / 10 (sustainable long-term)", rest: "as needed",
            subs: ["Home-based strength maintenance", "Walking as the aerobic default", "Return to pool/gym if preferred and accessible"]
          }
        ]
      }
    ]
  },

  "ACL_Conservative": {
    tier: "injury",
    category: "knee",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Neuromuscular Control & Coper Screening (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Effusion", "settled"],
          ["Quadriceps activation (straight leg raise, no lag)", "yes"],
          ["Single-leg stance", "30s stable"]
        ],
        exercises: [
          {
            name: "Quad Sets (Supine)",
            load: "bodyweight", tempo: "2s hold", reps: "3×20", range: "0–60°",
            subs: ["Seated knee extension (light)", "Straight leg raise (4-way)"]
          },
          {
            name: "Neuromuscular Balance Training",
            load: "none", tempo: "static then dynamic", reps: "3×30s", range: "single-leg stance progression",
            subs: ["Wobble board", "Perturbation training (partner-assisted)"]
          }
        ]
      },
      {
        name: "Progressive Strength & Agility (Weeks 5–11)",
        wks: 7,
        gates: [
          ["IKDC score", "≥70"],
          ["Quadriceps strength", "≥80% uninjured side"],
          ["Cutting/pivoting", "confident, pain-free"]
        ],
        exercises: [
          {
            name: "Progressive Resisted Leg Press",
            load: "progress weekly", tempo: "3s down/2s up", reps: "3×10", range: "0–90° knee flexion",
            subs: ["Squat (bodyweight to loaded)", "Bulgarian split squat"]
          },
          {
            name: "Agility & Deceleration Drills",
            load: "none", tempo: "progressive speed", reps: "3×6", range: "controlled cutting angles",
            subs: ["Shuttle run (controlled)", "Deceleration-to-stop drills"]
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 12–16)",
        wks: 5,
        gates: [
          ["IKDC score", "≥85"],
          ["Hop symmetry", "≥90% limb symmetry index"],
          ["Sport-specific cutting/pivoting", "full intensity, confident"]
        ],
        exercises: [
          {
            name: "Single-Leg Hop Series",
            load: "bodyweight", tempo: "explosive", reps: "3×5", range: "full sagittal/lateral hop patterns",
            subs: ["Triple hop for distance", "Crossover hop"]
          },
          {
            name: "Sport-Specific Return Progression",
            load: "sport-equivalent", tempo: "sport-speed", reps: "progressive volume", range: "full sport range",
            subs: ["Non-contact then contact training", "Graded competitive return"]
          }
        ]
      }
    ]
  },

  "ITB_Related": {
    tier: "injury",
    category: "knee",
    arc: 8,
    evidence: [],
    phases: [
      {
        name: "Load Management & Hip Activation (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Pain with running", "≤4/10 or resolved with rest"],
          ["Hip abductor isometric", "pain-free"]
        ],
        exercises: [
          {
            name: "Isometric Hip Abduction (Side-Lying)",
            load: "bodyweight", tempo: "5×30s hold", reps: "5×30s", range: "mid-range abduction",
            subs: ["Standing isometric hip abduction (wall)", "Band isometric hold"]
          },
          {
            name: "Running Load Modification",
            load: "none", tempo: "as needed", reps: "reduced volume/intensity", range: "n/a",
            subs: ["Cross-training substitution (cycling, swimming)", "Downhill-running avoidance"]
          }
        ]
      },
      {
        name: "Progressive Hip Abductor Strengthening (Weeks 3–6)",
        wks: 4,
        gates: [
          ["Hip abductor strength", "≥80% uninjured side"],
          ["Pain-free running distance", "≥50% of prior training volume"]
        ],
        exercises: [
          {
            name: "Side-Lying Hip Abduction (Resisted)",
            load: "light–moderate band", tempo: "2s up/2s down", reps: "3×15", range: "full abduction",
            subs: ["Standing cable/band hip abduction", "Clamshell (progressive band resistance)"]
          },
          {
            name: "Single-Leg Bridge & Step-Down",
            load: "bodyweight", tempo: "controlled", reps: "3×12", range: "full hip extension / controlled step-down",
            subs: ["Lateral step-down", "Single-leg glute bridge"]
          }
        ]
      },
      {
        name: "Return to Running (Weeks 7–8)",
        wks: 2,
        gates: [
          ["Hip abductor strength", "≥90% uninjured side"],
          ["Full training volume", "pain-free, no next-day flare"]
        ],
        exercises: [
          {
            name: "Progressive Running Volume",
            load: "bodyweight", tempo: "training pace", reps: "graded weekly volume increase", range: "n/a",
            subs: ["Interval return-to-run programme", "Hill/downhill reintroduction (graded)"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // SHOULDER, HIP & THIGH, ANKLE & FOOT — added 20 Aug 2026, closing the
  // remaining taxonomy gaps in these three regions. Two honesty notes worth
  // keeping visible: Post_Op_THR's evidence (Saueressig 2021) found NO
  // association between formal postoperative exercise and better outcomes —
  // that finding is kept in PROTOCOL_CLINICAL rather than smoothed over.
  // Midfoot_Lisfranc's only available sources are Level V case reports, not
  // systematic reviews — also stated plainly, not upgraded by omission.
  // ============================================================================

  "Rotator_Cuff_Related_Pain": {
    tier: "injury",
    category: "shoulder",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Pain Modulation & Isometric Loading (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Isometric abduction/ER hold", "pain ≤3/10"],
          ["Night pain", "reducing trend"]
        ],
        exercises: [
          {
            name: "Isometric Shoulder Abduction (Mid-Range)",
            load: "pain-free resistance", tempo: "5×30s hold", reps: "5×30s", range: "30–45° abduction",
            subs: ["Isometric external rotation (wall)", "Isometric internal rotation (wall)"]
          },
          {
            name: "Scapular Setting",
            load: "bodyweight", tempo: "3s hold", reps: "3×15", range: "scapular retraction/depression",
            subs: ["Prone scapular squeeze", "Band scapular retraction (light)"]
          }
        ]
      },
      {
        name: "Progressive Strengthening (Weeks 4–8)",
        wks: 5,
        gates: [
          ["SPADI score", "improving trend"],
          ["Resisted abduction/ER", "pain ≤3/10 through range"]
        ],
        exercises: [
          {
            name: "Rotator Cuff Strengthening (ER/IR)",
            load: "light–moderate band", tempo: "2s up/2s down", reps: "3×12", range: "full ER/IR arc",
            subs: ["Prone horizontal abduction", "Sidelying external rotation"]
          },
          {
            name: "Scapular & Lower Trapezius Strengthening",
            load: "light band or dumbbell", tempo: "2s hold", reps: "3×12", range: "full scapular plane",
            subs: ["Prone Y-raise", "Band pull-apart"]
          }
        ]
      },
      {
        name: "Return to Overhead / Sport (Weeks 9–12)",
        wks: 4,
        gates: [
          ["SPADI score", "≤10"],
          ["Overhead loaded task", "pain-free, full range"]
        ],
        exercises: [
          {
            name: "Progressive Overhead Loading",
            load: "progressive to task-equivalent", tempo: "controlled", reps: "3×10", range: "full overhead range",
            subs: ["Landmine press", "Overhead carry (progressive load)"]
          },
          {
            name: "Sport/Task-Specific Loading",
            load: "task-equivalent", tempo: "task-speed", reps: "progressive volume", range: "full task range",
            subs: ["Throwing/serving progression (graded)", "Simulated work task circuit"]
          }
        ]
      }
    ]
  },

  "Adhesive_Capsulitis": {
    tier: "injury",
    category: "shoulder",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Freezing Stage — Pain Control & Gentle Motion (Weeks 1–5)",
        wks: 5,
        gates: [
          ["Rest/night pain", "≤4/10"],
          ["Passive ROM", "not worsening"]
        ],
        exercises: [
          {
            name: "Pendulum Exercises",
            load: "none/light weight", tempo: "slow, gentle swing", reps: "3×1 min", range: "pain-free arc",
            subs: ["Table slide (supported)", "Wand-assisted passive flexion (gentle)"]
          },
          {
            name: "Pain-Free Passive/Active-Assisted ROM",
            load: "none", tempo: "slow, sustained", reps: "3×10", range: "within pain-free limit only",
            subs: ["Wall walk (assisted)", "Supine wand-assisted external rotation"]
          }
        ]
      },
      {
        name: "Frozen Stage — Progressive Stretching & Strengthening (Weeks 6–11)",
        wks: 6,
        gates: [
          ["SPADI score", "improving trend"],
          ["Passive ROM (flexion/abduction/ER)", "measurable gain vs. baseline"]
        ],
        exercises: [
          {
            name: "Sustained End-Range Stretching (Capsular Directions)",
            load: "none", tempo: "sustained 30s hold", reps: "3×30s each direction", range: "end-range flexion/ER/IR",
            subs: ["Doorway stretch (ER bias)", "Cross-body adduction stretch"]
          },
          {
            name: "Progressive Rotator Cuff & Scapular Strengthening",
            load: "light band, progress weekly", tempo: "2s up/2s down", reps: "3×12", range: "available ROM",
            subs: ["Isometric ER/IR progressing to isotonic", "Scapular retraction (band)"]
          }
        ]
      },
      {
        name: "Thawing Stage — Return to Function (Weeks 12–16)",
        wks: 5,
        gates: [
          ["SPADI score", "≤10"],
          ["Functional ROM", "sufficient for ADLs/task, symmetrical trend"]
        ],
        exercises: [
          {
            name: "Full-Range Functional Strengthening",
            load: "progressive", tempo: "controlled", reps: "3×10", range: "full available ROM",
            subs: ["Overhead press (progressive)", "Functional reach tasks"]
          }
        ]
      }
    ]
  },

  "AC_Joint": {
    tier: "injury",
    category: "shoulder",
    arc: 8,
    evidence: [],
    phases: [
      {
        name: "Pain Control & Protection (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Rest pain", "≤3/10"],
          ["Sling weaned", "as tolerated"]
        ],
        exercises: [
          {
            name: "Pendulum Exercises",
            load: "none", tempo: "slow, gentle swing", reps: "3×1 min", range: "pain-free arc",
            subs: ["Table slide (supported)"]
          },
          {
            name: "Pain-Free Active-Assisted ROM",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "below shoulder height only",
            subs: ["Wand-assisted flexion (gentle)"]
          }
        ]
      },
      {
        name: "Progressive ROM & Scapular Strengthening (Weeks 3–6)",
        wks: 4,
        gates: [
          ["Active ROM", "full, pain ≤3/10"],
          ["Horizontal adduction (cross-body)", "pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Scapular Strengthening",
            load: "light band", tempo: "2s hold", reps: "3×12", range: "full scapular plane",
            subs: ["Prone Y-raise", "Band pull-apart"]
          },
          {
            name: "Progressive Rotator Cuff Loading",
            load: "light–moderate band", tempo: "2s up/2s down", reps: "3×12", range: "full ER/IR arc",
            subs: ["Sidelying external rotation", "Prone horizontal abduction"]
          }
        ]
      },
      {
        name: "Return to Overhead / Contact (Weeks 7–8)",
        wks: 2,
        gates: [
          ["Full strength", "≥90% uninjured side"],
          ["Contact/overhead task tolerance", "confident, pain-free"]
        ],
        exercises: [
          {
            name: "Sport-Specific Loading (Overhead / Contact)",
            load: "sport-equivalent", tempo: "sport-speed", reps: "progressive volume", range: "full sport range",
            subs: ["Graded return-to-contact drills", "Overhead throwing/serving progression"]
          }
        ]
      }
    ]
  },

  "Gluteal_Tendinopathy": {
    tier: "injury",
    category: "hip_posterior",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Load Management & Isometric (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Isometric hip abduction", "pain ≤3/10"],
          ["Compressive positions (crossed-leg sitting, hip hitch)", "avoided/modified"]
        ],
        exercises: [
          {
            name: "Isometric Hip Abduction (Neutral, Non-Compressive)",
            load: "bodyweight", tempo: "5×45s hold", reps: "5×45s", range: "neutral hip, avoid adduction past midline",
            subs: ["Standing isometric hip abduction (wall)", "Band isometric hold"]
          },
          {
            name: "Compressive-Position Load Management",
            load: "none", tempo: "as needed", reps: "throughout day", range: "n/a",
            subs: ["Avoid standing with hip hitched/adducted", "Sleep with pillow between knees"]
          }
        ]
      },
      {
        name: "Progressive Isotonic Loading (Weeks 4–8)",
        wks: 5,
        gates: [
          ["Single-leg stance time", "≥30s, pain-free"],
          ["Resisted hip abduction", "pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Side-Lying Hip Abduction (Resisted, Non-Compressive Range)",
            load: "light–moderate band", tempo: "2s up/2s down", reps: "3×15", range: "neutral to slight abduction only",
            subs: ["Standing cable/band hip abduction", "Clamshell (progressive band resistance)"]
          },
          {
            name: "Single-Leg Bridge",
            load: "bodyweight", tempo: "controlled", reps: "3×12", range: "full hip extension",
            subs: ["Double-leg bridge (progression base)", "Step-up (controlled)"]
          }
        ]
      },
      {
        name: "Return to Function (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Hip abductor strength", "≥90% uninjured side"],
          ["Single-leg loaded task", "pain-free, full load"]
        ],
        exercises: [
          {
            name: "Progressive Single-Leg Loading",
            load: "progressive to task-equivalent", tempo: "controlled", reps: "3×10", range: "full functional range",
            subs: ["Single-leg squat (progressive depth)", "Lateral step-down"]
          }
        ]
      }
    ]
  },

  "FAI_Syndrome": {
    tier: "injury",
    category: "hip_posterior",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Symptom Control & Activity Modification (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Deep flexion/rotation pain", "≤4/10"],
          ["Provocative activity", "identified and modified"]
        ],
        exercises: [
          {
            name: "Pain-Free Hip Mobility (Non-Impinging Range)",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "pain-free arc, avoid deep flexion+IR combined",
            subs: ["Supine active-assisted hip flexion (limited range)", "Hip CARs (controlled articular rotations, pain-free)"]
          },
          {
            name: "Core & Pelvic Control",
            load: "bodyweight", tempo: "sustained hold", reps: "3×30s", range: "neutral pelvis",
            subs: ["Dead bug", "Pallof press"]
          }
        ]
      },
      {
        name: "Progressive Hip & Core Strengthening (Weeks 4–8)",
        wks: 5,
        gates: [
          ["Hip flexor/abductor strength", "≥75% uninjured side"],
          ["Deep squat tolerance", "pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Progressive Hip Strengthening (Abduction/Extension)",
            load: "light–moderate band", tempo: "2s hold", reps: "3×12", range: "pain-free arc",
            subs: ["Side-lying hip abduction", "Single-leg glute bridge"]
          },
          {
            name: "Squat Pattern (Progressive Depth, Impingement-Aware)",
            load: "bodyweight, progress to loaded", tempo: "controlled", reps: "3×10", range: "to first sign of pinch, progressing weekly",
            subs: ["Box squat (depth-limited)", "Goblet squat (light)"]
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Hip strength", "≥90% uninjured side"],
          ["Sport-specific movement (cutting, deep squat)", "confident, pain-free"]
        ],
        exercises: [
          {
            name: "Sport-Specific Loading",
            load: "sport-equivalent", tempo: "sport-speed", reps: "progressive volume", range: "full sport range",
            subs: ["Change-of-direction progression", "Graded return-to-training drills"]
          }
        ]
      }
    ]
  },

  "Hip_Osteoarthritis": {
    tier: "injury",
    category: "hip_posterior",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Education & Low-Load Introduction (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Understands OA is not a contraindication to loading", "confirmed"],
          ["Pain with low-load exercise", "≤4/10"]
        ],
        exercises: [
          {
            name: "Arthritis Education (Load Tolerance, Not Avoidance)",
            load: "none", tempo: "n/a", reps: "1 session + written material", range: "n/a",
            subs: ["Group education class", "Written/video resource"]
          },
          {
            name: "Low-Load Hip & Glute Activation",
            load: "bodyweight", tempo: "2s hold", reps: "3×15", range: "pain-free range",
            subs: ["Seated hip abduction (light band)", "Glute bridge"]
          }
        ]
      },
      {
        name: "Progressive Structured Exercise (Weeks 4–9)",
        wks: 6,
        gates: [
          ["HOOS/WOMAC score", "improving trend"],
          ["Sit-to-stand ×5", "improving time"]
        ],
        exercises: [
          {
            name: "Progressive Resistance Hip Strengthening",
            load: "light, progress weekly", tempo: "2s hold", reps: "3×12", range: "pain-guided",
            subs: ["Band hip abduction/extension", "Leg press (bilateral, light)"]
          },
          {
            name: "Land or Water-Based Aerobic Conditioning",
            load: "none/light", tempo: "steady", reps: "20–30 min, 3×/week", range: "n/a",
            subs: ["Pool walking", "Stationary bike"]
          }
        ]
      },
      {
        name: "Functional Capacity (Weeks 10–12)",
        wks: 3,
        gates: [
          ["HOOS/WOMAC score", "at patient's functional goal"],
          ["Stair negotiation", "pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Functional Task Loading (Stairs, Sit-to-Stand)",
            load: "bodyweight, progress to loaded", tempo: "controlled", reps: "3×10", range: "full functional range",
            subs: ["Weighted sit-to-stand", "Step-up/step-down progression"]
          }
        ]
      }
    ]
  },

  "Post_Op_THR": {
    tier: "injury",
    category: "hip_posterior",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Early Mobility & Precautions (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Hip precautions", "understood and followed"],
          ["Independent transfers", "achieved"]
        ],
        exercises: [
          {
            name: "Ankle Pumps & Quad Sets",
            load: "bodyweight", tempo: "2s hold", reps: "3×15", range: "within precautions",
            subs: ["Heel slides (precaution-compliant range)", "Glute sets"]
          },
          {
            name: "Assisted Gait Training",
            load: "none", tempo: "steady", reps: "short bouts, several times daily", range: "n/a",
            subs: ["Walking frame progression to crutches", "Cane-assisted walking"]
          }
        ]
      },
      {
        name: "Progressive Strengthening (Weeks 4–8)",
        wks: 5,
        gates: [
          ["Single-leg stance (support as needed)", "achieved"],
          ["Hip abductor strength", "improving trend"]
        ],
        exercises: [
          {
            name: "Progressive Hip Strengthening (Abduction/Extension)",
            load: "light band, progress weekly", tempo: "2s hold", reps: "3×12", range: "within precautions, progressing",
            subs: ["Standing hip abduction", "Side-lying hip abduction"]
          },
          {
            name: "Gait & Balance Progression",
            load: "none", tempo: "controlled", reps: "3×10 min", range: "n/a",
            subs: ["Unassisted walking progression", "Single-leg stance practice"]
          }
        ]
      },
      {
        name: "Functional Return (Weeks 9–12)",
        wks: 4,
        gates: [
          ["HOOS/self-reported function", "at patient's functional goal"],
          ["Stair negotiation", "independent"]
        ],
        exercises: [
          {
            name: "Functional Task Loading (Stairs, Sit-to-Stand)",
            load: "bodyweight, progress to loaded", tempo: "controlled", reps: "3×10", range: "full functional range",
            subs: ["Weighted sit-to-stand", "Step-up/step-down progression"]
          }
        ]
      }
    ]
  },

  "Plantar_Heel_Pain": {
    tier: "injury",
    category: "ankle",
    arc: 10,
    evidence: [],
    phases: [
      {
        name: "Pain Control & Load Management (Weeks 1–3)",
        wks: 3,
        gates: [
          ["First-step morning pain", "reducing trend"],
          ["Rest pain", "≤3/10"]
        ],
        exercises: [
          {
            name: "Plantar Fascia-Specific Stretch",
            load: "none", tempo: "sustained 30s hold", reps: "3×30s, several times daily", range: "toes dorsiflexed against wall/floor",
            subs: ["Calf stretch (gastroc/soleus)", "Frozen bottle roll (light, symptom-easing only)"]
          },
          {
            name: "Load Management & Footwear Review",
            load: "none", tempo: "as needed", reps: "throughout day", range: "n/a",
            subs: ["Night splint (dorsiflexion)", "Cushioned/supportive footwear review"]
          }
        ]
      },
      {
        name: "Progressive Loading (Weeks 4–7)",
        wks: 4,
        gates: [
          ["Foot Function Index / FAAM", "improving trend"],
          ["Standing tolerance", "increasing, pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Intrinsic Foot Strengthening",
            load: "bodyweight", tempo: "controlled", reps: "3×15", range: "full toe/arch range",
            subs: ["Towel scrunches", "Short foot exercise"]
          },
          {
            name: "Progressive Calf Raise",
            load: "bodyweight, progress to weighted", tempo: "2s up/2s down", reps: "3×12", range: "full ROM",
            subs: ["Seated calf raise (early)", "Single-leg calf raise (progression)"]
          }
        ]
      },
      {
        name: "Return to Function (Weeks 8–10)",
        wks: 3,
        gates: [
          ["Foot Function Index / FAAM", "at patient's functional goal"],
          ["Walking/running tolerance", "full volume, pain-free"]
        ],
        exercises: [
          {
            name: "Progressive Walking/Running Volume",
            load: "bodyweight", tempo: "training pace", reps: "graded weekly volume increase", range: "n/a",
            subs: ["Interval return-to-run programme", "Standing-task volume progression"]
          }
        ]
      }
    ]
  },

  "Midfoot_Lisfranc": {
    tier: "injury",
    category: "ankle",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Protect & Non-Weight-Bearing (Weeks 1–6)",
        wks: 6,
        gates: [
          ["Weight-bearing status", "per surgeon/clinician clearance"],
          ["Swelling", "settling trend"]
        ],
        exercises: [
          {
            name: "Non-Weight-Bearing Mobility (Toes, Ankle Pumps)",
            load: "none", tempo: "controlled", reps: "3×15", range: "pain-free, midfoot excluded",
            subs: ["Toe flexion/extension", "Ankle pumps (within boot/cast tolerance)"]
          },
          {
            name: "Upper Body & Uninvolved-Limb Conditioning",
            load: "bodyweight/light", tempo: "controlled", reps: "as tolerated", range: "n/a",
            subs: ["Seated upper body circuit", "Single-leg (uninvolved) strength work"]
          }
        ]
      },
      {
        name: "Progressive Weight-Bearing & Strengthening (Weeks 7–12)",
        wks: 6,
        gates: [
          ["Full weight-bearing", "achieved, pain ≤3/10"],
          ["Single-leg stance", "≥20s, pain-free"]
        ],
        exercises: [
          {
            name: "Progressive Weight-Bearing Gait",
            load: "bodyweight", tempo: "controlled", reps: "graded daily volume", range: "n/a",
            subs: ["Pool-based gait (unloaded)", "Assisted-to-unassisted walking progression"]
          },
          {
            name: "Midfoot & Ankle Strengthening",
            load: "light band", tempo: "2s hold", reps: "3×12", range: "pain-free arc",
            subs: ["Resisted dorsiflexion/plantarflexion", "Calf raise (double-leg, progressive)"]
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 13–16)",
        wks: 4,
        gates: [
          ["Single-leg hop", "pain-free, symmetrical"],
          ["Sport-specific agility", "confident, full intensity"]
        ],
        exercises: [
          {
            name: "Progressive Running & Agility",
            load: "bodyweight", tempo: "graded speed", reps: "progressive volume", range: "n/a",
            subs: ["Straight-line running progression", "Change-of-direction drills (graded)"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // ACHILLES TENDINOPATHY, CERVICAL STRAIN / WHIPLASH, GROIN STRAIN · ADDUCTOR
  // — added 21 Aug 2026. These three were drafted in clinic-demo.html's
  // PROTOCOL_DETAIL/PROTOCOL_CLINICAL (verified citations already recorded
  // there: VISA-A/Alfredson for Achilles, NDI for whiplash, the Copenhagen
  // Adduction RCT for groin strain) but never actually joined this file — the
  // real backend catalog condition_library draws from, not the demo. Ported
  // directly from that source, not re-authored, so the exercise/gate content
  // matches exactly. See docs/PROTOCOL-REVIEW.md's 2026-08-21 entries for the
  // literature (Achilles's Alfredson 1998 note corrected there to "prospective
  // study, not RCT"; groin strain's citation corrected from a wrong PMID that
  // pointed to a companion infographic to the actual trial, 29891614).
  // ============================================================================

  "Achilles_Tendinopathy": {
    tier: "injury",
    category: "ankle_posterior",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Protect (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Morning stiffness", "<20 min"],
          ["Pain during walking", "≤3/10"]
        ],
        exercises: [
          {
            name: "Isometric Calf Hold",
            load: "bodyweight", tempo: "sustained hold", reps: "3×45s", range: "mid-range",
            subs: ["Soleus Press"]
          },
          {
            name: "Calf Raise · Loaded",
            load: "bodyweight → light load", tempo: "2s up/2s down", reps: "4×12", range: "full ROM",
            subs: ["Seated Calf Raise", "Single-Leg Calf Raise"]
          }
        ]
      },
      {
        name: "Build (Weeks 5–10)",
        wks: 6,
        gates: [
          ["Heel raise endurance", "≥15"],
          ["VISA-A score", "≥70"]
        ],
        exercises: [
          {
            name: "Calf Raise · Loaded",
            load: "progressive load", tempo: "2s up/2s down", reps: "4×12", range: "full ROM",
            subs: ["Seated Calf Raise", "Single-Leg Calf Raise"]
          },
          {
            name: "Isometric Calf Hold",
            load: "bodyweight", tempo: "sustained hold", reps: "3×45s", range: "mid-range",
            subs: ["Soleus Press"]
          }
        ]
      },
      {
        name: "Return (Weeks 11–16)",
        wks: 6,
        gates: [
          ["Heel raise endurance", "≥25"],
          ["VISA-A score", "≥85"],
          ["Hop tolerance", "pain-free"]
        ],
        exercises: [
          {
            name: "Single-Leg Hop Series",
            load: "bodyweight", tempo: "controlled land", reps: "3×5", range: "n/a",
            subs: ["Box Step-Off", "Lateral Bound"]
          },
          {
            name: "Progressive Sprints",
            load: "bodyweight", tempo: "graded speed", reps: "70–85%", range: "n/a",
            subs: ["Sprint Ladder"]
          }
        ]
      }
    ]
  },

  "Cervical_Strain_Whiplash": {
    tier: "injury",
    category: "cervical_spine",
    arc: 6,
    evidence: [],
    phases: [
      {
        name: "Protect (Week 1)",
        wks: 1,
        gates: [
          ["Pain-free rest", "yes"],
          ["Range loss", "<25%"]
        ],
        exercises: [
          {
            name: "Gentle Range-of-Motion Series",
            load: "none", tempo: "slow, pain-free", reps: "daily", range: "pain-free arc",
            subs: ["Chin Tuck"]
          },
          {
            name: "McGill Big Three",
            load: "bodyweight", tempo: "controlled", reps: "daily", range: "n/a",
            subs: ["Cat-Camel", "Bird-Dog"]
          }
        ]
      },
      {
        name: "Build (Weeks 2–4)",
        wks: 3,
        gates: [
          ["Pain-free rotation", "yes"],
          ["Neck disability index", "≤20%"]
        ],
        exercises: [
          {
            name: "Deep Neck Flexor Activation",
            load: "bodyweight", tempo: "sustained hold", reps: "3×10", range: "n/a",
            subs: ["Isometric Neck Hold"]
          },
          {
            name: "Gentle Range-of-Motion Series",
            load: "none", tempo: "slow, pain-free", reps: "daily", range: "pain-free arc",
            subs: ["Chin Tuck"]
          }
        ]
      },
      {
        name: "Return (Weeks 5–6)",
        wks: 2,
        gates: [
          ["Neck disability index", "≤10%"],
          ["Deep neck flexor endurance", "≥30s"]
        ],
        exercises: [
          {
            name: "Deep Neck Flexor Activation",
            load: "bodyweight", tempo: "sustained hold", reps: "3×10", range: "n/a",
            subs: ["Isometric Neck Hold"]
          },
          {
            name: "Dead Bug",
            load: "bodyweight", tempo: "controlled", reps: "3×10", range: "n/a",
            subs: ["Pallof Press", "Goblet Squat"]
          }
        ]
      }
    ]
  },

  "Groin_Strain_Adductor": {
    tier: "injury",
    category: "hip_posterior",
    arc: 8,
    evidence: [],
    phases: [
      {
        name: "Protect (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Pain-free walking", "yes"],
          ["Isometric pain", "≤3/10"]
        ],
        exercises: [
          {
            name: "Isometric Adduction Hold",
            load: "bodyweight", tempo: "sustained hold", reps: "3×20s", range: "mid-range",
            subs: ["Copenhagen Plank · Short Lever"]
          },
          {
            name: "Hip Mobility Series",
            load: "none", tempo: "slow", reps: "daily", range: "full pain-free",
            subs: ["90/90 Hip Switch"]
          }
        ]
      },
      {
        name: "Build (Weeks 3–5)",
        wks: 3,
        gates: [
          ["Adductor squeeze strength", "≥70%"],
          ["Pain-free jogging", "yes"]
        ],
        exercises: [
          {
            name: "Copenhagen Plank · Long Lever",
            load: "bodyweight", tempo: "controlled", reps: "3×30s", range: "n/a",
            subs: ["Adductor Squeeze"]
          },
          {
            name: "Dead Bug",
            load: "bodyweight", tempo: "controlled", reps: "3×10", range: "n/a",
            subs: ["Pallof Press", "Goblet Squat"]
          }
        ]
      },
      {
        name: "Return (Weeks 6–8)",
        wks: 3,
        gates: [
          ["Adductor squeeze strength", "≥90%"],
          ["Change-of-direction", "pass"]
        ],
        exercises: [
          {
            name: "Progressive Sprints",
            load: "bodyweight", tempo: "graded speed", reps: "70–85%", range: "n/a",
            subs: ["Sprint Ladder"]
          },
          {
            name: "Copenhagen Plank · Long Lever",
            load: "bodyweight", tempo: "controlled", reps: "3×30s", range: "n/a",
            subs: ["Adductor Squeeze"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // NECK PAIN (NON-SPECIFIC) & CERVICAL RADICULOPATHY — added 21 Aug 2026,
  // closing the two remaining cervical_spine gaps flagged in PILOT-PLAN.md A1
  // and in the SPINE block comment above ("cervical radiculopathy... needs its
  // own sourcing round, not a rushed one" — this is that round). Like
  // Achilles/Whiplash/Groin above, these are drafted with independently
  // PubMed-verified citations but NOT yet wired into condition_library. See
  // docs/PROTOCOL-REVIEW.md's 2026-08-21 entries for the literature and, in
  // particular, an explicit self-flagged concern: this file's existing
  // Lumbar_Radiculopathy has no red-flag/escalation gate (noted as a gap in
  // its own review entry) — Cervical_Radiculopathy below deliberately does not
  // repeat that mistake and leads with an explicit myelopathy screen.
  // ============================================================================

  "Neck_Pain_Nonspecific": {
    tier: "injury",
    category: "cervical_spine",
    arc: 8,
    evidence: [],
    phases: [
      {
        name: "Triage & Symptom Management (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Grade I/II triage (no neurologic signs, no major pathology)", "confirmed"],
          ["Neck disability index", "baseline established"]
        ],
        exercises: [
          {
            name: "Gentle Cervical Range-of-Motion Series",
            load: "none", tempo: "slow, pain-free", reps: "daily", range: "pain-free arc, all planes",
            subs: ["Chin Tuck", "Cat-Camel (cervicothoracic)"]
          },
          {
            name: "Low-Load Craniocervical Flexion Activation",
            load: "bodyweight", tempo: "sustained", reps: "3×10s, building duration", range: "chin nod, neutral cervical",
            subs: ["Supine craniocervical flexion (with feedback)", "Seated chin nod"]
          },
          {
            name: "Postural Correction & Load Management",
            load: "none", tempo: "as needed", reps: "throughout day", range: "n/a",
            subs: ["Workstation ergonomic review", "Scheduled posture breaks"]
          }
        ]
      },
      {
        name: "Progressive Strengthening (Weeks 3–6)",
        wks: 4,
        gates: [
          ["Neck disability index", "≤20%"],
          ["Craniocervical flexion endurance", "≥20s"],
          ["Cervical active range of motion", "full or near-full, all planes"]
        ],
        exercises: [
          {
            name: "Craniocervical Flexion Exercise (Progressive)",
            load: "bodyweight, progress hold time", tempo: "sustained", reps: "3×10, building to 3×30s", range: "chin nod, neutral cervical",
            subs: ["Isometric neck hold (multi-directional)"]
          },
          {
            name: "Cervicoscapular Strengthening",
            load: "light band or dumbbell", tempo: "2s hold", reps: "3×12", range: "full scapular retraction/depression",
            subs: ["Prone I-Y-T series", "Band pull-aparts"]
          },
          {
            name: "Isometric Neck Strengthening (Multi-Directional)",
            load: "manual resistance or band", tempo: "5s hold", reps: "3×8 each direction", range: "neutral, sub-maximal",
            subs: ["Isometric Neck Hold"]
          }
        ]
      },
      {
        name: "Return to Function (Weeks 7–8)",
        wks: 2,
        gates: [
          ["Neck disability index", "≤10%"],
          ["Full activity tolerance", "no next-day flare"]
        ],
        exercises: [
          {
            name: "General Aerobic Conditioning",
            load: "none/light", tempo: "steady", reps: "3×20–30 min/week", range: "n/a",
            subs: ["Walking programme", "Stationary bike"]
          },
          {
            name: "Cervicoscapular Strengthening",
            load: "progressive band or dumbbell", tempo: "2s hold", reps: "3×12", range: "full scapular retraction/depression",
            subs: ["Prone I-Y-T series", "Band pull-aparts"]
          }
        ]
      }
    ]
  },

  "Cervical_Radiculopathy": {
    tier: "injury",
    category: "cervical_spine",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Safety Screening & Neural Symptom Control (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Myelopathy screen (gait deviation, Hoffmann's, inverted supinator, Babinski, age >45)", "no concerning neurological findings; do not require ≥3 positive cluster findings before considering referral — assess any concerning feature using the appropriate pathway (NICE NG127 1.10.11)"],
          ["Nerve-root provocation cluster (Spurling's, distraction, ULTT-A, rotation <60°)", "consistent with radiculopathy at baseline, tracked"],
          ["Arm/hand neurological symptoms", "stable or improving, not worsening"]
        ],
        exercises: [
          {
            name: "Nerve Glide (Median/Radial, Sliders)",
            load: "bodyweight", tempo: "slow, sub-symptomatic", reps: "3×10", range: "pain/paraesthesia-free arc",
            subs: ["Nerve glide (ULNT variant by nerve-root level)", "Tensioners (later stage only)"]
          },
          {
            name: "Directional Preference / Positional Relief",
            load: "none", tempo: "slow, sustained", reps: "as tolerated, hourly if centralising", range: "pain-free, stop if peripheralising",
            subs: ["Cervical retraction (chin tuck)", "Side-bend away from symptomatic side"]
          },
          {
            name: "Postural & Load Management Education",
            load: "none", tempo: "as needed", reps: "throughout day", range: "n/a",
            subs: ["Workstation ergonomic review"]
          }
        ]
      },
      {
        name: "Progressive Neuromuscular Loading (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Neck disability index", "≤30%"],
          ["Repeat myelopathy/motor screen", "no new deficit, still negative"],
          ["Cervical rotation ROM (symptomatic side)", ">60°, improving"]
        ],
        exercises: [
          {
            name: "Craniocervical Flexion Activation",
            load: "bodyweight", tempo: "sustained", reps: "3×10", range: "chin nod, neutral cervical",
            subs: ["Supine craniocervical flexion (with feedback)"]
          },
          {
            name: "Cervicoscapular Strengthening",
            load: "light band", tempo: "2s hold", reps: "3×12", range: "full scapular retraction/depression",
            subs: ["Prone I-Y-T series", "Band pull-aparts"]
          },
          {
            name: "Progressive Nerve Glide",
            load: "bodyweight", tempo: "controlled, progressing range", reps: "3×10", range: "progressing toward full tension, symptom-guided",
            subs: ["Nerve glide (ULNT variant by nerve-root level)"]
          }
        ]
      },
      {
        name: "Return to Function (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Neck disability index", "≤10%"],
          ["Arm/hand symptoms", "resolved or minimal, no red-flag signs"],
          ["Full work/sport task tolerance", "no flare"]
        ],
        exercises: [
          {
            name: "Progressive Resisted Cervicoscapular Strengthening",
            load: "progressive band or dumbbell", tempo: "2s hold", reps: "3×12", range: "full scapular retraction/depression",
            subs: ["Prone I-Y-T series"]
          },
          {
            name: "Functional / Task-Specific Loading",
            load: "progressive to work/sport-equivalent", tempo: "controlled", reps: "3×8", range: "full functional range",
            subs: ["Farmer's carry (progressive load)"]
          },
          {
            name: "General Aerobic Conditioning",
            load: "none/light", tempo: "steady", reps: "3×20–30 min/week", range: "n/a",
            subs: ["Walking programme", "Stationary bike"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // MENISCUS TEAR · CONSERVATIVE & PATELLAR INSTABILITY · CONSERVATIVE — added
  // 21 Aug 2026, closing the two knee-region gaps the practising physio partner
  // flagged. Same pattern as the Achilles/Whiplash/Groin/Neck/Radiculopathy
  // additions above: drafted with independently PubMed-verified citations (via
  // eutils, not pubmed.ncbi.nlm.nih.gov directly — that endpoint cookie-walls
  // fetches) but NOT yet wired into condition_library. Neither is a duplicate
  // of an existing entry:
  //   - Meniscus_Tear_Conservative is to Meniscus_Repair what ACL_Conservative
  //     is to ACL_Reconstruction — a genuinely different course (no repair to
  //     protect, no weight-bearing/ROM restriction, exercise-therapy-first from
  //     week 1) for tears managed without surgery, not a pathway flag on the
  //     post-op protocol. 12-week arc (vs. the post-op protocol's 16) because
  //     there's no graft/repair-healing timeline constraining it.
  //   - Patellar_Instability_Conservative is NOT Patellofemoral_Pain_Syndrome
  //     under another name: PFPS is anterior pain from maltracking, this is
  //     structural/ligamentous instability (usually post-traumatic dislocation)
  //     where the defining risk is another dislocation, not pain. Its gates are
  //     built around that distinction — an apprehension-sign check and hop/
  //     strength symmetry at return to sport, not just pain and ROM.
  // See docs/PROTOCOL-REVIEW.md's 2026-08-21 entries for the full literature
  // and, importantly, self-flagged concerns on both: Meniscus_Tear_Conservative
  // blends three trial populations (isolated degenerative tear / nonobstructive
  // tear / tear-with-OA) under one arc without a phenotype branch, and its
  // "refer to surgery if not improving by week 12" gate is a reasonable
  // clinical compression, not a cited timepoint. Patellar_Instability_
  // Conservative has no risk-stratification branch for the anatomic factors
  // (trochlear dysplasia, patella alta, elevated TT-TG, open physis) that its
  // own cited evidence shows drive recurrence from ~10% to ~70-80% — the same
  // class of gap already noted on ACL_Conservative's missing coper/non-coper
  // branch above.
  // ============================================================================

  "Meniscus_Tear_Conservative": {
    tier: "injury",
    category: "knee",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Symptom Control & Early Activation (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Knee effusion", "settled or clearly reducing"],
          ["Knee extension ROM", "full, 0° active"],
          ["Quad activation (straight leg raise)", "no lag"],
          ["Mechanical locking/catching", "absent — persistent locking is a surgical-referral flag, not managed on this pathway"]
        ],
        exercises: [
          {
            name: "Quad Sets (Supine)",
            load: "bodyweight", tempo: "5s squeeze/5s release", reps: "4×15–20", range: "0–15° knee bend",
            subs: ["VMO quad set", "Seated quad set"]
          },
          {
            name: "Straight Leg Raise (4-way)",
            load: "bodyweight", tempo: "3s lift/3s lower", reps: "3×10", range: "full",
            subs: ["Short arc quads", "Prone knee extension"]
          },
          {
            name: "Mini-Squat (Bilateral, Shallow)",
            load: "bodyweight", tempo: "3s down/2s up", reps: "3×12", range: "0→45° knee bend",
            subs: ["Sit-to-stand (18in chair)", "Wall squat (back supported)"]
          },
          {
            name: "Stationary Bike (Low Resistance)",
            load: "low resistance", tempo: "steady", reps: "10–15 min", range: "n/a",
            subs: ["Pool walking", "Elliptical (light)"]
          },
          {
            name: "Standing Hip Abduction",
            load: "bodyweight", tempo: "2s out/2s in", reps: "3×15", range: "45° abduction",
            subs: ["Side-lying abduction", "Monster walk (band)"]
          }
        ]
      },
      {
        name: "Progressive Strengthening & Neuromuscular Control (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Quadriceps strength", "within 20% of uninjured side"],
          ["Single-leg squat (partial depth)", "10 reps controlled, no pain"],
          ["Pain with functional loading (stairs, squatting)", "VAS <3/10"],
          ["Mechanical-symptom trend", "improving — if unchanged or worse by week 8, discuss surgical referral"]
        ],
        exercises: [
          {
            name: "Leg Press (0–90° knee)",
            load: "bodyweight, progress +5–10lbs/week", tempo: "3s lower/2s drive", reps: "3×10–12", range: "0→90° knee",
            subs: ["Hack squat", "Sled machine"]
          },
          {
            name: "Step-Up (6in box)",
            load: "bodyweight → 10lbs/hand", tempo: "3s up/3s down", reps: "3×10 per leg", range: "full ROM",
            subs: ["Lateral step-up", "Step-down (eccentric)"]
          },
          {
            name: "Copenhagen Adductor Squeeze",
            load: "pillow (30cmx30cm)", tempo: "3s squeeze/2s release", reps: "3×12", range: "pain-free ROM",
            subs: ["Adductor machine", "Sidelying adduction"]
          },
          {
            name: "Single-Leg Balance",
            load: "none", tempo: "static", reps: "3×30s", range: "eyes open → closed",
            subs: ["Tandem stance", "Wobble board"]
          },
          {
            name: "Romanian Deadlift (Light)",
            load: "start 25–45lbs, +5–10lbs/week", tempo: "3s lower/2s drive", reps: "3×10", range: "chest to knee",
            subs: ["Trap bar deadlift", "Single-leg RDL (light)"]
          }
        ]
      },
      {
        name: "Return to Function / Sport & Outcome Review (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Patient-reported knee function (KOOS/IKDC)", "improving trend toward patient's functional goal"],
          ["Single-leg hop for distance", "symmetric, pain-free"],
          ["Sport/activity-specific loading", "full intensity tolerated, no next-day swelling reaction"],
          ["12-week outcome checkpoint", "if function has plateaued or mechanical symptoms persist, refer for a surgical opinion rather than continuing this pathway unchanged"]
        ],
        exercises: [
          {
            name: "Bulgarian Split Squat",
            load: "bodyweight → dumbbells 10–15lbs", tempo: "3s down/2s up", reps: "3×8–10 per leg", range: "full front leg depth",
            subs: ["Single-leg squat to box", "Forward lunge"]
          },
          {
            name: "Single-Leg Hop Series",
            load: "bodyweight", tempo: "controlled land", reps: "3×5", range: "forward/lateral",
            subs: ["Triple hop for distance"]
          },
          {
            name: "Agility & Sport Simulation",
            load: "none", tempo: "sport-speed", reps: "3×sport-specific drills", range: "brisk walk → jog → sport",
            subs: ["Figure-8 running", "Shuttle runs"]
          },
          {
            name: "Progressive Running / Return-to-Sport Progression",
            load: "none", tempo: "graded speed", reps: "progressive volume, 70→90→100%", range: "n/a",
            subs: ["Interval running", "Sport simulation"]
          }
        ]
      }
    ]
  },

  "Patellar_Instability_Conservative": {
    tier: "injury",
    category: "knee_anterior",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Protect & Early Activation (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Knee effusion", "settled or clearly reducing"],
          ["Knee extension ROM", "full, 0° active"],
          ["Quad activation (straight leg raise)", "no lag"],
          ["Pain at rest", "VAS <3/10"]
        ],
        exercises: [
          {
            name: "Quad Sets (Supine)",
            load: "bodyweight", tempo: "5s squeeze/5s release", reps: "4×15–20", range: "0–15° knee bend",
            subs: ["VMO quad set", "Seated quad set"]
          },
          {
            name: "Straight Leg Raise (4-way)",
            load: "bodyweight", tempo: "3s lift/3s lower", reps: "3×10", range: "full",
            subs: ["Short arc quads"]
          },
          {
            name: "Mini-Squat (Protected Range)",
            load: "bodyweight", tempo: "3s down/2s up", reps: "3×12", range: "0→45°, avoiding combined flexion + valgus",
            subs: ["Wall squat (back supported)", "Sit-to-stand (18in chair)"]
          },
          {
            name: "Standing Hip Abduction",
            load: "bodyweight", tempo: "2s out/2s in", reps: "3×15", range: "45° abduction",
            subs: ["Side-lying abduction", "Clamshell"]
          },
          {
            name: "Glute Bridge (Isometric)",
            load: "bodyweight", tempo: "5s hold", reps: "3×12", range: "mild hip extension only",
            subs: ["Supine hip extension (hands-supported)"]
          }
        ]
      },
      {
        name: "Progressive Strength & Neuromuscular Control (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Quadriceps strength", "≥80% of uninjured side"],
          ["Single-leg squat control", "10 reps, no dynamic valgus collapse, no apprehension"],
          ["Step-down control", "10 reps per leg, no valgus, no apprehension"],
          ["Pain with functional loading", "VAS <3/10"]
        ],
        exercises: [
          {
            name: "Squat / Leg Press (Progressive Load)",
            load: "bodyweight → progressive load", tempo: "3s down/2s up", reps: "3×10–12", range: "0→90° knee",
            subs: ["Hack squat", "Leg press"]
          },
          {
            name: "Step-Down (Eccentric Control)",
            load: "bodyweight", tempo: "3s down/1s up", reps: "3×10 per leg", range: "6–12in step height",
            subs: ["Lateral step-down", "Forward step-down"]
          },
          {
            name: "Copenhagen Adductor / Hip Strengthening",
            load: "pillow squeeze / band", tempo: "3s squeeze/2s release", reps: "3×12", range: "pain-free ROM",
            subs: ["Adductor machine", "Sidelying adduction"]
          },
          {
            name: "Glute Medius (Side-Lying Abduction / Band Walk)",
            load: "bodyweight → light band", tempo: "2s lift/2s lower", reps: "3×15", range: "45° abduction",
            subs: ["Monster walk (band)", "Lateral band walk"]
          },
          {
            name: "Single-Leg Balance & Perturbation",
            load: "none", tempo: "static → dynamic", reps: "3×30s", range: "eyes open → closed, unstable surface",
            subs: ["Wobble board", "Partner-assisted perturbation"]
          }
        ]
      },
      {
        name: "Return to Sport — Instability-Specific Clearance (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Patellar apprehension sign (terminal extension / ~30° flexion)", "negative"],
          ["Quadriceps strength", "≥90% limb symmetry index"],
          ["Single-leg hop for distance", "≥90% limb symmetry index"],
          ["Sport-specific cutting/pivoting/landing", "confident, controlled mechanics, no apprehension"]
        ],
        exercises: [
          {
            name: "Plyometric Progression (Jump-Land)",
            load: "bodyweight", tempo: "explosive concentric, controlled landing", reps: "3×8", range: "double-leg → single-leg progression",
            subs: ["Box jump (low height)", "Depth jump (progressive height)"]
          },
          {
            name: "Lateral Bound / Cutting Drills",
            load: "bodyweight", tempo: "progressive speed", reps: "3×8 per direction", range: "controlled cutting angles",
            subs: ["Shuttle run (controlled)", "Deceleration-to-stop drills"]
          },
          {
            name: "Sport-Specific Agility",
            load: "none", tempo: "sport-speed", reps: "3×sport-specific drills", range: "80→90→100% intensity",
            subs: ["Figure-8 running", "T-drill"]
          },
          {
            name: "Continued Hip/Quad Strength Maintenance",
            load: "progressive", tempo: "controlled", reps: "2×/week maintenance dosing", range: "full",
            subs: ["Copenhagen adductor squeeze", "Glute medius work"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // SHIN SPLINTS/MTSS · TIBIAL STRESS FRACTURE (low-risk) · THORACIC SPINE PAIN ·
  // PREGNANCY-RELATED PELVIC GIRDLE PAIN & POSTPARTUM — added 21 Aug 2026,
  // closing four more of the gaps the practising physio partner flagged.
  // Independently PubMed-verified via eutils (not pubmed.ncbi.nlm.nih.gov
  // directly — cookie-walled). NOT yet wired into condition_library. See
  // docs/PROTOCOL-REVIEW.md's 2026-08-21 entries for full literature and
  // self-flagged concerns — several are substantive, not boilerplate:
  //   - Shin_Splints_MTSS has NO verified citation — every gate number is
  //     generic rehab practice, not traced to an MTSS-specific paper. Ships
  //     as draft-only by design, not an oversight.
  //   - Tibial_Stress_Fracture_LowRisk is deliberately narrowed from "lower-
  //     limb stress fracture" — high-risk sites (anterior tibial cortex,
  //     femoral neck, navicular, 5th metatarsal base, medial malleolus,
  //     talus) and metatarsal fractures are explicitly excluded, named in its
  //     own Phase 1 gate, not just this comment. The 14-week arc is a
  //     compromise across a >2x real spread in return-to-sport time by
  //     imaging grade (Hoenig 2022) — it does not stratify by grade.
  //   - Thoracic_Spine_Pain rests on a genuinely thin evidence base (no CPG
  //     exists for this region the way JOSPT has one for neck/low back) and
  //     its two supporting RCTs conflict on whether manipulation adds
  //     anything over exercise alone — manual therapy is kept as an optional
  //     adjunct in Phase 2 for that reason, not a required exercise. The
  //     ODI-adapted instrument and its ≤30%/≤10% thresholds are the lumbar/
  //     cervical convention borrowed wholesale — no thoracic-validated
  //     instrument exists, confirmed by a 2026 scoping review.
  //   - Pregnancy_Pelvic_Girdle_Pain has a genuine schema mismatch: Phase 1
  //     spans pregnancy itself, where there is no discharge, only delivery —
  //     its gates are "maintain/monitor" criteria wearing this catalog's
  //     "progress when" phrasing, not real progression milestones, and the
  //     12-week Phase 1 duration is a nominal placeholder, not a real target.
  //     The full pregnancy→postpartum arc is this draft's own synthesis
  //     stitching together five research groups' work (Vleeming, Elden,
  //     Davenport, Stuge, Donnelly/Goom/Brockwell) that was never studied as
  //     one continuous programme — every citation is real and correctly
  //     matched to its specific claim, but the arc connecting them is not
  //     itself validated end-to-end. The largest single pregnancy-phase RCT
  //     found (Elden 2005, n=386) found acupuncture outperformed stabilizing
  //     exercise — this protocol, being PT-only, doesn't offer that arm.
  // ============================================================================

  "Shin_Splints_MTSS": {
    tier: "injury",
    category: "lower_leg",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Protect / Load Reduction (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Bony tenderness, posteromedial tibial border", "resolved, no longer reproducible on palpation"],
          ["Pain-free walking", "30+ min continuous"],
          ["Single-leg hop", "pain ≤3/10, tolerated"]
        ],
        exercises: [
          {
            name: "Isometric Calf Hold",
            load: "bodyweight", tempo: "45s hold", reps: "3×45s", range: "neutral ankle",
            subs: ["Seated isometric calf press (band)"]
          },
          {
            name: "Non-Impact Aerobic Cross-Training",
            load: "bike/pool", tempo: "steady", reps: "4–5×/week, 20–30 min", range: "n/a",
            subs: ["Deep-water running", "Stationary bike"]
          },
          {
            name: "Hip Abductor Activation (Side-Lying)",
            load: "bodyweight", tempo: "2s hold", reps: "3×15", range: "45° abduction",
            subs: ["Clamshells", "Banded side-lying abduction"]
          },
          {
            name: "Ankle Dorsi/Plantarflexion Strengthening",
            load: "light band", tempo: "2s each direction", reps: "3×12", range: "full ankle ROM",
            subs: ["Towel-scrunches (toes)"]
          }
        ]
      },
      {
        name: "Build Strength & Capacity (Weeks 4–7)",
        wks: 4,
        gates: [
          ["Pain-free daily walking activity", "5 consecutive days"],
          ["Single-leg calf raise", "≥20 reps, pain-free"],
          ["Single-leg hop", "pain-free, ≥10 consecutive"]
        ],
        exercises: [
          {
            name: "Single-Leg Calf Raise (Progressive)",
            load: "bodyweight → weighted", tempo: "2s up/2s down", reps: "3×15", range: "full ROM",
            subs: ["Double-leg calf raise (interim step)"]
          },
          {
            name: "Eccentric Calf Lowering",
            load: "bodyweight", tempo: "5s eccentric", reps: "3×10", range: "full dorsiflexion",
            subs: ["Double-leg eccentric lowering"]
          },
          {
            name: "Glute Medius / Hip Strengthening",
            load: "band → light weight", tempo: "2s hold", reps: "3×15", range: "full ROM",
            subs: ["Monster walks (band)", "Lateral band walks"]
          },
          {
            name: "Double-Leg Hop Series (Low Amplitude)",
            load: "bodyweight", tempo: "controlled landing", reps: "3×10", range: "low amplitude",
            subs: ["Line hops"]
          }
        ]
      },
      {
        name: "Graded Return to Running (Weeks 8–12)",
        wks: 5,
        gates: [
          ["Walk-run intervals", "no pain during, immediately after, or the following morning"],
          ["Running distance progression", "distance increased ahead of pace/intensity"],
          ["Continuous running", "30 min at prior training pace, pain-free"]
        ],
        exercises: [
          {
            name: "Structured Walk-Run Interval Progression",
            load: "bodyweight", tempo: "progressive volume", reps: "3–4×/week", range: "n/a",
            subs: ["Time-based interval progression (clinician-set)"]
          },
          {
            name: "Calf Raise Strength Maintenance",
            load: "bodyweight → weighted", tempo: "2s up/2s down", reps: "3×15", range: "full ROM",
            subs: []
          },
          {
            name: "Hill / Terrain Reintroduction",
            load: "bodyweight", tempo: "progressive, introduced last", reps: "as tolerated", range: "n/a",
            subs: ["Treadmill incline progression"]
          },
          {
            name: "Hip / Ankle Strength Maintenance",
            load: "band → light weight", tempo: "2s hold", reps: "2×/week", range: "full ROM",
            subs: []
          }
        ]
      }
    ]
  },

  "Tibial_Stress_Fracture_LowRisk": {
    tier: "injury",
    category: "lower_leg",
    arc: 14,
    evidence: [],
    phases: [
      {
        name: "Protected Healing & Symptom Control (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Bony point tenderness on palpation", "resolved"],
          ["Pain-free walking", "30+ min continuous"],
          ["Pain-free daily activity", "5 consecutive days"],
          ["Fracture site confirmed low-risk by imaging/clinician exam", "confirmed before progressing to Phase 2 — high-risk sites (anterior tibial cortex, femoral neck, navicular, 5th metatarsal base, medial malleolus, talus) and metatarsal stress fractures are excluded from this protocol"]
        ],
        exercises: [
          {
            name: "Non-Impact Cross-Training (Pool Running / Cycling)",
            load: "bodyweight", tempo: "steady", reps: "4–5×/week, 20–30 min", range: "n/a",
            subs: ["Deep-water running", "Stationary bike"]
          },
          {
            name: "Calf / Ankle Isometrics",
            load: "bodyweight", tempo: "45s hold", reps: "3×45s", range: "neutral ankle",
            subs: []
          },
          {
            name: "General Lower-Limb Strength Maintenance (Non-Impact)",
            load: "bodyweight → light band", tempo: "controlled", reps: "2–3×/week", range: "full ROM",
            subs: ["Seated leg press (light)"]
          },
          {
            name: "Activity / Load Modification Education",
            load: "none", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: []
          }
        ]
      },
      {
        name: "Graded Loading & Strength Rebuild (Weeks 5–9)",
        wks: 5,
        gates: [
          ["Walk-run intervals", "no pain during, immediately after, or the following morning"],
          ["Single-leg hop", "pain-free, ≥10 consecutive"],
          ["Single-leg calf raise", "≥20 reps, pain-free"],
          ["Running distance progression", "distance increased ahead of pace/intensity"]
        ],
        exercises: [
          {
            name: "Walk-Run Interval Progression",
            load: "bodyweight", tempo: "progressive volume", reps: "3–4×/week", range: "n/a",
            subs: []
          },
          {
            name: "Single-Leg Calf Raise",
            load: "bodyweight → weighted", tempo: "2s up/2s down", reps: "3×15", range: "full ROM",
            subs: []
          },
          {
            name: "Hip / Glute Strengthening",
            load: "band → light weight", tempo: "2s hold", reps: "3×15", range: "full ROM",
            subs: ["Monster walks (band)"]
          },
          {
            name: "Low-Amplitude Double-Leg Hop Introduction",
            load: "bodyweight", tempo: "controlled landing", reps: "3×10", range: "low amplitude",
            subs: []
          }
        ]
      },
      {
        name: "Return to Running & Impact Tolerance (Weeks 10–14)",
        wks: 5,
        gates: [
          ["Continuous running", "30 min at prior training pace, pain-free during/after/next-day"],
          ["Single-leg hop series", "pain-free, symmetrical"],
          ["Full training load (volume + intensity + terrain)", "tolerated 2+ weeks without symptom recurrence"]
        ],
        exercises: [
          {
            name: "Progressive Running Volume / Intensity Build",
            load: "bodyweight", tempo: "progressive", reps: "3–5×/week", range: "n/a",
            subs: []
          },
          {
            name: "Plyometric Progression (Single-Leg Hops, Bounding)",
            load: "bodyweight", tempo: "controlled landing", reps: "2–3×/week", range: "n/a",
            subs: []
          },
          {
            name: "Sport-Specific Drills",
            load: "bodyweight", tempo: "as prescribed", reps: "2×/week", range: "n/a",
            subs: []
          },
          {
            name: "Continued Strength Maintenance",
            load: "band → light weight", tempo: "controlled", reps: "2×/week", range: "full ROM",
            subs: []
          }
        ]
      }
    ]
  },

  "Thoracic_Spine_Pain": {
    tier: "injury",
    category: "thoracic_spine",
    arc: 8,
    evidence: [],
    phases: [
      {
        name: "Safety Screen & Symptom Management (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Serious pathology screen (fracture, malignancy, cardiac/pulmonary/aortic referral, ankylosing spondylitis)", "negative — day-1 screen before treatment begins, positive triggers urgent medical referral"],
          ["Pain (NPRS)", "≤4/10"],
          ["Thoracic active ROM (flexion/extension/rotation)", "pain-free arc, baseline tracked"]
        ],
        exercises: [
          {
            name: "Thoracic Extension Self-Mobilization (Foam Roller)",
            load: "bodyweight", tempo: "slow", reps: "3×10", range: "pain-free extension",
            subs: ["Doorway thoracic extension stretch"]
          },
          {
            name: "Thoracic Rotation AROM",
            load: "bodyweight", tempo: "slow, controlled", reps: "3×10 each side", range: "pain-free rotation",
            subs: ["Seated thoracic rotation"]
          },
          {
            name: "Postural & Load Management Education",
            load: "none", tempo: "as needed", reps: "throughout day", range: "n/a",
            subs: ["Workstation ergonomic review"]
          }
        ]
      },
      {
        name: "Progressive Manual Therapy & Loading (Weeks 3–6)",
        wks: 4,
        gates: [
          ["Modified Oswestry Disability Index (thoracic-adapted)", "≤30% — borrowed convention, no thoracic-validated instrument exists (see review notes)"],
          ["Thoracic rotation/extension AROM", "full or near-full"]
        ],
        exercises: [
          {
            name: "Thoracic Manipulation / Mobilization (Clinician-Delivered)",
            load: "n/a", tempo: "per technique", reps: "per session", range: "n/a",
            subs: ["Optional adjunct — evidence for added benefit over exercise alone is mixed, see review notes"]
          },
          {
            name: "Scapular / Thoracic Extensor Strengthening",
            load: "light band → dumbbell", tempo: "2s hold", reps: "3×12", range: "full scapular retraction",
            subs: ["Prone I-Y-T series", "Band rows"]
          },
          {
            name: "Progressive Thoracic Extension Loading",
            load: "bodyweight → light load", tempo: "controlled", reps: "3×10", range: "full extension",
            subs: []
          }
        ]
      },
      {
        name: "Return to Function (Weeks 7–8)",
        wks: 2,
        gates: [
          ["Modified Oswestry Disability Index (thoracic-adapted)", "≤10%"],
          ["Full work/activity tolerance", "no next-day flare"]
        ],
        exercises: [
          {
            name: "General Aerobic Conditioning",
            load: "none/light", tempo: "steady", reps: "3×20–30 min/week", range: "n/a",
            subs: ["Walking programme", "Stationary bike"]
          },
          {
            name: "Task-Specific Loading",
            load: "progressive to task-equivalent", tempo: "controlled", reps: "3×8", range: "full functional range",
            subs: []
          }
        ]
      }
    ]
  },

  "Pregnancy_Pelvic_Girdle_Pain": {
    tier: "injury",
    category: "pelvis",
    arc: 20,
    evidence: [],
    phases: [
      {
        name: "Pregnancy: Safe Symptom Management (Diagnosis to Delivery)",
        wks: 12,
        gates: [
          ["Red-flag screen (saddle anaesthesia, bowel/bladder change, progressive neuro deficit, fever)", "negative — standing check throughout, escalates to urgent referral if positive; this exact cluster is a safety addition, not literature-derived for PGP specifically"],
          ["Pain (NRS)", "stable or improving trend — no fixed numeric target; mechanical demand increases with gestation"],
          ["Functional mobility (transfers, stairs, turning in bed)", "maintained, tolerable — this phase is monitored, not progressed toward discharge; there is no discharge from pregnancy, only delivery"]
        ],
        exercises: [
          {
            name: "Individualized Stabilizing Exercise (TA / Pelvic Floor / Gluteal Activation)",
            load: "bodyweight, non-provocative", tempo: "3s hold", reps: "3×10", range: "symptom-guided",
            subs: []
          },
          {
            name: "Positional / Load Modification Education",
            load: "none", tempo: "n/a", reps: "daily", range: "n/a",
            subs: ["Avoid prolonged single-leg stance, wide-stance loading, asymmetric lifting, prolonged supine positioning after ~20 weeks gestation"]
          },
          {
            name: "Aquatic Walking / General Low-Impact Aerobic Activity",
            load: "bodyweight", tempo: "steady", reps: "as tolerated", range: "n/a",
            subs: ["Stationary bike (upright)"]
          },
          {
            name: "SI Belt / External Pelvic Support",
            load: "n/a", tempo: "n/a", reps: "as needed", range: "n/a",
            subs: ["Adjunct only, symptom-guided"]
          }
        ]
      },
      {
        name: "Early Postpartum Restoration (Weeks 0–6 Postpartum)",
        wks: 6,
        gates: [
          ["Basic ADL / transfer tolerance", "pain-free or minimal"],
          ["Pelvic floor symptom screen (leaking, heaviness, bulge)", "screened; refer to pelvic health specialist if positive"],
          ["Abdominal wall / diastasis (inter-recti gap, doming under load)", "closing trend, no doming — functional proxy, no validated cutoff exists (see review notes)"]
        ],
        exercises: [
          {
            name: "Pelvic Floor Activation (Breath-Linked)",
            load: "bodyweight", tempo: "breath-linked", reps: "3×10", range: "n/a",
            subs: []
          },
          {
            name: "Deep Core / TA Activation (Breath-Linked)",
            load: "bodyweight", tempo: "breath-linked", reps: "3×10", range: "n/a",
            subs: []
          },
          {
            name: "Graded Walking",
            load: "bodyweight", tempo: "steady", reps: "build daily volume as tolerated", range: "n/a",
            subs: []
          }
        ]
      },
      {
        name: "Progressive Postpartum Loading & Return to Impact (Weeks 6–20 Postpartum)",
        wks: 2,
        gates: [
          ["Pelvic Girdle Questionnaire (PGQ)", "improvement ≥25 points from baseline (minimal important change)"],
          ["Impact-readiness cluster (pain-free 30-min walk; 10s single-leg balance; 10 single-leg squats/side; 10 forward bounds, all symptom-free)", "achieved before return to running/high-impact — consensus-level criteria, not RCT-derived"],
          ["Functional task tolerance (lifting/carrying child, stairs)", "pain-free"]
        ],
        exercises: [
          {
            name: "Progressive Specific Stabilizing Exercise",
            load: "bodyweight → light load", tempo: "controlled", reps: "3×10–15", range: "full functional range",
            subs: []
          },
          {
            name: "Progressive Hip / Glute Loaded Strengthening",
            load: "band → dumbbell", tempo: "controlled", reps: "3×10", range: "full ROM",
            subs: []
          },
          {
            name: "Impact-Readiness Drills (Single-Leg Squat, Forward Bounds Progression)",
            load: "bodyweight", tempo: "controlled landing", reps: "per readiness criteria above", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  // ============================================================================
  // ACHILLES TENDON RUPTURE · NON-OPERATIVE · PERONEAL TENDINOPATHY — added
  // 21 Aug 2026. Independently PubMed-verified via eutils. NOT yet wired into
  // condition_library. See docs/PROTOCOL-REVIEW.md's 2026-08-21 entries:
  //   - Achilles_Tendon_Rupture_Conservative is distinct from both
  //     Achilles_Tendon_Repair (surgical) and Achilles_Tendinopathy (chronic
  //     overuse) already in the catalog — functional bracing/wedge-weaning,
  //     not post-surgical protection or eccentric-loading of a degenerated
  //     tendon. Unexpectedly well-sourced: UKSTAR (Costa et al. 2020, n=540)
  //     plus multiple RCTs comparing non-op to surgical repair. Phase 3
  //     deliberately converges with Achilles_Tendon_Repair's late-stage
  //     content — the RCT evidence shows outcomes converge regardless of
  //     op/non-op by that point, not an authoring shortcut. The wedge-count
  //     schedule in Phase 1 is illustrative (UKSTAR itself leaves wedge
  //     timing to clinician discretion), not a literature mandate.
  //   - Peroneal_Tendinopathy is the thinnest-sourced entry in this file:
  //     draft-only, no peroneal-specific validated PROM exists (no VISA-A/
  //     ATRS equivalent), and the 3-phase loading structure is inferred from
  //     general tendon-loading physiology, not peroneal-specific RCTs. The
  //     DiGiovanni 2000 citation (77% of a surgical instability cohort had
  //     peroneal tenosynovitis) is real but easy to misread — it describes a
  //     surgical instability population, not a peroneal-tendinopathy outcome
  //     study; flagged explicitly so it isn't quoted the wrong way round.
  // ============================================================================

  "Achilles_Tendon_Rupture_Conservative": {
    tier: "injury",
    category: "ankle_posterior",
    arc: 24,
    evidence: [],
    phases: [
      {
        name: "Equinus Boot & Wedge Weaning (Weeks 1–8)",
        wks: 8,
        gates: [
          ["Weight-bearing in boot", "full WB tolerated, pain ≤3/10"],
          ["Heel wedges", "progressed to neutral (plantigrade) by week 8, boot ready to discontinue"],
          ["Clinical rupture check (palpable gap, Thompson/Simmonds test)", "negative at each review"]
        ],
        exercises: [
          {
            name: "Isometric Calf Set (In-Boot)",
            load: "bodyweight, submaximal", tempo: "10s hold", reps: "3×10s", range: "pain-free",
            subs: []
          },
          {
            name: "Toe Curls & Intrinsic Foot Activation",
            load: "bodyweight", tempo: "controlled", reps: "3×15", range: "full toe flexion",
            subs: []
          },
          {
            name: "Hip/Knee Maintenance Circuit (Non-Ankle-Loading)",
            load: "bodyweight", tempo: "controlled", reps: "3×15", range: "full ROM",
            subs: ["Seated knee extension", "Hip abduction"]
          },
          {
            name: "Progressive Weight-Bearing Gait in Boot",
            load: "boot-protected", tempo: "per wedge schedule", reps: "crutches weaned to full WB", range: "n/a",
            subs: []
          }
        ]
      },
      {
        name: "Boot Discontinuation & Early Strengthening (Weeks 9–16)",
        wks: 8,
        gates: [
          ["Dorsiflexion ROM", "within 10° of contralateral"],
          ["Double-leg heel raise", "20 reps unassisted, full ROM"],
          ["Achilles tendon Total Rupture Score (ATRS)", "≥70"],
          ["Single-leg stance", "30s stable"]
        ],
        exercises: [
          {
            name: "Calf Raise (Double-Leg → Single-Leg Progression)",
            load: "bodyweight", tempo: "2s up/2s down", reps: "3×15", range: "full ROM",
            subs: []
          },
          {
            name: "Active Dorsi/Plantarflexion ROM (Band-Resisted)",
            load: "light band", tempo: "controlled", reps: "3×15", range: "full ankle ROM",
            subs: []
          },
          {
            name: "Single-Leg Balance Progression",
            load: "none", tempo: "static", reps: "3×30s", range: "eyes open → closed",
            subs: []
          },
          {
            name: "Stationary Bike (Low-Resistance)",
            load: "low resistance", tempo: "steady", reps: "10–15 min", range: "n/a",
            subs: []
          },
          {
            name: "Gait Retraining (Heel-Toe Pattern, Boot-Free)",
            load: "bodyweight", tempo: "controlled", reps: "as needed", range: "n/a",
            subs: []
          }
        ]
      },
      {
        name: "Strength & Return to Sport (Weeks 17–24)",
        wks: 8,
        gates: [
          ["Single-leg heel raise", "15 reps unassisted, full ROM"],
          ["ATRS", "≥85"],
          ["Running tolerance", "20 min outdoor, pain-free"],
          ["Hop/agility symmetry", "no limp on cutting drills"]
        ],
        exercises: [
          {
            name: "Single-Leg Hop Series",
            load: "bodyweight", tempo: "controlled landing", reps: "3×5, progressive", range: "forward/lateral",
            subs: []
          },
          {
            name: "Plyometric Progression (Box Hops)",
            load: "bodyweight", tempo: "controlled landing", reps: "3×8", range: "progressive height",
            subs: []
          },
          {
            name: "Running Progression (Treadmill → Outdoor → Sport)",
            load: "bodyweight", tempo: "progressive", reps: "3–4×/week", range: "n/a",
            subs: []
          },
          {
            name: "Cutting & Deceleration Drill",
            load: "bodyweight", tempo: "progressive speed", reps: "3×8", range: "controlled angles",
            subs: []
          },
          {
            name: "Sport-Specific Return-to-Play",
            load: "none", tempo: "sport-speed", reps: "per return-to-play criteria above", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  "Peroneal_Tendinopathy": {
    tier: "injury",
    category: "ankle",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Protect & Isometric Loading (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Resisted eversion (isometric test)", "pain ≤3/10"],
          ["Walking tolerance", "no limp, pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Isometric Eversion Hold (Band-Resisted)",
            load: "light band", tempo: "45s hold", reps: "3×45s", range: "mid-range, pain-free",
            subs: []
          },
          {
            name: "Ankle Proprioception (Seated / Non-Weight-Bearing)",
            load: "light band", tempo: "controlled", reps: "3×10", range: "pain-free",
            subs: []
          },
          {
            name: "Peroneal / Lateral Compartment Soft Tissue & Mobility",
            load: "none", tempo: "slow, symptom-easing only", reps: "as tolerated", range: "n/a",
            subs: []
          },
          {
            name: "Footwear & Orthotic Review",
            load: "n/a", tempo: "n/a", reps: "clinical review", range: "n/a",
            subs: ["Lateral wedge consideration, given the hindfoot-varus association"]
          }
        ]
      },
      {
        name: "Progressive Isotonic Loading (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Manual eversion strength", "improving trend — no validated instrument exists for a numeric threshold here"],
          ["Single-leg balance", "30s stable, pain-free"],
          ["Resisted eversion at increased band resistance", "3×15 pain-free"]
        ],
        exercises: [
          {
            name: "Isotonic / Eccentric-Emphasis Eversion (Band or Cable)",
            load: "progressive band/cable resistance", tempo: "3s eccentric", reps: "3×15", range: "full eversion ROM",
            subs: []
          },
          {
            name: "Single-Leg Balance Progression",
            load: "none", tempo: "static → dynamic", reps: "3×30s", range: "eyes open → closed",
            subs: []
          },
          {
            name: "Calf Raise (Double → Single-Leg)",
            load: "bodyweight", tempo: "2s up/2s down", reps: "3×15", range: "full ROM",
            subs: []
          },
          {
            name: "Lateral Step-Down / Step-Up",
            load: "bodyweight", tempo: "controlled", reps: "3×10 per leg", range: "6–8in step",
            subs: []
          }
        ]
      },
      {
        name: "Return to Activity (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Single-leg heel raise", "pain-free, 15+ reps"],
          ["Sport-specific lateral movement / cutting", "tolerated pain-free"],
          ["Return to running/sport volume", "graded, pain-free"]
        ],
        exercises: [
          {
            name: "Lateral Bound / Cutting Drills",
            load: "bodyweight", tempo: "progressive speed", reps: "3×8 per direction", range: "controlled angles",
            subs: []
          },
          {
            name: "Single-Leg Hop Series",
            load: "bodyweight", tempo: "controlled landing", reps: "3×5", range: "forward/lateral",
            subs: []
          },
          {
            name: "Progressive Running / Agility Volume",
            load: "bodyweight", tempo: "progressive", reps: "3–4×/week", range: "n/a",
            subs: []
          },
          {
            name: "Maintenance Eversion Strengthening",
            load: "band", tempo: "controlled", reps: "2–3×/week ongoing", range: "full ROM",
            subs: []
          }
        ]
      }
    ]
  },

  // ============================================================================
  // PIRIFORMIS SYNDROME / DEEP GLUTEAL SYNDROME · GLENOHUMERAL OSTEOARTHRITIS
  // (CONSERVATIVE) — added 21 Aug 2026, closing the last two of this round's
  // physio-flagged gaps. See docs/PROTOCOL-REVIEW.md's 2026-08-21 entries:
  //   - Piriformis_Deep_Gluteal_Syndrome: "has verified citations" rests
  //     entirely on the diagnostic/differential apparatus (Martin 2014's
  //     combined-test criteria, Bateman 2025's lumbar-mimic screen) — no
  //     exercise-dosed RCT exists for this condition at all. The Phase 1–3
  //     exercise selection is extrapolated from a single n=1 case report
  //     (Tonley 2010) and general nerve-entrapment rehab convention, not a
  //     trial that tested this program. Every systematic review found
  //     (Hopayian 2010/2018/2023) confirms the diagnostic entity itself is
  //     genuinely contested — that ambiguity should surface to the patient,
  //     not stay buried in the citation notes.
  //   - Glenohumeral_Osteoarthritis: the one real number (WOOS ≥12.3-point
  //     MCID, Nyring et al. 2021) was measured in a POST-ARTHROPLASTY
  //     cohort, not a conservatively-managed one — using it as a gate here
  //     is an extrapolation, not a direct match to this protocol's own
  //     population. The strongest-evidence exercise guidance in the
  //     literature (Michener 2023 APTA CPG) is for post-op rehab; for the
  //     conservative pathway this protocol actually covers, the same
  //     guideline only reaches "no one intervention superior." Differential
  //     overlap with rotator-cuff-related pain and adhesive capsulitis
  //     (both already in this catalog) is real and clinically important but
  //     not citation-backed in this draft — standard clinical teaching only.
  // ============================================================================

  "Piriformis_Deep_Gluteal_Syndrome": {
    tier: "injury",
    category: "hip_posterior",
    arc: 10,
    evidence: [],
    phases: [
      {
        name: "Differentiate & Desensitize (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Lumbar spine screen (neuro exam, SLR, dermatomal/myotomal pattern)", "clear, no red flags"],
          ["Buttock pain at rest", "≤3/10 for 3 consecutive days"],
          ["Seated tolerance", "≥30 min without symptom reproduction below the knee"],
          ["Sciatic nerve slider", "10 reps tolerated pain-free"]
        ],
        exercises: [
          {
            name: "Sciatic Nerve Slider (Seated Slump Slider)",
            load: "none", tempo: "slow, gliding", reps: "2×10, 2×/day", range: "pain-free slump-to-extension arc",
            subs: []
          },
          {
            name: "Piriformis Stretch (Supine, Hip Flexion <90°)",
            load: "bodyweight", tempo: "sustained", reps: "3×30s hold, 1–2×/day", range: "hip flexion <90°",
            subs: []
          },
          {
            name: "Isometric Gluteal Bridge",
            load: "bodyweight", tempo: "10s hold", reps: "5×10s", range: "neutral hip extension",
            subs: []
          },
          {
            name: "Activity / Load Modification Education",
            load: "none", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: ["Avoid prolonged compressive sitting"]
          }
        ]
      },
      {
        name: "Load the Deep Rotators & Hip (Weeks 4–7)",
        wks: 4,
        gates: [
          ["Combined active piriformis test + seated piriformis stretch test", "both negative (Martin et al. 2014 combined-test criteria)"],
          ["Hip external rotation / abduction strength", "≥4/5 MMT or within 20% of contralateral (handheld dynamometry)"],
          ["Single-leg bridge ×10", "no buttock/posterior thigh pain reproduction"],
          ["Sitting tolerance", "≥45 min pain-free"]
        ],
        exercises: [
          {
            name: "Side-Lying Clam (Band-Resisted)",
            load: "light band", tempo: "2s hold", reps: "3×15", range: "hip ER arc",
            subs: []
          },
          {
            name: "Standing Hip Abduction / ER Band Walks",
            load: "band", tempo: "controlled", reps: "3×10 per direction", range: "n/a",
            subs: []
          },
          {
            name: "Single-Leg Glute Bridge",
            load: "bodyweight", tempo: "2s hold", reps: "3×12", range: "full hip extension",
            subs: []
          },
          {
            name: "Progressive Nerve Tensioning (Gentle Slump with Knee Extension)",
            load: "none", tempo: "slow, controlled", reps: "2×8", range: "symptom-guided",
            subs: []
          }
        ]
      },
      {
        name: "Return to Load & Function (Weeks 8–10)",
        wks: 3,
        gates: [
          ["Hip ER/abduction strength", "within 10% of contralateral limb"],
          ["Single-leg squat ×10", "symptom-free"],
          ["Combined active piriformis + seated stretch test", "remains negative at re-test (sustained resolution)"],
          ["Sport/occupation-specific task (prolonged sitting, running, squatting)", "tolerated without symptom recurrence at 48h"]
        ],
        exercises: [
          {
            name: "Single-Leg Romanian Deadlift",
            load: "bodyweight → light dumbbell", tempo: "3s lower/2s drive", reps: "3×8", range: "hip hinge to shin",
            subs: []
          },
          {
            name: "Lateral Step-Down",
            load: "bodyweight", tempo: "3s down", reps: "3×10", range: "6–8in step",
            subs: []
          },
          {
            name: "Advanced Hip ER Loading (Copenhagen-Style, If Sport Demands)",
            load: "bodyweight", tempo: "sustained hold", reps: "3×20–30s", range: "n/a",
            subs: []
          },
          {
            name: "Sport / Occupation-Specific Return-to-Load Drills",
            load: "progressive", tempo: "task-specific", reps: "progressive volume", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  "Glenohumeral_Osteoarthritis": {
    tier: "injury",
    category: "shoulder",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Pain Modulation & ROM Maintenance (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Pain at rest (NPRS)", "≤3/10"],
          ["Active-assisted flexion", "pain-free arc established, no scapular substitution"],
          ["Isometric rotator cuff loading", "tolerated without flare >24h"],
          ["WOOS score", "baseline recorded"]
        ],
        exercises: [
          {
            name: "Pendulum (Codman) Exercises",
            load: "gravity-assisted", tempo: "slow circles", reps: "2×1 min, daily", range: "pain-free arc",
            subs: []
          },
          {
            name: "AAROM Flexion/External Rotation (Pulley or Stick)",
            load: "none/light", tempo: "controlled", reps: "3×10", range: "pain-free arc",
            subs: []
          },
          {
            name: "Isometric Rotator Cuff Sets (ER/IR/Abduction, Submaximal)",
            load: "bodyweight", tempo: "10s hold", reps: "3×5×10s", range: "neutral, submaximal",
            subs: []
          },
          {
            name: "Scapular Setting / Retraction",
            load: "bodyweight", tempo: "2s hold", reps: "3×10", range: "full retraction",
            subs: []
          }
        ]
      },
      {
        name: "Progressive Strengthening (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Active flexion ROM", "improved from documented baseline"],
          ["Manual muscle strength ER/abduction", "improved ≥1 MMT grade or by dynamometry"],
          ["Pain during ADLs (dressing, overhead reach)", "≤3/10"],
          ["WOOS score", "trending toward the 12.3-point MCID (Nyring et al. 2021 — post-arthroplasty cohort, extrapolated here)"]
        ],
        exercises: [
          {
            name: "Resistance Band ER/IR",
            load: "light-moderate band", tempo: "controlled", reps: "3×12", range: "full ROM",
            subs: []
          },
          {
            name: "Scapular Strengthening (Rows, Serratus Punches)",
            load: "light band/dumbbell", tempo: "controlled", reps: "3×12", range: "full ROM",
            subs: []
          },
          {
            name: "Active Shoulder Flexion/Abduction with Light Dumbbell",
            load: "light dumbbell", tempo: "controlled", reps: "3×10", range: "pain-free arc",
            subs: []
          },
          {
            name: "Wall Slides / Active End-Range Holds",
            load: "bodyweight", tempo: "sustained", reps: "3×10", range: "end-range",
            subs: []
          }
        ]
      },
      {
        name: "Function & Shared-Decision Checkpoint (Weeks 9–12)",
        wks: 4,
        gates: [
          ["WOOS score", "improves ≥12.3 points from baseline (Nyring et al. 2021 anchor-based MCID — extrapolated from a post-op population)"],
          ["Functional task tolerance", "overhead reach, carrying ~2kg load, no symptom flare"],
          ["Home programme adherence", "≥70% of supervised sessions attended"],
          ["Shared-decision conversation", "held — continue conservative management vs. orthopaedic referral if plateaued"]
        ],
        exercises: [
          {
            name: "Progressive Resistance Rotator Cuff/Deltoid Training",
            load: "progressive band/dumbbell", tempo: "controlled", reps: "3×8–12", range: "full ROM",
            subs: []
          },
          {
            name: "Functional Reach/ADL Simulation (Overhead Reach, Carrying Task)",
            load: "task-equivalent", tempo: "controlled", reps: "3×10", range: "functional range",
            subs: []
          },
          {
            name: "Maintenance Stretching Programme",
            load: "none", tempo: "sustained", reps: "daily", range: "n/a",
            subs: []
          },
          {
            name: "Re-Assessment & Referral Discussion",
            load: "n/a", tempo: "n/a", reps: "decision point, not an exercise", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  // ============================================================================
  // CHRONIC ANKLE INSTABILITY · MORTON'S NEUROMA (CONSERVATIVE) — added 21 Aug
  // 2026, a follow-up gap-analysis pass (not physio-flagged like the four
  // passes above) against the existing `ankle` category, which previously
  // covered only Ankle_Sprain_Grade2 (acute grade I–II), Peroneal_Tendinopathy,
  // Plantar_Heel_Pain and Midfoot_Lisfranc.
  //   - Chronic_Ankle_Instability is a distinct presentation from the acute
  //     sprain entry — recurrent giving-way with mechanical and functional/
  //     proprioceptive components, often following an inadequately rehabbed
  //     sprain. Reasonably well-sourced for a musculoskeletal-rehab entry: the
  //     Cumberland Ankle Instability Tool (Hiller et al. 2006) gives a real
  //     validated threshold (27.5, Youden-index-derived) used as the Phase 3
  //     gate, and a 2024 meta-analysis (Guo et al., 9 RCTs, n=341) gives real
  //     group-level CAIT/FAAM-Sport effect sizes for balance training — but
  //     those are GROUP-LEVEL trial effect sizes, not individual MCIDs, and
  //     are labelled as such rather than implied to be per-patient thresholds.
  //     The bracing/taping framing draws on Burger et al. 2018's finding of no
  //     significant difference between proprioceptive/neuromuscular training
  //     and bracing in reducing recurrence — used here to support offering
  //     bracing as a legitimate adjunct, not a compulsory one. The hop-test
  //     symmetry gate (≥90%) is a general return-to-sport heuristic borrowed
  //     from other lower-limb protocols in this file, not a CAI-specific
  //     validated cutoff — flagged as such in the gate text itself.
  //   - Mortons_Neuroma_Conservative does NOT fit this file's phase-gated,
  //     progressive-exercise shape, and it ships that way deliberately rather
  //     than forcing one, following the Trigger_Finger precedent. Matthews et
  //     al. 2019's systematic review (25 studies, 7 RCTs) found corticosteroid
  //     injection beat footwear/padding alone (OR 6.0, 95% CI 1.9–19.2) and
  //     identified NO exercise-therapy RCT at all for this condition. Bennett
  //     et al. 1995's staged protocol (n=115: education/footwear/offloading →
  //     injection → surgical excision) is the actual evidence-backed care
  //     pathway, so the three "phases" below are that staged pathway, not a
  //     loading progression — the one exercise item included (toe splay/
  //     intrinsic activation) is labelled explicitly as an adjunct with
  //     minimal evidence, the same honesty pattern used for tendon-gliding in
  //     Trigger_Finger. Whether this belongs in condition_library's
  //     phase-gated shape at all is a legitimate clinician call.
  // ============================================================================

  "Chronic_Ankle_Instability": {
    tier: "injury",
    category: "ankle",
    arc: 10,
    evidence: [],
    phases: [
      {
        name: "Protect, Restore Confidence & Basic Proprioception (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Cumberland Ankle Instability Tool (CAIT) score", "baseline recorded (Hiller et al. 2006 validated threshold: <27.5 indicates functional ankle instability)"],
          ["Single-leg stance, eyes open, firm surface", "≥20s tolerated"],
          ["Pain during static single-leg stance / gait", "≤3/10"],
          ["Red-flag screen (fracture, syndesmotic injury) if a recent sprain triggered this episode", "cleared"]
        ],
        exercises: [
          {
            name: "Single-Leg Static Balance (Eyes Open, Firm Surface)",
            load: "bodyweight", tempo: "static hold", reps: "3×20–30s", range: "n/a",
            subs: []
          },
          {
            name: "Isometric Evertor/Dorsiflexor Activation (Band-Resisted)",
            load: "light band", tempo: "5s hold", reps: "3×10", range: "mid-range, pain-free",
            subs: []
          },
          {
            name: "Ankle AROM & Calf/Peroneal Mobility",
            load: "none", tempo: "controlled", reps: "3×10", range: "full pain-free ankle ROM",
            subs: []
          },
          {
            name: "Bracing/Taping Fitting & Education (Adjunct, Patient Preference)",
            load: "n/a", tempo: "n/a", reps: "clinical review", range: "n/a",
            subs: ["Semi-rigid lace-up brace", "Rigid stirrup brace", "Athletic taping for high-risk activity"]
          }
        ]
      },
      {
        name: "Progressive Balance & Strength Loading (Weeks 4–7)",
        wks: 4,
        gates: [
          ["CAIT score", "improving trend — Guo et al. 2024 meta-analysis reports a group-level MD of +3.95 points vs. control for balance training; this is a trial effect size, not an individual MCID"],
          ["Single-leg balance, eyes closed, firm surface", "≥20s stable"],
          ["Resisted eversion/dorsiflexion strength", "within 20% of contralateral limb (manual muscle test or handheld dynamometry)"],
          ["Giving-way episodes in the preceding 2 weeks", "none reported"]
        ],
        exercises: [
          {
            name: "Multiplanar Dynamic Balance / Reach Progression (SEBT-Pattern)",
            load: "bodyweight", tempo: "controlled reach", reps: "3×8 per direction", range: "anterior / posteromedial / posterolateral",
            subs: []
          },
          {
            name: "Single-Leg Balance Progression (Eyes Closed → Unstable Surface)",
            load: "none", tempo: "static → perturbed", reps: "3×30s", range: "n/a",
            subs: ["Foam pad", "Wobble board"]
          },
          {
            name: "Progressive Isotonic Eversion/Inversion & Dorsiflexion (Band)",
            load: "progressive band resistance", tempo: "2s up/2s down", reps: "3×15", range: "full ROM",
            subs: []
          },
          {
            name: "Calf Raise (Double-Leg → Single-Leg Progression)",
            load: "bodyweight", tempo: "2s up/2s down", reps: "3×15", range: "full ROM",
            subs: []
          },
          {
            name: "Reactive / Perturbation Balance Training (Manual or Mini-Trampoline)",
            load: "bodyweight", tempo: "reactive", reps: "3×10", range: "multi-directional",
            subs: []
          }
        ]
      },
      {
        name: "Dynamic Stability & Return to Sport (Weeks 8–10)",
        wks: 3,
        gates: [
          ["CAIT score", "≥27 (Hiller et al. 2006 validated threshold associated with absence of functional instability)"],
          ["FAAM-Sport subscale", "substantially improved from baseline — Guo et al. 2024 reports a group-level MD of +17.74 points, a trial effect size not an individual MCID"],
          ["Single-leg hop test symmetry", "≥90% of contralateral limb — general return-to-sport heuristic, not a CAI-specific validated cutoff"],
          ["Giving-way episodes across a 2-week return-to-sport trial", "none"]
        ],
        exercises: [
          {
            name: "Single-Leg Hop Series (Multi-Directional)",
            load: "bodyweight", tempo: "controlled landing", reps: "3×5 per direction", range: "forward / lateral / rotational",
            subs: []
          },
          {
            name: "Lateral Bound / Cutting & Deceleration Drills",
            load: "bodyweight", tempo: "progressive speed", reps: "3×8", range: "controlled angles",
            subs: []
          },
          {
            name: "Plyometric Landing Control (Box Drops)",
            load: "bodyweight", tempo: "controlled landing", reps: "3×8", range: "progressive height",
            subs: []
          },
          {
            name: "Sport-Specific Return-to-Play (Brace/Tape per Patient Preference)",
            load: "none", tempo: "sport-speed", reps: "per return-to-play criteria above", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  "Mortons_Neuroma_Conservative": {
    tier: "injury",
    category: "ankle",
    arc: 10,
    evidence: [],
    phases: [
      {
        name: "Footwear Modification & Offloading (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Footwear modification (wide toe-box, low heel, metatarsal pad fitted)", "in place and tolerated"],
          ["Forefoot/interspace pain (NPRS) with modified footwear", "trending down from baseline"],
          ["Numbness/paraesthesia frequency and provocation (Mulder's click, web-space compression)", "documented at baseline for comparison"]
        ],
        exercises: [
          {
            name: "Footwear & Orthotic Review (Wide Toe-Box, Low Heel, Metatarsal Pad)",
            load: "n/a", tempo: "n/a", reps: "clinical review", range: "n/a",
            subs: ["Metatarsal dome/pad sited proximal to the metatarsal heads", "Rocker-sole shoe trial"]
          },
          {
            name: "Activity / Load Modification Education",
            load: "none", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: ["Avoid prolonged high-heel or narrow-toe-box wear", "Reduce repetitive forefoot-loading activity (running, dancing) during flare"]
          },
          {
            name: "Toe Splay / Intrinsic Foot Activation (Adjunct — Clinical Practice Only, No Exercise-Therapy RCT Found for This Condition)",
            load: "none", tempo: "controlled", reps: "3×10", range: "pain-free",
            subs: []
          }
        ]
      },
      {
        name: "Injection Adjunct If Non-Responsive (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Symptom response to footwear/pad alone at 4 weeks", "reviewed — proceed to injection discussion if inadequate"],
          ["Corticosteroid/local anaesthetic injection response (if given)", "pain reduction sustained ≥4 weeks"],
          ["Forefoot pain with weight-bearing", "reduced from baseline"]
        ],
        exercises: [
          {
            name: "Continued Footwear Modification & Metatarsal Offloading",
            load: "n/a", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: []
          },
          {
            name: "Corticosteroid/Local Anaesthetic Injection (Clinician-Administered, If Indicated)",
            load: "n/a", tempo: "n/a", reps: "per clinician protocol", range: "n/a",
            subs: ["Ultrasound-guided injection"]
          },
          {
            name: "Toe Splay / Intrinsic Foot Activation (Adjunct — Clinical Practice Only)",
            load: "none", tempo: "controlled", reps: "3×10", range: "pain-free",
            subs: []
          }
        ]
      },
      {
        name: "Return to Footwear & Activity, or Surgical Referral Decision (Weeks 9–10)",
        wks: 2,
        gates: [
          ["Forefoot pain with normal footwear/activity", "≤3/10 or resolved"],
          ["Response to staged conservative programme", "sustained improvement — if not, referral for surgical excision/neurectomy discussion"],
          ["Return to prior footwear/activity", "tolerated without symptom recurrence at 2 weeks"]
        ],
        exercises: [
          {
            name: "Graded Return to Prior Footwear & Activity",
            load: "n/a", tempo: "n/a", reps: "graded, self-monitored", range: "n/a",
            subs: []
          },
          {
            name: "Maintenance Footwear & Load Management",
            load: "n/a", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: []
          },
          {
            name: "Surgical Referral Discussion (If Conservative Care Fails)",
            load: "n/a", tempo: "n/a", reps: "decision point, not an exercise", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  // ============================================================================
  // FIBROMYALGIA / CHRONIC WIDESPREAD PAIN — added 21 Aug 2026, a systemic/
  // chronic-pain gap-analysis follow-up (not itself physio-flagged, but
  // requested against the existing `systemic` category, which previously held
  // only a generic Chronic_Pain_Management entry).
  //   - Own-entry decision: fibromyalgia gets its own presentation rather than
  //     folding into Chronic_Pain_Management. Reasons: (1) it has its own
  //     validated diagnostic construct (ACR 2016 widespread pain index +
  //     symptom severity scale — Wolfe et al. 2016) that doesn't generalize to
  //     other chronic-pain presentations; (2) it has its own condition-specific
  //     outcome instrument (FIQR — Bennett et al. 2009) that Chronic_Pain_
  //     Management doesn't use; and (3) it has a materially deeper evidence
  //     base specific to it — three separate Cochrane reviews (aerobic,
  //     resistance, aquatic exercise) with real dosing and effect-size data —
  //     versus Chronic_Pain_Management's empty evidence: [] and generic
  //     pain-education framing. This mirrors how this catalog already splits
  //     related presentations elsewhere (Achilles repair vs. tendinopathy vs.
  //     rupture; the three low back pain sub-entries) rather than lumping them.
  //   - Structural fit — flagged, not smoothed over: like Pregnancy_Pelvic_
  //     Girdle_Pain and Trigger_Finger before it, this is a genuinely awkward
  //     fit for the 3-phase "progress toward discharge" shape, because
  //     fibromyalgia is a chronic, likely lifelong condition — there is no
  //     discharge, only a transition to self-directed maintenance (Phase 3 is
  //     written as indefinite/ongoing, following the same convention already
  //     used in Chronic_Pain_Management's own final phase). More seriously:
  //     THIS SCHEMA HAS NO REGRESSION/PACING SAFEGUARD. Every gate in this file
  //     (this entry included) is a forward-only "progress when" threshold —
  //     there is no first-class way to encode "if a flare occurs, step back to
  //     the prior phase's dosing," even though avoiding exactly that (too-fast
  //     progression triggering a symptom flare) is the single most consistent
  //     message across the cited literature. This entry's gates lean on trend
  //     language ("stable or improving," "without a flare beyond the
  //     established pattern") specifically to blunt this gap, but a real
  //     pacing/flare-protocol mechanism belongs in the product, not just in
  //     gate wording — worth a product decision, not a documentation fix.
  //   - Citation caveats worth reading before sign-off: the Wolfe et al. 2016
  //     ACR-criteria citation is real and correctly attributed, but the
  //     indexed PubMed abstract text itself cuts off mid-sentence right before
  //     listing the actual WPI/SSS numeric thresholds ("...diagnosed in adults
  //     when all of the following criteria are met: CONCLUSIONS:") — so it's
  //     used here as a contextual pointer to the criteria's existence, not as
  //     verified support for specific score cutoffs, and this app does not
  //     diagnose against it. The FIQR citation (Bennett 2009) verifies the
  //     instrument and its scoring properties but establishes no minimal
  //     clinically important difference — no fixed-point FIQR gate is used
  //     anywhere in this entry for that reason. The Bidonde 2017 Cochrane
  //     aerobic-exercise review is reported honestly including its harm
  //     signal (20% withdrawal in the exercise arm vs. 17% control, RR 1.25) —
  //     not cherry-picked for only the benefit numbers.
  // ============================================================================

  "Fibromyalgia": {
    tier: "health",
    category: "systemic",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Diagnosis Context, Pacing Education & Baseline Aerobic Tolerance (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Diagnostic basis", "ACR 2016 criteria (widespread pain index + symptom severity scale) applied by the referring/diagnosing clinician — this app does not diagnose fibromyalgia; entry into this protocol assumes a physician-confirmed diagnosis (Wolfe et al. 2016 context only — see review notes on what the indexed abstract does and doesn't support)"],
          ["Baseline symptom/activity log", "kept ≥2 weeks before progressing — establishes an individualized baseline, not a comparison to a population norm"],
          ["FIQR", "baseline score recorded (Bennett et al. 2009 instrument; no fixed target — used as this protocol's own trend reference throughout)"],
          ["Low-intensity aerobic tolerance", "5–10 min, slight-to-moderate intensity, 2–3×/week, tolerated without a flare lasting beyond the patient's established baseline pattern"]
        ],
        exercises: [
          {
            name: "Graded Aerobic Activity (Land- or Water-Based, Slight-to-Moderate Intensity)",
            load: "bodyweight/none", tempo: "slight-to-moderate intensity (RPE ~3–4/10)", reps: "2–3×/week, 5–10 min bouts", range: "continuous, symptom-titrated",
            subs: ["Warm-water pool walking", "Stationary bike (low resistance)", "Level-ground walking"]
          },
          {
            name: "Pacing & Activity-Pattern Education (Boom-Bust Avoidance)",
            load: "none", tempo: "n/a", reps: "daily planning, ongoing", range: "n/a",
            subs: ["Activity diary", "Symptom-contingent (not calendar-contingent) progression"]
          },
          {
            name: "Gentle Flexibility & Relaxation",
            load: "none", tempo: "slow, sustained hold", reps: "daily, 5–10 min", range: "submaximal, no pain",
            subs: ["Gentle stretching", "Diaphragmatic breathing", "Body-scan relaxation"]
          },
          {
            name: "Sleep & Symptom Self-Monitoring",
            load: "none", tempo: "n/a", reps: "weekly FIQR + daily symptom log", range: "n/a",
            subs: []
          }
        ]
      },
      {
        name: "Progressive Aerobic Conditioning (Weeks 5–10)",
        wks: 6,
        gates: [
          ["Aerobic duration tolerance", "≥20 min continuous, slight-to-moderate intensity, 2–3×/week (Häuser et al. 2010 dosing), without a flare beyond the established baseline pattern"],
          ["FIQR", "stable or improving trend from Phase 1 baseline — no fixed numeric target; no validated MCID exists for this instrument (see review notes)"],
          ["Pain and fatigue (NRS)", "no sustained worsening trend over the phase"]
        ],
        exercises: [
          {
            name: "Progressive Aerobic Conditioning (Land- or Water-Based)",
            load: "bodyweight", tempo: "slight-to-moderate intensity, RPE 3–5/10", reps: "2–3×/week, +2–5 min every 1–2 weeks as tolerated", range: "continuous",
            subs: ["Aquatic exercise class", "Stationary bike", "Treadmill walking"]
          },
          {
            name: "Introductory Low-Load Resistance (Whole-Body, Light)",
            load: "bodyweight → 1–3lb hand weights or light band", tempo: "controlled, 3s/3s", reps: "1–2×10–12, major muscle groups", range: "pain-free ROM",
            subs: ["Elastic tubing", "Bodyweight squat to chair"]
          },
          {
            name: "Continued Pacing, Flexibility & Relaxation",
            load: "none", tempo: "slow, sustained hold", reps: "daily", range: "submaximal, no pain",
            subs: ["Gentle stretching", "Diaphragmatic breathing"]
          }
        ]
      },
      {
        name: "Combined Aerobic + Resistance Training & Self-Directed Maintenance (Weeks 11–16, then ongoing/indefinite)",
        wks: 6,
        gates: [
          ["Combined aerobic + resistance tolerance", "sustained aerobic 2–3×/week + resistance 2×/week (Busch et al. 2013 dosing) without triggering a flare pattern"],
          ["FIQR", "improving trend sustained from Phase 2 — individualized; no validated MCID confirmed for this instrument, so no fixed point threshold is set (see review notes)"],
          ["Self-management plan", "individualized maintenance + flare-response plan established for indefinite continuation — this phase does not end in discharge, matching the convention already used in Chronic_Pain_Management"]
        ],
        exercises: [
          {
            name: "Maintenance Aerobic Training (Land- or Water-Based)",
            load: "bodyweight", tempo: "slight-to-moderate intensity", reps: "2–3×/week indefinitely", range: "continuous, 20–30 min",
            subs: ["Aquatic exercise class", "Stationary bike", "Walking/light jogging if tolerated"]
          },
          {
            name: "Progressive Resistance Training (Moderate Intensity)",
            load: "light-to-moderate, progress as tolerated", tempo: "controlled", reps: "2×/week, 1–2×8–12", range: "full pain-tolerable ROM",
            subs: ["Resistance band circuit", "Machine-based whole-body circuit"]
          },
          {
            name: "Flare Management (Reduce, Don't Stop)",
            load: "n/a", tempo: "n/a", reps: "on flare days: reduce volume/intensity rather than fully stopping — general clinical pacing heuristic, not a specific literature-derived percentage", range: "n/a",
            subs: []
          },
          {
            name: "Ongoing Self-Monitoring (FIQR, Pacing Log)",
            load: "none", tempo: "n/a", reps: "periodic FIQR + ongoing symptom/activity log", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  // ============================================================================
  // SLAP TEAR (CONSERVATIVE) · LONG HEAD OF BICEPS TENDINOPATHY — added 21 Aug
  // 2026, a follow-up physio-flagged shoulder gap-analysis pass. Independently
  // PubMed-verified via eutils. NOT yet wired into condition_library. See
  // docs/PROTOCOL-REVIEW.md's 2026-08-21 entries:
  //   - SLAP_Tear_Conservative is distinct from Shoulder_Instability (general
  //     glenohumeral instability, apprehension/relocation-driven) — this is a
  //     specific labral/biceps-anchor pathology gated on the biceps load
  //     II/O'Brien provocative tests and ASES scoring, not apprehension
  //     testing. As anticipated, the surgical/repair literature dominates;
  //     conservative-pathway outcome evidence is thin — Edwards et al. 2010
  //     (n=19) is the only dedicated nonoperative outcome cohort found, and
  //     it is doing a lot of work here (ASES gate, VAS/SST framing, and the
  //     "consider surgery if an overhead athlete doesn't improve enough"
  //     logic behind the Phase 3 shared-decision gate all trace to it). The
  //     40%-pro-baseball-return-to-play figure often quoted for conservative
  //     SLAP management (via Fortier et al. 2022) is itself a secondhand
  //     figure with no primary source traceable in that paper's own abstract
  //     — used only to motivate the referral conversation, not as a gate.
  //   - Biceps_Tendinopathy is distinct from Rotator_Cuff_Related_Pain, but
  //     the two coexist often enough that Phase 1 explicitly gates on a
  //     concurrent cuff screen rather than assuming isolated biceps
  //     pathology. Biceps-tendinopathy-specific loading-dose evidence does
  //     not exist (confirmed by McDevitt et al. 2024's scoping review, which
  //     found no dosed RCT); the isotonic loading progression here, like
  //     Peroneal_Tendinopathy in an earlier pass, is inferred from general
  //     tendon-loading physiology (Malliaras/Rio, both patellar-tendon
  //     studies), not from a biceps-specific trial. The one genuinely strong
  //     citation in this entry is diagnostic, not therapeutic: Cardoso et al.
  //     2019's arthroscopy-verified accuracy data for the upper cut and
  //     Yergason tests.
  // ============================================================================

  "SLAP_Tear_Conservative": {
    tier: "injury",
    category: "shoulder",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Protect & Desensitize the Labral-Biceps Complex (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Resting pain (NPRS)", "≤3/10"],
          ["Biceps load II / O'Brien active compression test", "baseline finding documented for comparison (Hegedus et al. 2008 — biceps load II is one of the few shoulder special tests with both high sensitivity and high specificity for SLAP)"],
          ["Combined ER + abduction + resisted forearm supination (SLAP-provocative position)", "avoided or tolerated pain-free in daily tasks"],
          ["ASES score", "baseline recorded (Edwards et al. 2010 outcome instrument)"]
        ],
        exercises: [
          {
            name: "Scapular Setting / Retraction",
            load: "bodyweight", tempo: "2s hold", reps: "3×10", range: "full retraction",
            subs: []
          },
          {
            name: "Isometric Rotator Cuff Sets (ER/IR/Abduction, Submaximal, Neutral)",
            load: "bodyweight", tempo: "10s hold", reps: "3×5×10s", range: "neutral, submaximal — avoid combined ER/abduction/elbow-flexion loading",
            subs: []
          },
          {
            name: "Pain-Free AROM Below Shoulder Height",
            load: "none", tempo: "controlled", reps: "3×10", range: "pain-free arc, below 90° elevation",
            subs: []
          },
          {
            name: "Postural & Kinetic Chain Education (Avoid Overhead Load / Late-Cocking Position)",
            load: "none", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: []
          }
        ]
      },
      {
        name: "Restore Rotational Motion & Progressive Cuff Loading (Weeks 5–8)",
        wks: 4,
        gates: [
          ["ASES total score", "improving trend from baseline"],
          ["Glenohumeral internal rotation (GIRD)", "trending toward symmetry with contralateral side (Kibler et al. 2013 disabled-throwing-shoulder framework — no universal degree cutoff validated)"],
          ["Resisted ER/abduction", "pain ≤3/10 through range"],
          ["Closed-chain loading (quadruped/plank progressions)", "tolerated without reproducing labral-provocation symptoms"]
        ],
        exercises: [
          {
            name: "Resistance Band ER/IR, Progressive",
            load: "light-moderate band", tempo: "controlled", reps: "3×12", range: "full ROM",
            subs: []
          },
          {
            name: "Sleeper Stretch / Cross-Body Stretch (GIRD-Directed, If Present)",
            load: "none", tempo: "sustained", reps: "3×30s hold", range: "gentle end-range IR",
            subs: []
          },
          {
            name: "Closed-Chain Scapular Stability (Quadruped, Plank Progression)",
            load: "bodyweight", tempo: "sustained hold", reps: "3×20–30s", range: "n/a",
            subs: []
          },
          {
            name: "Kinetic-Chain Integration (Trunk Rotation + Shoulder Loading)",
            load: "light band/cable", tempo: "controlled", reps: "3×10 per side", range: "n/a",
            subs: []
          }
        ]
      },
      {
        name: "Return to Overhead Load & Shared-Decision Checkpoint (Weeks 9–12)",
        wks: 4,
        gates: [
          ["ASES total score", "improved toward the range Edwards et al. 2010 observed in a small (n=19) nonoperative cohort (58.5→84.7) — a benchmark to sanity-check, not a validated target"],
          ["Overhead-loaded task / interval throwing programme stage", "tolerated pain-free before progressing to next stage"],
          ["Biceps load II / O'Brien retest", "stable or improved across sessions, clinician-judged"],
          ["Shared-decision conversation", "held — continue conservative management vs. surgical referral, especially for a competitive overhead athlete not progressing"]
        ],
        exercises: [
          {
            name: "Progressive Interval Throwing / Overhead-Sport Programme (Graded)",
            load: "task-equivalent, progressive", tempo: "task-speed", reps: "progressive volume", range: "n/a",
            subs: []
          },
          {
            name: "High-Level Rotator Cuff / Scapular Strengthening",
            load: "progressive band/dumbbell", tempo: "controlled", reps: "3×8–12", range: "full ROM",
            subs: []
          },
          {
            name: "Sport / Occupation-Specific Return-to-Load Drills",
            load: "progressive", tempo: "task-specific", reps: "progressive volume", range: "n/a",
            subs: []
          },
          {
            name: "Re-Assessment & Referral Discussion",
            load: "n/a", tempo: "n/a", reps: "decision point, not an exercise", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  "Biceps_Tendinopathy": {
    tier: "injury",
    category: "shoulder",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Diagnose & Isometric Load (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Anterior shoulder pain at rest (NPRS)", "≤3/10"],
          ["Upper cut test", "positive at baseline (Cardoso et al. 2019 — arthroscopy-verified sensitivity 0.90, used as the screening test)"],
          ["Concurrent rotator cuff screen (Hawkins-Kennedy, empty can, ER/IR strength)", "documented — differentiate isolated biceps involvement from coexisting cuff pathology, which is common"],
          ["Isometric resisted elbow flexion / forearm supination", "tolerated ≤3/10, no flare >24h"]
        ],
        exercises: [
          {
            name: "Isometric Resisted Elbow Flexion (Shoulder-Neutral)",
            load: "bodyweight/light resistance", tempo: "10s hold", reps: "3×5×10s", range: "elbow ~90°, shoulder neutral",
            subs: []
          },
          {
            name: "Isometric Resisted Forearm Supination",
            load: "light resistance", tempo: "10s hold", reps: "3×5×10s", range: "neutral forearm rotation",
            subs: []
          },
          {
            name: "Scapular Setting / Retraction",
            load: "bodyweight", tempo: "2s hold", reps: "3×10", range: "full retraction",
            subs: []
          },
          {
            name: "Activity / Load Modification Education (Avoid Repetitive Overhead Lifting/Carrying)",
            load: "none", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: []
          }
        ]
      },
      {
        name: "Progressive Isotonic Loading (Weeks 5–8)",
        wks: 4,
        gates: [
          ["SPADI score", "improving trend (Roy et al. 2009 — SPADI MCID ≈8–13 points, a change-score MCID, not an absolute threshold)"],
          ["Resisted elbow flexion / forearm supination through range", "pain ≤3/10"],
          ["Concurrent rotator cuff strength (where cuff pathology coexists)", "improving in parallel — not treated as an isolated biceps problem if cuff involvement is present"],
          ["Overhead reach with light load", "tolerated"]
        ],
        exercises: [
          {
            name: "Isotonic Resisted Elbow Flexion, Progressive (Dumbbell/Band)",
            load: "light-moderate, progressive", tempo: "2s up/2s down", reps: "3×12", range: "full elbow flexion arc",
            subs: []
          },
          {
            name: "Resisted Forearm Supination/Pronation, Progressive",
            load: "light band/dumbbell", tempo: "controlled", reps: "3×12", range: "full forearm rotation",
            subs: []
          },
          {
            name: "Rotator Cuff Strengthening (ER/IR, Where Cuff Pathology Coexists)",
            load: "light-moderate band", tempo: "controlled", reps: "3×12", range: "full ER/IR arc",
            subs: []
          },
          {
            name: "Scapular & Lower Trapezius Strengthening",
            load: "light band/dumbbell", tempo: "2s hold", reps: "3×12", range: "full ROM",
            subs: []
          }
        ]
      },
      {
        name: "Return to Load & Function (Weeks 9–12)",
        wks: 4,
        gates: [
          ["SPADI score", "≤10"],
          ["Loaded overhead/carrying task", "pain-free, full range"],
          ["Sport/occupation-specific loaded task (lifting, throwing, pulling)", "tolerated without symptom recurrence at 48h"],
          ["Home programme adherence", "≥70% of supervised sessions attended"]
        ],
        exercises: [
          {
            name: "Progressive Resisted Elbow Flexion/Supination to Task-Equivalent Load",
            load: "progressive to task-equivalent", tempo: "controlled", reps: "3×8–12", range: "full ROM",
            subs: []
          },
          {
            name: "Functional Loaded Carry / Lifting Task Simulation",
            load: "task-equivalent", tempo: "controlled", reps: "3×10", range: "functional range",
            subs: []
          },
          {
            name: "Sport / Occupation-Specific Loading Drills",
            load: "progressive", tempo: "task-specific", reps: "progressive volume", range: "n/a",
            subs: []
          },
          {
            name: "Maintenance Strengthening Programme",
            load: "light-moderate", tempo: "controlled", reps: "2×/week ongoing", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  // ============================================================================
  // SNAPPING HIP SYNDROME (COXA SALTANS) · SACROILIAC JOINT DYSFUNCTION,
  // NON-PREGNANCY — added 21 Aug 2026, a hip/pelvis follow-up gap-analysis pass
  // (same practising physio partner) against the existing `hip_posterior`
  // (FAI_Syndrome, Hip_Osteoarthritis, Gluteal_Tendinopathy,
  // Groin_Strain_Adductor, Post_Op_THR, Piriformis_Deep_Gluteal_Syndrome) and
  // `pelvis` (Pregnancy_Pelvic_Girdle_Pain) categories.
  //   - Snapping_Hip_Syndrome: built as ONE combined presentation covering both
  //     external (iliotibial band/gluteus maximus complex over the greater
  //     trochanter) and internal (iliopsoas tendon over the femoral head/
  //     pelvic brim) mechanisms, with type-labelled exercise emphasis inside
  //     shared phases, rather than two split entries. Reasoning: every review
  //     found (Walker et al. 2021; Sugrañes et al. 2023) treats external and
  //     internal SHS as one syndrome with two mechanisms that "share similar
  //     management strategies" in the conservative phase (they diverge only in
  //     which surgical release is chosen if conservative care fails, which is
  //     out of scope for this catalog). Winston et al. 2007's dancer cohort
  //     also shows both mechanisms commonly coexist in the same population
  //     (91% reported snapping, iliopsoas the more common ultrasound-confirmed
  //     origin at 59% vs. ITB at 4%), so a single differentiate-then-branch
  //     protocol matches real presentation better than forcing an either/or
  //     catalog split would. No dosed conservative-exercise RCT exists for
  //     either mechanism — every source is a narrative/clinical-commentary
  //     review or a surgical case series describing what was tried before
  //     surgery, not a trial that tested this program. Set/rep dosing
  //     throughout is uncited standard clinical convention, same caveat as
  //     elsewhere in this file. What IS genuinely verified: the Phase 1
  //     differentiation-exam gate (Winston et al. 2007), the rationale for
  //     external-type exercises targeting the gluteus maximus complex and not
  //     just the ITB (Malinowski et al. 2024's intraoperative finding that
  //     isolated ITB release resolved only 22.6% of cases), and the framing
  //     that asymptomatic snapping is itself extremely common and not a valid
  //     treatment target (Winston et al. 2007 again). The 12-week arc is a
  //     starting-episode checkpoint, not a claim of full resolution — Walker
  //     et al. 2021 describes typical conservative-management resolution over
  //     6-12 months, roughly double this arc.
  //   - Sacroiliac_Joint_Dysfunction: deliberately built to differ from
  //     Pregnancy_Pelvic_Girdle_Pain in population, mechanism, and
  //     instrumentation, not just in name. It gates on the Laslett composite
  //     provocation-test cluster (Laslett et al. 2005 — sensitivity 94%/
  //     specificity 78% for ≥3 of 6 positive tests against an intra-articular
  //     anaesthetic-block reference standard) and on ODI/NPRS, the tools used
  //     across every non-pregnancy SIJD RCT found here — not the Active
  //     Straight Leg Raise test or Pelvic Girdle Questionnaire the pregnancy
  //     protocol uses, both of which were validated specifically in pregnant/
  //     postpartum cohorts under a relaxin-driven ligamentous-laxity mechanism
  //     that doesn't apply to this protocol's population (post-traumatic,
  //     asymmetric-loading, or idiopathic onset in the general population).
  //     The differential-diagnosis gate against this catalog's lumbar-spine
  //     entries is genuinely verified, not standard teaching asserted without
  //     a source: Young, Aprill & Laslett 2003 found SI joint pain correlates
  //     with ≥3 positive provocation tests, pain on rising from sitting,
  //     unilateral pain and absence of lumbar pain — a distinct clinical
  //     pattern from discogenic pain (centralization) and lumbar facet pain
  //     (no pain on rising from sitting) — the same style of citation-backed
  //     differentiation used for Piriformis_Deep_Gluteal_Syndrome against
  //     lumbar radiculopathy in the prior batch. The exercise-therapy evidence
  //     is real but thin: every RCT found (Nejati et al. 2019; Sanika et al.
  //     2021; Kamali et al. 2019; Zaidi & Ahmed 2020) is small (30-60
  //     patients) and short-follow-up, and Nejati 2019 found NO significant
  //     difference between exercise-only, manipulation-only, and combined
  //     approaches by week 24 — the specific exercise selection in this
  //     protocol cannot claim to outperform a simpler alternative long-term.
  //     "SI joint dysfunction" as a distinct entity also rests on an imperfect
  //     reference standard (Cohen 2005: exam/imaging alone are insufficient;
  //     anaesthetic block itself is unproven as a gold standard) — flagged,
  //     not hidden.
  // ============================================================================

  "Snapping_Hip_Syndrome": {
    tier: "injury",
    category: "hip_posterior",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Differentiate Mechanism & Desensitize (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Type-differentiation exam (FABER-to-extension palpation; resisted hip flexion from flexed/abducted/externally-rotated to extended for the internal mechanism; dynamic ultrasound if exam is inconclusive)", "mechanism identified as external (ITB/greater trochanter) or internal (iliopsoas/femoral head-pelvic brim) — Winston et al. 2007 found clinical exam palpated 46 of 50 (92%) self-reported snaps, with ultrasound needed to confirm an iliopsoas origin in most internal cases"],
          ["Pain on the reproducible snap", "≤3/10"],
          ["Provocative activity/movement pattern", "identified and modified"],
          ["Hip flexor (internal type) or ITB/lateral hip (external type) flexibility screen", "baseline asymmetry vs. contralateral side documented"]
        ],
        exercises: [
          {
            name: "Activity / Movement Pattern Modification Education",
            load: "none", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: []
          },
          {
            name: "External Type: Standing Iliotibial Band / TFL Stretch",
            load: "bodyweight", tempo: "sustained", reps: "3×30s hold", range: "n/a",
            subs: ["Foam roller ITB release (adjunct)"]
          },
          {
            name: "Internal Type: Half-Kneeling Hip Flexor (Iliopsoas) Stretch",
            load: "bodyweight", tempo: "sustained", reps: "3×30s hold", range: "posterior pelvic tilt maintained",
            subs: []
          },
          {
            name: "Isometric Hip Abduction or Hip Flexion (Type-Matched, Submaximal)",
            load: "bodyweight", tempo: "5×45s hold", reps: "5×45s", range: "neutral hip",
            subs: []
          }
        ]
      },
      {
        name: "Progressive Strengthening, Type-Directed (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Resisted hip abduction (external type) or resisted hip flexion (internal type)", "pain ≤3/10"],
          ["Snap frequency during daily activity", "reduced from baseline (patient-reported)"],
          ["Hip abductor or hip flexor strength (type-matched)", "≥4/5 MMT or within 20% of contralateral limb (handheld dynamometry)"]
        ],
        exercises: [
          {
            name: "External Type: Side-Lying Hip Abduction (Band-Resisted)",
            load: "light–moderate band", tempo: "2s up/2s down", reps: "3×15", range: "neutral to slight abduction",
            subs: ["Standing band hip abduction"]
          },
          {
            name: "External Type: Single-Leg Glute Bridge (Gluteus Maximus Complex)",
            load: "bodyweight", tempo: "controlled", reps: "3×12", range: "full hip extension",
            subs: []
          },
          {
            name: "Internal Type: Standing Hip Flexion (Band-Resisted, Progressive Range)",
            load: "light band", tempo: "controlled", reps: "3×12", range: "pain-free arc",
            subs: ["Supine active hip flexion, light ankle weight"]
          },
          {
            name: "Internal Type: Core / Pelvic Control",
            load: "bodyweight", tempo: "controlled", reps: "3×10", range: "neutral pelvis",
            subs: ["Dead bug", "Pallof press"]
          }
        ]
      },
      {
        name: "Return to Load & Function (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Type-matched strength", "within 10% of contralateral limb"],
          ["Functional/provoking movement (deep squat, high kick, running, pivoting as relevant)", "tolerated pain-free"],
          ["Audible/palpable snap", "may persist asymptomatically (common per Winston et al. 2007) but is pain-free at re-test"],
          ["Conservative trial duration at this arc's end", "if pain persists, hold a shared-decision conversation on continued conservative management vs. imaging/surgical referral — the literature describes typical resolution over 6–12 months of conservative management (Walker et al. 2021), roughly double this protocol's 12-week arc"]
        ],
        exercises: [
          {
            name: "External Type: Lateral Step-Down",
            load: "bodyweight", tempo: "3s down", reps: "3×10", range: "6–8in step",
            subs: []
          },
          {
            name: "Internal Type: Single-Leg Romanian Deadlift (Hip-Flexor Eccentric Control)",
            load: "bodyweight → light dumbbell", tempo: "3s lower/2s drive", reps: "3×8", range: "hip hinge to shin",
            subs: []
          },
          {
            name: "Sport / Occupation-Specific Return-to-Load Drills",
            load: "progressive", tempo: "task-specific", reps: "progressive volume", range: "n/a",
            subs: []
          },
          {
            name: "Re-Assessment & Referral Discussion",
            load: "n/a", tempo: "n/a", reps: "decision point, not an exercise", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  "Sacroiliac_Joint_Dysfunction": {
    tier: "injury",
    category: "pelvis",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Diagnose & Desensitize (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Lumbar-spine differential screen (centralization with repeated movement testing, pain when rising from sitting, unilateral vs. lumbar pain pattern)", "interpret alongside the full differential assessment — the cited study associates SI joint pain with pain on rising from sitting; absence of that pain was associated with lumbar facet pain. This association is not a standalone diagnostic or progression rule (Young, Aprill & Laslett 2003)"],
          ["SIJ provocation test cluster (distraction, thigh thrust, compression, sacral thrust, Gaenslen's, FABER/Patrick's)", "≥3 of 6 tests positive (Laslett et al. 2005 composite criteria — sensitivity 94%, specificity 78% against intra-articular anaesthetic block)"],
          ["Pain at rest (NPRS)", "≤4/10"],
          ["Red-flag screen (cauda equina signs, infection, fracture, inflammatory/spondyloarthropathy features)", "negative"]
        ],
        exercises: [
          {
            name: "Pain-Free Lumbopelvic Positioning / Load Modification Education",
            load: "none", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: []
          },
          {
            name: "Posterior Innominate Self-Mobilization",
            load: "bodyweight", tempo: "slow", reps: "3×10", range: "n/a",
            subs: []
          },
          {
            name: "Isometric Gluteal / Hip Extensor Activation",
            load: "bodyweight", tempo: "5–10s hold", reps: "3×10", range: "neutral hip extension",
            subs: []
          },
          {
            name: "Deep Core / Transversus Abdominis Activation, Breath-Linked",
            load: "bodyweight", tempo: "controlled", reps: "3×10", range: "neutral pelvis",
            subs: []
          }
        ]
      },
      {
        name: "Progressive Force-Closure Strengthening (Weeks 5–8)",
        wks: 4,
        gates: [
          ["SIJ provocation test cluster", "fewer positive tests than Phase 1 baseline"],
          ["Pain (NPRS) / Oswestry Disability Index", "clinically meaningful improvement from baseline — no single fixed-point target; see review notes on trial-observed effect sizes"],
          ["Resisted hip extension / abduction", "pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Gluteus Maximus Activation / Loaded Bridge",
            load: "bodyweight → light load", tempo: "2s hold", reps: "3×12", range: "full hip extension",
            subs: ["Single-leg bridge progression"]
          },
          {
            name: "Progressive Lumbopelvic Stabilization Exercise",
            load: "bodyweight", tempo: "controlled", reps: "3×10–15", range: "n/a",
            subs: []
          },
          {
            name: "Hip Abductor Strengthening (Side-Lying / Band)",
            load: "light–moderate band", tempo: "2s hold", reps: "3×15", range: "n/a",
            subs: []
          },
          {
            name: "SI Belt / External Pelvic Support (Adjunct, Symptom-Guided)",
            load: "none", tempo: "n/a", reps: "as needed", range: "n/a",
            subs: []
          }
        ]
      },
      {
        name: "Return to Load & Function (Weeks 9–12)",
        wks: 4,
        gates: [
          ["SIJ provocation test cluster", "<3 of 6 positive, ideally negative at re-test"],
          ["Functional task tolerance (prolonged standing/sitting, single-leg stance, stairs, lifting)", "pain-free"],
          ["Outcome plateau check", "no significant difference is typically found between exercise-only, manipulation-only and combined approaches by week 24 (Nejati et al. 2019) — symptoms persisting beyond this arc warrant re-evaluation, not simply longer dosing of the same exercises"]
        ],
        exercises: [
          {
            name: "Progressive Single-Leg Loading / Functional Task Simulation",
            load: "progressive to task-equivalent", tempo: "controlled", reps: "3×10", range: "functional range",
            subs: []
          },
          {
            name: "Sport / Occupation-Specific Return-to-Load Drills",
            load: "progressive", tempo: "task-specific", reps: "progressive volume", range: "n/a",
            subs: []
          },
          {
            name: "Maintenance Lumbopelvic Stabilization Programme",
            load: "bodyweight", tempo: "controlled", reps: "2–3×/week", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  // ============================================================================
  // HALLUX VALGUS (BUNION) POST-OP REHABILITATION · ADOLESCENT TRACTION
  // APOPHYSITIS (OSGOOD-SCHLATTER DISEASE & SEVER'S DISEASE) — added 21 Aug
  // 2026, a follow-up gap-analysis pass picking two more physio-flagged foot/
  // paediatric gaps. Independently PubMed-verified via eutils (not
  // pubmed.ncbi.nlm.nih.gov directly — cookie-walled). NOT yet wired into
  // condition_library. See docs/PROTOCOL-REVIEW.md's 2026-08-21 entries for
  // full literature and self-flagged concerns:
  //   - Hallux_Valgus_PostOp uses category `ankle`, matching the existing
  //     convention for Midfoot_Lisfranc and Plantar_Heel_Pain — both foot
  //     conditions already filed under `ankle` in this catalog (displayed as
  //     "Ankle & foot" in the review doc) — rather than introducing a new
  //     `foot` category for one entry. Its strongest citation (Ling et al.
  //     2020, RCT) tested early weight-bearing on ONE specific soft-tissue
  //     procedure (endoscopic-assisted distal soft tissue reconstruction) —
  //     extrapolating that to osteotomy/fusion patients, who already have
  //     different standard WB timelines with rigid fixation, is a real
  //     stretch, flagged inline at the Phase 2 gate. The other verified
  //     citation (Connor et al. 1995) is a 30-year-old, 39-patient RCT
  //     testing a continuous-passive-motion device, not a home exercise
  //     programme — its "faster return to shoes" finding technically applies
  //     to CPM+PT vs. PT-alone, not to any specific ROM-exercise dosing. No
  //     trial found stratifies WB/footwear timelines by procedure type,
  //     despite osteotomy, fusion and soft-tissue procedures having
  //     materially different real-world recovery timelines in practice.
  //   - Osgood_Schlatter_Disease and Severs_Disease_Calcaneal_Apophysitis are
  //     built as TWO SEPARATE presentations, not combined — despite sharing
  //     an activity-modification approach and being reviewed together by a
  //     2026 Cochrane review, they sit in different anatomical categories
  //     (`knee` vs `ankle`) that this catalog's single-category schema can't
  //     span, and a physio searching by joint region would look for them
  //     separately.
  //   - Both are a genuine structural-fit mismatch with this catalog's
  //     "3-phase progress toward tissue-healing discharge" template —
  //     flagged explicitly here, not silently forced. These are self-
  //     limiting growth-plate traction injuries, not damaged tissue being
  //     rehabilitated; true resolution tracks skeletal maturity (months,
  //     sometimes 1–2 years), not this programme's own arc. The "gates"
  //     below are symptom-under-load trend markers, not healing milestones —
  //     the same honest mismatch already flagged for
  //     Pregnancy_Pelvic_Girdle_Pain ("no discharge, only delivery") and
  //     Trigger_Finger in this file.
  //   - The evidence base for both is thin by design, not by oversight: a
  //     2026 Cochrane review (Williams et al., 10 RCTs/654 children across
  //     both conditions) rates evidence for every non-surgical intervention
  //     tested — pharmacological injections, taping, orthoses, heel
  //     lifts/cushioning — as low to very-low certainty. No RCT tests a
  //     specific exercise/loading programme against sham for either
  //     condition (confirmed separately for OSD by Neuhaus et al. 2021: only
  //     2 RCTs among 13 studies found, poor-to-moderate quality). What IS
  //     reasonably solid: James et al. 2016 (n=124 RCT) found no orthotic/
  //     footwear choice was superior beyond 2 months for Sever's — used here
  //     to justify NOT prescribing a specific device, the opposite of how a
  //     citation is normally used in this file.
  // ============================================================================

  "Hallux_Valgus_PostOp": {
    tier: "injury",
    category: "ankle",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Protect & Early Mobilization (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Surgical incision", "healed, no signs of infection"],
          ["Weight-bearing status", "per surgeon clearance in post-op/rigid-soled shoe — protocol varies by procedure (osteotomy vs. fusion vs. soft-tissue reconstruction), see review notes"],
          ["Swelling", "trending down, manageable with elevation"],
          ["First MTP passive mobility", "gentle pain-free arc established, not yet loaded"]
        ],
        exercises: [
          {
            name: "Toe & Ankle Pumps (Non-Weight-Bearing Circulation Work)",
            load: "none", tempo: "slow", reps: "3×15, several×/day", range: "pain-free",
            subs: []
          },
          {
            name: "Passive/Active-Assisted First MTP Mobilization",
            load: "none", tempo: "slow, gentle", reps: "2×10, 1–2×/day", range: "pain-free arc",
            subs: ["Continuous passive motion (CPM) device, if available — Connor et al. 1995 found this accelerated ROM and return-to-shoes vs. PT alone"]
          },
          {
            name: "Elevation & Oedema Management",
            load: "none", tempo: "n/a", reps: "as needed, several×/day", range: "n/a",
            subs: []
          },
          {
            name: "Contralateral-Limb & Upper Body Conditioning",
            load: "bodyweight", tempo: "controlled", reps: "as tolerated", range: "n/a",
            subs: []
          }
        ]
      },
      {
        name: "Progressive Weight-Bearing & ROM Restoration (Weeks 4–8)",
        wks: 5,
        gates: [
          ["Weight-bearing progression", "full weight-bearing in supportive/wide-toe-box shoe achieved, pain ≤3/10 — early progressive weight-bearing from ~2 weeks was shown safe in one RCT of a specific soft-tissue procedure (Ling et al. 2020); extrapolated here to the wider post-op population, see review notes"],
          ["First MTP dorsiflexion", "functional range restored for gait — clinical convention threshold, not literature-derived (see review notes)"],
          ["Gait pattern", "normalized, no antalgic limp on level surfaces"],
          ["Single-leg stance (operated side)", "≥20s stable"]
        ],
        exercises: [
          {
            name: "Active First MTP ROM (Dorsiflexion/Plantarflexion)",
            load: "none", tempo: "controlled", reps: "3×10, 2×/day", range: "progressing toward full",
            subs: ["Towel-scrunches (toe flexors)"]
          },
          {
            name: "Progressive Weight-Bearing Gait Training",
            load: "bodyweight", tempo: "graded", reps: "daily, graded volume", range: "n/a",
            subs: []
          },
          {
            name: "Intrinsic Foot Muscle Activation",
            load: "bodyweight", tempo: "slow", reps: "3×10", range: "n/a",
            subs: ["Marble/towel pickups"]
          },
          {
            name: "Scar Mobilization",
            load: "none", tempo: "slow, circular", reps: "2×2 min/day", range: "n/a",
            subs: []
          },
          {
            name: "Calf & Ankle Strengthening (Non-Provocative)",
            load: "bodyweight → light band", tempo: "controlled", reps: "3×12", range: "full ROM",
            subs: []
          }
        ]
      },
      {
        name: "Return to Footwear & Activity (Weeks 9–16)",
        wks: 8,
        gates: [
          ["First MTP ROM", "within functional range for gait, comparable to contralateral side"],
          ["Return to regular/wide-toe-box footwear", "tolerated pain-free — Connor et al. 1995 measured return-to-shoes as a real outcome, though on a different (CPM-assisted) protocol"],
          ["Single-leg heel raise", "≥15 reps, pain-free"],
          ["Radiographic union/alignment (if osteotomy/fusion)", "confirmed by surgeon before high-impact return"]
        ],
        exercises: [
          {
            name: "Progressive Resistance First MTP Strengthening",
            load: "light resistance/towel", tempo: "controlled", reps: "3×12", range: "full ROM",
            subs: ["Marble pickups with resistance"]
          },
          {
            name: "Single-Leg Balance / Proprioception",
            load: "bodyweight", tempo: "sustained", reps: "3×30s", range: "n/a",
            subs: []
          },
          {
            name: "Graded Return-to-Activity Walking/Jogging Progression",
            load: "bodyweight", tempo: "progressive", reps: "3–4×/week", range: "n/a",
            subs: []
          },
          {
            name: "Footwear Transition Education (Heel-Height/Toe-Box Progression)",
            load: "none", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  "Osgood_Schlatter_Disease": {
    tier: "injury",
    category: "knee",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Symptom Settle & Load Modification (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Pain during/after sport (NPRS)", "improving trend — this is a self-limiting growth-plate condition, not a healing tissue injury; this gate tracks symptom trend under modified load, not a tissue-healing milestone (see review notes)"],
          ["Tibial tuberosity tenderness on palpation", "baseline recorded, not worsening"],
          ["Quadriceps/hamstring stretch tolerance", "improving, no sharp pain"],
          ["Activity modification (not full rest)", "jumping/deep-knee-flexion/kneeling load reduced to a pain-tolerable level — standard clinical convention, not RCT-derived (see review notes)"]
        ],
        exercises: [
          {
            name: "Standing Quadriceps Stretch",
            load: "bodyweight", tempo: "sustained", reps: "3×30s, 1–2×/day", range: "pain-free",
            subs: ["Prone quad stretch"]
          },
          {
            name: "Hamstring Stretch",
            load: "bodyweight", tempo: "sustained", reps: "3×30s", range: "pain-free",
            subs: []
          },
          {
            name: "Activity/Load Modification Education",
            load: "none", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: ["Reduce jumping/sprinting/kneeling volume, not full sport cessation"]
          },
          {
            name: "Ice After Activity",
            load: "none", tempo: "n/a", reps: "10–15 min post-activity", range: "n/a",
            subs: []
          },
          {
            name: "Pain-Free Isometric Quad Sets",
            load: "bodyweight", tempo: "5s hold", reps: "3×10", range: "submaximal, pain-free",
            subs: []
          }
        ]
      },
      {
        name: "Graduated Load Reintroduction (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Pain with daily activity (walking, stairs)", "minimal or absent"],
          ["Single-leg squat ×10", "pain ≤3/10, tolerated"],
          ["Resisted knee extension", "no reproduction of tibial tuberosity pain"],
          ["Running/jumping tolerance", "improving, no next-day flare"]
        ],
        exercises: [
          {
            name: "Progressive Quadriceps Strengthening (Double-Leg → Single-Leg)",
            load: "bodyweight → light load", tempo: "controlled", reps: "3×10", range: "pain-free arc",
            subs: ["Wall sit (partial range)", "Leg press (light, shallow range)"]
          },
          {
            name: "Hip/Glute Strengthening (General Lower-Limb)",
            load: "band → light weight", tempo: "controlled", reps: "3×12", range: "full ROM",
            subs: []
          },
          {
            name: "Graduated Running-Volume Reintroduction",
            load: "bodyweight", tempo: "progressive", reps: "3×/week", range: "n/a",
            subs: []
          },
          {
            name: "Low-Amplitude Double-Leg Landing Reintroduction",
            load: "bodyweight", tempo: "controlled landing", reps: "3×8", range: "low amplitude",
            subs: []
          }
        ]
      },
      {
        name: "Return to Sport & Self-Management (Weeks 9–12+)",
        wks: 4,
        gates: [
          ["Sport-specific load (running, jumping, kneeling)", "tolerated without symptom flare beyond 24h"],
          ["Quadriceps strength", "comparable to contralateral limb"],
          ["Athlete/parent understands self-management & flare plan", "confirmed — symptoms may recur intermittently through the remainder of the growth spurt until the apophysis fuses, which is outside this programme's own arc (see review notes)"]
        ],
        exercises: [
          {
            name: "Sport-Specific Drills (Running, Cutting, Landing Mechanics)",
            load: "bodyweight", tempo: "sport-speed", reps: "progressive volume", range: "n/a",
            subs: []
          },
          {
            name: "Continued Quadriceps/Hip Strength Maintenance",
            load: "progressive", tempo: "controlled", reps: "2×/week", range: "full ROM",
            subs: []
          },
          {
            name: "Graduated Return-to-Training Volume",
            load: "bodyweight", tempo: "progressive", reps: "per training plan", range: "n/a",
            subs: []
          },
          {
            name: "Flare Self-Management Education (Reduce Load, Don't Stop)",
            load: "none", tempo: "n/a", reps: "as needed", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  "Severs_Disease_Calcaneal_Apophysitis": {
    tier: "injury",
    category: "ankle",
    arc: 10,
    evidence: [],
    phases: [
      {
        name: "Symptom Settle & Load Modification (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Pain during/after sport (NPRS or Faces scale)", "improving trend — self-limiting growth-plate condition; this gate tracks symptom trend under modified load, not a tissue-healing milestone (see review notes)"],
          ["Calcaneal apophysis tenderness (medial-lateral squeeze test)", "baseline recorded, not worsening"],
          ["Calf stretch tolerance", "improving, no sharp pain"],
          ["Activity modification (not full rest)", "running/jumping volume reduced to a pain-tolerable level"]
        ],
        exercises: [
          {
            name: "Gastrocnemius/Soleus Stretch",
            load: "bodyweight", tempo: "sustained", reps: "3×30s, 1–2×/day", range: "pain-free",
            subs: []
          },
          {
            name: "Activity/Load Modification Education",
            load: "none", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: ["Reduce running/jumping volume, not full sport cessation"]
          },
          {
            name: "Ice After Activity",
            load: "none", tempo: "n/a", reps: "10–15 min post-activity", range: "n/a",
            subs: []
          },
          {
            name: "Heel Raise / Cushioned Footwear",
            load: "n/a", tempo: "n/a", reps: "worn during symptomatic period", range: "n/a",
            subs: ["Prefabricated foot orthoses — a factorial RCT (James et al. 2016) found no clear advantage of one over the other beyond 2 months"]
          },
          {
            name: "Pain-Free Isometric Calf Work",
            load: "bodyweight", tempo: "5s hold", reps: "3×10", range: "submaximal, pain-free",
            subs: []
          }
        ]
      },
      {
        name: "Graduated Load Reintroduction (Weeks 4–7)",
        wks: 4,
        gates: [
          ["Pain with daily walking", "minimal or absent"],
          ["Single-leg heel raise", "tolerated pain-free, reps improving from baseline"],
          ["Running/jumping tolerance", "improving, no next-day flare"]
        ],
        exercises: [
          {
            name: "Progressive Calf Strengthening (Double-Leg → Single-Leg Heel Raise)",
            load: "bodyweight", tempo: "2s up/2s down", reps: "3×12", range: "full ROM",
            subs: []
          },
          {
            name: "Foot Intrinsic Strengthening",
            load: "bodyweight", tempo: "slow", reps: "3×10", range: "n/a",
            subs: ["Towel-scrunches (toes)"]
          },
          {
            name: "Balance / Proprioception",
            load: "bodyweight", tempo: "sustained", reps: "3×20–30s", range: "n/a",
            subs: []
          },
          {
            name: "Graduated Running-Volume Reintroduction",
            load: "bodyweight", tempo: "progressive", reps: "3×/week", range: "n/a",
            subs: []
          }
        ]
      },
      {
        name: "Return to Sport & Self-Management (Weeks 8–10)",
        wks: 3,
        gates: [
          ["Sport-specific load (running, jumping, cutting)", "tolerated without symptom flare beyond 24h"],
          ["Calf strength", "comparable to contralateral limb"],
          ["Athlete/parent understands self-management & flare plan", "confirmed — symptoms may recur intermittently until the calcaneal apophysis fuses, typically mid-teens, which is outside this programme's own arc (see review notes)"]
        ],
        exercises: [
          {
            name: "Sport-Specific Drills (Running, Jumping, Cutting)",
            load: "bodyweight", tempo: "sport-speed", reps: "progressive volume", range: "n/a",
            subs: []
          },
          {
            name: "Continued Calf Strength Maintenance",
            load: "progressive", tempo: "controlled", reps: "2×/week", range: "full ROM",
            subs: []
          },
          {
            name: "Graduated Return-to-Training Volume",
            load: "bodyweight", tempo: "progressive", reps: "per training plan", range: "n/a",
            subs: []
          },
          {
            name: "Flare Self-Management Education (Reduce Load, Don't Stop)",
            load: "none", tempo: "n/a", reps: "as needed", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  // ============================================================================
  // CALF STRAIN & QUADRICEPS STRAIN — added 22 Aug 2026, closing two MSK gaps
  // flagged by a SECOND practising-physio review pass (not the original gap
  // list this session worked through) — the physio noted that despite
  // Hamstring_Strain and Groin_Strain_Adductor already existing as acute
  // muscle-strain entries, there was no calf strain or quadriceps strain
  // entry at all, even though both are extremely common in general MSK
  // practice. Independently PubMed-verified via eutils (not
  // pubmed.ncbi.nlm.nih.gov directly — cookie-walled). NOT yet wired into
  // condition_library. See docs/PROTOCOL-REVIEW.md's 2026-08-22 entries for
  // full literature and self-flagged concerns:
  //   - Both entries carry one verified citation, but each is small and
  //     drawn from elite/professional athlete cohorts (Cross et al. 2004:
  //     n=25 professional Australian Rules footballers; Green et al. 2020:
  //     149 elite Australian Football League players) — the specific-number
  //     traceability is real, but generalising elite-athlete recovery
  //     timelines to a general MSK physio caseload is an extrapolation, not
  //     a direct match, the same caveat already on record elsewhere in this
  //     file (e.g. Askling's H-test in Hamstring_Strain above).
  //   - Neither entry's set/rep/tempo dosing is citation-derived — no dosed
  //     exercise-therapy RCT exists for either condition (confirmed by
  //     Green et al. 2022's qualitative expert-survey paper, which opens by
  //     noting "a dearth of research to guide clinicians" on calf strain,
  //     and by Mullen et al. 2026, which states plainly that "there is no
  //     current treatment algorithm developed" for rectus femoris injuries).
  //     The dosing follows this file's existing Hamstring_Strain/
  //     Groin_Strain_Adductor convention instead.
  //   - Quadriceps_Strain is filed under hip_posterior (displayed as "Hip &
  //     thigh"), following the precedent Hamstring_Strain and
  //     Groin_Strain_Adductor already set for that category — not a literal
  //     anatomical fit (rectus femoris strains are mid-thigh, not a hip or
  //     knee joint condition), but this taxonomy has no dedicated thigh
  //     category, and hip_posterior is already this catalog's de facto
  //     thigh-muscle-strain bucket. This protocol is written for the
  //     indirect (sprint/kick) strain pattern Cross et al. 2004 studied, not
  //     for direct-trauma contusion-type quadriceps injuries, which carry a
  //     distinct myositis-ossificans risk profile not covered here.
  //   - Calf_Strain's Phase 1 gate explicitly excludes Grade III (complete
  //     rupture/tendon avulsion) by name, the same pattern already used in
  //     Tibial_Stress_Fracture_LowRisk for high-risk-site exclusion — that
  //     exclusion needs to be enforced in the app, not left as a note here.
  //     Its single 10-week arc is a compromise across real grade-dependent
  //     variation, not a graded/stratified timeline.
  // ============================================================================

  "Calf_Strain": {
    tier: "injury",
    category: "lower_leg",
    arc: 10,
    evidence: [],
    phases: [
      {
        name: "Protect & Early Mobility (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Grade confirmed (I–II, partial tear) by clinician exam/imaging", "Grade III — complete rupture, palpable defect, unable to weight-bear — excluded; refer for surgical opinion"],
          ["Pain-free walking", "normal gait pattern, no antalgic limp"],
          ["Isometric calf hold (bent-knee, soleus-biased)", "pain ≤3/10, tolerated"]
        ],
        exercises: [
          {
            name: "Isometric Calf Hold (Bent-Knee, Soleus-Biased)",
            load: "bodyweight", tempo: "sustained hold", reps: "3×30–45s", range: "seated, knee flexed ~90°, pain-free",
            subs: ["Seated calf press isometric (light band)"]
          },
          {
            name: "Isometric Calf Hold (Straight-Knee, Gastrocnemius-Biased)",
            load: "bodyweight", tempo: "sustained hold", reps: "3×30–45s", range: "standing, knee extended, pain-free",
            subs: ["Wall-assisted standing calf isometric"]
          },
          {
            name: "Ankle Pumps & Active Range of Motion",
            load: "none", tempo: "slow, controlled", reps: "4×15 each direction", range: "full pain-free ROM",
            subs: ["Seated towel-assisted ankle ROM"]
          },
          {
            name: "Non-Impact Aerobic Cross-Training",
            load: "bike/pool", tempo: "steady", reps: "3–4×/week, 15–20 min", range: "n/a",
            subs: ["Deep-water running", "Stationary bike"]
          }
        ]
      },
      {
        name: "Progressive Strength & Eccentric Loading (Weeks 3–6)",
        wks: 4,
        gates: [
          ["Single-leg heel raise (bent-knee, soleus-biased)", "≥15 reps, pain-free"],
          ["Single-leg heel raise (straight-knee, gastrocnemius-biased)", "≥15 reps, pain-free"],
          ["Jogging tolerance (straight-line, submaximal pace)", "pain-free during and the following morning"]
        ],
        exercises: [
          {
            name: "Eccentric Heel Drop (Straight-Knee)",
            load: "bodyweight → weighted", tempo: "5s eccentric lower", reps: "3×12", range: "full dorsiflexion off step edge",
            subs: ["Double-leg eccentric lowering"]
          },
          {
            name: "Eccentric Heel Drop (Bent-Knee)",
            load: "bodyweight → weighted", tempo: "5s eccentric lower", reps: "3×12", range: "knee flexed ~30–45°, full dorsiflexion",
            subs: ["Seated eccentric calf press (machine or band)"]
          },
          {
            name: "Progressive Resistance Calf Raise (Weighted)",
            load: "start bodyweight, +5–10lbs/week", tempo: "2s up/2s down", reps: "3×15", range: "full ROM",
            subs: ["Leg press calf raise"]
          },
          {
            name: "Hip / Glute & Kinetic Chain Strengthening",
            load: "band → light weight", tempo: "2s hold", reps: "3×15", range: "full ROM",
            subs: ["Monster walks (band)", "Clamshells"]
          },
          {
            name: "Progressive Jogging Introduction",
            load: "bodyweight", tempo: "steady, increasing pace", reps: "3×/week, 10–20 min", range: "n/a",
            subs: ["Treadmill jog-walk intervals (0% grade)"]
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 7–10)",
        wks: 4,
        gates: [
          ["Single-leg heel raise (bent- and straight-knee)", "≥20–25 reps, symmetric with contralateral limb"],
          ["Single-leg hop", "pain-free, ≥10 consecutive, symmetrical"],
          ["Sprint mechanics (progressive acceleration/deceleration)", "full speed, pain-free, controlled deceleration"],
          ["Sport-specific cutting & change-of-direction", "pass, no guarding or compensation"]
        ],
        exercises: [
          {
            name: "Plyometric Calf Loading (Pogo Hops / Bounding)",
            load: "bodyweight", tempo: "explosive, reactive", reps: "3×15–20", range: "low amplitude",
            subs: ["Line hops"]
          },
          {
            name: "Sprint Progression (Acceleration → Deceleration)",
            load: "none", tempo: "sport-speed", reps: "3×6 sprints per drill", range: "progressive intensity 70→90→100%",
            subs: ["Hill sprints (deceleration emphasis)", "Resisted sprints (light band)"]
          },
          {
            name: "Agility & Cutting Drills",
            load: "none", tempo: "sport-speed", reps: "3×10 cuts per direction", range: "progressive intensity up to match-speed",
            subs: ["Figure-8 running", "T-drill (change of direction)"]
          },
          {
            name: "Continued Eccentric & Strength Maintenance",
            load: "bodyweight → weighted", tempo: "controlled", reps: "2×/week", range: "full ROM",
            subs: []
          }
        ]
      }
    ]
  },

  "Quadriceps_Strain": {
    tier: "injury",
    category: "hip_posterior",
    arc: 10,
    evidence: [],
    phases: [
      {
        name: "Protect & Early Mobility (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Injury site classified — peripheral/vastus vs. central-tendon rectus femoris — by clinician exam/imaging", "central-tendon rectus femoris injuries carry a substantially longer expected timeline than this protocol's default pacing (see review notes) — flag and slow progression accordingly"],
          ["Pain-free walking", "normal gait, no limp"],
          ["Active knee extension (seated, gravity-eliminated)", "full ROM, pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Isometric Quad Set (Submaximal)",
            load: "bodyweight", tempo: "5s hold", reps: "3×10", range: "knee near-extension, pain-free",
            subs: ["Straight leg raise isometric hold"]
          },
          {
            name: "Straight Leg Raise (Supine, Pain-Free Range)",
            load: "bodyweight", tempo: "3s lift/3s lower", reps: "3×12", range: "0→45° pain-free arc",
            subs: ["Seated active hip flexion ROM"]
          },
          {
            name: "Gentle Hip Flexor / Quadriceps Stretch (Pain-Free Only)",
            load: "none", tempo: "static hold", reps: "3×30s", range: "pain-free only, no stretch into sharp pain",
            subs: ["Standing quad stretch (light, supported)"]
          },
          {
            name: "Non-Impact Aerobic Cross-Training",
            load: "bike/pool", tempo: "steady, low resistance", reps: "3–4×/week, 15–20 min", range: "n/a",
            subs: ["Stationary bike (low resistance)", "Pool walking"]
          }
        ]
      },
      {
        name: "Progressive Strengthening (Weeks 3–7)",
        wks: 5,
        gates: [
          ["Active knee extension against gravity", "full ROM, 4/5 manual muscle test, pain-free"],
          ["Single-leg squat (partial range)", "pain ≤3/10, controlled"],
          ["Jogging tolerance (straight-line, submaximal pace)", "pain-free during and the following morning"]
        ],
        exercises: [
          {
            name: "Bodyweight Squat (Progressive Range)",
            load: "bodyweight", tempo: "3s lower/2s drive", reps: "3×12", range: "partial → full pain-free depth",
            subs: ["Box squat", "Leg press (light load)"]
          },
          {
            name: "Step-Up (Controlled)",
            load: "bodyweight → light dumbbell", tempo: "2s up/2s down", reps: "3×10 per leg", range: "knee-height step",
            subs: ["Assisted step-up (rail support)"]
          },
          {
            name: "Eccentric Knee Extension (Machine or Band, Slow Tempo)",
            load: "light → moderate", tempo: "4s eccentric lower", reps: "3×10", range: "90→0° knee extension, pain-free",
            subs: ["Resistance band knee extension"]
          },
          {
            name: "Hip-Flexion Length-Tension Work (Standing, Knee Flexed)",
            load: "light band", tempo: "controlled", reps: "3×12", range: "pain-free hip flexion arc, knee bent",
            subs: ["Standing marching with band"]
          },
          {
            name: "Progressive Jogging Introduction",
            load: "bodyweight", tempo: "steady, increasing pace", reps: "3×/week, 10–20 min", range: "n/a",
            subs: ["Treadmill jog-walk intervals (0% grade)"]
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 8–10)",
        wks: 3,
        gates: [
          ["Quadriceps strength (isokinetic or manual muscle test)", "≥90% limb symmetry index vs. contralateral"],
          ["Single-leg hop for distance", "≥90% symmetry, pain-free"],
          ["Sprinting & kicking mechanics (progressive)", "full speed / full kick, pain-free, no compensation"],
          ["Sport-specific deceleration & change-of-direction", "pass, no guarding"]
        ],
        exercises: [
          {
            name: "Sprint Progression (Acceleration → Deceleration)",
            load: "none", tempo: "sport-speed", reps: "3×6 sprints per drill", range: "progressive intensity 70→90→100%",
            subs: ["Resisted sprints (light band)", "Hill sprints"]
          },
          {
            name: "Kicking / Sport-Specific Hip-Flexion Power Drills",
            load: "none, or ball", tempo: "explosive", reps: "3×8–10 per leg", range: "full kicking ROM, progressive",
            subs: ["Light resisted kicking (band)"]
          },
          {
            name: "Plyometric Lower-Limb Power (Bounding, Broad Jump)",
            load: "bodyweight", tempo: "explosive", reps: "3×8–10", range: "progressive amplitude",
            subs: ["Single-leg hop series (forward/lateral)"]
          },
          {
            name: "Agility & Cutting Drills",
            load: "none", tempo: "sport-speed", reps: "3×10 cuts per direction", range: "progressive intensity up to match-speed",
            subs: ["T-drill (change of direction)", "Shuttle runs"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // THORACIC OUTLET SYNDROME · NEUROGENIC (CONSERVATIVE) & MULTIDIRECTIONAL
  // SHOULDER INSTABILITY — added 22 Aug 2026, closing two MSK gaps a second
  // pass by the practising physio partner flagged: no thoracic outlet syndrome
  // entry existed at all, and Shoulder_Instability only covers traumatic
  // (usually unidirectional, post-dislocation) instability, not atraumatic
  // multidirectional instability (MDI). Same pattern as every addition above:
  // drafted with independently PubMed-verified citations (via eutils, not
  // pubmed.ncbi.nlm.nih.gov directly — that endpoint cookie-walls fetches) but
  // NOT yet wired into condition_library.
  //   - Thoracic_Outlet_Syndrome_Conservative is filed under `shoulder`, not
  //     `cervical_spine`, on purpose: although the interscalene-triangle
  //     compression site is anatomically a neck structure, the costoclavicular
  //     and subcoracoid/pectoralis-minor compression sites are not (Sanders &
  //     Annest 2014) — and, more importantly, this catalog already has a
  //     cervical_spine entry (Cervical_Radiculopathy) that this protocol's own
  //     Phase 1 gate differentiates against directly. Filing this one under
  //     cervical_spine risked reading as "a second neck-nerve entry"; filing it
  //     under shoulder, where its conservative-management literature (Collins &
  //     Orpin 2021, Hock et al. 2024) actually points its treatment target
  //     (scapular/shoulder-girdle mechanics, first-rib/pec-minor space), keeps
  //     that differentiation legible. Scope is deliberately narrow: neurogenic
  //     TOS only. Arterial and venous TOS are named exclusions with a hard
  //     vascular red-flag gate in Phase 1 — per Illig et al. 2016's Society for
  //     Vascular Surgery reporting standards, NTOS/VTOS/ATOS are three separate
  //     entities and vascular TOS is not a conservative-management candidate.
  //     The diagnosis itself is honestly contested in the literature (no
  //     gold-standard test, "diagnosis of exclusion" per Hock et al. 2024; no
  //     RCT of conservative treatment exists at all per Vanti et al. 2007) —
  //     the same category of caveat already on record for Piriformis_Deep_
  //     Gluteal_Syndrome earlier in this file.
  //   - Multidirectional_Shoulder_Instability is deliberately NOT a duplicate
  //     of Shoulder_Instability above: that entry's exercise selection (side-
  //     lying ER, prone I-Y-T, progressive throwing) is a classic Rockwood-
  //     style program built for unidirectional/post-traumatic instability.
  //     Warby et al. 2018's RCT directly tested that same "Rockwood
  //     Instability program" against a purpose-built MDI programme (the
  //     "Watson MDI program") in an MDI population and found the MDI-specific
  //     programme produced superior WOSI/MISS/pain outcomes at 12 and 24
  //     weeks — direct trial evidence, not just theoretical reasoning, for why
  //     MDI needs its own entry rather than reusing Shoulder_Instability. This
  //     protocol's early-phase gates explicitly avoid end-range/sulcus-loading
  //     positions that Shoulder_Instability's protocol does not need to guard
  //     against, and its Phase 1 gate screens the contralateral (asymptomatic)
  //     shoulder for laxity, reflecting Schenk & Brems 1998's finding that the
  //     uninjured side is often equally lax.
  // See docs/PROTOCOL-REVIEW.md's 2026-08-22 entries for the full literature
  // and, importantly, self-flagged concerns on both.
  // ============================================================================

  "Thoracic_Outlet_Syndrome_Conservative": {
    tier: "injury",
    category: "shoulder",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Vascular Screening & Symptom Desensitization (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Vascular red-flag screen (pulse asymmetry/diminution, pallor or cyanosis, unilateral limb swelling or venous distension, exertional arm claudication)", "negative — any positive finding excludes this protocol; refer urgently for vascular/thoracic surgical assessment (arterial/venous TOS, Illig et al. 2016)"],
          ["NTOS diagnostic criteria confirmed by referring clinician (Illig et al. SVS committee: ≥3 of 4 — thoracic-outlet pain/tenderness, distal neurologic symptoms often worse overhead, exclusion of other pathology, scalene-injection response)", "met prior to programme entry — not re-diagnosed by this protocol"],
          ["Cervical radiculopathy differential screen (Spurling's, myelopathy screen, cervical ROM)", "negative / does not better explain presentation"],
          ["Provoking postures / paraesthesia distribution", "documented at baseline"]
        ],
        exercises: [
          {
            name: "Postural & Ergonomic Load Modification Education",
            load: "none", tempo: "as needed", reps: "throughout day", range: "n/a",
            subs: ["Workstation ergonomic review"]
          },
          {
            name: "Median/Ulnar Nerve Glide (Sliders)",
            load: "bodyweight", tempo: "slow, sub-symptomatic", reps: "3×10", range: "pain/paraesthesia-free arc",
            subs: ["Nerve glide (radial variant)", "Tensioners (later stage only)"]
          },
          {
            name: "Scalene & Pectoralis Minor Stretch",
            load: "none", tempo: "sustained, gentle", reps: "3×20–30s", range: "pain-free, sub-maximal",
            subs: ["Doorway pec stretch (low arm position)", "Upper trapezius stretch"]
          },
          {
            name: "Diaphragmatic Breathing & First-Rib Mobility",
            load: "none", tempo: "slow, controlled", reps: "3×10 breaths", range: "n/a",
            subs: ["Apical breathing retraining", "Self-mobilization, first rib (posterior-inferior glide)"]
          }
        ]
      },
      {
        name: "Progressive Postural & Scapular Re-Education (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Repeat vascular red-flag screen", "still negative"],
          ["Neurologic symptoms (paraesthesia/pain, NPRS)", "improving trend, no new motor deficit"],
          ["Scapular/postural screen (upper-crossed pattern)", "improved from baseline"],
          ["Nerve glide tolerance", "progressing toward full range, sub-symptomatic"]
        ],
        exercises: [
          {
            name: "Scapular Setting / Lower Trapezius Activation",
            load: "bodyweight", tempo: "2s hold", reps: "3×10", range: "scapular depression/retraction",
            subs: ["Prone Y raise (light)", "Band-resisted scapular depression"]
          },
          {
            name: "Progressive Nerve Glide (Median/Ulnar)",
            load: "bodyweight", tempo: "controlled, progressing range", reps: "3×10", range: "progressing toward full tension, symptom-guided",
            subs: ["Radial nerve glide variant"]
          },
          {
            name: "Prone I-Y-T Series (Scapular Activation)",
            load: "bodyweight (arms only)", tempo: "2s hold per position", reps: "3×8 per position", range: "prone flat",
            subs: ["Quadruped I-Y-T", "Standing band-resisted I-Y-T"]
          },
          {
            name: "First-Rib / Costoclavicular Space Self-Mobilization",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "pain-free",
            subs: ["Seated costoclavicular stretch"]
          }
        ]
      },
      {
        name: "Return to Function & Load Tolerance (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Symptom severity (QuickDASH or equivalent)", "clinically meaningful improvement from baseline (Balderman et al. 2019: mean change −29.5% at initial follow-up)"],
          ["Overhead/sustained postural task tolerance", "functional tasks tolerated without symptom flare"],
          ["Initial conservative-trial checkpoint", "reassessed; if not improving, hold referral discussion for specialist TOS/vascular-thoracic assessment rather than continuing unchanged"]
        ],
        exercises: [
          {
            name: "Progressive Resisted Scapular/Postural Strengthening",
            load: "progressive band or light dumbbell", tempo: "2s hold", reps: "3×12", range: "full scapular retraction/depression",
            subs: ["Band pull-apart", "Prone Y-T-W (light)"]
          },
          {
            name: "Functional Overhead / Task-Specific Loading",
            load: "progressive to work/sport-equivalent", tempo: "controlled", reps: "3×8", range: "full functional range, symptom-guided",
            subs: ["Sustained overhead reaching simulation"]
          },
          {
            name: "Sustained Postural Tolerance Training",
            load: "none/light", tempo: "sustained", reps: "building to 30–45 min", range: "n/a",
            subs: ["Desk/computer work simulation"]
          },
          {
            name: "General Aerobic Conditioning",
            load: "none/light", tempo: "steady", reps: "3×20–30 min/week", range: "n/a",
            subs: ["Walking programme", "Stationary bike"]
          }
        ]
      }
    ]
  },

  "Multidirectional_Shoulder_Instability": {
    tier: "injury",
    category: "shoulder",
    arc: 20,
    evidence: [],
    phases: [
      {
        name: "Differentiate & Scapular Control (Weeks 1–6)",
        wks: 6,
        gates: [
          ["Instability differentiation (atraumatic onset; multidirectional laxity — positive sulcus sign, load-and-shift positive in ≥2 directions; contralateral shoulder screened)", "confirmed MDI, distinct from unidirectional/post-traumatic instability (Schenk & Brems 1998)"],
          ["Pain (WOSI or NPRS)", "baseline documented"],
          ["Scapular position/control screen", "baseline documented, compensatory pattern identified"],
          ["Provocative end-range/sulcus-loading positions", "identified and avoided in early-phase loading"]
        ],
        exercises: [
          {
            name: "Scapular Setting (Isometric Scapular Control)",
            load: "bodyweight", tempo: "5s hold", reps: "3×10", range: "neutral scapular position",
            subs: ["Wall scapular setting", "Quadruped scapular setting"]
          },
          {
            name: "Rotator Cuff Isometrics, Sub-Maximal, Mid-Range",
            load: "bodyweight/light resistance", tempo: "5s hold", reps: "3×10", range: "mid-range only — avoid end-range/apprehension positions",
            subs: ["Isometric ER at side", "Isometric IR at side"]
          },
          {
            name: "Postural & Provocative-Position Avoidance Education",
            load: "none", tempo: "as needed", reps: "throughout day", range: "n/a",
            subs: ["Sleep/positioning education"]
          },
          {
            name: "Closed-Chain Scapular Stability (Quadruped)",
            load: "bodyweight", tempo: "controlled", reps: "3×10", range: "stable core, shoulder mid-range",
            subs: ["Wall press scapular stability"]
          }
        ]
      },
      {
        name: "Progressive Rotator Cuff & Scapular Strengthening (Weeks 7–12)",
        wks: 6,
        gates: [
          ["WOSI or MISS score", "clinically meaningful improvement from baseline (Warby et al. 2018 RCT primary outcomes)"],
          ["Rotator cuff strength (ER/IR, manual or dynamometry)", "improving, progressing toward symmetry"],
          ["Scapular control during active elevation", "improved, reduced compensatory pattern"],
          ["Instability episodes/subluxation frequency", "not increased from baseline"]
        ],
        exercises: [
          {
            name: "Progressive Rotator Cuff Strengthening (ER/IR, Mid-Range)",
            load: "light band or dumbbell 2–5lbs", tempo: "2s rotate/2s return", reps: "3×12", range: "mid-range only, avoiding end-range apprehension positions",
            subs: ["Standing ER with band", "Cable ER (low pulley)"]
          },
          {
            name: "Closed-Kinetic-Chain Progressive Loading",
            load: "bodyweight to light load", tempo: "controlled", reps: "3×10", range: "wall/table press, progressive",
            subs: ["Modified push-up plus"]
          },
          {
            name: "Dynamic Scapular Stabilization (Serratus Punch / Wall Slides)",
            load: "bodyweight or light dumbbell", tempo: "2s hold", reps: "3×12", range: "full scapular protraction/upward rotation",
            subs: ["Wall slide", "Standing band serratus punch"]
          },
          {
            name: "Functional-Position Drills",
            load: "light, progressive", tempo: "controlled", reps: "3×10", range: "functional/sport-specific positions, symptom-guided",
            subs: ["Reaching-pattern drills"]
          }
        ]
      },
      {
        name: "Dynamic Stability & Return to Function (Weeks 13–20)",
        wks: 8,
        gates: [
          ["WOSI/MISS score", "continued improvement, large effect size consistent with published cohort outcomes (Watson et al. 2018)"],
          ["Functional/sport-specific task tolerance", "tolerated without subluxation or symptom flare"],
          ["Conservative-trial checkpoint (approaching 6-month mark)", "reassessed; if functional gains plateau or instability persists, hold shared-decision conversation on continued exercise vs. surgical referral (Schenk & Brems 1998: 6-month non-operative trial threshold)"]
        ],
        exercises: [
          {
            name: "Dynamic/Plyometric Scapular Stability",
            load: "light medicine ball or band", tempo: "controlled, progressive speed", reps: "3×10", range: "functional range, symptom-guided",
            subs: ["Rhythmic stabilization drills"]
          },
          {
            name: "Sport/Occupation-Specific Functional Drills",
            load: "progressive to task-equivalent", tempo: "sport/task-speed", reps: "3×8–10", range: "full functional range",
            subs: ["Overhead task simulation"]
          },
          {
            name: "Return-to-Load Progressive Resistance (Full ROM)",
            load: "progressive dumbbell/band", tempo: "2s up/3s lower", reps: "3×10", range: "full pain-free ROM",
            subs: ["Standing overhead press (light)", "Lat pulldown"]
          },
          {
            name: "Maintenance & Self-Management Programme Education",
            load: "none", tempo: "n/a", reps: "2–3×/week ongoing", range: "n/a",
            subs: ["Home exercise programme handout"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // QUADRICEPS TENDINOPATHY & LUMBAR SPINAL STENOSIS — added 22 Aug 2026,
  // closing two MSK gaps a fresh physio-partner review flagged: no entry
  // existed for quadriceps tendinopathy (distinct from Patellar_Tendinopathy
  // above — this is the tendon ABOVE the patella, at its patellar insertion,
  // not below it), and no entry existed for lumbar spinal stenosis /
  // neurogenic claudication (distinct from Lumbar_Radiculopathy — bilateral,
  // walking/standing-provoked, flexion-relieved, an older population, vs.
  // radiculopathy's typically unilateral, dermatomal, flexion-provoked
  // pattern). Same PubMed-eutils-verified pattern as every addition above;
  // see docs/PROTOCOL-REVIEW.md's 2026-08-22 entries for full citations and
  // self-flagged concerns. Two worth surfacing here: Quadriceps_Tendinopathy's
  // own literature is genuinely thin (King et al. 2019 part 1 calls it a
  // "paucity of studies") — its isometric/HSR dosing numbers are borrowed
  // directly from patellar-tendon research (Rio 2015, Kongsgaard 2009), same
  // cross-tendon-borrowing pattern already used for Peroneal_Tendinopathy and
  // Biceps_Tendinopathy, and its gates deliberately do NOT claim a VISA-P
  // score for quad tendinopathy — no validated quadriceps-specific instrument
  // exists. Lumbar_Spinal_Stenosis leads with an explicit cauda equina/red-
  // flag screening gate, deliberately not repeating Lumbar_Radiculopathy's
  // documented gap (no red-flag gate), the same fix already made for
  // Cervical_Radiculopathy — and its walking-focused Phase 1 content
  // approximates the WEAKER comparator arm in its own strongest citation
  // (Whitman et al. 2006), not the manual-therapy-augmented arm that trial
  // actually found superior, because manual therapy is out of scope for this
  // app's exercise-prescription schema.
  // ============================================================================

  "Quadriceps_Tendinopathy": {
    tier: "injury",
    category: "knee_anterior",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Isometric & Load Management (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Isometric quad-tendon-biased hold pain", "≤3/10"],
          ["Single-leg deep-flexion squat pain (superior pole of patella)", "reducing trend"]
        ],
        exercises: [
          {
            name: "Isometric Spanish Squat / Wall Sit (Deep-Flexion Bias)",
            load: "bodyweight, band-assisted", tempo: "5×45s hold", reps: "5×45s", range: "~90°+ knee flexion — deeper than patellar-tendon dosing, since quadriceps/patellofemoral load rises with flexion depth",
            subs: ["Wall sit (isometric, deep flexion)", "Isometric leg press hold (deep flexion)"]
          },
          {
            name: "Load Management (Reduce Deep-Flexion & Jump Loading)",
            load: "none", tempo: "as needed", reps: "throughout aggravating activity", range: "n/a",
            subs: ["Activity substitution (swap deep squatting/jumping for cycling)", "Volume reduction on current sport"]
          }
        ]
      },
      {
        name: "Isotonic & Heavy Slow Resistance (Weeks 4–8)",
        wks: 5,
        gates: [
          ["Patient-reported pain/function (no validated quadriceps-tendon instrument exists — tracked via VAS/pain diary, not VISA-P)", "improving trend"],
          ["Single-leg deep-flexion squat", "pain ≤3/10 at full depth"]
        ],
        exercises: [
          {
            name: "Heavy Slow Resistance Leg Press (Deep-Flexion Range)",
            load: "progressive to near-maximal tolerable", tempo: "3s down/3s up", reps: "3×8–10", range: "0–120° knee flexion — deeper range than patellar-tendon HSR dosing, to load the superior-pole insertion",
            subs: ["Leg press (bilateral, deep range)", "Hack squat (controlled tempo, deep range)"]
          },
          {
            name: "Single-Leg Deep Squat (Superior-Pole Loading)",
            load: "bodyweight, progress to weighted", tempo: "3s down/2s up", reps: "3×10", range: "pain-guided deep-flexion depth, progressing weekly",
            subs: ["Deep box squat (assisted)", "Step-down into deep flexion (controlled)"]
          }
        ]
      },
      {
        name: "Energy Storage & Return to Sport (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Patient-reported pain/function", "at patient's functional goal, stable across sessions"],
          ["Hop/jump tolerance", "pain-free, symmetrical landing"]
        ],
        exercises: [
          {
            name: "Plyometric Progression (Jump-Land)",
            load: "bodyweight", tempo: "explosive concentric, controlled landing", reps: "3×8", range: "double-leg to single-leg progression",
            subs: ["Box jump (low height)", "Depth jump (progressive height)"]
          },
          {
            name: "Sport-Specific Loading",
            load: "sport-equivalent", tempo: "sport-speed", reps: "progressive volume", range: "full sport range",
            subs: ["Graded return-to-training drills", "Change-of-direction progression"]
          }
        ]
      }
    ]
  },

  "Lumbar_Spinal_Stenosis": {
    tier: "injury",
    category: "lumbar_spine",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Symptom Control, Red-Flag Screen & Flexion-Biased Relief (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Cauda equina / progressive neurological red flags", "absent — screened at intake and at any symptom change; if present, escalate for urgent imaging/referral rather than continuing this pathway"],
          ["Symptom pattern", "bilateral, walking/standing-provoked, flexion-relieved leg symptoms consistent with neurogenic claudication — not unilateral dermatomal radiculopathy (see differential notes in review)"]
        ],
        exercises: [
          {
            name: "Flexion-Biased Positional Relief",
            load: "none", tempo: "sustained", reps: "as tolerated", range: "comfortable lumbar flexion",
            subs: ["Knees-to-chest (supine)", "Seated lean-forward rest break"]
          },
          {
            name: "Body-Weight-Supported / Unloaded Treadmill Walking",
            load: "partial body-weight support or hands-on-rail unloading", tempo: "steady pace, stop before symptom onset", reps: "3×10 min, build as tolerated", range: "n/a",
            subs: ["Stationary bike (upright, flexed posture)", "Pool walking (unloaded)"]
          }
        ]
      },
      {
        name: "Progressive Walking Tolerance & Flexion-Biased Strengthening (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Zurich Claudication Questionnaire physical function domain", "improving trend"],
          ["Self-paced/timed walking distance", "improving trend from baseline"]
        ],
        exercises: [
          {
            name: "Progressive Community Walking (Interval, Stop-Before-Symptom Strategy)",
            load: "none", tempo: "steady, self-paced", reps: "graded weekly distance/duration increase", range: "n/a",
            subs: ["Treadmill walking (flat, no incline)", "Nordic walking (upright support)"]
          },
          {
            name: "Core Endurance (Flexion-Tolerant, Anti-Extension)",
            load: "bodyweight", tempo: "sustained hold", reps: "3×30–45s", range: "neutral-to-flexed spine, avoiding sustained extension",
            subs: ["Dead bug", "Pallof press (seated/supported)"]
          },
          {
            name: "Sit-to-Stand / Step-Up (Lower-Limb Strength for Gait)",
            load: "bodyweight, progress weekly", tempo: "controlled", reps: "3×10", range: "full functional range",
            subs: ["Seated leg press (light)", "Box step-up (low height)"]
          }
        ]
      },
      {
        name: "Functional Walking Capacity & Return to Activity (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Zurich Claudication Questionnaire symptom severity domain", "improving trend toward patient's functional goal"],
          ["Community walking distance/duration", "at patient's functional goal, symptoms manageable with self-paced strategy"]
        ],
        exercises: [
          {
            name: "Functional Walking Progression (Community Distances, Varied Terrain)",
            load: "none", tempo: "self-paced", reps: "progressive volume", range: "n/a",
            subs: ["Shopping/errand-distance walking practice", "Stair negotiation practice (flexion-tolerant pacing)"]
          },
          {
            name: "Self-Management Education (Flexion Strategy, Pacing, Flare Plan)",
            load: "none", tempo: "n/a", reps: "1 session + written material", range: "n/a",
            subs: ["Written pacing/flare plan", "Group education class"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // HIP FLEXOR / ILIOPSOAS STRAIN · PROXIMAL HAMSTRING TENDINOPATHY — added
  // 22 Aug 2026, closing two hip_posterior gaps a second physio-partner review
  // flagged as still missing ("MSK things are still missing"). Same pattern as
  // every prior round: drafted with independently PubMed-verified citations
  // (via eutils, not pubmed.ncbi.nlm.nih.gov directly) but NOT yet wired into
  // condition_library. Both are deliberately built as differentials against an
  // existing neighbour rather than duplicates:
  //   - Hip_Flexor_Strain_Iliopsoas is to Groin_Strain_Adductor what
  //     Piriformis_Deep_Gluteal_Syndrome is to Lumbar_Radiculopathy: a
  //     commonly-confused adjacent presentation, not a restatement. Both
  //     hip-flexor/iliopsoas strain and adductor strain present as anterior
  //     hip/groin pain after a kicking or sprinting mechanism, but the Doha
  //     agreement (Weir et al. 2015) defines them as distinct clinical
  //     entities on exam: adductor-related groin pain is adductor tenderness
  //     AND pain on resisted adduction; iliopsoas-related groin pain is
  //     iliopsoas tenderness with pain on resisted hip flexion AND/OR pain on
  //     hip-flexor stretch. Phase 1's first gate is that differential, not a
  //     generic pain-free-walking check. One honest caveat surfaced by Serner
  //     et al. 2015's imaging-correlation study: clinical diagnosis of
  //     adductor injuries matched imaging in 94–97% of cases, but clinically
  //     diagnosed iliopsoas/rectus femoris injuries showed a different
  //     radiological location in 35–46% of cases — the differential exam
  //     used here is real and validated as terminology, but is a meaningfully
  //     less reliable predictor of the actual imaged structure for this
  //     presentation than for adductor strain. No dosed exercise RCT for
  //     hip-flexor/iliopsoas strain rehab specifically was found (matching
  //     the gap already on record for Piriformis and Snapping Hip above) —
  //     the phase structure borrows the acute-strain shape already used for
  //     Groin_Strain_Adductor and Hamstring_Strain, and the grading language
  //     borrows the British Athletics Muscle Injury Classification (Pollock
  //     et al. 2014), which was developed and validated for hamstring
  //     injuries specifically, not iliopsoas/rectus femoris — an
  //     extrapolation, flagged as such below.
  //   - Proximal_Hamstring_Tendinopathy is to Hamstring_Strain what
  //     Gluteal_Tendinopathy is to a hip abductor strain: a chronic,
  //     insidious-onset overuse tendinopathy at the ischial-tuberosity origin,
  //     not an acute traumatic tear. It is also a genuine differential against
  //     lumbar radiculopathy/sciatica — deep buttock pain that can radiate
  //     down the posterior thigh is exactly the presentation both conditions
  //     share, and this entry's Phase 1 leads with that screen the same way
  //     Cervical_Radiculopathy leads with a myelopathy screen. This is the
  //     best-evidenced entry of this pair: Cacchio et al. 2012 validated three
  //     pain-provocation tests (Puranen-Orava, bent-knee stretch, modified
  //     bent-knee stretch) against a clinical reference standard with high
  //     reliability (ICC 0.82–0.93), and the same lead author's VISA-H
  //     questionnaire (Cacchio et al. 2014) is a condition-specific 8-item
  //     outcome measure with a real anchor-based MCID of 22 points — both used
  //     directly as gates below, the same pattern as VISA-A in
  //     Achilles_Tendinopathy. Dizon et al. 2023's systematic review gives a
  //     specific, usable loading angle (combined ~110° hip flexion / 45–90°
  //     knee flexion) for the isotonic phase. The compression-sensitivity
  //     framing (avoid deep hip flexion, hamstring stretching and prolonged
  //     sitting early; reintroduce compressive range only once loading is
  //     tolerated) traces directly to Rich et al. 2025's clinical commentary,
  //     which names those same positions as the mechanism, not folklore. Two
  //     honest caveats: first, both systematic reviews found (Nasser et al.
  //     2021; Dizon et al. 2023 itself) conclude there is insufficient
  //     evidence to recommend any one conservative intervention over another,
  //     and no RCT has tested a full dosed rehabilitation programme for this
  //     condition specifically — Rich et al. 2025's detailed 5-stage structure
  //     (condensed to 3 phases below to match this file's schema) is Level of
  //     Evidence 5, an expert clinical commentary, not a trial. Second, this
  //     entry's 16-week arc and VISA-A-style score thresholds are adapted from
  //     Achilles tendinopathy conventions in this catalog, not derived from a
  //     PHT-specific timeline study — no such study exists in the literature
  //     found.
  // ============================================================================

  "Hip_Flexor_Strain_Iliopsoas": {
    tier: "injury",
    category: "hip_posterior",
    arc: 8,
    evidence: [],
    phases: [
      {
        name: "Differentiate & Protect (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Differential exam (iliopsoas tenderness + pain on resisted hip flexion and/or hip-flexor stretch)", "consistent with iliopsoas/rectus-femoris strain, not adductor-related groin pain (adductor tenderness + pain on resisted adduction) — Weir et al. 2015 Doha agreement criteria"],
          ["Suspected high-grade tear, tendon avulsion, or bony avulsion (esp. adolescent athletes with sudden pop + inability to weight-bear)", "excluded, or referred for orthopaedic/imaging opinion before continuing this pathway"],
          ["Pain-free walking", "yes"],
          ["Isometric hip flexion (seated, submaximal)", "pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Isometric Hip Flexion Hold (Seated, Submaximal)",
            load: "bodyweight (leg weight only)", tempo: "sustained hold", reps: "5×20s", range: "mid-range hip flexion, avoid end-range hip extension",
            subs: ["Supine isometric hip flexion (assisted)", "Standing isometric marching hold"]
          },
          {
            name: "Pain-Free Hip Mobility (Avoid End-Range Extension)",
            load: "none", tempo: "slow, controlled", reps: "daily", range: "pain-free arc, avoid combined extension + external rotation stretch",
            subs: ["Gentle prone-lying position (short of hip flexor stretch)"]
          },
          {
            name: "Isometric Glute / Adductor Co-Contraction (Differential Confirmation)",
            load: "bodyweight", tempo: "5s hold", reps: "3×10", range: "neutral hip",
            subs: ["Glute bridge (isometric)"]
          }
        ]
      },
      {
        name: "Build Strength (Weeks 3–5)",
        wks: 3,
        gates: [
          ["Resisted hip flexion strength", "≥4/5 manual muscle test, or ≥70% of contralateral limb"],
          ["Pain-free jogging (straight-line)", "yes"],
          ["Hip flexor stretch tolerance", "full length, pain-free"]
        ],
        exercises: [
          {
            name: "Resisted Hip Flexion (Band, Standing March)",
            load: "light–moderate band", tempo: "2s up/2s down", reps: "3×12", range: "0→90° hip flexion",
            subs: ["Seated resisted hip flexion", "Supine straight-leg raise against resistance"]
          },
          {
            name: "Hip Flexor Eccentric Control (Standing March, Slow Lower)",
            load: "bodyweight, progress to light ankle weight", tempo: "3s eccentric lower", reps: "3×10", range: "0→90°",
            subs: ["Step-up with controlled descent"]
          },
          {
            name: "Core & Pelvic Control",
            load: "bodyweight", tempo: "controlled", reps: "3×10", range: "n/a",
            subs: ["Dead Bug", "Pallof Press"]
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 6–8)",
        wks: 3,
        gates: [
          ["Resisted hip flexion strength", "≥90% of contralateral limb"],
          ["Sprint / kicking mechanics", "pass, no compensation or pain"],
          ["Change-of-direction", "pass"]
        ],
        exercises: [
          {
            name: "Progressive Sprints (Acceleration Emphasis)",
            load: "bodyweight", tempo: "graded speed", reps: "70→85→100%", range: "n/a",
            subs: ["Hill sprints (acceleration)", "Resisted sprints (light band)"]
          },
          {
            name: "Sport-Specific Kicking / High-Knee Drills",
            load: "bodyweight", tempo: "sport-speed", reps: "3×10", range: "full functional range",
            subs: ["High-knee marching drill", "Kicking technique drill (progressive intensity)"]
          },
          {
            name: "Resisted Hip Flexion (Loaded, Sport-Specific Range)",
            load: "moderate–heavy band", tempo: "controlled", reps: "3×12", range: "full functional range",
            subs: ["Cable hip flexion", "Weighted marching"]
          }
        ]
      }
    ]
  },

  "Proximal_Hamstring_Tendinopathy": {
    tier: "injury",
    category: "hip_posterior",
    arc: 16,
    evidence: [],
    phases: [
      {
        name: "Isometric Loading & Compression Management (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Lumbar spine / sciatic referral screen (neuro exam, SLR, dermatomal/myotomal pattern)", "clear, no red flags or centralizing/peripheralizing response"],
          ["Pain-provocation cluster (Puranen-Orava, bent-knee stretch, modified bent-knee stretch)", "positive, consistent with proximal hamstring tendinopathy, not lumbar radiculopathy (Cacchio et al. 2012 — ICC 0.82–0.93 inter/intra-examiner reliability)"],
          ["Compressive aggravating positions (prolonged sitting, deep hip flexion, hamstring stretching, lunging)", "identified and modified"],
          ["Isometric hamstring loading pain", "≤3/10, no post-exercise flare >24h"]
        ],
        exercises: [
          {
            name: "Isometric Hamstring Hold (Short Lever, Low Hip Flexion Angle)",
            load: "bodyweight (heel-supported)", tempo: "sustained hold", reps: "5×30–45s", range: "low hip flexion angle, avoid deep flexion/compression",
            subs: ["Double-leg bridge isometric hold", "Supine hamstring isometric (band-resisted)"]
          },
          {
            name: "Compression-Avoidant Load Management",
            load: "none", tempo: "as needed", reps: "throughout day", range: "n/a",
            subs: ["Raise seat height / use cushion to reduce ischial compression", "Avoid hamstring stretching and deep lunges", "Break up prolonged sitting"]
          },
          {
            name: "Gentle Lumbopelvic Control",
            load: "bodyweight", tempo: "controlled", reps: "3×10", range: "neutral pelvis",
            subs: ["Dead Bug", "Glute bridge (isometric, short lever)"]
          }
        ]
      },
      {
        name: "Isotonic & Kinetic Chain Loading (Weeks 5–10)",
        wks: 6,
        gates: [
          ["Isotonic hamstring strength", "improving, pain ≤3/10 during and after loading"],
          ["VISA-H score", "improving trend toward the 22-point MCID from baseline (Cacchio et al. 2014)"],
          ["Compressive-position tolerance (seated, lunge)", "gradually increasing, no next-day flare"]
        ],
        exercises: [
          {
            name: "Isotonic Hamstring Loading (Combined Hip Flexion ~110° / Knee Flexion 45–90°)",
            load: "bodyweight, progress to light–moderate load", tempo: "3s lower/2s lift", reps: "3×8–12", range: "hip flexion ~110°, knee flexion 45–90° (Dizon et al. 2023 recommended loading angle)",
            subs: ["Long-lever bridge", "Machine hamstring curl (limited range)", "Romanian deadlift (partial range, progressing depth)"]
          },
          {
            name: "Kinetic Chain Strengthening (Glute, Calf, Quad)",
            load: "light–moderate band/dumbbell", tempo: "controlled", reps: "3×12", range: "full functional range",
            subs: ["Standing hip abduction", "Calf raise", "Seated leg extension"]
          },
          {
            name: "Progressive Compressive-Range Reintroduction",
            load: "bodyweight", tempo: "slow, controlled", reps: "3×8", range: "graded increase toward full hip flexion",
            subs: ["Graded lunge (partial → full depth)", "Step-up (progressive height)"]
          }
        ]
      },
      {
        name: "Energy Storage & Return to Running (Weeks 11–16)",
        wks: 6,
        gates: [
          ["VISA-H score", "improved ≥22 points from baseline (Cacchio et al. 2014 MCID), or ≥80/100"],
          ["Single-leg loaded hamstring task", "pain-free, comparable to contralateral limb"],
          ["Running tolerance (including uphill/faster running)", "pain-free, no flare beyond 24h"]
        ],
        exercises: [
          {
            name: "Energy Storage & Release Loading (Progressive Eccentric/Plyometric)",
            load: "bodyweight, progress to light load", tempo: "explosive/eccentric emphasis", reps: "3×6–8", range: "full functional range",
            subs: ["Nordic curl progression (partial range)", "Controlled bounding", "Hop-and-stick"]
          },
          {
            name: "Graduated Return-to-Running Programme",
            load: "none", tempo: "progressive pace/incline", reps: "per programme (interval → continuous → uphill)", range: "n/a",
            subs: ["Treadmill graded incline", "Outdoor interval running"]
          },
          {
            name: "Sport-Specific Loading (Sprinting, Hurdling, Kicking as applicable)",
            load: "sport-equivalent", tempo: "sport-speed", reps: "progressive volume", range: "full sport range",
            subs: ["Sprint mechanics drill", "Sport-specific circuit"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // ADDED PER PILOT PHYSIO FEEDBACK (2026-08-21) — the three presentations the
  // reviewing clinician named as the main gaps in the plan catalog. Drafts, like
  // every other entry here: unreviewed until signed off in-app.
  // ============================================================================

  "Retrocalcaneal_Bursitis": {
    tier: "injury",
    category: "ankle_posterior",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Offload & Settle (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Posterior heel pain during walking", "≤3/10"],
          ["Compressive aggravators (end-range dorsiflexion, uphill walking, rigid heel counters)", "identified and modified"],
          ["Morning pain/stiffness", "reducing trend"]
        ],
        exercises: [
          {
            name: "Heel Lift & Footwear Modification",
            load: "none", tempo: "as needed", reps: "throughout day", range: "n/a",
            subs: ["Bilateral heel lifts (6–10mm) in both shoes", "Open-heel or soft-counter footwear", "Avoid barefoot walking on hard floors"]
          },
          {
            name: "Isometric Calf Hold (Mid-Range, Non-Compressive)",
            load: "bodyweight", tempo: "sustained hold", reps: "5×30–45s", range: "plantargrade to mid-range, avoid end-range dorsiflexion",
            subs: ["Seated soleus isometric hold", "Wall-supported calf isometric"]
          },
          {
            name: "Ankle Mobility (Pain-Free, Non-Compressive Range)",
            load: "none", tempo: "slow, controlled", reps: "3×10", range: "pain-free arc, short of dorsiflexion compression",
            subs: ["Ankle circles (seated)", "Plantarflexion pumps"]
          }
        ]
      },
      {
        name: "Progressive Calf Loading (Weeks 4–8)",
        wks: 5,
        gates: [
          ["Calf loading pain", "≤3/10 during, no next-day flare"],
          ["Heel raise endurance (floor level)", "≥15 single-leg"],
          ["Walking tolerance", "30 min pain-free"]
        ],
        exercises: [
          {
            name: "Calf Raise · Floor Level (Not Off a Step)",
            load: "bodyweight → progressive load", tempo: "3s lower/2s lift", reps: "3×12", range: "floor to full plantarflexion — no dorsiflexion drop below floor level",
            subs: ["Seated calf raise (loaded)", "Double-leg → single-leg progression"]
          },
          {
            name: "Soleus Raise (Bent-Knee, Floor Level)",
            load: "bodyweight → light load", tempo: "2s up/2s down", reps: "3×15", range: "floor to full plantarflexion",
            subs: ["Seated soleus raise (loaded)", "Wall-sit calf raise"]
          },
          {
            name: "Graded Dorsiflexion Reintroduction",
            load: "bodyweight", tempo: "slow, controlled", reps: "3×8", range: "graded toward full dorsiflexion as compression tolerance allows",
            subs: ["Knee-to-wall touches (progressive distance)", "Incline board standing (shallow → steeper)"]
          }
        ]
      },
      {
        name: "Return to Impact (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Single-leg heel raise endurance", "≥25, pain-free"],
          ["Full-range dorsiflexion loading", "pain ≤2/10, no flare beyond 24h"],
          ["Walk–jog progression", "completed pain-free"]
        ],
        exercises: [
          {
            name: "Calf Raise · Full Range (Off a Step)",
            load: "progressive load", tempo: "3s lower/2s lift", reps: "3×12", range: "full ROM including controlled dorsiflexion below step level",
            subs: ["Single-leg calf raise (step)", "Eccentric-emphasis heel drop (controlled)"]
          },
          {
            name: "Graduated Return-to-Running Programme",
            load: "none", tempo: "progressive pace", reps: "per programme (walk–jog intervals → continuous)", range: "n/a",
            subs: ["Treadmill walk–jog intervals", "Flat-terrain outdoor running before hills"]
          },
          {
            name: "Hop & Impact Tolerance Series",
            load: "bodyweight", tempo: "controlled land", reps: "3×5", range: "n/a",
            subs: ["Double-leg hop → single-leg hop", "Skipping (low amplitude)"]
          }
        ]
      }
    ]
  },

  "Greater_Trochanteric_Pain_Syndrome": {
    tier: "injury",
    category: "hip_posterior",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Load Management & Isometric (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Lateral hip pain (lying on side, stairs, single-leg stance)", "≤3/10 or clearly reducing"],
          ["Compressive positions (crossed-leg sitting, hip hitch, adducted standing)", "identified and modified"],
          ["Isometric hip abduction", "pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Isometric Hip Abduction (Neutral, Non-Compressive)",
            load: "bodyweight", tempo: "5×45s hold", reps: "5×45s", range: "neutral hip, avoid adduction past midline",
            subs: ["Standing isometric hip abduction (wall)", "Supine band isometric hold"]
          },
          {
            name: "Compressive-Position Load Management",
            load: "none", tempo: "as needed", reps: "throughout day", range: "n/a",
            subs: ["Sleep with pillow between knees, avoid affected side down on firm mattress", "Avoid crossed-leg sitting and hip-hitched standing", "Reduce stair/hill volume temporarily"]
          },
          {
            name: "Gentle Lumbopelvic Control",
            load: "bodyweight", tempo: "controlled", reps: "3×10", range: "neutral pelvis",
            subs: ["Dead bug", "Glute bridge (double-leg, short range)"]
          }
        ]
      },
      {
        name: "Progressive Isotonic Abductor Loading (Weeks 4–8)",
        wks: 5,
        gates: [
          ["Resisted hip abduction", "pain ≤3/10 during, no next-day flare"],
          ["Single-leg stance time", "≥30s, pain-free"],
          ["Night pain (side-lying)", "settled or clearly reducing"]
        ],
        exercises: [
          {
            name: "Side-Lying Hip Abduction (Resisted, Non-Compressive Range)",
            load: "light–moderate band", tempo: "2s up/2s down", reps: "3×15", range: "neutral to slight abduction only",
            subs: ["Standing cable/band hip abduction", "Clamshell (progressive band resistance)"]
          },
          {
            name: "Bridge Progression (Double → Single Leg)",
            load: "bodyweight → light load", tempo: "controlled", reps: "3×12", range: "full hip extension",
            subs: ["Single-leg bridge", "Hip thrust (progressive load)"]
          },
          {
            name: "Functional Weight-Bearing Abductor Loading",
            load: "bodyweight", tempo: "controlled", reps: "3×10", range: "pelvis level throughout",
            subs: ["Offset squat (band around knees)", "Step-up (low box, pelvis controlled)"]
          }
        ]
      },
      {
        name: "Functional & Single-Leg Loading (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Hip abductor strength", "≥90% uninjured side"],
          ["Single-leg loaded task (step-down, single-leg squat)", "pain-free, pelvis controlled"],
          ["Walking/stairs/hills", "unrestricted, no flare beyond 24h"]
        ],
        exercises: [
          {
            name: "Progressive Single-Leg Loading",
            load: "progressive to task-equivalent", tempo: "controlled", reps: "3×10", range: "full functional range",
            subs: ["Single-leg squat (progressive depth)", "Lateral step-down", "Loaded carry (single-arm, contralateral)"]
          },
          {
            name: "Graded Return to Impact/Walking Volume",
            load: "bodyweight", tempo: "progressive volume", reps: "per programme", range: "n/a",
            subs: ["Walk–jog progression (if runner)", "Hill-walking progression"]
          }
        ]
      }
    ]
  },

  "Subacromial_Bursitis": {
    tier: "injury",
    category: "shoulder",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Relative Rest & Scapular Control (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Overhead aggravating activity", "identified and modified"],
          ["Night pain", "settling / reducing trend"],
          ["Isometric abduction/ER (mid-range)", "pain ≤3/10"]
        ],
        exercises: [
          {
            name: "Isometric Shoulder Abduction (Mid-Range, Below Painful Arc)",
            load: "pain-free resistance", tempo: "5×30s hold", reps: "5×30s", range: "30–45° abduction, below painful arc",
            subs: ["Isometric external rotation (wall)", "Isometric internal rotation (wall)"]
          },
          {
            name: "Scapular Setting & Posture Work",
            load: "bodyweight", tempo: "3s hold", reps: "3×15", range: "scapular retraction/depression, neutral thoracic posture",
            subs: ["Prone scapular squeeze", "Band scapular retraction (light)", "Thoracic extension over towel roll"]
          },
          {
            name: "Pain-Free Pendular & Assisted Mobility",
            load: "none", tempo: "slow, relaxed", reps: "3×10", range: "pain-free arc only",
            subs: ["Pendulum swings", "Table slides (forward flexion, assisted)"]
          }
        ]
      },
      {
        name: "Progressive Rotator Cuff Loading (Weeks 4–8)",
        wks: 5,
        gates: [
          ["Resisted abduction/ER below 90°", "pain ≤3/10 through range"],
          ["Painful arc", "reducing / clearing"],
          ["SPADI score", "improving trend"]
        ],
        exercises: [
          {
            name: "Rotator Cuff Strengthening (ER/IR, Below Elevation)",
            load: "light–moderate band", tempo: "2s up/2s down", reps: "3×12", range: "full ER/IR arc, elbow by side → 45° abduction",
            subs: ["Sidelying external rotation", "Prone horizontal abduction"]
          },
          {
            name: "Scapular & Lower Trapezius Strengthening",
            load: "light band or dumbbell", tempo: "2s hold", reps: "3×12", range: "full scapular plane",
            subs: ["Prone Y-raise", "Band pull-apart", "Wall slide (scapular upward rotation)"]
          },
          {
            name: "Graded Elevation Loading (Through Range)",
            load: "light dumbbell", tempo: "controlled", reps: "3×10", range: "scapular-plane elevation, progressing through the previously painful arc",
            subs: ["Scaption raise (thumb up)", "Landmine press (low angle)"]
          }
        ]
      },
      {
        name: "Overhead & Return to Activity (Weeks 9–12)",
        wks: 4,
        gates: [
          ["SPADI score", "≤10 or near-baseline function"],
          ["Overhead loaded task", "pain-free, full range"],
          ["Aggravating activity (work/sport overhead)", "reintroduced without flare beyond 24h"]
        ],
        exercises: [
          {
            name: "Progressive Overhead Loading",
            load: "progressive to task-equivalent", tempo: "controlled", reps: "3×10", range: "full overhead range",
            subs: ["Landmine press (progressive angle)", "Overhead carry (progressive load)", "Dumbbell overhead press"]
          },
          {
            name: "Sport/Task-Specific Loading",
            load: "task-equivalent", tempo: "task-speed", reps: "progressive volume", range: "full task range",
            subs: ["Throwing/serving progression (graded)", "Simulated overhead work task circuit"]
          }
        ]
      }
    ]
  },

  // ============================================================================
  // MCL SPRAIN (GRADE I-II, CONSERVATIVE) · CUBITAL TUNNEL SYNDROME (CONSERVATIVE)
  // · OSTEITIS PUBIS / ATHLETIC PUBALGIA (CONSERVATIVE) — added 2026-09-05,
  // this session's own gap-analysis pass (not physio-flagged). See
  // docs/PROTOCOL-REVIEW.md's 2026-09-05 entry for the full reasoning and
  // review notes.
  //   - MCL_Sprain: no ligament-sprain entry existed in the `knee` category
  //     outside ACL (reconstruction and conservative) and the two meniscus
  //     entries — a grade I-II MCL sprain is a materially more common
  //     presentation than either. The 8-week arc and phase windows are
  //     grounded in Lundblad et al. 2019's real-world return-to-play data
  //     (130 professional footballers, mean 29.6±15.2 days, 80% back within
  //     4 weeks) — an elite-athlete population, extrapolated here to a
  //     general caseload the same way this file already extrapolates Calf
  //     strain and Quadriceps strain from professional-athlete cohorts.
  //     Reider et al. 1994's early-functional-rehabilitation data (grade III,
  //     not grade I-II) is used only to support the Phase 1 design choice —
  //     hinged-brace-and-move rather than immobilize — not for any specific
  //     gate number.
  //   - Cubital_Tunnel_Syndrome: flagged directly by the existing Medial
  //     epicondylalgia entry's own review notes ("conflates cubital tunnel
  //     syndrome... with medial epicondylalgia — related... but distinct
  //     diagnoses"). This is the dedicated entry that gap points at. Its
  //     best evidence is genuinely conflicted: Svernlöv et al. 2009's RCT
  //     (70 patients, night-splint vs. nerve-glide vs. control) found no
  //     significant difference between groups at 6 months — splinting and
  //     gliding added nothing over education alone — while Nishide et al.
  //     2025's uncontrolled case series (n=17) found gliding-exercise-only
  //     improved grip/pinch strength and nerve conduction in most patients.
  //     Both are real; they are not the same quality of evidence, and this
  //     entry's Phase 1 gate says so rather than picking the more flattering
  //     one.
  //   - Osteitis_Pubis: distinct from the existing Groin strain · adductor
  //     entry (acute adductor muscle strain, sprint mechanism) — this is
  //     chronic pubic-symphysis bone stress from repetitive
  //     kicking/cutting, an insidious-onset overuse presentation with no
  //     entry anywhere in this catalog. McAleer et al. 2017's case series
  //     (n=5 professional/academy soccer players) is thin (Level 4,
  //     uncontrolled) but is the only paper found that reports the actual
  //     functional progression criteria (adductor squeeze strength trending
  //     to symmetry, pain-free training) this entry's gates use directly.
  // ============================================================================

  "MCL_Sprain": {
    tier: "injury",
    category: "knee",
    arc: 8,
    evidence: [],
    phases: [
      {
        name: "Protect & Reduce Swelling (Weeks 1–2)",
        wks: 2,
        gates: [
          ["Valgus stress test at 30° flexion", "trending from Grade II toward Grade I laxity, firm endpoint"],
          ["Pain at rest", "≤3/10"],
          ["Passive knee extension", "full, symmetric to contralateral side"],
          ["Straight-leg raise", "no extensor lag"]
        ],
        exercises: [
          {
            name: "Isometric Quad Set",
            load: "bodyweight", tempo: "5s hold", reps: "3×15", range: "terminal extension",
            subs: []
          },
          {
            name: "Heel Slides (Active-Assisted Knee Flexion)",
            load: "none", tempo: "slow, controlled", reps: "3×15", range: "pain-free arc",
            subs: []
          },
          {
            name: "Hinged-Brace Ambulation, Weight-Bearing as Tolerated",
            load: "bodyweight", tempo: "n/a", reps: "daily", range: "n/a",
            subs: []
          },
          {
            name: "Straight-Leg Raise",
            load: "bodyweight", tempo: "controlled", reps: "3×12", range: "hip flexion to ~45°",
            subs: []
          }
        ]
      },
      {
        name: "Progressive Strengthening (Weeks 3–5)",
        wks: 3,
        gates: [
          ["Valgus stress test at 30° flexion", "Grade I or resolved, firm endpoint"],
          ["Single-leg stance", "≥30s, pain-free"],
          ["Closed-chain quad/hamstring strength (mini-squat quality, functional comparison)", "within 20% of contralateral limb"],
          ["Walking tolerance", "full distance, brace unlocked, no pain"]
        ],
        exercises: [
          {
            name: "Mini-Squat",
            load: "bodyweight", tempo: "3s down/2s up", reps: "3×12", range: "0–45° knee flexion",
            subs: []
          },
          {
            name: "Step-Up",
            load: "bodyweight", tempo: "controlled", reps: "3×10", range: "6–8in step",
            subs: []
          },
          {
            name: "Lateral Band Walk",
            load: "light band", tempo: "controlled", reps: "3×10 per direction", range: "n/a",
            subs: []
          },
          {
            name: "Stationary Bike, Progressive Resistance",
            load: "progressive", tempo: "steady-state", reps: "10–15min", range: "full pedal stroke",
            subs: []
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 6–8)",
        wks: 3,
        gates: [
          ["Valgus stress test at 30° flexion", "resolved, symmetric to contralateral side"],
          ["Single-leg hop for distance", "within 90% of contralateral limb"],
          ["Cutting/pivoting drill", "tolerated without pain or giving-way"],
          ["Full training week (including contact, if applicable)", "tolerated without symptom recurrence at 48h"]
        ],
        exercises: [
          {
            name: "Single-Leg Hop Series",
            load: "bodyweight", tempo: "explosive, controlled landing", reps: "3×5", range: "n/a",
            subs: []
          },
          {
            name: "Lateral Bound / Cutting Drill",
            load: "bodyweight", tempo: "progressive speed", reps: "3×6", range: "n/a",
            subs: []
          },
          {
            name: "Progressive Sprints (70–85%)",
            load: "bodyweight", tempo: "graded speed", reps: "4–6 reps", range: "n/a",
            subs: []
          },
          {
            name: "Sport-Specific Agility Circuit",
            load: "task-equivalent", tempo: "task-speed", reps: "progressive volume", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  "Cubital_Tunnel_Syndrome": {
    tier: "injury",
    category: "elbow_wrist_hand",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Desensitize & Protect (Weeks 1–4)",
        wks: 4,
        gates: [
          ["Night symptoms (paraesthesia waking patient)", "reduced frequency, trending down"],
          ["Sustained elbow flexion tolerance (e.g. phone use, sleep position)", "improving, less than daily flare"],
          ["Grip strength (dynamometer)", "baseline recorded against contralateral side"],
          ["Tinel's sign at cubital tunnel", "not worsening from baseline"]
        ],
        exercises: [
          {
            name: "Activity/Posture Modification Education (Avoid Prolonged Elbow Flexion, Leaning on Elbow)",
            load: "none", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: []
          },
          {
            name: "Ulnar Nerve Glide (Passive, Submaximal Range)",
            load: "none", tempo: "slow, gliding", reps: "2×10", range: "pain-free, submaximal",
            subs: []
          },
          {
            name: "Night Extension Splint or Pillow Positioning (Optional)",
            load: "none", tempo: "n/a", reps: "nightly", range: "n/a",
            subs: []
          },
          {
            name: "Isometric Grip Set",
            load: "bodyweight", tempo: "5s hold", reps: "3×10", range: "pain-free",
            subs: []
          }
        ]
      },
      {
        name: "Progressive Nerve Mobility & Strength (Weeks 5–8)",
        wks: 4,
        gates: [
          ["Paraesthesia during nerve glide", "none or minimal"],
          ["Grip strength (dynamometer)", "trending toward symmetry with contralateral side"],
          ["Pulp pinch strength", "trending toward symmetry with contralateral side"],
          ["Light touch / two-point discrimination", "stable or improving"]
        ],
        exercises: [
          {
            name: "Ulnar Nerve Glide (Progressive Range)",
            load: "none", tempo: "slow, gliding", reps: "3×10", range: "full pain-free arc",
            subs: []
          },
          {
            name: "Wrist Flexor/Extensor Strengthening",
            load: "light dumbbell/band", tempo: "controlled", reps: "3×12", range: "full wrist ROM",
            subs: []
          },
          {
            name: "Intrinsic Hand Strengthening (Putty/Theraband)",
            load: "light resistance", tempo: "controlled", reps: "3×12", range: "n/a",
            subs: []
          },
          {
            name: "Elbow AROM Through Full Range",
            load: "none", tempo: "controlled", reps: "3×15", range: "full flexion/extension, pain-free",
            subs: []
          }
        ]
      },
      {
        name: "Return to Function (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Grip and pinch strength", "within 90% of contralateral side"],
          ["McGowan grade", "improved from baseline or resolved"],
          ["Occupational/functional task tolerance (typing, gripping tools)", "tolerated without symptom recurrence at 24h"],
          ["Symptoms at rest and with sustained elbow flexion", "resolved or minimal"]
        ],
        exercises: [
          {
            name: "Progressive Resisted Grip/Pinch Work",
            load: "progressive", tempo: "controlled", reps: "3×12", range: "n/a",
            subs: []
          },
          {
            name: "Task-Specific Loading (Occupational/Sport Simulation)",
            load: "task-equivalent", tempo: "task-speed", reps: "progressive volume", range: "n/a",
            subs: []
          },
          {
            name: "Maintenance Ulnar Nerve Glide + Posture Education",
            load: "none", tempo: "slow, gliding", reps: "2×/week ongoing", range: "full pain-free arc",
            subs: []
          },
          {
            name: "Graded Return-to-Activity Exposure",
            load: "progressive", tempo: "task-specific", reps: "progressive volume", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  "Osteitis_Pubis": {
    tier: "injury",
    category: "hip_posterior",
    arc: 12,
    evidence: [],
    phases: [
      {
        name: "Settle & Protect (Weeks 1–3)",
        wks: 3,
        gates: [
          ["Pain at rest / with ADLs", "≤3/10"],
          ["Single-leg stance", "tolerated without pubic/groin pain"],
          ["Resisted hip adduction (isometric)", "pain ≤3/10"],
          ["Pubic symphysis palpation tenderness", "reducing trend"]
        ],
        exercises: [
          {
            name: "Isometric Adduction Hold",
            load: "bodyweight", tempo: "20s hold", reps: "3×20s", range: "pain-free range",
            subs: []
          },
          {
            name: "Isometric Hip Flexor Hold",
            load: "bodyweight", tempo: "20s hold", reps: "3×20s", range: "pain-free range",
            subs: []
          },
          {
            name: "Trunk/Core Isometric Stability (Dead Bug Progression)",
            load: "bodyweight", tempo: "controlled", reps: "3×20–30s", range: "n/a",
            subs: []
          },
          {
            name: "Activity Modification Education (Avoid Kicking, Sprinting, Cutting)",
            load: "none", tempo: "n/a", reps: "ongoing", range: "n/a",
            subs: []
          }
        ]
      },
      {
        name: "Progressive Loading (Weeks 4–8)",
        wks: 5,
        gates: [
          ["Adductor squeeze strength", "trending toward symmetry with contralateral side"],
          ["Pain-free jogging in a straight line", "achieved"],
          ["Single-leg bridge / step-up", "pain-free"],
          ["Single-leg squat quality (trunk/lumbopelvic control)", "improved, no compensatory pattern"]
        ],
        exercises: [
          {
            name: "Copenhagen Plank, Progressive Lever",
            load: "bodyweight", tempo: "sustained hold", reps: "3×20–30s", range: "n/a",
            subs: []
          },
          {
            name: "Adductor Squeeze, Progressive Resistance",
            load: "progressive (ball/band)", tempo: "controlled", reps: "3×10", range: "n/a",
            subs: []
          },
          {
            name: "Hip & Trunk Strengthening Circuit (Lunges, Step-Ups, Dead Bugs)",
            load: "bodyweight → light load", tempo: "controlled", reps: "3×10–12", range: "n/a",
            subs: []
          },
          {
            name: "Gym-Based Bilateral Lower-Limb Strength Training",
            load: "progressive", tempo: "controlled", reps: "3×8–10", range: "full ROM",
            subs: []
          }
        ]
      },
      {
        name: "Return to Sport (Weeks 9–12)",
        wks: 4,
        gates: [
          ["Adductor squeeze strength", "symmetric to contralateral side"],
          ["Pain-free training at full intensity (including kicking/cutting/sprinting)", "achieved"],
          ["Change-of-direction / cutting drill", "pass, no symptom recurrence at 24–48h"],
          ["Full training week", "tolerated without symptom flare"]
        ],
        exercises: [
          {
            name: "Field-Based Conditioning, Progressive Volume",
            load: "task-equivalent", tempo: "task-speed", reps: "progressive volume", range: "n/a",
            subs: []
          },
          {
            name: "Sport-Specific Kicking/Cutting Drills, Graded",
            load: "task-equivalent", tempo: "task-speed", reps: "progressive volume", range: "n/a",
            subs: []
          },
          {
            name: "Progressive Sprints (70–100%)",
            load: "bodyweight", tempo: "graded speed", reps: "4–6 reps", range: "n/a",
            subs: []
          },
          {
            name: "Maintenance Adductor/Core Strengthening",
            load: "progressive", tempo: "controlled", reps: "2–3×/week ongoing", range: "n/a",
            subs: []
          }
        ]
      }
    ]
  },

  // Neurological (24 Sep 2026) — authored from docs/research/new-conditions/Motor_Neurone_Disease.json
  "Motor_Neurone_Disease": {
    "tier": "neuro",
    "category": "neurological",
    "arc": 12,
    "evidence": [],
    "phases": [
      {
        "name": "Assessment, Safety Screen & Programme Set-up (Weeks 1–3)",
        "wks": 3,
        "gates": [
          [
            "Respiratory red flags screened (breathlessness, orthopnoea, morning headache, daytime sleepiness, weak cough/sniff, recurrent chest infection) and latest FVC/VC or SNIP/MIP result reviewed",
            "none new — or MDT/respiratory service informed before exercise is progressed"
          ],
          [
            "Swallowing, weight and nutrition red flags screened (choking/coughing on food or drink, weight loss, prolonged or effortful meals)",
            "none new — or SLT/dietitian referral made"
          ],
          [
            "Falls risk assessed (falls in last 3 months, lower-limb strength, gait, transfers, foot drop) and orthosis/walking-aid need identified",
            "documented; orthotics/equipment referral made without delay if needed"
          ],
          [
            "Carer willing and able to help with the programme, safe manual handling advice given, and cognition/communication considered in how the plan is explained",
            "confirmed"
          ]
        ],
        "exercises": [
          {
            "name": "Daily Stretching & Range-of-Motion Programme (Major Joints, Shoulders, Hands, Ankles)",
            "load": "active, active-assisted or passive — matched to current strength",
            "tempo": "slow, sustained stretch",
            "reps": "daily; stretches and holds individualised (no trial-specified dose)",
            "range": "comfortable end range, no forcing",
            "subs": [
              "Carer-assisted passive range of motion",
              "Night resting splints for hands/ankles (via orthotics)",
              "Assisted standing/weight-bearing for ankle stretch when no longer walking"
            ]
          },
          {
            "name": "Fatigue Management, Pacing & Energy Conservation Education (with Carer)",
            "load": "none",
            "tempo": "n/a",
            "reps": "1 session + written plan; revisit each visit",
            "range": "n/a",
            "subs": [
              "Occupational therapy-led energy-conservation session",
              "Written/video resource for person and carer"
            ]
          },
          {
            "name": "Gait, Transfer & Falls-Safety Practice with Aids",
            "load": "bodyweight",
            "tempo": "controlled",
            "reps": "practise key transfers and walking tasks in session; individualised",
            "range": "functional, within safe balance",
            "subs": [
              "Ankle-foot orthosis trial (orthotics referral) for foot drop",
              "Walking aid or transfer aids (firm/raised cushion, swivel cushion)",
              "Home hazard review with OT"
            ]
          }
        ]
      },
      {
        "name": "Tailored Moderate Exercise Programme (Weeks 4–9)",
        "wks": 6,
        "gates": [
          [
            "Post-exercise fatigue or muscle pain",
            "settles within 30 min and does not limit the rest of the day — otherwise reduce the programme"
          ],
          [
            "Programme tolerated (sessions completed as prescribed)",
            "at least half of prescribed sessions completed; barriers reviewed if not"
          ],
          [
            "Respiratory, swallowing and weight red flags re-screened",
            "none new — or MDT informed / earlier MDT review triggered"
          ],
          [
            "Falls since baseline",
            "none — or falls plan, aids and exercise mode revised"
          ]
        ],
        "exercises": [
          {
            "name": "Moderate Resistance Exercise (Muscles with Antigravity Strength Only)",
            "load": "light–moderate: a weight the person can lift comfortably ~20 times; no high resistance",
            "tempo": "controlled lift; avoid eccentric emphasis",
            "reps": "2–3×10, 2–3×/week",
            "range": "comfortable active range",
            "subs": [
              "Functional strengthening (sit-to-stand, step-ups) if safe",
              "Resistance band",
              "Active-assisted exercise for muscles below antigravity strength"
            ]
          },
          {
            "name": "Moderate Aerobic Exercise (Low Falls-Risk Mode)",
            "load": "moderate, submaximal — can talk comfortably throughout",
            "tempo": "steady",
            "reps": "start with 10 min, 2–3×/week; build duration as tolerated",
            "range": "n/a",
            "subs": [
              "Recumbent cycle ergometer",
              "Upright stationary bike (if seated balance is safe)",
              "Walking or swimming at moderate intensity if safe"
            ]
          },
          {
            "name": "Breath Stacking & Cough-Effectiveness Technique (If Cough Is Weak)",
            "load": "none",
            "tempo": "slow, staged inhalations",
            "reps": "as taught by the respiratory team; individualised",
            "range": "n/a",
            "subs": [
              "Manual assisted cough (carer trained)",
              "Assisted breath stacking with lung volume recruitment bag (bulbar dysfunction)",
              "Respiratory muscle training device — early-stage only, agreed with the respiratory team"
            ]
          }
        ]
      },
      {
        "name": "Review, Home Programme & MDT Handover (Weeks 10–12)",
        "wks": 3,
        "gates": [
          [
            "Home programme (stretching/ROM plus any tolerated strength/aerobic work) established with carer involvement",
            "performed safely by person/carer; written copy provided"
          ],
          [
            "Falls risk, mobility and equipment needs reassessed (orthoses, walking aids, wheelchair, transfer aids)",
            "reassessed; referrals current"
          ],
          [
            "Respiratory, cough, swallowing and nutrition referral needs reviewed and reported to the MDT",
            "MDT informed; next review date set (usually 2–3 months)"
          ],
          [
            "Function recorded (e.g. ALSFRS-R) and change since baseline reviewed",
            "recorded — decline means re-plan, not case closure"
          ]
        ],
        "exercises": [
          {
            "name": "Home Maintenance Programme (Stretching/ROM ± Tolerated Strength & Aerobic Work)",
            "load": "as tolerated in Phase 2; step down to active-assisted/passive as strength changes",
            "tempo": "controlled",
            "reps": "stretching daily; strength/aerobic 2–3×/week if still tolerated",
            "range": "comfortable range",
            "subs": [
              "Carer-delivered passive/active-assisted programme",
              "Seated-only programme"
            ]
          },
          {
            "name": "Posture, Seating & Neck-Support Review",
            "load": "none",
            "tempo": "n/a",
            "reps": "review each visit",
            "range": "n/a",
            "subs": [
              "Neck-support collar fitting if neck weakness (e.g. HeadUp-type collar)",
              "Shoulder support/positioning for shoulder pain or subluxation",
              "Wheelchair services referral for seating"
            ]
          },
          {
            "name": "Transfer & Manual-Handling Training with Carer",
            "load": "bodyweight/assisted",
            "tempo": "controlled",
            "reps": "practise key transfers in session; individualised",
            "range": "functional",
            "subs": [
              "Transfer aids (raised/lifting cushion, recliner lift chair)",
              "Hoist or equipment review with OT"
            ]
          }
        ]
      }
    ]
  },

  // Neurological (24 Sep 2026) — authored from docs/research/new-conditions/Parkinsons_Disease.json
  "Parkinsons_Disease": {
    "tier": "neuro",
    "category": "neurological",
    "arc": 14,
    "evidence": [],
    "phases": [
      {
        "name": "Assessment, Safety Screen & Programme Set-up (Weeks 1–3)",
        "wks": 3,
        "gates": [
          [
            "Falls risk stratified (3-Step Falls Prediction Model: fall in past 12 months, freezing in past month, comfortable 10MW speed <1.1 m/s) plus TUG and Mini-BESTest baseline",
            "recorded; high-risk score (8–11) → interdisciplinary falls assessment arranged before unsupervised balance/gait work"
          ],
          [
            "Orthostatic hypotension screen (light-headedness on standing, after exertion or prolonged standing; lying/standing BP if symptomatic)",
            "screened; symptomatic → prescriber/neurologist medicines review requested and counter-manoeuvres taught before upright vigorous exercise"
          ],
          [
            "Pre-exercise medical screen for moderate–high intensity aerobic exercise (cardiac and other comorbidities)",
            "cleared, or intensity capped at moderate pending medical review"
          ],
          [
            "Referral screen: speech/voice/swallowing/drooling, daily-living and home difficulties, cognition, 'on/off' fluctuations",
            "SLT / OT / Parkinson's nurse or neurologist referral made where indicated"
          ]
        ],
        "exercises": [
          {
            "name": "Parkinson's Exercise Education & Self-Management Set-up",
            "load": "none",
            "tempo": "n/a",
            "reps": "1–2 sessions + exercise diary (and falls diary if previous fall)",
            "range": "n/a",
            "subs": [
              "Carer-inclusive session (if the person agrees)",
              "Written/video resource from a national Parkinson's organisation",
              "Orthostatic counter-manoeuvres (tiptoeing, leg crossing, bending forward, squatting) if symptomatic",
              "Stop-exercise warning signs and training in 'on' periods"
            ]
          },
          {
            "name": "Aerobic Exercise Introduction (Treadmill or Cycle, RPE-guided)",
            "load": "moderate: Borg 6–20 RPE 13 (≈40–60% HRmax); use RPE because heart-rate response may be blunted",
            "tempo": "steady",
            "reps": "30 min, 3×/week (build up if deconditioned)",
            "range": "n/a",
            "subs": [
              "Stationary cycle (if freezing or balance limits treadmill use)",
              "Treadmill with overhead harness or safety cut-off cord, large-step focus",
              "Brisk overground walking (low falls-risk only)",
              "Recumbent cycle (orthostatic symptoms or later stage)"
            ]
          },
          {
            "name": "Transfer Practice with Movement Strategies (Chair, Bed, Turning)",
            "load": "bodyweight",
            "tempo": "break task into 4–6 consciously controlled components; cue before each",
            "reps": "within 30-min sessions, 3×/week (minimum 3 weeks)",
            "range": "task-specific, in the home or a mimicked environment",
            "subs": [
              "Sit-to-stand with trunk rocking before rising",
              "Rolling/getting out of bed with bent-knee rocking before rolling",
              "Rising from and lowering to the floor (if safe; do not teach 'how to fall')",
              "LSVT BIG-style large-amplitude practice (certified clinician; 16 one-to-one sessions in 4 weeks)"
            ]
          }
        ]
      },
      {
        "name": "Active Programme: Aerobic, Strength, Balance & Cued Gait (Weeks 4–11)",
        "wks": 8,
        "gates": [
          [
            "Aerobic dose",
            "≥3 sessions/week of 30–40 min at moderate–high intensity (RPE 13–17 / ≈60–80% HRmax), or individual tolerated maximum documented"
          ],
          [
            "10MW comfortable speed, TUG and Mini-BESTest (same time of day and medication state as baseline)",
            "re-measured at mid-point and phase end; change recorded against baseline"
          ],
          [
            "Falls and freezing diary",
            "reviewed; any new fall → falls risk re-stratified and plan adjusted"
          ],
          [
            "Home exercise on non-supervised days",
            "logged in exercise diary most weeks"
          ]
        ],
        "exercises": [
          {
            "name": "Progressive Aerobic Training (Moderate → High Intensity)",
            "load": "progress from RPE 13 to 14–17 / ≈60–80% HRmax; 80–85% HRmax only in early-stage (H&Y 1–2) after medical screen",
            "tempo": "steady or interval",
            "reps": "30–40 min, 3–4×/week",
            "range": "n/a",
            "subs": [
              "Home stationary cycle with remote supervision / exergaming (H&Y ≤2)",
              "Treadmill (harness or safety cut-off; care when accelerating/decelerating in freezers)",
              "Nordic walking (pole striding)",
              "Aquatic exercise"
            ]
          },
          {
            "name": "Progressive Resistance Training (Lower Limb & Trunk, Multi-joint First)",
            "load": "60–80% 1RM (or 4RM estimate); power sets ≈40% 1RM moved fast",
            "tempo": "controlled lower, fast rise",
            "reps": "1–3 sets × 8–15, 2×/week; progress load when 3×15 achieved with good form",
            "range": "full available range",
            "subs": [
              "Leg press / leg extension / hamstring curl machines",
              "Loaded sit-to-stand or step-up",
              "Resistance-band home programme",
              "Seated or supported resistance work (higher falls risk)"
            ]
          },
          {
            "name": "Balance Training (Static → Dynamic → Perturbation, with Dual-Task Progression)",
            "load": "bodyweight",
            "tempo": "progress base of support, speed and complexity",
            "reps": "2–3×/week (evidence base: 16–30 total hours over 5–10 weeks)",
            "range": "at the edge of stability, supervised",
            "subs": [
              "Standing and walking on foam, with and without trunk pushes/pulls",
              "Walking with sudden stops, direction changes and backwards walking",
              "Dual-task walking (talking, carrying, head turns) — early/mid stage only",
              "Supported standing balance at a counter (higher falls risk)",
              "Tai Chi or dance class"
            ]
          },
          {
            "name": "Gait Training with External Cueing & Attentional Strategies",
            "load": "none",
            "tempo": "metronome/music: non-freezers up to +10% of baseline cadence; freezers up to −10%; in-home complex tasks up to −15%",
            "reps": "20–60 min, 3×/week (cueing: minimum 3 weeks, 30 min sessions)",
            "range": "large steps, full arm swing",
            "subs": [
              "Visual cues: floor tape lines or laser line",
              "Auditory cues: metronome or preferred music via phone",
              "Freezing-trigger practice: weight-shift rocking or step back before starting, wide-arc (not pivot) turns, doorways",
              "Treadmill walking focusing on stride length with added cognitive task"
            ]
          }
        ]
      },
      {
        "name": "Review, Home & Community Maintenance (Weeks 12–14)",
        "wks": 3,
        "gates": [
          [
            "Agreed SMART goals (Goal Attainment Scaling)",
            "attainment reviewed and documented"
          ],
          [
            "Long-term exercise plan",
            "established: patient-chosen community or home activity (aerobic ≥3×/week, strength 1–2×/week, balance) with exercise diary"
          ],
          [
            "Falls risk (3-Step model, TUG, Mini-BESTest, falls diary)",
            "reassessed; high risk → interdisciplinary falls assessment"
          ],
          [
            "Referral needs and follow-up (SLT, OT, Parkinson's nurse/neurologist for orthostatic symptoms, fluctuations, freezing, cognition)",
            "reviewed and actioned; review or re-referral trigger agreed"
          ]
        ],
        "exercises": [
          {
            "name": "Transition to Community-Based Exercise",
            "load": "as established in phase 2",
            "tempo": "n/a",
            "reps": "ongoing: aerobic 30–40 min ≥3×/week + strength 1–2×/week",
            "range": "n/a",
            "subs": [
              "Parkinson's-specific exercise class",
              "Dance or Tai Chi class",
              "Gym-based aerobic + resistance programme",
              "Remotely supervised home programme"
            ]
          },
          {
            "name": "Independent Home Programme with Personal Cueing Strategies",
            "load": "bodyweight",
            "tempo": "person's own effective cues",
            "reps": "daily practice of the gait, turning and transfer strategies that worked",
            "range": "in the places where problems occur",
            "subs": [
              "Wearable or phone metronome for outdoor walking",
              "Wheeled walker with laser line (freezers who respond to visual cues)",
              "Written/visual step-by-step strategy cards"
            ]
          },
          {
            "name": "Carer Training: Transfers, Positioning & Safe Assistance (later stage, H&Y 4–5)",
            "load": "n/a",
            "tempo": "n/a",
            "reps": "1–2 sessions, individualised",
            "range": "n/a",
            "subs": [
              "Bed mobility and chair transfer assistance with the person's strategies",
              "Positioning and range-of-motion routine to limit contractures and pressure areas",
              "Liaison with care/nursing staff"
            ]
          }
        ]
      }
    ]
  }
};


