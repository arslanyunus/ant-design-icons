// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudRemoveBroken: CloudRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudRemoveBrokenSvg}></AntdIcon>;
};

CloudRemoveBroken.displayName = 'CloudRemoveBroken';
CloudRemoveBroken.inheritAttrs = false;
export default CloudRemoveBroken;