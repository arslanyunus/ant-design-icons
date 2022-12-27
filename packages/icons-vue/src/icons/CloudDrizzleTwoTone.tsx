// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudDrizzleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudDrizzleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudDrizzleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudDrizzleTwoTone: CloudDrizzleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudDrizzleTwoToneSvg}></AntdIcon>;
};

CloudDrizzleTwoTone.displayName = 'CloudDrizzleTwoTone';
CloudDrizzleTwoTone.inheritAttrs = false;
export default CloudDrizzleTwoTone;