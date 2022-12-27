// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudChangeOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudChangeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudChangeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudChangeOutline: CloudChangeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudChangeOutlineSvg}></AntdIcon>;
};

CloudChangeOutline.displayName = 'CloudChangeOutline';
CloudChangeOutline.inheritAttrs = false;
export default CloudChangeOutline;