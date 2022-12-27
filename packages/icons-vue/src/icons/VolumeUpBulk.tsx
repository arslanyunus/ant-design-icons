// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeUpBulkSvg from '@ant-design/icons-svg/lib/asn/VolumeUpBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeUpBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeUpBulk: VolumeUpBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeUpBulkSvg}></AntdIcon>;
};

VolumeUpBulk.displayName = 'VolumeUpBulk';
VolumeUpBulk.inheritAttrs = false;
export default VolumeUpBulk;