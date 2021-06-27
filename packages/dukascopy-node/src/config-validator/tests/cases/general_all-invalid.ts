const config = {
  instrument: '',
  dates: '',
  timeframe: '',
  priceType: '',
  utcOffset: '',
  volumes: '',
  ignoreFlats: ''
};

const expectedOutput = {
  isValid: false,
  validationErrors: [
    {
      actual: '',
      expected:
        '0005hkhkd, 0027hkhkd, 0175hkhkd, 0291hkhkd, 0386hkhkd, 0388hkhkd, 0700hkhkd, 0857hkhkd, 0883hkhkd, 0939hkhkd, 0941hkhkd, 0998hkhkd, 1093hkhkd, 1177hkhkd, 1288hkhkd, 1299hkhkd, 1398hkhkd, 1810hkhkd, 1918hkhkd, 2007hkhkd, 2018hkhkd, 2318hkhkd, 2388hkhkd, 2502jpjpy, 2503jpjpy, 2628hkhkd, 2822hkhkd, 2828hkhkd, 2833hkhkd, 2836hkhkd, 2914jpjpy, 3188hkhkd, 3333hkhkd, 3382jpjpy, 3436jpjpy, 3968hkhkd, 3988hkhkd, 4004jpjpy, 4005jpjpy, 4063jpjpy, 4452jpjpy, 4502jpjpy, 4503jpjpy, 4507jpjpy, 4523jpjpy, 4543jpjpy, 4689jpjpy, 4911jpjpy, 5108jpjpy, 5301jpjpy, 5401jpjpy, 6098jpjpy, 6301jpjpy, 6367jpjpy, 6501jpjpy, 6502jpjpy, 6503jpjpy, 6506jpjpy, 6702jpjpy, 6752jpjpy, 6758jpjpy, 6762jpjpy, 6902jpjpy, 6954jpjpy, 6971jpjpy, 7201jpjpy, 7203jpjpy, 7261jpjpy, 7267jpjpy, 7269jpjpy, 7270jpjpy, 7751jpjpy, 7974jpjpy, 8031jpjpy, 8035jpjpy, 8306jpjpy, 8316jpjpy, 8411jpjpy, 8766jpjpy, 8801jpjpy, 8802jpjpy, 9020jpjpy, 9432jpjpy, 9433jpjpy, 9501jpjpy, 9983jpjpy, 9984jpjpy, aususd, a2aiteur, aaususd, aabvususd, aalgbgbx, aalususd, aaplususd, abbsesek, abbnchchf, abcususd, abevususd, abfgbgbx, abibeeur, abtususd, acfreur, acafreur, acseseur, acxeseur, adbeususd, adenchchf, adiususd, admgbgbx, adpususd, adsdeeur, adskususd, aenaeseur, aepususd, affreur, agkgbgbx, agliteur, agnnleur, agsbeeur, ahnleur, ahtgbgbx, aifreur, aigususd, airfreur, akzanleur, alfasesek, allususd, alofreur, alvdeeur, alxnususd, amatususd, amdususd, amgnususd, ampiteur, ampususd, amseseur, amtususd, amwlususd, amznususd, antmususd, antogbgbx, apaususd, apdususd, asmlnleur, atcoasesek, atliteur, atviususd, audcad, audchf, audjpy, audnzd, audsgd, audusd, avgbgbx, avbususd, avgoususd, axpususd, azmiteur, azngbgbx, aznususd, azoususd, bagbgbx, baususd, babgbgbx, babaususd, bacususd, baerchchf, bamiiteur, barcgbgbx, basdeeur, batsgbgbx, bayndeeur, bbdususd, bbvaeseur, bbyususd, bciteur, bchusd, bdxususd, beideeur, belgbeeur, biduususd, biibususd, birgieeur, bkususd, blndgbgbx, bltgbgbx, bmpsiteur, bmwdeeur, bmyususd, bnfreur, bnpfreur, bnzlgbgbx, bossdeeur, bpgbgbx, bpususd, bpeiteur, brbygbgbx, breiteur, brkbususd, bsxususd, btgbgbx, btcusd, bundtreur, bzuiteur, cususd, cafreur, cabkeseur, cadchf, cadhkd, cadjpy, cagususd, cahususd, capfreur, carlbdkdkk, cassiteur, catususd, cbkdeeur, cclgbgbx, cernususd, cerviteur, cfususd, chfjpy, chfsgd, chiidxusd, ciususd, clususd, clnchchf, cmcsaususd, cmeususd, cmgususd, cmiususd, cnagbgbx, cocoacmdusd, cofususd, coffeecmdusx, colobdkdkk, condeeur, copususd, coppercmdusd, costususd, cottoncmdusx, cpggbgbx, cpigbgbx, cpriteur, crdagbgbx, crgieeur, crhgbgbx, crmususd, csfreur, csususd, cscoususd, csgnchchf, csxususd, ctlususd, ctshususd, ctxsususd, cvaliteur, cvsususd, cvxususd, dususd, daideeur, dalususd, daniteur, danskedkdkk, db1deeur, dbkdeeur, deususd, dfsususd, dgfreur, dgususd, dgegbgbx, dhiususd, dhrususd, diaeseur, diaiteur, diaususd, dieselcmdusd, disususd, dltrususd, dnbnonok, dollaridxusd, dpwdeeur, dsbfreur, dsmnleur, dtedeeur, dukeur, dukususd, dvaususd, dvnususd, dvyususd, eaususd, ebayususd, ebsateur, edffreur, edppteur, eemususd, efaususd, efxususd, eixususd, elususd, eleeseur, eli1vfieur, eluxbsesek, embususd, emrususd, enfreur, eneliteur, engeseur, engifreur, eniiteur, eoandeeur, eogususd, eqtususd, ergiteur, ericbsesek, ethusd, euraud, eurcad, eurchf, eurczk, eurdkk, eurgbp, eurhkd, eurhuf, eurjpy, eurnok, eurnzd, eurpln, eurrub, eursek, eursgd, eurtry, eurusd, ewhususd, ewjususd, ewwususd, ewzususd, excususd, expeususd, expngbgbx, ezjgbgbx, ezuususd, brentcmdusd, fraidxeur, usa30idxusd, deuidxeur, eusidxeur, gbridxgbp, hkgidxhkd, espidxeur, lightcmdusd, jpnidxjpy, usatechidxusd, usa500idxusd, cheidxchf, ausidxaud, fususd, fbususd, fbkiteur, fcaiteur, fcxususd, fdxususd, feususd, fereseur, fitbususd, fmedeeur, foxaususd, fpfreur, frfreur, fredeeur, fresgbgbx, fxiususd, giteur, galppteur, gameseur, gascmdusd, gaseseur, gbpaud, gbpcad, gbpchf, gbpjpy, gbpnzd, gbpusd, gdxususd, gdxjususd, geususd, getibsesek, gfsgbgbx, gildususd, gisususd, givnchchf, gldususd, glefreur, glengbgbx, glwususd, gmususd, googususd, googlususd, gpsususd, gsususd, gskgbgbx, gwwususd, halususd, hcnususd, hdususd, heideeur, heianleur, hen3deeur, hesususd, hkdjpy, hmbsesek, hmsogbgbx, honususd, hpqususd, hsbagbgbx, humususd, iaggbgbx, ibbususd, ibeeseur, ibmususd, iceususd, iefususd, ifxdeeur, igiteur, ihggbgbx, ijhususd, ijrususd, ilmnususd, imtgbgbx, indidxusd, inganleur, intcususd, intuususd, invebsesek, inwiteur, ipgususd, ispiteur, isrgususd, itrkgbgbx, itubususd, itvgbgbx, itwususd, itxeseur, iveususd, ivwususd, iwdususd, iwfususd, iwmususd, iyrususd, jciususd, jnjususd, jnkususd, jpmususd, juveiteur, jwnususd, kususd, kbcbeeur, kerfreur, keyususd, kgfgbgbx, khcususd, kmbususd, kmiususd, kninchchf, koususd, kpnnleur, krususd, krxieeur, krzieeur, kssususd, lususd, landgbgbx, ldoiteur, lenususd, lgengbgbx, lhadeeur, lhnchchf, lifreur, lindeeur, lloygbgbx, llyususd, lmtususd, lonnchchf, lowususd, lrfreur, lrcxususd, lsegbgbx, ltcusd, luvususd, lvcfreur, lvsususd, lxsdeeur, lyxbnkfreur, mususd, maususd, maerskbdkdkk, marususd, matususd, mbiteur, mcfreur, mcdususd, mchpususd, mckususd, mdlzususd, metususd, mgmususd, mhgnonok, mksgbgbx, mmmususd, mndigbgbx, moususd, monciteur, mpcususd, mrkdeeur, mrkususd, mrnaususd, mroususd, mrwgbgbx, msiteur, msususd, msftususd, mtnleur, muususd, muv2deeur, ndasesek, neeususd, nemususd, nes1vfieur, nesnchchf, nflxususd, nggbgbx, nhynonok, nioususd, nkeususd, nldidxeur, nocususd, novnchchf, novobdkdkk, nre1vfieur, nrgususd, nscususd, nvdaususd, nwlususd, nxtgbgbx, nzdcad, nzdchf, nzdjpy, nzdusd, nzymbdkdkk, ojuicecmdusx, okeususd, omcususd, orfreur, orafreur, orclususd, orknonok, orlyususd, ote1vfieur, out1vfieur, oxyususd, pah3deeur, payxususd, pbrususd, pcarususd, pcgususd, pclnususd, pepususd, pfcgbgbx, pfeususd, pgususd, pgrususd, phususd, phianleur, piaiteur, plnidxpln, pltrususd, plugususd, pmususd, pncususd, pndoradkdkk, ppgususd, prugbgbx, pruususd, pryiteur, psaususd, psmdeeur, psngbgbx, psongbgbx, psxususd, ptonususd, pubfreur, pxdususd, pyplususd, qcomususd, qqqususd, raceiteur, randnleur, rbgbgbx, rbiateur, rbsgbgbx, rdsanleur, rdsbgbgbx, reciteur, reeeseur, regnususd, relgbgbx, rennleur, repeseur, rfususd, rifreur, riogbgbx, rmggbgbx, rnofreur, rogchchf, rokuususd, rostususd, rrgbgbx, rrcususd, rsagbgbx, rwedeeur, ry4cieeur, saffreur, saneseur, sanfreur, sandsesek, sapdeeur, sbrygbgbx, sbuxususd, scabsesek, schwususd, scmnchchf, sdfdeeur, sebasesek, secubsesek, sferiteur, sgdidxsgd, sgdjpy, sgegbgbx, sgofreur, sgsnchchf, shwususd, siedeeur, sjmususd, skabsesek, skfbsesek, skygbgbx, slagbgbx, slhnchchf, slvususd, smingbgbx, sngbgbx, snapususd, snowususd, soususd, solbbeeur, soonchchf, soybeancmdusx, spgususd, spmiteur, spyususd, sqususd, srenchchf, srgiteur, srsiteur, ssegbgbx, stangbgbx, stervfieur, stlnonok, stmiteur, sttususd, stzususd, sufreur, sugarcmdusd, svtgbgbx, swedasesek, swkususd, swmasesek, sykususd, syyususd, tususd, tapususd, tategbgbx, tecdaxedeeur, tefeseur, telnonok, tel2bsesek, teniteur, tevaususd, tgtususd, tisiteur, tititeur, tjxususd, tkadeeur, tls1vfieur, tlsnsesek, tltususd, tlwgbgbx, tmoususd, toditeur, tpkgbgbx, trniteur, trowususd, trvususd, tryjpy, tscogbgbx, tslaususd, tsmususd, tsnususd, tui1deeur, twtrususd, txnususd, uberususd, ubsgchchf, ucbbeeur, ucgiteur, ugfreur, uhrchchf, ukgilttrgbp, ultaususd, ulvrgbgbx, umibeeur, unanleur, unhususd, unpususd, upsususd, usiteur, usbususd, usdcad, usdchf, usdcnh, usdczk, usddkk, usdhkd, usdhuf, usdils, usdjpy, usdmxn, usdnok, usdpln, usdron, usdrub, usdsek, usdsgd, usdthb, usdtry, usdzar, usoususd, ussc2000idxusd, ustbondtrusd, uugbgbx, vususd, valeususd, veaususd, vfcususd, vgkususd, viefreur, vivfreur, vkfreur, vloususd, vmcususd, vnadeeur, vnqususd, vodgbgbx, voeateur, volvbsesek, vow3deeur, vpknleur, vrtxususd, vwsdkdkk, vxxususd, vzususd, wbaususd, wbditeur, wdcususd, weirgbgbx, wfcususd, whrususd, wklnleur, wmtususd, wosgbgbx, wppgbgbx, wtbgbgbx, wynnususd, xususd, xagusd, xauusd, xleususd, xlfususd, xliususd, xlkususd, xlmusd, xlnxususd, xlpususd, xluususd, xlvususd, xlyususd, xomususd, xopususd, xpevususd, yumususd, zarjpy, zbhususd, zmususd, zurnchchf',
      message: "The 'instrument' field does not match any of the allowed values."
    },
    {
      actual: '',
      expected: undefined,
      message: "The 'dates' must be an Object."
    },
    {
      actual: '',
      expected: 'tick, m1, m15, m30, h1, d1, mn1',
      message: "The 'timeframe' field does not match any of the allowed values."
    },
    {
      actual: '',
      expected: 'bid, ask',
      message: "The 'priceType' field does not match any of the allowed values."
    },
    {
      actual: '',
      expected: undefined,
      message: "The 'utcOffset' field must be a number."
    },
    {
      actual: '',
      expected: undefined,
      message: "The 'volumes' field must be a boolean."
    },
    {
      actual: '',
      expected: undefined,
      message: "The 'ignoreFlats' field must be a boolean."
    }
  ]
};

export { config, expectedOutput };
