class CreateArtistSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :artist_songs do |t|
      t.float :percentage
      t.date :exp_date
      t.references :artist, foreign_key: true
      t.references :song, foreign_key: true

      t.timestamps
    end
  end
end
