// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudCrossOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudCrossOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudCrossOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudCrossOutline: CloudCrossOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudCrossOutlineSvg}></AntdIcon>;
};

CloudCrossOutline.displayName = 'CloudCrossOutline';
CloudCrossOutline.inheritAttrs = false;
export default CloudCrossOutline;