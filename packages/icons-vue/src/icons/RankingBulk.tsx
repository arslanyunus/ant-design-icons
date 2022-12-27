// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RankingBulkSvg from '@ant-design/icons-svg/lib/asn/RankingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RankingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RankingBulk: RankingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RankingBulkSvg}></AntdIcon>;
};

RankingBulk.displayName = 'RankingBulk';
RankingBulk.inheritAttrs = false;
export default RankingBulk;