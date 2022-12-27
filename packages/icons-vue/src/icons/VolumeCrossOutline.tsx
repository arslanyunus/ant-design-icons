// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeCrossOutlineSvg from '@ant-design/icons-svg/lib/asn/VolumeCrossOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeCrossOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeCrossOutline: VolumeCrossOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeCrossOutlineSvg}></AntdIcon>;
};

VolumeCrossOutline.displayName = 'VolumeCrossOutline';
VolumeCrossOutline.inheritAttrs = false;
export default VolumeCrossOutline;