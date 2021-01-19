class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :completed, :list_id
end
