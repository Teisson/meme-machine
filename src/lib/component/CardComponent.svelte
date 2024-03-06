<script>
    export let content = {
        title: "Enhancing Digital Technologies",
        subtitle: "Mission and Vision",
        list: [{
            icon: 'gg-card-hearts',
            title: "Regulatory compliance",
            subtitle: "Ethical Privacy and AI",
            text: "Prioritizing regulatory compliance and ethical privacy, gives you the ability to develop effective and responsible AI-powered solutions. Conduct regular risk assessments. Use privacy-preserving techniques to protect the data of your clients and customers. Follow industry best practices such as the AI Ethics Guidelines to create transparent solutions that are safe and effective."
        }, {
            icon: 'gg-card-hearts',
            title: "Regulatory compliance",
            subtitle: "Ethical Privacy and AI",
            text: "Prioritizing regulatory compliance and ethical privacy, gives you the ability to develop effective and responsible AI-powered solutions. Conduct regular risk assessments. Use privacy-preserving techniques to protect the data of your clients and customers. Follow industry best practices such as the AI Ethics Guidelines to create transparent solutions that are safe and effective."
        },
    {
            icon: 'gg-card-hearts',
            title: "Regulatory compliance",
            subtitle: "Ethical Privacy and AI",
            text: "Prioritizing regulatory compliance and ethical privacy, gives you the ability to develop effective and responsible AI-powered solutions. Conduct regular risk assessments. Use privacy-preserving techniques to protect the data of your clients and customers. Follow industry best practices such as the AI Ethics Guidelines to create transparent solutions that are safe and effective."
        }]
    }

</script>

<section class='cards'>
    <article>
        <h2><h3>{content.subtitle} </h3>{content.title} </h2>
        {#each content.list as card}
        <div class='list'>
            <div class="icon {card.icon}"></div>
            <h4><h3>{card.subtitle} </h3>{card.title} </h4>
            <p class="card-text"> {card.text}</p>
        </div>
        {/each}
    </article>
</section>

<style>
      .cards {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        font-size: clamp(16px, 2vw, 24px);
    }

    .list {
        background-color: #fff;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin: 1rem;
        max-width: 100%;
        overflow: hidden;
    }

    .icon {
        display: block;
        width: 40px;
        height: 40px;
        margin-bottom: 1rem;
    }

    h3,
    h4 {
        all: reset;
        margin: 0;
        padding: 0;
        font-size: 1rem;
        line-height: 1;
    }

    @media (min-width: 768px) {
        .list h3,
        .list h4 {
            max-width: 600px;
        }
    }

    @media (max-width: 767px) {
        .list h3,
        .list h4 {
            max-width: 100%;
        }
    }

    .card-text {
        font-size: 0.9rem;
        line-height: 1.6;
        text-align: justify;
        width: 100%;
        max-width: 100%;
        min-width: 0;
        word-wrap: break-word;
    }

    h4 {
        font-size: 120%;
        font-weight: 400;
    }

    h3 {
        font-size: 80%;
        font-weight: 600;
    }

    h2 {
        font-size: 100%;
    }

    .icon {
        display: none;
    }

    p {
        padding: 0;
        margin: 0;
        margin-top: 1rem;
        max-width: 60ch;
        min-width: 30ch;
    }

    /* Applies to all sections that will act as grid containers */
    section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        justify-content: center;
        align-items: start;
        padding: 1rem;
    }

    /* Directly target all direct div children of section elements for grid items */
    section > div {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* Use attribute selectors if you need to target specific section elements as grid */
    section[data-grid='true'] {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        /* ... other styles ... */
    }

    /* Target specific divs inside the grid container if necessary */
    section[data-grid='true'] > div[data-grid-item='true'] {
        /* Grid item styles */
    }

    /* Responsive adjustments */
    @media (min-width: 1200px) {
        section {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (min-width: 768px) and (max-width: 1199px) {
        section {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 767px) {
        section {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 480px) {
        section {
            grid-template-columns: 1fr;
        }
    }
</style>
