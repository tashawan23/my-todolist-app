class List < ApplicationRecord
    has_many :tasks

    def slugify
        self.slug = title.parameterize
    end
    
end
