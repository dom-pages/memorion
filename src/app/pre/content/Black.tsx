'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Black.module.css';

export default function Black() {
  const [step, setStep] = useState<'age' | 'name' | 'loading' | 'result'>('age');
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [percentage, setPercentage] = useState(0);
  const router = useRouter();

  const handleAgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ageNum = parseInt(age);
    if (!age || ageNum < 8 || ageNum > 110) {
      alert('Please enter a valid age between 8 and 110 years to continue your spiritual journey.');
      return;
    }
    setStep('name');
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || name.length < 2) {
      alert('Please enter a valid name to discover your guardian angel.');
      return;
    }
    setStep('loading');
    startLoadingAnimation();
  };

  const startLoadingAnimation = () => {
    let currentPercentage = 0;
    const interval = setInterval(() => {
      currentPercentage += 2;
      if (currentPercentage >= 100) {
        clearInterval(interval);
        setTimeout(() => setStep('result'), 500);
      }
      setPercentage(currentPercentage);
    }, 80);
  };

  const handleManifest = () => {
    // Redirect to health page (will show BLACK or WHITE based on ContentFilter)
    // The cat_valid cookie is preserved in same domain navigation
    router.push('/health');
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
      `}</style>
      <div className={styles.body}>
        <div className={styles.floatingParticles}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={styles.particle} style={{ left: `${(i + 1) * 15}%` }} />
          ))}
        </div>

        <div className={styles.container}>
          {step === 'age' && (
            <>
              <h1 className={styles.title}>The Wealth Angel Reveals When You Will Become Rich!</h1>
              
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '50%' }} />
                </div>
              </div>
              
              <p className={styles.description}>
                Discover your <span className={styles.highlight}>Wealth Angel</span>, through your date of birth...
              </p>
              
              <div className={styles.angelsContainer}>
                <div className={styles.angelCard}>
                  <img src="/images/Raphael.png" className={styles.angelImage} alt="Raphael" />
                  <div className={styles.angelName}>Raphael</div>
                </div>
                <div className={styles.angelCard}>
                  <img src="/images/miguel3.png" className={styles.angelImage} alt="Michael" />
                  <div className={styles.angelName}>Michael</div>
                </div>
                <div className={styles.angelCard}>
                  <img src="/images/Gabriel.png" className={styles.angelImage} alt="Gabriel" />
                  <div className={styles.angelName}>Gabriel</div>
                </div>
              </div>
              
              <h2 className={styles.question}>What is your age?</h2>
              
              <form onSubmit={handleAgeSubmit}>
                <div className={styles.inputContainer}>
                  <input
                    type="number"
                    className={styles.ageInput}
                    placeholder="Your age..."
                    min="8"
                    max="110"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>
                
                <button type="submit" className={styles.submitBtn}>
                  ✨ Reveal My Answer ✨
                </button>
              </form>
            </>
          )}

          {step === 'name' && (
            <>
              <h1 className={styles.title}>The Wealth Angel Reveals When You Will Become Rich!</h1>
              
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '100%' }} />
                </div>
              </div>
              
              <h2 className={styles.question}>What is your name?</h2>
              
              <form onSubmit={handleNameSubmit}>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    className={styles.ageInput}
                    placeholder="Your name..."
                    maxLength={50}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <button type="submit" className={styles.submitBtn}>
                  ✨ Discover My Angel ✨
                </button>
              </form>
            </>
          )}

          {step === 'loading' && (
            <div className={styles.loadingContent}>
              <h1 className={styles.loadingTitle}>🔮 Analyzing Your Response... 🔮</h1>
              
              <div className={styles.mysticalCircle}>
                <svg className={styles.progressRing} width="200" height="200">
                  <circle className={styles.progressRingBg} cx="100" cy="100" r="90" />
                  <circle
                    className={styles.progressRingFill}
                    cx="100"
                    cy="100"
                    r="90"
                    strokeDasharray="565.48"
                    strokeDashoffset={565.48 - (percentage / 100) * 565.48}
                  />
                </svg>
                <div className={styles.percentageText}>{percentage}%</div>
              </div>
              
              <p className={styles.loadingMessage}>
                {percentage < 50
                  ? 'Connecting with the celestial energies...'
                  : percentage < 80
                  ? 'Consulting the angelic realm...'
                  : 'Revelation complete!'}
              </p>
            </div>
          )}

          {step === 'result' && (
            <div className={styles.resultContent}>
              <h1 className={styles.resultTitle}>
                Incredible! {name.toUpperCase()}, your guardian angel is{' '}
                <span className={styles.highlight}>ARCHANGEL MICHAEL!</span>
              </h1>
              
              <div className={styles.angelResultImage}>
                <img
                  src="/images/miguel3.png"
                  className={styles.resultAngelImg}
                  alt="Archangel Michael"
                />
              </div>
              
              <p className={styles.angelDescription}>
                Leader of the celestial army, his song, the most intense, can perform financial miracles in less than 24 hours.
              </p>
              
              <p className={styles.callToAction}>
                Click the Button Below to hear your Angel's song!
              </p>
              
              <button className={styles.manifestBtn} onClick={handleManifest}>
                <span className={styles.playIcon}>▶</span>
                Click Here to Manifest with Archangel Michael
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
