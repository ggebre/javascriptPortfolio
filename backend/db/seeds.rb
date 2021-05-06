# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'nokogiri'
require 'open-uri' 


# require 'combine_pdf'
# require 'net/http'

# doc = Nokogiri::HTML(open("https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test/100-civics-questions-and-answers-with-mp3-audio-english-version"))
        
#         # doc.css("article div div div p").each do |p|
#         #         if p.text.chomp.start_with?(/\d/) 
#         #                 # puts p.text[/\D+\?/]
#         #                 category = Category.last 

#         #                 question = Question.create(item: p.text)

#         #                 question_category = QuestionCategory.new 
#         #                 question_category.category = category 
#         #                 question_category.question = question 
#         #                 question_category.save 
#         #                 # puts p.text[/[^\d\.]+[?.]/]
                        
#         #         end 

#         #         if p.text.chomp.start_with?(/[A-F]:/) 
#         #             Category.create(item: p.text)
#         #             # puts p.text
#         #         end
#         # end 
# #         # # create answers 
#         # count = 0
#         # doc.css("article div div div ul").each do |ul|
            
#         #     ul.css("li").each do |li|
#         #         answer = Answer.new 
#         #         # answer.category = "#{count}" 
#         #         answer.question_id = count 
#         #         answer.item = li.text.strip 
#         #         answer.save
#         #             # puts li.text 
#         #     end
#         #     count += 1
                
#         # end  


# create association between Question and Answer tables 
# Fetch State name and their corresponding capital 
# doc = Nokogiri::HTML(open("https://www.britannica.com/topic/list-of-state-capitals-in-the-United-States-2119210"))

# doc.css("tr").each do |row|
#     # puts "State name: #{row.children[0].text}---State Capital: #{row.children[1].text} "
#     State.create(name: row.children[0].text, capital: row.children[1].text)
# end


# create Senator for each state 
# doc = Nokogiri::HTML(open("https://www.senate.gov/senators/index.htm"))

# doc.css("tr").each do |row| 
#     state = State.find_by(name: row.children[2].text)
#     if state 
#         state.senators.create(name: row.children[1].text, party: row.children[3].text)
#     end
    
#     # puts "Senator Name: #{row.children[1].text} --- State: #{row.children[2].text} ---Party: #{row.children[3].text}"
# end

# # Representatives
# doc = Nokogiri::HTML(open("https://www.house.gov/representatives"))

# doc.css('table').each do |body|
#     # stateName = ''
#     body.css('caption').each do |name|
#         # puts name.text.strip
#         state = State.find_by(name: name.text.strip)
#         if state 
            
#             body.css('tbody tr').each do |name|
#                 state.representatives.create(district: name.children[1].text.strip, name: name.children[3].text.strip, party: name.children[5].text.strip)
#                 # puts "district: #{name.children[1].text} ----- name: #{name.children[3].text} ----party: #{name.children[5].text}"
#             end
#         end
        
#     end  
    
    
# end

# # governors to state
doc = Nokogiri::HTML(open("https://www.airbnb.com/s/Chicago--IL--United-States/homes"))
doc.css('h1').each do |div|
    # stateName = div.css('small').text.strip 
    # state = State.find_by(name: stateName) 
    # if state 
    #     state.update(governor: div.text.strip.split('Gov.')[1].strip)
    # end 
    puts div 
    

end


# Rank.create(likes: 0, dislikes: 0)
# # state covid Info Links 
# doc = Nokogiri::HTML(open("https://www.wsj.com/articles/how-to-get-a-covid-19-vaccine-a-state-by-state-guide-11611703769"))

# (0..50).each do |i|
#     stateName = doc.css('h6')[i].text.gsub(/\(state\)/, "").strip
#     state = State.find_by(name: stateName)
#     if state 
#         state.covid_url = doc.css('h6 + p a')[i]["href"].strip
#         state.save 
#     end
#     # puts doc.css('h6 + p a')[i]["href"]
# end


# a = ["nice job", "good job", "keep up the good work", "thank you"]
# a.each do |comment|
#     Comment.create(content: comment)
# end