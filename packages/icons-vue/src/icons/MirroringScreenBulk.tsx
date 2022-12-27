// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MirroringScreenBulkSvg from '@ant-design/icons-svg/lib/asn/MirroringScreenBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MirroringScreenBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MirroringScreenBulk: MirroringScreenBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MirroringScreenBulkSvg}></AntdIcon>;
};

MirroringScreenBulk.displayName = 'MirroringScreenBulk';
MirroringScreenBulk.inheritAttrs = false;
export default MirroringScreenBulk;