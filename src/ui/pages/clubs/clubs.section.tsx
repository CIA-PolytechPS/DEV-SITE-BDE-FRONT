import { FC, ReactNode } from "react";

const ClubsSectionComp: FC = (): ReactNode => {
    return (
        <section className="py-16 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-[35%_65%] gap-10 items-start">
                <div className="">
                    <img src="/fillingPic.gif" alt="Ceci est une image." />
                    <p className="text-zinc-500">Source : Hello World</p>
                </div>

                <div className="">
                    <h2 className="font-semibold text-5xl tracking-tighter mb-2">Les Clubs du BDE</h2>
                    <p className="mb-4">L'adhésion au BDE vous permet d'accéder à une multitude de Clubs.</p>

                    <div className="space-y-2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum bibendum eros, nec ornare dolor luctus a. Donec
                            mattis viverra dolor, sed semper libero consectetur a. Curabitur quis magna facilisis, congue ipsum non, commodo diam.
                            Nunc porta fringilla ipsum, ac tincidunt ligula pulvinar venenatis. Nullam interdum nibh ligula, non fringilla eros
                            rhoncus in. Aliquam nec tortor bibendum lectus pretium bibendum et a orci. Ut dolor purus, mattis non justo eu, accumsan
                            scelerisque nunc. Maecenas gravida orci velit, eget pulvinar nisi rhoncus in. Nullam ultricies vel massa a dapibus.
                        </p>

                        <p>
                            Donec a lectus vitae ligula viverra fringilla. Nulla facilisi. Vivamus vitae libero non neque vehicula venenatis. Duis
                            fringilla eget est ut faucibus. Maecenas non sapien massa. Donec vel orci neque. In est mauris, molestie id hendrerit
                            vitae, consequat et risus. Maecenas ac auctor quam. Nullam non blandit est.
                        </p>

                        <p>
                            Aliquam venenatis fringilla nulla eu aliquam. Curabitur maximus lorem ac velit ultricies, id cursus ex sodales. Fusce
                            ullamcorper urna eu finibus accumsan. Pellentesque pharetra porta mauris. Curabitur vel elit quam. Vestibulum justo massa,
                            pharetra eget sodales eget, bibendum quis velit. Mauris nunc justo, porta consequat mi et, tristique sollicitudin velit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClubsSectionComp;
