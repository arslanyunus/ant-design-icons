// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RankingBrokenSvg from '@ant-design/icons-svg/lib/asn/RankingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RankingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RankingBroken: RankingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RankingBrokenSvg}></AntdIcon>;
};

RankingBroken.displayName = 'RankingBroken';
RankingBroken.inheritAttrs = false;
export default RankingBroken;