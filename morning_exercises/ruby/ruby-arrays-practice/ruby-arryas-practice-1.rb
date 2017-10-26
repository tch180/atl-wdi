people = [
    OpenStruct.new(
        first_name: 'Jamie',
        last_name: 'King'
    ),
    OpenStruct.new(
        first_name: 'Danny',
        last_name: 'Hurley',
    ),
    OpenStruct.new(
        first_name: 'Maren',
        last_name: 'Woodruff',
    )
]

upper_case_full_names = []
people.map(&:upcase)



