if @monument.persisted?
  # renvoyer le monument
  json.inserted_item render(partial: "monuments/monument", formats: :html, locals: { monument: @monument })

  # renvoyer un form pret a l'emploi
  json.form render(partial: "monuments/form", formats: :html, locals: { monument: Monument.new })
else
  # renvoyer le form rempli avec le monument en question
  json.form render(partial: "monuments/form", formats: :html, locals: { monument: @monument })
end
