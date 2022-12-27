// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedalStarBulkSvg from '@ant-design/icons-svg/lib/asn/MedalStarBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedalStarBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedalStarBulk: MedalStarBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalStarBulkSvg}></AntdIcon>;
};

MedalStarBulk.displayName = 'MedalStarBulk';
MedalStarBulk.inheritAttrs = false;
export default MedalStarBulk;