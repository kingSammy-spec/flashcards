let cardsData = [
    {
        id: 1,
        q: "What is the capital of France?",
        a: "Paris",
        info: "Paris is the capital and most populous city of France, with an official estimated population of 2,102,650 inhabitants as of 1 January 2023."
    },
    {
        id: 2,
        q: "What is 2 + 2?",
        a: "4",
        info: "In mathematics, 2+2=4 is a basic arithmetic operation. In literature, it is often used as a symbol of objective truth vs. totalitarian manipulation (1984)."
    },
    {
        id: 3,
        q: "What is the largest planet?",
        a: "Jupiter",
        info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined."
    },
    {
        id: 4,
        q: "Who wrote 'Romeo and Juliet'?",
        a: "William Shakespeare",
        info: "William Shakespeare was an English playwright, poet, and actor. He is widely regarded as the greatest writer in the English language and the world's greatest dramatist."
    }
];

let currentIndex = 0;
const card = document.getElementById('card');
const frontText = document.getElementById('front-text');
const backText = document.getElementById('back-text');
const progressIndicator = document.getElementById('progress-indicator');

function updateCard() {
    if (!card) return;
    card.classList.remove('flipped');
    
    setTimeout(() => {
        const item = cardsData[currentIndex];
        if (frontText) frontText.innerText = item.q;
        if (backText) backText.innerText = item.a;
        if (progressIndicator) {
            progressIndicator.innerText = `Card ${currentIndex + 1} of ${cardsData.length}`;
        }
    }, 150);
}

if (card) {
    card.addEventListener('click', (e) => {
        if (e.target.id === 'btn-open-deep-dive') return;
        card.classList.toggle('flipped');
    });
}

document.getElementById('flip-btn')?.addEventListener('click', () => {
    card.classList.toggle('flipped');
});

document.getElementById('next-btn')?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cardsData.length;
    updateCard();
});

document.getElementById('prev-btn')?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
    updateCard();
});

const STUDY_CAMPAIGNS = [
    {
        title: 'Duolingo: Language Academy',
        desc: 'Master any language in 3 months. Our smart spaced repetition coach adapts to your pace.',
        promo: 'CODE "ACADEMY20" FOR 20% DISCOUNT',
        img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Princeton SAT Prep Bootcamp',
        desc: 'Crush your SAT examinations with limited-time expert study packages. 40% off courses.',
        promo: 'CODE "PRINCETON40" FOR 40% SAVE',
        img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Brilliant: Interactive Logic',
        desc: 'Learn physics, mathematics, computer science, and logic programmatically with quick quizzes.',
        promo: 'GET 25% OFF BRILLIANT YEAR: BRILLIANT25',
        img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Skillshare: Creative Studies',
        desc: 'Explore 30,000+ courses on UI design, digital painting, WebGL shaders, and typography.',
        promo: 'CREATIVE MONTH FREE ACCESS: CREATIVECLASS',
        img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'AnkiMobile Spaced Sync',
        desc: 'Synchronize study decks across desktop and mobile instantly with smart interval algorithms.',
        promo: 'FREE SPACING ALGORITHM: ANKISYNCFREE',
        img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Coursera Project Certificates',
        desc: 'Earn career credentials from Google, IBM, and Stanford to accelerate your resume path.',
        promo: 'CLAIM 10% CERTIFICATE: COURSERAPRO',
        img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&h=200&q=80'
    }
];

let adsDisabled = false;
let interactionCount = 0;

// Inspect flippable card study deep dives modal popup
function openDetail() {
    const item = cardsData[currentIndex];
    const modal = document.getElementById('detailModal');
    const body = document.getElementById('modalBody');
    if (!modal || !body) return;

    body.innerHTML = `
        <div class="modal-hero" style="background:url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&h=600&q=80') center/cover; height:260px; border-radius:16px; margin-bottom:2rem; box-shadow:0 10px 25px rgba(0,0,0,0.05); border:1px solid var(--border);"></div>
        <h2 style="font-size:2.2rem; font-family:'Space Grotesk',sans-serif; font-weight:700; margin:1rem 0; color:#090b0e; letter-spacing:-0.5px;">Deep Dive Study</h2>
        <p style="font-size:1.4rem; color:var(--primary); font-weight:700; margin-bottom:1rem; word-break:break-all;">Question: ${item.q}</p>
        <p style="font-size:0.95rem; color:#444; line-height:1.6; margin-bottom:2rem;">${item.info || 'No advanced explanations stored for this study deck. Update variables below.'}</p>
        
        <div class="extensive-info" style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; margin-bottom:2rem;">
            <div style="background:#fafafa; border:1px solid rgba(0,0,0,0.06); padding:1.8rem; border-radius:16px;">
                <h3 style="margin-bottom:0.8rem; font-size:1.1rem; color:#090b0e; font-family:'Space Grotesk',sans-serif;">Performance Index</h3>
                <ul style="list-style:none; padding:0; color:#444; font-size:0.88rem; display:flex; flex-direction:column; gap:0.4rem;">
                    <li>🌍 Spaced repetition interval: 2 days</li>
                    <li>📱 Retention score: 94%</li>
                    <li>🔍 Difficulty scale: Medium</li>
                </ul>
            </div>
            <div style="background:#fafafa; border:1px solid rgba(0,0,0,0.06); padding:1.8rem; border-radius:16px;">
                <h3 style="margin-bottom:0.8rem; font-size:1.1rem; color:#090b0e; font-family:'Space Grotesk',sans-serif;">Repetition History</h3>
                <p style="font-size:0.88rem; color:#444; line-height:1.5;">Total trials: 14 times<br>Correct attempts: 12 times<br>Average recall time: 1.8 seconds</p>
            </div>
        </div>
    `;
    
    // Choose details modal sponsor campaign
    const detailCampaign = STUDY_CAMPAIGNS[currentIndex % STUDY_CAMPAIGNS.length];
    const detailImg = document.getElementById('detail-ad-img');
    const detailTitle = document.getElementById('detail-ad-title');
    const detailDesc = document.getElementById('detail-ad-desc');
    
    if (detailImg) detailImg.src = detailCampaign.img;
    if (detailTitle) detailTitle.innerText = detailCampaign.title;
    if (detailDesc) detailDesc.innerText = detailCampaign.desc;

    modal.style.display = 'flex';
}

document.getElementById('btn-open-deep-dive')?.addEventListener('click', (e) => {
    e.stopPropagation();
    openDetail();
});

document.querySelector('.close-modal')?.addEventListener('click', () => {
    document.getElementById('detailModal').style.display = 'none';
});

window.onclick = (event) => {
    const modal = document.getElementById('detailModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


// --- 2. Custom Spaced Study Deck Creator ---
const deckModal = document.getElementById('deckModal');
const btnOpenDeckCreator = document.getElementById('btn-open-deck-creator');
const btnCloseDeckModal = document.getElementById('btn-close-deck-modal');

if (btnOpenDeckCreator) {
    btnOpenDeckCreator.addEventListener('click', () => {
        if (deckModal) deckModal.style.display = 'flex';
    });
}

if (btnCloseDeckModal) {
    btnCloseDeckModal.addEventListener('click', () => {
        if (deckModal) deckModal.style.display = 'none';
    });
}

function submitCustomCard() {
    const q = document.getElementById('deck-question-input').value.trim();
    const a = document.getElementById('deck-answer-input').value.trim();

    if (!q || !a) {
        alert('❌ Please supply study deck variables.');
        return;
    }

    const newLink = {
        id: cardsData.length + 1,
        q: q,
        a: a,
        info: "Custom card initialized programmatically by the user. Integrated inside spaced repetition."
    };

    if (deckModal) deckModal.style.display = 'none';
    document.getElementById('custom-deck-form').reset();

    // Trigger interstitial skip-ad overlay before updating
    showSessionInterstitialAd(() => {
        cardsData.push(newLink);
        currentIndex = cardsData.length - 1;
        updateCard();
    });
}


// --- 3. Programmatic Rotating Sponsor Banner ---
let bannerIndex = 0;
function startRotatingBanner() {
    const banner = document.getElementById('floating-ad-banner');
    if (!banner || adsDisabled) return;

    const campaign = STUDY_CAMPAIGNS[bannerIndex];
    bannerIndex = (bannerIndex + 1) % STUDY_CAMPAIGNS.length;

    banner.innerHTML = `
        <div class="ad-sponsor-container">
            <img src="${campaign.img}" alt="${campaign.title}">
            <div class="banner-content">
                <p>Curated Campaign Sponsor</p>
                <strong>${campaign.title}</strong>
            </div>
        </div>
        <div class="banner-actions">
            <button class="btn-banner-action" id="btn-banner-claim">Claim Resource</button>
            <button class="btn-banner-close" id="btn-banner-close">×</button>
        </div>
    `;

    banner.style.display = 'flex';

    // Hook listeners
    document.getElementById('btn-banner-claim')?.addEventListener('click', () => {
        alert(`🎉 Copied coupon code: "${campaign.promo.split('"')[1] || 'ACADEMY20'}" to clipboard!`);
        window.open('#', '_blank');
    });

    document.getElementById('btn-banner-close')?.addEventListener('click', () => {
        banner.style.display = 'none';
    });
}

// Initial banner launch and rotate every 10 seconds
setTimeout(() => {
    startRotatingBanner();
    setInterval(startRotatingBanner, 10000);
}, 2000);


// --- 4. Decoupled Timed Interstitial Countdown System ---
let interstitialCallback = null;
let interstitialTimer = null;
const interstitialModal = document.getElementById('interstitialModal');
const btnSkipAd = document.getElementById('btn-skip-ad');
const btnClaimAd = document.getElementById('btn-claim-ad');

function showSessionInterstitialAd(onClosed) {
    if (adsDisabled || !interstitialModal) {
        onClosed();
        return;
    }
    
    interstitialCallback = onClosed;
    
    // Choose a random campaign
    const campaign = STUDY_CAMPAIGNS[Math.floor(Math.random() * STUDY_CAMPAIGNS.length)];
    const imgEl = document.getElementById('interstitial-ad-img');
    const titleEl = document.getElementById('interstitial-ad-title');
    const descEl = document.getElementById('interstitial-ad-desc');
    const promoEl = document.getElementById('interstitial-ad-promo');
    
    if (imgEl) imgEl.src = campaign.img;
    if (titleEl) titleEl.innerText = campaign.title;
    if (descEl) descEl.innerText = campaign.desc;
    if (promoEl) promoEl.innerText = campaign.promo;

    interstitialModal.style.display = 'flex';
    
    btnSkipAd.disabled = true;
    btnSkipAd.style.opacity = '0.4';
    btnSkipAd.style.cursor = 'not-allowed';
    btnSkipAd.innerText = 'Skip Ad in 5s';
    
    let count = 5;
    if (interstitialTimer) clearInterval(interstitialTimer);
    
    interstitialTimer = setInterval(() => {
        count--;
        if (count > 0) {
            btnSkipAd.innerText = `Skip Ad in ${count}s`;
        } else {
            clearInterval(interstitialTimer);
            btnSkipAd.innerText = 'Skip Ad';
            btnSkipAd.disabled = false;
            btnSkipAd.style.opacity = '1';
            btnSkipAd.style.cursor = 'pointer';
        }
    }, 1000);
}

if (btnSkipAd) {
    btnSkipAd.addEventListener('click', () => {
        interstitialModal.style.display = 'none';
        
        // Trigger success synchronization celebration modal!
        const celebrationModal = document.getElementById('celebrationModal');
        if (celebrationModal) {
            celebrationModal.style.display = 'flex';
        } else if (interstitialCallback) {
            interstitialCallback();
        }
    });
}

if (btnClaimAd) {
    btnClaimAd.addEventListener('click', () => {
        alert('🎉 Academic study discount whitelisted to active session!');
        interstitialModal.style.display = 'none';
        
        const celebrationModal = document.getElementById('celebrationModal');
        if (celebrationModal) {
            celebrationModal.style.display = 'flex';
        } else if (interstitialCallback) {
            interstitialCallback();
        }
    });
}

// Celebration close handler
const btnCloseCelebrationModal = document.getElementById('btn-close-celebration');
if (btnCloseCelebrationModal) {
    btnCloseCelebrationModal.addEventListener('click', () => {
        document.getElementById('celebrationModal').style.display = 'none';
        if (interstitialCallback) {
            interstitialCallback();
            interstitialCallback = null;
        }
    });
}


// --- 5. Scarcity Upgrade Tier & Timer Engine ---
let upgradeTimer = null;
const premiumUpgradeModal = document.getElementById('premiumUpgradeModal');

function triggerUpgradeModal() {
    if (adsDisabled || !premiumUpgradeModal) return;
    
    premiumUpgradeModal.style.display = 'flex';
    let duration = 600; // 10 minutes
    const countdownEl = document.getElementById('scarcity-countdown');

    if (upgradeTimer) clearInterval(upgradeTimer);

    upgradeTimer = setInterval(() => {
        duration--;
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        if (countdownEl) {
            countdownEl.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        if (duration <= 0) {
            clearInterval(upgradeTimer);
            premiumUpgradeModal.style.display = 'none';
        }
    }, 1000);
}

// Trigger upgrade modal after 40 seconds of active card flips
setTimeout(triggerUpgradeModal, 40000);

document.getElementById('btn-skip-upgrade')?.addEventListener('click', () => {
    premiumUpgradeModal.style.display = 'none';
    clearInterval(upgradeTimer);
});

// Acknowledge upgrade purchase (disable ads)
document.getElementById('btn-upgrade-now')?.addEventListener('click', () => {
    alert('🏆 Welcome to CardRecall Elite! AI Repetitions unlocked, learning sponsors deactivated.');
    adsDisabled = true;
    premiumUpgradeModal.style.display = 'none';
    const banner = document.getElementById('floating-ad-banner');
    if (banner) banner.style.display = 'none';
    clearInterval(upgradeTimer);
});


// --- 6. Exit Intent & Mock Ad-Blocker Overlays ---
let exitIntentShown = false;
document.addEventListener("mouseout", (e) => {
    if (e.clientY < 0 && !exitIntentShown && !adsDisabled) {
        exitIntentShown = true;
        const exitModal = document.getElementById("exitIntentModal");
        if (exitModal) exitModal.style.display = "flex";
    }
});

document.getElementById("closeExitIntent")?.addEventListener("click", () => {
    document.getElementById("exitIntentModal").style.display = "none";
});
document.getElementById("declineExitIntent")?.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("exitIntentModal").style.display = "none";
});

// Trigger Mock ad blocker Whitelist popups after 5 seconds
setTimeout(() => {
    if (adsDisabled) return;
    const isAdBlockerActive = Math.random() < 0.15; // 15% simulation chance
    if (isAdBlockerActive) {
        const adBlockModal = document.getElementById("adBlockModal");
        if (adBlockModal) adBlockModal.style.display = "flex";
    }
}, 5000);

document.getElementById('btn-adblock-premium')?.addEventListener('click', () => {
    alert('🏆 Pro Activated! Ad banners disabled.');
    adsDisabled = true;
    document.getElementById("adBlockModal").style.display = "none";
    const banner = document.getElementById('floating-ad-banner');
    if (banner) banner.style.display = 'none';
});

// Initial compile
window.onload = () => {
    updateCard();
};
