class Komments < ActiveRecord::Migration[5.2]
  def change
      create_table :komments do |t|
      t.string :komment
      t.references :user
      t.references :post, foreign_key: true
      t.timestamps
    end
  end
end