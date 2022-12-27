// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSunnyOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudSunnyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSunnyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSunnyOutline: CloudSunnyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSunnyOutlineSvg}></AntdIcon>;
};

CloudSunnyOutline.displayName = 'CloudSunnyOutline';
CloudSunnyOutline.inheritAttrs = false;
export default CloudSunnyOutline;