<script>
    let dev = false;
    export let textObject = {
      main: "Better AI.",
      secondary: ["Better Applications.", "Better Prediction."],
      description:
        "Better data leads to more performant models. Performant models lead to faster deployment. And now with an extra sentence. Deliver value from your AI investments faster with better data.",
    };
  
    export let headerTitles = ["Real Super", "Real Time Monitoring", "Risk Management", "Strategy Optimisation"];
    let fullArray = [...textObject.secondary, textObject.main];
    let textSwivel = textObject.main;
    let i = 0;
    let pwidth = 0;

  
    setTimeout(() => {
      i++;
      textSwivel = fullArray[i];
      setInterval(() => {
        if (i >= fullArray.length) {
          i = 0;
        }
        textSwivel = fullArray[i];
        i++;
      }, 3150);
    }, 1200);
  
    let finalSentence = {
      intro: "",
      continue: "",
    };
  
    // function to extract 2 sentences from paragraph and return an object containing the first and second sentence in one key value, and the rest of the paragraph in the other key value
  
    function extractSentences(paragraph) {
      let sentences = paragraph.split(".");
  
      finalSentence = {
        intro: sentences[0] + "." + sentences[1] + ".",
        continue: sentences.slice(2).join("."),
      };
    }
    extractSentences(textObject.description);
  
    $: pwidth = pwidth;
    $: finalSentence = finalSentence;
  </script>
  
  <section class:dev={dev} style="color:white;">
    <div class="outer-headings">
      <div class="inner-headings">
        <span
          >{#each headerTitles as title}
            {title}<br />
          {/each}
        </span>
      </div>
      <h1>
        Powered by AI
      </h1>
    </div>
  
    <p class="descriptor" bind:offsetWidth={pwidth}>
      {finalSentence.intro}
      {#if pwidth > 720}<br />{/if}{finalSentence.continue}
    </p>
    <slot/>
  </section>

  
  <style>

    section.dev > * {
        border: 1px solid white;
    }

    section {
      background-color:black;
      font-size: clamp(0.9rem, 2vw, 1.1rem);
      padding: 1rem;
      margin-bottom: 5vh;
      margin:0 auto;
      padding-top:2rem;
      padding-bottom:0rem;
      min-height: clamp(600px,90vh, 5rem);
      max-width: 900px; position:relative;z-index:10;  }
  
    hr {margin-top:2rem;
      margin-bottom: 3rem;
    }
  
    a {
      background-color: black;
      border: 1px solid var(--accentblue);
      padding: 1rem 1rem 1rem 1rem;
      border-radius: 0.25rem;
      color: white;
      place-self:center;
    }

    a:hover{background: var(--deskgradient)}
  
    .outer-headings {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
    }
  
    h1 {
      font-size: clamp(1rem, 5vw, 3.5rem);
      background-color: #f3ec78;
      background-image: linear-gradient(45deg, #18dad4, #40cd11);
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
      font-weight: 400;
      margin-bottom:1rem;
    }

  
    .inner-headings {
      border: 0px solid #ddd;
      height: 4.5rem;
      line-height: 5rem;
      font-size: clamp(1rem, 5vw, 3.5rem);
           overflow: hidden;
      font-weight: 400;
      
    }
  
    .inner-headings span {
      position: relative;
      color: white;
      animation: animation 12s ease infinite;
    }
    .descriptor {
        display: flex;
        align-items: center;
        justify-content: center;
    }
   
  
    @keyframes animation {
      0%,
      100% {
        top: 0;  opacity:0;
      }
      20% {
        top: 0; opacity:1;
      }
      25% {
        top: -5rem; opacity:1;
      }
      45% {
        top: -5rem; opacity:1;
      }
      50% {
        top: -10rem; opacity:1;
      }
      70% {
        top: -10rem; opacity:1;
      }
      75% {
        top: -15rem;
        opacity:1;
      }
      90%{
          top: -15rem;
          opacity:1;
      }
  
     99%{
          top: -15rem;
          opacity:0;
     }
   
    }
   
  
  
  
  </style>
  