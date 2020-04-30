//=============================================================================
// T_E_kimo5_i.js
//=============================================================================
/*:
* @plugindesc 回想達成度
* @author T_E_P
*
* @help
* 回想達成度
* 
* 
*/

(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        var x_all=0;
        var x_no=0, x_count=0, x_1=0, x_2=0;

        if (command === 'tasseido') {

            if (args[0]=='all') {
                x_1 = 1;
                x_2 = $gameVariables.value(252);　       //回想有効人数
                x_all = 13 * $gameVariables.value(252);　//回想のパターン数 * 人数　全

                //桃乃夢がいる場合、シーン+3  DLC1
                if ($gameSwitches.value(50)) {
                    x_all = x_all + 3;
                }

                //失神帰還使用可能の場合、シーン+5  DLC2
                if ($gameSwitches.value(52)) {
                    x_all = x_all + (5 * $gameVariables.value(252));
                }

            } else if (args[0]=='moto') {
                x_1 = 1;
                x_2 = 6;　       //人数6人固定　メガネ制限解除用
                x_all = 13 * 6;　//回想のパターン数 * 人数　全

            } else if (args[0]=='momono') {
                x_1 = $gameVariables.value(189);
                x_2 = $gameVariables.value(189);
                x_all = 13;　//回想のパターン数　単

                //桃乃夢の場合、シーン+3  DLC1
                x_all = x_all + 3;

                //失神帰還使用可能の場合、シーン+5  DLC2
                if ($gameSwitches.value(52)) {
                    x_all = x_all + 5;
                }

            } else {
                x_1 = $gameVariables.value(189);
                x_2 = $gameVariables.value(189);
                x_all = 13;　//回想のパターン数　単

                //失神帰還使用可能の場合、シーン+5  DLC2
                if ($gameSwitches.value(52)) {
                    x_all = x_all + 5;
                }

            }

            for ( x_count=x_1 ; x_count<=x_2 ; x_count++) {
                //愛撫、失神直後
                if ($gameVariables.value(260+x_count)==1) {
                    x_no = x_no + 2;
                }
                //パンティオナ
                if ($gameVariables.value(280+x_count)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(280+x_count)==1 || $gameVariables.value(280+x_count)==2) {
                    x_no = x_no + 1;
                }
                //フェラ
                if ($gameVariables.value(300+x_count)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(300+x_count)==1 || $gameVariables.value(300+x_count)==2) {
                    x_no = x_no + 1;
                }
                //セックス
                if ($gameVariables.value(320+x_count)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(320+x_count)==1 || $gameVariables.value(320+x_count)==2) {
                    x_no = x_no + 1;
                }
                //もよおし
                if ($gameVariables.value(340+x_count)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(340+x_count)==1 || $gameVariables.value(340+x_count)==2) {
                    x_no = x_no + 1;
                }
                //座薬
                if ($gameVariables.value(360+x_count)==1) {
                    x_no = x_no + 1;
                }
                //トイレ
                if ($gameVariables.value(380+x_count)==1) {
                    x_no = x_no + 1;
                }
                //妊娠
                if ($gameVariables.value(400+x_count)==1) {
                    x_no = x_no + 1;
                }


                //失神帰還使用可能の場合、シーン+5  DLC2
                if ($gameSwitches.value(52)) {
                    //失神帰還時
                    if ($gameVariables.value(420+x_count)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-キス
                    if ($gameVariables.value(440+x_count)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-レイプ
                    if ($gameVariables.value(460+x_count)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-座薬
                    if ($gameVariables.value(480+x_count)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-ぶっかけ
                    if ($gameVariables.value(520+x_count)==1) {
                        x_no = x_no + 1;
                    }
                }


            }
            if (args[0]=='momono' || args[0]=='all') {
                //覚醒-愛撫
                if ($gameVariables.value(238)==1) {
                    x_no = x_no + 1;
                }
                //覚醒-フェラ
                if ($gameVariables.value(239)==1) {
                    x_no = x_no + 1;
                }
                //覚醒-セックス
                if ($gameVariables.value(240)==1) {
                    x_no = x_no + 1;
                }
            }
            $gameVariables.setValue(253,x_no/x_all*100);

            //console.log('x_no:'+x_no);
            //console.log('x_all:'+x_all);
            //console.log('253:'+x_no/x_all*100);

        }
    };

})();
