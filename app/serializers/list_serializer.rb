class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :slug

  has_many :tasks
end
