class Posts < ActiveRecord::Migration[5.2]
  def change
  	create_table :posts do |t|
	  	t.string :url
	  	t.string :type
	  	t.references :user
	  	t.timestamps
	end
  end
end
