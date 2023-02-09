Search.setIndex({docnames:["API/core","API/functions","API/systems","API/tools","API/wrappers","API/wrappers/crest","API/wrappers/dftbplus","API/wrappers/orca","API/wrappers/packmol","API/wrappers/xtb","Guide/functions","Guide/run","Guide/setup","Guide/systems","Guide/tools","api","contributor-guide","getting-started","intro","release-notes","user-guide"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["API/core.md","API/functions.md","API/systems.md","API/tools.md","API/wrappers.md","API/wrappers/crest.md","API/wrappers/dftbplus.md","API/wrappers/orca.md","API/wrappers/packmol.md","API/wrappers/xtb.md","Guide/functions.md","Guide/run.md","Guide/setup.md","Guide/systems.md","Guide/tools.md","api.md","contributor-guide.md","getting-started.md","intro.md","release-notes.md","user-guide.md"],objects:{"compechem.core":[[0,1,0,"-","dependency_finder"],[0,1,0,"-","geometry"]],"compechem.core.base":[[0,0,1,"","Engine"]],"compechem.core.dependency_finder":[[0,2,1,"","locate_crest"],[0,2,1,"","locate_dftbparamdir"],[0,2,1,"","locate_dftbplus"],[0,2,1,"","locate_executable"],[0,2,1,"","locate_orca"],[0,2,1,"","locate_vmd"],[0,2,1,"","locate_xtb"]],"compechem.core.geometry":[[0,0,1,"","MolecularGeometry"]],"compechem.core.geometry.MolecularGeometry":[[0,3,1,"","append"],[0,4,1,"","atomcount"],[0,4,1,"","atoms"],[0,4,1,"","coordinates"],[0,3,1,"","from_dict"],[0,3,1,"","from_xyz"],[0,5,1,"","level_of_theory_geometry"],[0,3,1,"","load_xyz"],[0,4,1,"","mass"],[0,3,1,"","to_dict"],[0,3,1,"","write_xyz"]],"compechem.core.properties":[[0,0,1,"","Properties"]],"compechem.core.properties.Properties":[[0,4,1,"","condensed_fukui_hirshfeld"],[0,4,1,"","condensed_fukui_mulliken"],[0,4,1,"","electronic_energy"],[0,3,1,"","from_dict"],[0,4,1,"","gibbs_free_energy"],[0,4,1,"","helmholtz_free_energy"],[0,4,1,"","hirshfeld_charges"],[0,4,1,"","hirshfeld_spin_populations"],[0,4,1,"","level_of_theory_electronic"],[0,4,1,"","level_of_theory_vibronic"],[0,4,1,"","mulliken_charges"],[0,4,1,"","mulliken_spin_populations"],[0,4,1,"","pka"],[0,3,1,"","set_condensed_fukui_hirshfeld"],[0,3,1,"","set_condensed_fukui_mulliken"],[0,3,1,"","set_electronic_energy"],[0,3,1,"","set_gibbs_free_energy"],[0,3,1,"","set_helmholtz_free_energy"],[0,3,1,"","set_hirshfeld_charges"],[0,3,1,"","set_hirshfeld_spin_populations"],[0,3,1,"","set_mulliken_charges"],[0,3,1,"","set_mulliken_spin_populations"],[0,3,1,"","set_pka"],[0,3,1,"","set_vibronic_energy"],[0,3,1,"","to_dict"],[0,4,1,"","vibronic_energy"]],"compechem.engines.dftbplus":[[6,0,1,"","DFTBInput"]],"compechem.engines.dftbplus.DFTBInput":[[6,5,1,"","dispersion"],[6,3,1,"","md_nvt"],[6,5,1,"","method"],[6,3,1,"","opt"],[6,5,1,"","parallel"],[6,5,1,"","parameters"],[6,3,1,"","simulated_annealing"],[6,5,1,"","solver"],[6,3,1,"","spe"],[6,5,1,"","verbose"]],"compechem.engines.orca":[[7,0,1,"","OrcaInput"]],"compechem.engines.orca.OrcaInput":[[7,3,1,"","freq"],[7,3,1,"","nfreq"],[7,3,1,"","opt"],[7,4,1,"","output_suffix"],[7,3,1,"","parse_output"],[7,3,1,"","scan"],[7,3,1,"","spe"]],"compechem.engines.xtb":[[9,0,1,"","XtbInput"]],"compechem.engines.xtb.XtbInput":[[9,3,1,"","freq"],[9,3,1,"","opt"],[9,4,1,"","output_suffix"],[9,3,1,"","parse_output"],[9,3,1,"","spe"]],"compechem.functions":[[1,2,1,"","calculate_fukui"],[1,2,1,"","calculate_pka"],[1,2,1,"","calculate_potential"]],"compechem.systems":[[2,0,1,"","Ensemble"],[2,0,1,"","SupportedTypes"],[2,0,1,"","System"]],"compechem.systems.Ensemble":[[2,3,1,"","add"],[2,4,1,"","atomcount"],[2,3,1,"","boltzmann_average"],[2,5,1,"","name"],[2,5,1,"","properties"],[2,5,1,"","systems"]],"compechem.systems.System":[[2,4,1,"","is_periodic"],[2,3,1,"","save_json"],[2,3,1,"","write_gen"]],"compechem.tools":[[3,2,1,"","add_flag"],[3,2,1,"","compress_dftb_trajectory"],[3,2,1,"","cyclization_check"],[3,2,1,"","dissociation_check"],[3,2,1,"","dump"],[3,2,1,"","maxdist"],[3,2,1,"","process_output"],[3,2,1,"","reorder_energies"],[3,2,1,"","save_dftb_trajectory"],[3,2,1,"","split_multixyz"],[3,1,0,"-","vmdtools"]],"compechem.tools.vmdtools":[[3,2,1,"","render_condensed_fukui"],[3,2,1,"","render_fukui_cube"],[3,2,1,"","render_spin_density_cube"]],"compechem.wrappers.crest":[[5,2,1,"","conformer_search"],[5,2,1,"","deprotonate"],[5,2,1,"","protonate"],[5,2,1,"","qcg_ensemble"],[5,2,1,"","qcg_grow"],[5,2,1,"","tautomer_search"]],"compechem.wrappers.packmol":[[8,2,1,"","packmol_cube"]]},objnames:{"0":["py","class","Python class"],"1":["py","module","Python module"],"2":["py","function","Python function"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:module","2":"py:function","3":"py:method","4":"py:property","5":"py:attribute"},terms:{"0":[1,2,3,5,6,9,10,11,13,17,18],"000":[11,17],"00000":[10,11,13,17],"00000066512472":11,"00000237049333":11,"00000303561805":11,"00000460644656":11,"00001":[13,17],"00100":11,"00200":11,"002047859242":11,"002508816182":[13,17],"003":3,"005":3,"00700":11,"00800":11,"01100":11,"01427":10,"0153":[13,17],"01613":10,"02":10,"03000":11,"03120153":10,"03200":11,"03300":11,"03345":10,"03400":11,"03700":11,"04000":11,"04100":11,"04200":11,"04400":11,"04447":10,"04496":10,"04600":11,"04637":10,"04700":11,"04900":11,"0526":10,"05358":10,"05361":10,"05364":10,"05500":11,"05600":11,"05665":10,"05800":11,"059":10,"05900":11,"061":10,"06400":11,"06600":11,"06700":11,"06800":11,"06840":10,"06865":10,"06900":11,"070544446446":[13,17],"07070":10,"07114":10,"07220":10,"07534":10,"07569":10,"07600":[10,11],"07700":11,"07900":11,"07956":10,"08100":11,"08137":10,"08200":11,"08273":10,"08300":11,"085021284485":11,"08537":10,"08700":11,"09169":10,"09191":10,"09203":10,"09300":11,"09395":10,"09539":10,"09579":10,"09621":10,"09900":11,"09908":10,"09967":10,"1":[1,2,6,9,11,13,17],"10":[10,11],"100":6,"1000":[1,6],"10100":11,"10866":10,"11":11,"11000":11,"11100":11,"11300":11,"11400":11,"11800":11,"12300":11,"12600":11,"12756":10,"12796":10,"13000":11,"13100":11,"13200":11,"13535":10,"13700":11,"13800":11,"13900":11,"14039":10,"14100":11,"14191":10,"14438":10,"14587":10,"14846":10,"14899":10,"15":[2,10],"150":5,"15157":10,"15200":11,"153":10,"15500":11,"15600":11,"158":11,"15867":10,"15992":10,"16128":10,"16200":11,"16600":11,"16724":10,"16900":11,"17200":11,"17400":11,"17900":11,"18":[13,17],"18000":11,"18024":10,"18100":11,"18200":11,"18300":11,"18302":10,"18700":11,"18800":11,"18867":10,"18968":[13,17],"18969":[13,17],"19053853060686":11,"19054464070025":11,"19600":11,"19700":11,"19800":11,"1k":6,"2":[10,11,13,14,17],"2000":6,"2000k":6,"20100":11,"20495":10,"20500":11,"20612":10,"20900":11,"21400":11,"21500":11,"21600":11,"21800":11,"21900":11,"22100":11,"22300":11,"22400":11,"22900":11,"23":10,"23200":11,"23500":11,"23598":10,"23800":11,"23951":10,"24000":11,"24200":11,"24300":11,"24400":11,"24800":11,"250":7,"25000":11,"25200":11,"25678":10,"25900":11,"26100":11,"26600":11,"26797":10,"26800":11,"27":13,"270":10,"27000":11,"27091":10,"27100":11,"27129":10,"27500":11,"27600":11,"27700":11,"27800":11,"27900":11,"28":10,"28800":11,"29":10,"297":2,"298":[6,10],"29800":11,"2s":13,"2x":[3,14],"3":[0,6,10,11,13,17,18],"300":6,"30000":11,"30100":11,"30200":11,"303":10,"30600":11,"30900":11,"31068":10,"31100":11,"32100":11,"32300":11,"32500":11,"32800":11,"32944":10,"33000":11,"33055":10,"33100":11,"33200":11,"33300":11,"33400":11,"33500":11,"33600":11,"33800":11,"33925":10,"34300":11,"34900":11,"350":[3,7,14],"35000":11,"35100":11,"35400":11,"35700":11,"35800":11,"36000":11,"36300":11,"36500":11,"36700":11,"368":[11,17],"37000":11,"37400":11,"37500":11,"37637":10,"37700":11,"37937":[13,17],"38000":11,"38108317130711":11,"38500":11,"38600":11,"38791":10,"38900":11,"39000":11,"39200":11,"39700":11,"39800":11,"39900":11,"3d":0,"3ob":6,"3rd":6,"4":[9,10,11],"40500":11,"40759":10,"41100":11,"41200":11,"41446":10,"41800":11,"41900":11,"42159":10,"42200":11,"42400":11,"42900":11,"43100":11,"43400":11,"43600":11,"43686":10,"44":10,"44000":11,"44100":11,"442":[11,17],"44400":11,"44500":11,"44900":11,"45200":11,"45600":11,"45700":11,"45800":11,"46100":11,"46700":11,"46800":11,"46900":11,"47400":11,"47800":11,"47900":11,"4800":3,"48300":11,"48400":11,"48500":11,"49100":11,"49200":11,"49500":11,"49600":11,"5":[10,11,13,17],"50":11,"500":6,"50200":11,"50300":11,"50700":11,"50900":11,"51000":11,"51300":11,"51500":11,"51700":11,"51800":11,"52000":11,"52100":11,"52200":11,"52300":11,"52500":11,"52600":11,"53000":11,"53166":10,"53200":11,"53412":10,"53500":11,"54800":11,"55000":11,"55400":11,"55500":11,"56100":11,"56300":11,"56400":11,"56700":11,"56900":11,"57200":11,"57300":11,"57400":11,"57600":11,"57700":11,"57800":11,"58100":11,"58200":11,"58400":11,"58700":11,"59100":11,"59200":11,"59300":11,"59400":11,"59505":10,"59600":11,"6":[10,11],"60100":11,"60300":11,"60400":11,"60900":11,"61000":11,"61100":11,"61700":11,"61800":11,"62100":11,"62500":11,"62600":11,"62700":11,"63400":11,"63890":10,"64000":11,"64100":11,"64500":11,"64700":11,"64900":11,"65100":11,"65200":11,"65600":11,"65900":11,"66000":11,"66100":11,"66300":11,"66703":10,"66900":11,"67200":11,"67400":11,"67500":11,"67600":11,"67800":11,"68000":11,"68300":11,"68800":11,"69100":11,"69200":11,"69600":11,"69700":11,"69800":11,"69900":11,"7":[1,10,11],"70000":11,"70200":11,"70500":11,"70800":11,"71100":11,"71300":11,"71500":11,"71900":11,"72300":11,"72400":11,"72600":11,"72700":11,"73000":11,"73073":10,"73100":11,"73200":11,"736":[11,17],"73900":11,"74500":11,"74700":11,"75200":11,"75400":11,"76600":11,"76700":11,"77200":11,"77221":[13,17],"77300":11,"77400":11,"77436561057077":11,"77437021701733":11,"77700":11,"77900":11,"78200":11,"78700":11,"78900":11,"79600":11,"79700":11,"79900":11,"8":11,"80400":11,"80700":11,"81000":11,"81200":11,"81400":11,"81500":11,"81600":11,"81700":11,"81800":11,"82000":11,"820570037973":10,"82300":11,"82900":11,"83300":11,"84000":11,"84147":10,"84200":11,"84500":11,"84600":11,"84900":11,"85700":11,"86600":11,"87000":11,"87300":11,"87500":11,"88300":11,"89180":10,"89300":11,"89400":11,"89500":11,"9":11,"90100":11,"90200":11,"90300":11,"90600":11,"90619":10,"90700":11,"90800":11,"91000":11,"91200":11,"91500":11,"92200":11,"92700":11,"92900":11,"93000":11,"93200":11,"93400":11,"93800":11,"94300":11,"94500":11,"95000":11,"95100":11,"95200":11,"95300":11,"95600":11,"95700":11,"95900":11,"96256":10,"96400":11,"96500":11,"96600":11,"97000":11,"97100":11,"97500":11,"97600":11,"97700":11,"97900":11,"98000":11,"98100":11,"98200":11,"987":10,"99000":11,"99100":11,"99200":11,"99300":11,"99400":11,"99600":11,"997":11,"99700":11,"99800":11,"99900":11,"\u00e5":[2,6,8,10,11,13,14,17],"case":10,"class":[0,11,12,13,15,17,19],"default":[0,1,2,3,5,6,7,9,10,11,12,13,14,17],"do":[12,17],"export":[0,3,13],"final":3,"float":[0,1,2,3,6,8,10],"function":[0,7,9,11,12,14,15,16,17,19],"import":[0,10,11,12,13,14],"int":[0,1,2,3,5,6,7,8,9,10,14],"new":[0,3,6,7,9,11,14,16,19],"return":[0,1,2,3,5,6,7,8,9,10,11,14],"short":18,"static":0,"switch":[1,10],"true":[0,2,3,5,6,7,9,10,11,14,17],"voil\u00e0":17,"while":[0,5,10,14],A:[0,2,10,13,18],As:[10,12],At:17,Be:16,By:[3,6,11,14],For:[2,10,11,13,14,17],If:[0,1,3,5,6,9,10,12,14,16,17],In:[0,10,13],Is:3,It:14,NOT:7,That:10,The:[1,4,5,7,9,11,12,13,14,15,16,17,18,19],Then:16,These:[11,12],To:[11,12,13,16,17],_:10,_geo_end:13,_md:13,about:[13,14,15,17],accept:[0,14,16],accord:[0,1,6,10,13],accordingli:[10,11],account:10,accumul:10,accuraci:17,acetaldehyd:10,acetaldehyde_fukui_plu:10,activ:6,actual:[2,11],ad:[1,2,3,5,10,11,16,19],add:[0,2,3,5,8,16],addit:11,admonit:13,adopt:[0,14],advanc:[14,20],aforement:13,after:[5,11,12,17],afterward:16,aggreg:0,algorithm:15,all:[0,1,3,4,5,6,7,9,10,11,13,14,15,16,17,18],all_conform:14,alloc:1,allow:[0,11],alpb:5,alpb_solv:5,alreadi:[1,10,12,17],also:[1,3,6,10,11,14],altern:[5,11,17],ambientocclus:3,amount:1,amu:[10,13,17],an:[0,3,6,7,9,10,11,12,13,15,16,17,19],analys:20,analysi:[7,9,10,11],analyt:7,ani:[10,14,16],anneal:[6,11],annot:16,anyth:[3,12],api:[11,12,13,14,18],appear:16,append:[0,2],appli:[0,10],ar:[0,1,2,5,6,7,8,10,11,12,13,14,16,17,19,20],archiv:[2,6],argument:[10,14,19],around:19,arrai:0,ascend:5,ask:[13,16,17],assign:[10,11],associ:[0,10],assum:[1,10],atom:[0,1,2,10,11,13,14,15,17],atomcount:[0,2],attribut:[0,10,19],authent:16,automat:[0,1,3,5,6,7,9,10,12,13],aux_basi:[7,12],auxiliari:12,avail:[1,3,5,6,7,9,11,12,13,14,17,18,20],averag:[0,2,5],avogadro:17,awar:16,b3lyp:12,b:16,back:16,balanc:17,base:[2,8,10,19,20],basi:[10,12],basic:[15,17,18],basis_set:[7,10,12],been:[0,1,10,11,14,19],befor:[11,16,17],behavior:16,belong:0,below:17,between:[0,1,14,17],bin:0,bitmap:10,block:[7,15],blue:14,bmp:[3,10],bohr:9,boltzmann:2,boltzmann_averag:2,bool:[0,2,3,5,6,7,9],both:[10,14],box:[2,6,8,11,13],box_sid:[2,6,13],branch:16,brand:16,build:[0,15],built:[0,10,20],button:16,c:[10,11,17],calc:3,calcul:[0,1,2,3,4,5,6,7,8,9,10,13,14,15,18,20],calculate_fukui:10,call:[10,11,14,15],can:[0,2,3,10,11,13,14,16,17],canon:6,capabl:4,care:10,carri:[1,10,18],cartesian:0,cation:13,cd:16,cdot:10,certain:11,chang:[3,10,13,16],charg:[0,1,2,3,5,6,7,9,10,11,13,15,17,19],check:[0,3,6,10,14,19],checkout:16,chemistri:[13,18],chosen:[5,12],clariti:10,classmethod:0,clean:[0,3],clear:16,click:16,clone:16,close:13,cluster:[5,11],code:[10,11,12,15],collect:[13,14,18,20],com:16,come:[5,12,14,17],command:[12,16,17],comment:[0,10],commit:16,comp:[16,17],compar:14,compat:[0,1,5,6,9,10,16],compchem:16,compechem:[10,11,12,13,14,15,17,20],complet:[10,12,17],compon:[1,2,10,14],compos:[7,9,10],comprehens:14,compress:3,compress_traj:6,comput:[0,1,2,4,10,13,16,18],conceptu:13,concis:16,conda:17,condens:[0,1,3,10,14],condensed_fukui_hirshfeld:0,condensed_fukui_mulliken:0,condit:[0,6],conf:14,config:0,configur:[10,16],conform:[5,11,13,14],conformer_search:11,consid:[0,1,10],constant:[10,19],constrain:7,constraint:7,construct:[0,11],constructor:2,contain:[0,1,2,3,4,5,6,7,9,10,12,13,14,17],content:[13,15],contour:3,contribut:[1,2,3,5,10,16,18],contributor:18,control:11,convent:14,converg:[5,11],convert:3,cool:6,coordin:[0,7,11,13],copechem:14,copi:[3,16],coput:0,core:[1,3,5,6,7,9,10,14,15],correct:[0,6,12],correspond:[11,12,13,14],count:14,cov:16,cover:18,creat:[2,11,12,16],crest:[0,3,4,10,13,14,15],crest_best:5,crestpath:5,cube:[1,3,7,9,10,11],cube_dim:7,cube_grid:1,cube_sid:[8,11],cube_step:9,cubefil:3,cubegrid:1,cubfil:3,cubic:[8,11],current:[0,2,3,7,11,12,13,14,17],customis:11,cycl:13,cycliz:[3,9,14],d3:6,d3bj:12,d3zero:14,data:[0,2,3,6,17,19],databas:17,debug:14,decid:20,def2:[7,10,12],defin:[0,1,2,3,6,10,17,20],definit:[0,10],degre:11,densiti:[3,7,8,9,10,11,14],depend:19,deprotom:[5,10,11],deproton:[1,3,10,11,15],deriv:[7,9],describ:2,descript:[15,18],desir:0,detail:[11,14,17,18],detect:[0,1,3,7],develop:18,dftb:[0,6,11,12,13,15],dftbinput:12,dftbparamdir:6,dftbpath:6,dftbplu:[4,12,13,17],dftbplus_param_dir:[0,6],dict:[0,1],dictionari:[0,10],dictionati:0,differ:[1,3,10,11,20],differenti:19,directli:11,directori:[3,5,6,7,9,14,16],disabl:0,disk:2,dispers:[6,12],dissoci:[3,9,14],distanc:14,distort:17,distribut:6,divid:[15,20],docstr:16,document:16,doe:0,dof:3,done:12,dot:14,doublet:[1,10],draw:17,due:17,dummi:[5,6,9],dure:[3,6,10,14,15],dynam:[6,11,13,20],e:[3,10,14],e_:10,each:[0,1,2,10,11,14,17],earli:19,echem:[16,17],eh:[10,11,13,17],eigensolv:6,either:[1,6,10],electrochem:17,electron:[0,1,2,3,5,6,7,9,10,11,13,14,17,19],electronic_energi:0,electronic_engin:0,element:[0,2,10],els:0,empti:3,enabl:[1,3],encod:0,end:6,end_fil:[3,14],energi:[0,1,2,3,5,6,7,9,10,11,13,14,15,17,20],engin:[0,1,10,11,12,15,19],ensambl:2,ensebl:5,ensembl:[1,5,6,7,11],ensemble_choic:5,enslvl:5,enter:16,environ:[0,6,17],equilibrium:[10,17],equival:[0,10],error:0,et:17,etc:[12,15,17,20],evalu:[1,11],eventu:10,everi:6,exact:10,exampl:[10,11,12,13,14,15,17],example_fil:17,except:[0,1,2,7,9],execut:[0,5,6,16],exist:13,expect:[10,13,14],explain:10,explan:17,explanatori:16,explicit:[0,11],explicitli:[5,11],extens:10,extern:[12,15],extract:13,f0:[0,1,10],f:[0,1,10],factor:2,fail:16,fals:[0,2,3,6,7,9],fast:11,featur:[16,17,18],fermi:6,fermi_temp:6,file:[0,1,2,3,5,6,7,9,10,13,14,16,17,19],filenam:3,filepath:2,filetyp:2,fill:6,final_ensembl:5,finer:11,first:[2,10,16],flag:[3,5,11,17],fly:13,folder:[0,1,3,10],follow:[8,10,11,13,14,15,16,17,20],forc:1,fork:16,form:[1,7,9,10,17],format:[1,10,16,19],former:13,found:[0,5],frac:10,frame:[3,7,13],free:[0,2,10,13,17],freq:[7,9,11],frequenc:[7,9,10,11],friendli:0,from:[0,1,2,3,5,6,7,9,10,11,12,13,14,16,17,19],from_dict:0,from_xyz:0,fs:6,fukui:[0,1,3,14,15,19],full:6,full_ensembl:5,fulli:0,futur:[2,13],g:[3,8,11,14],g_:10,gaussian:[1,10],ge:[16,17],gen:2,gen_fil:2,gener:[0,2,3,5,8,10,12,13,14,15,18,19],geo:6,geo_end:3,geo_xyz:3,geom:7,geometr:[0,17],geometri:[1,2,3,5,6,7,9,10,11,13,14,15,17,19,20],get:[13,18],get_fold:0,gfn1:5,gfn2:[3,5,9,11,13,14,17],gfnff:5,gibb:[0,10,13,17],gibbs_free_energi:0,git:16,github:16,give:3,given:[0,1,2,3,7,9,10,11,14],global:14,go:[3,16,17],gram:10,graphic:14,green:16,greenenergystorag:17,grid:9,grimm:12,growth:[5,11],guid:[13,17],h:[10,11,13,17],ha:[0,1,3,10,14,19],hamiltonian:[6,17],hand:18,handi:14,hartre:[0,2],have:[1,11,14,17],heat:6,held:6,helmholtz:[0,2,10,13,17],helmholtz_free_energi:0,henc:10,here:14,high:14,hirshfeld:[0,1,7,10,19],hirshfeld_charg:0,hirshfeld_spin_popul:0,hold:19,hold_step:6,how:[2,10,11,13,16,20],howev:11,http:16,human:0,i:2,ident:2,identifi:10,ignor:[6,9],ignore_chir:3,imag:[3,10],implement:[0,11,12,17,18,19],implicit:12,includ:[2,3,10,12,14],include_neg:[3,10],index:[10,13,17],indic:[0,2,3,17],individu:[3,13,14,17],info:[3,6,7,9,13],inform:[6,13,15,17],ini:16,initi:[0,11,13],initialis:[12,13],inplac:[6,7,9,10,11,17],input:[0,1,3,5,6,7,9,10,11,12,14],inputmol:3,instal:[12,17,18],instanc:[12,17],instead:[0,6,7,9,11],integr:19,intend:[10,13],interact:14,interest:13,interfac:[6,7,8,9,10,12,15,16,18],intern:[13,14,15],invalid:2,invertconstraint:7,involv:20,is_period:2,isovalu:[3,10],iter:13,its:[1,2,10,12,17,19],itself:0,j:[7,12],json:[2,19],k:[2,6,10],kcal:10,keep:[5,11,16],kei:0,kelvin:6,kept:0,kind:11,koster:6,l:[8,11],lapack:6,last:13,last_fram:13,later:2,latest:16,latticeopt:6,lb:2,least:17,left:10,length:[2,6,8,11,13],let:[12,17],level:[0,1,2,3,6,10,12,13,14,15,17,19,20],level_of_theori:0,level_of_theory_electron:0,level_of_theory_geometri:0,level_of_theory_vibron:0,lib:0,librai:18,librari:[12,14,15,16,18],like:11,line:[10,12],list:[0,1,2,3,10,11,12,13,14],littl:11,ll:2,load:[0,2,5,6,19],load_xyz:0,local:[1,10,16],locat:[0,6,17],locate_crest:0,locate_dftbparamdir:0,locate_dftbplu:0,locate_execut:0,locate_orca:0,locate_vmd:0,locate_xtb:0,look:[7,9,13,14],low:14,lowest:[10,13],lowest_energy_conform:11,m062x:10,m06:[3,14],m:10,main:[10,13,16],make:16,mandatori:11,manual:[1,6,10,15],mass:[0,10,13,17],match:[0,15],maxcor:[1,3,5,6,7,9,10,14],maximum:[1,6,14],mayb:2,mb:[1,3,7,14],md:[3,6,11,13],md_nvt:[6,11],md_out:3,mdrestartfreq:6,mdtrajectori:[3,13,19],mean:14,meant:14,mechan:10,memori:[1,3,6,7,10,14],merg:16,messag:16,method:[0,3,5,6,7,9,10,11,12,13,17,20],method_el:[1,3,10,14],method_opt:[3,10,14],method_vib:[1,3,10,14],mh_:10,mid:15,might:14,minim:10,mismatch:[0,1,14],mode:0,model:[7,12],modul:[10,14,15,17],mol:[3,5,6,7,9,10,11,14],mol_opt:11,molecul:[0,1,2,3,5,6,7,8,9,10,11,13,14,17,19],molecular:[0,2,6,10,11,14,15,17,20],moleculargeometri:[0,19],molecule_list:[3,14],molecules_list:3,more:[2,11,13,17],most:17,mostli:14,move:19,mpi:6,much:13,mulliken:[0,1,10],mulliken_charg:0,mulliken_spin_popul:0,multepl:[1,10,13,17],multi_xyz_list:14,multipl:[1,2,3,13,14],must:[0,2,3,7,9,10,13,15],my_en:13,my_list:13,my_mol1:13,my_mol2:13,my_mol3:13,my_mol:13,my_system:13,my_traj:13,my_traj_geo_end:13,my_traj_md:13,mymol:[11,14],mystem:20,n:[10,11],namd:[12,19],name:[0,2,3,7,9,11,13,16],ncore:[1,3,5,6,7,9,10,14],ndarrai:0,necessari:[15,17],need:[3,10,11,12,13,15,17],neg:[3,10,14],neutral:2,newmol:[6,7,9],nfreq:[7,11],no_charged_frag:3,nompi:6,none:[0,1,2,3,5,6,7,8,9,10,13,17],normal:[0,1,14,15],note:[2,6,7,13],notic:[1,10,17],now:[16,17,19],np:0,nsolv:[5,8,11],nuclear:10,number:[0,1,2,3,5,6,7,8,9,10,11,13,14,15,17,18],numer:[4,7,9,11,13],numpi:[0,16],nvt:[6,11],o:[10,11,13,17],obj:3,object:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,18,19],observ:[9,14,15,20],obtain:[0,6,10,17,20],occur:[0,3,14],off:6,old:0,onc:10,one:[0,1,2,10,13,17],ones:14,onli:[1,5,6,7,10,11,13,14,16],open:[3,14,16,17],openmpi:[0,6],oper:[0,4,14,15,18],opt:[6,7,9,10,11,17],optim:[1,3,5,6,7,9,10,14,17],optimis:[11,17,20],option:[0,1,2,3,5,6,7,8,9,10,11,12,13,17,19,20],orang:14,orca:[0,1,4,5,6,9,10,11,12,15,19],orcadir:7,orcainput:[1,3,10,12],order:[0,1,5,6,11,14],organ:19,origin:[9,16,17],other:[4,8,11],otherwis:[2,6],our:17,out:[1,3,6,10,13,14,18],output:[2,3,6,7,9,10,11,14,20],output_dens:[1,3,10],output_fil:3,output_format:3,output_prefix:3,output_suffix:[7,9],over:13,own:16,oxidis:[1,10],packag:[15,16,17,18],packmol:[4,17],packmol_cub:[8,11,17],page:[11,17],parallel:6,paramet:[0,1,2,3,5,6,7,8,9,11,13,17,20],parent:3,pars:[3,6,7,9],parse_output:[7,9],parser:19,part:3,particl:6,pass:[11,16],path:[0,2,3,5,6,7,9,13,14,17],pbc:6,pbe:7,pcet:10,per:[3,7,14],perform:20,period:[2,6,13],person:16,ph:[1,10],philosophi:18,physic:[10,15,20],pickl:3,pk_:10,pka:[0,1,13,15,17,20],place:10,pleas:[1,10,11,12,13,14,17],plot:[3,10],pm1:10,point:[0,6,7,9,11,20],popul:[0,7],posit:[0,14],poss:10,possibl:[10,13,16],potenti:[1,15,20],prefer:17,prefix:[3,13],presenc:3,present:[5,10,14],previou:11,primari:13,print:[6,10,11,13],process:3,produc:1,program:[0,5,11,12,14,17,18,20],progress:16,project:16,proper:10,properli:16,properti:[1,2,4,7,9,10,13,14,15,17,19],propertiesarch:2,protocol:1,protom:[5,11],proton:[1,10,11,15],provid:[10,11,13,14,15,16,18,20],ps:11,pull:16,purpos:12,push:16,put:11,pytest:16,python:[13,16,17,18],qcg:11,qcg_ensembl:11,qcg_grow:11,quantiti:10,quantum:[5,11,13],quick:[13,18],r:10,radic:13,rais:[0,1,2,7,9],ramp:6,ramp_step:6,ran:13,re:[0,2,19],reach:[5,6,11],reaction:10,read:3,readi:17,recalcul:14,red:14,redox:[1,15,20],reduc:[1,10],reduct:[1,10],refactor:19,refer:[0,11,12,13,14,15,16,17,18,19],rel:[11,17],relat:[0,13,14],relax:[7,11],relev:[7,9],remot:16,remov:[1,5,6,7,9,10,19],remove_tdir:[5,6,7,9],renam:13,render:[3,10,14,19],render_condensed_fukui:3,render_fukui_cub:[3,10],render_spin_density_cub:3,reorder:[3,14],replac:[1,10],report:14,reposiotri:16,repositori:16,repres:[0,2,3,10,14,15,16],represent:[0,2,14],request:[0,3,13,16],requir:[0,3,8,11,14],resolut:[1,3,7],respect:11,result:20,review:16,rho_:10,right:10,rightarrow:10,ring:[3,14],routin:[3,10,11,13,14],rstrip:0,rt:10,run:[4,6,7,8,9,13,15,16,20],runtimeerror:[0,1,7,9],s:[10,12,13,18],safe:3,sake:10,same:[3,10,14],save:[0,1,2,3,6,7,9,10,19],save_cub:[3,7,9],save_json:2,scan:[7,11],scan_list:7,screen:17,script:[10,17],search:[3,5,10,11,14,19],section:[7,12,13,17,20],see:17,select:[1,2,6,10],self:16,sensibl:[16,17],separ:[2,14,17,19],sequenti:10,seri:[2,10,12,14],set:[0,1,2,3,5,6,7,9,10,11,13,20],set_condensed_fukui_hirshfeld:0,set_condensed_fukui_mulliken:0,set_electronic_energi:0,set_gibbs_free_energi:0,set_helmholtz_free_energi:0,set_hirshfeld_charg:0,set_hirshfeld_spin_popul:0,set_mulliken_charg:0,set_mulliken_spin_popul:0,set_pka:0,set_vibronic_energi:0,setup:17,shadow:3,share:6,she:10,shold:16,should:15,show:[13,16],side:[2,6,8,13],sign:10,significantli:13,simpl:[0,14,16,18],simpli:[10,11,13,17],simul:[6,11,13,17,20],simulated_ann:[6,11],sinc:16,singl:[3,6,7,9,11,20],singlet:[1,2,10,13],slater:6,smaller:6,smd:[7,12],smile:14,snippet:10,softwar:[0,4,15,17,18,19],solut:[5,8,11,17],solvat:[5,7,8,11,12,17],solvated_cub:11,solvent:[5,7,8,9,10,11,12,13,17],solver:6,some:[10,11,12,13,14,18,19],soon:12,sourc:16,space:[0,9],spe:[6,7,9,11],speci:[1,10,15],specif:[11,12,14,15,17],specifi:[0,1,5,10,12],speed:17,sphinx:16,spin:[0,1,2,3,5,6,7,9,10,11,13,14,15,17],spin_stat:1,spins_stat:[1,10],split:[3,14],standard:16,start:[0,1,3,6,11,18],start_fil:[3,14],start_temp:6,state:[1,10],step:[6,13],still:13,store:[0,1,2,13,15,17],str:[0,1,2,3,5,6,7,8,9],streuctur:10,strict:0,strict_mod:0,string:[0,3,7,9,14],structur:[0,3,10,13,14,15,17],studi:[10,13,15,17],subfold:0,subject:12,submit:16,submodul:[10,11,12,13,14,15,17,20],subtract:1,successfulli:17,suffix:[3,7,9,14],suit:16,sum:10,support:[2,6,7,10,12,13,16],supprot:10,sure:16,surfac:[7,11],surround:11,symbol:0,syntax:[10,14,17],system:[0,1,3,4,5,6,7,8,9,10,11,12,14,15,19,20],system_list:3,sysyem:19,t:10,take:[10,19],taken:[2,3,5,6,7,9,10],target:[8,11],target_den:[8,11],target_temp:6,tautom:[5,11],tautomer_search:11,team:16,temperatur:[2,6],templat:14,temporari:[3,5,6,7,9],term:[6,10],test:[16,19],the_name_of_the_branch:16,thei:11,theori:[0,1,2,3,6,10,12,13,14,17,19,20],therefor:14,thermost:6,thi:[6,10,11,12,13,14,15,17,18,20],thing:13,think:2,third:[8,11],thirdord:6,those:4,three:[8,11],through:17,throughout:15,time:[2,6,10,16],timestep:6,titl:16,to_dict:0,togeth:10,tool:[10,15,19,20],topolog:14,total:[2,5,6,7,9,10,13,14,17],tour:18,tox:16,trajectori:[3,6,13],treat:7,tree:3,tridimension:0,two:[2,8,10,11,13,14],type:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,20],typeerror:1,typic:17,tzvp:[7,10,12],unconstrain:5,undefin:0,under:[10,13,15],union:[0,1],unit:[0,6,16,19],unoptimis:10,unpair:1,until:[5,10,11],up:[11,16,20],updat:[4,5,6,7,9,11,13,16,17,19],upstream:16,urea_50wat:11,us:[0,1,2,5,6,7,9,10,11,12,13,15,16,17,20],use_huckel:3,user:[0,1,10,13,14,15,17],usernam:16,utilis:17,v:[10,16],vacuum:5,valid:[0,7,9,10],valu:[0,1,2,10,12,13,14],valueerror:[0,2],variabl:[0,5,6,9,11,13],variou:[2,11,14,15,20],vector:0,veloc:[11,19],verbos:6,veri:[13,16,17],verifi:16,versa:1,version:[0,6,16,18],via:[10,13,14,17],vibron:[0,1,2,3,5,10,11,13,14,17,19],vibronic_energi:0,vibronic_engin:0,vice:1,violet:14,visibl:16,visual:17,vmd:[0,3,10,19],vmd_path:3,vmdtool:[10,14],volt:10,volum:10,volumetr:[3,10,14],wa:13,want:[16,17,18,20],warn:[0,3,11],water:[10,11,12,13,17],we:[11,13,17],weight:[0,2,5],welcom:16,well:16,what:[10,16],when:[0,1,2,10,13,16],whenev:0,where:[3,6,10,13,16,17],which:[0,1,2,3,6,7,9,10,11,12,13,14,16,17,20],whole:16,whose:3,wip:13,wish:12,within:11,without:10,work:[5,6,7,9,11,16],wrapper:[11,12,13,14,15,17,19,20],write:[2,16],write_gen:2,write_xyz:[0,13],written:[7,9],x:[10,13,17],xtb:[0,1,4,6,10,11,12,14,17],xtbinput:[1,3,10,11,12,13],xtbpath:9,xyz:[0,2,3,10,11,13,14,17],y:[10,13,17],yield:13,you:[11,12,13,16,17,20],your:[16,20],your_usernam:16,yourself:17,z:[10,13,17],zip:6},titles:["<code class=\"docutils literal notranslate\"><span class=\"pre\">compechem.core</span></code> module","<code class=\"docutils literal notranslate\"><span class=\"pre\">compechem.functions</span></code> sub-module","<code class=\"docutils literal notranslate\"><span class=\"pre\">compechem.systems</span></code> sub-module","<code class=\"docutils literal notranslate\"><span class=\"pre\">compechem.tools</span></code> sub-module","<code class=\"docutils literal notranslate\"><span class=\"pre\">compechem.engines</span></code> sub-module","<code class=\"docutils literal notranslate\"><span class=\"pre\">compechem.wrappers.crest</span></code> sub-module","<code class=\"docutils literal notranslate\"><span class=\"pre\">compechem.engines.dftbplus</span></code> sub-module","<code class=\"docutils literal notranslate\"><span class=\"pre\">compechem.engines.orca</span></code> sub-module","<code class=\"docutils literal notranslate\"><span class=\"pre\">compechem.wrappers.packmol</span></code> sub-module","<code class=\"docutils literal notranslate\"><span class=\"pre\">compechem.engines.xtb</span></code> sub-module","Analysing results","Running calculations","Setting up calculations","Defining molecular systems","Useful tools","API Documentation","Contributor\u2019s guide","Getting Started","GES-comp-echem User Guide","Release notes","User guide"],titleterms:{"0":19,"1":10,"3":19,"class":[2,5,6,7,8,9],"function":[1,3,10],"import":17,The:[0,2,3,10],add_flag:3,analys:10,api:15,auto_calculate_pka:10,base:[0,14],calcul:[11,12,17],calculate_fukui:1,calculate_pka:[1,10],calculate_potenti:1,carri:17,comp:18,compechem:[0,1,2,3,4,5,6,7,8,9],compress_dftb_trajectori:3,conformer_search:5,contributor:16,core:0,creat:17,crest:[5,11],cyclization_check:[3,14],defin:13,dependency_find:0,deproton:5,develop:16,dftbinput:6,dftbplu:6,dissociation_check:[3,14],document:15,dump:3,echem:18,el:10,engin:[4,6,7,9],ensembl:[2,13],enumer:2,first:17,fukui:10,ge:18,gener:[11,16],geometri:0,get:17,guid:[16,18,20],introduct:17,librari:17,maxdist:[3,14],modul:[0,1,2,3,4,5,6,7,8,9],molecular:13,my:17,note:[12,19],object:17,orca:7,orcainput:7,out:17,packmol:[8,11],pka:10,potenti:10,print:17,process:16,process_output:3,properti:0,proton:5,qcg_ensembl:5,qcg_grow:5,redox:10,releas:19,reorder_energi:[3,14],result:[10,17],run:11,s:16,save_dftb_trajectori:3,set:12,singl:13,special:11,split_multixyz:[3,14],start:17,sub:[0,1,2,3,4,5,6,7,8,9],supportedtyp:2,system:[2,13,17],tautomer_search:5,tool:[3,14],up:12,us:14,user:[18,20],version:19,vmd:14,vmdtool:3,wrapper:[4,5,8],xtb:9,xtbinput:[8,9,17]}})