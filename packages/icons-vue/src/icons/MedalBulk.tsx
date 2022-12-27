// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedalBulkSvg from '@ant-design/icons-svg/lib/asn/MedalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedalBulk: MedalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalBulkSvg}></AntdIcon>;
};

MedalBulk.displayName = 'MedalBulk';
MedalBulk.inheritAttrs = false;
export default MedalBulk;