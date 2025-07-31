// 内容数据 - 从原始index.html提取

// 英文内容
const notesContent = `
    <div class="section-container active" id="analogue-container">
    <section id="analogue-electronics" class="quiz-section">
        <h2>Analogue Electronics</h2>
        <section id="mosfet-operating-states-output-voltage-swing">
            <h3>MOSFET Operating States & Output Voltage Swing <div class="mastery-controls" data-id="mosfet-operating-states-output-voltage-swing"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
            <p>MOSFET has three basic operating states:</p>
            <ul>
                <li><strong>Off State</strong> - Like a turned-off switch, no current flows</li>
                <li><strong>Linear State</strong> - Like an adjustable resistor, current controlled by gate voltage</li>
                <li><strong>Saturation State</strong> - Like a stable current source, provides fixed current</li>
            </ul>
            <p><strong>Note</strong>: In saturation state, there exists <span class="collapsible"><span class="collapsible-icon">[+]</span>Channel Length Modulation Effect</span><span class="collapsible-content">Causes current to increase slightly when drain voltage increases.</span> Current formula is as follows:</p>
            <div class="formula-block">$$ I_D = \\frac{1}{2} \\mu_n C_{\\text{ox}} \\frac{W}{L} (V_{GS} - V_T)^2 (1 + \\lambda V_{DS}) $$</div>
            <p><span class="collapsible"><span class="collapsible-icon">[+]</span>Output Voltage Swing</span><span class="collapsible-content">Defined as the maximum voltage range when all transistors maintain saturation region operation:</span></p>
            <ul>
                <li><strong>Upper Limit (Vout,max)</strong>: Limited by PMOS load transistor entering triode region, approximately VDD−∣VOV,load∣</li>
                <li><strong>Lower Limit (Vout,min)</strong>: Limited by NMOS pair or tail current source transistor entering triode region, approximately VOV,input+VOV,tail</li>
            </ul>
        </section>
        <section id="basic-principles-of-differential-amplifiers">
            <h3>Basic Principles of Differential Amplifiers <div class="mastery-controls" data-id="basic-principles-of-differential-amplifiers"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
            <h4>1. <span class="quiz-term">Differential Mode (A_dm)</span></h4>
            <ul>
                <li><span class="quiz-definition" data-term="What is the working principle of Differential Mode (A_dm)?"><strong>Working Principle</strong>: The common source point of the two transistors in a differential amplifier can be regarded as a 'virtual ground' because the circuit is symmetrical.</span></li>
                <li><span class="quiz-definition" data-term="What is the simplified analysis method of Differential Mode (A_dm)?"><strong>Simplified Analysis Method</strong>: We can analyze only half of the circuit, treating it as a simple common-source amplifier for easier calculation.</span></li>
                <li><strong>Amplification Capability</strong>:
                    <ul>
                        <li><span class="quiz-definition" data-term="What is 'single-ended output gain'?">When we look at only one output, this is called 'single-ended output gain'.</span></li>
                        <li><span class="quiz-definition" data-term="What is 'differential output gain'?">When we look at the voltage difference between two outputs, this is called 'differential output gain'. Typically, differential output gain is twice the single-ended output gain.</span></li>
                    </ul>
                </li>
            </ul>
            <h4>2. <span class="quiz-term">Common Mode (A_cm)</span></h4>
            <ul>
                <li><span class="quiz-definition" data-term="What is the working principle of Common Mode (A_cm)?"><strong>Working Principle</strong>: When both inputs receive the same signal (common mode signal), the tail current source resistance plays an important role. This resistance produces negative feedback effect, helping to suppress common mode signals.</span></li>
                <li><span class="quiz-definition" data-term="What is the suppression effect of Common Mode (A_cm)?"><strong>Suppression Effect</strong>: The amplifier greatly attenuates common mode signals, which is exactly the effect we want.</span></li>
                <li><span class="quiz-definition" data-term="What is the performance of Common Mode (A_cm) in differential output?"><strong>Performance in Differential Output</strong>: When we look at the difference between two outputs, ideally the common mode signal is completely eliminated (gain is zero). This is because common mode signals produce identical changes at both ends.</span></li>
            </ul>
            <h4>3. <span class="quiz-term">Common Mode Rejection Ratio (CMRR)</span></h4>
            <ul>
                <li><span class="quiz-definition" data-term="What is the meaning of Common Mode Rejection Ratio (CMRR)?"><strong>Meaning</strong>: CMRR is used to measure the quality of an amplifier, indicating the ratio of the amplifier's ability to amplify useful signals (differential signals) to suppress interference signals (common mode signals).</span></li>
            </ul>
            <div class="formula-block">$$ CMRR=\\left|\\frac{A_{dm}}{A_{cm}}\\right| $$</div>
            <ul>
                 <li><span class="quiz-definition" data-term="What does CMRR performance indicator represent?"><strong>Performance Indicator</strong>: The larger the CMRR, the better the performance. Especially in differential output, because common mode signals are completely suppressed, theoretically CMRR can reach infinity.</span></li>
            </ul>
            <h4>Role of Two Key Transistors in Amplifier</h4>
            <ul>
                <li><span class="quiz-definition" data-term="What is the role of M1 transistor in the amplifier?"><strong>M1's Work: Signal Amplifier</strong> M1 is responsible for receiving and amplifying input signals. It acts like a voltage-controlled switch, regulating current magnitude based on input voltage changes. M1's transconductance (gm1) determines how much current change it can convert from small voltage changes.</span></li>
                <li><span class="quiz-definition" data-term="What is the role of M3 transistor in the amplifier?"><strong>M3's Work: Current Converter</strong> M3's task is to convert current changes produced by M1 into voltage changes. Its gate voltage is fixed, mainly providing a large output resistance. This large resistance helps us obtain larger output voltage signals.</span></li>
            </ul>
        </section>
        <section id="miller-effect">
            <h3>Miller Effect <div class="mastery-controls" data-id="miller-effect"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
            <ul>
                <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Miller Effect</span></span><span class="collapsible-content quiz-definition" data-term="Explain Miller Effect">In inverting amplifiers, the input-output capacitance (such as Cgd in CS amplifiers) appears as a larger capacitance at the input Cin,Miller=Cf(1−Av), because Av is a large negative number.</span></li>
                <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Input Pole</span></span><span class="collapsible-content quiz-definition" data-term="Explain Input Pole">Amplifier frequency response is limited by poles formed by RC networks, frequency fp=1/(2πR_totalC_total).</span></li>
                <li><span class="quiz-definition" data-term="Why do Common Source amplifiers suffer from Miller effect?"><strong>Common Source (CS) Amplifier</strong>: Gate-drain Cgd capacitance causes significant Miller effect, forming the <strong>main pole</strong> that limits bandwidth.</span></li>
                <li><span class="quiz-definition" data-term="Why do Common Gate amplifiers have no Miller effect?"><strong>Common Gate (CG) Amplifier</strong>: Input at source, output at drain, gate grounded, no input-output capacitance, therefore <strong>no Miller effect</strong>, high-frequency characteristics superior to CS.</span></li>
            </ul>
        </section>
        <section id="negative-feedback">
            <h3>Negative Feedback <div class="mastery-controls" data-id="negative-feedback"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
            <ul>
                <li><span class="quiz-definition" data-term="Describe a negative feedback method and its effect"><strong>Feedback Method</strong>: Series input parallel output, increases input resistance, decreases output resistance.</span></li>
            </ul>
            <h4>Positive and Negative Feedback Identification</h4>
            <p>Analyze the <strong>effect of feedback signals on input</strong> to determine feedback type:</p>
            <ul>
                <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Negative Feedback</span></span><span class="collapsible-content quiz-definition" data-term="How does negative feedback work and what does it do?">Feedback signals <strong>counteract</strong> input changes, reducing effective input. <strong>Used to stabilize circuits</strong>.</span></li>
                <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Positive Feedback</span></span><span class="collapsible-content quiz-definition" data-term="How does positive feedback work and what does it do?">Feedback signals <strong>enhance</strong> input changes, increasing effective input. <strong>May cause oscillation</strong>.</span></li>
            </ul>
        </section>
    
    <!-- Analogue Electronics Main Chapter Quiz -->
    <button class="quiz-button"></button>
    <div class="quiz-container"></div>
    
    <!-- Chapter End Divider -->
    <div class="section-divider"></div>
</section>

<!-- Button to go to Digital Chapter -->
<button class="section-nav-button" id="go-to-digital-btn">
    Go to Digital Electronics Chapter →
</button>
</div>

<div class="section-container" id="digital-container">
<!-- Button to return to Analogue Chapter -->
<button class="section-nav-button" id="go-to-analogue-btn">
    ← Return to Analogue Electronics Chapter
</button>

<section id="digital-electronics" class="quiz-section">
    <h2>Digital Electronics</h2>
    <section id="logic-timing-power">
        <h3>Logic, Timing & Power<div class="mastery-controls" data-id="logic-timing-power"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
        <h4>Method of Logical Effort</h4>
        <p>This is a simple method for calculating digital circuit delays. Its main advantage is breaking down complex delay problems into several simple parts for analysis.</p>
        <p>We use a formula to represent circuit delay: d = g⋅h + p</p>
        <ul>
            <li><strong>Basic Components</strong>:
                <ul>
                    <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">g (Logical Effort)</span></span><span class="collapsible-content quiz-definition" data-term="What is Logical Effort (g)?">Represents delay caused by circuit type, such as inherent differences between NAND and NOR gates</span></li>
                    <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">h (Electrical Effort)</span></span><span class="collapsible-content quiz-definition" data-term="What is Electrical Effort (h)?">Represents delay caused by load size, simply the ratio of output capacitance to input capacitance</span></li>
                    <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">p (Parasitic Delay)</span></span><span class="collapsible-content quiz-definition" data-term="What is Parasitic Delay (p)?">Represents inherent delay within the circuit, independent of load</span></li>
                </ul>
            </li>
            <li><strong>Important Concepts</strong>:
                 <ul>
                    <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Effort Delay (f)</span></span><span class="collapsible-content quiz-definition" data-term="What is Effort Delay (f)?">This is delay caused by load, equal to the product of logical effort and electrical effort (f = g⋅h)</span></li>
                    <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Normalized Delay (d)</span></span><span class="collapsible-content quiz-definition" data-term="What is Normalized Delay (d)?">This is the total circuit delay, expressed in relative units. It equals effort delay plus parasitic delay (d = f + p)</span></li>
                    <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Propagation Delay (tpd)</span></span><span class="collapsible-content quiz-definition" data-term="What is Propagation Delay (tpd)?">To know actual delay time (in seconds), simply multiply normalized delay by a process-related time constant τ: tpd = d⋅τ</span></li>
                </ul>
            </li>
        </ul>
         <h4>Boolean Algebra Three Laws Summary Table</h4>
         <table>
            <thead><tr><th><strong>Absorption Law</strong></th><th>Formula</th><th>Explanation</th></tr></thead>
            <tbody>
                <tr><td> </td><td>A+AB=A</td><td>If A already exists, there's no need to add terms containing A</td></tr>
                <tr><td> </td><td>A(A+B)=A</td><td>A multiplied by expressions containing A still results in A</td></tr>
                <tr><td> </td><td>A+A′B=A+B</td><td>Can be simplified to A+B (A′ represents NOT A)</td></tr>
            </tbody>
         </table>
         <h4>Switching Power</h4>
         <ul>
             <li><strong>Switching Power Formula</strong>: Switching power is represented by the following formula:</li>
         </ul>
         <div class="formula-block">$$ P_{SW} = \\alpha \\cdot f \\cdot C_L \\cdot V_{DD}^2 $$</div>
         <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span>Formula Parameters</span><span class="collapsible-content"><ul><li>PSW: Switching Power, unit is watts (W).</li><li>α: <strong>Activity Factor</strong>, represents the probability of charge/discharge transitions occurring in each clock cycle, a dimensionless parameter between 0 and 1.</li><li>f: Clock Frequency, unit is hertz (Hz).</li><li>CL: Load Capacitance, unit is farads (F).</li><li>VDD: Supply Voltage, unit is volts (V).</li></ul></span></li>
         </ul>
         <h4>Various Logic Circuit Types</h4>
         <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Static Logic</span></span><span class="collapsible-content quiz-definition" data-term="What is Static Logic?">The most basic logic circuit type. No clock signal control needed, maintains stable output through fixed pull-up and pull-down circuits.</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Pass Transistor Logic</span></span><span class="collapsible-content quiz-definition" data-term="What is Pass Transistor Logic?">Uses transistors as simple switches to pass signals. Simple structure, but there's some attenuation when transmitting high-level signals.</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Pseudo-NMOS Logic</span></span><span class="collapsible-content quiz-definition" data-term="What is Pseudo-NMOS Logic?">A simplified version of static logic circuits. Uses a permanently conducting pull-up resistor, simple structure but consumes some static power.</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Ratioed Logic</span></span><span class="collapsible-content quiz-definition" data-term="What is Ratioed Logic?">Output depends on the size ratio of pull-up and pull-down transistors. Can be imagined as two transistors in a 'tug-of-war', whoever is stronger determines whether output is high or low.</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Dynamic Logic</span></span><span class="collapsible-content quiz-definition" data-term="What is Dynamic Logic?">Clock-controlled circuits. Operation in two phases: first precharge (charge output to high level), then decide whether to maintain high level or discharge to low level based on input signals.</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Domino Logic</span></span><span class="collapsible-content quiz-definition" data-term="What is Domino Logic?">Improved version of dynamic logic, adds a signal inverter at output for better series operation.</span></li>
         </ul>
         <h4>Timing Delays</h4>
         <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Contamination Delay (tcd)</span></span><span class="collapsible-content quiz-definition" data-term="What is Contamination Delay (tcd)?">The shortest time for signal transmission. That is, when input changes, how quickly output will start to change.</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Propagation Delay (tpd)</span></span><span class="collapsible-content quiz-definition" data-term="What is Propagation Delay (tpd)?">The longest time for signal transmission. That is, when input changes, how slowly output will completely stabilize.</span></li>
         </ul>
    </section>
    <section id="physical-design-verification">
        <h3>Physical Design & Verification <div class="mastery-controls" data-id="physical-design-verification"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
        <h4>Post-layout Simulation & Extraction</h4>
        <ul>
            <li><span class="quiz-definition" data-term="Briefly describe the layout design flow"><strong>Design Flow</strong>: Schematic Design → Layout Design → Extraction → Verification & Simulation</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Extraction</span></span><span class="collapsible-content quiz-definition" data-term="What is Extraction?">CAD tools automatically analyze layout, identify circuit components and connections, generate <strong>netlist</strong>. Need to identify <strong>vias</strong> to understand circuit connections.</span></li>
            <li><span class="quiz-definition" data-term="What are parasitic parameters?"><strong>Parasitic</strong>: Actual layout produces <strong>parasitic resistance</strong> and <strong>parasitic capacitance</strong>, which are unavoidable.</span></li>
            <li><strong>Accurate Simulation</strong>:
                <ul>
                    <li><span class="quiz-definition" data-term="What are the characteristics of Pre-layout simulation?"><strong>Pre-layout</strong>: Based on ideal circuit diagram, fast but not precise.</span></li>
                    <li><span class="quiz-definition" data-term="What are the characteristics of Post-layout simulation?"><strong>Post-layout</strong>: Includes parasitic parameters, more accurate results, closer to actual chip performance.</span></li>
                </ul>
            </li>
        </ul>
        <h4>Core Layout Techniques</h4>
        <ul>
            <li><span class="quiz-definition" data-term="What is the function of Guard Ring?"><strong>Guard Ring</strong>: Increases area, used to prevent latch-up effect.</span></li>
            <li><span class="quiz-definition" data-term="What is the function of H-Tree or Spine?"><strong>H-Tree or Spine</strong>: Used to reduce clock skew.</span></li>
            <li><span class="quiz-definition" data-term="What is the function of Striped Metal Layers?"><strong>Striped Metal Layers</strong>: Used to evenly distribute power, reduce IR drop.</span></li>
            <li><span class="quiz-definition" data-term="What is the function of Increased track width?"><strong>Increased track width</strong>: Used to reduce resistance or improve current carrying capacity.</span></li>
            <li><span class="quiz-definition" data-term="What is the function of Folded Layout?"><strong>Folded Layout</strong>: Significantly <strong>reduces cell area</strong>.</span></li>
        </ul>
    </section>
    <section id="design-for-testability-dft">
        <h3>Design for Testability<div class="mastery-controls" data-id="design-for-testability-dft"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
        <h4>Scan Path (flip-flop)</h4>
        <ol>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Static Characteristics</span></span><span class="collapsible-content quiz-definition" data-term="How to solve the problem of latch leaking data to achieve static characteristics?"><strong>Problem</strong>: Latch leaks data when using transmission gates.<br><strong>Solution</strong>: Add feedback circuit to maintain data stability.</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Edge Sensitivity</span></span><span class="collapsible-content quiz-definition" data-term="How to implement edge triggering with latches?"><strong>Problem</strong>: Ordinary latches don't update data precisely enough.<br><strong>Solution</strong>: Use two-stage latch:<ul><li>High level: first stage receives data, second stage maintains;</li><li>Falling edge: first stage locks data, second stage updates.</li></ul></span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">ESD Protection</span></span><span class="collapsible-content quiz-definition" data-term="How does ESD protection circuit work?"><strong>Function</strong>: Protects chip pin circuits.<br><strong>Work Method</strong>:<ul><li>Use inverter at input D;</li><li>Diodes conduct excessive current at high voltage.</li></ul></span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Setup Time</span></span><span class="collapsible-content quiz-definition" data-term="How to improve flip-flop to reduce setup time?"><strong>Problem</strong>: MUX selector makes flip-flop slower.<br><strong>Improvement Method</strong>: Integrate selection function into transmission gates to improve speed.</span></li>
        </ol>
        <h4>Bed of Nails Test</h4>
         <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Basic Concept</span></span><span class="collapsible-content quiz-definition" data-term="What is 'Bed of Nails Test'?">This is a traditional testing method used to check if components on circuit boards are well soldered. Testing requires a device with many test pins that contact test points specially left on circuit boards.</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Disadvantages</span></span><span class="collapsible-content quiz-definition" data-term="What are the disadvantages of 'Bed of Nails Test'?">Modern chip packaging is increasingly dense (such as BGA packaging), making it difficult to test with this method, hence the need for new technologies like boundary scan.</span></li>
         </ul>
        <h4>Boundary Scan</h4>
         <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Testing Difficulty</span></span><span class="collapsible-content quiz-definition" data-term="What are the difficulties in testing modern chips?">Modern chips are getting smaller, making it difficult to test connections between chips with traditional methods.</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Solution</span></span><span class="collapsible-content quiz-definition" data-term="How does boundary scan solve testing difficulties?">Add a <strong>boundary scan cell</strong> next to each input/output pin of the chip. These cells are connected in a chain, like a test path around the chip core.</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Work Method</span></span><span class="collapsible-content quiz-definition" data-term="How does boundary scan work?">We can check if chip pins work normally through a standard <strong>Test Access Port (TAP)</strong>, without directly contacting the chip.</span></li>
         </ul>
        <h4>Built-In Self-Test (BIST)</h4>
        <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Main Idea</span></span><span class="collapsible-content quiz-definition" data-term="What is the main idea of Built-In Self-Test (BIST)?">Let the chip <strong>"test itself"</strong>, eliminating the need for expensive external test equipment.</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">Main Components</span></span><span class="collapsible-content quiz-definition" data-term="What are the main components of Built-In Self-Test (BIST)?"><ol><li><strong>Test Signal Generator</strong>: Automatically generates test signals.</li><li><strong>Result Analyzer</strong>: Converts test results into a simple digital signature.</li></ol></span></li>
            <li><span class="quiz-definition" data-term="What is BILBO technology?"><strong>BILBO Technology</strong> is a special self-test module that integrates multiple test functions, capable of automatically completing tests and analyzing results.</span></li>
        </ul>
    </section>
    
    <!-- Digital Electronics Main Chapter Quiz -->
    <button class="quiz-button"></button>
    <div class="quiz-container"></div>
    
    <!-- Chapter End Divider -->
    <div class="section-divider"></div>
</section>
</div>
`;

// 中文内容
const notesContentZh = `
<div class="section-container active" id="analogue-container">
<section id="analogue-electronics" class="quiz-section">
    <h2>模拟电子学</h2>
    <section id="mosfet-operating-states-output-voltage-swing">
        <h3>MOSFET工作状态与输出电压摆幅 <div class="mastery-controls" data-id="mosfet-operating-states-output-voltage-swing"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
        <p>MOSFET有三种基本工作状态：</p>
        <ul>
            <li><strong>截止状态</strong> - 像关掉的开关，无电流通过</li>
            <li><strong>线性状态</strong> - 像可调电阻，电流由栅极电压控制</li>
            <li><strong>饱和状态</strong> - 像稳定电流源，提供固定电流</li>
        </ul>
        <p><strong>注意</strong>：在饱和状态下，存在<span class="collapsible"><span class="collapsible-icon">[+]</span>沟道长度调制效应</span><span class="collapsible-content">当漏极电压增加时，导致电流略微增加。</span>电流公式如下：</p>
        <div class="formula-block">$$ I_D = \\frac{1}{2} \\mu_n C_{\\text{ox}} \\frac{W}{L} (V_{GS} - V_T)^2 (1 + \\lambda V_{DS}) $$</div>
        <p><span class="collapsible"><span class="collapsible-icon">[+]</span>输出电压摆幅</span><span class="collapsible-content">定义为所有晶体管保持饱和区工作时的最大电压范围：</span></p>
        <ul>
            <li><strong>上限 (Vout,max)</strong>：受PMOS负载晶体管进入三极管区限制，约为VDD−∣VOV,load∣</li>
            <li><strong>下限 (Vout,min)</strong>：受NMOS对或尾电流源晶体管进入三极管区限制，约为VOV,input+VOV,tail</li>
        </ul>
    </section>
    
    <section id="basic-principles-of-differential-amplifiers">
        <h3>差分放大器的基本原理 <div class="mastery-controls" data-id="basic-principles-of-differential-amplifiers"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
        <h4>1. <span class="quiz-term">差分模式 (A_dm)</span></h4>
        <ul>
            <li><span class="quiz-definition" data-term="差分模式(A_dm)的工作原理是什么？"><strong>工作原理</strong>：差分放大器中两个晶体管的公共源极点可以视为"虚地"，因为电路是对称的。</span></li>
            <li><span class="quiz-definition" data-term="差分模式(A_dm)的简化分析方法是什么？"><strong>简化分析方法</strong>：我们只需分析电路的一半，将其视为简单的共源放大器，便于计算。</span></li>
            <li><strong>放大能力</strong>：
                <ul>
                    <li><span class="quiz-definition" data-term="什么是'单端输出增益'？">当我们只观察一个输出时，这称为'单端输出增益'。</span></li>
                    <li><span class="quiz-definition" data-term="什么是'差分输出增益'？">当我们观察两个输出之间的电压差时，这称为'差分输出增益'。通常，差分输出增益是单端输出增益的两倍。</span></li>
                </ul>
            </li>
        </ul>
        <h4>2. <span class="quiz-term">共模 (A_cm)</span></h4>
        <ul>
            <li><span class="quiz-definition" data-term="共模(A_cm)的工作原理是什么？"><strong>工作原理</strong>：当两个输入接收相同信号（共模信号）时，尾电流源电阻起重要作用。这个电阻产生负反馈效应，有助于抑制共模信号。</span></li>
            <li><span class="quiz-definition" data-term="共模(A_cm)的抑制效应是什么？"><strong>抑制效应</strong>：放大器大大衰减共模信号，这正是我们想要的效果。</span></li>
            <li><span class="quiz-definition" data-term="共模(A_cm)在差分输出中的性能如何？"><strong>差分输出中的性能</strong>：当我们观察两个输出之间的差值时，理想情况下共模信号被完全消除（增益为零）。这是因为共模信号在两端产生相同的变化。</span></li>
        </ul>
        <h4>3. <span class="quiz-term">共模抑制比 (CMRR)</span></h4>
        <ul>
            <li><span class="quiz-definition" data-term="共模抑制比(CMRR)的含义是什么？"><strong>含义</strong>：CMRR用于衡量放大器的质量，表示放大器放大有用信号（差分信号）与抑制干扰信号（共模信号）能力的比值。</span></li>
        </ul>
        <div class="formula-block">$$ CMRR=\\left|\\frac{A_{dm}}{A_{cm}}\\right| $$</div>
        <ul>
             <li><span class="quiz-definition" data-term="CMRR性能指标代表什么？"><strong>性能指标</strong>：CMRR越大，性能越好。特别是在差分输出中，因为共模信号被完全抑制，理论上CMRR可以达到无穷大。</span></li>
        </ul>
        <h4>放大器中两个关键晶体管的作用</h4>
        <ul>
            <li><span class="quiz-definition" data-term="M1晶体管在放大器中的作用是什么？"><strong>M1的工作：信号放大器</strong> M1负责接收和放大输入信号。它像一个电压控制的开关，根据输入电压变化调节电流大小。M1的跨导(gm1)决定了它能将小电压变化转换为多大的电流变化。</span></li>
            <li><span class="quiz-definition" data-term="M3晶体管在放大器中的作用是什么？"><strong>M3的工作：电流转换器</strong> M3的任务是将M1产生的电流变化转换为电压变化。它的栅极电压固定，主要提供大的输出电阻。这个大电阻帮助我们获得更大的输出电压信号。</span></li>
        </ul>
    </section>
    
    <section id="miller-effect">
        <h3>米勒效应 <div class="mastery-controls" data-id="miller-effect"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
        <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">米勒效应</span></span><span class="collapsible-content quiz-definition" data-term="解释米勒效应">在反相放大器中，输入输出电容（如CS放大器中的Cgd）在输入端表现为更大的电容Cin,Miller=Cf(1−Av)，因为Av是一个大的负数。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">输入极点</span></span><span class="collapsible-content quiz-definition" data-term="解释输入极点">放大器频率响应受RC网络形成的极点限制，频率fp=1/(2πR_totalC_total)。</span></li>
            <li><span class="quiz-definition" data-term="为什么共源放大器会受到米勒效应影响？"><strong>共源(CS)放大器</strong>：栅漏Cgd电容引起显著的米勒效应，形成限制带宽的<strong>主极点</strong>。</span></li>
            <li><span class="quiz-definition" data-term="为什么共栅放大器没有米勒效应？"><strong>共栅(CG)放大器</strong>：输入在源极，输出在漏极，栅极接地，无输入输出电容，因此<strong>无米勒效应</strong>，高频特性优于CS。</span></li>
        </ul>
    </section>
    
    <section id="negative-feedback">
        <h3>负反馈 <div class="mastery-controls" data-id="negative-feedback"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
        <ul>
            <li><span class="quiz-definition" data-term="描述一种负反馈方法及其效果"><strong>反馈方法</strong>：串联输入并联输出，增加输入电阻，减少输出电阻。</span></li>
        </ul>
        <h4>正负反馈识别</h4>
        <p>分析<strong>反馈信号对输入的影响</strong>来确定反馈类型：</p>
        <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">负反馈</span></span><span class="collapsible-content quiz-definition" data-term="负反馈如何工作，它做什么？">反馈信号<strong>抵消</strong>输入变化，减少有效输入。<strong>用于稳定电路</strong>。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">正反馈</span></span><span class="collapsible-content quiz-definition" data-term="正反馈如何工作，它做什么？">反馈信号<strong>增强</strong>输入变化，增加有效输入。<strong>可能引起振荡</strong>。</span></li>
        </ul>
    </section>
    
    <!-- 模拟电子学主章节测验 -->
    <button class="quiz-button"></button>
    <div class="quiz-container"></div>
    
    <!-- 章节结束分隔栏 -->
    <div class="section-divider"></div>
</section>

<!-- 跳转到数字章节的按钮 -->
<button class="section-nav-button" id="go-to-digital-btn">
    进入数字电子学章节 →
</button>
</div>

<div class="section-container" id="digital-container">
<!-- 返回模拟章节的按钮 -->
<button class="section-nav-button" id="go-to-analogue-btn">
    ← 返回模拟电子学章节
</button>

<section id="digital-electronics" class="quiz-section">
    <h2>数字电子学</h2>
    <section id="logic-timing-power">
        <h3>逻辑、时序与功耗<div class="mastery-controls" data-id="logic-timing-power"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
        <h4>逻辑努力法</h4>
        <p>这是一种简单的计算数字电路延迟的方法。其主要优点是将复杂的延迟问题分解为几个简单的部分进行分析。</p>
        <p>我们用一个公式表示电路延迟：d = g⋅h + p</p>
        <ul>
            <li><strong>基本组件</strong>：
                <ul>
                    <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">g (逻辑努力)</span></span><span class="collapsible-content quiz-definition" data-term="什么是逻辑努力 (g)？">表示电路类型引起的延迟，例如NAND和NOR门之间的固有差异</span></li>
                    <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">h (电气努力)</span></span><span class="collapsible-content quiz-definition" data-term="什么是电气努力 (h)？">表示负载大小引起的延迟，简单地表示输出电容与输入电容的比值</span></li>
                    <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">p (寄生延迟)</span></span><span class="collapsible-content quiz-definition" data-term="什么是寄生延迟 (p)？">表示电路固有的延迟，与负载无关</span></li>
                </ul>
            </li>
            <li><strong>重要概念</strong>：
                 <ul>
                    <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">努力延迟 (f)</span></span><span class="collapsible-content quiz-definition" data-term="什么是努力延迟 (f)？">这是负载引起的延迟，等于逻辑努力和电气努力的乘积 (f = g⋅h)</span></li>
                    <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">归一化延迟 (d)</span></span><span class="collapsible-content quiz-definition" data-term="什么是归一化延迟 (d)？">这是总电路延迟，以相对单位表示。它等于努力延迟加上寄生延迟 (d = f + p)</span></li>
                    <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">传播延迟 (tpd)</span></span><span class="collapsible-content quiz-definition" data-term="什么是传播延迟 (tpd)？">要了解实际延迟时间（秒），只需将归一化延迟乘以一个与工艺相关的时常数 τ：tpd = d⋅τ</span></li>
                </ul>
            </li>
        </ul>
         <h4>布尔代数三大定律总结表</h4>
         <table>
            <thead><tr><th><strong>吸收律</strong></th><th>公式</th><th>解释</th></tr></thead>
            <tbody>
                <tr><td> </td><td>A+AB=A</td><td>如果A已经存在，则不需要添加包含A的项</td></tr>
                <tr><td> </td><td>A(A+B)=A</td><td>A乘以包含A的表达式仍然得到A</td></tr>
                <tr><td> </td><td>A+A′B=A+B</td><td>可以简化为A+B（A′表示非A）</td></tr>
            </tbody>
         </table>
         <h4>开关功耗</h4>
         <ul>
             <li><strong>开关功耗公式</strong>：开关功耗由以下公式表示：</li>
         </ul>
         <div class="formula-block">$$ P_{SW} = \\alpha \\cdot f \\cdot C_L \\cdot V_{DD}^2 $$</div>
         <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span>公式参数</span><span class="collapsible-content"><ul><li>PSW：开关功耗，单位为瓦特 (W)。</li><li>α：<strong>活动因子</strong>，表示每个时钟周期中充电/放电转换发生的概率，是一个介于0和1之间的无量纲参数。</li><li>f：时钟频率，单位为赫兹 (Hz)。</li><li>CL：负载电容，单位为法拉 (F)。</li><li>VDD：供电电压，单位为伏特 (V)。</li></ul></span></li>
         </ul>
         <h4>各种逻辑电路类型</h4>
         <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">静态逻辑</span></span><span class="collapsible-content quiz-definition" data-term="什么是静态逻辑？">最基本的逻辑电路类型。不需要时钟信号控制，通过固定的上拉和下拉电路保持稳定输出。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">传输管逻辑</span></span><span class="collapsible-content quiz-definition" data-term="什么是传输管逻辑？">使用晶体管作为简单的开关来传递信号。结构简单，但传输高电平时有衰减。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">伪NMOS逻辑</span></span><span class="collapsible-content quiz-definition" data-term="什么是伪NMOS逻辑？">静态逻辑电路的简化版本。使用永久导通的拉上电阻，结构简单但消耗静态功耗。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">比例逻辑</span></span><span class="collapsible-content quiz-definition" data-term="什么是比例逻辑？">输出取决于上拉和下拉晶体管的大小比例。可以想象成两个晶体管在“拔河”，谁更强决定输出是高还是低。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">动态逻辑</span></span><span class="collapsible-content quiz-definition" data-term="什么是动态逻辑？">时钟控制的电路。操作分为两个阶段：首先预充电（将输出充电到高电平），然后根据输入信号决定是保持高电平还是放电到低电平。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">多米诺逻辑</span></span><span class="collapsible-content quiz-definition" data-term="什么是多米诺逻辑？">多米诺逻辑的改进版本，在输出端添加了一个信号反相器以实现更好的串联操作。</span></li>
         </ul>
         <h4>时序延迟</h4>
         <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">污染延迟 (tcd)</span></span><span class="collapsible-content quiz-definition" data-term="什么是污染延迟 (tcd)？">信号传输的最短时间。也就是说，当输入变化时，输出何时开始变化。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">传播延迟 (tpd)</span></span><span class="collapsible-content quiz-definition" data-term="什么是传播延迟 (tpd)？">信号传输的最长时间。也就是说，当输入变化时，输出何时完全稳定。</span></li>
         </ul>
    </section>
    <section id="physical-design-verification">
        <h3>物理设计与验证 <div class="mastery-controls" data-id="physical-design-verification"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
        <h4>后端仿真与提取</h4>
        <ul>
            <li><span class="quiz-definition" data-term="简要描述布局设计流程"><strong>设计流程</strong>：原理图设计 → 布局设计 → 提取 → 验证与仿真</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">提取</span></span><span class="collapsible-content quiz-definition" data-term="什么是提取？">CAD工具自动分析布局，识别电路元件和连接，生成<strong>网表</strong>。需要识别<strong>过孔</strong>以了解电路连接。</span></li>
            <li><span class="quiz-definition" data-term="什么是寄生参数？"><strong>寄生</strong>：实际布局会产生<strong>寄生电阻</strong>和<strong>寄生电容</strong>，这是不可避免的。</span></li>
            <li><strong>精确仿真</strong>：
                <ul>
                    <li><span class="quiz-definition" data-term="预布局仿真有什么特点？"><strong>预布局</strong>：基于理想电路图，快速但不精确。</span></li>
                    <li><span class="quiz-definition" data-term="后布局仿真有什么特点？"><strong>后布局</strong>：包含寄生参数，结果更准确，更接近实际芯片性能。</span></li>
                </ul>
            </li>
        </ul>
        <h4>核心布局技术</h4>
        <ul>
            <li><span class="quiz-definition" data-term="什么是防护环的作用？"><strong>防护环</strong>：增加面积，用于防止闩锁效应。</span></li>
            <li><span class="quiz-definition" data-term="什么是H树或脊？"><strong>H树或脊</strong>：用于减少时钟偏斜。</span></li>
            <li><span class="quiz-definition" data-term="什么是条状金属层？"><strong>条状金属层</strong>：用于均匀分布电源，减少IR降。</span></li>
            <li><span class="quiz-definition" data-term="什么是增加布线宽度？"><strong>增加布线宽度</strong>：用于减少电阻或提高电流承载能力。</span></li>
            <li><span class="quiz-definition" data-term="什么是折叠布局？"><strong>折叠布局</strong>：显著<strong>减少单元面积</strong>。</span></li>
        </ul>
    </section>
    <section id="design-for-testability-dft">
        <h3>可测试性设计<div class="mastery-controls" data-id="design-for-testability-dft"><span class="mastery-icon" data-level="mastered">😊</span><span class="mastery-icon" data-level="review">🤔</span><span class="mastery-icon" data-level="confused">🤯</span></div></h3>
        <h4>扫描路径（触发器）</h4>
        <ol>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">静态特性</span></span><span class="collapsible-content quiz-definition" data-term="如何解决锁存器泄漏数据以实现静态特性？"><strong>问题</strong>：使用传输门时锁存器泄漏数据。<br><strong>解决方案</strong>：添加反馈电路以保持数据稳定性。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">边沿敏感度</span></span><span class="collapsible-content quiz-definition" data-term="如何使用锁存器实现边沿触发？"><strong>问题</strong>：普通锁存器更新数据不够精确。<br><strong>解决方案</strong>：使用两级锁存器：<ul><li>高电平时：第一级接收数据，第二级维持；</li><li>下降沿：第一级锁定数据，第二级更新。</li></ul></span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">ESD保护</span></span><span class="collapsible-content quiz-definition" data-term="ESD保护电路如何工作？"><strong>功能</strong>：保护芯片引脚电路。<br><strong>工作方法</strong>：<ul><li>输入D处使用反相器；</li><li>二极管导通过流电流。</li></ul></span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">建立时间</span></span><span class="collapsible-content quiz-definition" data-term="如何提高触发器以减少建立时间？"><strong>问题</strong>：MUX选择器使触发器变慢。<br><strong>改进方法</strong>：将选择功能集成到传输门中以提高速度。</span></li>
        </ol>
        <h4>床钉测试</h4>
         <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">基本概念</span></span><span class="collapsible-content quiz-definition" data-term="什么是'床钉测试'？">这是一种传统的测试方法，用于检查电路板上的组件是否焊接良好。测试需要一个具有许多测试引脚的设备，这些引脚接触电路板上专门留下的测试点。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">缺点</span></span><span class="collapsible-content quiz-definition" data-term="什么是'床钉测试'的缺点？">现代芯片封装越来越密集（如BGA封装），使用这种方法测试越来越困难，因此需要新的技术，如边界扫描。</span></li>
         </ul>
        <h4>边界扫描</h4>
         <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">测试难度</span></span><span class="collapsible-content quiz-definition" data-term="现代芯片测试有什么困难？">现代芯片越来越小，使用传统方法测试芯片之间的连接越来越困难。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">解决方案</span></span><span class="collapsible-content quiz-definition" data-term="边界扫描如何解决测试困难？">在芯片的每个输入/输出引脚旁添加一个<strong>边界扫描单元</strong>。这些单元通过链式连接，就像围绕芯片核心的测试路径。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">工作方法</span></span><span class="collapsible-content quiz-definition" data-term="边界扫描如何工作？">我们可以通过标准的<strong>测试访问端口（TAP）</strong>检查芯片引脚是否正常工作，而不直接接触芯片。</span></li>
         </ul>
        <h4>内置自测试（BIST）</h4>
        <ul>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">主要思想</span></span><span class="collapsible-content quiz-definition" data-term="内置自测试（BIST）的主要思想是什么？">让芯片<strong>"测试自己"</strong>，消除对外部测试设备的需求。</span></li>
            <li><span class="collapsible"><span class="collapsible-icon">[+]</span><span class="quiz-term">主要组件</span></span><span class="collapsible-content quiz-definition" data-term="内置自测试（BIST）的主要组件是什么？"><ol><li><strong>测试信号发生器</strong>：自动生成测试信号。</li><li><strong>结果分析器</strong>：将测试结果转换为简单的数字签名。</li></ol></span></li>
            <li><span class="quiz-definition" data-term="什么是BILBO技术？"><strong>BILBO技术</strong>是一种集成了多种测试功能的特殊自测试模块，能够自动完成测试并分析结果。</span></li>
        </ul>
    </section>
    
    <!-- 数字电子学主章节测验 -->
    <button class="quiz-button"></button>
    <div class="quiz-container"></div>
    
    <!-- 章节结束分隔栏 -->
    <div class="section-divider"></div>
</section>
</div>
`;