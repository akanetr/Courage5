//=============================================================================
// T_E_kimo5_j.js
//=============================================================================
/*:
* @plugindesc お堂内の失神帰還者
* @author T_E_P
*
* @help
* お堂内処理
* 
* 
*/

(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);



        //----------------------------------------------------------------------------------------------------
        if (command === 'kikan_bu_set') {

            $gameVariables.setValue(260,[0, 0, 0, 0, 0, 0]);

            $gameSwitches.setValue(77,false);
            for(var i = 61; i <= 74; i++){
               $gameSwitches.setValue(i,false);
            }
            for(var i = 81; i <= 84; i++){
               $gameSwitches.setValue(i,false);
            }
            $gameVariables.setValue(228,[0, 0, 0, 0, 0, 0]);
            $gameVariables.setValue(228,$gameVariables.value(243));
            $gameVariables.setValue(243,[0, 0, 0, 0, 0, 0]);
            for(var i = 1; i <= 20; i++){
                $gameVariables.setValue(500+i,[0, 0, 0, 0, 0, 0]);
            }

            for(var i = 1; i <= 20; i++){
                if ($gameVariables.value(520+i)==1) {
                    $gameSwitches.setValue(60+i,true);
                }
            }

        }

        //----------------------------------------------------------------------------------------------------
        if (command === 'kikan_odo_kaiso') {
            //246=待機位置のキャラ番号

            //ファイル名--------------------------------------------------
            $gameVariables.setValue(75,"sire"+$gameVariables.value(246));

            //影--------------------------------------------------
            if ($gameVariables.value(246)==6 || $gameVariables.value(246)==7) {
            //渡辺登樹子、桃乃夢の場合
                if ($gameVariables.value(260)[0]>=1 && $gameVariables.value(260)[0]<=4) {
                    $gameVariables.setValue(69,2);
                } else {
                    $gameVariables.setValue(69,1);
                }
            } else {
                $gameVariables.setValue(69,1);
            }

            //足1--------------------------------------------------
            $gameVariables.setValue(73,1);

            if ($gameVariables.value(260)[2]==0) {

                if ($gameVariables.value(246)==7 && ($gameVariables.value(260)[0]>=1 && $gameVariables.value(260)[0]<=4)) {
                //桃乃夢  制服 制服上+ブリーフ 制服上+タオル 制服上+ビキニパンツ
                    $gameVariables.setValue(73,2);
                } else {

                    if ($gameVariables.value(246)==9 && ($gameVariables.value(260)[0]>=1 && $gameVariables.value(260)[0]<=4)) {
                    //三ツ門まあな  制服 制服上+ブリーフ 制服上+タオル 制服上+ビキニパンツ
                        $gameVariables.setValue(73,2);
                    } else {

                        $gameVariables.setValue(73,1);

                    }
                }

            } else if ($gameVariables.value(260)[3]==0 && $gameVariables.value(260)[2]>=1) {
                //パンティで失禁の場合

                if ($gameVariables.value(246)==7 && ($gameVariables.value(260)[0]>=1 && $gameVariables.value(260)[0]<=4)) {
                //桃乃夢  制服 制服上+ブリーフ 制服上+タオル 制服上+ビキニパンツ
                    $gameVariables.setValue(73,21);
                } else {

                    if ($gameVariables.value(246)==9 && ($gameVariables.value(260)[0]>=1 && $gameVariables.value(260)[0]<=4)) {
                    //三ツ門まあな  制服 制服上+ブリーフ 制服上+タオル 制服上+ビキニパンツ
                        $gameVariables.setValue(73,12);
                    } else {

                        $gameVariables.setValue(73,11);

                    }
                }

            }

            //if ($gameVariables.value(73)>=11) {
              //足２
            //    if ($gameVariables.value(260)[0]>=1 && $gameVariables.value(260)[0]<=4) {
            //        $gameVariables.setValue(191,'sire'+$gameVariables.value(246)+'_b11_12');
            //    } else {
            //        $gameVariables.setValue(191,'sire'+$gameVariables.value(246)+'_b11_11');
            //    }

            //} else {

                if ($gameVariables.value(260)[0]>=1 && $gameVariables.value(260)[0]<=4) {
                    $gameVariables.setValue(191,'sire'+$gameVariables.value(246)+'_b11_2');
                } else {
                    $gameVariables.setValue(191,'sire'+$gameVariables.value(246)+'_b11_1');
                }

            //}

            //服下着系 --------------------------------------------------
　　　　　　$gameVariables.setValue(76,10);

            if (args[0]==99 && ($gameVariables.value(260)[1]==1 || $gameVariables.value(260)[1]==2 || $gameVariables.value(260)[1]==4 || $gameVariables.value(260)[1]==5)) {
            //回想　失神帰還-座薬効果あり　の場合

            } else {
            //通常回想


            if ($gameVariables.value(260)[0]==1 || $gameVariables.value(260)[0]=='b' || $gameVariables.value(260)[0]=='c') {
                if ($gameVariables.value(260)[3]==0) {
                //パンティ　濡れているか？
                    if ($gameVariables.value(260)[2]==0) {
                        $gameVariables.setValue(76,11);
                    } else {
                        $gameVariables.setValue(76,12);
                    }
                } else {
                //オムツ　濡れているか？
                    if ($gameVariables.value(260)[2]==0) {
                        $gameVariables.setValue(76,21);
                    } else {
                        $gameVariables.setValue(76,22);
                    }
                    if ($gameVariables.value(246)==6 && $gameVariables.value(260)[0]!='c') {
                    //渡辺登樹子の場合
                        $gameVariables.setValue(76,$gameVariables.value(76)+2);
                    }
                }
            } else if ($gameVariables.value(260)[0]==2 || $gameVariables.value(260)[0]=='d') {
                //ブリーフ
                $gameVariables.setValue(76,3);
                if ($gameVariables.value(260)[0]=='d') {
                    if ($gameVariables.value(246)==1 || ($gameVariables.value(246)>=3 && $gameVariables.value(246)<=6)) {
                    //（ブラ+ブリーフ）
　　　　　　            $gameVariables.setValue(76,31);
                    }
                }
            } else if ($gameVariables.value(260)[0]==3 || $gameVariables.value(260)[0]=='e') {
                //タオル
　　　　　　    $gameVariables.setValue(76,4);
                if ($gameVariables.value(246)==2 || $gameVariables.value(246)==4) {
                //山田美兎、佐藤莉伊南の場合
　　　　　　        $gameVariables.setValue(76,41);
                }
                if ($gameVariables.value(260)[0]=='e') {
                    if ($gameVariables.value(246)==1) {
                    //（ブラ+タオル）
　　　　　　            $gameVariables.setValue(76,41);
                    }
                }
            } else if ($gameVariables.value(260)[0]==4 || $gameVariables.value(260)[0]=='f' || $gameVariables.value(260)[0]=='a') {
                //ビキニ
　　　　　　    $gameVariables.setValue(76,5);
            }

            }
            //服--------------------------------------------------
            $gameVariables.setValue(70,10);

            if (args[0]==99 && ($gameVariables.value(260)[1]==1 || $gameVariables.value(260)[1]==2 || $gameVariables.value(260)[1]==4 || $gameVariables.value(260)[1]==5)) {
            //回想　失神帰還-座薬効果　の場合

            if ($gameVariables.value(260)[0]>=1 && $gameVariables.value(260)[0]<=4) {


                //制服 制服上+ブリーフ、制服上+タオル、制服上+ビキニパンツ　用の制服　上部分
                if ($gameVariables.value(260)[2]==2) {
                //上が濡れている場合
　　　　　　        $gameVariables.setValue(70,123);
                    if ($gameVariables.value(246)==5 || $gameVariables.value(246)==6) {
                    //佐々木万梨美 渡辺登樹子の場合
　　　　　　            $gameVariables.setValue(70,133);
                    }
                } else {
                    $gameVariables.setValue(70,121);
                    if ($gameVariables.value(246)==5 || $gameVariables.value(246)==6) {
                    //佐々木万梨美 渡辺登樹子の場合
　　　　　　            $gameVariables.setValue(70,131);
                    }
                }
            } else if ($gameVariables.value(260)[0]==5) {
                //ランニングシャツ
                if ($gameVariables.value(246)==1 || $gameVariables.value(246)==2 || $gameVariables.value(246)==4) {
                //林つかさ 山田美兎 佐々木万梨美の場合
　　　　　　        $gameVariables.setValue(70,21);
                } else {
　　　　　　        $gameVariables.setValue(70,22);
                }　　　　　　    
            } else if ($gameVariables.value(260)[0]==6) {
                //エプロン
                if ($gameVariables.value(246)==2 || $gameVariables.value(246)==3 || $gameVariables.value(246)==4) {
                //山田美兎 鈴木赤音 佐々木万梨美の場合
　　　　　　        $gameVariables.setValue(70,31);
                } else {
　　　　　　        $gameVariables.setValue(70,32);
                }
            } else if ($gameVariables.value(260)[0]==7) {
                //スク水
　　　　　　    $gameVariables.setValue(70,42);
            } else if ($gameVariables.value(260)[0]==8) {
                //段ボール
                if ($gameVariables.value(246)==2) {
                //山田美兎の場合
　　　　　　        $gameVariables.setValue(70,51);
                } else {
　　　　　　        $gameVariables.setValue(70,52);
                }
            } else if ($gameVariables.value(260)[0]==9) {
                //新聞
                if ($gameVariables.value(246)==2) {
                //山田美兎の場合
　　　　　　        $gameVariables.setValue(70,61);
                } else {
　　　　　　        $gameVariables.setValue(70,62);
                }
            } else if ($gameVariables.value(260)[0]=='a') {
                //ビキニ
　　　　　　    $gameVariables.setValue(70,10);
            }


            } else {
            //通常回想


            if ($gameVariables.value(260)[0]==1) {
                //制服
                if ($gameVariables.value(260)[2]==2) {
                //上が濡れている場合
　　　　　　        $gameVariables.setValue(70,113);
                } else {
                    if ($gameVariables.value(260)[3]==0 && $gameVariables.value(260)[2]!=0) {
                    //パンティで失禁の場合
　　　　　　            $gameVariables.setValue(70,112);
                    } else {
　　　　　　            $gameVariables.setValue(70,111);
                    }
                }
            } else if ($gameVariables.value(260)[0]>=2 && $gameVariables.value(260)[0]<=4) {
                //制服上+ブリーフ、制服上+タオル、制服上+ビキニパンツ　用の制服　上部分
                if ($gameVariables.value(260)[2]==2) {
                //上が濡れている場合
　　　　　　        $gameVariables.setValue(70,123);
                    if ($gameVariables.value(246)==5 || $gameVariables.value(246)==6) {
                    //佐々木万梨美 渡辺登樹子の場合
　　　　　　            $gameVariables.setValue(70,133);
                    }
                } else {
                    if ($gameVariables.value(260)[3]==0 && $gameVariables.value(260)[2]!=0) {
                    //パンティで失禁の場合
　　　　　　            $gameVariables.setValue(70,122);
                    } else {
　　　　　　            $gameVariables.setValue(70,121);
                    }
                    if ($gameVariables.value(246)==5 || $gameVariables.value(246)==6) {
                    //佐々木万梨美 渡辺登樹子の場合

　　　　　　            $gameVariables.setValue(70,131);
                    }
                }
            } else if ($gameVariables.value(260)[0]==5) {
                //ランニングシャツ
　　　　　　    $gameVariables.setValue(70,21);
            } else if ($gameVariables.value(260)[0]==6) {
                //エプロン
　　　　　　    $gameVariables.setValue(70,31);
            } else if ($gameVariables.value(260)[0]==7) {
                //スク水
　　　　　　    $gameVariables.setValue(70,41);
            } else if ($gameVariables.value(260)[0]==8) {
                //段ボール
　　　　　　    $gameVariables.setValue(70,51);
            } else if ($gameVariables.value(260)[0]==9) {
                //新聞
　　　　　　    $gameVariables.setValue(70,61);
            } else if ($gameVariables.value(260)[0]=='a') {
                //ビキニ
　　　　　　    $gameVariables.setValue(70,10);
            }


            }


            //服パイ--------------------------------------------------
            $gameVariables.setValue(68,10);
            if ($gameVariables.value(260)[0]=='b' || $gameVariables.value(260)[0]=='c' || $gameVariables.value(260)[0]=='d' || $gameVariables.value(260)[0]=='e' || $gameVariables.value(260)[0]=='f') {
                //下着
                if ($gameVariables.value(260)[2]==2) {
                //上が濡れている場合
　　　　　　        $gameVariables.setValue(68,1012);
                } else {
                    $gameVariables.setValue(68,1002);
                }
            } else if ($gameVariables.value(260)[0]>=1 && $gameVariables.value(260)[0]<=4) {
                //制服
                if ($gameVariables.value(260)[2]==2) {
                //上が濡れている場合
　　　　　　        $gameVariables.setValue(68,122);
                } else {
                    $gameVariables.setValue(68,112);
                }
            } else if ($gameVariables.value(260)[0]==5) {
                //ランニングシャツ
                if ($gameVariables.value(246)==9) {
                //三ツ門まあなの場合
　　　　　　        $gameVariables.setValue(68,22);
                } else {
　　　　　　        $gameVariables.setValue(68,10);
                }
            } else if ($gameVariables.value(260)[0]==6) {
                //エプロン
　　　　　　    $gameVariables.setValue(68,32);
                if ($gameVariables.value(246)==3 || $gameVariables.value(246)==5 || $gameVariables.value(246)==6) {
                //鈴木赤音、佐々木万梨美、渡辺登樹子の場合
　　　　　　        $gameVariables.setValue(68,10);
                }
            } else if ($gameVariables.value(260)[0]==7) {
                //スク水
　　　　　　    $gameVariables.setValue(68,42);
                if ($gameVariables.value(246)==3) {
                //鈴木赤音の場合
　　　　　　        $gameVariables.setValue(68,10);
                }
            } else if ($gameVariables.value(260)[0]==8) {
                //段ボール
　　　　　　    $gameVariables.setValue(68,10);
            } else if ($gameVariables.value(260)[0]==9) {
                //新聞
　　　　　　    $gameVariables.setValue(68,10);
            } else if ($gameVariables.value(260)[0]=='a') {
                //ビキニ
　　　　　　    $gameVariables.setValue(68,72);
            }

        }

        //----------------------------------------------------------------------------------------------------

        if (command === 'k_prio_set') {
            //プライオリティ

            switch ($gameVariables.value(247)) {
                case 0:
                    $gameVariables.setValue(87,7);
                    $gameVariables.setValue(9,$gameVariables.value(7));
                    $gameVariables.setValue(10,$gameVariables.value(8));
                    $gameVariables.setValue(77,40);
                    break;
                case 1:
                    $gameVariables.setValue(87,8);
                    $gameVariables.setValue(11,$gameVariables.value(7));
                    $gameVariables.setValue(12,$gameVariables.value(8));
                    $gameVariables.setValue(77,45);
                    break;
                case 2:
                    $gameVariables.setValue(87,9);
                    $gameVariables.setValue(13,$gameVariables.value(7));
                    $gameVariables.setValue(14,$gameVariables.value(8));
                    $gameVariables.setValue(77,50);
                    break;
                case 3:
                    $gameVariables.setValue(87,10);
                    $gameVariables.setValue(17,$gameVariables.value(7));
                    $gameVariables.setValue(18,$gameVariables.value(8));
                    $gameVariables.setValue(77,6);
                    break;
                case 4:
                    $gameVariables.setValue(87,7);
                    $gameVariables.setValue(9,$gameVariables.value(7));
                    $gameVariables.setValue(10,$gameVariables.value(8));
                    $gameVariables.setValue(77,40);
                    break;
                case 5:
                    $gameVariables.setValue(87,8);
                    $gameVariables.setValue(11,$gameVariables.value(7));
                    $gameVariables.setValue(12,$gameVariables.value(8));
                    $gameVariables.setValue(77,45);
                    break;

            }
        }

        //----------------------------------------------------------------------------------------------------
        if (command === 'k_chara_name') {
            //キャラNO
            $gameVariables.setValue(100,$gameVariables.value(243)[args[0]]);



            if ($gameVariables.value(220+$gameVariables.value(81))[2]==1) {
            //もう手を出さない場合

                if ($gameVariables.value(220+$gameVariables.value(81))[3]==0) {
                //何もしていない
                    switch ($gameVariables.value(100)) {
                        case 1:
                            $gameVariables.setValue(90,$kikan[255].me);
                            break;
                        case 2:
                            $gameVariables.setValue(90,$kikan[259].me);
                            break;
                        case 3:
                            $gameVariables.setValue(90,$kikan[263].me);
                            break;
                        case 4:
                            $gameVariables.setValue(90,$kikan[267].me);
                            break;
                        case 5:
                            $gameVariables.setValue(90,$kikan[271].me);
                            break;
                        case 6:
                            $gameVariables.setValue(90,$kikan[275].me);
                            break;
                        case 7:
                            $gameVariables.setValue(90,$kikan[279].me);
                            break;
                    }
                }
                if ($gameVariables.value(220+$gameVariables.value(81))[3]==1 || $gameVariables.value(220+$gameVariables.value(81))[3]==2) {
                //レイプのみ
                    switch ($gameVariables.value(100)) {
                        case 1:
                            $gameVariables.setValue(90,$kikan[256].me);
                            break;
                        case 2:
                            $gameVariables.setValue(90,$kikan[260].me);
                            break;
                        case 3:
                            $gameVariables.setValue(90,$kikan[264].me);
                            break;
                        case 4:
                            $gameVariables.setValue(90,$kikan[268].me);
                            break;
                        case 5:
                            $gameVariables.setValue(90,$kikan[272].me);
                            break;
                        case 6:
                            $gameVariables.setValue(90,$kikan[276].me);
                            break;
                        case 7:
                            $gameVariables.setValue(90,$kikan[280].me);
                            break;
                    }
                }
                if ($gameVariables.value(220+$gameVariables.value(81))[3]==3 || $gameVariables.value(220+$gameVariables.value(81))[3]==4 || $gameVariables.value(220+$gameVariables.value(81))[3]==5) {
                //座薬効果（レイプ含む）
                    switch ($gameVariables.value(100)) {
                        case 1:
                            $gameVariables.setValue(90,$kikan[257].me);
                            break;
                        case 2:
                            $gameVariables.setValue(90,$kikan[261].me);
                            break;
                        case 3:
                            $gameVariables.setValue(90,$kikan[265].me);
                            break;
                        case 4:
                            $gameVariables.setValue(90,$kikan[269].me);
                            break;
                        case 5:
                            $gameVariables.setValue(90,$kikan[273].me);
                            break;
                        case 6:
                            $gameVariables.setValue(90,$kikan[277].me);
                            break;
                        case 7:
                            $gameVariables.setValue(90,$kikan[281].me);
                            break;
                    }
                }



            } else {

                switch ($gameVariables.value(100)) {
                    case 1:
                        $gameVariables.setValue(90,$kikan[247].me);
                        break;
                    case 2:
                        $gameVariables.setValue(90,$kikan[248].me);
                        break;
                    case 3:
                        $gameVariables.setValue(90,$kikan[249].me);
                        break;
                    case 4:
                        $gameVariables.setValue(90,$kikan[250].me);
                        break;
                    case 5:
                        $gameVariables.setValue(90,$kikan[251].me);
                        break;
                    case 6:
                        $gameVariables.setValue(90,$kikan[252].me);
                        break;
                    case 7:
                        $gameVariables.setValue(90,$kikan[253].me);
                        break;
                }

            }

        }


        //----------------------------------------------------------------------------------------------------
        if (command === 'kikan_odo') {

            //args[0]=配列順番号 (0-5)
            //245=ファイル用番号 (1-6)
            //246=待機位置のキャラ番号

            $gameVariables.setValue(245,0);
            $gameVariables.setValue(246,0);

            for(var i = 0; i <= 5; i++){
               if ($gameVariables.value(99)[i]==$gameVariables.value(243)[args[0]]) {
                   $gameVariables.setValue(245,i+1);
                   $gameVariables.setValue(246,$gameVariables.value(99)[i]);
                   i = 5
               }
            }

            //console.log('目:'+$gameVariables.value(220+$gameVariables.value(81))[0]);
            //console.log('247:'+$gameVariables.value(247));

            //ファイル名--------------------------------------------------
            $gameVariables.setValue(75,"sire"+$gameVariables.value(246));

            //目と身体--------------------------------------------------

            if ($gameVariables.value(220+$gameVariables.value(81))[0]>10) {
            //メガネ外している場合
                $gameVariables.setValue(71,($gameVariables.value(220+$gameVariables.value(81))[0]-10));

            } else {
                $gameVariables.setValue(71,$gameVariables.value(220+$gameVariables.value(81))[0]);

            }
            //口--------------------------------------------------
            $gameVariables.setValue(72,$gameVariables.value(220+$gameVariables.value(81))[1]);

            //影--------------------------------------------------
            if ($gameVariables.value(246)==6 || $gameVariables.value(246)==7) {
            //渡辺登樹子、桃乃夢の場合

                if ($gameVariables.value(220+$gameVariables.value(81))[5]>=1 && $gameVariables.value(220+$gameVariables.value(81))[5]<=4) {
                    $gameVariables.setValue(69,2);

                } else {
                    $gameVariables.setValue(69,1);

                }

            } else {

                $gameVariables.setValue(69,1);
            }

            //足--------------------------------------------------
            //射精箇所なし、まだ未レイプなら　足パターン1
            $gameVariables.setValue(73,1);

            if ($gameVariables.value(160+$gameVariables.value(245))[0]==0 && $gameVariables.value(160+$gameVariables.value(245))[7]==1) {
                //パンティで失禁の場合

                if ($gameVariables.value(246)==7 && ($gameVariables.value(220+$gameVariables.value(81))[5]>=1 && $gameVariables.value(220+$gameVariables.value(81))[5]<=4)) {
                //桃乃夢  制服 制服上+ブリーフ 制服上+タオル 制服上+ビキニパンツ
                    $gameVariables.setValue(73,21);
                } else {

                    if ($gameVariables.value(246)==9 && ($gameVariables.value(220+$gameVariables.value(81))[5]>=1 && $gameVariables.value(220+$gameVariables.value(81))[5]<=4)) {
                    //三ツ門まあな  制服 制服上+ブリーフ 制服上+タオル 制服上+ビキニパンツ
                        $gameVariables.setValue(73,12);
                    } else {

                        $gameVariables.setValue(73,11);
                    }

                }

            } else {

                if ($gameVariables.value(246)==7 && ($gameVariables.value(220+$gameVariables.value(81))[5]>=1 && $gameVariables.value(220+$gameVariables.value(81))[5]<=4)) {
                    $gameVariables.setValue(73,2);
                } else {

                    if ($gameVariables.value(246)==9 && ($gameVariables.value(220+$gameVariables.value(81))[5]>=1 && $gameVariables.value(220+$gameVariables.value(81))[5]<=4)) {
                    //三ツ門まあな  制服 制服上+ブリーフ 制服上+タオル 制服上+ビキニパンツ
                        $gameVariables.setValue(73,2);
                    } else {
                        $gameVariables.setValue(73,1);
                    }

                }

            }

            //if ($gameVariables.value(73)>=11) {
                //足２
            //    if ($gameVariables.value(220+$gameVariables.value(81))[5]>=1 && $gameVariables.value(220+$gameVariables.value(81))[5]<=4) {
            //    $gameVariables.setValue(191,'sire'+$gameVariables.value(246)+'_b11_12');
            //    } else {
            //        $gameVariables.setValue(191,'sire'+$gameVariables.value(246)+'_b11_11');
            //    }

            //} else {

                if ($gameVariables.value(220+$gameVariables.value(81))[5]>=1 && $gameVariables.value(220+$gameVariables.value(81))[5]<=4) {
                    $gameVariables.setValue(191,'sire'+$gameVariables.value(246)+'_b11_2');
                } else {
                    $gameVariables.setValue(191,'sire'+$gameVariables.value(246)+'_b11_1');
                }

            //}

//服下着系 --------------------------------------------------
　　　　　　$gameVariables.setValue(76,10);

            if ($gameVariables.value(220+$gameVariables.value(81))[3]==1 || $gameVariables.value(220+$gameVariables.value(81))[3]==2 || $gameVariables.value(220+$gameVariables.value(81))[3]==4 || $gameVariables.value(220+$gameVariables.value(81))[3]==5) {
            //レイプ済み？
            } else {
            //未レイプ


            if ($gameVariables.value(220+$gameVariables.value(81))[4]==1) {
                //パンティ　濡れているか？
                if ($gameVariables.value(150+$gameVariables.value(245))[6]==11) {
                    $gameVariables.setValue(76,11);
                } else {
                    $gameVariables.setValue(76,12);
                }
            } else if ($gameVariables.value(220+$gameVariables.value(81))[4]==2) {
                //オムツ　濡れているか？
                if ($gameVariables.value(150+$gameVariables.value(245))[6]==14) {
                    $gameVariables.setValue(76,21);
                } else {
                    $gameVariables.setValue(76,22);
                }
                if ($gameVariables.value(246)==6) {
                //渡辺登樹子の場合
                    $gameVariables.setValue(76,$gameVariables.value(76)+2);
                }
            } else if ($gameVariables.value(220+$gameVariables.value(81))[4]==3) {
                //ブリーフ
                $gameVariables.setValue(76,3);

                if ($gameVariables.value(220+$gameVariables.value(81))[5]==0) {
                    if ($gameVariables.value(246)==1 || ($gameVariables.value(246)>=3 && $gameVariables.value(246)<=6)) {
                    //（ブラ+ブリーフ）
　　　　　　            $gameVariables.setValue(76,31);
                    }
                }

            } else if ($gameVariables.value(220+$gameVariables.value(81))[4]==4) {
                //タオル
　　　　　　    $gameVariables.setValue(76,4);

                if ($gameVariables.value(246)==2 || $gameVariables.value(246)==4) {
                //山田美兎、佐藤莉伊南の場合
　　　　　　        $gameVariables.setValue(76,41);
                }
                if ($gameVariables.value(220+$gameVariables.value(81))[5]==0) {
                    if ($gameVariables.value(246)==1) {
                    //（ブラ+タオル）
　　　　　　            $gameVariables.setValue(76,41);
                    }
                }

            } else if ($gameVariables.value(220+$gameVariables.value(81))[4]==5) {
                //ビキニ
　　　　　　    $gameVariables.setValue(76,5);
            }




            }



//服--------------------------------------------------
            $gameVariables.setValue(70,10);


            if ($gameVariables.value(220+$gameVariables.value(81))[3]==1 || $gameVariables.value(220+$gameVariables.value(81))[3]==2 || $gameVariables.value(220+$gameVariables.value(81))[3]==4 || $gameVariables.value(220+$gameVariables.value(81))[3]==5) {
            //レイプ済み？


            if ($gameVariables.value(220+$gameVariables.value(81))[5]>=1 && $gameVariables.value(220+$gameVariables.value(81))[5]<=4) {
                //制服 制服上+ブリーフ、制服上+タオル、制服上+ビキニパンツ　用の制服　上部分
                if ($gameVariables.value(160+$gameVariables.value(245))[17]==1) {
                //上が濡れている場合
　　　　　　        $gameVariables.setValue(70,123);
                    if ($gameVariables.value(246)==5 || $gameVariables.value(246)==6) {
                    //佐々木万梨美 渡辺登樹子の場合
　　　　　　            $gameVariables.setValue(70,133);
                    }
                } else {
                    $gameVariables.setValue(70,121);
                    if ($gameVariables.value(246)==5 || $gameVariables.value(246)==6) {
                    //佐々木万梨美 渡辺登樹子の場合
　　　　　　            $gameVariables.setValue(70,131);
                    }
                }
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==5) {
                //ランニングシャツ
                if ($gameVariables.value(246)==1 || $gameVariables.value(246)==2 || $gameVariables.value(246)==4) {
                //林つかさ 山田美兎 佐々木万梨美の場合
　　　　　　        $gameVariables.setValue(70,21);
                } else {
　　　　　　        $gameVariables.setValue(70,22);
                }　　　　　　    
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==6) {
                //エプロン
                if ($gameVariables.value(246)==2 || $gameVariables.value(246)==3 || $gameVariables.value(246)==4) {
                //山田美兎 鈴木赤音 佐々木万梨美の場合
　　　　　　        $gameVariables.setValue(70,31);
                } else {
　　　　　　        $gameVariables.setValue(70,32);
                }
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==7) {
                //スク水
　　　　　　    $gameVariables.setValue(70,42);
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==8) {
                //段ボール
                if ($gameVariables.value(246)==2 || $gameVariables.value(246)==9) {
                //山田美兎の場合
　　　　　　        $gameVariables.setValue(70,51);
                } else {
　　　　　　        $gameVariables.setValue(70,52);
                }
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==9) {
                //新聞
                if ($gameVariables.value(246)==2 || $gameVariables.value(246)==9) {
                //山田美兎の場合
　　　　　　        $gameVariables.setValue(70,61);
                } else {
　　　　　　        $gameVariables.setValue(70,62);
                }
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]=='a') {
                //ビキニ
　　　　　　    $gameVariables.setValue(70,10);
            }


            } else {
            //未レイプ

            if ($gameVariables.value(220+$gameVariables.value(81))[5]==1) {
                //制服
                if ($gameVariables.value(160+$gameVariables.value(245))[17]==1) {
                //上が濡れている場合
　　　　　　        $gameVariables.setValue(70,113);
                } else {
                    if ($gameVariables.value(160+$gameVariables.value(245))[0]==0 && $gameVariables.value(160+$gameVariables.value(245))[7]==1) {
                    //パンティで失禁の場合
　　　　　　            $gameVariables.setValue(70,112);
                    } else {
　　　　　　            $gameVariables.setValue(70,111);
                    }
                }

            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]>=2 && $gameVariables.value(220+$gameVariables.value(81))[5]<=4) {
                //制服上+ブリーフ、制服上+タオル、制服上+ビキニパンツ　用の制服　上部分

                if ($gameVariables.value(160+$gameVariables.value(245))[17]==1) {
                //上が濡れている場合
　　　　　　        $gameVariables.setValue(70,123);

                    if ($gameVariables.value(246)==5 || $gameVariables.value(246)==6) {
                    //佐々木万梨美 渡辺登樹子の場合
　　　　　　            $gameVariables.setValue(70,133);
                    }

                } else {
                    if ($gameVariables.value(160+$gameVariables.value(245))[0]==0 && $gameVariables.value(160+$gameVariables.value(245))[7]==1) {
                    //パンティで失禁の場合
　　　　　　            $gameVariables.setValue(70,122);
                    } else {
　　　　　　            $gameVariables.setValue(70,121);
                    }
                    if ($gameVariables.value(246)==5 || $gameVariables.value(246)==6) {
                    //佐々木万梨美 渡辺登樹子の場合

　　　　　　            $gameVariables.setValue(70,131);
                    }
                }
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==5) {
                //ランニングシャツ
　　　　　　    $gameVariables.setValue(70,21);
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==6) {
                //エプロン
　　　　　　    $gameVariables.setValue(70,31);
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==7) {
                //スク水
　　　　　　    $gameVariables.setValue(70,41);
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==8) {
                //段ボール
　　　　　　    $gameVariables.setValue(70,51);
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==9) {
                //新聞
　　　　　　    $gameVariables.setValue(70,61);
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]=='a') {
                //ビキニ
　　　　　　    $gameVariables.setValue(70,10);
            }


            }

//服パイ--------------------------------------------------
            $gameVariables.setValue(68,10);

            if (($gameVariables.value(220+$gameVariables.value(81))[4]>=1 && $gameVariables.value(220+$gameVariables.value(81))[4]<=5) && $gameVariables.value(220+$gameVariables.value(81))[5]==0) {

                //下着
                if ($gameVariables.value(160+$gameVariables.value(245))[17]==1) {
                //上が濡れている場合
　　　　　　        $gameVariables.setValue(68,1012);
                } else {
                    $gameVariables.setValue(68,1002);
                }

            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]>=1 && $gameVariables.value(220+$gameVariables.value(81))[5]<=4) {

                //制服
                if ($gameVariables.value(160+$gameVariables.value(245))[17]==1) {
                //上が濡れている場合
　　　　　　        $gameVariables.setValue(68,122);
                } else {
                    $gameVariables.setValue(68,112);
                }

            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==5) {
                //ランニングシャツ
                if ($gameVariables.value(246)==9) {
                //三ツ門まあなの場合
　　　　　　        $gameVariables.setValue(68,22);
                } else {
　　　　　　        $gameVariables.setValue(68,10);
                }
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==6) {
                //エプロン
　　　　　　    $gameVariables.setValue(68,32);

                if ($gameVariables.value(246)==3 || $gameVariables.value(246)==5 || $gameVariables.value(246)==6) {
                //鈴木赤音、佐々木万梨美、渡辺登樹子の場合
　　　　　　        $gameVariables.setValue(68,10);
                }

            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==7) {
                //スク水
　　　　　　    $gameVariables.setValue(68,42);

                if ($gameVariables.value(246)==3) {
                //鈴木赤音の場合
　　　　　　        $gameVariables.setValue(68,10);
                }

            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==8) {
                //段ボール
　　　　　　    $gameVariables.setValue(68,10);
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]==9) {
                //新聞
　　　　　　    $gameVariables.setValue(68,10);
            } else if ($gameVariables.value(220+$gameVariables.value(81))[5]=='a') {
                //ビキニ
　　　　　　    $gameVariables.setValue(68,72);
            }

        }


        //----------------------------------------------------------------------------------------------------
        if (command === 'closeup_odo') {

            if (args[0]=='up9') {
                //下半身アップ
                $gameScreen.movePicture(1,0,-284,-312,150,150,255,0,5);
                $gameScreen.movePicture(57,0,-47,-212,150,150,255,0,5);

                if ($gameVariables.value(81)==1) {
                    $gameScreen.movePicture(38,0,-47,-312,150,150,255,0,5);
                    $gameScreen.movePicture(40,0,-47,-312,150,150,255,0,5);
                    $gameScreen.movePicture(43,0,560,-312,150,150,255,0,5);
                    $gameScreen.movePicture(45,0,560,-312,150,150,255,0,5);

                    $gameScreen.movePicture(52,0,-47,-312,150,150,255,0,5);

                } else if ($gameVariables.value(81)==2) {
                    $gameScreen.movePicture(38,0,-650,-312,150,150,255,0,5);
                    $gameScreen.movePicture(40,0,-650,-312,150,150,255,0,5);
                    $gameScreen.movePicture(43,0,-47,-312,150,150,255,0,5);
                    $gameScreen.movePicture(45,0,-47,-312,150,150,255,0,5);
                    $gameScreen.movePicture(48,0,560,-312,150,150,255,0,5);
                    $gameScreen.movePicture(50,0,560,-312,150,150,255,0,5);

                } else if ($gameVariables.value(81)==3) {
                    $gameScreen.movePicture(43,0,-650,-312,150,150,255,0,5);
                    $gameScreen.movePicture(45,0,-650,-312,150,150,255,0,5);
                    $gameScreen.movePicture(48,0,-47,-312,150,150,255,0,5);
                    $gameScreen.movePicture(50,0,-47,-312,150,150,255,0,5);
                    $gameScreen.movePicture(4,0,560,-312,150,150,255,0,5);
                    $gameScreen.movePicture(6,0,560,-312,150,150,255,0,5);

                } else if ($gameVariables.value(81)==4) {
                    $gameScreen.movePicture(48,0,-650,-312,150,150,255,0,5);
                    $gameScreen.movePicture(50,0,-650,-312,150,150,255,0,5);
                    $gameScreen.movePicture(4,0,-47,-312,150,150,255,0,5);
                    $gameScreen.movePicture(6,0,-47,-312,150,150,255,0,5);
                    $gameScreen.movePicture(38,0,560,-312,150,150,255,0,5);
                    $gameScreen.movePicture(40,0,560,-312,150,150,255,0,5);

                } else if ($gameVariables.value(81)==5) {
                    $gameScreen.movePicture(4,0,-650,-312,150,150,255,0,5);
                    $gameScreen.movePicture(6,0,-650,-312,150,150,255,0,5);
                    $gameScreen.movePicture(38,0,-47,-312,150,150,255,0,5);
                    $gameScreen.movePicture(40,0,-47,-312,150,150,255,0,5);
                    $gameScreen.movePicture(43,0,560,-312,150,150,255,0,5);
                    $gameScreen.movePicture(45,0,560,-312,150,150,255,0,5);

                } else if ($gameVariables.value(81)==6) {
                    $gameScreen.movePicture(38,0,-650,-312,150,150,255,0,5);
                    $gameScreen.movePicture(40,0,-650,-312,150,150,255,0,5);
                    $gameScreen.movePicture(43,0,-47,-312,150,150,255,0,5);
                    $gameScreen.movePicture(45,0,-47,-312,150,150,255,0,5);

                }
            }

            if (args[0]=='up1') {
                //下半身アップ
                $gameScreen.movePicture(1,0,-284,-312,150,150,255,0,10);
                $gameScreen.movePicture(57,0,-47,-212,150,150,255,0,10);

                if ($gameVariables.value(81)==1) {
                    $gameScreen.movePicture(38,0,-47,-312,150,150,255,0,10);
                    $gameScreen.movePicture(40,0,-47,-312,150,150,255,0,10);
                    $gameScreen.movePicture(43,0,560,-312,150,150,255,0,10);
                    $gameScreen.movePicture(45,0,560,-312,150,150,255,0,10);

                    $gameScreen.movePicture(52,0,-47,-312,150,150,255,0,10);

                } else if ($gameVariables.value(81)==2) {
                    $gameScreen.movePicture(38,0,-650,-312,150,150,255,0,10);
                    $gameScreen.movePicture(40,0,-650,-312,150,150,255,0,10);
                    $gameScreen.movePicture(43,0,-47,-312,150,150,255,0,10);
                    $gameScreen.movePicture(45,0,-47,-312,150,150,255,0,10);
                    $gameScreen.movePicture(48,0,560,-312,150,150,255,0,10);
                    $gameScreen.movePicture(50,0,560,-312,150,150,255,0,10);

                } else if ($gameVariables.value(81)==3) {
                    $gameScreen.movePicture(43,0,-650,-312,150,150,255,0,10);
                    $gameScreen.movePicture(45,0,-650,-312,150,150,255,0,10);
                    $gameScreen.movePicture(48,0,-47,-312,150,150,255,0,10);
                    $gameScreen.movePicture(50,0,-47,-312,150,150,255,0,10);
                    $gameScreen.movePicture(4,0,560,-312,150,150,255,0,10);
                    $gameScreen.movePicture(6,0,560,-312,150,150,255,0,10);

                } else if ($gameVariables.value(81)==4) {
                    $gameScreen.movePicture(48,0,-650,-312,150,150,255,0,10);
                    $gameScreen.movePicture(50,0,-650,-312,150,150,255,0,10);
                    $gameScreen.movePicture(4,0,-47,-312,150,150,255,0,10);
                    $gameScreen.movePicture(6,0,-47,-312,150,150,255,0,10);
                    $gameScreen.movePicture(38,0,560,-312,150,150,255,0,10);
                    $gameScreen.movePicture(40,0,560,-312,150,150,255,0,10);

                } else if ($gameVariables.value(81)==5) {
                    $gameScreen.movePicture(4,0,-650,-312,150,150,255,0,10);
                    $gameScreen.movePicture(6,0,-650,-312,150,150,255,0,10);
                    $gameScreen.movePicture(38,0,-47,-312,150,150,255,0,10);
                    $gameScreen.movePicture(40,0,-47,-312,150,150,255,0,10);
                    $gameScreen.movePicture(43,0,560,-312,150,150,255,0,10);
                    $gameScreen.movePicture(45,0,560,-312,150,150,255,0,10);

                } else if ($gameVariables.value(81)==6) {
                    $gameScreen.movePicture(38,0,-650,-312,150,150,255,0,10);
                    $gameScreen.movePicture(40,0,-650,-312,150,150,255,0,10);
                    $gameScreen.movePicture(43,0,-47,-312,150,150,255,0,10);
                    $gameScreen.movePicture(45,0,-47,-312,150,150,255,0,10);

                }
            }

            if (args[0]=='up2') {
                //上半身アップ
                $gameScreen.movePicture(1,0,-284,0,150,150,255,0,10);
                $gameScreen.movePicture(57,0,-47,100,150,150,255,0,10);

                if ($gameVariables.value(81)==1) {
                    $gameScreen.movePicture(38,0,-47,0,150,150,255,0,10);
                    $gameScreen.movePicture(40,0,-47,0,150,150,255,0,10);
                    $gameScreen.movePicture(43,0,560,0,150,150,255,0,10);
                    $gameScreen.movePicture(45,0,560,0,150,150,255,0,10);

                } else if ($gameVariables.value(81)==2) {
                    $gameScreen.movePicture(38,0,-650,0,150,150,255,0,10);
                    $gameScreen.movePicture(40,0,-650,0,150,150,255,0,10);
                    $gameScreen.movePicture(43,0,-47,0,150,150,255,0,10);
                    $gameScreen.movePicture(45,0,-47,0,150,150,255,0,10);
                    $gameScreen.movePicture(48,0,560,0,150,150,255,0,10);
                    $gameScreen.movePicture(50,0,560,0,150,150,255,0,10);

                } else if ($gameVariables.value(81)==3) {
                    $gameScreen.movePicture(43,0,-650,0,150,150,255,0,10);
                    $gameScreen.movePicture(45,0,-650,0,150,150,255,0,10);
                    $gameScreen.movePicture(48,0,-47,0,150,150,255,0,10);
                    $gameScreen.movePicture(50,0,-47,0,150,150,255,0,10);
                    $gameScreen.movePicture(4,0,560,0,150,150,255,0,10);
                    $gameScreen.movePicture(6,0,560,0,150,150,255,0,10);

                } else if ($gameVariables.value(81)==4) {
                    $gameScreen.movePicture(48,0,-650,0,150,150,255,0,10);
                    $gameScreen.movePicture(50,0,-650,0,150,150,255,0,10);
                    $gameScreen.movePicture(4,0,-47,0,150,150,255,0,10);
                    $gameScreen.movePicture(6,0,-47,0,150,150,255,0,10);
                    $gameScreen.movePicture(38,0,560,0,150,150,255,0,10);
                    $gameScreen.movePicture(40,0,560,0,150,150,255,0,10);

                } else if ($gameVariables.value(81)==5) {
                    $gameScreen.movePicture(4,0,-650,0,150,150,255,0,10);
                    $gameScreen.movePicture(6,0,-650,0,150,150,255,0,10);
                    $gameScreen.movePicture(38,0,-47,0,150,150,255,0,10);
                    $gameScreen.movePicture(40,0,-47,0,150,150,255,0,10);
                    $gameScreen.movePicture(43,0,560,0,150,150,255,0,10);
                    $gameScreen.movePicture(45,0,560,0,150,150,255,0,10);

                } else if ($gameVariables.value(81)==6) {
                    $gameScreen.movePicture(38,0,-650,0,150,150,255,0,10);
                    $gameScreen.movePicture(40,0,-650,0,150,150,255,0,10);
                    $gameScreen.movePicture(43,0,-47,0,150,150,255,0,10);
                    $gameScreen.movePicture(45,0,-47,0,150,150,255,0,10);
                }
            }


            if (args[0]=='move1') {
                //下から上
                $gameScreen.movePicture(1,0,-284,0,150,150,255,0,30);
                $gameScreen.movePicture(57,0,-47,100,150,150,255,0,30);

                if ($gameVariables.value(81)==1) {
                    $gameScreen.movePicture(38,0,-47,0,150,150,255,0,30);
                    $gameScreen.movePicture(40,0,-47,0,150,150,255,0,30);
                    $gameScreen.movePicture(43,0,560,0,150,150,255,0,30);
                    $gameScreen.movePicture(45,0,560,0,150,150,255,0,30);

                } else if ($gameVariables.value(81)==2) {
                    $gameScreen.movePicture(38,0,-650,0,150,150,255,0,30);
                    $gameScreen.movePicture(40,0,-650,0,150,150,255,0,30);
                    $gameScreen.movePicture(43,0,-47,0,150,150,255,0,30);
                    $gameScreen.movePicture(45,0,-47,0,150,150,255,0,30);
                    $gameScreen.movePicture(48,0,560,0,150,150,255,0,30);
                    $gameScreen.movePicture(50,0,560,0,150,150,255,0,30);

                } else if ($gameVariables.value(81)==3) {
                    $gameScreen.movePicture(43,0,-650,0,150,150,255,0,30);
                    $gameScreen.movePicture(45,0,-650,0,150,150,255,0,30);
                    $gameScreen.movePicture(48,0,-47,0,150,150,255,0,30);
                    $gameScreen.movePicture(50,0,-47,0,150,150,255,0,30);
                    $gameScreen.movePicture(4,0,560,0,150,150,255,0,30);
                    $gameScreen.movePicture(6,0,560,0,150,150,255,0,30);

                } else if ($gameVariables.value(81)==4) {
                    $gameScreen.movePicture(48,0,-650,0,150,150,255,0,30);
                    $gameScreen.movePicture(50,0,-650,0,150,150,255,0,30);
                    $gameScreen.movePicture(4,0,-47,0,150,150,255,0,30);
                    $gameScreen.movePicture(6,0,-47,0,150,150,255,0,30);
                    $gameScreen.movePicture(38,0,560,0,150,150,255,0,30);
                    $gameScreen.movePicture(40,0,560,0,150,150,255,0,30);

                } else if ($gameVariables.value(81)==5) {
                    $gameScreen.movePicture(4,0,-650,0,150,150,255,0,30);
                    $gameScreen.movePicture(6,0,-650,0,150,150,255,0,30);
                    $gameScreen.movePicture(38,0,-47,0,150,150,255,0,30);
                    $gameScreen.movePicture(40,0,-47,0,150,150,255,0,30);
                    $gameScreen.movePicture(43,0,560,0,150,150,255,0,30);
                    $gameScreen.movePicture(45,0,560,0,150,150,255,0,30);

                } else if ($gameVariables.value(81)==6) {
                    $gameScreen.movePicture(38,0,-650,0,150,150,255,0,30);
                    $gameScreen.movePicture(40,0,-650,0,150,150,255,0,30);
                    $gameScreen.movePicture(43,0,-47,0,150,150,255,0,30);
                    $gameScreen.movePicture(45,0,-47,0,150,150,255,0,30);
                }
            }
            if (args[0]=='move2') {
                //上から下
                $gameScreen.movePicture(1,0,-284,-312,150,150,255,0,30);
                $gameScreen.movePicture(57,0,-47,-212,150,150,255,0,30);

                if ($gameVariables.value(81)==1) {
                    $gameScreen.movePicture(38,0,-47,-312,150,150,255,0,30);
                    $gameScreen.movePicture(40,0,-47,-312,150,150,255,0,30);
                    $gameScreen.movePicture(43,0,560,-312,150,150,255,0,30);
                    $gameScreen.movePicture(45,0,560,-312,150,150,255,0,30);

                } else if ($gameVariables.value(81)==2) {
                    $gameScreen.movePicture(38,0,-650,-312,150,150,255,0,30);
                    $gameScreen.movePicture(40,0,-650,-312,150,150,255,0,30);
                    $gameScreen.movePicture(43,0,-47,-312,150,150,255,0,30);
                    $gameScreen.movePicture(45,0,-47,-312,150,150,255,0,30);
                    $gameScreen.movePicture(48,0,560,-312,150,150,255,0,30);
                    $gameScreen.movePicture(50,0,560,-312,150,150,255,0,30);

                } else if ($gameVariables.value(81)==3) {
                    $gameScreen.movePicture(43,0,-650,-312,150,150,255,0,30);
                    $gameScreen.movePicture(45,0,-650,-312,150,150,255,0,30);
                    $gameScreen.movePicture(48,0,-47,-312,150,150,255,0,30);
                    $gameScreen.movePicture(50,0,-47,-312,150,150,255,0,30);
                    $gameScreen.movePicture(4,0,560,-312,150,150,255,0,30);
                    $gameScreen.movePicture(6,0,560,-312,150,150,255,0,30);

                } else if ($gameVariables.value(81)==4) {
                    $gameScreen.movePicture(48,0,-650,-312,150,150,255,0,30);
                    $gameScreen.movePicture(50,0,-650,-312,150,150,255,0,30);
                    $gameScreen.movePicture(4,0,-47,-312,150,150,255,0,30);
                    $gameScreen.movePicture(6,0,-47,-312,150,150,255,0,30);
                    $gameScreen.movePicture(38,0,560,-312,150,150,255,0,30);
                    $gameScreen.movePicture(40,0,560,-312,150,150,255,0,30);

                } else if ($gameVariables.value(81)==5) {
                    $gameScreen.movePicture(4,0,-650,-312,150,150,255,0,30);
                    $gameScreen.movePicture(6,0,-650,-312,150,150,255,0,30);
                    $gameScreen.movePicture(38,0,-47,-312,150,150,255,0,30);
                    $gameScreen.movePicture(40,0,-47,-312,150,150,255,0,30);
                    $gameScreen.movePicture(43,0,560,-312,150,150,255,0,30);
                    $gameScreen.movePicture(45,0,560,-312,150,150,255,0,30);

                } else if ($gameVariables.value(81)==6) {
                    $gameScreen.movePicture(38,0,-650,-312,150,150,255,0,30);
                    $gameScreen.movePicture(40,0,-650,-312,150,150,255,0,30);
                    $gameScreen.movePicture(43,0,-47,-312,150,150,255,0,30);
                    $gameScreen.movePicture(45,0,-47,-312,150,150,255,0,30);
                }
            }


            if (args[0]=='return1') {
                //戻す
                $gameScreen.movePicture(1,0,0,0,100,100,255,0,5);
                $gameScreen.movePicture(57,0,157,0,100,100,255,0,5);

                if ($gameVariables.value(81)==1) {
                    $gameScreen.movePicture(38,0,157,0,100,100,255,0,5);
                    $gameScreen.movePicture(40,0,157,0,100,100,255,0,5);
                    $gameScreen.movePicture(43,0,560,0,100,100,255,0,5);
                    $gameScreen.movePicture(45,0,560,0,100,100,255,0,5);

                    $gameScreen.movePicture(52,0,157,0,100,100,255,0,5);

                } else if ($gameVariables.value(81)==2) {
                    $gameScreen.movePicture(38,0,-245,0,100,100,255,0,5);
                    $gameScreen.movePicture(40,0,-245,0,100,100,255,0,5);
                    $gameScreen.movePicture(43,0,157,0,100,100,255,0,5);
                    $gameScreen.movePicture(45,0,157,0,100,100,255,0,5);
                    $gameScreen.movePicture(48,0,560,0,100,100,255,0,5);
                    $gameScreen.movePicture(50,0,560,0,100,100,255,0,5);

                } else if ($gameVariables.value(81)==3) {
                    $gameScreen.movePicture(43,0,-245,0,100,100,255,0,5);
                    $gameScreen.movePicture(45,0,-245,0,100,100,255,0,5);
                    $gameScreen.movePicture(48,0,157,0,100,100,255,0,5);
                    $gameScreen.movePicture(50,0,157,0,100,100,255,0,5);
                    $gameScreen.movePicture(4,0,560,0,100,100,255,0,5);
                    $gameScreen.movePicture(6,0,560,0,100,100,255,0,5);

                } else if ($gameVariables.value(81)==4) {
                    $gameScreen.movePicture(48,0,-245,0,100,100,255,0,5);
                    $gameScreen.movePicture(50,0,-245,0,100,100,255,0,5);
                    $gameScreen.movePicture(4,0,157,0,100,100,255,0,5);
                    $gameScreen.movePicture(6,0,157,0,100,100,255,0,5);
                    $gameScreen.movePicture(38,0,560,0,100,100,255,0,5);
                    $gameScreen.movePicture(40,0,560,0,100,100,255,0,5);

                } else if ($gameVariables.value(81)==5) {
                    $gameScreen.movePicture(4,0,-245,0,100,100,255,0,5);
                    $gameScreen.movePicture(6,0,-245,0,100,100,255,0,5);
                    $gameScreen.movePicture(38,0,157,0,100,100,255,0,5);
                    $gameScreen.movePicture(40,0,157,0,100,100,255,0,5);
                    $gameScreen.movePicture(43,0,560,0,100,100,255,0,5);
                    $gameScreen.movePicture(45,0,560,0,100,100,255,0,5);

                } else if ($gameVariables.value(81)==6) {
                    $gameScreen.movePicture(38,0,-245,0,100,100,255,0,5);
                    $gameScreen.movePicture(40,0,-245,0,100,100,255,0,5);
                    $gameScreen.movePicture(43,0,157,0,100,100,255,0,5);
                    $gameScreen.movePicture(45,0,157,0,100,100,255,0,5);
                }
            }
        }
    };
})();



