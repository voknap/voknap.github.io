'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "943a87ad33e75a3e2ba038d50ec15c8e",
".git/config": "ab077a2346182c0ca8ea8403fc291a58",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a14dc5f50af0f59973bb5ce24fb95790",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3d3b59949388ff5f7f3db9509512df41",
".git/logs/refs/heads/main": "c854c6a3cc0c9564bba114790a62e69b",
".git/logs/refs/remotes/origin/main": "d9e756032c1afa99ce603ed3987f22bb",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/07/f950f75a86aeb8e8307fd59963037d955dbcf5": "c14b25d5a74cc866649b11beec9d7604",
".git/objects/0c/2e8b49de5c1518c7fd779540ad3f36d323994b": "094dac0b0acc623e20e4ff6586c5d584",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/b5d8b89b41dfba2bbfde0cf0bb7f076f4e7ec2": "fbbbb90e96f375fc39929c06e9476a3c",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/262df721d2829bf5613bdafc3b6f8bccaf265e": "9de91a26bc27a0f16077e63d824bba03",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/5371e6bd3294d76a47867c4e56e6487d49d81f": "8fdf00ad409405c86eb31a150080bd56",
".git/objects/1d/db4d2c41f6a9fba64808f96eb099363763923b": "b8da083ea9aea09006b7696f3ada35a3",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/99d1ef64d03457c470e4c14170a050aab9bd91": "b39f5bf41070a3d3aa06209c5a5c108b",
".git/objects/25/e66c2ae27189121499c1a10eb25e0ac7ab44f8": "93a6fc6ab6b1d0bdbc4d64540f9234ce",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/d4f2b8507d7151acb14d321587c1ba58984173": "265e78f9e4291da5d64becf5a2003a3e",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/31/72d85789cdab4e64f90a140cb9aa374c39330d": "1d597d7c49908b5444a830a9d8489cc8",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/35/408b448c0f4ea4097c6d53c2950f11778192e1": "6746469eeda916f7a24e1f817cd62c45",
".git/objects/37/61b5f8616e27e614acb6e1543d9baeeff66cf4": "151efa31f275ebf26398c67ae8ac5450",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/a29c825acbc741aa2ea7daca50b44899fe0bfb": "1ee91e736592d3d77c9659da4927a625",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/40/7df48e2bd8f4cb13e4c8249659272ad89e3e75": "cd7358a4a1b521cedefe1c16d33af554",
".git/objects/41/1f19209414800550b9ac2b5dbe5007542edb36": "48117fb715a46106daae4a09fd0df2ad",
".git/objects/42/3deabda904c7dab6c113b3f2a049b80e5cce7d": "74a443081f936516b64dfafcb44b2922",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/47/e3e0bc0720864b01ea2cfdaacd6bdcd4b46ef2": "338378df987217407052684a518af504",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4c/9edbd2b98d23267ec495d029f3dddcccffe289": "beaa9ab36dc48d0cfe4032fc80f7c077",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/0e4987890b9481cec1909307ae1e5d5349bbf5": "a0f24dd9ee53a6facbd74be7a928fd24",
".git/objects/57/745f5a6de2d9cc013845d0ab3eee633f5b36b6": "547918733b98077cc296a1b57c9823ff",
".git/objects/5a/3d676afead64f389a163c42600fead17506fe8": "baa9b6723a18332ba64961fc4897df16",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/64/4cae989a154f4d8e902325d2c4c889efa1275f": "5d9acaa42431e87e18f563496ab87d9c",
".git/objects/66/29f576152b961d3c469e6f4624805da732a326": "b91c57fda8edaa52161b3f33491971a1",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/69/493bc7ca31288413008bf1afa90e71ce723fbd": "b7e02d681169754672a8b47c57f52678",
".git/objects/6a/08b54dc86b6e3224bd6199cb8ecd623899b4ce": "b03adb98cc01a12d31238cc5bf9e7f34",
".git/objects/6b/881a920d520bda222d609e7039c78108966f8a": "5a46034849c8d500fb3f1a7c1bd8ed6f",
".git/objects/6e/13a8dc5209d47d1005aabc49d8186bb83f087c": "7ddc535a23413b75be469fb603d203a1",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7e/eacb856cb57706a8675db87f1154b515c3de01": "757ddc3bb0ca5b94d6f4f30ca6eb4116",
".git/objects/86/f9ce3b3acae1480fe4207e1e1e115f5fb23483": "4ba8099a6f502aa7fb13153a1036bdc6",
".git/objects/8b/42d99a3f054040d277adc9711defcce0f6bc3b": "41f8ea250c23f7819fe6a4c0778e26b2",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8f/e527d4586efdb8470480c078f428265ae2cd55": "1120e8910d30e0f5e3362cff2ed43a63",
".git/objects/92/1b2e550f90e2526b68c953187cdff5cf6bca90": "01de038a5bcb4b045f17cde5ba53ee43",
".git/objects/93/6c240b6d9d9c547932022f58819c856281797e": "492180477b58ae4ecbfb5ec7107478e8",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/efbd06402ddd4b213da49057d356c29a61a1f3": "8dbbe64f2ffda84dc98a02c652e5e828",
".git/objects/9d/98237d963419f92baeb541ef516f014ae7c970": "b0ff1f0c7a0d5a38f34cfb6f640e52a8",
".git/objects/a2/77ad994ae07cb167570189f1dfd828dd9f4125": "bf2d6b0fbf1d9148d300ceb82d47504a",
".git/objects/a9/3c6add649c17b66900f2598c7aa1d391181617": "564d2e1445a8a60f63a3ab66b44e03a6",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ab/5eea05e8d8aa85636fba7f53504f2adeb02430": "8b12431d7cea77bd09730eeb69405251",
".git/objects/b4/1ac30e2519aeb1d13a5e52e9f6e8e950e1c2a8": "49fe9803744311098196b5eee4490230",
".git/objects/b9/5e912b54dd2add3d053be9cfce1a76c688aadc": "42f382bec3f217b20cc9a2def04ba97e",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/e09bb9d670d02cf574444ad94d2daf83f0bf5f": "49d87fb874ebabd3545329129f070279",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bd/f1d07f1c1a293d7734fd2f72609a3512875496": "6a932ce9a386102cb082f4c3f3c25164",
".git/objects/bf/0a10609364b1458a3f276fb2c23ea98ced8c09": "2b7d004174c754b0dc848f8bf208669a",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c3/f45e9f02fdeb5ea082303d48ea8fcc4ba1f120": "1212bbbf94d0dbe021192deb4ad3221e",
".git/objects/c4/f5069b7556c86f48e48e04ddd15c5758a1962a": "5b211b78f78ba1466d8adeb6473e88f1",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/aba0ea7ef9303009542c1954bbbb2d0018170f": "8a00be075e7f7aa3bde05b10c3055fba",
".git/objects/cb/3ebe10967c4660575cf8a1f4933aeddd87ef5e": "15c7557266f5e2c51e232a62a112f0d3",
".git/objects/d1/0d0632f96e5fca7dd7096a0c7f177077db88e6": "b2f3c13fd2b1acd31fbc5aca575c8871",
".git/objects/d6/24c2300290fe0e787b211a00f703542affaca8": "5788401f1f55abd0d65fcc68ffd0d359",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/e573d7ded01485c0d8419730665bb7d5b03079": "d29d493321da32b5da0c71ce9eb1942c",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/6fd592056b7aae5e2440e57b5f147fa046ff7a": "cd163bd92f7964feed9b8d5beb8ba01a",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/f2/28d4431a1aef7ebc8fc37314ec95871cb8004d": "40e81a393d214bbd8d70758c380aa24e",
".git/objects/f8/664d27e896f50539564d6d6a4ac7a57cd35693": "dee72e0d664b1bd4a3354fa7f86ddaf3",
".git/objects/fb/2ffde0016010e9a1315382f70490fd82af1799": "3e3cf09781cc40bbe14ac32c7590d315",
".git/objects/fb/b1e69cc043f49254be1bd11bd953785cf272dc": "0571a28b29c147953aabc5581115345e",
".git/objects/fc/7d0d3e7ed1b6e8989640bcbdaf327f07be1b95": "3973a2eea338c19713c55c4e041d1d33",
".git/objects/fd/44c9e92581e44f0898eaa69a099af25b46dee3": "838a3b14bd9a109caa075ce2a7165d7c",
".git/objects/fe/6fb2dcdd3babe8d966b92ecf0cca0cf06e0e6b": "c89d8266e7e1f070d12a3b6c9575cdb6",
".git/refs/heads/main": "cbff67a739272ed8d6f91475332c17ad",
".git/refs/remotes/origin/main": "cbff67a739272ed8d6f91475332c17ad",
"assets/AssetManifest.bin": "99f3a525d58e8f563288017c69dda098",
"assets/AssetManifest.bin.json": "8dddea3412774acda4acf481f79207da",
"assets/AssetManifest.json": "96afc9a58a362a6b046c4048fca85504",
"assets/assets/icons/arrow_cooling.png": "2daa29463d78590eaa564ee2df648460",
"assets/assets/icons/arrow_grey.png": "e350d67ff5458f93775247404cbee9cb",
"assets/assets/icons/arrow_heating.png": "8f254678541502393a115f49474e0d4a",
"assets/assets/icons/drops.png": "87511058af82499bfa0b4e2f71d82aec",
"assets/assets/icons/drop_blue.png": "3cc0b4af4e817338e7213de85db2f945",
"assets/assets/icons/duct_blue.png": "289b677e0c0c9180dee60c9fd9b83f2d",
"assets/assets/icons/info_blue.png": "2b7c7a0029792630b849efda73069ba4",
"assets/assets/icons/pipe_blue.png": "79c32f9b3960f965f29eac2ad8972955",
"assets/assets/icons/spray.png": "ae413d6b1b5eeb4a9e95504816f33299",
"assets/FontManifest.json": "bc916675c6aef3a6d2acdf8a530e2cac",
"assets/fonts/MaterialIcons-Regular.otf": "910545890c41db9bd264fd992d9fa6a4",
"assets/fonts/MyFlutterApp.ttf": "ad8cd47c143e8c5037159f7938237992",
"assets/fonts/RobotoMono-VariableFont_wght.ttf": "bba1be3e14d89a5d7f2c22bd719f8284",
"assets/NOTICES": "56dc3117fed156ce5a4ad04789cad867",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "0ea193eb2927da3a102cfdecaa16bf26",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "3c616e75da85de498bad9192c95b9ce8",
"icons/Icon-512.png": "a26926f95a73152404cbb529091491ac",
"icons/Icon-maskable-192.png": "3c616e75da85de498bad9192c95b9ce8",
"icons/Icon-maskable-512.png": "a26926f95a73152404cbb529091491ac",
"index.html": "23f36e2ca84d79ea6a0120cc30cb0f80",
"/": "23f36e2ca84d79ea6a0120cc30cb0f80",
"main.dart.js": "b5003b11f4cf2476a254838ebfdecca9",
"manifest.json": "ebb13b4bae1d7e999fa9c6de38c90a65",
"version.json": "f9f86dee7891e2601f0f79d6c3dd0736"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
