/**
 * Created by sawu on 2019/7/13.
 */
.instruction_message {
.person_message {
        background: #fff;
        padding: 40px 30px 120px;
    .person_photo {
            width: 64px;
            height: 64px;
            // background: rgba(39, 167, 225, 1);
            // border: 1px solid rgba(151, 151, 151, 1);
            border-radius: 50%;
            box-sizing: border-box;
        }
    .person_content {
            margin-left: 20px;
        .person_level {
                background: linear-gradient(
                    180deg,
                    rgba(16, 244, 246, 1) 0%,
                    rgba(41, 116, 186, 1) 100%
            );
                border-radius: 5px;
                border: 1px solid rgba(39, 94, 156, 1);
                padding-left: 5px;
                padding-right: 5px;
                margin-left: 10px;
                img {
                    margin-right: 5px;
                }
            }
        .referral_code {
                margin-top: 10px;
            }
        }
    }
.data_message {
        padding-left: 40px;
        padding-right: 40px;
        margin-top: -110px;
    .weui-cells__title {
            margin-bottom: 0;
            text-align: center;
            color: #fff;
            font-size: 28px;
            padding-top: 15px;
            padding-bottom: 15px;
            background: #dab86e;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
            border-radius: 8px 8px 0 0;
        }
    .weui-grids {
            background: linear-gradient(
                360deg,
                rgba(17, 26, 31, 1) 0%,
                rgba(43, 86, 106, 1) 100%
        );
            box-shadow: 0 2px 20px 0 rgba(20, 34, 41, 0.1);
            border-radius: 0 0 8px 8px;
        .weui-grid {
            &:before {
                    transform: scaleX(1);
                    border-right-color: #dab86e;
                }
            .grid-center {
                    margin-bottom: 7px;
                    margin-top: 7px;
                &.size_28 {
                        line-height: 40px;
                    }
                }
            }
        }
    }
}
.instruction_record {
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 40px;
.record_title {
        margin-right: 14px;
        vertical-align: middle;
    }
.record_item {
        margin-top: 20px;
        position: relative;
    .weui-cells__title {
            color: #fff;
            padding-top: 15px;
            padding-bottom: 15px;
            border-radius: 8px 8px 0 0;
            margin-bottom: 0;
        }
    .weui-grids {
            background: #fff;
            padding-top: 20px;
            padding-bottom: 20px;
            border-radius: 0 0 8px 8px;
        .weui-grid {
                padding: 0;
            &:after {
                    height: 0;
                    border-bottom: 0;
                }
            &:nth-child(2) {
                    border-left: 1px solid;
                    border-right: 1px solid;
                    border-image: linear-gradient(
                        transparent 10%,
              #eeeff1 80%,
                        transparent 10%
                )
                    0 1 0;
                }
            .grid-center {
                    margin-bottom: 5px;
                }
            }
        }
    .record_symb {
            position: absolute;
            width: 71px;
            top: 54px;
            right: 177px;
        }
    }
.record_footer {
        margin-top: 40px;
    .size_font {
            font-weight: 700;
        }
    }
}
.grid-center {
    text-align: center;
}
.plan_type_bg_8 {
    background: #111a1f;
}