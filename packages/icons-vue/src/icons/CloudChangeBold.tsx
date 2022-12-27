// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudChangeBoldSvg from '@ant-design/icons-svg/lib/asn/CloudChangeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudChangeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudChangeBold: CloudChangeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudChangeBoldSvg}></AntdIcon>;
};

CloudChangeBold.displayName = 'CloudChangeBold';
CloudChangeBold.inheritAttrs = false;
export default CloudChangeBold;