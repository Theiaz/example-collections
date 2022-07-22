<template>
  <form @submit.prevent="sendForm">
    <BaseSelect
      :options="categories"
      v-model="event.category"
      label="Select a category"
    />

    <h3>Name & describe your event</h3>

    <BaseInput v-model="event.title" label="Title" type="text" />

    <BaseInput v-model="event.description" label="Description" type="text" />

    <h3>Where is your event?</h3>

    <BaseInput v-model="event.location" label="Location" type="text" />

    <h3>Are pets allowed?</h3>
    <div>
      <BaseRadioGroup
        v-model="event.pets"
        name="pets"
        :options="petOptions"
        :vertical="false"
      />
    </div>

    <h3>Extras</h3>
    <div>
      <BaseCheckbox v-model="event.extras.catering" label="Catering" />
    </div>

    <div>
      <BaseCheckbox v-model="event.extras.music" label="Live music" />
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";
import BaseCheckbox from "./BaseCheckbox.vue";
import BaseRadioGroup from "./BaseRadioGroup.vue";
export default {
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseRadioGroup,
  },
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
      petOptions: [
        { label: "Yes", value: 1 },
        { label: "No", value: 0 },
      ],
    };
  },
  methods: {
    sendForm() {
      // We will handle form submission here!
    },
  },
};
</script>
