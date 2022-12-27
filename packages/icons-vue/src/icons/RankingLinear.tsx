// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RankingLinearSvg from '@ant-design/icons-svg/lib/asn/RankingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RankingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RankingLinear: RankingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RankingLinearSvg}></AntdIcon>;
};

RankingLinear.displayName = 'RankingLinear';
RankingLinear.inheritAttrs = false;
export default RankingLinear;