class Friend < ApplicationRecord
	belongs_to :user
	belongs_to :friendee, :foreign_key => 'friendee_id', :class_name => 'User', :optional => true
end
