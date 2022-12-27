// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSunnyBoldSvg from '@ant-design/icons-svg/lib/asn/CloudSunnyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSunnyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSunnyBold: CloudSunnyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSunnyBoldSvg}></AntdIcon>;
};

CloudSunnyBold.displayName = 'CloudSunnyBold';
CloudSunnyBold.inheritAttrs = false;
export default CloudSunnyBold;