<script lang='ts'>
    import CardComponent from '$lib/component/CardComponent.svelte'
    let content = {
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
<CardComponent {content} />
<style>
  
</style>
