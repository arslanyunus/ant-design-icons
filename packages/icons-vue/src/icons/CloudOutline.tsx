// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudOutline: CloudOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudOutlineSvg}></AntdIcon>;
};

CloudOutline.displayName = 'CloudOutline';
CloudOutline.inheritAttrs = false;
export default CloudOutline;