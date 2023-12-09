import "./about.scss";
import {motion} from "framer-motion";
import {useState} from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const [translate, setTranslate] = useState(false);

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      animate="animate"
      whileInView="animate"
    >
      <motion.div className="aboutimg">
        <motion.img src="./hero.png" />
      </motion.div>
      <motion.div>
        <motion.p>
          {translate
            ? "I am a self-motivated individual who is disciplined and organized. Education is of great importance to me, and I am always open to learning. I enjoy keeping up with technological advancements and stay updated in this field. I believe having excellent communication skills is essential to succeed in the professional life. I actively participate as a team player in collaborative work environments. I possess strong stress management skills, and challenges have played a significant role in my personal development. I always do my best to succeed, and I am determined to overcome challenges. When faced with difficulties, I focus on the causes and solutions rather than the problems themselves. Collaboration, support, and self-sacrifice are values that I hold dear. I enjoy interacting with people and go the extra mile to assist others. Furthermore, I am passionate about my profession and dedicated to my work. I highly value nature, people, and especially my loved ones. These values not only motivate me in my personal life but also make my work more meaningful."
            : "Öğrenme tutkusu olan, azimli ve organize biriyim. Teknolojik gelişmeleri takip etmekten ve bu alanda güncel kalmaktan keyif alıyorum. Mükemmel iletişim becerilerinin profesyonel yaşamda başarılı olmak için gerekli olduğuna inanıyorum. İşbirlikçi çalışma ortamlarında aktif olarak ekip oyuncusu olarak katılırım. Güçlü stres yönetimi becerilerine sahibim ve zorluklar kişisel gelişimimde önemli bir rol oynamıştır. Her zaman başarmak için elimden gelenin en iyisini yaparım ve zorlukların üstesinden gelmeye kararlıyım. Zorluklarla karşılaştığımda, problemlerin kendisinden ziyade sebeplere ve çözümlere odaklanırım. İşbirliği, destek ve özveri benim önem verdiğim değerlerdir. İnsanlarla etkileşim kurmaktan ve başkalarına yardım etmek için fazladan çaba göstermekten zevk alıyorum. Ayrıca mesleğime tutkulu ve işime adanmış biriyim. Doğaya, insanlara ve özellikle aileme ve sevdiklerime büyük değer veriyorum. Bu değerler sadece kişisel hayatımda beni motive etmiyor, aynı zamanda işimi daha anlamlı kılıyor."}
        </motion.p>
        <motion.div className="buttons">
          <motion.button>
            <a
              href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFjYa48d1k&#x2F;view?utm_content=DAFjYa48d1k&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
              target="_blank"
              rel="opener"
            >
              Download CV
            </a>
          </motion.button>
          <button onClick={() => setTranslate(!translate)}>Translate</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;