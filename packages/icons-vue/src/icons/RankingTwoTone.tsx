// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RankingTwoToneSvg from '@ant-design/icons-svg/lib/asn/RankingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RankingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RankingTwoTone: RankingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RankingTwoToneSvg}></AntdIcon>;
};

RankingTwoTone.displayName = 'RankingTwoTone';
RankingTwoTone.inheritAttrs = false;
export default RankingTwoTone;