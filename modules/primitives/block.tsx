import { ReactNode } from "react";

export type BlockDirection = 'ltr' | 'rtl'

type BlockProps = {
    text: string
    asset?: ReactNode
    dir?: BlockDirection
    bg?: string
}

export function Block({ text, asset, dir = 'ltr', bg }: BlockProps) {
  return (
    <section className='container' style={{ backgroundColor: bg }}>
        <section className={`content ${dir === 'ltr' ? 'left' : 'right'}`}>
            {asset}
            <p className={`text ${dir === 'ltr' ? 'text-left' : 'text-right'}`}>{text}</p>
        </section>
        <style jsx>{`
            .text {
                max-width: 600px;
            }
            .text-left {
                margin-left: 1rem;
            }
            .text-right {
                margin-right: 1rem;
            }
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                padding: 1rem 2rem;
                height: 50vh;
            }
            .content {
                display: flex;
                align-items: center;
                font-size: 1.3rem;
                color: #fff;
                text-shadow: 0 1px 0.1rem rgba(0, 0, 0, 0.35);
            }
            .right {
                text-align: right;
                flex-direction: row-reverse;
            }
        `}</style>
    </section>
  );
}