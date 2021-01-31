class State < ApplicationRecord
    has_many :senators 
    has_many :representatives
end
