import type { PageLoad } from './$types';

let images:string[] = [];
export const load = (async () => {
    if (images.length > 0) return {images};

    const imageModules = import.meta.glob("../../static/assets/stickers/*.*");
    for (const path in imageModules) {
            const module: any = await imageModules[path]();

            // strip /static from path 
            let src = module.default.slice(7)

            images.push(src);
        }

        console.log(images);
    return {images};
}) satisfies PageLoad;