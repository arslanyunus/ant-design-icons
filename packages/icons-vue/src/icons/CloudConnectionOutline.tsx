// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudConnectionOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudConnectionOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudConnectionOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudConnectionOutline: CloudConnectionOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudConnectionOutlineSvg}></AntdIcon>;
};

CloudConnectionOutline.displayName = 'CloudConnectionOutline';
CloudConnectionOutline.inheritAttrs = false;
export default CloudConnectionOutline;