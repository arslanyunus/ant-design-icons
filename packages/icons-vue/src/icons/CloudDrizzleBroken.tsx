// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudDrizzleBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudDrizzleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudDrizzleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudDrizzleBroken: CloudDrizzleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudDrizzleBrokenSvg}></AntdIcon>;
};

CloudDrizzleBroken.displayName = 'CloudDrizzleBroken';
CloudDrizzleBroken.inheritAttrs = false;
export default CloudDrizzleBroken;