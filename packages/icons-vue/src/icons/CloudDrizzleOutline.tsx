// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudDrizzleOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudDrizzleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudDrizzleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudDrizzleOutline: CloudDrizzleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudDrizzleOutlineSvg}></AntdIcon>;
};

CloudDrizzleOutline.displayName = 'CloudDrizzleOutline';
CloudDrizzleOutline.inheritAttrs = false;
export default CloudDrizzleOutline;