import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { LIST_TOPICS, FAQPage } from './'
import { MockedProvider } from '@apollo/client/testing'
import { BrowserRouter } from 'react-router-dom'

function mocks(foster: boolean) {
  return [
    {
      request: {
        query: LIST_TOPICS
      },
      result: {
        data: {
          faqTopics: [
            {
              "__typename": "FaqTopic",
              "id": "13",
              "name": "Basic",
              "questions": [
                {
                  "__typename": "FaqContent",
                  "content": "Just What Is A Ferret\\r\\nA ferret is a one to three pound ball of energy, which plays almost up to the day it dies. In a pet store, they steal hearts where many are bought without people finding out what they are or how to take care of them. \\r\\nWhat A Ferret Is NOT\\r\\nThe first and most important thing is a ferret is not a caged animal such as gerbils or hamsters. They don't do well in cages for days on end. They are super intelligent and to be locked in a cage with nothing new to explore or play with will change their whole personality..........just because they sell fancy cages, doesn't mean a ferret has to stay in it all the time anymore than a person who has a fancy home has to stay in it all the time. \\r\\n\\r\\n Ferrets have personalities. They are little thinking machines that figure things out. Example: A dog will jump up and down wanting to get to something he can't reach - a ferret is going to do that once or twice, then look around the room, figure out if he gets on that stool, he can get on the arm of the chair to the back, from there on the shelf that goes to the chest and from there.........With a mind like that, how cruel to keep them caged all the time. Now when company comes or people are in and out the doors that is when they should be caged for their own protection. To cage them while you are gone is safer too, they will sleep until you get home but then it should be a fun time for all. \\r\\nWhat A Ferret Needs\\r\\nA ferret needs love and companionship. They do their fair share of both. They are funny, they are stress relievers, they are cute, they make you laugh when you just don't want to, and they warm your heart. To do your share, they must have at least 4 hours of out time a day, easily broken up into different segments, as they don't play 4 hours straight. They sleep a lot and thus make good pets for people who work. But they do expect and demand your attention; you were put here for that purpose. A ferret proofed room (if a ferret can get its head through, the rest of its body goes with it ) with toys and things to explore will keep your ferret friendly and healthy. But better than that is to learn games to play with them and they get so tickled at you, you will laugh with them. \\r\\n\\r\\n A caged ferret who is not allowed out will entertain himself by turning potty boxes upside down, dig in food dishes and water bowls, bite the cage and a lot of other stuff to gain attention, biting you is one of them, anything for your attention. Some also become over hyper when they finally do come out. Others will instead withdraw, get stressed out and become sick. They know depression big time, if their heart hurts, they certainly are not good companions. One, which is allowed out a lot, will soon stop most of those bad habits and put all his energy into entertaining you. \\r\\n\\r\\n Some of the fun things ferrets do with their people: chase and be chased, they love it if you drag a towel around where they can jump on and off and/or ride around the room. Oh and to be thrown in a paper bag, rolled around, and then dumped out, they'll leap for joy, circle you and jump back into the bag for you to do it again. Fun things they do with other ferrets: they wrestle and roll across the room, they race each other in tunnels, they steal together - if one can't drag something off, then two get together in team work and then they steal from each other, hilarious to watch them raid each others hidey box. Can you really keep a ferret in a cage all the time with that type of personality? \\r\\n\\r\\n Ferrets know when you are upset and may come perch on you to stare at you trying to figure out what is wrong..........but they can't stop playing long enough to cuddle cause they are very busy; very, very busy. Thus they start their fun and games and you will feel yourself getting into the mood too. Their toys need to be rotated so they have something they THINK is new, thus keeping the boredom from seeping in. They know when you are carrying in sacks of stuff, beware it is supposed to go through their \\\"customs\\\" before going into a room they can't go into. They love purses cause there is all sorts of fun things to drag out, either run off with or go in for another choice, so you do have to watch where you leave it laying around. And you certainly don't want to end up in a restaurant and find you have carried a ferret in with you. Personally, its a good idea to hang a birdbath dish from the ceiling to put all the TV remote controls in because it is one of their favorite toys, those little rubber buttons are delicious. If you want to drink while you watch TV, get glasses with tops on for ferrets check to see what is in the glass, best way to do that is to tip the glass over and let it all run out. Refer to their above weight and then the weight of what is in the glass and see which you think remains standing after their inspection. \\r\\n\\r\\n Ferrets are grand little animals and can bring out the protectiveness in you like no other animal seems to do. Yet they are not for everyone, as they always need interaction with humans. Do not adopt a ferret if you can't give your heart and time to them. They become very bonded and it is very painful when you become bored and give them away. It's heartbreaking to them. They have a life span of 6 to 8 years and they do a lot of interacting in that time. It's not fair to play with them when they are new to you, then let them live in a cage and finally when they get old, give them away. You are cheating them and yourself of a really good time. But if you do find you have made a mistake in obtaining a ferret, remember there are good people out here who will give them the home they need. That is what we are here for, to help find homes for ferrets. ",
                  "id": "23",
                  "title": "What is a ferret?"
                },
                {
                  "__typename": "FaqContent",
                  "content": "Your house should be ferret proofed which is more intense that child proofing. You need to look for small holes. Anything the size of 1 square inch or larger is a hazard to a ferret. Run your hand along the underside of all your kick boards of your cabinets. My first ferret found holes at the connection points. I managed to get him before he got all the way in. I duck-taped it closed, thankfully no one can see it. Make sure a ferret can not get behind the refrigerator/stove/dishwasher/washing machine or dryer. And, make sure they are not stuck inside one of these machines. They don't come out the same way they went in... *shudder* They can go under doors that have a half inch space and if they think they can make a hole big enough, they will dig through your carpet to give them extra space. ",
                  "id": "24",
                  "title": "What is ferret proofing?"
                }
              ]
            },
            {
              "__typename": "FaqTopic",
              "id": "19",
              "name": "Adoption",
              "questions": [
                {
                  "__typename": "FaqContent",
                  "content": "To adopt, go to our application  <a href=\\\"https://www.txferretrescue.org/apply\\\">https://www.txferretrescue.org/apply</a> and fill it out. Once you submit it will go to our co-ordinator.  She will get back with you and give you the right answers if you got them wrong.  We want you to know how to take care of ferrets and at the same time ensure that you have an idea of what you are getting involved in.  It usually takes just ½ day to receive a response.  If you do not hear from her within that time, you may call <a href=\\\"tel:8174470363\\\">(817) 447-0363</a>\\r\\n<br><br>\\r\\n<b>Adoption Fees</b>\\r\\n<br>\\r\\n1 ½ and under are $125\\r\\n<br>\\r\\n1 ½ to 2 ½ are $110\\r\\n<br>\\r\\n2 ½ to 3 ½ are $90\\r\\n<br>\\r\\nAny over 3 ½ are $55\\r\\n<br><br>\\r\\nBonded pairs are discounted depending on their age.\\r\\n<br><br>\\r\\nRegardless, all ferrets have their rabies and distemper vaccination, are microchipped, and have had a health exam to check for teeth, heart, or tumor problems.  Ferrets are guaranteed for 30 days against illness and 3 months against adrenal tumors.  Most ferrets are raised at farms that have them spayed or neutered and scent glands removed when they are 3 to 4 weeks old.",
                  "id": "38",
                  "title": "How do you adopt from TxFLR and what are the adoption fees? "
                },
                {
                  "__typename": "FaqContent",
                  "content": "We do not ship ferrets for a couple of reasons. \\r\\n<br><br>\\r\\n1.  The ferrets are kept in the bottom of the plane where conditions are not as we would have for them – in the summer it is too hot in the hold so they will only ship them at night.  What happens if there is a lay over that puts them in day time shipping.  Sure they can unload and keep them cool while waiting to get the plane in order but then the time element plays a big part.  What about the handling of bagagge being tossed around,  What about all those strangers shuffling them around………….    \\r\\n<br><br>\\r\\n2.  Usually there are other ferret shelters closer in your area with ferrets that need homes  just as much as ours.  A long drive is worth a life time with a ferret so you can check further out or come to us from far away.  \\r\\n<br><br>\\r\\n3.  The ferrets have already been rehomed and are looking for that forever home – some think the transportation is an adventure, others it is another aspect in their lives to go through not knowing what is happening to them. \\r\\n<br><br>\\r\\nAnd the most important of all \\r\\n<br><br>\\r\\n4.  Ferrets are animals with feelings and personalities.  They are not like buying a piece of furniture or clothes – there needs to be a bonding between human and ferret.  Not any ole ferret will fit in every household just as dogs have different personalities, same breed but so totally different in personalities.  Since they range from hyper to laid back and anywhere inbetween, some with good habits and some with mischievous ones, one person may love one type, another would find that same one a nuisance.  Looks alone won’t make them dear to your heart and my write ups catch some of their personality but adoption cannot be based on that write up alone.  Just as one woman won't be compatible with every man she meets and one man won't be compatible with every female he meets - the same goes for picking out a pet you hope will live with you for life.\\r\\n<br><br>\\r\\nI do hope you understand our position.  Again, there are a lot of rescue groups out there, it is worth having the right ferret for life and going to meet the ferret than just have one shipped to you.",
                  "id": "37",
                  "title": "Why does the rescue not ship ferrets?"
                },
              ]
            }

          ]
        }
      },
    },
  ]
};

test('renders FAQPage', async () => {
  const { getByText, getAllByTestId } = render(
    <MockedProvider mocks={mocks(false)}>
      <BrowserRouter>
        <FAQPage />
      </BrowserRouter>
    </MockedProvider>
  )

  await waitFor(() => {
    const linkElement = getByText(/Frequently Asked Questions/i)
    expect(linkElement).toBeInTheDocument()

    const topicGroups = getAllByTestId('Topic')
    expect(topicGroups.length).toBe(2)

    const questions = getAllByTestId('Question')
    expect(questions.length).toBe(4)
  })
})
