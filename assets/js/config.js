const project_name = `Workshop for Neural Representation Learning for Robot Manipulation`
const proj_small_caps = `<span class="small-caps">NeuRL-RMW</span>: `
const conference_details = ['CoRL 2023', 'https://www.corl2023.org/', 'Muse 5', 'assets/images/corl23_logo.png']
const workshop_date = `November 6, 2023`

const talk_speaker_details = {
  'ss': ['Shuran Song', './assets/images/talks/shuran_song.jpg', 'Assistant Professor', 'Stanford University', 'https://shurans.github.io/', '', ''],
  'dh': ['David Held', './assets/images/talks/david_held.jpg', 'Associate Professor', 'Carnegie Mellon University', 'http://davheld.github.io', 'Neural Object Representations for Grasping and Manipulation', 'We explore how robots can learn to reason about objects in a flexible manner using neural object representations.  First, we explore how to perform planning of long-horizon deformable object manipulation using spatial and temporal abstractions. Our method can solve sequential deformable object manipulation tasks in the real world, which require combining multiple tool-use skills such as cutting, pushing, and spreading dough with a roller.  We also explore how to formulate grasp learning as a neural field, by learning to predict a distance to a continuous manifold of valid grasps for an object. This grasp distance cost can be jointly optimized with other costs such as trajectory smoothness and collision avoidance. Overall, our work presents an approach to neural object representations that is flexible for use in a variety of manipulation settings.'],
  'gc': ['Georgia Chalvatzaki', './assets/images/talks/Georgia-Chalvatzaki.jpg', 'Full Professor', 'TU Darmstadt', 'https://irosalab.com/people/georgia-chalvatzaki/', '', ''],
  'pf': ['Pete Florence', './assets/images/talks/pete-florence.png', 'Senior Research Scientist', 'Google Deepmind', 'https://www.peteflorence.com', '', ''],
  'cp': ['Chris Paxton', './assets/images/talks/chris-paxton.jpeg', 'Research Scientist', 'Meta AI', 'https://cpaxton.github.io', '', ''],
  'cj': ['Chad Jenkins', './assets/images/talks/chad_jenkins.jpg', 'Professor', 'University of Michigan', 'https://robotics.umich.edu/profile/chad-jenkins', '', ''],
}

const organizers_details = [
  ['Karthik Desingh', 'assets/images/organizers/karthik_desingh.jpeg', 'Assistant Professor', 'University of Minnesota, Twin Cities', 'https://karthikdesingh.com'],
  ['Changhyun Choi', 'assets/images/organizers/Changhyun_Choi.jpg', 'Assistant Professor', 'University of Minnesota, Twin Cities', 'https://cse.umn.edu/ece/changhyun-choi'],
  ['Yu Xiang', 'assets/images/organizers/Yu_Xiang.jpg', 'Assistant Professor', 'The University of Texas at Dallas', 'https://yuxng.github.io'],
  ['Jishnu Jaykumar Padalunkal', 'assets/images/organizers/Jishnu-Jaykumar-Padalunkal.jpg', 'PhD Student', 'The University of Texas at Dallas', 'https://jishnujayakumar.github.io'],
  ['Ninad Khargonkar', 'assets/images/organizers/Ninad-Khargonkar.jpg', 'PhD Student', 'The University of Texas at Dallas', 'https://kninad.github.io'],
  ['Sai Haneesh Allu', 'assets/images/organizers/Sai-Haneesh-Allu.webp', 'PhD Student', 'The University of Texas at Dallas', 'https://www.linkedin.com/in/sai-haneesh-allu'],
  ['Alireza Rezazadeh', 'assets/images/organizers/Alireza-Rezazadeh.png', 'PhD Student', 'University of Minnesota, Twin Cities', 'https://www.alireza.page'],
]

const accepted_presentations = [
  ['Jad Abou-Chakra', 'https://au.linkedin.com/in/jadchakra', 'assets/images/ppt-talks/Jad-Abou-Chakra.jpeg', 'PhD Student', 'Queensland University of Technology', 'Physically Embodied Gaussian Splatting: Embedding Physical Priors into a Visual 3D World Model For Robotics', 'Coming Soon...', 'Spotlight', '9:30 - 9:40'],
  ['Ankit Goyal', 'https://imankgoyal.github.io/', 'assets/images/ppt-talks/Ankit-Goyal.png', 'Research Scientist', 'NVIDIA', 'RVT: Robotic View Transformer for 3D Object Manipulation', 'Coming Soon...', 'Spotlight', '9:40 - 9:50'],
  ['Yixuan Huang', 'https://robot-learning.cs.utah.edu/yixuanh', 'assets/images/ppt-talks/Yixuan-Huang.png', 'PhD Student', 'University of Utah', 'Reasoning and Planning about Unobserved Objects with Memory Models', 'Coming Soon...', 'Spotlight', '9:50 - 10:00'],
  ['Carolina Higuera', 'https://carolinahiguera.github.io/', 'assets/images/ppt-talks/Carolina-Higuera.png', 'PhD Student', 'University of Washington', 'Perceiving Extrinsic Contacts from Touch Improves Learning Insertion Policies', 'Coming Soon...', 'Spotlight', '10:00 - 10:10'],
  ['Kushal Kedia', 'https://kushal2000.github.io/', 'assets/images/ppt-talks/Kushal-Kedia.png', 'PhD Student', 'Cornell University', 'Interactive Modeling of Human-Intent for Collaborative Manipulation', 'Coming Soon...', 'Spotlight', '10:10 - 10:20'],
  ['Stanley Lewis', 'https://www.linkedin.com/in/stanlew7531', 'assets/images/ppt-talks/Stanley-Lewis.jpg', 'PhD Student', 'University of Michigan Robotics Department', 'Object See, Robot Do: Language & Object Conditioned Affordance Wayfield Based Manipulation', 'Coming Soon...', 'Spotlight', '10:20 - 10:30'],
  ['Sudeep Dasari', 'https://sudeepdasari.github.io/', 'assets/images/ppt-talks/Sudeep-Dasari.png', 'PhD Student', 'Carnegie Mellon University', 'An Unbiased Look at Datasets for Visuo-Motor Pre-Training', 'Coming Soon...', 'Spotlight', '14:30 - 14:40'],
  ['Shuo Cheng', 'https://sites.google.com/view/shuocheng', 'assets/images/ppt-talks/Shuo-Cheng.jpg', 'PhD Student', 'Georgia Institute of Technology', 'Multi-Step Manipulation Planning with Neural Object Descriptors', 'Coming Soon...', 'Spotlight', '14:40 - 14:50'],
  ['Xingyu Lin', 'https://xingyu-lin.github.io/', 'assets/images/ppt-talks/Xingyu-Lin.png', 'PostDoc', 'University of California, Berkeley', 'Generalizable Manipulation with Large Internet Data and Small Robot Data', 'Coming Soon...', 'Spotlight', '14:50 - 15:00'],
  ['Zhenyu Jiang', 'https://zhenyujiang.me/', 'assets/images/ppt-talks/Zhenyu-Jiang.jpg', 'PhD Student', 'The University of Texas at Austin', 'Doduo: Dense Visual Correspondence from Unsupervised Semantic-Aware Flow', 'Coming Soon...', 'Spotlight', '15:00 - 15:10'],
  ['Leon Kim', 'https://www.grasp.upenn.edu/people/leon-kim/', 'assets/images/ppt-talks/Leon-Kim.jpg', 'PhD Student', 'University of Pennsylvania', 'Vision-Based Contact Localization Without Touch or Force Sensing', 'Coming Soon...', 'Spotlight', '15:10 - 15:20'],
  ['Shangjie Xue', '#', 'https://bulma.io/images/placeholders/128x128.png', 'PhD Student', 'Georgia Institute of Technology', 'Neural Field Dynamics Model for Granular Object Piles Manipulation', 'Coming Soon...', 'Spotlight' , '15:20 - 15:30'], // poster, hence ''
  // ["FullName-1", "#", "", "Designation", "Affiliation", "Presentation Title", "Spotlight"],
  // ["FullName-2", "#", "", "Designation", "Affiliation", "Presentation Title", ""],
]

const org_affiliation_logos = [
  'assets/images/affiliation-logos/um-logo.png',
  'assets/images/affiliation-logos/utd-logo.png',
]



// event-alias, time slot, event name, person alias from talk_speaker_details, ppt mode
// last two are for inv-talk event-alias entries
const schedule = [
  ['intro', '08:45 - 09:00', 'Introduction'],
  ['inv-talk', '09:00 - 09:30', 'Invited Talk', 'dh', 'in-person'],
  ['spot-ppt', '09:30 - 10:30', 'Spotlight Presentations'],
  ['coffee-break', '10:30 - 11:30', '<span class="bold has-text-info">Spotlight Posters (Muse 1)</span> & Coffee Break'],
  ['inv-talk', '11:30 - 12:00', 'Invited Talk', 'cp', 'in-person'],
  ['inv-talk', '12:00 - 12:30', 'Invited Talk',  'gc', 'in-person'],
  ['lunch-break', '12:30 - 14:00', 'Lunch Break'],
  ['inv-talk', '14:00 - 14:30', 'Invited Talk', 'pf', 'online'],
  ['spot-ppt', '14:30 - 15:30', 'Spotlight presentations'],
  ['coffee-break', '15:30 - 16:00', 'Coffee Break'],
  ['inv-talk', '16:00 - 16:30', 'Invited Talk', 'ss', 'in-person'],
  ['inv-talk', '16:30 - 17:00', 'Invited Talk', 'cj', 'in-person'],
  ['disc', '17:00 - 17:05', 'Conclusion'], 
]
