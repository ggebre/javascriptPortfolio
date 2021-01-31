class RankSerializer 
    def initialize(rank_object)
        @rank = rank_object
    end
    def to_serialized_json 
        options = { :except => [:updated_at]}
        @rank.to_json(options)
    end
end