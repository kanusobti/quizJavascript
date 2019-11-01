///document ready
$(function() {
    ///click next a question, 3 options should appear.
    //after user selects option, submit button shud be pressed.
    //then selected option shud be matched with correct answer.
    //if it is correct display green color with the answer is correct , else print answer is wrong with red, else if nothing is selected means it is undefined then display orange color with try again.
    ///when pressed next the options, question, color and result i mean object shud disappear. showing next uptill array length.
    let currentQuestion = "";
    let correctAnswerCount = 0;

    const quiz = [
    				{
			            Question: "Who is the prime minister of Canada?",
			            Options: [
					                "Justin Trudeau",
					                "Bill Gates",
					                "Donald Trump"
			            		 ],
			            Correct: "Justin Trudeau"
			        },
			        {
			            Question: "Where is Eiffel Tower?",
			            Options: [
					                "Paris",
					                "Toronto",
					                "New York"
					             ],
			            Correct: "Paris"
			        },
			        {
			            Question: "Who is the CEO of Apple?",
			            Options: [
					                "Tim Cook",
					                "Elon Musk",
					                "Jeff Bezos"
					             ],
			            Correct: "Tim Cook"
			        }
    			] ///array ends

    let counter = 0;
    $("#next").on("click", () => {
        //console.log("click heard on next button");
        $('ul').empty();
        $("#submit").show();
        $(".result").hide();
        $("form").css('background-color', 'peachpuff');
        //console.log(quiz[counter]);
        $('h1').text('Q' + (counter + 1) + ': ' + quiz[counter].Question);
        userOptions(quiz[counter].Options);
        //console.log("i just added options");
        //console.log(quiz[counter].Options);
        currentQuestion = quiz[counter];
        counter = counter + 1;
        if (counter === quiz.length) {
            $("#next").attr("disabled", true);
        }
    }); //next click ends

    const userOptions = (Options) => {
        for (i = 0; i < Options.length; i++) {
            //console.log('here are options' + Options[i]);
            $('<label><input type="radio" name="radiobtn"  value="' + Options[i] + '">' + Options[i] + '</label></br>').appendTo('ul');
        }
    }//userOptions function ends

    $("form").on("submit", (e) => {
        e.preventDefault();
        //console.log('form submitted');
        //console.log(currentQuestion);
        $("#submit").hide();
        let selectedAnswer = $("input[name='radiobtn']:checked").val();
        //console.log("the selected answer is" + selectedAnswer);
        if (typeof selectedAnswer === 'undefined') {
            //console.log("Try again!");
            $("#submit").show();
            $(".result").show();
            $(".result").text("Select an option first!");
            $("form").css('background-color', 'Orange');
        } else {
        	if (counter === quiz.length)
        	{
        	 $('#viewResults').show();
            }
            validation(selectedAnswer);
        }



    }); //form submitted ends
    const validation = (selectedAnswer) => {
        if (selectedAnswer === currentQuestion.Correct) {
            //console.log("Well done!");
            $(".result").show();
            $(".result").text("Correct Answer!");
            correctAnswerCount = correctAnswerCount + 1;
            $("form").css('background-color', 'Green');

        } else {
            //console.log("Better luck next time!");
            $(".result").show();
            $(".result").text("Incorrect Answer!");
            $("form").css('background-color', 'Red');
        }
    };

	$("#viewResults").on("click", () => { 
		$('h1').text('You answered '+correctAnswerCount+ ' question(s) correctly out of a total of '+ quiz.length + ' questions.' );
		$('ul').hide();
		$('#next').hide();	
		$('.divResult').hide();

	});

}); ///end of document ready