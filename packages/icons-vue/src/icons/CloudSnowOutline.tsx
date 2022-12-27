// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSnowOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudSnowOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSnowOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSnowOutline: CloudSnowOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSnowOutlineSvg}></AntdIcon>;
};

CloudSnowOutline.displayName = 'CloudSnowOutline';
CloudSnowOutline.inheritAttrs = false;
export default CloudSnowOutline;