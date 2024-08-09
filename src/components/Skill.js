import React from 'react'
import html from '../asset/html.png'
import css from '../asset/css.png'
import javasrc from '../asset/javascript.png'
import react from '../asset/react.png'
import tailwind from '../asset/tailwind.png'

const Skill = () => {
    return (
        <section className="w-full max-w-4xl mx-auto py-12 md:py-16">
            <div className="px-4 md:px-6">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">I have basic knowladge about</h2>

                </div>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                    <div className="flex flex-col items-center gap-3">
                        <div className="p-3">
                            <img src={html} alt="Skill Icon" className="w-8 h-8" />
                        </div>

                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-muted rounded-full p-3">
                            <img src={css} alt="Skill Icon" className="w-8 h-8" />
                        </div>

                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-muted rounded-full p-3">
                            <img src={javasrc} alt="Skill Icon" className="w-8 h-8" />
                        </div>

                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-muted rounded-full p-3">
                            <img src={react} alt="Skill Icon" className="w-8 h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill