// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudAddOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudAddOutline: CloudAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudAddOutlineSvg}></AntdIcon>;
};

CloudAddOutline.displayName = 'CloudAddOutline';
CloudAddOutline.inheritAttrs = false;
export default CloudAddOutline;