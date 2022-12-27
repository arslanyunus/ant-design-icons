// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeCrossBulkSvg from '@ant-design/icons-svg/lib/asn/VolumeCrossBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeCrossBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeCrossBulk: VolumeCrossBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeCrossBulkSvg}></AntdIcon>;
};

VolumeCrossBulk.displayName = 'VolumeCrossBulk';
VolumeCrossBulk.inheritAttrs = false;
export default VolumeCrossBulk;