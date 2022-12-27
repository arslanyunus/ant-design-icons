// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudChangeBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudChangeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudChangeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudChangeBroken: CloudChangeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudChangeBrokenSvg}></AntdIcon>;
};

CloudChangeBroken.displayName = 'CloudChangeBroken';
CloudChangeBroken.inheritAttrs = false;
export default CloudChangeBroken;