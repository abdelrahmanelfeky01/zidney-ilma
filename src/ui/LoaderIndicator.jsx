const css = `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:ital@0;1&family=Scheherazade+New:wght@400;700&display=swap');

  .qloader-root {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #faf6ee;
    overflow: hidden;
  }

  .qloader-root::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(ellipse at 30% 20%, rgba(196,160,80,0.08) 0%, transparent 55%),
      radial-gradient(ellipse at 70% 80%, rgba(139,110,50,0.07) 0%, transparent 55%);
    pointer-events: none;
  }

  .qloader-corner {
    position: absolute;
    width: 110px;
    height: 110px;
    opacity: 0.18;
  }
  .qloader-corner--tl { top: 0; left: 0; }
  .qloader-corner--tr { top: 0; right: 0; transform: scaleX(-1); }
  .qloader-corner--bl { bottom: 0; left: 0; transform: scaleY(-1); }
  .qloader-corner--br { bottom: 0; right: 0; transform: scale(-1); }

  .qloader-body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    animation: qFadeIn 1s ease both;
  }

  @keyframes qFadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .qloader-ring {
    position: relative;
    width: 130px;
    height: 130px;
  }

  .qloader-svg {
    width: 100%;
    height: 100%;
    animation: qRotate 6s linear infinite;
    transform-origin: center;
  }

  @keyframes qRotate {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  .qloader-arc-track {
    fill: none;
    stroke: #e8d9b0;
    stroke-width: 1.5;
  }

  .qloader-arc-fill {
    fill: none;
    stroke: #c4a050;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-dasharray: 280;
    stroke-dashoffset: 80;
  }

  .qloader-icon {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .qloader-bismillah {
    font-family: 'Scheherazade New', serif;
    font-size: 22px;
    color: #8b6e32;
    text-shadow: 0 1px 3px rgba(139,110,50,0.2);
    animation: qPulse 3s ease-in-out infinite;
    user-select: none;
    line-height: 1;
  }

  @keyframes qPulse {
    0%, 100% { opacity: 0.7; }
    50%       { opacity: 1; }
  }

  .qloader-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    opacity: 0.5;
  }

  .qloader-divider-line {
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c4a050);
  }
  .qloader-divider-line:last-child {
    background: linear-gradient(90deg, #c4a050, transparent);
  }

  .qloader-divider-diamond {
    width: 5px;
    height: 5px;
    background: #c4a050;
    transform: rotate(45deg);
  }

  .qloader-text {
    font-family: 'Amiri', serif;
    font-size: 18px;
    color: #6b4f1a;
    letter-spacing: 0.5px;
    text-align: center;
    animation: qTextBlink 2.5s ease-in-out infinite;
    user-select: none;
    margin: 0;
  }

  @keyframes qTextBlink {
    0%, 100% { opacity: 0.5; }
    50%       { opacity: 0.85; }
  }

  .qloader-dots {
    display: flex;
    gap: 8px;
    margin-top: -18px;
  }

  .qloader-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #c4a050;
    animation: qDotBounce 1.4s ease-in-out infinite;
  }

  .qloader-dot:nth-child(1) { animation-delay: 0s; }
  .qloader-dot:nth-child(2) { animation-delay: 0.2s; }
  .qloader-dot:nth-child(3) { animation-delay: 0.4s; }

  @keyframes qDotBounce {
    0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
    40%            { transform: scale(1.1); opacity: 1; }
  }
`;

function CornerOrnament() {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0 L80 0 L80 10 L10 10 L10 80 L0 80 Z" fill="#8b6e32" />
      <path d="M20 20 L60 20 L60 28 L28 28 L28 60 L20 60 Z" fill="#8b6e32" />
      <circle cx="70" cy="30" r="4" fill="#c4a050" />
      <circle cx="30" cy="70" r="4" fill="#c4a050" />
      <path d="M40 0 L40 12 M0 40 L12 40" stroke="#c4a050" strokeWidth="1.5" />
      <path
        d="M60 0 L60 8 M0 60 L8 60"
        stroke="#c4a050"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}

export default function LoaderIndicator({ message = "جارٍ التحميل" }) {
  return (
    <>
      <style>{css}</style>
      <div className="qloader-root" role="status" aria-label={message}>
        <div className="qloader-corner qloader-corner--tl">
          <CornerOrnament />
        </div>
        <div className="qloader-corner qloader-corner--tr">
          <CornerOrnament />
        </div>
        <div className="qloader-corner qloader-corner--bl">
          <CornerOrnament />
        </div>
        <div className="qloader-corner qloader-corner--br">
          <CornerOrnament />
        </div>

        <div className="qloader-body">
          <div className="qloader-ring">
            <svg className="qloader-svg" viewBox="0 0 130 130">
              <circle cx="65" cy="65" r="56" className="qloader-arc-track" />
              <circle cx="65" cy="65" r="56" className="qloader-arc-fill" />
            </svg>

            <div className="qloader-icon">
              <span className="qloader-bismillah">﷽</span>
            </div>
          </div>

          <div className="qloader-divider">
            <div className="qloader-divider-line" />
            <div className="qloader-divider-diamond" />
            <div className="qloader-divider-line" />
          </div>

          <p className="qloader-text">{message}</p>

          <div className="qloader-dots">
            <div className="qloader-dot" />
            <div className="qloader-dot" />
            <div className="qloader-dot" />
          </div>
        </div>
      </div>
    </>
  );
}
