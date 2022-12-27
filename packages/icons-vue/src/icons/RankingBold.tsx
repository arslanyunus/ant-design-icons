// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RankingBoldSvg from '@ant-design/icons-svg/lib/asn/RankingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RankingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RankingBold: RankingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RankingBoldSvg}></AntdIcon>;
};

RankingBold.displayName = 'RankingBold';
RankingBold.inheritAttrs = false;
export default RankingBold;