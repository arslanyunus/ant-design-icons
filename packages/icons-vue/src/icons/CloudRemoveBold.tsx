// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/CloudRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudRemoveBold: CloudRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudRemoveBoldSvg}></AntdIcon>;
};

CloudRemoveBold.displayName = 'CloudRemoveBold';
CloudRemoveBold.inheritAttrs = false;
export default CloudRemoveBold;