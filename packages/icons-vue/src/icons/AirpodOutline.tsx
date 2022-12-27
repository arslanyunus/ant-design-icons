// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirpodOutlineSvg from '@ant-design/icons-svg/lib/asn/AirpodOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirpodOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirpodOutline: AirpodOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirpodOutlineSvg}></AntdIcon>;
};

AirpodOutline.displayName = 'AirpodOutline';
AirpodOutline.inheritAttrs = false;
export default AirpodOutline;