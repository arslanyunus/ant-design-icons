// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeLowBulkSvg from '@ant-design/icons-svg/lib/asn/VolumeLowBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeLowBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeLowBulk: VolumeLowBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeLowBulkSvg}></AntdIcon>;
};

VolumeLowBulk.displayName = 'VolumeLowBulk';
VolumeLowBulk.inheritAttrs = false;
export default VolumeLowBulk;