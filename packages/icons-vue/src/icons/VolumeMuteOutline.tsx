// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeMuteOutlineSvg from '@ant-design/icons-svg/lib/asn/VolumeMuteOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeMuteOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeMuteOutline: VolumeMuteOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeMuteOutlineSvg}></AntdIcon>;
};

VolumeMuteOutline.displayName = 'VolumeMuteOutline';
VolumeMuteOutline.inheritAttrs = false;
export default VolumeMuteOutline;