import * as mongoose from 'mongoose';

const algorithmSchema = new mongoose.Schema({
  userId: String,
  name: String,
  site: String, //빗썸
  state: Number, // 중지, 모의, 실행
  
  conditions: Array,
  stopConditions: Array,
  cancelConditions: Array,
// 특정 코인의 가격, 보조지표(이평선, 거래량 등), 매매호가 매물 - 여러거래소 가능
// 내 지갑원화와 코인개수, 기간, 시간대
// 이 알고리즘을 통한 이익 손해 금액 또는 그 %, 체결currency - 매실행시마다 할건지
//  item: Object,
//  item2: Object, //보조 지표일 경우 숫자 또는 또다른 지표, 나머진 숫자
//  inequalitySign: Number, //이상 이하
//  andOr : Number,
  
  currency: String, // 코인종류(ex. btc>krw)
  type: Number, // 매수, 매도
  isMarket: Boolean, // 지정가, 시장가
  units: Number, // 거래개수
  price: Number, // 거래가
  isRepeat: Boolean, // 반복여부
  conditionResult: Boolean, // 조건식이 true로 되고 주문이 완료되면 그때 1회만 하고 기다리다가 다시 false가 되면 그 후에 다시 true가 됬을때 다시 매매
  repeatCnt: Number, // 반복회수
  repeatTerm: Number // 반복 텀
  
});

const Algorithm = mongoose.model('Algorithm', algorithmSchema);

export default Algorithm;
