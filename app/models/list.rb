class List < ApplicationRecord
    has_many :tasks

    before_create -> (list) do
        list.slug = list.title.parameterize
      end

end
