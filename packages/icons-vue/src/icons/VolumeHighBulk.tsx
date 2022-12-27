// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeHighBulkSvg from '@ant-design/icons-svg/lib/asn/VolumeHighBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeHighBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeHighBulk: VolumeHighBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeHighBulkSvg}></AntdIcon>;
};

VolumeHighBulk.displayName = 'VolumeHighBulk';
VolumeHighBulk.inheritAttrs = false;
export default VolumeHighBulk;