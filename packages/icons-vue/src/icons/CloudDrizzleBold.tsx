// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudDrizzleBoldSvg from '@ant-design/icons-svg/lib/asn/CloudDrizzleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudDrizzleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudDrizzleBold: CloudDrizzleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudDrizzleBoldSvg}></AntdIcon>;
};

CloudDrizzleBold.displayName = 'CloudDrizzleBold';
CloudDrizzleBold.inheritAttrs = false;
export default CloudDrizzleBold;