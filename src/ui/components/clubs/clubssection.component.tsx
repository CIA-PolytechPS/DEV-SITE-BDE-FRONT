import { FC, ReactNode } from "react";

const ClubsSectionComp: FC = (): ReactNode => {
    return (
        <section className="py-16 px-8 bg-[#FFFDED] w-screen relative left-1/2 -translate-x-1/2">
            <div className="max-w-6xl mx-auto grid grid-cols-[35%_65%] gap-10 items-start">
                <div className="">
                    <img className="rounded-2xl" src="/fillingPic.gif" alt="Ceci est une image." />
                    <p className="text-zinc-500">Source : Hello World</p>
                </div>

                <div className="text-lg">
                    <h1 className="font-semibold text-5xl tracking-tighter mb-2">Les Clubs du BDE</h1>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClubsSectionComp;
