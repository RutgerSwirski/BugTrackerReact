class CreateTickets < ActiveRecord::Migration[6.0]
  def change
    create_table :tickets do |t|
      t.string :name
      t.string :description
      t.boolean :solved, default: false

      t.timestamps
    end
  end
end
