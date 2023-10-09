import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from './Components/Icons/MailIcon';
import { LockIcon } from './Components/Icons/LockIcon';
import NavBar from "./NavBar";


function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {/* <Button onPress={onOpen} color="primary">Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
      <NavBar></NavBar>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veniam voluptatem quo nam officiis. Neque rerum, dolor iure atque iusto cupiditate et doloremque molestias provident, excepturi modi accusamus ex quia voluptates aut quidem laborum explicabo ad eius fugit repellat soluta in? Odio dignissimos officiis quo quia unde dolores labore distinctio id vitae deserunt molestiae, reiciendis recusandae accusantium quisquam delectus sint! Aut ullam, non facere officia magnam hic possimus dolores libero cum enim nesciunt quasi repellendus? Placeat, cum perspiciatis molestias reprehenderit non numquam, dicta laboriosam deleniti enim, est labore voluptatibus vero saepe ratione atque dolore odit aspernatur laudantium maxime! Repellendus tenetur ipsam cum iste vel, dolorem, cumque adipisci deserunt maiores animi, repudiandae itaque! Perspiciatis voluptates labore in sapiente temporibus libero fugiat quod cum repellat ex eum quos tempora quam numquam, obcaecati assumenda, odio provident at aspernatur praesentium. Hic laboriosam dolor ipsam minus quod, similique voluptatem! Ut ad animi praesentium nihil quas ipsa inventore dicta minus, a voluptate itaque dolorum repellendus id minima ratione mollitia laudantium delectus debitis laboriosam iusto voluptates maxime consequuntur ullam sapiente? Dolore facere repudiandae eligendi totam autem veniam amet quos quia, alias in, cum nemo quidem consectetur eos aliquam. Perspiciatis ipsam rerum voluptatem dignissimos cupiditate itaque exercitationem quos quo, maiores error labore excepturi molestiae veniam illum, recusandae, minima molestias ut accusamus quasi? Ut, beatae vitae? Qui, voluptate! Modi deserunt non ab sunt. Maiores, velit eligendi at sit laudantium placeat animi? Eius, ad eaque. Asperiores minus numquam, quam itaque consequuntur omnis laborum, aut est porro esse deserunt, dicta et illum. Dicta tenetur tempora aliquid natus blanditiis non excepturi eveniet facilis? Facere cupiditate ex quisquam saepe! Fuga nisi, quasi, delectus blanditiis rem illum et, voluptatum impedit a fugiat aliquam ducimus! Quibusdam dolorum delectus quisquam facere, quasi eos corrupti dignissimos modi asperiores officiis aut tenetur. Similique dolores facilis impedit sunt quis dicta dolorem minus saepe provident commodi sapiente ad hic iure aliquid natus quae, aliquam officia voluptatum deserunt veniam esse voluptates. Iusto officiis, cumque impedit deserunt eius sed ex saepe recusandae odit voluptate voluptas explicabo delectus perspiciatis a laborum rem temporibus quos fuga sequi dolores ea nisi. Cum reiciendis quas dignissimos alias ad quia magni, neque in, ipsa officia libero quam deleniti id illum eligendi nesciunt minima inventore quasi quod hic, exercitationem quaerat perspiciatis accusamus aperiam. Nisi labore sit ducimus. Suscipit incidunt reprehenderit obcaecati, quaerat, ipsum velit alias aspernatur consequatur debitis reiciendis quasi aut temporibus ullam molestias eligendi cum in dolor fugiat tempora assumenda iste doloremque dignissimos fuga. Totam quis adipisci dolorum cum eos, unde quisquam, deleniti obcaecati cupiditate eum optio modi nesciunt qui nihil expedita vel voluptatibus aliquid. Quod placeat, delectus aperiam ut eos molestiae porro. Ad, quibusdam. Distinctio, cum optio maiores incidunt blanditiis cumque dolorum accusantium in exercitationem repellendus rem eum quia laborum natus odit veniam assumenda ipsam reprehenderit cupiditate sit! Autem incidunt sapiente earum nobis ex maiores veritatis magnam eveniet veniam provident laborum unde corrupti dolore laudantium, ducimus ab cum voluptates! Sapiente magnam amet illum quasi corrupti, temporibus, natus explicabo perspiciatis nulla fuga autem quis quidem laboriosam ut excepturi dolores modi aliquid culpa corporis in obcaecati voluptatum aperiam? Ad, atque dolores veritatis, quo voluptatum quis dolore ducimus exercitationem in praesentium delectus obcaecati nihil nostrum! Maiores quidem ad exercitationem autem assumenda voluptas architecto nulla, omnis eius quaerat quas repellendus, harum laudantium esse! Error, aspernatur velit! Similique ducimus, illo qui non officiis molestiae hic, maiores praesentium tempore excepturi deserunt eaque ratione dolorem ipsa nihil numquam iusto ex rem mollitia expedita asperiores enim quod. Autem eum, esse nulla earum accusamus velit deserunt modi eligendi odio aperiam corporis voluptas et voluptatum vitae neque ducimus consequuntur quis inventore. Magnam in a repellendus officia iure quo eaque ipsa. Autem nam veritatis asperiores aliquam repellat quidem ea, sed provident at debitis consequuntur expedita atque quos error incidunt eaque possimus modi quis reiciendis neque eius. Doloremque vero beatae sequi distinctio consequuntur suscipit et mollitia iusto, quia dolorum, iure quis quae commodi vel tenetur modi corporis neque. Itaque rerum repellendus eos? Voluptatum, rerum laudantium nobis corporis, magnam assumenda nihil neque accusantium aspernatur consequuntur velit repellendus molestias debitis sed blanditiis placeat tenetur similique dolorum ut quibusdam expedita modi, molestiae tempora! Voluptas tenetur perspiciatis ipsa! Nulla autem dolorem tempore, assumenda vitae tempora! Magni molestias tempore, consectetur eos rerum a est doloremque iste itaque velit officia voluptas molestiae doloribus quis, nostrum fugiat excepturi ad distinctio vitae labore facilis neque recusandae numquam illum. A eius ab at quam minus ex placeat. Quidem maxime sit commodi, similique inventore esse illum voluptates a ea in nemo atque cum enim mollitia distinctio, fugiat placeat laborum consequuntur? Eaque, quasi? Accusantium officiis quaerat minus ipsum exercitationem alias pariatur placeat. Necessitatibus quo incidunt dignissimos quos consectetur dicta, delectus eaque porro alias hic assumenda labore animi culpa doloremque facere? Aliquam provident quam minus, iusto quia, nihil dolore ad ipsa nulla mollitia explicabo ea consectetur est aspernatur eaque recusandae. Ea et possimus atque sapiente, dignissimos, magni quia deserunt accusamus eligendi ab ex consectetur omnis libero natus voluptatem alias praesentium obcaecati rerum quos! Nostrum odio accusantium rerum, ex vero laboriosam rem blanditiis cupiditate neque ipsam error alias modi veritatis quia, eius molestias iusto. Dolor, quas laboriosam nulla et ipsa voluptate ex deserunt? Asperiores eveniet distinctio commodi quaerat ad fuga dolore ea suscipit, facilis, quidem ab ratione nisi enim, laborum repellat corrupti non atque quam deserunt voluptatum! Pariatur a reiciendis enim accusantium numquam ducimus odit ratione mollitia, repellendus eaque placeat temporibus sunt! Voluptas a rerum reprehenderit veritatis in repellendus officia ratione voluptatum voluptate iusto qui labore optio dolorem, pariatur quisquam facere asperiores! Quos atque, ut laudantium dolorem labore facilis placeat, repudiandae excepturi ex consequatur dicta expedita optio ab commodi, quisquam deserunt in? Ipsa, libero. Ab quidem omnis aperiam excepturi veniam. Illum expedita sapiente dolor eum delectus commodi repellat, laborum cupiditate doloribus quo reprehenderit nihil sequi earum fugiat aspernatur corporis. Provident iste eaque, necessitatibus, doloribus harum veritatis odit non nesciunt quidem animi facere perferendis quam soluta quae corporis facilis totam inventore saepe. Accusamus est porro, et quam delectus molestiae nemo quia consectetur perferendis maxime quas exercitationem qui vitae dolore accusantium enim cumque!</p>
    </>
  )
}

export default App
