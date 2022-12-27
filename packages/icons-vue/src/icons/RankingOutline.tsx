// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RankingOutlineSvg from '@ant-design/icons-svg/lib/asn/RankingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RankingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RankingOutline: RankingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RankingOutlineSvg}></AntdIcon>;
};

RankingOutline.displayName = 'RankingOutline';
RankingOutline.inheritAttrs = false;
export default RankingOutline;