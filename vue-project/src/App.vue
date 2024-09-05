<template>
  <h1>App.vue</h1>
    <p>The component has two div tags with one slot in each.</p>
    <slot-comp>
      <template v-slot:topSlot>here is top</template>
      
      <template v-slot:bottomSlot>
            <h4>To the bottom slot!</h4>
            <p>
                This p tag and the h4 tag above are directed to the bottom slot
                with the v-slot directive used on the template tag.
            </p>
        </template>
        <p>This goes into the default slot</p>
    </slot-comp>
</template>

<script>
export default {
    data() {
        return {
            newItem: "",
            items: ["Buy apples", "Make pizza", "Mow the lawn"],
            foods: [
                {
                    name: "Apple",
                    desc: "Apples are a type of fruit that grow on trees.",
                    url: "img_apple.svg",
                },
                {
                    name: "Pizza",
                    desc: "Pizza has a bread base with tomato sauce, cheese, and toppings on top.",
                    url: "img_pizza.svg",
                },
                {
                    name: "Rice",
                    desc: "Rice is a type of grain that people like to eat.",
                    url: "img_rice.svg",
                },
                {
                    name: "Fish",
                    desc: "Fish is an animal that lives in water.",
                    url: "img_fish.svg",
                },
                {
                    name: "Cake",
                    desc: "Cake is something sweet that tates good but is not consodered healthy.",
                    url: "img_cake.svg",
                },
            ],
        };
    },
    methods: {
        addItem() {
            this.items.push(this.newItem), (this.newItem = "");
        },
    },
};
</script>

<style>
ul {
    width: 150px;
    list-style-type: none;
    padding-left: 10px;
}
</style>
