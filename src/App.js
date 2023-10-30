import React from 'react'
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msg from './assets/message.svg'
import Home from './assets/home.svg'
import Book from './assets/bookmark.svg'
import Rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptlogoImage from './assets/chatgptLogo.svg'
import './App.css'
import { sendMsgToOpenAI } from './openai'
import { useState } from 'react'
function App() {

    const[input,setInput] = useState("");
    const handleSend = async () =>{
      const res = await sendMsgToOpenAI(input);
      console.log(res);
    }
  return (
    <div className='w-full h-screen flex m-0 p-0 box-border'>
      <div className="sideBar border-r-[1px] w-[20%] border-gray-400 h-screen">
          <div className="upperSidebar w-full min-h-[70vh] border-b-[1px] border-white p-6 px-8">
              <div className="uppersideTop flex items-center gap-4 mb-8"><img src={gptLogo} alt="" className='w-16' /><span className='text-3xl font-semibold'>ChatGPT</span></div>
              <button className='w-[25rem] mx-auto bg-[#5a4bff] border-none outline-none my-4 px-2 py-4 items-center justify-center flex gap-5 rounded-md shadow-md text-2xl'><img src={addBtn} alt="" className='w-10 h-10' />New Chat</button>
              <div className="uppersidebottom inline-block w-full mt-2">
                <button className="w-[25rem] mx-auto bg-transparent border-[1px] border-gray-400  my-4 px-5 py-4 items-center flex gap-5 rounded-md shadow-md'"><img src={msg} alt="" className='w-8 h-8' /><span className='text-2xl'>What is java ?</span></button>
                <button className="w-[25rem] mx-auto bg-transparent border-[1px] border-gray-400  my-4 px-5 py-4 items-center flex gap-5 rounded-md shadow-md'"><img src={msg} alt="" className='w-8 h-8' /><span className='text-2xl'>What is Python ?</span></button>
              </div>
          </div>
          <div className="lowerside py-10 px-8 inline-block w-full">
              <div className='flex items-center gap-4 mb-6 font-normal px-6 text-2xl'><img src={Home} alt="" />Home</div>
              <div className='flex items-center gap-6 mb-6 font-normal px-6 text-2xl'><img src={Book} alt="" />Saved</div>
              <div className='flex items-center gap-4 font-normal px-6 text-2xl'><img src={Rocket} alt="" />Upgrade to Pro</div>

          </div>
      </div>
      <div className="main w-[80%] bg-[#565869] h-screen  justify-between pb-10 flex flex-col">
          <div className="chats w-full overflow-y-scroll pb-4">
            <div className="chat flex w-full my-10">
              <div className="chatsss w-[70%] mx-auto flex gap-4 items-start">
              <img src={userIcon} alt="" className='w-20 rounded-full' />
              <p className='text-2xl text-[#ececf1] leading-10 flex-wrap'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Dolorum eligendi reiciendis enim cum eaque pariatur maxime officia, 
              ut temporibus incidunt.</p>
              </div>
            </div>
            <div className="chat bg-[#444654] gap-4 w-full py-3 my-2">
              <div className="chatss w-[70%] mx-auto flex gap-4 items-start">
              <img src={gptlogoImage} className='w-20 rounded-full' alt="" />
              <p className='text-[#ececf1] text-2xl leading-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Dolorum eligendi reiciendis enim cum eaque pariatur maxime officia, 
              ut temporibus incidunt.Dolorum eligendi reiciendis enim cum eaque pariatur maxime officia, 
              ut temporibus incidunt.Dolorum eligendi reiciendis enim cum eaque pariatur maxime officia, 
              ut temporibus incidunt.Dolorum eligendi reiciendis enim cum eaque pariatur maxime officia, 
              ut temporibus incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero culpa vero odit facilis expedita perspiciatis dignissimos quo ipsum nulla iusto iure labore quisquam earum officia architecto quod, pariatur velit voluptatum corporis! Sit deserunt placeat saepe obcaecati est exercitationem voluptatibus accusantium repellendus molestiae autem alias iusto cupiditate dolor sed nostrum, sequi et impedit esse qui dolorum? Sint laudantium atque porro et dignissimos quia voluptatibus ipsam natus in beatae ut, mollitia odit ipsa dolore commodi magnam necessitatibus repellat exercitationem quae nam doloremque esse impedit expedita. Autem iste quasi a deleniti ut tempora, quibusdam hic repudiandae incidunt fugit repellat dolore libero quae unde. Mollitia error hic modi saepe temporibus illum ex rerum sint quam explicabo impedit vero enim molestiae, omnis sit, incidunt veniam recusandae a. Odit perspiciatis nobis doloremque unde! Id aut natus suscipit. Architecto nam facilis adipisci veniam, ipsa possimus commodi reprehenderit, eos nobis veritatis nisi, asperiores provident? Consequuntur voluptatum dolores hic. Beatae ex consequuntur aliquam, officiis veniam quae numquam quidem quaerat culpa, aut eos, provident accusantium explicabo quibusdam corporis ullam voluptatibus itaque? Sequi accusantium culpa ullam quasi excepturi soluta laboriosam quis, eos, dignissimos provident doloremque quidem alias earum officiis impedit facilis quam veritatis eveniet, ex nobis dolorem amet esse omnis? Obcaecati quidem sed deserunt culpa, facere similique illo quis, voluptatibus illum aspernatur aliquam error animi magnam. Ratione ut, accusamus quia cum quam error nostrum. Mollitia asperiores deleniti explicabo expedita cum at, vero laborum nesciunt exercitationem minus aspernatur nisi accusamus magni, inventore aliquid perspiciatis ad amet ipsa eaque! Quos vero voluptatibus earum dolore? Nostrum laborum distinctio nulla odio labore officiis at iusto non numquam dolores quidem dolorum id sapiente et molestiae, cumque debitis earum molestias nam. Harum debitis quisquam ullam maiores culpa? Impedit numquam expedita velit itaque neque perferendis a pariatur, esse ipsa iure dolorum qui doloremque placeat ea totam ex ipsum architecto. Ea, deleniti rerum odio, vel dolores iure corrupti reiciendis, iste quia assumenda quos praesentium error explicabo delectus. Sunt, consectetur? Eum laboriosam dolor vel ipsam autem optio facilis! Odio saepe ut odit deleniti nostrum enim, veritatis iure corporis recusandae ducimus mollitia quae consequuntur id minus atque fuga animi culpa, cum consequatur. Omnis excepturi qui exercitationem perferendis quidem. Vel alias tenetur culpa corporis sit. Dolorem voluptate hic consequatur! Eaque pariatur iure reprehenderit cupiditate, blanditiis obcaecati atque iusto deserunt, animi sit possimus minus cumque, sunt incidunt quod consequuntur cum ullam. Rerum numquam odit dignissimos. Explicabo fugiat adipisci nam perspiciatis labore voluptatibus, veniam quo iste quae. Aliquid, nobis commodi illum iste doloremque et labore repellendus exercitationem aperiam eaque maxime veniam consequatur, corporis est? Id quae, unde culpa consequuntur dicta facere deleniti incidunt dolorem ea minus aliquam quos fuga recusandae dolores reiciendis maiores labore. Odio fuga corporis libero adipisci veniam accusantium illo facilis temporibus quos vel! Id porro ipsa, minima obcaecati veritatis quidem necessitatibus quas perspiciatis dolorem odit cumque, itaque deleniti atque? Modi quos rerum fugiat nihil! Vel odio officiis voluptas doloremque ipsam, suscipit nemo voluptatem nisi necessitatibus ad dicta magnam temporibus laboriosam minima modi! Nulla suscipit odio quidem totam quam quas quo inventore aut, placeat incidunt necessitatibus ducimus quae. Cum asperiores, itaque ullam, voluptatibus nulla harum, quo quod tempore fugiat expedita quae. Nihil tempore totam, delectus suscipit magnam deserunt neque repudiandae vero saepe, eos quo quisquam possimus tempora repellendus dolorem fuga ab. Similique quasi dolore, laboriosam unde velit sunt eligendi ad, ducimus illum totam necessitatibus. Error, ducimus magni deleniti consequuntur et obcaecati maiores eius, laboriosam a optio tenetur? Recusandae, architecto quia perferendis culpa natus itaque deserunt explicabo consectetur neque, ipsum vero autem cumque facere quis! Dicta doloremque accusantium nesciunt rem harum ipsam repudiandae saepe nostrum voluptate iste. Necessitatibus tenetur sed consequatur repudiandae ea suscipit, eius porro blanditiis tempore corporis dicta. Rerum, iusto culpa. Velit voluptas provident exercitationem? Blanditiis fugit est cupiditate laboriosam perspiciatis assumenda sunt nobis at deleniti delectus, excepturi similique quae dolore ullam nihil et! Velit ipsum, quos, modi voluptate alias temporibus quae saepe repellat natus similique praesentium veritatis dignissimos explicabo nulla eaque consectetur doloremque odit nihil accusamus. Explicabo, saepe. Quia officiis minima quam totam quis natus illum obcaecati ab culpa adipisci libero atque, quasi laborum, laudantium corrupti explicabo incidunt. Doloribus voluptatibus modi consequuntur necessitatibus natus. Incidunt culpa optio dolore fugiat accusantium! Voluptatem quasi magni deserunt quam temporibus dolorum officiis voluptate eum. Officia sequi provident placeat alias voluptatem expedita debitis consectetur odio necessitatibus tempore, neque tenetur, officiis distinctio quisquam praesentium doloribus sapiente facere at explicabo numquam iusto! Omnis, alias. Aliquid voluptatum, porro ipsum nobis animi recusandae nemo cupiditate nisi accusantium maxime minus facere ullam? Dolor quaerat consequatur incidunt minus quis commodi reprehenderit saepe impedit ipsa sunt, cum voluptatibus in repellendus, est mollitia ut. Modi quaerat fugiat quam earum, illo reprehenderit similique quasi consectetur magnam! Officiis, voluptates itaque adipisci ex vero velit ad fugit, ipsam consectetur maxime eum id amet quasi numquam temporibus est facilis saepe enim laboriosam ratione. Saepe, obcaecati corporis voluptates magni nostrum recusandae veritatis odio quibusdam, quis illum laboriosam aut sint asperiores soluta officia earum voluptate eligendi temporibus facilis pariatur ea? Ullam non cupiditate deserunt repellat, tempora consectetur illum animi dolorem in magni velit quisquam id! Iusto sequi odio ad est, porro aliquam minima sed officiis! Excepturi aliquid, officiis aliquam ipsa laudantium hic, velit, ducimus corrupti sed sequi vel repellendus non officia error ipsam dicta porro eius at quo assumenda illo necessitatibus delectus. Modi incidunt optio error eos nihil soluta officiis magni illum dolorem quibusdam dolore vitae quia animi sint, explicabo itaque voluptatibus est laborum, eius temporibus, cumque molestias architecto. Optio labore cumque facere id illum magnam tempore incidunt vel doloribus possimus doloremque assumenda voluptatibus officiis distinctio nisi, aperiam ipsa odio est dolore explicabo ducimus enim, perferendis deleniti. Reiciendis laudantium fugiat officiis consequuntur eius debitis magni nemo laborum et ab ducimus enim velit autem placeat voluptate tenetur consequatur ut, unde recusandae cumque? Unde possimus voluptates accusantium nihil numquam alias, debitis iure adipisci maxime eaque? Impedit, eaque magni, maiores tempora animi asperiores suscipit, eveniet deleniti unde tenetur ab! Facilis neque autem quasi tempora nulla temporibus itaque suscipit nesciunt, voluptas reprehenderit, in minima debitis consectetur voluptatem est rerum possimus tenetur. Fuga, aliquam.</p>
              </div>
            </div>
            <div className="chat flex w-full my-10">
              <div className="chatsss w-[70%] mx-auto flex gap-4 items-start">
              <img src={userIcon} alt="" className='w-20 rounded-full' />
              <p className='text-2xl text-[#ececf1] leading-10 flex-wrap'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Dolorum eligendi reiciendis enim cum eaque pariatur maxime officia, 
              ut temporibus incidunt.</p>
              </div>
            </div>
          </div>
          <div className="chatfotter w-full inline-block px-4 sticky">
            <div className="input w-[70%] mx-auto flex items-center h-24 bg-[#343541] text-white rounded-lg px-4">
              <input type="text" placeholder='Send a message' value={input} onChange={(e)=>{setInput(e.target.value)}} className='bg-transparent outline-none w-full text-3xl' /><button onClick={handleSend} ><img src={sendBtn} alt="" /></button>
            </div>
            <p className='mx-auto text-center mt-2 text-base'>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT September 25 Version</p>
          </div>
      </div>
    </div>
  )
}

export default App

