class List < ApplicationRecord
    has_many :tasks, :dependent => :delete_all

    before_create -> (list) do
        list.slug = list.title.parameterize
      end

end
