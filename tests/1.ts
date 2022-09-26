import { international } from "../mod.ts";
import {
	assert,
	assertEquals,
	fail,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test({
	name: "correctly loads msgpack from cache",
	fn: async () => {
		const hider = await international();

		assertEquals(
			[
				`a`,
				`ɛyɛbalitem`,
				`malahaklong`,
				`smoginess`,
				`હોદિયા`,
				`ӱӱрениӂилӓрлӓн`,
				`समझदारा`,
				`استراحت`,
				`scˀoia`,
				`hʼôhôlibama`,
				`ပညာရှိသောသူသည`,
				`拉马撒巴各大尼`,
				`希西家生馬拿西`,
				`okatsitzimoshiretanakeri`,
				`ժամանակներուն`,
				`grakanutʿiwnə`,
				`ạlbktyryạ`,
			].map(hider.getAll),
			[
				["•", "a"],
				[
					"••••••••••",
					"ɛ•••••••••",
					"ɛ•ɛ•••••••",
					"ɛyɛ•••••••",
					"ɛyɛb••••••",
					"ɛyɛb•••••m",
					"ɛyɛb•l•••m",
					"ɛyɛb•l•t•m",
					"ɛyɛb•l•tem",
					"ɛyɛb•litem",
					"ɛyɛbalitem",
				],
				[
					"•••••••••••",
					"••••••••••g",
					"•••••••l••g",
					"•••••••lo•g",
					"••••h••lo•g",
					"••••h•klo•g",
					"••l•h•klo•g",
					"••l•h•klong",
					"m•l•h•klong",
					"m•l•haklong",
					"m•lahaklong",
					"malahaklong",
				],
				[
					"•••••••••",
					"•m•••••••",
					"•m••••••s",
					"•m•••••ss",
					"•mo••••ss",
					"•mog•••ss",
					"smog•••ss",
					"smog••ess",
					"smog•ness",
					"smoginess",
				],
				[
					"•••",
					"હો••",
					"હોદિ•",
					"હોદિયા",
					"હોદિયા",
					"હોદિયા",
					"હોદિયા",
				],
				[
					"••••••••••••••",
					"ӱ•••••••••••••",
					"ӱ•••••ӂ•••••••",
					"ӱ•••••ӂ••ӓ••••",
					"ӱ•••••ӂ••ӓ••ӓ•",
					"ӱӱ••••ӂ••ӓ••ӓ•",
					"ӱӱ••н•ӂ••ӓ••ӓ•",
					"ӱӱ••ниӂ••ӓ••ӓ•",
					"ӱӱ••ниӂ••ӓ•лӓ•",
					"ӱӱ•ениӂ••ӓ•лӓ•",
					"ӱӱ•ениӂи•ӓ•лӓ•",
					"ӱӱ•ениӂилӓ•лӓ•",
					"ӱӱ•ениӂилӓрлӓ•",
					"ӱӱ•ениӂилӓрлӓн",
					"ӱӱрениӂилӓрлӓн",
				],
				[
					"•••••",
					"•••दा•",
					"•••दारा",
					"••झदारा",
					"•मझदारा",
					"समझदारा",
					"समझदारा",
					"समझदारा",
				],
				[
					"•••••••",
					"•••••ح•",
					"•س•••ح•",
					"•س•••حت",
					"•ست••حت",
					"•ستر•حت",
					"استر•حت",
					"استراحت",
				],
				[
					"••••••",
					"••ˀ•••",
					"•cˀ•••",
					"•cˀo••",
					"scˀo••",
					"scˀoi•",
					"scˀoia",
				],
				[
					"•••••••••••",
					"••••ô••••••",
					"••ô•ô••••••",
					"•ʼô•ô••••••",
					"•ʼô•ô••b•••",
					"hʼô•ô••b•••",
					"hʼô•ô••b•m•",
					"hʼôhô••b•m•",
					"hʼôhôl•b•m•",
					"hʼôhôlib•m•",
					"hʼôhôlib•ma",
					"hʼôhôlibama",
				],
				[
					"•••••••••",
					"•ည•••••••",
					"•ညာ••••••",
					"•ညာရှိ•••••",
					"•ညာရှိသေ••••",
					"•ညာရှိသော•••",
					"•ညာရှိသောသူ••",
					"•ညာရှိသောသူသ•",
					"ပညာရှိသောသူသ•",
					"ပညာရှိသောသူသည",
					"ပညာရှိသောသူသည",
					"ပညာရှိသောသူသည",
					"ပညာရှိသောသူသည",
					"ပညာရှိသောသူသည",
				],
				[
					"•••••••",
					"•马•••••",
					"•马••各••",
					"•马撒•各••",
					"•马撒巴各••",
					"•马撒巴各大•",
					"•马撒巴各大尼",
					"拉马撒巴各大尼",
				],
				[
					"•••••••",
					"••家••••",
					"••家•馬••",
					"••家•馬拿•",
					"希•家•馬拿•",
					"希西家•馬拿•",
					"希西家生馬拿•",
					"希西家生馬拿西",
				],
				[
					"••••••••••••••••••••••••",
					"•••••••z••••••••••••••••",
					"•••••••z••••••••••••••r•",
					"•••••••z•m••••••••••••r•",
					"•••••••z•mo•••••••••••r•",
					"•••••••z•mo•••••••••••ri",
					"o••••••z•mo•••••••••••ri",
					"ok•••••z•mo•••••••••••ri",
					"ok•t•••z•mo•••••••••••ri",
					"ok•ts••z•mo•••••••••••ri",
					"ok•ts••z•mo••••••••••eri",
					"ok•ts••z•mo•h••••••••eri",
					"ok•ts••z•mo•h•r••••••eri",
					"ok•ts••z•mosh•r••••••eri",
					"ok•ts••z•mosh•r•t••••eri",
					"ok•ts••z•mosh•r•t•n••eri",
					"ok•ts••z•mosh•r•t•n•keri",
					"ok•ts••z•mosh•ret•n•keri",
					"okats••z•mosh•ret•n•keri",
					"okats••zimosh•ret•n•keri",
					"okats•tzimosh•ret•n•keri",
					"okatsitzimosh•ret•n•keri",
					"okatsitzimoshiret•n•keri",
					"okatsitzimoshiret•nakeri",
					"okatsitzimoshiretanakeri",
				],
				[
					"•••••••••••••",
					"••••••կ••••••",
					"ժ•••••կ••••••",
					"ժ•մ•••կ••••••",
					"ժ•մ•ն•կ••••••",
					"ժ•մ•ն•կ•ե••••",
					"ժ•մ•ն•կնե••••",
					"ժ•մ•ն•կներ•••",
					"ժ•մ•ն•կներո••",
					"ժ•մ•ն•կներու•",
					"ժ•մ•ն•կներուն",
					"ժ•ման•կներուն",
					"ժ•մանակներուն",
					"ժամանակներուն",
				],
				[
					"•••••••••••••",
					"••••••••ʿ••••",
					"••••••••ʿ•••ə",
					"•r••••••ʿ•••ə",
					"•r••••••ʿ•w•ə",
					"gr••••••ʿ•w•ə",
					"gr•k••••ʿ•w•ə",
					"gr•k••u•ʿ•w•ə",
					"gr•k••utʿ•w•ə",
					"gr•k•nutʿ•w•ə",
					"gr•k•nutʿ•wnə",
					"grak•nutʿ•wnə",
					"grak•nutʿiwnə",
					"grakanutʿiwnə",
				],
				[
					"•••••••••",
					"••••••••ạ",
					"ạ•••••••ạ",
					"ạl••••••ạ",
					"ạl•••y••ạ",
					"ạl•••y•yạ",
					"ạlb••y•yạ",
					"ạlbk•y•yạ",
					"ạlbk•yryạ",
					"ạlbktyryạ",
				],
			],
		);
	},
});
