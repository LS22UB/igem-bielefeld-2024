import {useTabNavigation} from "../utils/useTabNavigation";
import {Section, Subesction} from "../components/Sections.tsx";
import PreCyse from "../components/Precyse.tsx";
import {Figure} from "../components/Figures.tsx";
import {SupScrollLink} from "../components/ScrollLink.tsx";
import Collapsible from "../components/Collapsible.tsx";
import BibtexParser from "../components/BibtextParser.tsx";
import {descriptionSources} from "../data/sources/descriptionSources.ts"
import {PieChart} from "../components/charts/PieChart.tsx";
import {mutationdata, pieoption} from "../data/charts/piecharts.ts";

export function Description() {
    useTabNavigation();
    return (
        <>
            <Section title="Abstract">
                <p id="obenindescription">We are proud to present <PreCyse/>, a next-generation Prime Editing
                    technology, as innovative gene therapy approach for Cystic Fibrosis (CF)
                    specifically targeting the most common mutation <b>F508del</b> of the CFTR gene. Cystic Fibrosis is
                    a severe disorder that primarily affects the lungs
                    and for which only short-term symptomatic treatments exist. PreCyse aims to provide long-term relief
                    by delivering a small genetic payload with speed
                    and precision. Our approach integrates <b>PrimeGuide</b>, a highly optimized Prime Editing system,
                    with <b>AirBuddy</b>, a novel lipid nanoparticle
                    (LNP) delivery platform. The <b>SORT LNPs</b> used in AirBuddy are optimized for pulmonary delivery,
                    offering precise organ targeting and structural
                    stability throughout the inhalation process. Small payload size is key for effective delivery and
                    compatibility with viral vectors, which have a
                    limited capacity. PrimeGuide embodies this vision by utilizing a smaller, more efficient editing
                    complex. Current treatments often require daily
                    administration whereas PreCyse is currently developed as a monthly applied therapy. In addition,
                    Prime Editing holds the promise to offer a causal cure,
                    when mutations are corrected in stem cells. Our approach aims to reduce medication frequency while
                    improving patient outcomes.
                    By lowering costs and improving accessibility, PreCyse aspires to offer an advanced and
                    user-friendly cure for Cystic Fibrosis.</p>
            </Section>
            <Section title="Our Motivation">
                <p>Our project started with a personal story. Rather than being driven purely by academic
                    curiosity, our motivation came from someone close to one of our team members — Max Beckmann,
                    a friend who has lived with Cystic Fibrosis (CF) since his birth. Specifically, he carries
                    the F508del mutation, the most common genetic cause of the disease. Seeing the impact of CF
                    on his daily life—frequent treatments and physical strain—made us realize how much more can
                    be done to improve the lives of those affected, which inspired us to pursue this
                    project. </p>
                <div className="row align-items-center mt-4">
                    <div className="col-6">
                        <p>As we explored Cystic Fibrosis further, we were struck by how widespread it is, being the
                            most common genetic disorder in Germany. Approximately 70% of those with CF are specifically
                            affected by the F508del mutation<SupScrollLink label="1"/> . This mutation is the most
                            prevalent and well-studied of the thousands of genetic variations that cause CF, making it
                            an important focus of research and intervention. In fact, about 90% of Europeans and
                            individuals of European descent with CF have at least one F508del allele<SupScrollLink
                                label="2"/>. This widespread prevalence highlighted the significance of our project—not
                            just for our friend, but for the thousands of others affected by this mutation across Europe
                            and beyond. </p>
                    </div>
                    <div className="col">
                        <Figure
                            pictures={[
                                { link: "https://static.igem.wiki/teams/5247/photos/other/max-bild.webp",
                                    alttext: "",
                                    description: "Picture from our interview with Max.",
                                    num: 1}
                            ]}
                        />
                    </div>
                    {/*  */}
                </div>
                <br/>
                <p>By focusing on the F508del mutation, we also hope to contribute valuable insights to the global
                    Cystic Fibrosis community. Although this mutation is most common in European populations, it is also
                    found in other regions around the world. Our research could thus help inform treatment strategies
                    and health policies on an international scale. </p>
                <p>With several team members focusing their studies on biomedical fields, we began by examining the
                    current landscape of CF treatments. It quickly became clear that, despite recent progress, there is
                    still no cure. Most therapies, such as CFTR modulators, focus on managing symptoms and improving
                    lung function rather than addressing the underlying cause of the disease<SupScrollLink
                        label="3"/>{/* ehem6 */}. This realization led us to explore gene-editing technologies, thus
                    leading us to Prime Editing—a next generation gene editing method—captured our attention. </p>
                <p>While Prime Editing holds great promise, we found that its application for Cystic Fibrosis,
                    particularly the F508del mutation, had not been fully explored. Recognizing this gap in the research
                    inspired us to take on the challenge of optimizing Prime Editing for this specific mutation. Our
                    mission became clear: we want to contribute to the development of a potential therapeutic approach
                    for Cystic Fibrosis, specifically targeting the F508del mutation with prime editing, and bring us
                    closer to a long-term solution for patients. </p>
            </Section>
            <Section title="Cystic Fibrosis">
                <Subesction title="Overview">
                    <p data-aos="zoom-y-out">Cystic Fibrosis (CF) is a common life-limiting genetic disorder,
                        particularly affecting the Caucasian population, with approximately <b>162,400 people
                            worldwide</b> living with the condition<SupScrollLink label="4"/>{/* ehem7 */}.
                        Statistically, about <b>one in every 3,300</b> white newborns is born with CF<SupScrollLink
                            label="5"/>{/*ehem8*/}. And according to the German Cystic Fibrosis Registry, the average
                        life expectancy for children born with CF in 2021 was around 57 years<SupScrollLink
                            label="6"/>{/*ehem9*/}, highlighting the severe and life-shortening nature of the disease.
                    </p>
                    <p>The modern understanding of CF dates back to 1922 when Dr. Dorothy Andersen, a pediatric
                        specialist, first described the disease and coined the term "Cystic Fibrosis"<SupScrollLink
                            label="7"/>{/*ehem10*/}. In Germany, it is commonly known as "Mukoviszidose," derived from
                        the Latin words meaning "mucus" and "viscous"<SupScrollLink label="7"/>{/*ehem10*/}, emphasizing
                        the characteristic thick, sticky mucus that defines the condition<SupScrollLink
                            label="8"/>{/*ehem11*/}. </p>
                    <div className="row align-items-center align-content-center mt-4">
                        <div className="col-8 mx-auto">
                            <Figure
                                pictures={[{link: "https://static.igem.wiki/teams/5247/project-description/lung-ephitel-biorender.png",
                                    alttext: "Lung ephitelium of human with correct CFTR expression (left) and Cystic Fibrosis (right).",
                                    num: 2, description: "Human lung epithelium with corrected CFTR expression (left) and Cystic Fibrosis (right)." }]}
                            />
                        </div>
                    </div>
                    <br/>
                    <p>Genetic research has identified over 1,700 mutations in the CFTR (Cystic Fibrosis Transmembrane
                        Conductance Regulator) gene, with the F508del mutation being the most common, affecting about
                        70% of CF patients. This mutation prevents the proper folding of the CFTR protein, significantly
                        impairing its function<SupScrollLink label="9"/>{/*ehem13*/}. </p>
                    <p>The CFTR protein regulates the flow of chloride ions across the membranes of cells in the lungs,
                        digestive system, and other organs. This ion flow is essential for drawing water into
                        surrounding tissues, which helps maintain the proper hydration and consistency of mucus. In
                        patients with CF, the disruption of this process prevents sufficient water from entering the
                        mucus, making it abnormally thick and sticky. The accumulation of this mucus leads to an
                        obstruction of airways and digestive ducts, resulting in chronic lung infections, inflammation,
                        impaired digestion, and malnutrition<SupScrollLink label="10"/>{/*ehem14*/}. </p>

                    <br/>
                    <Collapsible id="classes-mutations-collapsible" title="Different classes of mutations">
                        <p>The mutations can be divided into <u>six classes</u><SupScrollLink label="11"/>{/*ehem15*/} :
                        </p>
                        <p><b>Class I</b> mutations prevent the synthesis of CFTR proteins altogether, meaning no
                            channels are produced.</p>
                        <p><b>Class II</b> mutations, which include the common F508del mutation (responsible for about
                            85% of cases<SupScrollLink label="11"/>{/*ehem16*/}, disrupt the maturation process of the
                            protein. As a result, the defective channels are quickly degraded by the cell.</p>
                        <p><b>Class III</b> mutations, known as “gating” mutations, reduce the likelihood that the CFTR
                            channel will open correctly, impairing its function.</p>
                        <p><b>Class IV, V</b> and <b>VI</b> mutations are rare. These mutations result in the production
                            of unstable or inefficient CFTR proteins, which do not function adequately and are produced
                            in insufficient numbers.</p>
                    </Collapsible>
                    <br/>
                    <p>The prevalence of CF varies globally, with higher concentrations of cases in Europe,
                        North America, and parts of Oceania. This geographic variation underscores the need for
                        regionally tailored healthcare solutions. </p>
                    <div className="row mt-4">
                        <div className="col mx-auto">
                            <Figure
                                pictures={
                                [
                                    {
                                        link: "https://static.igem.wiki/teams/5247/charts-maps/cfper10-000.png",
                                        alttext:"",
                                        num: 3,
                                        description: "Global distribution of cystic fibrosis cases: Countries are color-coded based on the number of reported cases, highlighting regional prevalence patterns."
                                    }
                                ]
                                }
                                bg={"light"}
                            />
                        </div>
                        <div className="col-6 my-auto">
                            <p>CF is often diagnosed early through newborn screening programs, which detect elevated
                                levels of immunoreactive trypsinogen (IRT). A positive result typically leads to a sweat
                                test, the gold standard for diagnosing CF, which measures the concentration of chloride
                                in sweat. </p>
                            <p>Although there is currently no cure for CF, patients must manage the disease throughout
                                their lives, relying on treatments that alleviate symptoms but do not address the root
                                cause. This lifelong management imposes significant financial burdens on affected
                                families and healthcare systems, particularly in regions with a high prevalence of
                                CF<SupScrollLink label="11"/>{/*ehem15*/}. In recent years, <b>CFTR modulators</b>,
                                which target the underlying genetic defect, have offered new hope for many patients.
                            </p>
                        </div>
                    </div>
                </Subesction>
            </Section>
            <Subesction title="The CFTR Protein">
                <p>The CFTR (Cystic Fibrosis Transmembrane Conductance Regulator) protein is an ion channel that facilitates the movement of chloride ions across epithelial cell membranes<SupScrollLink label="12" />{/*ehem18*/}. This movement is essential for controlling the flow of water in tissues such as the lungs and intestines<SupScrollLink label="13" />{/*ehem19*/}. This increase in ion concentration in the extracellular space draws water out of the cells and into the surrounding mucus or fluid, ensuring it stays thin and mobile<SupScrollLink label="13" />{/*ehem20*/}.</p>
                <p>The Cystic Fibrosis Transmembrane Conductance Regulator (CFTR) protein is a specialized protein that plays a crucial role in maintaining the balance of ions and water on the surface of certain cells, particularly in the lungs, pancreas, and other organs. </p>
                <h4 id="structure-cftr">Structure of CFTR</h4>
                <p>CFTR is a large protein embedded in the cell membrane. It belongs to a family of proteins known as ABC transporters (ATP-Binding Cassette transporters), which typically move molecules across cell membranes<SupScrollLink label="14" />{/*ehem17*/}. CFTR, however, is unique because it functions as an ion channel rather than a transporter<SupScrollLink label="14" />{/*ehem18*/}. </p>
                <p>The protein consists of several important regions<SupScrollLink label="15" />: </p>
                <ul>
                    <li><b>Two transmembrane domains (TMDs)</b>: These span the cell membrane and create the channel through which ions can flow.</li>
                    <li><b>Two nucleotide-binding domains (NBDs)</b>: Located on the cytoplasmic side of the membrane, these domains bind and hydrolyze ATP (adenosine triphosphate). ATP binding and hydrolysis regulate the opening and closing of the chloride channel.</li>
                    <li><b>Regulatory (R) domain</b>: This domain is unique to CFTR and controls the activity of the protein. It requires phosphorylation by protein kinase A (PKA) to activate the ion channel.</li>
                </ul>
                <div className="row align-items-center">
                    <div className="col">
                        {/* This one this has tp stay a figure and not be a OneFigure */}
                        <div className="figure-wrapper">
                            <figure>
                                <div className="col gif-wrapper">
                                    <img className="CFTR-gif" src="https://static.igem.wiki/teams/5247/fanzor/cftr-wt.gif"></img>
                                </div>
                                <figcaption> <b>Animation 1.</b> Model of a functional CFTR protein.</figcaption>
                            </figure>
                        </div>
                        <h4 id="function-cftr">Function of CFTR</h4>
                        <p>CFTR functions primarily as a chloride ion channel. It is responsible for transporting chloride ions (Cl⁻) across epithelial cell membranes. Here's how it works<SupScrollLink label="12" />{/*ehem18*/}:</p>
                        <ol>
                            <li><b>Regulation by phosphorylation</b>: The R domain must first be phosphorylated by PKA to allow channel activation. This phosphorylation is often triggered by cyclic AMP (cAMP), a signaling molecule.</li>
                            <li><b>Opening the channel</b>: Once the R domain is phosphorylated, ATP binds to the NBDs, causing conformational changes that open the chloride channel.</li>
                            <li><b>Chloride transport</b>: With the channel open, chloride ions move from inside the cell to the outside. This movement of chloride helps draw water out of the cell, thinning mucus and maintaining proper hydration of the epithelial surfaces.</li>
                            <li><b>Closing the channel</b>: Hydrolysis of ATP causes the channel to close after a certain period, tightly regulating chloride transport.</li>
                        </ol>
                        <p>CFTR plays a critical role in maintaining the fluid balance on the surfaces of tissues such as the airways, digestive tract and sweat glands. By allowing chloride ions to flow out of the cells, CFTR ensures that water follows, preventing the accumulation of thick, sticky mucus.</p>
                        <h4 id="CFTR-in-cftr">CFTR in Cystic Fibrosis</h4>
                        <p>In the lungs, this water movement is crucial for maintaining a thin, slippery layer of mucus that can trap and remove particles like dust and bacteria. The mucus is then moved out of the lungs by the action of cilia, tiny hair-like structures on the surface of epithelial cells. When the CFTR protein is defective, as in Cystic Fibrosis, chloride cannot properly exit the cells. This disrupts the osmotic gradient, preventing water from entering the mucus. As a result, the mucus becomes thick and sticky, making it difficult to clear and creating an ideal environment for bacterial infections, which leads to chronic inflammation and lung damage over time.</p>
                        <p>In the intestines, CFTR regulates fluid secretion into the digestive tract, which is vital for the normal movement of digestive contents. Without proper CFTR function, water movement is reduced, leading to thickened digestive fluids, blockages, and impaired nutrient absorption. This contributes to malnutrition and other digestive complications in Cystic Fibrosis patients. </p>
                        <p>By correcting the genetic mutations that lead to CFTR malfunction, such as the F508del mutation, we aim to restore the proper balance of chloride and water movement, which is crucial for preventing the buildup of mucus and ensuring normal function in both the respiratory and digestive systems.</p>
                    </div>
                </div>
            </Subesction>
            <Subesction title="F508del">
                <p>More than 1,000 mutations in the CFTR gene are responsible for the development of Cystic Fibrosis. The most common variant is the F508del mutation, found in approximately 70% of affected individuals of Caucasian descent in Canada, Northern Europe, and the United States<SupScrollLink label="1" />{/* ehem1 */}. It is estimated that around 90% of people with Cystic Fibrosis in Europe and those of European heritage carry at least one F508del allele<SupScrollLink label="2" />{/* ehem23 */}<sup>,</sup><SupScrollLink label="9" />{/* ehem24 */}. Research suggests that this mutation originated in Western Europe at least 5,000 years ago<SupScrollLink label="2" />{/* ehem23 */}.</p>
                <p>The F508del mutation involves the deletion of three nucleotides, "CTT," at position 508, which removes a phenylalanine
                    residue without causing a frameshift. This deletion impairs the kinetic and thermodynamic folding of the NBD1 domain
                    <SupScrollLink label="9" />{/* ehem24 */}. As a result, the CFTR protein not only misfolds but also experiences defects in trafficking
                    and premature degradation, leading to a reduction in its surface expression<SupScrollLink label="16" />{/* ehem25 */}. This specific mutation is particularly severe because it affects both the production and function of CFTR, resulting in a more aggressive disease course. Consequently, patients with the F508del mutation may respond better to CFTR modulators, which target these specific defects in protein folding and function.</p>
                <Collapsible id="statistical-distribution-collapsible" title="Statistical distribution of F508del mutations">
                    <p>In 2023, a comprehensive analysis was conducted to assess the distribution of mutations in the CFTR gene associated with Cystic Fibrosis (CF) worldwide. Data was sourced from two reputable databases: the <a href="https://cftr.iurc.montp.inserm.fr/cgi-bin/variant_list.cgi" title="CFTR-database-1" >CFTR Mutation Database</a> and the <a href="https://cftr2.org/mutations_history" title="CFTR-database-2" >CFTR2 Database</a>. </p>
                    <p>The results indicate the following distribution of CFTR mutation types and their frequencies in percent: </p>
                    <div className="row align-items-center">
                        <div className="col" >
                            <ul>
                                <li><b>Insertions (ins)</b>: 0.00088%</li>
                                <li><b>Deletions (del)</b>: 72.64%</li>
                                <li><b>Substitutions (subs)</b>: 23.84%</li>
                                <li><b>Insertions/Deletions (indel)</b>: 0,00485%</li>
                                <li><b>Other mutations</b>: 0,00370%</li>
                            </ul>
                        </div>
                        <div className="col" >
                            <PieChart chartoptions={pieoption} data={mutationdata}/>
                        </div>
                    </div>
                </Collapsible>
                <p>Overall, the statistical distribution of CFTR mutations reveals significant variations in mutation types and their frequencies worldwide, with deletions (72.64%) being the most common mutation type. This underscores the need for continued research and monitoring of these genetic variations to improve patient care and treatment strategies. CF not only affects the directly affected organs, but also many other areas of the body that are indirectly affected by the extent of the disease, e.g. through the condition of diseased organs. </p>
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col"></div>
                </div>
            </Subesction>
            <Section title="References">
                <BibtexParser bibtexSources={descriptionSources}/>
            </Section>

        </>
    )
}