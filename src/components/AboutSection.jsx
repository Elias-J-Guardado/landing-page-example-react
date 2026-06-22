function AboutSection() {
    return (
        <section className="px-12 py-16">
            <div className="text-center text-4xl mb-8">
                ¿Quienes somos?
            </div>
            <div className="p-2 flex justify-around items-center gap-8">
                <p className="text-left w-1/2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce volutpat tortor quam, sagittis scelerisque eros dignissim
                    in. Proin enim ex, posuere nec laoreet et, vestibulum sed erat.
                    Phasellus ac luctus quam, nec maximus ipsum. Maecenas nibh
                    nunc, facilisis ut sollicitudin ut, ultrices iaculis orci. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Nullam lacinia
                    tempor tortor eget posuere. Aenean erat leo, efficitur a felis sit
                    amet, porta finibus justo.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras urna enim, ullamcorper sed blandit at, 
                    malesuada sed orci. Nullam erat tellus, cursus in accumsan eu, dignissim eu augue. Pellentesque facilisis, 
                    sapien ac efficitur facilisis, orci dolor placerat urna, id vestibulum ex leo id dolor. Nullam sit amet 
                    lorem at quam imperdiet lacinia at eu lorem. Praesent ut turpis non diam pellentesque faucibus maximus non
                     magna. In id ex ac risus commodo pharetra. Aliquam faucibus velit neque, eget consectetur enim tincidunt eget. 
                     Integer nisl magna, tincidunt vel eros in, faucibus euismod ante.
                </p>
                <div>
                    <img className="rounded-full h-80 w-96" src="/dan-gold-N7RiDzfF2iw-unsplash.jpg" alt="dan-gold" />
                </div>
            </div>
        </section>
    )
}

export { AboutSection };