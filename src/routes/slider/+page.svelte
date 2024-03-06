<script>
    import SliderComponent from '$lib/component/SliderComponent.svelte';
    export let textObject = {
      main: "Better Components",
      secondary: ["Better Wow.", "Better GREED."],
      description:
        "Better data leads to more performant models. Performant models lead to faster deployment. And now with an extra sentence. Deliver value from your AI investments faster with better data.",
    };
  
    export let headerTitles = ["Real Yields", "Real Time Monitoring", "Risk Management", "Strategy Optimisation"];

    </script>
    

    <SliderComponent  {textObject} {headerTitles} >

    <a href="#"> View Analytics </a>

    </SliderComponent>
    <style>
        a {
            color:white;
            place-self:center;
        }
    </style>
