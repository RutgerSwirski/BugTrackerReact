class Api::V1::TicketsController < ApplicationController
	def create
	  	ticket = Ticket.create!(ticket_params)
	  	if ticket
	  		render json: ticket
	  	else
	  		render json: ticket.errors
	  	end
	end

	def index
		tickets = Ticket.all.order(created_at: :desc)
  		render json: tickets 
	end

	def show
	  	if ticket
	  		render json: ticket
	  	else
	  		render json: ticket.errors
	  	end
	end

	def ticket_solved
		if ticket
			ticket.solved = true
			if ticket.save
				render json: ticket
			else
				render json: ticket.errors
			end
		end
	end

	private

	def ticket_params
		params.permit(:name, :description)
	end

	def ticket
    	@ticket ||= Ticket.find(params[:id])
  	end
end
