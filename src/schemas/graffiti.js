export default {
  fields: [
    {
      type: 'select',
      label: 'Where is the graffiti?',
      model: 'property_type',
      required: true,
      selectOptions: {
        noneSelectedText: 'Select...'
      },
      values: [
        'Alleyway',
        'Bridge',
        'Building or House',
        'Dumpster',
        'Electrical Control Box',
        'Fence',
        'Garage',
        'Pole',
        'Security Gate',
        'Sidewalk',
        'Steps',
        'Stop Sign',
        'Street Sign',
        'Stucco Wall',
        'Traffic Control Box',
        'Train Track',
        'Underpass or Overpass',
        'Window',
        'Wood Telephone Pole'
      ],
      validator (value) {
        if (value === 'Train Track') {
          console.log('validator', value)
          return [`
            This doesn't fall within the scope of City Government services.
            Please contact the railroad owner: Conrail 800-232-0144, Amtrak
            800-331-0009, or SEPTA 215-580-7800.
          `]
        }
      }
    },
    {
      type: 'radios',
      label: 'Which floor/story is the graffiti on?',
      model: 'floor',
      values: [
        '1st/Ground Floor',
        '2nd Floor',
        '3rd Floor or Higher',
        `I don't know`
      ],
      visible (model) {
        return model.property_type === 'Building or House'
      }
    },
    {
      type: 'radios',
      label: 'Are you the property owner?',
      model: 'property_owner',
      values: [
        'Yes',
        'No'
      ],
      required: true
    },
    {
      type: 'input',
      inputType: 'text',
      model: 'comments',
      label: 'Comments',
      required: true
    }
  ]
}
