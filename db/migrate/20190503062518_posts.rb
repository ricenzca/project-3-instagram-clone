class Posts < ActiveRecord::Migration[5.2]
  def change
  	create_table :posts do |t|
	  	t.string :media_type
	  	t.string :public_id
      t.string :caption
	  	t.references :user
	  	t.timestamps
	end
  end
end